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
  Sun,
  Moon,
  Globe,
  Plus,
} from 'lucide-react';
import { AppView, CertificationTrack, Flashcard } from '../types';
import { pcapSyllabusSections, pcapFlashcardsData } from '../data/pcapData';
import { pcepSyllabusSections } from '../data/pcepData';
import { pcppSyllabusSections } from '../data/pcppData';
import { pcedSyllabusSections } from '../data/pcedData';
import { pcadSyllabusSections } from '../data/pcadData';
import { pcetSyllabusSections } from '../data/pcetData';
import { pcatSyllabusSections } from '../data/pcatData';
import { pcesSyllabusSections } from '../data/pcesData';
import { pceaSyllabusSections } from '../data/pceaData';
import { pceiSyllabusSections } from '../data/pceiData';
import { useSystemSettings } from '../context/SystemSettingsContext';
import { useTheme } from '../context/ThemeContext';
import { useI18n } from '../context/I18nContext';
import { useAuth } from '../context/AuthContext';
import { useNoviceMode } from '../context/NoviceModeContext';
import { PythorLogo } from './common/PythorLogo';
import { Cloud, LogOut, RefreshCw, Download, Lightbulb } from 'lucide-react';

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
  currentTrack: CertificationTrack;
  onSelectTrack: (track: CertificationTrack) => void;
  onOpenCreateCard: () => void;
  activeCards: Flashcard[];
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
  currentTrack,
  onSelectTrack,
  onOpenCreateCard,
  activeCards,
}) => {
  const { settings } = useSystemSettings();
  const { theme, toggleTheme, isDark } = useTheme();
  const { lang, setLang, t, isFrench } = useI18n();
  const { user, signInWithGoogle, signOut, syncState, syncLocalStorageToCloud } = useAuth();
  const { openOnboarding, triggerInstall, isNoviceMode, toggleNoviceMode } = useNoviceMode();

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
    5: <Sliders className="w-4 h-4 text-fuchsia-400" />,
  };

  const getSectionTitle = (secNumber: number, fallback: string) => {
    if (!isFrench) return fallback;
    if (currentTrack === 'pcep') {
      switch (secNumber) {
        case 1:
          return t.dashboard.pcepSec1Title;
        case 2:
          return t.dashboard.pcepSec2Title;
        case 3:
          return t.dashboard.pcepSec3Title;
        case 4:
          return t.dashboard.pcepSec4Title;
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pcpp') {
      switch (secNumber) {
        case 1:
          return 'POO Avancée, Métaclasses & MRO';
        case 2:
          return 'Conventions PEP & Patrons de conception';
        case 3:
          return 'Programmation GUI (Tkinter)';
        case 4:
          return 'Programmation Réseau & Sockets';
        case 5:
          return 'Traitement de données & Logging';
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pced') {
      switch (secNumber) {
        case 1:
          return 'Concepts Fondamentaux & Données';
        case 2:
          return 'Fondations Python pour l’Analyse';
        case 3:
          return 'Traitement & Analyses Simples';
        case 4:
          return 'Visualisation & Narration des Données';
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pcad') {
      switch (secNumber) {
        case 1:
          return 'Acquisition & Prétraitement de Données';
        case 2:
          return 'Compétences Programmation & SQL';
        case 3:
          return 'Analyse Statistique & Inférence';
        case 4:
          return 'Modélisation & Évaluation de Données';
        case 5:
          return 'Visualisation & Narration des Données';
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pcet') {
      switch (secNumber) {
        case 1:
          return 'Fondamentaux des Tests & Assurance Qualité';
        case 2:
          return 'Types, Niveaux et Processus de Test';
        case 3:
          return 'Analyse Statique & Refactoring';
        case 4:
          return 'Automatisation de Tests (pytest & CI/CD)';
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pcat') {
      switch (secNumber) {
        case 1:
          return 'Essentiels des Tests Logiciels';
        case 2:
          return 'Automatisation des Tests & Refactoring';
        case 3:
          return 'Assertions, Contextes, Décorateurs & Méthodes';
        case 4:
          return 'Fondations des Tests Unitaires';
        case 5:
          return 'Techniques Avancées de Tests Unitaires';
        case 6:
          return 'Développement TDD et BDD';
        default:
          return fallback;
      }
    }
    switch (secNumber) {
      case 1:
        return t.dashboard.sec1Title;
      case 2:
        return t.dashboard.sec2Title;
      case 3:
        return t.dashboard.sec3Title;
      case 4:
        return t.dashboard.sec4Title;
      case 5:
        return t.dashboard.sec5Title;
      default:
        return fallback;
    }
  };

  const getSectionDescription = (secNumber: number, fallback: string) => {
    if (!isFrench) return fallback;
    if (currentTrack === 'pcep') {
      switch (secNumber) {
        case 1:
          return t.dashboard.pcepSec1Desc;
        case 2:
          return t.dashboard.pcepSec2Desc;
        case 3:
          return t.dashboard.pcepSec3Desc;
        case 4:
          return t.dashboard.pcepSec4Desc;
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pcpp') {
      switch (secNumber) {
        case 1:
          return 'Modèle objet approfondi : métaclasses, ABC, C3 MRO, descripteurs, slots et sérialisation pickle.';
        case 2:
          return 'Conventions PEP 8/20/257 et patrons de conception GoF (créationnels, structurels, comportementaux).';
        case 3:
          return 'Interfaces graphiques Tkinter : widgets, gestionnaires de géométrie (pack/grid/place) et événements.';
        case 4:
          return 'Réseau TCP/IP, sockets bas niveau, requêtes HTTP REST avec requests et sérialisation JSON.';
        case 5:
          return 'Bases de données relationnelles sqlite3, XML ElementTree, CSV et journalisation logging.';
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pced') {
      switch (secNumber) {
        case 1:
          return 'Définition des données, échelles de mesure, sources et stockage, cycle DAMA et éthique.';
        case 2:
          return 'Environnement Python pour l’analyse de données, bibliothèques (NumPy, pandas) et syntaxe.';
        case 3:
          return 'Ingestion, traitement des valeurs manquantes, détection des anomalies et transformations.';
        case 4:
          return 'Principes de visualisation, graphiques (Matplotlib, Seaborn) et narration décisionnelle.';
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pcad') {
      switch (secNumber) {
        case 1:
          return 'Ingestion multi-formats, nettoyage, imputation, détection d’outliers, regex, fusion et feature engineering.';
        case 2:
          return 'Structures avancées Python, générateurs, décorateurs, SGBD relationnels, SQL avancé et intégration pandas-SQL.';
        case 3:
          return 'Statistiques descriptives, distributions théoriques, TCL, tests d’hypothèses (t-test, ANOVA, Chi-2) et régression OLS.';
        default:
          return fallback;
      }
    }
    switch (secNumber) {
      case 1:
        return t.dashboard.sec1Desc;
      case 2:
        return t.dashboard.sec2Desc;
      case 3:
        return t.dashboard.sec3Desc;
      case 4:
        return t.dashboard.sec4Desc;
      case 5:
        return t.dashboard.sec5Desc;
      default:
        return fallback;
    }
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
            <PythorLogo size="md" showText={false} />
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-slate-100 text-sm sm:text-base">
                  Pythor
                </span>
                <span className="font-semibold text-slate-300 text-xs sm:text-sm">
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
                <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono font-medium border ${
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
                    ? 'Entry'
                    : currentTrack === 'pcpp'
                    ? 'Professional'
                    : currentTrack === 'pced'
                    ? 'Data Analyst'
                    : currentTrack === 'pcad'
                    ? 'Assoc Analyst'
                    : currentTrack === 'pcet'
                    ? 'Tester'
                    : currentTrack === 'pcat'
                    ? 'Assoc Tester'
                    : currentTrack === 'pces'
                    ? 'Security'
                    : currentTrack === 'pcea'
                    ? 'Automation'
                    : currentTrack === 'pcei'
                    ? 'AI Specialist'
                    : 'Associate'}
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

        {/* PWA INSTALL QUICK BANNER */}
        <div className="px-5 py-2.5 bg-emerald-950/40 border-b border-emerald-500/30 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-emerald-300 text-xs font-semibold">
            <Download className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Mode Hors-Ligne (PWA)</span>
          </div>
          <button
            onClick={() => {
              triggerInstall();
              onClose();
            }}
            className="px-2.5 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            Installer
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
          {/* USER CLOUD ACCOUNT & FIRESTORE STATUS */}
          <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80">
            {user ? (
              <div className="space-y-2.5">
                <div className="flex items-center space-x-3">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || 'User'}
                      className="w-9 h-9 rounded-xl object-cover ring-1 ring-cyan-500/50"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white text-xs font-bold ring-1 ring-cyan-500/50">
                      {user.displayName?.[0] || user.email?.[0] || 'U'}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-white truncate">
                      {user.displayName || 'Python Candidate'}
                    </p>
                    <p className="text-[10px] text-slate-400 truncate">{user.email}</p>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" title="Firestore Connected" />
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
                  <div className="flex items-center space-x-1.5 text-[11px] text-emerald-400">
                    <Cloud className="w-3.5 h-3.5" />
                    <span>{isFrench ? 'Cloud Firestore Synchronisé' : 'Firestore Synced'}</span>
                  </div>
                  <button
                    onClick={() => signOut()}
                    className="text-[11px] text-red-400 hover:text-red-300 font-medium flex items-center space-x-1"
                  >
                    <LogOut className="w-3 h-3" />
                    <span>{isFrench ? 'Déconnexion' : 'Sign Out'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Cloud className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold text-slate-200">
                      {isFrench ? 'Synchronisation Cloud' : 'Firebase Cloud Sync'}
                    </span>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                    {isFrench ? 'Invité' : 'Guest'}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {isFrench
                    ? 'Connectez-vous avec Google pour sauvegarder vos cartes et votre progression SRS.'
                    : 'Sign in with Google to synchronize your custom cards and SRS recall across devices.'}
                </p>
                <button
                  onClick={() => {
                    signInWithGoogle();
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-xl bg-gradient-to-r from-blue-600/30 to-cyan-500/30 hover:from-blue-600/40 hover:to-cyan-500/40 border border-cyan-500/40 text-cyan-300 hover:text-white text-xs font-semibold transition-all"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>{isFrench ? 'Se connecter avec Google' : 'Sign in with Google'}</span>
                </button>
              </div>
            )}
          </div>

          {/* TRACK SWITCHER IN MENU */}
          <div>
            <div className="px-2 mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>{isFrench ? 'Parcours de certification' : 'Certification Track'}</span>
              <button
                onClick={() => {
                  onOpenCreateCard();
                  onClose();
                }}
                className="text-[11px] text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 font-semibold"
              >
                <Plus className="w-3 h-3" />
                <span>{isFrench ? '+ Créer carte' : '+ New Card'}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              <button
                onClick={() => onSelectTrack('pcep')}
                className={`p-2 rounded-xl border text-left transition-all ${
                  currentTrack === 'pcep'
                    ? 'bg-emerald-950/50 border-emerald-500/50 text-emerald-200 ring-1 ring-emerald-500/30'
                    : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/50 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-100">PCEP</span>
                  {currentTrack === 'pcep' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  )}
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                  {isFrench ? 'Débutant' : 'Entry'}
                </p>
              </button>

              <button
                onClick={() => onSelectTrack('pcap')}
                className={`p-2 rounded-xl border text-left transition-all ${
                  currentTrack === 'pcap'
                    ? 'bg-cyan-950/50 border-cyan-500/50 text-cyan-200 ring-1 ring-cyan-500/30'
                    : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/50 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-100">PCAP</span>
                  {currentTrack === 'pcap' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  )}
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                  {isFrench ? 'Associé' : 'Associate'}
                </p>
              </button>

              <button
                onClick={() => onSelectTrack('pcpp')}
                className={`p-2 rounded-xl border text-left transition-all ${
                  currentTrack === 'pcpp'
                    ? 'bg-purple-950/50 border-purple-500/50 text-purple-200 ring-1 ring-purple-500/30'
                    : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/50 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-100">PCPP</span>
                  {currentTrack === 'pcpp' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  )}
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                  {isFrench ? 'Pro (100k)' : 'Professional'}
                </p>
              </button>

              <button
                onClick={() => onSelectTrack('pced')}
                className={`p-2 rounded-xl border text-left transition-all ${
                  currentTrack === 'pced'
                    ? 'bg-amber-950/50 border-amber-500/50 text-amber-200 ring-1 ring-amber-500/30'
                    : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/50 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-100">PCED</span>
                  {currentTrack === 'pced' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  )}
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                  {isFrench ? 'Analyste' : 'Data Analyst'}
                </p>
              </button>

              <button
                onClick={() => onSelectTrack('pcad')}
                className={`p-2 rounded-xl border text-left transition-all ${
                  currentTrack === 'pcad'
                    ? 'bg-blue-950/50 border-blue-500/50 text-blue-200 ring-1 ring-blue-500/30'
                    : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/50 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-100">PCAD</span>
                  {currentTrack === 'pcad' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  )}
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                  {isFrench ? 'Analyste Pro' : 'Assoc Analyst'}
                </p>
              </button>

              <button
                onClick={() => onSelectTrack('pcet')}
                className={`p-2 rounded-xl border text-left transition-all ${
                  currentTrack === 'pcet'
                    ? 'bg-rose-950/50 border-rose-500/50 text-rose-200 ring-1 ring-rose-500/30'
                    : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/50 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-100">PCET</span>
                  {currentTrack === 'pcet' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  )}
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                  {isFrench ? 'Testeur' : 'Tester'}
                </p>
              </button>

              <button
                onClick={() => onSelectTrack('pcat')}
                className={`p-2 rounded-xl border text-left transition-all ${
                  currentTrack === 'pcat'
                    ? 'bg-teal-950/50 border-teal-500/50 text-teal-200 ring-1 ring-teal-500/30'
                    : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/50 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-100">PCAT</span>
                  {currentTrack === 'pcat' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  )}
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                  {isFrench ? 'Testeur Assoc' : 'Assoc Tester'}
                </p>
              </button>

              <button
                onClick={() => onSelectTrack('pces')}
                className={`p-2 rounded-xl border text-left transition-all ${
                  currentTrack === 'pces'
                    ? 'bg-amber-950/50 border-amber-500/50 text-amber-200 ring-1 ring-amber-500/30'
                    : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/50 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-100">PCES</span>
                  {currentTrack === 'pces' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  )}
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                  {isFrench ? 'Sécurité' : 'Security'}
                </p>
              </button>

              <button
                onClick={() => onSelectTrack('pcea')}
                className={`p-2 rounded-xl border text-left transition-all ${
                  currentTrack === 'pcea'
                    ? 'bg-emerald-950/50 border-emerald-500/50 text-emerald-200 ring-1 ring-emerald-500/30'
                    : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/50 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-100">PCEA</span>
                  {currentTrack === 'pcea' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  )}
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                  {isFrench ? 'Automatisation' : 'Automation'}
                </p>
              </button>

              <button
                onClick={() => onSelectTrack('pcei')}
                className={`p-2 rounded-xl border text-left transition-all ${
                  currentTrack === 'pcei'
                    ? 'bg-violet-950/50 border-violet-500/50 text-violet-200 ring-1 ring-violet-500/30'
                    : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/50 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-100">PCEI</span>
                  {currentTrack === 'pcei' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  )}
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                  {isFrench ? 'Intelligence Artificielle' : 'Artificial Intelligence'}
                </p>
              </button>
            </div>
          </div>

          {/* CATEGORY 1: Core Views & Workspaces */}
          <div>
            <div className="px-2 mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>Main Workspaces</span>
              <span className="text-[10px] text-slate-500 font-normal">Primary Modules</span>
            </div>
            <div className="space-y-1">
              <button
                onClick={() => {
                  onSelectView('landing');
                  onClose();
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  currentView === 'landing'
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Sparkles className={`w-4 h-4 ${currentView === 'landing' ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <div className="text-left">
                    <span className="block text-slate-100 font-medium leading-none">
                      {isFrench ? 'Page de Présentation' : 'Landing Page'}
                    </span>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      {isFrench ? 'Présentation PWA, catalogue & démo' : 'PWA overview, catalog & demo'}
                    </span>
                  </div>
                </div>
                {currentView === 'landing' ? (
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                )}
              </button>

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
              <span>
                {currentTrack === 'pcep'
                  ? 'PCEP-30-0x Exam Blueprint'
                  : currentTrack === 'pcpp'
                  ? 'PCPP-32-10x Exam Blueprint'
                  : currentTrack === 'pced'
                  ? 'PCED-30-02 Exam Blueprint'
                  : currentTrack === 'pcad'
                  ? 'PCAD-31-02 Exam Blueprint'
                  : currentTrack === 'pcet'
                  ? 'PCET-30-01 Exam Blueprint'
                  : currentTrack === 'pcat'
                  ? 'PCAT-31-0x Exam Blueprint'
                  : currentTrack === 'pces'
                  ? 'PCES-30-01 Exam Blueprint'
                  : currentTrack === 'pcea'
                  ? 'PCEA-30-01 Exam Blueprint'
                  : currentTrack === 'pcei'
                  ? 'PCEI-30-01 Exam Blueprint'
                  : 'PCAP-31-03 Exam Blueprint'}
              </span>
              <span className="text-[10px] text-slate-500 font-normal">
                {currentTrack === 'pcep' || currentTrack === 'pced' || currentTrack === 'pcet' || currentTrack === 'pces' || currentTrack === 'pcea'
                  ? '4 Blocks'
                  : currentTrack === 'pcat' || currentTrack === 'pcei'
                  ? '6 Blocks'
                  : '5 Sections'}
              </span>
            </div>
            <div className="space-y-1.5">
              {(currentTrack === 'pcep'
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
                : pcapSyllabusSections
              ).map((sec) => {
                const isSelected = selectedSection === `Section ${sec.number}`;
                const sectionCardCount = activeCards.filter(
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
                          Section {sec.number}: {getSectionTitle(sec.number, sec.title)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                          {sectionCardCount} {isFrench ? 'Cartes' : 'Cards'}
                        </span>
                        <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                          {sec.weight}
                        </span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400 mt-1.5 line-clamp-1">
                      {getSectionDescription(sec.number, sec.description)}
                    </p>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/60 text-[10px]">
                      <span className="text-slate-300 flex items-center space-x-1.5">
                        <strong className="text-cyan-400 font-semibold">
                          {isFrench
                            ? `${sectionCardCount} Cartes d’étude`
                            : `${sectionCardCount} Flashcards`}
                        </strong>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-400">
                          {sec.chapters.length} {isFrench ? 'Sous-chapitres' : 'Sub-chapters'}
                        </span>
                      </span>
                      <span className="text-cyan-400 hover:underline flex items-center space-x-0.5 font-medium">
                        <span>{isFrench ? 'Étudier' : 'Study Cards'}</span>
                        <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* PREFERENCES: Language & Light Theme Switch */}
          <div>
            <div className="px-2 mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>{isFrench ? 'Langue & Thème visuel' : 'Language & Visual Theme'}</span>
              <span className="text-[10px] text-cyan-400 font-mono font-medium">
                {lang.toUpperCase()} • {isDark ? 'DARK' : 'LIGHT'}
              </span>
            </div>
            <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-3">
              {/* Language Selection */}
              <div>
                <label className="text-[11px] font-medium text-slate-400 flex items-center space-x-1.5 mb-1.5">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isFrench ? 'Sélectionner la langue' : 'Select Language'}</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setLang('en')}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center space-x-2 border transition-all ${
                      lang === 'en'
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/80'
                    }`}
                  >
                    <span className="text-sm">🇬🇧</span>
                    <span>English</span>
                  </button>
                  <button
                    onClick={() => setLang('fr')}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center space-x-2 border transition-all ${
                      lang === 'fr'
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/80'
                    }`}
                  >
                    <span className="text-sm">🇫🇷</span>
                    <span>Français</span>
                  </button>
                </div>
              </div>

              {/* Theme Selection */}
              <div>
                <label className="text-[11px] font-medium text-slate-400 flex items-center space-x-1.5 mb-1.5">
                  {isDark ? <Moon className="w-3.5 h-3.5 text-cyan-400" /> : <Sun className="w-3.5 h-3.5 text-amber-400" />}
                  <span>{isFrench ? 'Basculer le thème' : 'Switch Theme'}</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => { if (isDark) toggleTheme(); }}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center space-x-2 border transition-all ${
                      !isDark
                        ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-sm'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/80'
                    }`}
                  >
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span>{t.nav.light}</span>
                  </button>
                  <button
                    onClick={() => { if (!isDark) toggleTheme(); }}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center space-x-2 border transition-all ${
                      isDark
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/80'
                    }`}
                  >
                    <Moon className="w-4 h-4 text-slate-950" />
                    <span>{t.nav.dark}</span>
                  </button>
                </div>
              </div>
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
                onClick={() => {
                  onClose();
                  openOnboarding();
                }}
                className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs text-amber-300 hover:text-amber-200 hover:bg-amber-500/10 transition-colors"
              >
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Mentions Légales, Avertissements & Guide Novice</span>
              </button>

              <button
                onClick={toggleNoviceMode}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors ${
                  isNoviceMode
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-medium'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <Lightbulb className={`w-3.5 h-3.5 ${isNoviceMode ? 'text-amber-400 animate-pulse' : 'text-slate-500'}`} />
                  <span>Mode Guide Novice (Infobulles actives)</span>
                </div>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  isNoviceMode ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  {isNoviceMode ? 'ON' : 'OFF'}
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
