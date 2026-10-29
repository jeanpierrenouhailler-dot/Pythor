import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HamburgerMenu } from './components/HamburgerMenu';
import { DashboardView } from './components/views/DashboardView';
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
import { pcapFlashcardsData, pcapSyllabusSections } from './data/pcapData';
import { pcepStarterFlashcards, pcepSyllabusSections } from './data/pcepData';
import { pcppStarterFlashcards, pcppSyllabusSections } from './data/pcppData';
import { pcedStarterFlashcards, pcedSyllabusSections } from './data/pcedData';
import { pcadStarterFlashcards, pcadSyllabusSections } from './data/pcadData';
import { pcetAllFlashcards, pcetSyllabusSections } from './data/pcetData';
import { pcatAllFlashcards, pcatSyllabusSections } from './data/pcatData';
import { pcesAllFlashcards, pcesSyllabusSections } from './data/pcesData';
import { pceaAllFlashcards, pceaSyllabusSections } from './data/pceaData';
import { pceiAllFlashcards, pceiSyllabusSections } from './data/pceiData';
import { LandingPageView } from './components/views/LandingPageView';
import { OnboardingLegalModal } from './components/onboarding/OnboardingLegalModal';
import { InstallPwaModal } from './components/common/InstallPwaModal';
import { NoviceModeProvider, useNoviceMode } from './context/NoviceModeContext';
import { AppView, CertificationTrack, Flashcard } from './types';
import { ShieldCheck, Settings, Sun, Moon, Globe, HelpCircle, Download } from 'lucide-react';

function AppContent() {
  const [currentView, setCurrentView] = useState<AppView>(() => {
    try {
      const search = new URLSearchParams(window.location.search);
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');

      if (search.get('view') === 'landing' || hash === '#landing' || path === '/landing') return 'landing';
      if (search.get('view') === 'dashboard' || hash === '#dashboard' || path === '/dashboard' || path === '/app') return 'dashboard';
      if (search.get('view') === 'flashcards' || hash === '#flashcards' || path === '/flashcards') return 'flashcards';
      if (search.get('view') === 'exam' || hash === '#exam' || path === '/exam') return 'exam';
      if (search.get('view') === 'cheatsheet' || hash === '#cheatsheet' || path === '/cheatsheet') return 'cheatsheet';
      if (search.get('view') === 'codelab' || hash === '#codelab' || path === '/codelab') return 'codelab';
    } catch {}
    return 'landing';
  });
  const [currentTrack, setCurrentTrack] = useState<CertificationTrack>(() => {
    try {
      const saved = localStorage.getItem('py_cert_track');
      if (saved === 'pcep' || saved === 'pcap' || saved === 'pcpp' || saved === 'pced' || saved === 'pcad' || saved === 'pcet' || saved === 'pcat' || saved === 'pces' || saved === 'pcea' || saved === 'pcei') return saved;
    } catch {}
    return 'pcap';
  });
  const [selectedSection, setSelectedSection] = useState<string>('Section 1');
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCreateCardOpen, setIsCreateCardOpen] = useState<boolean>(false);
  const [reviewedCount, setReviewedCount] = useState<number>(0);

  const { user } = useAuth();

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

  // Active pool of cards based on currentTrack
  const activeCards = useMemo(() => {
    if (currentTrack === 'pcep') {
      const trackUserCards = userCards.filter((c) => c.track === 'pcep');
      return [...pcepStarterFlashcards, ...trackUserCards];
    } else if (currentTrack === 'pcpp') {
      const trackUserCards = userCards.filter((c) => c.track === 'pcpp');
      return [...pcppStarterFlashcards, ...trackUserCards];
    } else if (currentTrack === 'pced') {
      const trackUserCards = userCards.filter((c) => c.track === 'pced');
      return [...pcedStarterFlashcards, ...trackUserCards];
    } else if (currentTrack === 'pcad') {
      const trackUserCards = userCards.filter((c) => c.track === 'pcad');
      return [...pcadStarterFlashcards, ...trackUserCards];
    } else if (currentTrack === 'pcet') {
      const trackUserCards = userCards.filter((c) => c.track === 'pcet');
      return [...pcetAllFlashcards, ...trackUserCards];
    } else if (currentTrack === 'pcat') {
      const trackUserCards = userCards.filter((c) => c.track === 'pcat');
      return [...pcatAllFlashcards, ...trackUserCards];
    } else if (currentTrack === 'pces') {
      const trackUserCards = userCards.filter((c) => c.track === 'pces');
      return [...pcesAllFlashcards, ...trackUserCards];
    } else if (currentTrack === 'pcea') {
      const trackUserCards = userCards.filter((c) => c.track === 'pcea');
      return [...pceaAllFlashcards, ...trackUserCards];
    } else if (currentTrack === 'pcei') {
      const trackUserCards = userCards.filter((c) => c.track === 'pcei');
      return [...pceiAllFlashcards, ...trackUserCards];
    } else {
      const trackUserCards = userCards.filter((c) => c.track === 'pcap' || !c.track);
      return [...pcapFlashcardsData, ...trackUserCards];
    }
  }, [currentTrack, userCards]);

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

  // Read SRS state count from localStorage
  const updateReviewedCount = () => {
    try {
      const saved = localStorage.getItem('pcap_srs_state');
      if (!saved) {
        setReviewedCount(0);
        return;
      }
      const parsed = JSON.parse(saved);
      setReviewedCount(Object.keys(parsed).length);
    } catch {
      setReviewedCount(0);
    }
  };

  useEffect(() => {
    updateReviewedCount();
    // Poll/listen to storage changes
    const handleStorage = () => updateReviewedCount();
    window.addEventListener('storage', handleStorage);

    const handlePopState = () => {
      try {
        const search = new URLSearchParams(window.location.search);
        const hash = window.location.hash.toLowerCase();
        const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');

        if (search.get('view') === 'dashboard' || hash === '#dashboard' || path === '/dashboard' || path === '/app') {
          setCurrentView('dashboard');
        } else if (search.get('view') === 'flashcards' || hash === '#flashcards' || path === '/flashcards') {
          setCurrentView('flashcards');
        } else if (search.get('view') === 'exam' || hash === '#exam' || path === '/exam') {
          setCurrentView('exam');
        } else if (search.get('view') === 'cheatsheet' || hash === '#cheatsheet' || path === '/cheatsheet') {
          setCurrentView('cheatsheet');
        } else if (search.get('view') === 'codelab' || hash === '#codelab' || path === '/codelab') {
          setCurrentView('codelab');
        } else {
          setCurrentView('landing');
        }
      } catch {}
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleNavigate = (view: AppView, section?: string, chapter?: string) => {
    setCurrentView(view);
    try {
      if (view === 'landing') {
        window.history.pushState({}, '', '/');
      } else {
        window.history.pushState({}, '', `/?view=${view}`);
      }
    } catch {}
    if (section) {
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
    localStorage.removeItem('pcap_srs_state');
    setReviewedCount(0);
    window.dispatchEvent(new Event('storage'));
  };

  const currentSyllabus =
    currentTrack === 'pcep'
      ? pcepSyllabusSections
      : currentTrack === 'pcpp'
      ? pcppSyllabusSections
      : currentTrack === 'pced'
      ? pcedSyllabusSections
      : currentTrack === 'pcad'
      ? pcadSyllabusSections
      : currentTrack === 'pcet'
      ? pcetSyllabusSections
      : currentTrack === 'pcat'
      ? pcatSyllabusSections
      : currentTrack === 'pces'
      ? pcesSyllabusSections
      : currentTrack === 'pcea'
      ? pceaSyllabusSections
      : currentTrack === 'pcei'
      ? pceiSyllabusSections
      : pcapSyllabusSections;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Universal Hamburger Drawer Menu */}
      <HamburgerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentView={currentView}
        onSelectView={(v) => {
          setCurrentView(v);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        selectedSection={selectedSection}
        onSelectSection={setSelectedSection}
        totalCards={activeCards.length}
        reviewedCount={reviewedCount}
        onResetProgress={handleResetProgress}
        onOpenSettings={() => setIsSettingsOpen(true)}
        currentTrack={currentTrack}
        onSelectTrack={handleSelectTrack}
        onOpenCreateCard={() => setIsCreateCardOpen(true)}
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
        <>
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
            onOpenCreateCard={() => setIsCreateCardOpen(true)}
          />

          {/* Main Viewport Content */}
          <main className="flex-1 py-4">
            {currentView === 'dashboard' && (
              <DashboardView
                cards={activeCards}
                onNavigate={handleNavigate}
                reviewedCount={reviewedCount}
                currentTrack={currentTrack}
                onSelectTrack={handleSelectTrack}
                onOpenCreateCard={() => setIsCreateCardOpen(true)}
                onDeleteCustomCard={handleDeleteCustomCard}
              />
            )}

            {currentView === 'flashcards' && (
              <FlashcardsSrsView
                cards={activeCards}
                selectedSection={selectedSection}
                onSelectSection={setSelectedSection}
                initialChapter={selectedChapter}
                currentTrack={currentTrack}
                onSelectTrack={handleSelectTrack}
                onOpenCreateCard={() => setIsCreateCardOpen(true)}
                onDeleteCard={handleDeleteCustomCard}
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
          </main>

          {/* Universal Footer Exam Blueprint Bar */}
          <footer className="border-t border-slate-800/80 bg-slate-950/90 py-6 text-xs text-slate-400">
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
        </>
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
        onClose={() => setIsCreateCardOpen(false)}
        onCardCreated={handleAddCustomCard}
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
