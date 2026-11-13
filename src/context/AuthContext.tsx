import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import {
  auth,
  googleProvider,
  signInWithPopup,
  firebaseSignOut,
  onAuthStateChanged,
  User,
} from '../lib/firebase';
import {
  syncUserProfile,
  saveUserCustomCard,
  saveUserSrsItem,
  syncUserSrsReset,
} from '../services/firestoreService';
import { Flashcard } from '../types';
import {
  CERTIFICATION_TRACKS,
  completePendingTrackReset,
  readAllTrackSrsStates,
  readPendingTrackResets,
  readTrackSrsGeneration,
  setSrsStorageUserId,
} from '../utils/srsStorage';
import { readUserCards } from '../utils/userCardsStorage';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  authError: string | null;
  clearAuthError: () => void;
  syncState: 'idle' | 'syncing' | 'synced' | 'error';
  syncLocalStorageToCloud: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const [syncState, setSyncState] = useState<'idle' | 'syncing' | 'synced' | 'error'>('idle');

  // Push local cards and SRS progress to Firestore on login
  const syncLocalStorageToCloud = useCallback(async (): Promise<boolean> => {
    if (!auth.currentUser) return false;
    const uid = auth.currentUser.uid;
    setSrsStorageUserId(uid);
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
      const localCards: Flashcard[] = readUserCards(uid);
      if (localCards.length > 0) {
        const results = await Promise.allSettled(localCards.map((card) => saveUserCustomCard(uid, card)));
        results.forEach((result) => {
          if (result.status === 'rejected') {
            syncHadErrors = true;
            console.warn('Could not sync a local custom card:', result.reason);
          }
        });
      }

      // Apply reset markers before uploading progress so stale remote data cannot return.
      const pendingResets = readPendingTrackResets();
      for (const track of CERTIFICATION_TRACKS) {
        const operation = pendingResets[track];
        if (!operation) continue;
        try {
          const generation = await syncUserSrsReset(uid, track, operation);
          completePendingTrackReset(track, operation.operationId, generation);
        } catch (err) {
          syncHadErrors = true;
          console.warn(`Could not sync the ${track} SRS reset:`, err);
        }
      }

      // 3. Sync local SRS state per certification to prevent cross-track ID collisions.
      try {
        const localSrs = readAllTrackSrsStates();
        const writes = CERTIFICATION_TRACKS.flatMap((track) =>
          Object.entries(localSrs[track]).map(([cardId, srsData]) =>
            saveUserSrsItem(uid, track, cardId, srsData, readTrackSrsGeneration(track)),
          ),
        );
        const results = await Promise.allSettled(writes);
        results.forEach((result) => {
          if (result.status === 'rejected') {
            syncHadErrors = true;
            console.warn('Could not sync a local SRS item:', result.reason);
          }
        });
      } catch (err) {
        syncHadErrors = true;
        console.warn('Could not sync local SRS state:', err);
      }

      setSyncState(syncHadErrors ? 'error' : 'synced');
      return !syncHadErrors;
    } catch (err: any) {
      console.error('Error syncing local storage to Firestore:', err);
      setSyncState('error');
      return false;
    }
  }, []);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setSrsStorageUserId(currentUser?.uid ?? null);
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
