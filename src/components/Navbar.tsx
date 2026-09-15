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
  Sun,
  Moon,
  Globe,
  Plus,
} from 'lucide-react';
import { AppView, CertificationTrack } from '../types';
import { useSystemSettings } from '../context/SystemSettingsContext';
import { useTheme } from '../context/ThemeContext';
import { useI18n } from '../context/I18nContext';

interface NavbarProps {
  totalCards: number;
  reviewedCount: number;
  selectedSection: string;
  onSelectSection: (sectionId: string) => void;
  currentView: AppView;
  onSelectView: (view: AppView) => void;
  onToggleMenu: () => void;
  onOpenSettings: () => void;
  currentTrack: CertificationTrack;
  onSelectTrack: (track: CertificationTrack) => void;
  onOpenCreateCard: () => void;
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
  currentTrack,
  onSelectTrack,
  onOpenCreateCard,
}) => {
  const { settings } = useSystemSettings();
  const { theme, toggleTheme, isDark } = useTheme();
  const { lang, setLang, t, isFrench } = useI18n();

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
            title={isFrench ? "Aller au tableau de bord" : "Go to Main Dashboard"}
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-105 ${
              currentTrack === 'pcep'
                ? 'bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-600 shadow-emerald-500/20 ring-1 ring-emerald-400/30'
                : 'bg-gradient-to-tr from-cyan-600 via-sky-500 to-indigo-600 shadow-cyan-500/20 ring-1 ring-cyan-400/30'
            }`}>
              <span className="font-mono font-bold text-white text-base">Py</span>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-semibold text-slate-100 tracking-tight text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                  {currentTrack === 'pcep' ? 'PCEP-30-0x' : 'PCAP-31-03'}
                </span>
                <span className={`hidden sm:inline px-1.5 py-0.2 rounded-full text-[10px] font-medium border ${
                  currentTrack === 'pcep'
                    ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                    : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                }`}>
                  {currentTrack === 'pcep' ? 'Entry-Level' : 'Associate'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden lg:block leading-none">
                {currentTrack === 'pcep'
                  ? (isFrench ? 'Certifié Python Institute Débutant' : 'Python Institute Certified Entry-Level')
                  : (isFrench ? 'Certifié Python Institute Associate' : 'Python Institute Certified Associate')}
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
            <span>{t.nav.dashboard}</span>
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
            <span>{t.nav.flashcards}</span>
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
            <span>{t.nav.examSim}</span>
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
            <span>{t.nav.cheatsheet}</span>
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
            <span>{t.nav.codeLab}</span>
          </button>
        </nav>

        {/* Right: Language Selector, Theme Switch, Exam Readiness & Settings */}
        <div className="flex items-center space-x-2 sm:space-x-2.5">
          {/* Progress Indicator */}
          <div className="hidden xl:flex items-center space-x-3 bg-slate-900/60 border border-slate-800 rounded-xl px-3 py-1.5">
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold leading-tight">
                {t.nav.srsMastered}
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

          {/* CERTIFICATION TRACK SELECTOR PILL */}
          <div
            className="flex items-center bg-slate-900/90 border border-slate-800 rounded-xl p-0.5 shadow-xs"
            role="group"
            aria-label="Certification Track"
          >
            <button
              onClick={() => onSelectTrack('pcep')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${
                currentTrack === 'pcep'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
              title={
                isFrench
                  ? 'Basculer vers PCEP-30-0x (Niveau Débutant)'
                  : 'Switch to PCEP-30-0x (Entry-Level Python Programmer)'
              }
              aria-pressed={currentTrack === 'pcep'}
            >
              <span>PCEP</span>
            </button>
            <button
              onClick={() => onSelectTrack('pcap')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${
                currentTrack === 'pcap'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
              title={
                isFrench
                  ? 'Basculer vers PCAP-31-03 (Niveau Associé)'
                  : 'Switch to PCAP-31-03 (Certified Associate in Python Programming)'
              }
              aria-pressed={currentTrack === 'pcap'}
            >
              <span>PCAP</span>
            </button>
          </div>

          {/* CREATE FLASHCARD BUTTON */}
          <button
            onClick={onOpenCreateCard}
            className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 hover:text-white font-semibold text-xs transition-all shadow-xs"
            title={isFrench ? 'Créer une nouvelle carte mémoire' : 'Create a custom flashcard'}
          >
            <Plus className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">
              {isFrench ? 'Créer carte' : 'New Card'}
            </span>
          </button>

          {/* LANGUAGE SELECTOR BUTTON */}
          <div
            className="flex items-center bg-slate-900/90 border border-slate-800 rounded-xl p-1 shadow-xs"
            role="group"
            aria-label="Language Selector"
          >
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${
                lang === 'en'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
              title="English (Anglais)"
              aria-pressed={lang === 'en'}
            >
              <span className="text-xs">🇬🇧</span>
              <span className="text-[11px]">EN</span>
            </button>
            <button
              onClick={() => setLang('fr')}
              className={`px-2 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${
                lang === 'fr'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
              title="Français (French)"
              aria-pressed={lang === 'fr'}
            >
              <span className="text-xs">🇫🇷</span>
              <span className="text-[11px]">FR</span>
            </button>
          </div>

          {/* LIGHT / DARK THEME SWITCH BUTTON */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 flex items-center space-x-1.5 shadow-xs"
            title={isDark ? t.nav.themeLight : t.nav.themeDark}
            aria-label={isDark ? t.nav.themeLight : t.nav.themeDark}
          >
            {isDark ? (
              <>
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-90 transition-transform duration-300" />
                <span className="hidden md:inline text-xs font-medium text-slate-200">
                  {t.nav.light}
                </span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-cyan-400 hover:-rotate-12 transition-transform duration-300" />
                <span className="hidden md:inline text-xs font-medium text-slate-800">
                  {t.nav.dark}
                </span>
              </>
            )}
          </button>

          {/* System Settings Button */}
          <button
            onClick={onOpenSettings}
            className={`flex items-center space-x-2 px-2.5 py-1.5 rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 group shadow-xs ${
              isUpdateReady
                ? 'bg-emerald-950/50 border-emerald-500/50 text-emerald-300 hover:bg-emerald-900/40 shadow-sm shadow-emerald-950/40'
                : 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white'
            }`}
            title={isFrench ? "Paramètres système & Mises à jour" : "System Settings: Check for updates, release date, and background sync"}
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

            <div className="hidden lg:flex flex-col items-start leading-none text-left">
              <div className="flex items-center space-x-1">
                <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
                  {t.nav.settings}
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
