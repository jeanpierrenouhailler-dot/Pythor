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
import { useNoviceMode } from '../context/NoviceModeContext';
import { PythorLogo } from './common/PythorLogo';
import { InstallPwaButton } from './common/InstallPwaButton';
import { InfoTooltip } from './common/InfoTooltip';
import { UserAuthButton } from './UserAuthButton';
import { HelpCircle, Lightbulb } from 'lucide-react';

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
  const { openOnboarding, isNoviceMode, toggleNoviceMode } = useNoviceMode();

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
            <PythorLogo size="md" showText={false} />
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-slate-100 tracking-tight text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                  Pythor
                </span>
                <span className="font-semibold text-slate-300 tracking-tight text-xs sm:text-sm">
                  {currentTrack === 'pcep'
                    ? 'PCEP-30-0x'
                    : currentTrack === 'pcpp'
                    ? 'PCPP-32-10x'
                    : currentTrack === 'pced'
                    ? 'PCED-30-02'
                    : currentTrack === 'pcad'
                    ? 'PCAD-31-02'
                    : currentTrack === 'pcet'
                    ? 'PCET-30-01'
                    : currentTrack === 'pcat'
                    ? 'PCAT-31-0x'
                    : currentTrack === 'pces'
                    ? 'PCES-30-01'
                    : currentTrack === 'pcea'
                    ? 'PCEA-30-01'
                    : currentTrack === 'pcei'
                    ? 'PCEI-30-01'
                    : 'PCAP-31-03'}
                </span>
                <span className={`hidden sm:inline px-1.5 py-0.2 rounded-full text-[10px] font-medium border ${
                  currentTrack === 'pcep'
                    ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                    : currentTrack === 'pcpp'
                    ? 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                    : currentTrack === 'pced'
                    ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                    : currentTrack === 'pcad'
                    ? 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                    : currentTrack === 'pcet'
                    ? 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                    : currentTrack === 'pcat'
                    ? 'bg-teal-500/10 text-teal-300 border-teal-500/30'
                    : currentTrack === 'pces'
                    ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                    : currentTrack === 'pcea'
                    ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                    : currentTrack === 'pcei'
                    ? 'bg-violet-500/10 text-violet-300 border-violet-500/30'
                    : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                }`}>
                  {currentTrack === 'pcep'
                    ? 'Entry-Level'
                    : currentTrack === 'pcpp'
                    ? 'Professional'
                    : currentTrack === 'pced'
                    ? 'Data Analyst'
                    : currentTrack === 'pcad'
                    ? 'Associate DA'
                    : currentTrack === 'pcet'
                    ? 'Tester'
                    : currentTrack === 'pcat'
                    ? 'Associate Tester'
                    : currentTrack === 'pces'
                    ? 'Security Specialist'
                    : currentTrack === 'pcea'
                    ? 'Automation Specialist'
                    : currentTrack === 'pcei'
                    ? 'AI Specialist'
                    : 'Associate'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden lg:block leading-none">
                {currentTrack === 'pcep'
                  ? (isFrench ? 'Certifié Python Institute Débutant' : 'Python Institute Certified Entry-Level')
                  : currentTrack === 'pcpp'
                  ? (isFrench ? 'Certifié Python Institute Professionnel' : 'Python Institute Certified Professional')
                  : currentTrack === 'pced'
                  ? (isFrench ? 'Certifié Python Institute Data Analyst' : 'Python Institute Certified Data Analyst')
                  : currentTrack === 'pcad'
                  ? (isFrench ? 'Certifié Python Institute Associate Data Analyst' : 'Python Institute Certified Associate Data Analyst')
                  : currentTrack === 'pcet'
                  ? (isFrench ? 'Certifié Python Institute Testeur' : 'Python Institute Certified Entry-Level Tester')
                  : currentTrack === 'pcat'
                  ? (isFrench ? 'Certifié Python Institute Associate Tester' : 'Python Institute Certified Associate Tester')
                  : currentTrack === 'pces'
                  ? (isFrench ? 'Certifié Python Institute Sécurité' : 'Python Institute Certified Security Specialist')
                  : currentTrack === 'pcea'
                  ? (isFrench ? 'Certifié Python Institute Automatisation' : 'Python Institute Certified Automation Specialist')
                  : currentTrack === 'pcei'
                  ? (isFrench ? 'Certifié Python Institute Spécialiste IA' : 'Python Institute Certified AI Specialist')
                  : (isFrench ? 'Certifié Python Institute Associate' : 'Python Institute Certified Associate')}
              </p>
            </div>
          </button>
        </div>

        {/* Center: Primary View Switcher Tabs */}
        <nav className="hidden sm:flex items-center space-x-1 bg-slate-900/70 border border-slate-800/90 p-1 rounded-xl">
          <button
            onClick={() => onSelectView('landing')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center space-x-1.5 ${
              currentView === 'landing'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
            title="Landing Page & Présentation"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden xl:inline">{isFrench ? 'Présentation' : 'Landing'}</span>
          </button>

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
            <button
              onClick={() => onSelectTrack('pcpp')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${
                currentTrack === 'pcpp'
                  ? 'bg-purple-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
              title={
                isFrench
                  ? 'Basculer vers PCPP-32-10x (Niveau Professionnel)'
                  : 'Switch to PCPP-32-10x (Certified Professional in Python Programming 1)'
              }
              aria-pressed={currentTrack === 'pcpp'}
            >
              <span>PCPP</span>
            </button>
            <button
              onClick={() => onSelectTrack('pced')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${
                currentTrack === 'pced'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
              title={
                isFrench
                  ? 'Basculer vers PCED-30-02 (Data Analyst Débutant)'
                  : 'Switch to PCED-30-02 (Certified Entry-Level Data Analyst with Python)'
              }
              aria-pressed={currentTrack === 'pced'}
            >
              <span>PCED</span>
            </button>
            <button
              onClick={() => onSelectTrack('pcad')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${
                currentTrack === 'pcad'
                  ? 'bg-blue-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
              title={
                isFrench
                  ? 'Basculer vers PCAD-31-02 (Data Analyst Associé)'
                  : 'Switch to PCAD-31-02 (Certified Associate Data Analyst with Python)'
              }
              aria-pressed={currentTrack === 'pcad'}
            >
              <span>PCAD</span>
            </button>
            <button
              onClick={() => onSelectTrack('pcet')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${
                currentTrack === 'pcet'
                  ? 'bg-rose-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
              title={
                isFrench
                  ? 'Basculer vers PCET-30-01 (Testeur Débutant)'
                  : 'Switch to PCET-30-01 (Certified Entry-Level Tester with Python)'
              }
              aria-pressed={currentTrack === 'pcet'}
            >
              <span>PCET</span>
            </button>
            <button
              onClick={() => onSelectTrack('pcat')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${
                currentTrack === 'pcat'
                  ? 'bg-teal-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
              title={
                isFrench
                  ? 'Basculer vers PCAT-31-0x (Testeur Associé)'
                  : 'Switch to PCAT-31-0x (Certified Associate Tester with Python)'
              }
              aria-pressed={currentTrack === 'pcat'}
            >
              <span>PCAT</span>
            </button>
            <button
              onClick={() => onSelectTrack('pces')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${
                currentTrack === 'pces'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
              title={
                isFrench
                  ? 'Basculer vers PCES-30-01 (Spécialiste de Sécurité)'
                  : 'Switch to PCES-30-01 (Certified Entry-Level Security Specialist with Python)'
              }
              aria-pressed={currentTrack === 'pces'}
            >
              <span>PCES</span>
            </button>
            <button
              onClick={() => onSelectTrack('pcea')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${
                currentTrack === 'pcea'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
              title={
                isFrench
                  ? 'Basculer vers PCEA-30-01 (Spécialiste en Automatisation)'
                  : 'Switch to PCEA-30-01 (Certified Entry-Level Automation Specialist with Python)'
              }
              aria-pressed={currentTrack === 'pcea'}
            >
              <span>PCEA</span>
            </button>
            <button
              onClick={() => onSelectTrack('pcei')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${
                currentTrack === 'pcei'
                  ? 'bg-violet-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
              title={
                isFrench
                  ? 'Basculer vers PCEI-30-01 (Spécialiste en Intelligence Artificielle)'
                  : 'Switch to PCEI-30-01 (Certified Entry-Level AI Specialist with Python)'
              }
              aria-pressed={currentTrack === 'pcei'}
            >
              <span>PCEI</span>
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

          {/* INSTALL APPLICATION PWA BUTTON */}
          <InstallPwaButton variant="navbar" size="sm" />

          {/* AIDE, GUIDE & MENTIONS LÉGALES BUTTON */}
          <button
            onClick={openOnboarding}
            className="p-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 hover:text-amber-200 transition-all flex items-center space-x-1.5 shadow-xs"
            title="Consulter le guide débutant, les mentions légales et la clause de non-responsabilité"
            aria-label="Aide et Mentions Légales"
          >
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span className="hidden xl:inline text-xs font-semibold">Aide & Mentions</span>
          </button>

          {/* MODE GUIDE NOVICE TOGGLE */}
          <button
            onClick={toggleNoviceMode}
            className={`px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition-all flex items-center space-x-1.5 shadow-xs ${
              isNoviceMode
                ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300 ring-1 ring-cyan-500/30'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
            title={
              isNoviceMode
                ? 'Mode Guide Novice Actif (Infobulles et conseils d’aide activés)'
                : 'Activer le Mode Guide Novice (Infobulles et conseils)'
            }
            aria-label="Basculer le mode guide novice"
          >
            <Lightbulb className={`w-3.5 h-3.5 ${isNoviceMode ? 'text-amber-400 animate-pulse' : 'text-slate-500'}`} />
            <span className="hidden xl:inline">
              {isNoviceMode ? 'Mode Novice : Actif' : 'Mode Novice'}
            </span>
          </button>

          {/* Google Auth & User Cloud Sync Button */}
          <UserAuthButton />

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
