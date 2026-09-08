import React from 'react';
import {
  X,
  LayoutDashboard,
  Layers,
  GraduationCap,
  Code2,
  BookMarked,
  Package,
  AlertTriangle,
  Zap,
  Box,
  RotateCcw,
  Clock,
  Sparkles,
  HelpCircle,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Settings,
  Sliders,
  Radio,
} from 'lucide-react';
import { AppView } from '../types';
import { pcapSyllabusSections, pcapFlashcardsData } from '../data/pcapData';
import { useSystemSettings } from '../context/SystemSettingsContext';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentView: AppView;
  onSelectView: (view: AppView) => void;
  selectedSection: string;
  onSelectSection: (section: string) => void;
  totalCards: number;
  reviewedCount: number;
  onResetProgress: () => void;
  onOpenSettings: () => void;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  onClose,
  currentView,
  onSelectView,
  selectedSection,
  onSelectSection,
  totalCards,
  reviewedCount,
  onResetProgress,
  onOpenSettings,
}) => {
  const { settings } = useSystemSettings();
  if (!isOpen) return null;

  const progressPercent = totalCards > 0 ? Math.round((reviewedCount / totalCards) * 100) : 0;

  const handleNavigate = (view: AppView, section?: string) => {
    onSelectView(view);
    if (section) {
      onSelectSection(section);
    }
    onClose();
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset your Spaced Repetition (SRS) review history?')) {
      onResetProgress();
      onClose();
    }
  };

  const sectionIcons: Record<number, React.ReactNode> = {
    1: <Package className="w-4 h-4 text-emerald-400" />,
    2: <AlertTriangle className="w-4 h-4 text-amber-400" />,
    3: <Zap className="w-4 h-4 text-purple-400" />,
    4: <Box className="w-4 h-4 text-cyan-400" />,
  };

  return (
    <div className="fixed inset-0 z-50 flex" role="dialog" aria-modal="true" aria-label="Main Navigation Menu">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="relative flex flex-col w-full max-w-sm sm:max-w-md bg-slate-900 border-r border-slate-800 shadow-2xl z-10 overflow-hidden">
        {/* Drawer Header */}
        <div className="px-5 py-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center shadow-md shadow-cyan-500/20 ring-1 ring-cyan-400/40">
              <span className="font-mono font-bold text-white text-base">Py</span>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-semibold text-slate-100 text-sm sm:text-base">PCAP-31-03</span>
                <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  Prep Suite
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Navigation & Functional Categories</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Study Progress Strip */}
        <div className="px-5 py-3 bg-slate-950/60 border-b border-slate-800/60 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-medium text-slate-300">Exam Readiness</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs font-mono font-semibold text-cyan-400">
              {progressPercent}%
            </span>
          </div>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
          {/* CATEGORY 1: Core Views & Workspaces */}
          <div>
            <div className="px-2 mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>Main Workspaces</span>
              <span className="text-[10px] text-slate-500 font-normal">Primary Modules</span>
            </div>
            <div className="space-y-1">
              <button
                onClick={() => handleNavigate('dashboard')}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  currentView === 'dashboard'
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <LayoutDashboard className={`w-4 h-4 ${currentView === 'dashboard' ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <div className="text-left">
                    <span className="block text-slate-100 font-medium leading-none">Main Dashboard</span>
                    <span className="text-[11px] text-slate-400 mt-1 block">Blueprint overview & readiness statistics</span>
                  </div>
                </div>
                {currentView === 'dashboard' ? (
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                )}
              </button>

              <button
                onClick={() => handleNavigate('flashcards')}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  currentView === 'flashcards'
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Layers className={`w-4 h-4 ${currentView === 'flashcards' ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <div className="text-left">
                    <span className="block text-slate-100 font-medium leading-none">Flashcards & SRS Studio</span>
                    <span className="text-[11px] text-slate-400 mt-1 block">100+ cards with active recall rating engine</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  {totalCards} Cards
                </span>
              </button>

              <button
                onClick={() => handleNavigate('exam')}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  currentView === 'exam'
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <GraduationCap className={`w-4 h-4 ${currentView === 'exam' ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <div className="text-left">
                    <span className="block text-slate-100 font-medium leading-none">Exam Simulator & Quiz</span>
                    <span className="text-[11px] text-slate-400 mt-1 block">Timed practice test with scoring & explanations</span>
                  </div>
                </div>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-amber-300 bg-amber-500/10 border border-amber-500/30">
                  Practice
                </span>
              </button>

              <button
                onClick={() => handleNavigate('codelab')}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  currentView === 'codelab'
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Code2 className={`w-4 h-4 ${currentView === 'codelab' ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <div className="text-left">
                    <span className="block text-slate-100 font-medium leading-none">Python OOP Code Lab</span>
                    <span className="text-[11px] text-slate-400 mt-1 block">MRO, name mangling & syntax execution inspect</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>

              <button
                onClick={() => handleNavigate('cheatsheet')}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  currentView === 'cheatsheet'
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <BookMarked className={`w-4 h-4 ${currentView === 'cheatsheet' ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <div className="text-left">
                    <span className="block text-slate-100 font-medium leading-none">PCAP Dunder & OOP Cheatsheet</span>
                    <span className="text-[11px] text-slate-400 mt-1 block">Full reference table for dunders, MRO & gotchas</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>
          </div>

          {/* CATEGORY 2: Syllabus Blueprint Domains */}
          <div>
            <div className="px-2 mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>PCAP-31-03 Exam Blueprint</span>
              <span className="text-[10px] text-slate-500 font-normal">Syllabus Sections</span>
            </div>
            <div className="space-y-1.5">
              {pcapSyllabusSections.map((sec) => {
                const isSelected = selectedSection === `Section ${sec.number}`;
                const sectionCardCount = pcapFlashcardsData.filter(
                  (c) => c.section === `Section ${sec.number}`
                ).length;

                return (
                  <button
                    key={sec.id}
                    onClick={() => handleNavigate('flashcards', `Section ${sec.number}`)}
                    className={`w-full text-left p-3 rounded-xl border transition-all ${
                      isSelected && currentView === 'flashcards'
                        ? 'bg-cyan-950/40 border-cyan-500/40 text-cyan-200'
                        : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/50 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <div className="p-1 rounded-md bg-slate-800/80">
                          {sectionIcons[sec.number]}
                        </div>
                        <span className="text-xs font-semibold text-slate-100">
                          Section {sec.number}: {sec.title}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                          {sectionCardCount} Cards
                        </span>
                        <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                          {sec.weight}
                        </span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400 mt-1.5 line-clamp-1">
                      {sec.description}
                    </p>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/60 text-[10px]">
                      <span className="text-slate-300 flex items-center space-x-1.5">
                        <strong className="text-cyan-400 font-semibold">
                          {sec.number === 4
                            ? `${sectionCardCount} Comprehensive Cards`
                            : `${sectionCardCount} Flashcards`}
                        </strong>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-400">{sec.chapters.length} Sub-chapters</span>
                      </span>
                      <span className="text-cyan-400 hover:underline flex items-center space-x-0.5 font-medium">
                        <span>Study Cards</span>
                        <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CATEGORY 3: Spaced Repetition (SRS) & Tools */}
          <div>
            <div className="px-2 mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>Study Tools & Options</span>
              <span className="text-[10px] text-slate-500 font-normal">Actions</span>
            </div>
            <div className="space-y-1 bg-slate-950/50 rounded-xl p-2 border border-slate-800/80">
              <button
                onClick={() => handleNavigate('flashcards', 'all')}
                className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Review All Flashcards</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenSettings();
                }}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                <div className="flex items-center space-x-2.5">
                  <Settings className="w-3.5 h-3.5 text-cyan-400" />
                  <span>System Settings & Updates</span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  {settings.currentVersion}
                </span>
              </button>

              <button
                onClick={handleReset}
                className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset SRS Study Progress</span>
              </button>
            </div>
          </div>

          {/* CATEGORY 4: System Status & Background Updates Preview Card */}
          <div>
            <div className="px-2 mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>System & Background Updates</span>
              <span className="text-[10px] text-emerald-400 font-normal flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Auto-sync on</span>
              </span>
            </div>
            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80 space-y-2 text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Release Date:</span>
                <span className="font-semibold text-slate-200">{settings.releaseDate}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Background Updates:</span>
                <span className={`font-mono text-[11px] font-semibold ${settings.autoUpdateEnabled ? 'text-emerald-400' : 'text-slate-400'}`}>
                  {settings.autoUpdateEnabled ? 'Periodically Checking' : 'Disabled'}
                </span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenSettings();
                }}
                className="w-full mt-2 py-1.5 px-2.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-medium text-center transition-colors flex items-center justify-center space-x-1.5"
              >
                <Sliders className="w-3 h-3" />
                <span>Open Update Manager & Settings</span>
              </button>
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="px-5 py-3 border-t border-slate-800 bg-slate-950 text-[11px] text-slate-400 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span>Python Institute Alignment</span>
            <span className="text-slate-600">•</span>
            <span className="font-mono text-cyan-400">{settings.currentVersion}</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenSettings();
            }}
            className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 underline font-medium"
          >
            <span>Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};
