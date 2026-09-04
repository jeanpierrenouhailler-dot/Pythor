import React, { useState, useEffect, useRef } from 'react';
import { SkillModule, SkillNode, TrackId } from '../../types';
import { CertificationTrackSelector } from '../CertificationTrackSelector';
import { ParcoursDetailsPanel } from '../ParcoursDetailsPanel';
import {
  Terminal,
  PlayCircle,
  CheckCircle2,
  Lock,
  Star,
  ChevronRight,
  Code,
  Sparkles,
  ArrowDown,
  Info,
  Clock,
  Zap,
  Check,
  Award,
  BookOpen,
  ArrowLeft,
  Eye,
  X,
  Maximize2,
  PanelRightClose,
  ArrowDownCircle,
  SlidersHorizontal,
} from 'lucide-react';

interface ParcoursViewProps {
  activeTrack?: TrackId;
  onSelectTrack?: (track: TrackId) => void;
  modules: SkillModule[];
  onLaunchChallenge: (challengeId?: string) => void;
  onNavigateExam?: () => void;
  onNavigateBack?: () => void;
  previousViewTitle?: string;
}

export const ParcoursView: React.FC<ParcoursViewProps> = ({
  activeTrack = 'pcap-31-03',
  onSelectTrack,
  modules,
  onLaunchChallenge,
  onNavigateExam,
  onNavigateBack,
  previousViewTitle = 'Dashboard',
}) => {
  const isPcap = activeTrack === 'pcap-31-03';
  const [filter, setFilter] = useState<'all' | 'active' | 'mastered' | 'locked'>('all');

  // Default selected node: first node or default chapter
  const [selectedNode, setSelectedNode] = useState<SkillNode>(modules[0]?.nodes[0]);
  const [isLaunching, setIsLaunching] = useState(false);

  // Intuitive details display system:
  // 'drawer' = Instant slide-over sheet (opens right in front of user, no scrolling needed)
  // 'docked' = Split-screen panel with automatic smooth focus/scroll to panel
  const [displayMode, setDisplayMode] = useState<'drawer' | 'docked'>('drawer');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const dockedPanelRef = useRef<HTMLDivElement>(null);

  // Flatten all nodes to allow linear previous/next chapter browsing
  const allNodes = modules.flatMap((m) => m.nodes);
  const currentNodeIndex = allNodes.findIndex((n) => n.id === selectedNode?.id);
  const prevNode = currentNodeIndex > 0 ? allNodes[currentNodeIndex - 1] : null;
  const nextNode =
    currentNodeIndex >= 0 && currentNodeIndex < allNodes.length - 1
      ? allNodes[currentNodeIndex + 1]
      : null;

  // Find parent module for the selected node
  const selectedModule = modules.find((m) =>
    m.nodes.some((n) => n.id === selectedNode?.id)
  );

  // Sync selected node when track or modules change
  useEffect(() => {
    if (modules && modules.length > 0) {
      const foundInCurrent = modules
        .flatMap((m) => m.nodes)
        .find((n) => n.id === selectedNode?.id);
      if (!foundInCurrent) {
        setSelectedNode(modules[0].nodes[0]);
      }
    }
  }, [modules, activeTrack]);

  // Keyboard shortcut listener: Esc closes drawer, Enter launches exercise
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
      if (e.key === 'Enter' && isDrawerOpen && !isLaunching) {
        handleLaunch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDrawerOpen, isLaunching, selectedNode]);

  const handleLaunch = () => {
    setIsLaunching(true);
    setTimeout(() => {
      setIsLaunching(false);
      onLaunchChallenge(
        selectedNode?.challengeId ||
          (isPcap ? 'challenge-pcap-1-1' : 'challenge-pcep-2-3')
      );
    }, 350);
  };

  const handleSelectNode = (node: SkillNode, openDrawer = true) => {
    setSelectedNode(node);
    if (displayMode === 'drawer') {
      if (openDrawer) {
        setIsDrawerOpen(true);
      }
    } else {
      // In docked mode, smooth-scroll directly to the docked panel so user never has to scroll back and forth!
      setTimeout(() => {
        dockedPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    }
  };

  const handleSelectSection = (module: SkillModule) => {
    if (module.nodes.length > 0) {
      handleSelectNode(module.nodes[0], true);
    }
  };

  const scrollToDockedPanel = () => {
    dockedPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const filteredModules = modules.filter((m) => {
    if (filter === 'all') return true;
    if (filter === 'mastered') return m.status === 'mastered';
    if (filter === 'active') return m.status === 'active';
    if (filter === 'locked') return m.status === 'locked';
    return true;
  });

  const totalChapters = modules.reduce((acc, m) => acc + m.nodes.length, 0);
  const masteredChapters = modules.reduce(
    (acc, m) => acc + m.nodes.filter((n) => n.status === 'mastered').length,
    0
  );
  const overallReadyPercent = Math.round((masteredChapters / Math.max(1, totalChapters)) * 100);

  return (
    <div className="w-full bg-[#0A0A0A] text-[#F5F5F5] min-h-[calc(100vh-4rem)] pb-16">
      {/* Sub-Header Status & Track Bar */}
      <section className="w-full bg-[#0A0A0A]/90 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-4 border-b border-[#262626] sticky top-16 z-20">
        <div className="max-w-[1720px] mx-auto flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
          {/* Return Button & Track Meta */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {onNavigateBack && (
              <button
                onClick={onNavigateBack}
                id="parcours-return-button"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-[#202020] border border-[#2D2D2D] hover:border-[#454545] text-xs text-[#E5E5E5] hover:text-white font-medium transition-all group shadow-sm shrink-0"
                title={previousViewTitle ? `Return to ${previousViewTitle} (Alt+←)` : 'Return to previous screen (Alt+←)'}
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#A0A0A0] group-hover:text-white transition-transform group-hover:-translate-x-0.5" />
                <span className="font-semibold text-[11px] uppercase tracking-wider text-neutral-300 group-hover:text-white">Return</span>
                {previousViewTitle && (
                  <span className="text-neutral-400 font-normal">
                    • {previousViewTitle}
                  </span>
                )}
              </button>
            )}

            <div className="flex items-center gap-3.5">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-inner border ${
                  isPcap
                    ? 'bg-[#0E172A] border-blue-500/50 shadow-blue-500/10'
                    : 'bg-[#141414] border-[#C5A059]/40 shadow-amber-500/10'
                }`}
              >
                <Award className={`w-5 h-5 ${isPcap ? 'text-blue-400' : 'text-[#C5A059]'}`} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-base sm:text-lg font-serif font-medium tracking-wide text-[#F5F5F5]">
                    {isPcap
                      ? 'Official PCAP™ Syllabus – Certified Associate Python Programmer'
                      : 'Official PCEP™ Syllabus – Certified Entry-Level Python Programmer'}
                  </span>
                  <span
                    className={`text-[10px] uppercase tracking-[1.5px] px-2 py-0.5 rounded font-mono font-bold ${
                      isPcap
                        ? 'bg-blue-950/60 border border-blue-500/50 text-blue-300'
                        : 'bg-[#141414] border border-[#C5A059]/40 text-[#C5A059]'
                    }`}
                  >
                    {isPcap ? 'PCAP-31-03' : 'PCEP-30-02'}
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#A0A0A0] flex-wrap">
                  <span>
                    {isPcap
                      ? '5 Exam Sections (12%, 14%, 18%, 34%, 22%)'
                      : '4 Exam Blocks (18%, 29%, 25%, 28%)'}
                  </span>
                  <span className="text-[#383838]">•</span>
                  <span className={isPcap ? 'text-blue-400 font-semibold' : 'text-[#C5A059] font-semibold'}>
                    {isPcap ? '22 Chapters (1.1 → 5.5)' : '16 Chapters (1.1 → 4.4)'}
                  </span>
                  <span className="text-[#383838]">•</span>
                  <span>Passing Score: 70% • {isPcap ? '65 min' : '45 min'}</span>
                </div>
              </div>
            </div>

            {/* Global Progress Bar Pill */}
            <div className="hidden sm:flex items-center gap-2.5 bg-[#141414] px-3.5 py-1.5 rounded-full border border-[#262626] shadow-inner">
              <div className="w-36 h-1.5 rounded-full bg-[#262626] overflow-hidden relative">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    isPcap
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-400'
                      : 'bg-gradient-to-r from-[#C5A059] to-[#DFC287]'
                  }`}
                  style={{ width: `${Math.max(25, overallReadyPercent)}%` }}
                />
              </div>
              <span
                className={`font-mono text-xs font-bold ${
                  isPcap ? 'text-blue-400' : 'text-[#C5A059]'
                }`}
              >
                {Math.max(25, overallReadyPercent)}% Ready
              </span>
            </div>
          </div>

          {/* Action & Filters Bar */}
          <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto justify-between xl:justify-end">
            {/* Filter Pills */}
            <div className="flex items-center bg-[#141414] p-1 rounded-lg border border-[#262626] shadow-sm">
              {[
                { id: 'all', label: `All (${totalChapters})` },
                { id: 'mastered', label: 'Mastered' },
                { id: 'active', label: 'In Progress' },
                { id: 'locked', label: 'To Prepare' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id as any)}
                  className={`px-3 py-1 rounded text-xs transition-all font-sans ${
                    filter === f.id
                      ? isPcap
                        ? 'bg-blue-600/20 text-blue-200 font-semibold shadow-sm border border-blue-500/50'
                        : 'bg-[#222222] text-[#F5F5F5] font-semibold shadow-sm border border-[#C5A059]/40'
                      : 'text-[#A0A0A0] hover:text-[#F5F5F5]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Details Mode Toggle & Quick View */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#141414] p-1 rounded-lg border border-[#262626] shadow-sm">
                <button
                  onClick={() => setDisplayMode('drawer')}
                  title="Instant Slide-Over Drawer (Opens right on screen without scrolling)"
                  className={`px-2.5 py-1 rounded text-xs transition-all flex items-center gap-1.5 ${
                    displayMode === 'drawer'
                      ? isPcap
                        ? 'bg-blue-600/30 text-blue-200 font-semibold border border-blue-500/50'
                        : 'bg-[#262626] text-amber-200 font-semibold border border-[#C5A059]/50'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Slide-Over Sheet</span>
                </button>
                <button
                  onClick={() => {
                    setDisplayMode('docked');
                    setTimeout(scrollToDockedPanel, 100);
                  }}
                  title="Docked Split Screen (Auto-scrolls directly to details panel)"
                  className={`px-2.5 py-1 rounded text-xs transition-all flex items-center gap-1.5 ${
                    displayMode === 'docked'
                      ? isPcap
                        ? 'bg-blue-600/30 text-blue-200 font-semibold border border-blue-500/50'
                        : 'bg-[#262626] text-amber-200 font-semibold border border-[#C5A059]/50'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Docked Panel</span>
                </button>
              </div>

              {selectedNode && (
                <button
                  onClick={() => handleSelectNode(selectedNode, true)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border shadow-sm transition-all ${
                    isPcap
                      ? 'bg-blue-950/60 hover:bg-blue-900/60 border-blue-500/40 text-blue-200'
                      : 'bg-[#1C1C1C] hover:bg-[#252525] border-[#C5A059]/40 text-[#DFC287]'
                  }`}
                  title="Inspect Chapter Details (Esc to close)"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect: {selectedNode.pcepCode}</span>
                </button>
              )}

              {displayMode === 'docked' && (
                <button
                  onClick={scrollToDockedPanel}
                  className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181818] hover:bg-[#222] border border-[#2D2D2D] text-xs font-mono text-neutral-300 hover:text-white transition-colors"
                  title="Scroll screen directly to details panel"
                >
                  <ArrowDownCircle className="w-3.5 h-3.5 text-blue-400" />
                  <span>Position At Panel</span>
                </button>
              )}
            </div>

            {/* Exam Launcher CTA */}
            {onNavigateExam && (
              <button
                onClick={onNavigateExam}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-xs tracking-wider transition-all font-sans border ${
                  isPcap
                    ? 'bg-blue-950/40 hover:bg-blue-900/40 border-blue-500/40 text-blue-200'
                    : 'bg-[#1C1C1C] hover:bg-[#262626] border-[#C5A059]/50 text-[#DFC287]'
                }`}
              >
                <BookOpen className={`w-4 h-4 ${isPcap ? 'text-blue-400' : 'text-[#C5A059]'}`} />
                <span>{isPcap ? 'PCAP Exam Simulator (40 Qs)' : 'PCEP Exam Simulator (30 Qs)'}</span>
              </button>
            )}

            {/* Practice Action Button */}
            {selectedNode && (
              <button
                onClick={handleLaunch}
                disabled={isLaunching}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg font-semibold text-xs uppercase tracking-wider shadow-md transition-all font-sans ${
                  isPcap
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30'
                    : 'bg-[#C5A059] hover:bg-[#D6B574] text-[#0A0A0A] shadow-amber-500/20'
                }`}
              >
                <PlayCircle className="w-4 h-4" />
                <span>Practice: {selectedNode.pcepCode}</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Canvas: Track Selector + Skill Tree Workspace + Detailed Drawer */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        {/* Certification Track Selector (Features the PCAP-31-0x Card from user prompt) */}
        {onSelectTrack && (
          <CertificationTrackSelector
            activeTrack={activeTrack}
            onSelectTrack={onSelectTrack}
          />
        )}

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Visual Skill Tree Area (Left / Center) */}
          <div
            className={`w-full ${
              displayMode === 'docked'
                ? 'lg:w-[calc(100%-440px)] xl:w-[calc(100%-480px)]'
                : 'flex-1'
            } flex flex-col gap-8 relative`}
          >
            {/* Ambient Highlights */}
            <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
              <div
                className={`absolute -top-32 -left-20 w-96 h-96 rounded-full blur-3xl ${
                  isPcap ? 'bg-blue-600/15' : 'bg-[#C5A059]/10'
                }`}
              />
              <div
                className={`absolute top-1/2 right-10 w-80 h-80 rounded-full blur-3xl ${
                  isPcap ? 'bg-cyan-500/10' : 'bg-[#DFC287]/5'
                }`}
              />
            </div>

            {/* DYNAMIC MODULE SECTIONS (Section 1 to 5 for PCAP, or Block 1 to 4 for PCEP) */}
            {filteredModules.map((module, mIdx) => {
              const isMastered = module.status === 'mastered';
              const isActive = module.status === 'active';

              return (
                <React.Fragment key={module.id}>
                  <section
                    id={`section-${module.id}`}
                    className={`relative rounded-xl p-6 border shadow-sm transition-all ${
                      isActive
                        ? isPcap
                          ? 'bg-[#0D1527] border-blue-500/60 shadow-xl overflow-hidden'
                          : 'bg-[#141414] border-[#C5A059]/60 shadow-xl overflow-hidden'
                        : isMastered
                        ? 'bg-[#141414] border-[#262626]'
                        : 'bg-[#121212] border-[#222222] opacity-85'
                    }`}
                  >
                    {/* Glowing Top Edge for Active Block */}
                    {isActive && (
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 ${
                          isPcap
                            ? 'bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600'
                            : 'bg-gradient-to-r from-[#C5A059] via-[#DFC287] to-[#C5A059]'
                        }`}
                      />
                    )}

                    {/* Section Header with Click to Inspect Section */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <div
                        onClick={() => handleSelectSection(module)}
                        className="flex items-center gap-3.5 cursor-pointer group"
                      >
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center border transition-transform group-hover:scale-105 ${
                            isMastered
                              ? isPcap
                                ? 'bg-blue-950/60 text-blue-300 border-blue-500/40'
                                : 'bg-[#1C1C1C] text-[#78D385] border-[#2E4A2E]'
                              : isActive
                              ? isPcap
                                ? 'bg-blue-900/40 text-blue-300 border-blue-500/60'
                                : 'bg-[#1C1C1C] text-[#C5A059] border-[#C5A059]/40'
                              : 'bg-[#181818] text-[#737373] border-[#262626]'
                          }`}
                        >
                          {isMastered ? (
                            <CheckCircle2
                              className={`w-5 h-5 ${isPcap ? 'text-blue-400' : 'text-[#C5A059]'}`}
                            />
                          ) : (
                            <Terminal
                              className={`w-4 h-4 ${isPcap ? 'text-blue-400' : 'text-[#C5A059]'}`}
                            />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className={`font-mono text-[10px] uppercase tracking-[2px] font-bold ${
                                isPcap ? 'text-blue-400' : 'text-[#C5A059]'
                              }`}
                            >
                              {module.pcepBlockCode}
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded font-mono text-[10px] border ${
                                isPcap
                                  ? 'bg-blue-950/50 text-blue-300 border-blue-800/50'
                                  : 'bg-[#1C1C1C] text-[#DFC287] border-[#262626]'
                              }`}
                            >
                              Exam Weight: {module.examWeightPercent}%
                            </span>
                            <span className="px-2 py-0.5 bg-[#1C1C1C] rounded font-mono text-[10px] text-[#A0A0A0]">
                              {module.completionText}
                            </span>
                          </div>
                          <h2 className="text-xl text-[#F5F5F5] group-hover:text-blue-300 font-serif font-light tracking-wide mt-0.5 transition-colors">
                            {module.title}
                          </h2>
                          {module.syllabusDescription && (
                            <p className="text-xs text-neutral-400 mt-1 max-w-3xl">
                              {module.syllabusDescription}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {module.quizStatus && (
                          <div
                            className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs border ${
                              isPcap
                                ? 'text-blue-300 bg-blue-950/40 border-blue-500/30'
                                : 'text-[#DFC287] bg-[#1C1C1C] border-[#C5A059]/30'
                            }`}
                          >
                            <Sparkles
                              className={`w-3.5 h-3.5 ${isPcap ? 'text-blue-400' : 'text-[#C5A059]'}`}
                            />
                            <span>{module.quizStatus}</span>
                          </div>
                        )}
                        <button
                          onClick={() => handleSelectSection(module)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs border transition-all ${
                            isPcap
                              ? 'bg-blue-950/60 hover:bg-blue-900/80 border-blue-500/40 text-blue-300'
                              : 'bg-[#1C1C1C] hover:bg-[#252525] border-[#C5A059]/40 text-[#DFC287]'
                          }`}
                          title="Open section details and syllabus requirements"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Inspect Section</span>
                        </button>
                      </div>
                    </div>

                    {/* Chapter Nodes Grid (Adaptive for 4 or 5 chapters per section) */}
                    <div
                      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${
                        module.nodes.length >= 5 ? 'xl:grid-cols-5' : 'xl:grid-cols-4'
                      } gap-4 relative`}
                    >
                      {module.nodes.map((node) => {
                        const isSelected = selectedNode?.id === node.id;
                        const isNodeActive = node.status === 'active';
                        const isNodeMastered = node.status === 'mastered';

                        return (
                          <div
                            key={node.id}
                            onClick={() => handleSelectNode(node, true)}
                            className={`p-4 rounded-xl shadow cursor-pointer transition-all duration-200 border relative flex flex-col justify-between group ${
                              isSelected
                                ? isPcap
                                  ? 'bg-[#15203A] border-blue-500 ring-2 ring-blue-500/80 shadow-lg shadow-blue-500/20'
                                  : 'bg-[#1C1C1C] border-[#C5A059] ring-2 ring-[#C5A059]'
                                : isNodeActive
                                ? isPcap
                                  ? 'bg-[#10192E] border-blue-500/40 hover:bg-[#16233F]'
                                  : 'bg-[#181818] border-[#C5A059]/40 hover:bg-[#1E1E1E]'
                                : 'bg-[#151515] border-[#262626] hover:border-[#383838] hover:bg-[#181818]'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span
                                  className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold border ${
                                    isPcap
                                      ? 'bg-blue-950/70 border-blue-500/40 text-blue-300'
                                      : 'bg-[#1C1C1C] border-[#C5A059]/40 text-[#C5A059]'
                                  }`}
                                >
                                  {node.pcepCode}
                                </span>
                                <span
                                  className={`font-mono text-[10px] font-bold ${
                                    isNodeMastered
                                      ? 'text-[#78D385]'
                                      : isNodeActive
                                      ? isPcap
                                        ? 'text-blue-300'
                                        : 'text-[#DFC287]'
                                      : 'text-[#737373]'
                                  }`}
                                >
                                  {isNodeMastered
                                    ? '✓ Mastered'
                                    : isNodeActive
                                    ? `${node.progressPercent}%`
                                    : 'Ready'}
                                </span>
                              </div>

                              <h3 className="text-sm text-[#F5F5F5] group-hover:text-blue-200 font-medium mb-1 line-clamp-2 transition-colors">
                                {node.title}
                              </h3>
                              <p className="text-xs text-[#A0A0A0] mb-3 leading-relaxed line-clamp-2">
                                {node.shortDesc}
                              </p>
                            </div>

                            <div>
                              <div className="w-full bg-[#262626] h-1.5 rounded-full overflow-hidden mb-2">
                                <div
                                  className={`h-full ${
                                    isNodeMastered
                                      ? isPcap
                                        ? 'bg-blue-500'
                                        : 'bg-[#C5A059]'
                                      : isNodeActive
                                      ? isPcap
                                        ? 'bg-gradient-to-r from-blue-500 to-cyan-400'
                                        : 'bg-gradient-to-r from-[#C5A059] to-[#DFC287]'
                                      : 'bg-[#404040]'
                                  }`}
                                  style={{ width: `${node.progressPercent}%` }}
                                />
                              </div>
                              <div className="flex items-center justify-between font-mono text-[10px] text-[#737373]">
                                <span>{node.duration}</span>
                                <span className={isPcap ? 'text-blue-400' : 'text-[#C5A059]'}>
                                  +{node.xp} XP
                                </span>
                              </div>

                              {/* Direct Intuitive Inspect Hint */}
                              <div className="flex items-center justify-between font-mono text-[10px] text-neutral-400 mt-2 pt-1.5 border-t border-[#262626] group-hover:border-blue-500/30">
                                <span className="flex items-center gap-1 text-blue-400/90 group-hover:text-blue-300">
                                  <Eye className="w-3 h-3" /> Details
                                </span>
                                <span className="text-[10px] text-neutral-400 group-hover:text-white">
                                  Click to open ↗
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>

                  {/* Connecting Arrow between sections */}
                  {mIdx < filteredModules.length - 1 && (
                    <div className="flex justify-center -my-4 relative z-20">
                      <div
                        className={`w-8 h-8 rounded-full bg-[#141414] flex items-center justify-center shadow-md border ${
                          isPcap ? 'text-blue-400 border-blue-900/50' : 'text-[#C5A059] border-[#262626]'
                        }`}
                      >
                        <ArrowDown className="w-4 h-4" />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Docked Side Panel / Interactive Drawer (IDE & Syllabus Bridge) */}
          {displayMode === 'docked' && selectedNode && (
            <aside
              ref={dockedPanelRef}
              id="parcours-docked-panel"
              className="w-full lg:w-[420px] xl:w-[460px] sticky top-28 bg-[#11141E]/95 backdrop-blur-xl rounded-2xl p-6 border border-[#262626] shadow-2xl flex flex-col gap-4 z-20"
            >
              <ParcoursDetailsPanel
                node={selectedNode}
                module={selectedModule}
                isPcap={isPcap}
                onLaunchChallenge={handleLaunch}
                isLaunching={isLaunching}
                onSelectPrevNode={() => prevNode && handleSelectNode(prevNode, false)}
                onSelectNextNode={() => nextNode && handleSelectNode(nextNode, false)}
                hasPrevNode={!!prevNode}
                hasNextNode={!!nextNode}
                displayMode="docked"
                onChangeDisplayMode={(mode) => setDisplayMode(mode)}
                onScrollToSection={() => {
                  const el = document.getElementById(`section-${selectedModule?.id}`);
                  el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              />
            </aside>
          )}
        </div>
      </div>

      {/* Slide-Over Inspection Drawer Modal (Opens immediately right in front of user anywhere on page) */}
      {isDrawerOpen && selectedNode && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop with click-outside to close */}
          <div
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
          />

          {/* Slide-Over Sheet Container */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
            <div className="w-screen max-w-xl xl:max-w-2xl bg-[#0F131D] border-l border-[#262626] shadow-2xl p-6 sm:p-7 flex flex-col justify-between overflow-y-auto transform transition-all duration-300 animate-in slide-in-from-right">
              <ParcoursDetailsPanel
                node={selectedNode}
                module={selectedModule}
                isPcap={isPcap}
                onLaunchChallenge={handleLaunch}
                isLaunching={isLaunching}
                onClose={() => setIsDrawerOpen(false)}
                onSelectPrevNode={() => prevNode && handleSelectNode(prevNode, true)}
                onSelectNextNode={() => nextNode && handleSelectNode(nextNode, true)}
                hasPrevNode={!!prevNode}
                hasNextNode={!!nextNode}
                displayMode="drawer"
                onChangeDisplayMode={(mode) => {
                  setDisplayMode(mode);
                  setIsDrawerOpen(false);
                  if (mode === 'docked') {
                    setTimeout(scrollToDockedPanel, 100);
                  }
                }}
                onScrollToSection={() => {
                  setIsDrawerOpen(false);
                  const el = document.getElementById(`section-${selectedModule?.id}`);
                  el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Floating Quick Inspector Bar at bottom of viewport */}
      {selectedNode && !isDrawerOpen && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 max-w-xl w-[92%] sm:w-auto bg-[#141824]/95 backdrop-blur-xl border border-[#2D3748] text-white px-4 py-2.5 rounded-2xl shadow-2xl flex items-center justify-between gap-3 animate-in slide-in-from-bottom-3">
          <div
            onClick={() => handleSelectNode(selectedNode, true)}
            className="flex items-center gap-2.5 cursor-pointer hover:opacity-90 overflow-hidden pr-2"
            title="Click to inspect chapter details"
          >
            <span
              className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold border shrink-0 ${
                isPcap
                  ? 'bg-blue-950/80 border-blue-500/50 text-blue-300'
                  : 'bg-[#1C1C1C] border-[#C5A059]/50 text-[#C5A059]'
              }`}
            >
              {selectedNode.pcepCode}
            </span>
            <span className="text-xs font-medium text-neutral-200 truncate max-w-[180px] sm:max-w-[280px]">
              {selectedNode.title}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleSelectNode(selectedNode, true)}
              className="px-3 py-1.5 rounded-xl bg-[#1C2333] hover:bg-[#252E42] border border-blue-900/40 text-xs font-medium text-blue-200 flex items-center gap-1.5 transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-blue-400" />
              <span>Details</span>
            </button>

            {displayMode === 'docked' && (
              <button
                onClick={scrollToDockedPanel}
                title="Position screen at details panel"
                className="px-2.5 py-1.5 rounded-xl bg-[#181818] hover:bg-[#222] border border-[#2E2E2E] text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <ArrowDownCircle className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Position At Panel</span>
              </button>
            )}

            <button
              onClick={handleLaunch}
              disabled={isLaunching}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white flex items-center gap-1.5 shadow-md transition-all ${
                isPcap
                  ? 'bg-blue-600 hover:bg-blue-500 shadow-blue-600/30'
                  : 'bg-[#C5A059] hover:bg-[#D6B574] text-black shadow-amber-500/20'
              }`}
            >
              <PlayCircle className="w-3.5 h-3.5" />
              <span>Practice</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
