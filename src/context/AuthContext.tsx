import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import {
  auth,
  googleProvider,
  signInWithPopup,
  firebaseSignOut,
  onAuthStateChanged,
  isFirebaseConfigured,
  User,
} from '../lib/firebase';
import { syncUserProfile, saveUserCustomCard, saveUserSrsItem } from '../services/firestoreService';
import { Flashcard } from '../types';
import { flattenTrackSrsStates, readAllTrackSrsStates } from '../utils/srsStorage';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isSigningIn: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  authError: string | null;
  clearAuthError: () => void;
  syncState: 'idle' | 'syncing' | 'synced' | 'error';
  syncLocalStorageToCloud: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function formatAuthErrorMessage(err: unknown): string {
  const code = typeof err === 'object' && err !== null && 'code' in err ? String((err as { code?: unknown }).code) : '';
  const message = err instanceof Error ? err.message : String(err || '');
  const isFrench = typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('fr');

  switch (code) {
    case 'auth/popup-closed-by-user':
      return isFrench
        ? 'La fenêtre de connexion Google a été fermée avant la fin. Veuillez réessayer.'
        : 'Sign-in window was closed before completing. Please try again.';
    case 'auth/popup-blocked':
      return isFrench
        ? 'Votre navigateur a bloqué la fenêtre de connexion Google. Autorisez les pop-ups pour ce site et réessayez.'
        : 'Your browser blocked the Google sign-in popup. Please allow popups for this site and try again.';
    case 'auth/unauthorized-domain': {
      const host = typeof window !== 'undefined' ? window.location.hostname : '';
      return isFrench
        ? `Le domaine « ${host} » n'est pas encore autorisé dans Firebase Authentication (Authorized domains).`
        : `Domain "${host}" is not listed in Firebase Authentication authorized domains.`;
    }
    case 'auth/operation-not-allowed':
      return isFrench
        ? 'La connexion Google n’est pas activée dans la console Firebase Authentication.'
        : 'Google sign-in provider is not enabled in Firebase Authentication.';
    case 'auth/api-key-not-valid':
    case 'auth/invalid-api-key':
      return isFrench
        ? 'La clé API Firebase configurée est invalide ou a été révoquée.'
        : 'Configured Firebase API key is invalid or revoked.';
    case 'auth/network-request-failed':
      return isFrench
        ? 'Impossible de contacter les serveurs Google/Firebase. Vérifiez votre connexion Internet.'
        : 'Network error while contacting Google/Firebase. Please check your connection.';
    default:
      return message || (isFrench ? 'Échec de l’authentification avec Google.' : 'Failed to authenticate with Google.');
  }
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [syncState, setSyncState] = useState<'idle' | 'syncing' | 'synced' | 'error'>('idle');

  // Push local cards and SRS progress to Firestore on login
  const syncLocalStorageToCloud = useCallback(async () => {
    if (!auth.currentUser || !isFirebaseConfigured) return;
    const uid = auth.currentUser.uid;
    setSyncState('syncing');
    let syncHadErrors = false;

    try {
      // 1. Sync User Profile
      await syncUserProfile(
        uid,
        auth.currentUser.email || '',
        auth.currentUser.displayName,
        auth.currentUser.photoURL
      );

      // 2. Sync Local Custom Flashcards
      try {
        const localCardsRaw = localStorage.getItem('py_user_cards');
        if (localCardsRaw) {
          const localCards: Flashcard[] = JSON.parse(localCardsRaw);
          if (Array.isArray(localCards) && localCards.length > 0) {
            const results = await Promise.allSettled(localCards.map((card) => saveUserCustomCard(uid, card)));
            results.forEach((result) => {
              if (result.status === 'rejected') {
                syncHadErrors = true;
                console.warn('Could not sync a local custom card:', result.reason);
              }
            });
          }
        }
      } catch (err) {
        syncHadErrors = true;
        console.warn('Could not sync local custom cards:', err);
      }

      // 3. Sync Local SRS State
      try {
        const localSrs = flattenTrackSrsStates(readAllTrackSrsStates());
        const entries = Object.entries(localSrs);
        if (entries.length > 0) {
          const results = await Promise.allSettled(
            entries.map(([cardId, srsData]) => saveUserSrsItem(uid, cardId, srsData)),
          );
          results.forEach((result) => {
            if (result.status === 'rejected') {
              syncHadErrors = true;
              console.warn('Could not sync a local SRS item:', result.reason);
            }
          });
        }
      } catch (err) {
        syncHadErrors = true;
        console.warn('Could not sync local SRS state:', err);
      }

      setSyncState(syncHadErrors ? 'error' : 'synced');
    } catch (err: any) {
      console.error('Error syncing local storage to Firestore:', err);
      setSyncState('error');
    }
  }, []);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        // Sync profile & local progress upon authenticated state
        void syncLocalStorageToCloud();
      } else {
        setSyncState('idle');
      }
    });

    return () => unsubscribe();
  }, [syncLocalStorageToCloud]);

  const signInWithGoogle = useCallback(async () => {
    setAuthError(null);

    if (!isFirebaseConfigured) {
      const isFrench = typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('fr');
      setAuthError(
        isFrench
          ? 'La synchronisation Google/Firebase n’est pas configurée sur cet environnement (variables VITE_FIREBASE_* manquantes).'
          : 'Google/Firebase Sign-In is not configured for this environment (missing VITE_FIREBASE_* variables).'
      );
      return;
    }

    setIsSigningIn(true);
    try {
      await signInWithPopup(auth, googleProvider);
      // Profile & cloud sync are triggered automatically by onAuthStateChanged
    } catch (err: any) {
      console.error('Sign-in error:', err);
      if (err?.code === 'auth/cancelled-popup-request') {
        // Ignore duplicate popup cancel
      } else {
        setAuthError(formatAuthErrorMessage(err));
      }
    } finally {
      setIsSigningIn(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    setAuthError(null);
    try {
      await firebaseSignOut(auth);
    } catch (err: any) {
      console.error('Sign-out error:', err);
      setAuthError(formatAuthErrorMessage(err));
    }
  }, []);

  const clearAuthError = useCallback(() => {
    setAuthError(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      isSigningIn,
      signInWithGoogle,
      signOut,
      authError,
      clearAuthError,
      syncState,
      syncLocalStorageToCloud,
    }),
    [user, loading, isSigningIn, signInWithGoogle, signOut, authError, clearAuthError, syncState, syncLocalStorageToCloud]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
