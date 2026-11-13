import React, { useEffect, useRef } from 'react';
import { AlertCircle, BookOpen, Cloud, LogOut, RotateCcw, X } from 'lucide-react';
import { AppView, CertificationTrack, Flashcard } from '../types';
import { useAuth } from '../context/AuthContext';
import { useI18n } from '../context/I18nContext';
import { CERTIFICATION_BY_ID } from '../data/certifications';
import { MENU_ROUTES } from '../navigation/routes';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentView: AppView;
  onSelectView: (view: AppView) => void;
  selectedSection: string;
  onSelectSection: (section: string) => void;
  onResetProgress: () => void;
  currentTrack: CertificationTrack;
  activeCards: Flashcard[];
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  onClose,
  currentView,
  onSelectView,
  selectedSection,
  onSelectSection,
  onResetProgress,
  currentTrack,
  activeCards,
}) => {
  const { user, isSigningIn, signInWithGoogle, signOut, authError, clearAuthError, syncState, syncLocalStorageToCloud } = useAuth();
  const { isFrench } = useI18n();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const certification = CERTIFICATION_BY_ID[currentTrack];

  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onCloseRef.current();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], [tabindex]:not([tabindex="-1"])'),
      ).filter((element) => element.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (previouslyFocused?.isConnected) previouslyFocused.focus();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const copy = isFrench
    ? {
        title: 'Outils complémentaires',
        close: 'Fermer le menu',
        destinations: 'Navigation',
        sections: 'Sections du programme',
        account: 'Compte et synchronisation',
        guest: 'Invité',
        signIn: 'Se connecter avec Google',
        signOut: 'Se déconnecter',
        sync: 'Synchroniser maintenant',
        synced: 'Synchronisé',
        syncing: 'Synchronisation…',
        syncError: 'Erreur de synchronisation',
        reset: 'Réinitialiser la progression SRS',
        confirmReset: 'Réinitialiser l’historique de répétition espacée de cette certification ?',
        study: 'Étudier',
        cards: 'cartes',
      }
    : {
        title: 'Additional tools',
        close: 'Close menu',
        destinations: 'Navigation',
        sections: 'Syllabus sections',
        account: 'Account and sync',
        guest: 'Guest',
        signIn: 'Sign in with Google',
        signOut: 'Sign out',
        sync: 'Sync now',
        synced: 'Synced',
        syncing: 'Syncing…',
        syncError: 'Sync error',
        reset: 'Reset SRS progress',
        confirmReset: 'Reset the spaced-repetition history for this certification?',
        study: 'Study',
        cards: 'cards',
      };

  const handleNavigate = (view: AppView, section?: string) => {
    onSelectView(view);
    if (section) onSelectSection(section);
    onClose();
  };

  const handleReset = () => {
    if (window.confirm(copy.confirmReset)) {
      onResetProgress();
      onClose();
    }
  };

  const syncStatus = syncState === 'synced'
    ? copy.synced
    : syncState === 'syncing'
      ? copy.syncing
      : syncState === 'error'
        ? copy.syncError
        : null;

  return (
    <div className="fixed inset-0 z-[var(--py-z-overlay)] flex" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/50"
        onClick={onClose}
        aria-label={copy.close}
        tabIndex={-1}
      />
      <div
        ref={dialogRef}
        className="relative ml-auto flex h-full w-full max-w-sm flex-col overflow-hidden border-l border-[var(--py-color-border)] bg-[var(--py-color-surface)] text-[var(--py-color-text)] shadow-[var(--py-shadow-md)] sm:ml-0 sm:mr-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pythor-secondary-menu-title"
      >
        <div className="flex items-center justify-between border-b border-[var(--py-color-border)] px-5 py-4">
          <h2 id="pythor-secondary-menu-title" className="text-base font-semibold">{copy.title}</h2>
          <button
            ref={closeButtonRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[var(--py-color-text-muted)] hover:bg-[var(--py-color-surface-raised)] hover:text-[var(--py-color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--py-color-focus)]"
            onClick={onClose}
            aria-label={copy.close}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto p-4">
          <nav className="max-[640px]:block min-[641px]:hidden" aria-label={copy.destinations}>
            <h3 className="mb-2 px-2 text-xs font-medium text-[var(--py-color-text-muted)]">{copy.destinations}</h3>
            <div className="space-y-1">
              {MENU_ROUTES.map(({ view, labelFr, labelEn, icon: RouteIcon }) => (
                <button
                  key={view}
                  type="button"
                  className={`flex min-h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--py-color-focus)] ${
                    currentView === view
                      ? 'bg-[var(--py-color-surface-raised)] text-[var(--py-color-primary)]'
                      : 'text-[var(--py-color-text)] hover:bg-[var(--py-color-surface-raised)]'
                  }`}
                  aria-current={currentView === view ? 'page' : undefined}
                  onClick={() => handleNavigate(view)}
                >
                  <RouteIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{isFrench ? labelFr : labelEn}</span>
                </button>
              ))}
            </div>
          </nav>

          <section aria-labelledby="secondary-menu-sections">
            <h3 id="secondary-menu-sections" className="mb-2 px-2 text-xs font-medium text-[var(--py-color-text-muted)]">
              {copy.sections} · {certification.info.code}
            </h3>
            <div className="space-y-1">
              {certification.syllabus.map((section) => {
                const sectionId = `Section ${section.number}`;
                const sectionCardCount = activeCards.filter((card) => card.section === sectionId).length;
                const isSelected = currentView === 'flashcards' && selectedSection === sectionId;
                return (
                  <button
                    key={section.id}
                    type="button"
                    className={`flex min-h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--py-color-focus)] ${
                      isSelected
                        ? 'bg-[var(--py-color-surface-raised)] text-[var(--py-color-primary)]'
                        : 'text-[var(--py-color-text)] hover:bg-[var(--py-color-surface-raised)]'
                    }`}
                    aria-current={isSelected ? 'page' : undefined}
                    onClick={() => handleNavigate('flashcards', sectionId)}
                  >
                    <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="min-w-0 flex-1 truncate">
                      {isFrench ? 'Section' : 'Section'} {section.number} · {section.title}
                    </span>
                    <span className="shrink-0 text-xs text-[var(--py-color-text-muted)]">
                      {sectionCardCount} {copy.cards}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          <section aria-labelledby="secondary-menu-account">
            <h3 id="secondary-menu-account" className="mb-2 px-2 text-xs font-medium text-[var(--py-color-text-muted)]">
              {copy.account}
            </h3>
            <div className="rounded-xl border border-[var(--py-color-border)] p-3">
              <div className="flex items-center gap-2 text-sm">
                <Cloud className="h-4 w-4 shrink-0 text-[var(--py-color-primary)]" aria-hidden="true" />
                <span className="min-w-0 flex-1 truncate">{user?.email ?? copy.guest}</span>
                {syncStatus && <span className="text-xs text-[var(--py-color-text-muted)]">{syncStatus}</span>}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {user ? (
                  <>
                    <button
                      type="button"
                      className="min-h-10 rounded-lg border border-[var(--py-color-border)] px-3 text-sm hover:bg-[var(--py-color-surface-raised)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--py-color-focus)]"
                      onClick={() => void syncLocalStorageToCloud()}
                      disabled={syncState === 'syncing'}
                    >
                      {copy.sync}
                    </button>
                    <button
                      type="button"
                      className="min-h-10 rounded-lg border border-[var(--py-color-border)] px-3 text-sm hover:bg-[var(--py-color-surface-raised)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--py-color-focus)]"
                      onClick={() => void signOut()}
                    >
                      <LogOut className="mr-1.5 inline h-4 w-4" aria-hidden="true" />
                      {copy.signOut}
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    className="min-h-10 rounded-lg border border-[var(--py-color-border)] px-3 text-sm hover:bg-[var(--py-color-surface-raised)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--py-color-focus)] disabled:opacity-60"
                    onClick={() => void signInWithGoogle()}
                    disabled={isSigningIn}
                  >
                    {isSigningIn ? (isFrench ? 'Connexion en cours…' : 'Signing in…') : copy.signIn}
                  </button>
                )}
              </div>
              {authError && (
                <div
                  role="alert"
                  className="mt-3 flex items-start gap-2 rounded-lg border border-[var(--py-color-danger)]/40 bg-[var(--py-color-danger)]/10 p-2.5 text-xs text-[var(--py-color-danger)]"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <div className="min-w-0 flex-1">
                    <p className="leading-relaxed">{authError}</p>
                    <button
                      type="button"
                      onClick={clearAuthError}
                      className="mt-1 font-semibold underline hover:opacity-80"
                    >
                      {isFrench ? 'Fermer' : 'Dismiss'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>

          <button
            type="button"
            className="flex min-h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm text-[var(--py-color-danger)] transition-colors hover:bg-[var(--py-color-surface-raised)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--py-color-focus)]"
            onClick={handleReset}
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            {copy.reset}
          </button>
        </div>
      </div>
    </div>
  );
};
