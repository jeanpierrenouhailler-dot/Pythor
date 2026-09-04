import React, { useState } from 'react';
import { SkillModule, SkillNode } from '../types';
import {
  PlayCircle,
  CheckCircle2,
  Code,
  Zap,
  Info,
  ChevronLeft,
  ChevronRight,
  X,
  Copy,
  Check,
  BookOpen,
  PanelRightClose,
  Maximize2,
  ExternalLink,
  Target,
  Sparkles,
} from 'lucide-react';

interface ParcoursDetailsPanelProps {
  node: SkillNode;
  module?: SkillModule;
  isPcap: boolean;
  onLaunchChallenge: () => void;
  isLaunching: boolean;
  onClose?: () => void;
  onSelectPrevNode?: () => void;
  onSelectNextNode?: () => void;
  hasPrevNode?: boolean;
  hasNextNode?: boolean;
  displayMode?: 'drawer' | 'docked';
  onChangeDisplayMode?: (mode: 'drawer' | 'docked') => void;
  onScrollToSection?: () => void;
}

export const ParcoursDetailsPanel: React.FC<ParcoursDetailsPanelProps> = ({
  node,
  module,
  isPcap,
  onLaunchChallenge,
  isLaunching,
  onClose,
  onSelectPrevNode,
  onSelectNextNode,
  hasPrevNode = false,
  hasNextNode = false,
  displayMode = 'drawer',
  onChangeDisplayMode,
  onScrollToSection,
}) => {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    if (node.codeSnippet) {
      navigator.clipboard.writeText(node.codeSnippet);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="flex flex-col h-full gap-5">
      {/* Top Header & Navigation Bar */}
      <div className="flex items-start justify-between pb-3.5 border-b border-[#262626]">
        <div className="flex-1 pr-3">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span
              className={`font-mono text-xs uppercase font-bold tracking-[1.5px] px-2.5 py-0.5 rounded border ${
                isPcap
                  ? 'bg-blue-950/70 border-blue-500/50 text-blue-300'
                  : 'bg-[#1C1C1C] border-[#C5A059]/40 text-[#C5A059]'
              }`}
            >
              {node.pcepCode}
            </span>
            {module && (
              <span className="text-xs text-[#8A8A8A] font-mono truncate max-w-[220px]">
                {module.title}
              </span>
            )}
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#161616] text-[#A0A0A0] border border-[#262626]">
              {node.examWeight || `${module?.examWeightPercent || 20}% Exam Weight`}
            </span>
          </div>
          <h3 className="text-xl text-[#F5F5F5] font-serif font-medium mt-1 leading-snug">
            {node.title}
          </h3>
        </div>

        {/* Action Controls & Pagination */}
        <div className="flex items-center gap-1 shrink-0">
          {/* Previous / Next Chapter Buttons */}
          <div className="flex items-center bg-[#181818] rounded-lg border border-[#2A2A2A] p-0.5 mr-1">
            <button
              onClick={onSelectPrevNode}
              disabled={!hasPrevNode}
              title="Previous Chapter"
              className={`p-1.5 rounded transition-colors ${
                hasPrevNode
                  ? 'text-neutral-300 hover:text-white hover:bg-[#262626]'
                  : 'text-neutral-600 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onSelectNextNode}
              disabled={!hasNextNode}
              title="Next Chapter"
              className={`p-1.5 rounded transition-colors ${
                hasNextNode
                  ? 'text-neutral-300 hover:text-white hover:bg-[#262626]'
                  : 'text-neutral-600 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mode Switcher (Docked vs Slide-over) */}
          {onChangeDisplayMode && (
            <button
              onClick={() =>
                onChangeDisplayMode(displayMode === 'drawer' ? 'docked' : 'drawer')
              }
              title={
                displayMode === 'drawer'
                  ? 'Switch to Embedded Side Panel'
                  : 'Switch to Instant Slide-Over Drawer'
              }
              className="p-1.5 rounded-lg bg-[#181818] border border-[#2A2A2A] text-neutral-400 hover:text-white hover:bg-[#262626] transition-colors"
            >
              {displayMode === 'drawer' ? (
                <PanelRightClose className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>
          )}

          {/* Close Button (for Drawer mode) */}
          {onClose && (
            <button
              onClick={onClose}
              title="Close Details (Esc)"
              className="p-1.5 rounded-lg bg-[#181818] border border-[#2A2A2A] text-neutral-400 hover:text-white hover:bg-[#262626] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Quick Metrics Bar */}
      <div className="grid grid-cols-3 gap-2.5 bg-[#0E0E0E] p-3 rounded-xl border border-[#262626] shadow-inner text-center">
        <div className="flex flex-col">
          <span className="font-mono text-[10px] text-[#737373] uppercase tracking-wider">
            DURATION
          </span>
          <span className="text-xs font-medium text-[#F5F5F5] mt-0.5">
            {node.duration}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-[10px] text-[#737373] uppercase tracking-wider">
            REWARD
          </span>
          <div
            className={`flex items-center justify-center gap-1 mt-0.5 ${
              isPcap ? 'text-blue-400' : 'text-[#C5A059]'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span className="text-xs font-semibold">+{node.xp} XP</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-[10px] text-[#737373] uppercase tracking-wider">
            MASTERY
          </span>
          <span
            className={`text-xs font-semibold mt-0.5 ${
              node.status === 'mastered'
                ? 'text-emerald-400'
                : isPcap
                ? 'text-blue-300'
                : 'text-[#DFC287]'
            }`}
          >
            {node.status === 'mastered' ? 'Mastered ✓' : `${node.progressPercent}% Ready`}
          </span>
        </div>
      </div>

      {/* Syllabus Pedagogical Description */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-semibold flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-neutral-400" />
            Syllabus Core Objective
          </span>
          {onScrollToSection && (
            <button
              onClick={onScrollToSection}
              className="text-[10px] font-mono text-neutral-400 hover:text-white underline transition-colors"
            >
              Locate in tree ↓
            </button>
          )}
        </div>
        <div className="text-xs text-[#A0A0A0] leading-relaxed bg-[#111111] p-3.5 rounded-xl border border-[#222222]">
          {node.fullDesc}
        </div>
      </div>

      {/* Official Syllabus Focus Points */}
      {node.syllabusItems && node.syllabusItems.length > 0 && (
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-300 font-semibold flex items-center gap-1.5">
            <Target className={`w-3.5 h-3.5 ${isPcap ? 'text-blue-400' : 'text-[#C5A059]'}`} />
            Official Exam Requirements:
          </span>
          <ul className="space-y-1.5 text-xs text-neutral-300 font-sans bg-[#0E0E0E] p-3 rounded-xl border border-[#222]">
            {node.syllabusItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span
                  className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    isPcap ? 'bg-blue-400 shadow-sm shadow-blue-400/50' : 'bg-[#C5A059]'
                  }`}
                />
                <span className="leading-snug text-neutral-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Live Python Code Snippet Preview */}
      {node.codeSnippet && (
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
            <span className="flex items-center gap-1 text-neutral-300">
              <Code className={`w-3.5 h-3.5 ${isPcap ? 'text-blue-400' : 'text-[#C5A059]'}`} />
              Python 3.12 Syntax Reference
            </span>
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1 text-[10px] text-neutral-400 hover:text-white px-2 py-0.5 rounded bg-[#1C1C1C] border border-[#2E2E2E] transition-colors"
            >
              {copiedCode ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-3.5 bg-[#090D16] rounded-xl border border-blue-900/30 text-xs font-mono text-blue-200 overflow-x-auto leading-relaxed max-h-48 shadow-inner">
            <code>{node.codeSnippet}</code>
          </pre>
        </div>
      )}

      {/* Hands-On Exercises Checklist */}
      {node.exercises && node.exercises.length > 0 && (
        <div className="flex flex-col gap-2 pt-2 border-t border-[#262626]">
          <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-semibold flex items-center justify-between">
            <span>Exercises in this chapter:</span>
            <span className="text-neutral-500 font-normal">
              {node.exercises.filter((e) => e.completed).length}/{node.exercises.length} Complete
            </span>
          </span>
          <div className="space-y-1.5">
            {node.exercises.map((ex, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#141414] border border-[#262626] text-xs hover:border-[#383838] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2
                    className={`w-4 h-4 ${
                      ex.completed ? 'text-emerald-400' : 'text-neutral-600'
                    }`}
                  />
                  <span
                    className={
                      ex.completed
                        ? 'text-neutral-400 line-through'
                        : 'text-neutral-200 font-medium'
                    }
                  >
                    {ex.title}
                  </span>
                </div>
                {ex.time && (
                  <span className="font-mono text-[10px] text-neutral-500">
                    {ex.time}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Primary Practice Launcher CTA */}
      <div className="pt-3 mt-auto border-t border-[#262626] space-y-2">
        <button
          onClick={onLaunchChallenge}
          disabled={isLaunching}
          className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider shadow-lg transition-all font-sans cursor-pointer ${
            isPcap
              ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30 active:scale-[0.99]'
              : 'bg-[#C5A059] hover:bg-[#D6B574] text-[#0A0A0A] shadow-amber-500/20 active:scale-[0.99]'
          }`}
        >
          <PlayCircle className="w-4 h-4" />
          <span>Launch Chapter Practice in IDE Studio</span>
        </button>

        <div className="flex items-center justify-between px-1 text-[11px] text-neutral-500 font-mono">
          <span>Keyboard: Press Enter to launch</span>
          {onClose && <span>Esc to close</span>}
        </div>
      </div>
    </div>
  );
};
