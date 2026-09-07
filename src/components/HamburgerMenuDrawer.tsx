import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ViewType, UserProfile, TrackId } from '../types';
import { PythorLogo } from './PythorLogo';
import { useTheme } from '../context/ThemeContext';
import { useI18n } from '../context/I18nContext';
import {
  X,
  Search,
  GraduationCap,
  Award,
  Code2,
  Terminal,
  Brain,
  LayoutDashboard,
  Bell,
  Sun,
  Moon,
  Languages,
  ArrowLeft,
  ChevronRight,
  Flame,
  Zap,
  Sparkles,
  Layers,
  BookOpen,
  CheckCircle2,
  Trophy,
  Filter,
} from 'lucide-react';

export interface HamburgerMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  onNavigateBack?: () => void;
  previousViewTitle?: string;
  user: UserProfile;
  activeTrack?: TrackId;
  onSelectTrack?: (track: TrackId) => void;
  onLaunchChallenge?: (challengeId?: string) => void;
  onOpenSearch: () => void;
  onOpenNotifications: () => void;
  hasUnreadNotifications?: boolean;
}

type CategoryId = 'all' | 'certifications' | 'coding' | 'srs' | 'analytics' | 'tools' | 'preferences';

interface FeatureItem {
  id: string;
  categoryId: CategoryId;
  title: string;
  subtitle: string;
  badge?: string;
  badgeColor?: 'gold' | 'blue' | 'emerald' | 'purple' | 'amber';
  icon: React.ComponentType<{ className?: string }>;
  view?: ViewType;
  action?: () => void;
  isViewActive?: boolean;
  quickTags?: string[];
  challengeId?: string;
}

export const HamburgerMenuDrawer: React.FC<HamburgerMenuDrawerProps> = ({
  isOpen,
  onClose,
  currentView,
  onNavigate,
  onNavigateBack,
  previousViewTitle,
  user,
  activeTrack = 'pcap-31-03',
  onSelectTrack,
  onLaunchChallenge,
  onOpenSearch,
  onOpenNotifications,
  hasUnreadNotifications = true,
}) => {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, toggleLang, t } = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');

  const isPcap = activeTrack === 'pcap-31-03';

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSearchQuery('');
      setSelectedCategory('all');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSelectView = (view: ViewType) => {
    onNavigate(view);
    onClose();
  };

  const handleLaunchChallengeItem = (challengeId: string) => {
    if (onLaunchChallenge) {
      onLaunchChallenge(challengeId);
    } else {
      onNavigate('ide-studio');
    }
    onClose();
  };

  // Categories definition
  const categories: { id: CategoryId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'all', label: t.menu.allCategories, icon: Layers },
    { id: 'certifications', label: t.menu.catCertifications, icon: GraduationCap },
    { id: 'coding', label: t.menu.catCoding, icon: Code2 },
    { id: 'srs', label: t.menu.catSrs, icon: Brain },
    { id: 'analytics', label: t.menu.catAnalytics, icon: LayoutDashboard },
    { id: 'tools', label: t.menu.catTools, icon: Sparkles },
    { id: 'preferences', label: t.menu.catPreferences, icon: Languages },
  ];

  // Feature items across all categories
  const featureItems: FeatureItem[] = useMemo(() => {
    return [
      // CATEGORY 1: CERTIFICATIONS
      {
        id: 'parcours-path',
        categoryId: 'certifications',
        title: t.nav.learningPath,
        subtitle: isPcap
          ? 'PCAP-31-03 syllabus: 4 modules, 32 chapters, object-oriented & advanced aggregates'
          : 'PCEP-30-02 syllabus: 4 sections, 30 chapters, syntax & core collections',
        badge: isPcap ? 'PCAP-31-03' : 'PCEP-30-02',
        badgeColor: isPcap ? 'blue' : 'gold',
        icon: BookOpen,
        view: 'parcours',
        isViewActive: currentView === 'parcours',
        quickTags: ['syllabus', 'parcours', 'curriculum', 'chapters', 'pcep', 'pcap'],
      },
      {
        id: 'exam-simulator',
        categoryId: 'certifications',
        title: isPcap ? t.nav.pcapCert : t.nav.pcepCert,
        subtitle: 'Official 45-min timed mock exam simulation with 30 questions and 70% passing grade',
        badge: '30 Qs • 45m',
        badgeColor: 'amber',
        icon: Award,
        view: 'pcep-exam',
        isViewActive: currentView === 'pcep-exam',
        quickTags: ['exam', 'test', 'simulation', 'timer', 'questions', 'score'],
      },
      {
        id: 'track-switch-pcap',
        categoryId: 'certifications',
        title: 'PCAP™ 31-03 Track (Associate)',
        subtitle: 'Advanced Python: OOP, inheritance, custom exceptions, bitwise ops & generators',
        badge: isPcap ? 'Active Track' : 'Switch',
        badgeColor: isPcap ? 'emerald' : 'blue',
        icon: GraduationCap,
        action: () => {
          if (onSelectTrack) onSelectTrack('pcap-31-03');
          onNavigate('parcours');
          onClose();
        },
        quickTags: ['pcap', 'associate', 'oop', 'exceptions', 'track'],
      },
      {
        id: 'track-switch-pcep',
        categoryId: 'certifications',
        title: 'PCEP™ 30-02 Track (Entry-Level)',
        subtitle: 'Foundational Python: types, control flow, loops, functions, lists & dicts',
        badge: !isPcap ? 'Active Track' : 'Switch',
        badgeColor: !isPcap ? 'emerald' : 'gold',
        icon: GraduationCap,
        action: () => {
          if (onSelectTrack) onSelectTrack('pcep-30-02');
          onNavigate('parcours');
          onClose();
        },
        quickTags: ['pcep', 'entry', 'basics', 'foundations', 'track'],
      },

      // CATEGORY 2: CODING & PRACTICE LABS
      {
        id: 'ide-studio-main',
        categoryId: 'coding',
        title: t.nav.ideStudio,
        subtitle: 'Interactive Python 3.12 browser IDE with multi-file workspace, unit tests & terminal',
        badge: 'Python 3.12',
        badgeColor: 'blue',
        icon: Code2,
        view: 'ide-studio',
        isViewActive: currentView === 'ide-studio',
        quickTags: ['ide', 'editor', 'code', 'python', 'runner', 'terminal', 'practice'],
      },
      {
        id: 'challenge-pcep-1-1',
        categoryId: 'coding',
        title: 'Lab: Variables & Type Casting',
        subtitle: 'PCEP 1.1: Integer casting, string concatenation, floating point division',
        badge: 'PCEP 1.1',
        badgeColor: 'gold',
        icon: Terminal,
        challengeId: 'challenge-pcep-1-1',
        action: () => handleLaunchChallengeItem('challenge-pcep-1-1'),
        quickTags: ['variables', 'types', 'float', 'int', 'casting', 'challenge'],
      },
      {
        id: 'challenge-pcep-2-3',
        categoryId: 'coding',
        title: 'Lab: Nested Loops & Matrix Aggregation',
        subtitle: 'PCEP 2.3: Iterating 2D arrays, break/continue conditions, matrix transposition',
        badge: 'PCEP 2.3',
        badgeColor: 'gold',
        icon: Terminal,
        challengeId: 'challenge-pcep-2-3',
        action: () => handleLaunchChallengeItem('challenge-pcep-2-3'),
        quickTags: ['loops', 'matrix', 'nested', 'for', 'while', 'challenge'],
      },
      {
        id: 'challenge-pcep-3-1',
        categoryId: 'coding',
        title: 'Lab: List Slicing & Mutations',
        subtitle: 'PCEP 3.1: Negative indexing, slice boundaries [start:stop:step], shallow copies',
        badge: 'PCEP 3.1',
        badgeColor: 'gold',
        icon: Terminal,
        challengeId: 'challenge-pcep-3-1',
        action: () => handleLaunchChallengeItem('challenge-pcep-3-1'),
        quickTags: ['slices', 'lists', 'mutations', 'arrays', 'challenge'],
      },
      {
        id: 'pcap-challenge-3-1',
        categoryId: 'coding',
        title: 'Lab: OOP Inheritance & Super()',
        subtitle: 'PCAP 3.1: Class hierarchies, super().__init__(), method resolution order (MRO)',
        badge: 'PCAP 3.1',
        badgeColor: 'blue',
        icon: Terminal,
        challengeId: 'pcap-challenge-3-1',
        action: () => handleLaunchChallengeItem('pcap-challenge-3-1'),
        quickTags: ['oop', 'classes', 'inheritance', 'super', 'mro', 'challenge'],
      },

      // CATEGORY 3: RETENTION & SPACED REPETITION
      {
        id: 'pcap-section3-flashcards-100',
        categoryId: 'srs',
        title: 'PCAP Section 3: 100 Flashcards',
        subtitle: 'Complete 100 interactive flashcards: Encodings, ord/chr, Slicing, Validation, Transformations & split/join',
        badge: '100 Cards',
        badgeColor: 'blue',
        icon: Brain,
        view: 'flashcards-srs',
        isViewActive: currentView === 'flashcards-srs',
        action: () => {
          if (onSelectTrack) onSelectTrack('pcap-31-03');
          handleSelectView('flashcards-srs');
        },
        quickTags: ['pcap', 'section 3', '100', 'flashcards', 'strings', 'ord', 'chr', 'slicing', 'split', 'join', 'methods'],
      },
      {
        id: 'pcap-section2-flashcards-100',
        categoryId: 'srs',
        title: 'PCAP Section 2: 100 Flashcards',
        subtitle: 'Complete 100 interactive flashcards: Exceptions hierarchy, Custom exceptions, raise/assert, args & else/finally',
        badge: '100 Cards',
        badgeColor: 'blue',
        icon: Brain,
        view: 'flashcards-srs',
        isViewActive: currentView === 'flashcards-srs',
        action: () => {
          if (onSelectTrack) onSelectTrack('pcap-31-03');
          handleSelectView('flashcards-srs');
        },
        quickTags: ['pcap', 'section 2', '100', 'flashcards', 'exceptions', 'raise', 'assert', 'args', 'else', 'finally'],
      },
      {
        id: 'pcap-section1-flashcards-100',
        categoryId: 'srs',
        title: 'PCAP Section 1: 100 Flashcards',
        subtitle: 'Complete 100 interactive flashcards covering Modules, Packages, math, random, platform & sys.path',
        badge: '100 Cards',
        badgeColor: 'blue',
        icon: Brain,
        view: 'flashcards-srs',
        isViewActive: currentView === 'flashcards-srs',
        action: () => {
          if (onSelectTrack) onSelectTrack('pcap-31-03');
          handleSelectView('flashcards-srs');
        },
        quickTags: ['pcap', 'section 1', '100', 'flashcards', 'modules', 'packages', 'math', 'random', 'platform'],
      },
      {
        id: 'flashcards-srs-main',
        categoryId: 'srs',
        title: t.nav.flashcards,
        subtitle: 'Leitner spaced repetition system with smart interval scheduling and mastery metrics',
        badge: '184 Mastered',
        badgeColor: 'emerald',
        icon: Brain,
        view: 'flashcards-srs',
        isViewActive: currentView === 'flashcards-srs',
        quickTags: ['flashcards', 'srs', 'spaced', 'repetition', 'memory', 'leitner'],
      },
      {
        id: 'stdout-prediction-mode',
        categoryId: 'srs',
        title: 'CPython STDOUT Predictor',
        subtitle: 'Examine Python snippets and predict the exact stdout console output before reveal',
        badge: 'Practice Mode',
        badgeColor: 'amber',
        icon: Sparkles,
        view: 'flashcards-srs',
        isViewActive: currentView === 'flashcards-srs',
        quickTags: ['stdout', 'predict', 'output', 'console', 'terminal', 'traps'],
      },

      // CATEGORY 4: ANALYTICS & PROGRESS
      {
        id: 'dashboard-main',
        categoryId: 'analytics',
        title: t.nav.dashboard,
        subtitle: 'Executive readiness cockpit: domain radar, weekly velocity & exam passing probability',
        badge: `${user.totalXp} XP`,
        badgeColor: 'gold',
        icon: LayoutDashboard,
        view: 'dashboard',
        isViewActive: currentView === 'dashboard',
        quickTags: ['dashboard', 'stats', 'analytics', 'readiness', 'progress', 'xp'],
      },
      {
        id: 'leaderboard-league',
        categoryId: 'analytics',
        title: 'Diamond League & Quests',
        subtitle: `Rank #${user.diamondLeagueRank} in Diamond League • ${user.streakDays}-day streak active`,
        badge: 'Rank #3',
        badgeColor: 'purple',
        icon: Trophy,
        view: 'dashboard',
        quickTags: ['league', 'diamond', 'leaderboard', 'quests', 'streak', 'rank'],
      },

      // CATEGORY 5: QUICK TOOLS & PALETTE
      {
        id: 'command-palette-tool',
        categoryId: 'tools',
        title: 'Command Palette & Quick Search',
        subtitle: 'Instant shortcut palette to jump to any chapter, question or coding lab (⌘K / Ctrl+K)',
        badge: '⌘K',
        badgeColor: 'blue',
        icon: Search,
        action: () => {
          onClose();
          onOpenSearch();
        },
        quickTags: ['search', 'command', 'palette', 'shortcut', 'find'],
      },
      {
        id: 'notifications-tool',
        categoryId: 'tools',
        title: t.nav.notifications,
        subtitle: 'System alerts, daily quest reminders, streak shield updates and milestone unlocks',
        badge: hasUnreadNotifications ? 'New' : undefined,
        badgeColor: 'gold',
        icon: Bell,
        action: () => {
          onClose();
          onOpenNotifications();
        },
        quickTags: ['notifications', 'alerts', 'reminders', 'bell'],
      },
      ...(onNavigateBack
        ? [
            {
              id: 'return-nav-tool',
              categoryId: 'tools' as CategoryId,
              title: t.nav.return,
              subtitle: previousViewTitle
                ? `${t.nav.returnTo} ${previousViewTitle} (Alt+←)`
                : 'Return to previous screen (Alt+←)',
              badge: 'Alt+←',
              badgeColor: 'blue' as const,
              icon: ArrowLeft,
              action: () => {
                onClose();
                onNavigateBack();
              },
              quickTags: ['return', 'back', 'previous', 'history'],
            },
          ]
        : []),

      // CATEGORY 6: PREFERENCES & SETTINGS
      {
        id: 'language-toggle-tool',
        categoryId: 'preferences',
        title: t.nav.language,
        subtitle: lang === 'en' ? 'Currently English • Switch to Français' : 'Actuellement Français • Passer en English',
        badge: lang.toUpperCase(),
        badgeColor: 'blue',
        icon: Languages,
        action: () => {
          toggleLang();
        },
        quickTags: ['language', 'langue', 'french', 'english', 'traduction'],
      },
      {
        id: 'theme-toggle-tool',
        categoryId: 'preferences',
        title: theme === 'dark' ? t.nav.themeLight : t.nav.themeDark,
        subtitle: theme === 'dark' ? 'Switch to high-contrast Light Theme' : 'Switch to eye-friendly Dark Theme',
        badge: theme.toUpperCase(),
        badgeColor: 'amber',
        icon: theme === 'dark' ? Sun : Moon,
        action: () => {
          toggleTheme();
        },
        quickTags: ['theme', 'dark', 'light', 'mode', 'appearance', 'couleur'],
      },
    ];
  }, [
    currentView,
    activeTrack,
    isPcap,
    user,
    hasUnreadNotifications,
    onNavigateBack,
    previousViewTitle,
    lang,
    theme,
    t,
  ]);

  // Filter items by category and search query
  const filteredItems = useMemo(() => {
    return featureItems.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.categoryId !== selectedCategory) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesSubtitle = item.subtitle.toLowerCase().includes(q);
        const matchesTags = item.quickTags?.some((tag) => tag.toLowerCase().includes(q));
        const matchesBadge = item.badge?.toLowerCase().includes(q);
        return matchesTitle || matchesSubtitle || matchesTags || matchesBadge;
      }
      return true;
    });
  }, [featureItems, selectedCategory, searchQuery]);

  // Group filtered items by category for structured display
  const groupedCategories = useMemo(() => {
    if (selectedCategory !== 'all') {
      const cat = categories.find((c) => c.id === selectedCategory);
      return cat
        ? [
            {
              category: cat,
              items: filteredItems,
            },
          ]
        : [];
    }

    return categories
      .filter((c) => c.id !== 'all')
      .map((cat) => ({
        category: cat,
        items: filteredItems.filter((item) => item.categoryId === cat.id),
      }))
      .filter((group) => group.items.length > 0);
  }, [categories, filteredItems, selectedCategory]);

  if (!isOpen) return null;

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      id="hamburger-menu-drawer-portal"
      className="fixed inset-0 z-[9999] flex justify-start animate-in fade-in duration-200"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over Drawer Panel */}
      <aside
        id="hamburger-menu-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Features Directory Menu"
        className="relative w-full max-w-[440px] sm:max-w-[500px] lg:max-w-[540px] h-[100dvh] h-screen max-h-screen bg-[#0D0D0D] border-r border-[#262626] shadow-2xl flex flex-col z-10 overflow-hidden text-[#F5F5F5] select-none animate-in slide-in-from-left duration-250"
      >
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 border-b border-[#262626] bg-[#141414] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <PythorLogo size={28} showText={true} versionBadge="v3.12 PRO" />
          </div>

          <div className="flex items-center gap-2">
            {/* ESC Pill Indicator */}
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono text-[#888888] bg-[#1E1E1E] border border-[#2E2E2E]">
              ESC
            </span>
            {/* Close Button */}
            <button
              onClick={onClose}
              id="hamburger-close-button"
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white bg-[#1A1A1A] hover:bg-[#262626] border border-[#2E2E2E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A059]/50"
              aria-label="Close menu"
              title="Close menu (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* User Status Bar & Quick Context */}
        <div className="px-4 py-3 bg-[#111111] border-b border-[#222222] flex items-center justify-between text-xs shrink-0">
          <div className="flex items-center gap-2.5">
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="w-8 h-8 rounded-full border border-[#333333] object-cover"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="font-semibold text-[#F5F5F5] leading-tight flex items-center gap-1.5">
                <span>{user.name}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-blue-950/70 border border-blue-800/40 text-blue-300">
                  Lvl {user.level}
                </span>
              </div>
              <div className="text-[11px] text-[#888888] font-mono">
                {isPcap ? 'Track: PCAP-31-03' : 'Track: PCEP-30-02'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Streak */}
            <div
              className="flex items-center gap-1 px-2 py-1 bg-[#1A1A1A] rounded border border-[#282828] text-[11px] font-mono text-[#DFC287]"
              title="Daily Active Streak"
            >
              <Flame className="w-3.5 h-3.5 text-[#FFAA33]" />
              <span>{user.streakDays}d</span>
            </div>
            {/* XP */}
            <div
              className="flex items-center gap-1 px-2 py-1 bg-[#1A1A1A] rounded border border-[#282828] text-[11px] font-mono text-blue-400"
              title="Total XP"
            >
              <Zap className="w-3.5 h-3.5 text-blue-400" />
              <span>{user.totalXp} XP</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-3 sm:p-4 border-b border-[#222222] bg-[#0E0E0E] space-y-2.5 shrink-0">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#777777]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.menu.searchPlaceholder}
              className="w-full pl-9 pr-8 py-2 bg-[#161616] rounded-lg border border-[#2A2A2A] focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] text-xs sm:text-sm text-[#F5F5F5] placeholder-[#666666] outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white p-0.5"
                title="Clear filter"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Filter Pills (Horizontal Scroll) */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium flex items-center gap-1.5 whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#C5A059] text-black font-semibold shadow-sm'
                      : 'bg-[#181818] text-[#999999] hover:text-[#F5F5F5] border border-[#282828] hover:border-[#383838]'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature List (Scrollable Area) */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-5">
          {groupedCategories.length === 0 ? (
            <div className="py-12 text-center text-[#777777] space-y-2">
              <Filter className="w-8 h-8 mx-auto text-[#444444]" />
              <p className="text-sm font-medium">{t.menu.noResults}</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-xs text-[#C5A059] hover:underline"
              >
                Reset search filters
              </button>
            </div>
          ) : (
            groupedCategories.map(({ category, items }) => {
              const CategoryIcon = category.icon;
              return (
                <section key={category.id} className="space-y-2">
                  {/* Category Header */}
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                      <CategoryIcon className="w-4 h-4 text-[#C5A059]" />
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#DFC287]">
                        {category.label}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-[#666666]">
                      {items.length} {items.length === 1 ? 'item' : 'items'}
                    </span>
                  </div>

                  {/* Category Items */}
                  <div className="grid grid-cols-1 gap-1.5">
                    {items.map((item) => {
                      const ItemIcon = item.icon;
                      const isActive = item.isViewActive;

                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            if (item.view) {
                              handleSelectView(item.view);
                            } else if (item.action) {
                              item.action();
                            }
                          }}
                          className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-3 group relative ${
                            isActive
                              ? 'bg-[#181818] border-[#C5A059] shadow-[0_0_15px_rgba(197,160,89,0.15)] ring-1 ring-[#C5A059]/40'
                              : 'bg-[#141414] hover:bg-[#1A1A1A] border-[#242424] hover:border-[#3A3A3A]'
                          }`}
                        >
                          {/* Left Icon */}
                          <div
                            className={`p-2 rounded-lg shrink-0 transition-colors ${
                              isActive
                                ? 'bg-[#C5A059]/20 text-[#DFC287]'
                                : 'bg-[#1E1E1E] text-neutral-400 group-hover:text-white group-hover:bg-[#262626]'
                            }`}
                          >
                            <ItemIcon className="w-4 h-4" />
                          </div>

                          {/* Content Details */}
                          <div className="flex-1 min-w-0 pr-1">
                            <div className="flex items-center justify-between gap-2">
                              <h4
                                className={`text-xs sm:text-sm font-semibold truncate ${
                                  isActive
                                    ? 'text-[#DFC287]'
                                    : 'text-[#F5F5F5] group-hover:text-white'
                                }`}
                              >
                                {item.title}
                              </h4>

                              {/* Badges */}
                              {isActive ? (
                                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-[#C5A059]/20 text-[#DFC287] border border-[#C5A059]/50 shrink-0">
                                  <CheckCircle2 className="w-2.5 h-2.5" />
                                  {t.menu.activeBadge}
                                </span>
                              ) : item.badge ? (
                                <span
                                  className={`px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider shrink-0 ${
                                    item.badgeColor === 'emerald'
                                      ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/40'
                                      : item.badgeColor === 'blue'
                                      ? 'bg-blue-950/60 text-blue-300 border border-blue-800/40'
                                      : item.badgeColor === 'purple'
                                      ? 'bg-purple-950/60 text-purple-300 border border-purple-800/40'
                                      : item.badgeColor === 'amber'
                                      ? 'bg-amber-950/60 text-amber-300 border border-amber-800/40'
                                      : 'bg-[#222222] text-[#A0A0A0] border border-[#333333]'
                                  }`}
                                >
                                  {item.badge}
                                </span>
                              ) : null}
                            </div>

                            <p className="text-[11px] text-[#8A8A8A] leading-relaxed mt-0.5 line-clamp-2">
                              {item.subtitle}
                            </p>
                          </div>

                          {/* Chevron Indicator */}
                          <div className="shrink-0 self-center text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all">
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </section>
              );
            })
          )}
        </div>

        {/* Bottom Quick-Action Footer */}
        <div className="p-3 sm:p-4 border-t border-[#262626] bg-[#121212] flex items-center justify-between gap-2 shrink-0">
          {/* Quick Track Switch Button */}
          {onSelectTrack && (
            <button
              onClick={() => {
                onSelectTrack(isPcap ? 'pcep-30-02' : 'pcap-31-03');
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1C1C1C] hover:bg-[#252525] border border-[#2E2E2E] text-xs font-mono text-[#D0D0D0] hover:text-white transition-all"
              title="Toggle Certification Track"
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{isPcap ? 'Switch to PCEP' : 'Switch to PCAP'}</span>
            </button>
          )}

          {/* Language & Theme Controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleLang}
              className="px-2.5 py-1 rounded-lg bg-[#1C1C1C] hover:bg-[#252525] border border-[#2E2E2E] text-xs font-mono font-bold text-neutral-300 hover:text-white transition-all flex items-center gap-1"
              title="Toggle Language"
            >
              <Languages className="w-3.5 h-3.5 text-blue-400" />
              <span>{lang.toUpperCase()}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg bg-[#1C1C1C] hover:bg-[#252525] border border-[#2E2E2E] text-neutral-300 hover:text-white transition-all"
              title={theme === 'dark' ? t.nav.themeLight : t.nav.themeDark}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-blue-400" />
              )}
            </button>
          </div>
        </div>
      </aside>
    </div>,
    document.body
  );
};
