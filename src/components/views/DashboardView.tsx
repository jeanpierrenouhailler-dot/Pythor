import React from 'react';
import {
  ShieldCheck,
  Layers,
  GraduationCap,
  Code2,
  BookMarked,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  ChevronRight,
  Terminal,
  Zap,
  Package,
  AlertTriangle,
  Box,
  Brain,
  Award,
  BookOpen,
  RefreshCw,
  Settings,
  Radio,
} from 'lucide-react';
import { AppView, Flashcard } from '../../types';
import { pcapSyllabusSections } from '../../data/pcapData';
import { useSystemSettings } from '../../context/SystemSettingsContext';

interface DashboardViewProps {
  cards: Flashcard[];
  onNavigate: (view: AppView, section?: string, chapter?: string) => void;
  reviewedCount: number;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  cards,
  onNavigate,
  reviewedCount,
}) => {
  const { settings, checkForUpdates, forceUpdate, setIsSettingsOpen } = useSystemSettings();
  // Count SRS breakdown
  const getSrsStats = () => {
    try {
      const saved = localStorage.getItem('pcap_srs_state');
      if (!saved) {
        return { mastered: 0, learning: 0, review: 0, fresh: cards.length };
      }
      const data = JSON.parse(saved);
      let mastered = 0;
      let learning = 0;
      let review = 0;

      Object.values(data).forEach((item: any) => {
        if (item.status === 'mastered') mastered++;
        else if (item.status === 'review') review++;
        else if (item.status === 'learning') learning++;
      });

      const fresh = Math.max(0, cards.length - (mastered + learning + review));
      return { mastered, learning, review, fresh };
    } catch {
      return { mastered: 0, learning: 0, review: 0, fresh: cards.length };
    }
  };

  const srsStats = getSrsStats();
  const progressPercent = cards.length > 0 ? Math.round((reviewedCount / cards.length) * 100) : 0;
  const readinessPercent = Math.min(100, Math.round((srsStats.mastered * 1.0 + srsStats.review * 0.6 + srsStats.learning * 0.3) / (cards.length || 1) * 100));

  const section4Chapters = [
    { id: '4.1', title: 'Understand the OOP Approach', range: 'Cards 1–20', focus: 'Classes vs. instances, identity vs. equality, dynamic attributes, id(), and basic structures' },
    { id: '4.2', title: 'Instance vs. Class Variables', range: 'Cards 21–40', focus: 'Attribute shadowing, __dict__ namespaces, lookup delegation, hasattr/getattr, and mutable traps' },
    { id: '4.3', title: 'Name Mangling & Private Attributes', range: 'Cards 41–60', focus: 'Double leading underscores, _Class__var mangling, subclass collision protection, consenting adults' },
    { id: '4.4', title: 'Methods, Constructors & Dunders', range: 'Cards 61–80', focus: 'Explicit self, __init__ returning None, __str__ vs __repr__, operator overloading, __bases__, __name__' },
    { id: '4.5', title: 'Inheritance, Polymorphism & MRO', range: 'Cards 81–100', focus: 'Single/multiple inheritance, super(), isinstance/issubclass, C3 linearization, diamond resolution' },
  ];

  const highYieldTraps = [
    { title: '__init__ Return Trap', text: 'An __init__ constructor must return None (or have no return statement). Returning any value like an int or string raises a TypeError at runtime.' },
    { title: 'Name Mangling Syntax', text: 'Double leading underscores (e.g., __salary) are transformed to _ClassName__salary at compile time. It is name mangling, not strict privacy.' },
    { title: 'MRO & Diamond Inheritance', text: 'Python uses C3 Linearization. Search order is checked left-to-right through subclasses before common ancestor bases.' },
    { title: 'Attribute Shadowing', text: 'Writing self.count = 5 creates an instance variable that shadows any existing class-level count variable without modifying the class attribute.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* Hero Banner with Certification Status */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800/80 p-6 sm:p-8 shadow-xl">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Python Institute PCAP-31-03 Alignment</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              PCAP Python Certification Prep Studio
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Master the Certified Associate in Python Programming exam with spaced repetition (SRS), 
              featuring 100-card deep dives across all curriculum domains: <strong className="text-cyan-400 font-semibold">Section 1 (Modules & PIP)</strong>, <strong className="text-emerald-400 font-semibold">Section 2 (Strings & Exceptions)</strong>, <strong className="text-amber-400 font-semibold">Section 3 (Functions & Generators)</strong>, and <strong className="text-indigo-400 font-semibold">Section 4 (OOP)</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('flashcards', 'Section 1')}
                className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/25 flex items-center space-x-2"
              >
                <Package className="w-4 h-4" />
                <span>Section 1 (100 Cards)</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => onNavigate('flashcards', 'Section 2')}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-600/25 flex items-center space-x-2"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>Section 2 (100 Cards)</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => onNavigate('flashcards', 'Section 3')}
                className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm transition-all shadow-lg shadow-amber-600/25 flex items-center space-x-2"
              >
                <Zap className="w-4 h-4" />
                <span>Section 3 (100 Cards)</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => onNavigate('flashcards', 'Section 4')}
                className="px-4 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-500/25 flex items-center space-x-2"
              >
                <Layers className="w-4 h-4" />
                <span>Section 4 (100 OOP Cards)</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => onNavigate('exam')}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700/80 text-slate-200 border border-slate-700/60 font-medium text-sm transition-colors flex items-center space-x-2"
              >
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>Start Practice Exam</span>
              </button>

              <button
                onClick={() => onNavigate('cheatsheet')}
                className="px-4 py-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/50 font-medium text-sm transition-colors flex items-center space-x-2"
              >
                <BookMarked className="w-4 h-4 text-sky-400" />
                <span>Dunder Cheatsheet</span>
              </button>
            </div>
          </div>

          {/* Exam Readiness Card */}
          <div className="w-full lg:w-80 bg-slate-950/80 border border-slate-800 rounded-2xl p-5 backdrop-blur-md shadow-inner">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Exam Readiness
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Pass Mark: 70%
              </span>
            </div>

            <div className="flex items-baseline space-x-2 mb-3">
              <span className="text-3xl font-bold font-mono text-cyan-400">
                {readinessPercent}%
              </span>
              <span className="text-xs text-slate-400">estimated retention</span>
            </div>

            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-500"
                style={{ width: `${readinessPercent}%` }}
              />
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs border-t border-slate-800/80 pt-3">
              <div className="flex flex-col">
                <span className="text-slate-400">Total Cards</span>
                <span className="font-mono font-semibold text-slate-200">{cards.length} Flashcards</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400">Reviewed</span>
                <span className="font-mono font-semibold text-cyan-300">{reviewedCount} ({progressPercent}%)</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400">Mastered (SRS)</span>
                <span className="font-mono font-semibold text-emerald-400">{srsStats.mastered} Cards</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400">In Learning</span>
                <span className="font-mono font-semibold text-amber-400">{srsStats.learning} Cards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Functional Workspaces Hub */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Study Workspaces & Features</span>
            </h2>
            <p className="text-xs text-slate-400">
              Access all learning tools directly or open the top-left Hamburger Menu from any page.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Flashcards & SRS */}
          <div
            onClick={() => onNavigate('flashcards')}
            className="group cursor-pointer p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-850 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-cyan-500/20">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-100 text-base group-hover:text-cyan-300 transition-colors">
                Flashcards & SRS Studio
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Active recall with Spaced Repetition ratings, executable Python code snippets, and expected output checks.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-medium">
              <span>{cards.length} Cards available</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Exam Simulator */}
          <div
            onClick={() => onNavigate('exam')}
            className="group cursor-pointer p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-amber-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-100 text-base group-hover:text-amber-300 transition-colors">
                PCAP Exam Simulator
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Timed 10 to 25 question practice test simulating real certification conditions with automatic grading.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-400 font-medium">
              <span>Timed Practice Mode</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Code Lab */}
          <div
            onClick={() => onNavigate('codelab')}
            className="group cursor-pointer p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-850 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-indigo-500/20">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-100 text-base group-hover:text-indigo-300 transition-colors">
                Python OOP Code Lab
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Interactive code viewer demonstrating C3 MRO diamond inheritance, name mangling, and attribute delegation.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-indigo-400 font-medium">
              <span>Interactive Sandbox</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Dunder Cheatsheet */}
          <div
            onClick={() => onNavigate('cheatsheet')}
            className="group cursor-pointer p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-850 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-sky-500/20">
                <BookMarked className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-100 text-base group-hover:text-sky-300 transition-colors">
                PCAP Dunder Cheatsheet
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Quick lookup for __init__, __str__, __repr__, __bases__, __mro__, name mangling rules and operator dunders.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-sky-400 font-medium">
              <span>Official Reference</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Official Syllabus Blueprint (The 4 PCAP Sections) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Official PCAP-31-03 Blueprint Domains</span>
            </h2>
            <p className="text-xs text-slate-400">
              Weights and curriculum syllabus defined by the Python Institute.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pcapSyllabusSections.map((sec) => {
            const isHighlighted = sec.number >= 1 && sec.number <= 4;
            const secCardsCount = cards.filter((c) => c.section === `Section ${sec.number}`).length;

            return (
              <div
                key={sec.id}
                className={`p-5 rounded-2xl border transition-all ${
                  isHighlighted
                    ? 'bg-slate-900/90 border-cyan-500/40 ring-1 ring-cyan-500/20'
                    : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-xl ${isHighlighted ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-300'}`}>
                      {sec.number === 1 && <Package className="w-5 h-5" />}
                      {sec.number === 2 && <AlertTriangle className="w-5 h-5" />}
                      {sec.number === 3 && <Zap className="w-5 h-5" />}
                      {sec.number === 4 && <Box className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono font-medium text-slate-400">Section {sec.number}</span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                          {secCardsCount} {isHighlighted ? 'Deep-Dive Cards' : 'Cards'}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-100">{sec.title}</h3>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-slate-800 text-cyan-300 border border-slate-700">
                    {sec.weight}
                  </span>
                </div>

                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  {sec.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    <strong className="text-cyan-400 font-medium">{secCardsCount} Flashcards</strong> • {sec.chapters.length} Sub-chapters
                  </span>
                  <button
                    onClick={() => onNavigate('flashcards', `Section ${sec.number}`)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
                  >
                    <span>Launch Study Cards</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 4 Deep-Dive Sub-Chapter Breakdown */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                Core Focus (34% Weight)
              </span>
              <h2 className="text-lg font-bold text-white">
                Section 4: Object-Oriented Programming (100 Cards)
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Select any sub-chapter to launch targeted active recall flashcards.
            </p>
          </div>

          <button
            onClick={() => onNavigate('flashcards', 'Section 4')}
            className="self-start sm:self-auto px-3.5 py-1.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/25 transition-colors flex items-center space-x-1.5"
          >
            <span>Browse All 100 Cards</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
          {section4Chapters.map((chap) => (
            <div
              key={chap.id}
              onClick={() => onNavigate('flashcards', 'Section 4', chap.id)}
              className="group cursor-pointer p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono font-bold text-cyan-400">Chapter {chap.id}</span>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                    {chap.range}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                  {chap.title}
                </h4>
                <p className="text-[11px] text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                  {chap.focus}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-cyan-400 font-medium">
                <span>Start Chapter {chap.id}</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* High-Yield PCAP Exam Traps */}
      <section className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 space-y-4">
        <h2 className="text-base font-bold text-white flex items-center space-x-2">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span>High-Yield PCAP-31-03 Exam Traps & Gotchas</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {highYieldTraps.map((trap, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/60 text-xs">
              <span className="font-semibold text-amber-300 block mb-1">{trap.title}</span>
              <p className="text-slate-400 leading-relaxed">{trap.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* System Settings & Background Updates Overview Card */}
      <section className="bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-cyan-950/20 border border-slate-800 rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Settings className="w-4 h-4" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                System Engine & Update Manager
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                {settings.currentVersion}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white">
              Client Runtime & Background Release Sync
            </h3>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-300 pt-1">
              <div>
                <span className="text-slate-500">Release Date: </span>
                <strong className="text-slate-200">{settings.releaseDate}</strong>
              </div>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <div>
                <span className="text-slate-500">Last Checked: </span>
                <strong className="text-slate-200">
                  {settings.lastChecked ? new Date(settings.lastChecked).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Never'}
                </strong>
              </div>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <div className="flex items-center space-x-1.5">
                <span className={`w-2 h-2 rounded-full ${settings.autoUpdateEnabled ? 'bg-emerald-400 animate-pulse' : 'bg-slate-600'}`} />
                <span className="text-slate-300">
                  Automatic Background Updates: <strong className={settings.autoUpdateEnabled ? 'text-emerald-400' : 'text-slate-400'}>{settings.autoUpdateEnabled ? 'Active' : 'Disabled'}</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={() => checkForUpdates(true)}
              disabled={settings.status === 'checking' || settings.status === 'downloading'}
              className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs shadow-sm transition-all flex items-center space-x-1.5"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${settings.status === 'checking' ? 'animate-spin' : ''}`} />
              <span>Check for Updates</span>
            </button>

            <button
              onClick={forceUpdate}
              disabled={settings.status === 'checking' || settings.status === 'downloading'}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-50 border border-slate-700 text-slate-200 hover:text-white font-semibold text-xs transition-all flex items-center space-x-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Force Update</span>
            </button>

            <button
              onClick={() => setIsSettingsOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 text-slate-300 hover:text-white font-medium text-xs transition-all flex items-center space-x-1.5"
            >
              <Settings className="w-3.5 h-3.5 text-cyan-400" />
              <span>System Settings</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
