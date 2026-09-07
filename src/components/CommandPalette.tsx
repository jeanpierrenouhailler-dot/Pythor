import React, { useState, useEffect } from 'react';
import { ViewType } from '../types';
import { Search, Code2, BookOpen, Brain, LayoutDashboard, Award, X, ChevronRight, ArrowLeft, Sun, Moon, Languages } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useI18n } from '../context/I18nContext';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectView: (view: ViewType) => void;
  onSelectChallenge?: (challengeId: string) => void;
  onNavigateBack?: () => void;
  previousViewTitle?: string;
}

interface PaletteItem {
  id: string;
  type: string;
  title: string;
  category: string;
  view?: ViewType;
  customAction?: () => void;
  icon: React.ComponentType<{ className?: string }>;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectView,
  onNavigateBack,
  previousViewTitle,
}) => {
  const [query, setQuery] = useState('');
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useI18n();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
          setQuery('');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const returnItem: PaletteItem[] = onNavigateBack ? [{
    id: 'return-back',
    type: 'action',
    title: `${t.nav.returnTo} ${previousViewTitle || t.nav.return}`,
    category: 'Navigation (Alt+Left)',
    customAction: () => {
      onNavigateBack();
      onClose();
    },
    icon: ArrowLeft,
  }] : [];

  const preferencesItems: PaletteItem[] = [
    {
      id: 'toggle-theme',
      type: 'action',
      title: theme === 'dark' ? t.nav.themeLight : t.nav.themeDark,
      category: t.palette.actions,
      customAction: () => {
        toggleTheme();
        onClose();
      },
      icon: theme === 'dark' ? Sun : Moon,
    },
    {
      id: 'toggle-language',
      type: 'action',
      title: lang === 'en' ? 'Passer en Français (French)' : 'Switch to English (Anglais)',
      category: t.palette.actions,
      customAction: () => {
        toggleLang();
        onClose();
      },
      icon: Languages,
    },
  ];

  const rawItems: PaletteItem[] = [
    ...returnItem,
    ...preferencesItems,
    {
      id: 'pcap-exam-sim',
      type: 'exam',
      title: 'PCAP-31-03 Mock Exam Simulator: 40 Questions (65 min)',
      category: 'PCAP™ Certified Associate in Python Programming',
      view: 'pcep-exam' as ViewType,
      icon: Award,
    },
    {
      id: 'pcap-syllabus',
      type: 'lesson',
      title: 'PCAP-31-03 Syllabus: Modules 1.1 → 5.5 (24 Chapters)',
      category: 'PCAP™ 5 Sections • Modules, Exceptions, Strings, OOP, I/O',
      view: 'parcours' as ViewType,
      icon: BookOpen,
    },
    {
      id: 'pcap-challenge-4-2',
      type: 'challenge',
      title: 'PCAP-31-03 4.2: Encapsulation & Private Name Mangling (__var)',
      category: 'Section 4: Object-Oriented Programming (34%)',
      view: 'ide-studio' as ViewType,
      icon: Code2,
    },
    {
      id: 'pcap-challenge-1-1',
      type: 'challenge',
      title: 'PCAP-31-03 1.1: Module Importing, aliasing & sys.path',
      category: 'Section 1: Modules and Packages (12%)',
      view: 'ide-studio' as ViewType,
      icon: Code2,
    },
    {
      id: 'pcap-cheat-sheet',
      type: 'guide',
      title: 'PCAP Cheat Sheet: MRO, Name Mangling, Closures, bytearray & Streams',
      category: 'PCAP-31-03 Essential Traps & Pitfalls',
      view: 'pcep-exam' as ViewType,
      icon: BookOpen,
    },
    {
      id: 'pcep-exam-sim',
      type: 'exam',
      title: 'PCEP-30-02 Mock Exam: 30 Questions (45 min)',
      category: 'PCEP™ Certified Entry-Level Python Programmer',
      view: 'pcep-exam' as ViewType,
      icon: Award,
    },
    {
      id: 'pcep-cheat-sheet',
      type: 'guide',
      title: 'PCEP Cheat Sheet: Operator Precedence & Pitfalls',
      category: 'PCEP™ Certification • Reference',
      view: 'pcep-exam' as ViewType,
      icon: BookOpen,
    },
    {
      id: 'ide-pcep-2-3',
      type: 'challenge',
      title: 'PCEP-30-02 2.3: Nested Loops and break / continue',
      category: 'Block 2: Control Flow (29%)',
      view: 'ide-studio' as ViewType,
      icon: Code2,
    },
    {
      id: 'parcours-pcep',
      type: 'lesson',
      title: 'PCEP-30-02 Syllabus: All 16 Chapters (1.1 → 4.4)',
      category: 'PCEP™ Skill Tree',
      view: 'parcours' as ViewType,
      icon: BookOpen,
    },
    {
      id: 'srs-slicing',
      type: 'flashcard',
      title: 'SRS Flashcards: PCAP & PCEP Memorization Decks',
      category: 'Spaced Repetition System',
      view: 'flashcards-srs' as ViewType,
      icon: Brain,
    },
    {
      id: 'dash',
      type: 'view',
      title: 'Dashboard: Metrics & Daily Quests',
      category: 'Overall Progress',
      view: 'dashboard' as ViewType,
      icon: LayoutDashboard,
    },
  ];

  const items = rawItems.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div
        className="w-full max-w-xl bg-[#141414] border border-[#262626] rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#262626] bg-[#0A0A0A]">
          <Search className="w-5 h-5 text-[#C5A059]" />
          <input
            type="text"
            placeholder={t.palette.placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-[#F5F5F5] placeholder-[#737373] focus:outline-none font-sans"
          />
          <button
            onClick={onClose}
            className="p-1 text-[#737373] hover:text-[#F5F5F5] rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {items.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#737373] font-mono">
              {t.palette.noResults} "{query}"
            </div>
          ) : (
            items.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.customAction) {
                      item.customAction();
                    } else if (item.view) {
                      onSelectView(item.view);
                      onClose();
                    }
                  }}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-[#1E1E1E] transition-colors text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#1C1C1C] rounded-md text-[#C5A059] group-hover:bg-[#C5A059]/15 border border-[#262626]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#F5F5F5] group-hover:text-[#C5A059]">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-[#737373] font-mono">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#737373] group-hover:text-[#F5F5F5] group-hover:translate-x-0.5 transition-all" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-[#0A0A0A] border-t border-[#262626] flex items-center justify-between text-[11px] text-[#737373] font-mono">
          <span>Quick Keyboard Navigation</span>
          <div className="flex items-center gap-2">
            <span>
              <kbd className="px-1.5 py-0.5 bg-[#1C1C1C] border border-[#262626] text-[#A0A0A0] rounded text-[10px]">↵</kbd> Select
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 bg-[#1C1C1C] border border-[#262626] text-[#A0A0A0] rounded text-[10px]">ESC</kbd> Close
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
