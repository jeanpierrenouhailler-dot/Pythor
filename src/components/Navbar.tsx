import React from 'react';
import {
  Menu,
  LayoutDashboard,
  Layers,
  GraduationCap,
  BookMarked,
  Code2,
  ShieldCheck,
  Settings,
  Sparkles,
} from 'lucide-react';
import { AppView } from '../types';
import { useSystemSettings } from '../context/SystemSettingsContext';

interface NavbarProps {
  totalCards: number;
  reviewedCount: number;
  selectedSection: string;
  onSelectSection: (sectionId: string) => void;
  currentView: AppView;
  onSelectView: (view: AppView) => void;
  onToggleMenu: () => void;
  onOpenSettings: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  totalCards,
  reviewedCount,
  selectedSection,
  onSelectSection,
  currentView,
  onSelectView,
  onToggleMenu,
  onOpenSettings,
}) => {
  const { settings } = useSystemSettings();
  const progressPercent = totalCards > 0 ? Math.round((reviewedCount / totalCards) * 100) : 0;
  const isUpdateReady = settings.status === 'ready';

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Left: Hamburger Menu Button & Logo */}
        <div className="flex items-center space-x-3">
          {/* HAMBURGER MENU BUTTON */}
          <button
            onClick={onToggleMenu}
            className="flex items-center space-x-2 p-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 group"
            aria-label="Open Navigation Menu"
            title="Open Categories & Functions Menu"
          >
            <Menu className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="hidden md:inline text-xs font-semibold tracking-wide text-slate-200">
              Menu
            </span>
          </button>

          {/* Logo & Main Title -> returns to Dashboard */}
          <button
            onClick={() => onSelectView('dashboard')}
            className="flex items-center space-x-2.5 text-left group focus:outline-none"
            title="Go to Main Dashboard"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 via-sky-500 to-indigo-600 flex items-center justify-center shadow-md shadow-cyan-500/20 ring-1 ring-cyan-400/30 group-hover:scale-105 transition-transform">
              <span className="font-mono font-bold text-white text-base">Py</span>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-semibold text-slate-100 tracking-tight text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                  PCAP-31-03
                </span>
                <span className="hidden sm:inline px-1.5 py-0.2 rounded-full text-[10px] font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  Prep Studio
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden lg:block leading-none">
                Python Institute Certified Associate
              </p>
            </div>
          </button>
        </div>

        {/* Center: Primary View Switcher Tabs */}
        <nav className="hidden sm:flex items-center space-x-1 bg-slate-900/70 border border-slate-800/90 p-1 rounded-xl">
          <button
            onClick={() => onSelectView('dashboard')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center space-x-1.5 ${
              currentView === 'dashboard'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => onSelectView('flashcards')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center space-x-1.5 ${
              currentView === 'flashcards'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Flashcards</span>
            <span className={`text-[10px] font-mono px-1 rounded ${
              currentView === 'flashcards' ? 'bg-cyan-600/30 text-slate-950 font-semibold' : 'bg-slate-800 text-cyan-300'
            }`}>
              {totalCards}
            </span>
          </button>

          <button
            onClick={() => onSelectView('exam')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center space-x-1.5 ${
              currentView === 'exam'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Exam Sim</span>
          </button>

          <button
            onClick={() => onSelectView('cheatsheet')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center space-x-1.5 ${
              currentView === 'cheatsheet'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <BookMarked className="w-3.5 h-3.5" />
            <span>Cheatsheet</span>
          </button>

          <button
            onClick={() => onSelectView('codelab')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center space-x-1.5 ${
              currentView === 'codelab'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Code Lab</span>
          </button>
        </nav>

        {/* Right: Exam Readiness & Settings */}
        <div className="flex items-center space-x-2.5">
          {/* Progress Indicator */}
          <div className="hidden sm:flex items-center space-x-3 bg-slate-900/60 border border-slate-800 rounded-xl px-3 py-1.5">
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold leading-tight">
                SRS Mastered
              </span>
              <span className="text-xs font-mono font-medium text-cyan-400 leading-tight">
                {reviewedCount}/{totalCards} ({progressPercent}%)
              </span>
            </div>
            <div className="w-14 sm:w-16 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* System Settings Button */}
          <button
            onClick={onOpenSettings}
            className={`flex items-center space-x-2 px-2.5 py-1.5 rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 group ${
              isUpdateReady
                ? 'bg-emerald-950/50 border-emerald-500/50 text-emerald-300 hover:bg-emerald-900/40 shadow-sm shadow-emerald-950/40'
                : 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white'
            }`}
            title="System Settings: Check for updates, release date, and background sync"
            aria-label="Open System Settings and Update Manager"
          >
            <div className="relative">
              <Settings className={`w-4 h-4 transition-transform group-hover:rotate-45 ${isUpdateReady ? 'text-emerald-400' : 'text-cyan-400'}`} />
              {isUpdateReady ? (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              ) : settings.autoUpdateEnabled ? (
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" title="Automatic Background Updates Active" />
              ) : null}
            </div>

            <div className="hidden md:flex flex-col items-start leading-none text-left">
              <div className="flex items-center space-x-1">
                <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
                  Settings
                </span>
                {isUpdateReady && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                )}
              </div>
              <span className="text-[10px] font-mono text-cyan-400 mt-0.5">
                {settings.currentVersion}
              </span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
