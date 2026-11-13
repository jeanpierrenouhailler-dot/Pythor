import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useI18n } from '../context/I18nContext';
import {
  Cloud,
  RefreshCw,
  LogOut,
  AlertCircle,
} from 'lucide-react';

export const UserAuthButton: React.FC = () => {
  const {
    user,
    loading,
    isSigningIn,
    signInWithGoogle,
    signOut,
    authError,
    clearAuthError,
    syncState,
    syncLocalStorageToCloud,
  } = useAuth();
  const { isFrench } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [isManualSyncing, setIsManualSyncing] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleManualSync = async () => {
    setIsManualSyncing(true);
    await syncLocalStorageToCloud();
    setTimeout(() => setIsManualSyncing(false), 800);
  };

  if (loading) {
    return (
      <div className="flex h-10 items-center space-x-2 rounded-lg border border-[var(--py-color-border)] bg-[var(--py-color-surface)] px-3 text-xs text-[var(--py-color-text-muted)]">
        <RefreshCw className="h-3.5 w-3.5 animate-spin text-[var(--py-color-primary)]" />
        <span className="hidden md:inline">{isFrench ? 'Connexion...' : 'Loading...'}</span>
      </div>
    );
  }

  // Not Logged In State: Sign In with Google Button
  if (!user) {
    return (
      <div className="relative">
        <button
          type="button"
          onClick={() => void signInWithGoogle()}
          disabled={isSigningIn}
          className="inline-flex h-10 items-center space-x-2 rounded-lg border border-[var(--py-color-border)] bg-[var(--py-color-surface)] px-3 text-xs font-semibold text-[var(--py-color-text)] transition-colors hover:bg-[var(--py-color-surface-raised)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--py-color-focus)] disabled:opacity-60"
          title={
            isFrench
              ? 'Se connecter avec Google pour synchroniser vos données dans le Cloud'
              : 'Sign in with Google to synchronize your flashcards and SRS progress to Firestore'
          }
        >
          {/* Google "G" Icon */}
          <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span className="whitespace-nowrap">
            {isSigningIn
              ? (isFrench ? 'Connexion…' : 'Signing in…')
              : (isFrench ? 'Connexion Google' : 'Sign in')}
          </span>
        </button>

        {authError && (
          <div
            role="alert"
            className="absolute right-0 top-[calc(100%+0.5rem)] z-[var(--py-z-dropdown)] flex w-72 items-start space-x-2 rounded-xl border border-[var(--py-color-danger)]/50 bg-[var(--py-color-surface)] p-3 text-xs text-[var(--py-color-danger)] shadow-[var(--py-shadow-md)]"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <div className="flex-1">
              <p className="leading-relaxed">{authError}</p>
              <button
                type="button"
                onClick={clearAuthError}
                className="mt-1 text-[11px] font-semibold underline hover:opacity-80"
              >
                {isFrench ? 'Fermer' : 'Dismiss'}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Logged In State: User Avatar & Dropdown
  const userInitials =
    user.displayName
      ?.split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase() ||
    user.email?.[0].toUpperCase() ||
    'U';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 items-center space-x-2 rounded-lg border border-[var(--py-color-border)] bg-[var(--py-color-surface)] px-2.5 text-left transition-colors hover:bg-[var(--py-color-surface-raised)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--py-color-focus)]"
        aria-label={isFrench ? 'Compte et synchronisation Cloud' : 'User Account and Cloud Sync Menu'}
        aria-expanded={isOpen}
      >
        <div className="relative">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName || 'User'}
              className="h-7 w-7 rounded-md object-cover ring-1 ring-[var(--py-color-border)]"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--py-color-primary-strong)] text-xs font-bold text-white">
              {userInitials}
            </div>
          )}

          {/* Cloud Sync Status Indicator */}
          <span
            className={`absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full ring-2 ring-[var(--py-color-surface)] ${
              syncState === 'syncing' || isManualSyncing
                ? 'animate-spin bg-[var(--py-color-warning)]'
                : syncState === 'error'
                ? 'bg-[var(--py-color-danger)]'
                : 'bg-[var(--py-color-success)]'
            }`}
            title={
              syncState === 'syncing' || isManualSyncing
                ? (isFrench ? 'Synchronisation Cloud en cours' : 'Synchronizing with Firestore...')
                : syncState === 'error'
                ? (isFrench ? 'Erreur de synchronisation' : 'Sync error')
                : (isFrench ? 'Cloud Firestore Synchronisé' : 'Firestore Synced')
            }
          />
        </div>

        <div className="hidden lg:flex flex-col items-start leading-none text-left">
          <span className="max-w-[110px] truncate text-xs font-semibold text-[var(--py-color-text)]">
            {user.displayName?.split(' ')[0] || user.email?.split('@')[0]}
          </span>
          <span className="mt-0.5 text-[10px] text-[var(--py-color-success)]">
            {syncState === 'syncing' || isManualSyncing
              ? (isFrench ? 'Synchro…' : 'Syncing…')
              : syncState === 'error'
              ? (isFrench ? 'Hors-ligne' : 'Sync issue')
              : 'Cloud Sync'}
          </span>
        </div>
      </button>

      {/* User Account Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-[calc(100%+0.5rem)] z-[var(--py-z-dropdown)] w-72 rounded-xl border border-[var(--py-color-border)] bg-[var(--py-color-surface)] p-4 text-[var(--py-color-text)] shadow-[var(--py-shadow-md)]">
          <div className="flex items-center space-x-3 border-b border-[var(--py-color-border)] pb-3">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || 'User'}
                className="h-10 w-10 rounded-lg object-cover ring-1 ring-[var(--py-color-border)]"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--py-color-primary-strong)] text-sm font-bold text-white">
                {userInitials}
              </div>
            )}
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-[var(--py-color-text)]">
                {user.displayName || 'Python Candidate'}
              </p>
              <p className="truncate text-xs text-[var(--py-color-text-muted)]">{user.email}</p>
            </div>
          </div>

          <div className="my-3 rounded-xl border border-[var(--py-color-border)] bg-[var(--py-color-surface-raised)] p-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Cloud className="h-4 w-4 text-[var(--py-color-primary)]" />
                <span className="text-xs font-semibold text-[var(--py-color-text)]">
                  Firebase Cloud Firestore
                </span>
              </div>
              <span className="inline-flex items-center rounded-full border border-[var(--py-color-success)]/30 bg-[var(--py-color-success)]/10 px-2 py-0.5 text-[10px] font-medium text-[var(--py-color-success)]">
                Active
              </span>
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-[var(--py-color-text-muted)]">
              {isFrench
                ? 'Vos cartes personnalisées, historique d’examen et état SRS sont sauvegardés et synchronisés en temps réel.'
                : 'Custom cards, SRS mastery intervals, and exam attempts are backed up securely in real-time.'}
            </p>

            <button
              type="button"
              onClick={handleManualSync}
              disabled={isManualSyncing}
              className="mt-2.5 flex w-full items-center justify-center space-x-1.5 rounded-lg border border-[var(--py-color-primary)]/30 bg-[var(--py-color-primary)]/15 px-3 py-1.5 text-xs font-semibold text-[var(--py-color-primary)] transition-colors hover:bg-[var(--py-color-primary)]/25 disabled:opacity-50"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${isManualSyncing ? 'animate-spin' : ''}`} />
              <span>{isFrench ? 'Synchroniser maintenant' : 'Sync to Cloud Now'}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              void signOut();
            }}
            className="flex w-full items-center justify-center space-x-2 rounded-lg border border-[var(--py-color-danger)]/30 bg-[var(--py-color-danger)]/10 px-3 py-2 text-xs font-semibold text-[var(--py-color-danger)] transition-colors hover:bg-[var(--py-color-danger)]/20"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>{isFrench ? 'Se déconnecter' : 'Sign Out'}</span>
          </button>
        </div>
      )}
    </div>
  );
};
