import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import {
  auth,
  googleProvider,
  signInWithPopup,
  firebaseSignOut,
  onAuthStateChanged,
  User,
} from '../lib/firebase';
import { syncUserProfile, saveUserCustomCard, saveUserSrsItem } from '../services/firestoreService';
import { Flashcard, CardSRSData } from '../types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  authError: string | null;
  clearAuthError: () => void;
  syncState: 'idle' | 'syncing' | 'synced' | 'error';
  syncLocalStorageToCloud: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const [syncState, setSyncState] = useState<'idle' | 'syncing' | 'synced' | 'error'>('idle');

  // Push local cards and SRS progress to Firestore on login
  const syncLocalStorageToCloud = useCallback(async () => {
    if (!auth.currentUser) return;
    const uid = auth.currentUser.uid;
    setSyncState('syncing');

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
            await Promise.allSettled(
              localCards.map((c) => saveUserCustomCard(uid, c))
            );
          }
        }
      } catch (err) {
        console.warn('Could not sync local custom cards:', err);
      }

      // 3. Sync Local SRS State
      try {
        const localSrsRaw = localStorage.getItem('pcap_srs_state');
        if (localSrsRaw) {
          const localSrs: Record<string, CardSRSData> = JSON.parse(localSrsRaw);
          const entries = Object.entries(localSrs);
          if (entries.length > 0) {
            await Promise.allSettled(
              entries.map(([cardId, srsData]) => saveUserSrsItem(uid, cardId, srsData))
            );
          }
        }
      } catch (err) {
        console.warn('Could not sync local SRS state:', err);
      }

      setSyncState('synced');
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
        syncLocalStorageToCloud().catch(() => {});
      } else {
        setSyncState('idle');
      }
    });

    return () => unsubscribe();
  }, [syncLocalStorageToCloud]);

  const signInWithGoogle = useCallback(async () => {
    setAuthError(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user) {
        await syncUserProfile(
          result.user.uid,
          result.user.email || '',
          result.user.displayName,
          result.user.photoURL
        );
      }
    } catch (err: any) {
      console.error('Sign-in error:', err);
      if (err.code === 'auth/popup-closed-by-user') {
        setAuthError('Sign-in window was closed. Please try again.');
      } else if (err.code === 'auth/cancelled-popup-request') {
        // Ignore duplicate popup cancel
      } else {
        setAuthError(err.message || 'Failed to authenticate with Google.');
      }
    }
  }, []);

  const signOut = useCallback(async () => {
    setAuthError(null);
    try {
      await firebaseSignOut(auth);
    } catch (err: any) {
      console.error('Sign-out error:', err);
      setAuthError(err.message || 'Failed to sign out.');
    }
  }, []);

  const clearAuthError = useCallback(() => {
    setAuthError(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      signInWithGoogle,
      signOut,
      authError,
      clearAuthError,
      syncState,
      syncLocalStorageToCloud,
    }),
    [user, loading, signInWithGoogle, signOut, authError, clearAuthError, syncState, syncLocalStorageToCloud]
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
