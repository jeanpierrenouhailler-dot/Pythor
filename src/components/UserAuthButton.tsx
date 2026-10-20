import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useI18n } from '../context/I18nContext';
import {
  Cloud,
  CheckCircle2,
  RefreshCw,
  LogOut,
  User as UserIcon,
  ShieldCheck,
  Sparkles,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

export const UserAuthButton: React.FC = () => {
  const {
    user,
    loading,
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
      <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 text-xs animate-pulse">
        <RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-400" />
        <span className="hidden sm:inline">{isFrench ? 'Connexion...' : 'Loading...'}</span>
      </div>
    );
  }

  // Not Logged In State: Sign In with Google Button
  if (!user) {
    return (
      <div className="relative">
        <button
          onClick={signInWithGoogle}
          className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600/20 to-cyan-500/20 hover:from-blue-600/30 hover:to-cyan-500/30 border border-cyan-500/40 text-cyan-300 hover:text-white font-semibold text-xs transition-all shadow-xs group"
          title={isFrench ? 'Se connecter avec Google pour synchroniser vos données dans le Cloud' : 'Sign in with Google to synchronize your flashcards and SRS progress to Firestore'}
        >
          {/* Google "G" Icon */}
          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
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
          <span className="hidden sm:inline">
            {isFrench ? 'Connexion Google' : 'Sign in'}
          </span>
          <span className="inline sm:hidden">
            {isFrench ? 'Google' : 'Sign in'}
          </span>
        </button>

        {authError && (
          <div className="absolute right-0 top-full mt-2 w-72 p-3 bg-red-950/90 border border-red-500/50 rounded-xl text-red-200 text-xs shadow-xl z-50 flex items-start space-x-2">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p>{authError}</p>
              <button
                onClick={clearAuthError}
                className="mt-1 text-[11px] font-semibold text-red-300 hover:text-white underline"
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
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-1 sm:px-2.5 sm:py-1 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 group shadow-xs"
        aria-label="User Account and Cloud Sync Menu"
      >
        {/* User Avatar with Cloud Status Dot */}
        <div className="relative">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName || 'User'}
              className="w-7 h-7 rounded-lg object-cover ring-1 ring-cyan-500/40"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white text-xs font-bold ring-1 ring-cyan-500/40">
              {userInitials}
            </div>
          )}

          {/* Cloud Sync Status Indicator */}
          <span
            className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full ring-2 ring-slate-950 ${
              syncState === 'syncing' || isManualSyncing
                ? 'bg-amber-400 animate-spin'
                : syncState === 'error'
                ? 'bg-red-400'
                : 'bg-emerald-400'
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
          <span className="text-xs font-semibold text-slate-200 group-hover:text-white line-clamp-1 max-w-[110px]">
            {user.displayName?.split(' ')[0] || user.email?.split('@')[0]}
          </span>
          <span className="text-[10px] text-emerald-400 mt-0.5 flex items-center space-x-1">
            <span>Cloud Sync</span>
          </span>
        </div>
      </button>

      {/* User Account Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-72 bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          {/* Header Info */}
          <div className="flex items-center space-x-3 pb-3 border-b border-slate-800">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || 'User'}
                className="w-10 h-10 rounded-xl object-cover ring-1 ring-cyan-500/50"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white text-sm font-bold ring-1 ring-cyan-500/50">
                {userInitials}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">
                {user.displayName || 'Python Candidate'}
              </p>
              <p className="text-xs text-slate-400 truncate">{user.email}</p>
            </div>
          </div>

          {/* Cloud Sync Status Card */}
          <div className="my-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Cloud className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold text-slate-200">
                  Firebase Cloud Firestore
                </span>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Active
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
              {isFrench
                ? 'Vos cartes personnalisées, historique d’examen et état SRS sont sauvegardés et synchronisés en temps réel.'
                : 'Custom cards, SRS mastery intervals, and exam attempts are backed up securely in real-time.'}
            </p>

            <button
              onClick={handleManualSync}
              disabled={isManualSyncing}
              className="mt-2.5 w-full flex items-center justify-center space-x-1.5 py-1.5 px-3 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 text-xs font-semibold transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isManualSyncing ? 'animate-spin' : ''}`} />
              <span>{isFrench ? 'Synchroniser maintenant' : 'Sync to Cloud Now'}</span>
            </button>
          </div>

          {/* Sign Out Button */}
          <button
            onClick={() => {
              setIsOpen(false);
              signOut();
            }}
            className="w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-semibold transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{isFrench ? 'Se déconnecter' : 'Sign Out'}</span>
          </button>
        </div>
      )}
    </div>
  );
};
