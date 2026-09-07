import React from 'react';
import { Award, BookOpen, Layers, Sparkles } from 'lucide-react';

interface NavbarProps {
  totalCards: number;
  reviewedCount: number;
  selectedSection: string;
  onSelectSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  totalCards,
  reviewedCount,
  selectedSection,
  onSelectSection,
}) => {
  const progressPercent = totalCards > 0 ? Math.round((reviewedCount / totalCards) * 100) : 0;

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo and Exam Title */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400/30">
            <span className="font-mono font-bold text-white text-lg">Py</span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-slate-100 tracking-tight text-base sm:text-lg">
                PCAP-31-03
              </span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                Official Exam Prep
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Certified Associate in Python Programming • Spaced Repetition Studio
            </p>
          </div>
        </div>

        {/* Section Quick Switcher */}
        <nav className="flex items-center space-x-1 sm:space-x-2">
          {[
            { id: 'all', label: 'All Cards', count: totalCards },
            { id: 'Section 4', label: 'Section 4 (OOP)', count: 100, highlight: true },
            { id: 'Section 1', label: 'Sec 1', count: 5 },
            { id: 'Section 2', label: 'Sec 2', count: 3 },
            { id: 'Section 3', label: 'Sec 3', count: 3 },
          ].map((sec) => (
            <button
              key={sec.id}
              onClick={() => onSelectSection(sec.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center space-x-1.5 ${
                selectedSection === sec.id
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span>{sec.label}</span>
              {sec.highlight && (
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              )}
            </button>
          ))}
        </nav>

        {/* Global Progress */}
        <div className="hidden md:flex items-center space-x-3 bg-slate-900/60 border border-slate-800 rounded-xl px-3.5 py-1.5">
          <div className="flex flex-col items-end">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
              Mastery Progress
            </span>
            <span className="text-xs font-mono font-medium text-cyan-400">
              {reviewedCount} / {totalCards} ({progressPercent}%)
            </span>
          </div>
          <div className="w-16 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
