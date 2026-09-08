import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HamburgerMenu } from './components/HamburgerMenu';
import { DashboardView } from './components/views/DashboardView';
import { FlashcardsSrsView } from './components/views/FlashcardsSrsView';
import { ExamSimulatorView } from './components/views/ExamSimulatorView';
import { CheatsheetView } from './components/views/CheatsheetView';
import { CodeLabView } from './components/views/CodeLabView';
import { SystemSettingsModal } from './components/SystemSettingsModal';
import { UpdateNotificationBanner } from './components/UpdateNotificationBanner';
import { SystemSettingsProvider, useSystemSettings } from './context/SystemSettingsContext';
import { pcapFlashcardsData, pcapSyllabusSections } from './data/pcapData';
import { AppView } from './types';
import { ShieldCheck, Layers, LayoutDashboard, GraduationCap, BookMarked, Code2, Settings } from 'lucide-react';

function AppContent() {
  const [currentView, setCurrentView] = useState<AppView>('dashboard');
  const [selectedSection, setSelectedSection] = useState<string>('Section 4');
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [reviewedCount, setReviewedCount] = useState<number>(0);

  const { settings, isSettingsOpen, setIsSettingsOpen } = useSystemSettings();

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
    // Trigger custom event or force re-render
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Universal Hamburger Drawer Menu (Available on every page) */}
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
        totalCards={pcapFlashcardsData.length}
        reviewedCount={reviewedCount}
        onResetProgress={handleResetProgress}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Top Navigation Bar with persistent Hamburger trigger and System Settings */}
      <Navbar
        totalCards={pcapFlashcardsData.length}
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
      />

      {/* Main Viewport Content */}
      <main className="flex-1 py-4">
        {currentView === 'dashboard' && (
          <DashboardView
            cards={pcapFlashcardsData}
            onNavigate={handleNavigate}
            reviewedCount={reviewedCount}
          />
        )}

        {currentView === 'flashcards' && (
          <FlashcardsSrsView
            cards={pcapFlashcardsData}
            selectedSection={selectedSection}
            onSelectSection={setSelectedSection}
            initialChapter={selectedChapter}
          />
        )}

        {currentView === 'exam' && (
          <ExamSimulatorView
            cards={pcapFlashcardsData}
            onNavigate={handleNavigate}
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
              PCAP-31-03 Certified Associate in Python Programming
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
            {pcapSyllabusSections.map((sec) => (
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
              <span>Settings ({settings.currentVersion})</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function App() {
  return (
    <SystemSettingsProvider>
      <AppContent />
    </SystemSettingsProvider>
  );
}

export default App;
