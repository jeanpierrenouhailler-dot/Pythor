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
import { pcapFlashcardsData, pcapSyllabusSections } from './data/pcapData';
import { pcepStarterFlashcards, pcepSyllabusSections } from './data/pcepData';
import { AppView, CertificationTrack, Flashcard } from './types';
import { ShieldCheck, Settings, Sun, Moon, Globe } from 'lucide-react';

function AppContent() {
  const [currentView, setCurrentView] = useState<AppView>('dashboard');
  const [currentTrack, setCurrentTrack] = useState<CertificationTrack>(() => {
    try {
      const saved = localStorage.getItem('py_cert_track');
      if (saved === 'pcep' || saved === 'pcap') return saved;
    } catch {}
    return 'pcap';
  });
  const [selectedSection, setSelectedSection] = useState<string>('Section 1');
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCreateCardOpen, setIsCreateCardOpen] = useState<boolean>(false);
  const [reviewedCount, setReviewedCount] = useState<number>(0);

  // User-created flashcards with persistence
  const [userCards, setUserCards] = useState<Flashcard[]>(() => {
    try {
      const saved = localStorage.getItem('py_user_cards');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleAddCustomCard = (newCard: Flashcard) => {
    setUserCards((prev) => {
      const updated = [newCard, ...prev];
      try {
        localStorage.setItem('py_user_cards', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleDeleteCustomCard = (id: string) => {
    setUserCards((prev) => {
      const updated = prev.filter((c) => c.id !== id);
      try {
        localStorage.setItem('py_user_cards', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  // Active pool of cards based on currentTrack
  const activeCards = useMemo(() => {
    if (currentTrack === 'pcep') {
      const trackUserCards = userCards.filter((c) => c.track === 'pcep');
      return [...pcepStarterFlashcards, ...trackUserCards];
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
  };

  const { settings, isSettingsOpen, setIsSettingsOpen } = useSystemSettings();
  const { theme, toggleTheme, isDark } = useTheme();
  const { lang, setLang, toggleLang, t, isFrench } = useI18n();

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
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleNavigate = (view: AppView, section?: string, chapter?: string) => {
    setCurrentView(view);
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

  const currentSyllabus = currentTrack === 'pcep' ? pcepSyllabusSections : pcapSyllabusSections;

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

      {/* Top Navigation Bar with track switcher and Create Card */}
      <Navbar
        totalCards={activeCards.length}
        reviewedCount={reviewedCount}
        selectedSection={selectedSection}
        onSelectSection={setSelectedSection}
        currentView={currentView}
        onSelectView={(v) => {
          setCurrentView(v);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
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
          />
        )}
      </main>

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

      {/* Non-intrusive Update Notification Banner for background updates */}
      <UpdateNotificationBanner />

      {/* Universal Footer Exam Blueprint Bar */}
      <footer className="border-t border-slate-800/80 bg-slate-950/90 py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold text-slate-200">
              {currentTrack === 'pcep'
                ? 'PCEP-30-0x Certified Entry-Level Python Programmer'
                : 'PCAP-31-03 Certified Associate in Python Programming'}
            </span>
            <span className="text-slate-500">|</span>
            <span>Python Institute Official Alignment</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
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
  );
}

export function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <SystemSettingsProvider>
          <AppContent />
        </SystemSettingsProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;
