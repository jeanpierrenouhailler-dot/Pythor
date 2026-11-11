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
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { I18nProvider, useI18n } from './context/I18nContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import {
  saveUserCustomCard,
  deleteUserCustomCard,
  subscribeUserCustomCards,
  syncUserProfile,
} from './services/firestoreService';
import { LandingPageView } from './components/views/LandingPageView';
import { OnboardingLegalModal } from './components/onboarding/OnboardingLegalModal';
import { InstallPwaModal } from './components/common/InstallPwaModal';
import { NoviceModeProvider, useNoviceMode } from './context/NoviceModeContext';
import { AppView, CertificationTrack, Flashcard } from './types';
import { readTrackSrsState, writeTrackSrsState } from './utils/srsStorage';
import { ShieldCheck, Settings, Sun, Moon, Globe, HelpCircle, Download } from 'lucide-react';
import { getAppViewFromLocation, getAppViewUrl } from './navigation/routes';
import { CERTIFICATION_BY_ID, CERTIFICATION_IDS } from './data/certifications';
import { loadCertificationCards } from './data/certificationDataLoader';
import { AppNavigation } from './components/AppNavigation';

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
  const [reviewedCount, setReviewedCount] = useState<number>(0);
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
  const [userCards, setUserCards] = useState<Flashcard[]>(() => {
    try {
      const saved = localStorage.getItem('py_user_cards');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Real-time synchronization of custom flashcards from Firestore when logged in
  useEffect(() => {
    if (!user) return;
    const unsubscribe = subscribeUserCustomCards(user.uid, (cloudCards) => {
      if (Array.isArray(cloudCards)) {
        setUserCards(cloudCards);
        try {
          localStorage.setItem('py_user_cards', JSON.stringify(cloudCards));
        } catch {}
      }
    });
    return () => unsubscribe();
  }, [user]);

  const handleAddCustomCard = (newCard: Flashcard) => {
    setUserCards((prev) => {
      const updated = [newCard, ...prev.filter((c) => c.id !== newCard.id)];
      try {
        localStorage.setItem('py_user_cards', JSON.stringify(updated));
      } catch {}
      return updated;
    });

    if (user) {
      saveUserCustomCard(user.uid, newCard).catch((err) => {
        console.warn('Could not save card to Firestore:', err);
      });
    }
  };

  const handleDeleteCustomCard = (id: string) => {
    setUserCards((prev) => {
      const updated = prev.filter((c) => c.id !== id);
      try {
        localStorage.setItem('py_user_cards', JSON.stringify(updated));
      } catch {}
      return updated;
    });

    if (user) {
      deleteUserCustomCard(user.uid, id).catch((err) => {
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

  const { settings, isSettingsOpen, setIsSettingsOpen } = useSystemSettings();
  const { theme, toggleTheme, isDark } = useTheme();
  const { lang, setLang, toggleLang, t, isFrench } = useI18n();
  const {
    isOnboardingOpen,
    closeOnboarding,
    openOnboarding,
    isInstallModalOpen,
    closeInstallModal,
    openInstallModal,
    isNoviceMode,
    toggleNoviceMode,
    hasAcceptedLegal,
  } = useNoviceMode();

  // Trigger onboarding with mandatory legal disclaimer upon entering the application (never on the landing page)
  useEffect(() => {
    if (currentView !== 'landing' && !hasAcceptedLegal) {
      openOnboarding();
    }
  }, [currentView, hasAcceptedLegal, openOnboarding]);

  // Read SRS state count from the active certification storage bucket.
  const updateReviewedCount = (track: CertificationTrack = currentTrack) => {
    const parsed = readTrackSrsState(track);
    setReviewedCount(Object.keys(parsed).length);
  };

  useEffect(() => {
    updateReviewedCount(currentTrack);
    // Poll/listen to storage changes
    const handleStorage = () => updateReviewedCount(currentTrack);
    window.addEventListener('storage', handleStorage);
    window.addEventListener('pythor-study-activity', handleStorage);

    const handlePopState = () => {
      setCurrentView(getAppViewFromLocation(window.location));
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('pythor-study-activity', handleStorage);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [currentTrack]);

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

  const handleResetProgress = () => {
    writeTrackSrsState(currentTrack, {});
    localStorage.removeItem('pcap_srs_state');
    setReviewedCount(0);
    window.dispatchEvent(new Event('storage'));
  };

  const currentCertification = CERTIFICATION_BY_ID[currentTrack];
  const currentSyllabus = currentCertification.syllabus;

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
        totalCards={activeCards.length}
        reviewedCount={reviewedCount}
        onResetProgress={handleResetProgress}
        onOpenSettings={() => setIsSettingsOpen(true)}
        currentTrack={currentTrack}
        onSelectTrack={handleSelectTrack}
        onOpenCreateCard={handleOpenCreateCard}
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
          />
          <div className="py-app-workspace">
          {/* Top Navigation Bar with track switcher and Create Card */}
          <Navbar
            totalCards={activeCards.length}
            reviewedCount={reviewedCount}
            selectedSection={selectedSection}
            onSelectSection={setSelectedSection}
            currentView={currentView}
            onSelectView={(v) => handleNavigate(v)}
            onToggleMenu={() => setIsMenuOpen(true)}
            onOpenSettings={() => setIsSettingsOpen(true)}
            currentTrack={currentTrack}
            onSelectTrack={handleSelectTrack}
            onOpenCreateCard={handleOpenCreateCard}
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
                cards={activeCards}
                onNavigate={handleNavigate}
                currentTrack={currentTrack}
                onOpenCreateCard={handleOpenCreateCard}
              />
            )}

            {currentView === 'flashcards' && (
              <FlashcardsSrsView
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
                cards={activeCards}
                currentTrack={currentTrack}
                onNavigate={handleNavigate}
              />
            )}

            {currentView === 'statistics' && (
              <StatisticsView
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

          {/* Universal Footer Exam Blueprint Bar */}
          <footer className="hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span className="font-semibold text-slate-200">
                  {currentTrack === 'pcep'
                    ? 'PCEP-30-0x Certified Entry-Level Python Programmer'
                    : currentTrack === 'pcpp'
                    ? 'PCPP1-32-101 Certified Professional in Python Programming 1'
                    : currentTrack === 'pced'
                    ? 'PCED-30-02 Certified Entry-Level Data Analyst with Python'
                    : currentTrack === 'pcad'
                    ? 'PCAD-31-02 Certified Associate Data Analyst with Python'
                    : currentTrack === 'pcet'
                    ? 'PCET-30-01 Certified Entry-Level Tester with Python'
                    : currentTrack === 'pcat'
                    ? 'PCAT-31-0x Certified Associate Tester with Python'
                    : currentTrack === 'pces'
                    ? 'PCES-30-01 Certified Entry-Level Security Specialist with Python'
                    : currentTrack === 'pcea'
                    ? 'PCEA-30-01 Certified Entry-Level Automation Specialist with Python'
                    : currentTrack === 'pcei'
                    ? 'PCEI-30-01 Certified Entry-Level AI Specialist with Python'
                    : 'PCAP-31-03 Certified Associate in Python Programming'}
                </span>
                <span className="text-slate-500">|</span>
                <span>Python Institute Official Alignment</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => handleNavigate('landing')}
                  className="px-2.5 py-1 rounded-md text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-colors"
                  title="Voir la Landing Page de présentation"
                >
                  Landing Page
                </button>
                <span className="text-slate-600">•</span>
                <button
                  onClick={() => handleNavigate('dashboard')}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                    currentView === 'dashboard'
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Main Dashboard
                </button>
                <span className="text-slate-600">•</span>
                {currentSyllabus.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => handleNavigate('flashcards', `Section ${sec.number}`)}
                    className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-md transition-colors ${
                      currentView === 'flashcards' && selectedSection === `Section ${sec.number}`
                        ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className="font-mono font-medium">Sec {sec.number}</span>
                    <span className="text-[10px] text-slate-500">({sec.weight})</span>
                  </button>
                ))}
                <span className="text-slate-600">•</span>
                <button
                  onClick={openOnboarding}
                  className="flex items-center space-x-1 px-2.5 py-1 rounded-md text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors"
                  title="Consulter les mentions légales, la clause de non-responsabilité et le guide novice"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Mentions Légales & Guide</span>
                </button>
                <span className="text-slate-600">•</span>
                <button
                  onClick={openInstallModal}
                  className="flex items-center space-x-1 px-2.5 py-1 rounded-md text-emerald-300 hover:text-emerald-200 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors"
                  title="Installer Pythor sur smartphone ou ordinateur"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Installer l’App</span>
                </button>
                <span className="text-slate-600">•</span>
                <button
                  onClick={() => setIsSettingsOpen(true)}
                  className="flex items-center space-x-1 px-2.5 py-1 rounded-md text-slate-400 hover:text-cyan-300 hover:bg-slate-800/60 transition-colors"
                  title="Open System Settings & Updates"
                >
                  <Settings className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t.nav.settings} ({settings.currentVersion})</span>
                </button>
            <span className="text-slate-600">•</span>
            {/* Quick Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-slate-400 hover:text-cyan-300 hover:bg-slate-800/60 transition-colors"
              title={isFrench ? 'Switch to English' : 'Passer en Français'}
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-semibold">{isFrench ? 'FR' : 'EN'}</span>
            </button>
            <span className="text-slate-600">•</span>
            {/* Quick Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-slate-400 hover:text-cyan-300 hover:bg-slate-800/60 transition-colors"
              title={isDark ? t.nav.themeLight : t.nav.themeDark}
            >
              {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{isDark ? t.nav.light : t.nav.dark}</span>
            </button>
          </div>
        </div>
      </footer>
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
