import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HamburgerMenu } from './components/HamburgerMenu';
import { DashboardOverview } from './components/views/DashboardOverview';
import { ProgramView } from './components/views/ProgramView';
import { StatisticsView } from './components/views/StatisticsView';
import { FlashcardsSrsView } from './components/views/FlashcardsSrsView';
import { ExamSimulatorView } from './components/views/ExamSimulatorView';
import { CheatsheetView } from './components/views/CheatsheetView';
import { CodeLabView } from './components/views/CodeLabView';
import { SystemSettingsModal } from './components/SystemSettingsModal';
import { CreateFlashcardModal } from './components/CreateFlashcardModal';
import { UpdateNotificationBanner } from './components/UpdateNotificationBanner';
import { SystemSettingsProvider, useSystemSettings } from './context/SystemSettingsContext';
import { ThemeProvider } from './context/ThemeContext';
import { I18nProvider, useI18n } from './context/I18nContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import {
  saveUserCustomCard,
  deleteUserCustomCard,
  subscribeUserCustomCards,
  syncUserProfile,
  syncUserSrsReset,
} from './services/firestoreService';
import { LandingPageView } from './components/views/LandingPageView';
import { OnboardingLegalModal } from './components/onboarding/OnboardingLegalModal';
import { InstallPwaModal } from './components/common/InstallPwaModal';
import { NoviceModeProvider, useNoviceMode } from './context/NoviceModeContext';
import { AppView, CertificationTrack, Flashcard } from './types';
import { completePendingTrackReset, resetTrackProgress } from './utils/srsStorage';
import { getAppViewFromLocation, getAppViewUrl } from './navigation/routes';
import { CERTIFICATION_IDS } from './data/certifications';
import { loadCertificationCards } from './data/certificationDataLoader';
import { AppNavigation } from './components/AppNavigation';
import { mergeUserCards, readUserCards, writeUserCards } from './utils/userCardsStorage';

function AppContent() {
  const [currentView, setCurrentView] = useState<AppView>(() => getAppViewFromLocation(window.location));
  const [currentTrack, setCurrentTrack] = useState<CertificationTrack>(() => {
    try {
      const saved = localStorage.getItem('py_cert_track');
      if (saved && CERTIFICATION_IDS.includes(saved as CertificationTrack)) return saved as CertificationTrack;
    } catch {}
    return 'pcap';
  });
  const [selectedSection, setSelectedSection] = useState<string>('Section 1');
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCreateCardOpen, setIsCreateCardOpen] = useState<boolean>(false);
  const [editingCard, setEditingCard] = useState<Flashcard | null>(null);
  const [loadedTrackCards, setLoadedTrackCards] = useState<{ track: CertificationTrack; cards: Flashcard[] } | null>(null);
  const [cardLoadError, setCardLoadError] = useState(false);
  const [cardLoadAttempt, setCardLoadAttempt] = useState(0);

  const { user } = useAuth();
  const needsCertificationCards = !['landing', 'cheatsheet', 'codelab'].includes(currentView);

  useEffect(() => {
    if (!needsCertificationCards) return;
    let active = true;
    setLoadedTrackCards(null);
    setCardLoadError(false);
    loadCertificationCards(currentTrack)
      .then((cards) => {
        if (active) setLoadedTrackCards({ track: currentTrack, cards });
      })
      .catch((error: unknown) => {
        console.error(`Could not load ${currentTrack} flashcards:`, error);
        if (active) setCardLoadError(true);
      });
    return () => {
      active = false;
    };
  }, [currentTrack, needsCertificationCards, cardLoadAttempt]);

  // User-created flashcards with persistence & Firestore Cloud Sync
  const [userCardsState, setUserCardsState] = useState<{
    userId: string | null;
    cards: Flashcard[];
  }>(() => ({ userId: null, cards: readUserCards() }));
  const userCardScope = user?.uid ?? null;
  const userCards = userCardsState.userId === userCardScope
    ? userCardsState.cards
    : readUserCards(userCardScope);

  useEffect(() => {
    setUserCardsState({ userId: userCardScope, cards: readUserCards(userCardScope) });
  }, [userCardScope]);

  // Real-time synchronization of custom flashcards from Firestore when logged in
  useEffect(() => {
    if (!user) return;
    const unsubscribe = subscribeUserCustomCards(user.uid, (cloudCards) => {
      if (Array.isArray(cloudCards)) {
        const mergedCards = mergeUserCards(readUserCards(user.uid), cloudCards);
        setUserCardsState({ userId: user.uid, cards: mergedCards });
        try {
          writeUserCards(mergedCards, user.uid);
        } catch {}
      }
    });
    return () => unsubscribe();
  }, [user]);

  const handleAddCustomCard = (newCard: Flashcard) => {
    setUserCardsState((previous) => {
      const prev = previous.userId === userCardScope ? previous.cards : readUserCards(userCardScope);
      const updated = [
        newCard,
        ...prev.filter((card) => card.id !== newCard.id || card.track !== newCard.track),
      ];
      try {
        writeUserCards(updated, user?.uid);
      } catch {}
      return { userId: userCardScope, cards: updated };
    });

    if (user) {
      saveUserCustomCard(user.uid, newCard).catch((err) => {
        console.warn('Could not save card to Firestore:', err);
      });
    }
  };

  const handleDeleteCustomCard = (id: string) => {
    setUserCardsState((previous) => {
      const prev = previous.userId === userCardScope ? previous.cards : readUserCards(userCardScope);
      const updated = prev.filter((card) => card.id !== id || card.track !== currentTrack);
      try {
        writeUserCards(updated, user?.uid);
      } catch {}
      return { userId: userCardScope, cards: updated };
    });

    if (user) {
      deleteUserCustomCard(user.uid, currentTrack, id).catch((err) => {
        console.warn('Could not delete card from Firestore:', err);
      });
    }
  };

  const handleOpenCreateCard = () => {
    setEditingCard(null);
    setIsCreateCardOpen(true);
  };

  const handleEditCustomCard = (card: Flashcard) => {
    setEditingCard(card);
    setIsCreateCardOpen(true);
  };

  // Active pool of cards based on currentTrack
  const activeCards = useMemo(() => {
    const trackUserCards = userCards.filter((card) =>
      currentTrack === 'pcap' ? card.track === 'pcap' || !card.track : card.track === currentTrack
    );
    const trackCards = loadedTrackCards?.track === currentTrack ? loadedTrackCards.cards : [];
    return [...trackCards, ...trackUserCards];
  }, [currentTrack, loadedTrackCards, userCards]);
  const hasCurrentTrackCards = loadedTrackCards?.track === currentTrack;

  const handleSelectTrack = (track: CertificationTrack) => {
    setCurrentTrack(track);
    try {
      localStorage.setItem('py_cert_track', track);
    } catch {}
    setSelectedSection('Section 1');
    setSelectedChapter('all');

    if (user) {
      syncUserProfile(user.uid, user.email || '', user.displayName, user.photoURL, track).catch(() => {});
    }
  };

  const { isSettingsOpen, setIsSettingsOpen } = useSystemSettings();
  const { isFrench } = useI18n();
  const {
    isOnboardingOpen,
    closeOnboarding,
    openOnboarding,
    isInstallModalOpen,
    closeInstallModal,
    hasAcceptedLegal,
  } = useNoviceMode();

  // Trigger onboarding with mandatory legal disclaimer upon entering the application (never on the landing page)
  useEffect(() => {
    if (currentView !== 'landing' && !hasAcceptedLegal) {
      openOnboarding();
    }
  }, [currentView, hasAcceptedLegal, openOnboarding]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(getAppViewFromLocation(window.location));
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleNavigate = (view: AppView, section?: string, chapter?: string) => {
    setCurrentView(view);
    try {
      window.history.pushState({}, '', getAppViewUrl(view));
    } catch {}
    if (view === 'review' || view === 'custom-cards') {
      setSelectedSection('all');
    } else if (section) {
      setSelectedSection(section);
    }
    if (chapter) {
      setSelectedChapter(chapter);
    } else {
      setSelectedChapter('all');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetProgress = async (): Promise<'local' | 'synced' | 'pending'> => {
    const track = currentTrack;
    const operation = resetTrackProgress(track, user?.uid);
    if (!operation || !user) return 'local';
    try {
      const generation = await syncUserSrsReset(user.uid, track, operation);
      completePendingTrackReset(track, operation.operationId, generation);
      return 'synced';
    } catch (error) {
      console.warn(`The ${track} SRS reset is pending cloud synchronization:`, error);
      return 'pending';
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Universal Hamburger Drawer Menu */}
      <HamburgerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentView={currentView}
        onSelectView={(v) => handleNavigate(v)}
        selectedSection={selectedSection}
        onSelectSection={setSelectedSection}
        onResetProgress={handleResetProgress}
        currentTrack={currentTrack}
        activeCards={activeCards}
      />

      {currentView === 'landing' ? (
        <LandingPageView
          onOpenApp={(view, track) => {
            if (track) handleSelectTrack(track);
            handleNavigate(view || 'dashboard');
          }}
          currentTrack={currentTrack}
          onSelectTrack={handleSelectTrack}
        />
      ) : (
        <div className="py-app-shell">
          <AppNavigation
            currentView={currentView}
            onNavigate={handleNavigate}
            onOpenMore={() => setIsMenuOpen(true)}
            isMoreOpen={isMenuOpen}
          />
          <div className="py-app-workspace">
          <Navbar
            onNavigate={(view) => handleNavigate(view)}
            onOpenSettings={() => setIsSettingsOpen(true)}
            currentTrack={currentTrack}
            onSelectTrack={handleSelectTrack}
          />

          {/* Main Viewport Content */}
          <main className="flex-1 py-4">
            {needsCertificationCards && !hasCurrentTrackCards && !cardLoadError && (
              <div role="status" aria-live="polite" className="py-16 text-center text-[var(--py-color-text-muted)]">
                {isFrench ? 'Chargement du programme…' : 'Loading certification content…'}
              </div>
            )}
            {needsCertificationCards && cardLoadError && (
              <div role="alert" className="mx-auto max-w-xl rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-center">
                <p className="text-red-200">
                  {isFrench ? 'Impossible de charger les cartes de cette certification.' : 'Could not load this certification’s flashcards.'}
                </p>
                <button
                  type="button"
                  className="py-button py-button--secondary mt-4"
                  onClick={() => setCardLoadAttempt((attempt) => attempt + 1)}
                >
                  {isFrench ? 'Réessayer' : 'Retry'}
                </button>
              </div>
            )}
            {(!needsCertificationCards || (hasCurrentTrackCards && !cardLoadError)) && (
              <>
            {currentView === 'dashboard' && (
              <DashboardOverview
                key={`${user?.uid ?? 'guest'}:${currentTrack}`}
                cards={activeCards}
                onNavigate={handleNavigate}
                currentTrack={currentTrack}
                onOpenCreateCard={handleOpenCreateCard}
              />
            )}

            {currentView === 'flashcards' && (
              <FlashcardsSrsView
                key={`${user?.uid ?? 'guest'}:${currentTrack}:flashcards`}
                cards={activeCards}
                selectedSection={selectedSection}
                onSelectSection={setSelectedSection}
                initialChapter={selectedChapter}
                currentTrack={currentTrack}
                onOpenCreateCard={handleOpenCreateCard}
                onDeleteCard={handleDeleteCustomCard}
                onEditCard={handleEditCustomCard}
              />
            )}

            {currentView === 'review' && (
              <FlashcardsSrsView
                key={`${user?.uid ?? 'guest'}:${currentTrack}:review`}
                cards={activeCards}
                selectedSection="all"
                onSelectSection={setSelectedSection}
                initialChapter={selectedChapter}
                currentTrack={currentTrack}
                onOpenCreateCard={handleOpenCreateCard}
                onDeleteCard={handleDeleteCustomCard}
                onEditCard={handleEditCustomCard}
                dueOnly
              />
            )}

            {currentView === 'custom-cards' && (
              <FlashcardsSrsView
                key={`${user?.uid ?? 'guest'}:${currentTrack}:custom`}
                cards={activeCards}
                selectedSection="all"
                onSelectSection={setSelectedSection}
                currentTrack={currentTrack}
                onOpenCreateCard={handleOpenCreateCard}
                onDeleteCard={handleDeleteCustomCard}
                onEditCard={handleEditCustomCard}
                customOnly
              />
            )}

            {currentView === 'syllabus' && (
              <ProgramView
                key={`${user?.uid ?? 'guest'}:${currentTrack}`}
                cards={activeCards}
                currentTrack={currentTrack}
                onNavigate={handleNavigate}
              />
            )}

            {currentView === 'statistics' && (
              <StatisticsView
                key={`${user?.uid ?? 'guest'}:${currentTrack}`}
                cards={activeCards}
                customCards={userCards}
                currentTrack={currentTrack}
                onNavigate={handleNavigate}
              />
            )}

            {currentView === 'exam' && (
              <ExamSimulatorView
                cards={activeCards}
                onNavigate={handleNavigate}
                currentTrack={currentTrack}
              />
            )}

            {currentView === 'cheatsheet' && (
              <CheatsheetView
                onNavigate={handleNavigate}
              />
            )}

            {currentView === 'codelab' && (
              <CodeLabView
                onNavigate={handleNavigate}
                currentTrack={currentTrack}
              />
            )}
              </>
            )}
          </main>

        </div>
      </div>
      )}

      {/* Onboarding & Legal Disclaimer Modal - only rendered when inside the application */}
      {currentView !== 'landing' && (
        <OnboardingLegalModal
          isOpen={isOnboardingOpen}
          onClose={closeOnboarding}
        />
      )}

      {/* PWA Installation Illustrated Guide Modal */}
      <InstallPwaModal
        isOpen={isInstallModalOpen}
        onClose={closeInstallModal}
      />

      {/* Create Flashcard Modal */}
      <CreateFlashcardModal
        isOpen={isCreateCardOpen}
        onClose={() => {
          setIsCreateCardOpen(false);
          setEditingCard(null);
        }}
        onCardCreated={handleAddCustomCard}
        editingCard={editingCard}
        defaultTrack={currentTrack}
        defaultSection={selectedSection}
      />

      {/* System Settings & Updates Modal */}
      <SystemSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

      {/* Non-intrusive Update Notification Banner - only when active inside the application */}
      {currentView !== 'landing' && <UpdateNotificationBanner />}
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <AuthProvider>
          <SystemSettingsProvider>
            <NoviceModeProvider>
              <AppContent />
            </NoviceModeProvider>
          </SystemSettingsProvider>
        </AuthProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;
