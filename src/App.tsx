import { useState, useEffect } from 'react';
import { ViewType, UserProfile, CodingChallenge, TrackId } from './types';
import {
  currentUser as initialUser,
  defaultChallenge,
  pcepModulesData,
  pcepFlashcardsData,
  pcapModulesData,
  pcapFlashcardsData,
  pcapChallengesData,
  allChallenges,
  dailyQuestsData,
  realProjectsData,
  recentSubmissionsData,
  leaderboardUsersData,
} from './data/mockData';
import { Navbar } from './components/Navbar';
import { CommandPalette } from './components/CommandPalette';
import { NotificationsModal } from './components/NotificationsModal';
import { IdeStudioView } from './components/views/IdeStudioView';
import { ParcoursView } from './components/views/ParcoursView';
import { FlashcardsSrsView } from './components/views/FlashcardsSrsView';
import { DashboardView } from './components/views/DashboardView';
import { PcepExamView } from './components/views/PcepExamView';

export default function App() {
  const [activeTrack, setActiveTrack] = useState<TrackId>('pcap-31-03');
  const [currentView, setCurrentView] = useState<ViewType>('parcours');
  const [history, setHistory] = useState<ViewType[]>([]);
  const [user, setUser] = useState<UserProfile>({
    ...initialUser,
    levelTitle: 'PCAP-31-03 Candidate (Lvl 5)',
  });
  const [activeChallenge, setActiveChallenge] = useState<CodingChallenge>(
    pcapChallengesData['pcap-challenge-4-2'] || defaultChallenge
  );
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);

  // Active track datasets
  const isPcap = activeTrack === 'pcap-31-03';
  const activeModules = isPcap ? pcapModulesData : pcepModulesData;
  const activeFlashcards = isPcap ? pcapFlashcardsData : pcepFlashcardsData;

  const viewTitles: Record<ViewType, string> = {
    'dashboard': 'Dashboard',
    'parcours': 'Learning Path',
    'ide-studio': 'IDE Studio',
    'pcep-exam': isPcap ? 'PCAP Exam' : 'PCEP Exam',
    'flashcards-srs': 'SRS Flashcards',
  };

  const handleNavigate = (nextView: ViewType) => {
    if (nextView === currentView) return;
    setHistory((prev) => [...prev, currentView]);
    setCurrentView(nextView);
  };

  const handleNavigateBack = () => {
    if (history.length > 0) {
      const nextHistory = [...history];
      const previous = nextHistory.pop()!;
      setHistory(nextHistory);
      setCurrentView(previous);
    } else {
      // Sensible fallback depending on current screen
      const fallback: ViewType = currentView === 'parcours' ? 'dashboard' : 'parcours';
      setCurrentView(fallback);
    }
  };

  // Keyboard shortcut Alt+ArrowLeft for Return navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'ArrowLeft') {
        e.preventDefault();
        handleNavigateBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [history, currentView]);

  const previousView: ViewType | undefined =
    history.length > 0
      ? history[history.length - 1]
      : currentView !== 'parcours'
      ? 'parcours'
      : 'dashboard';

  const previousViewTitle = previousView ? viewTitles[previousView] : 'Previous';

  const handleUpdateXp = (delta: number) => {
    setUser((prev) => {
      const newTotal = Math.max(0, prev.totalXp + delta);
      const newWeekly = Math.max(0, prev.weeklyXp + delta);
      return {
        ...prev,
        totalXp: newTotal,
        weeklyXp: newWeekly,
      };
    });
  };

  const handleLaunchChallenge = (challengeId?: string) => {
    if (challengeId && allChallenges[challengeId]) {
      setActiveChallenge(allChallenges[challengeId]);
    }
    if (currentView !== 'ide-studio') {
      setHistory((prev) => [...prev, currentView]);
    }
    setCurrentView('ide-studio');
  };

  const handleSelectTrack = (track: TrackId) => {
    setActiveTrack(track);
    setUser((prev) => ({
      ...prev,
      levelTitle:
        track === 'pcap-31-03'
          ? 'PCAP-31-03 Candidate (Lvl 5)'
          : 'PCEP-30-02 Candidate (Lvl 5)',
    }));
  };

  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] text-[#F5F5F5] font-sans antialiased selection:bg-blue-600/30 selection:text-blue-300">
      {/* Top Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onNavigateBack={handleNavigateBack}
        previousViewTitle={previousViewTitle}
        user={user}
        activeTrack={activeTrack}
        onSelectTrack={handleSelectTrack}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenNotifications={() => {
          setIsNotificationsOpen(true);
          setHasUnreadNotifications(false);
        }}
        hasUnreadNotifications={hasUnreadNotifications}
      />

      {/* Main View Container (with offset for 64px fixed header) */}
      <div className="pt-16 min-h-[calc(100vh-4rem)]">
        {currentView === 'ide-studio' && (
          <IdeStudioView
            challenge={activeChallenge}
            user={user}
            onUpdateXp={handleUpdateXp}
            onNavigateParcours={() => handleNavigate('parcours')}
            onNavigateBack={handleNavigateBack}
            previousViewTitle={previousViewTitle}
          />
        )}

        {currentView === 'parcours' && (
          <ParcoursView
            modules={activeModules}
            activeTrack={activeTrack}
            onSelectTrack={handleSelectTrack}
            onLaunchChallenge={handleLaunchChallenge}
            onNavigateExam={() => handleNavigate('pcep-exam')}
            onNavigateBack={handleNavigateBack}
            previousViewTitle={previousViewTitle}
          />
        )}

        {currentView === 'pcep-exam' && (
          <PcepExamView
            user={user}
            modules={activeModules}
            activeTrack={activeTrack}
            onSelectTrack={handleSelectTrack}
            onLaunchChallenge={handleLaunchChallenge}
            onUpdateXp={handleUpdateXp}
            onNavigateParcours={() => handleNavigate('parcours')}
            onNavigateBack={handleNavigateBack}
            previousViewTitle={previousViewTitle}
          />
        )}

        {currentView === 'flashcards-srs' && (
          <FlashcardsSrsView
            cards={activeFlashcards}
            user={user}
            activeTrack={activeTrack}
            onSelectTrack={handleSelectTrack}
            onNavigateParcours={() => handleNavigate('parcours')}
            onNavigateBack={handleNavigateBack}
            previousViewTitle={previousViewTitle}
            onUpdateXp={handleUpdateXp}
          />
        )}

        {currentView === 'dashboard' && (
          <DashboardView
            user={user}
            quests={dailyQuestsData}
            projects={realProjectsData}
            submissions={recentSubmissionsData}
            leaderboard={leaderboardUsersData}
            activeTrack={activeTrack}
            onSelectTrack={handleSelectTrack}
            onOpenChallenge={handleLaunchChallenge}
            onOpenParcours={() => handleNavigate('parcours')}
            onOpenSrs={() => handleNavigate('flashcards-srs')}
            onOpenPcepExam={() => handleNavigate('pcep-exam')}
            onNavigateBack={handleNavigateBack}
            previousViewTitle={previousViewTitle}
          />
        )}
      </div>

      {/* Global Command Palette (⌘K) */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectView={handleNavigate}
        onSelectChallenge={handleLaunchChallenge}
        onNavigateBack={handleNavigateBack}
        previousViewTitle={previousViewTitle}
      />

      {/* Notifications Modal */}
      <NotificationsModal
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
