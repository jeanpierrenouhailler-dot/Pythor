import React, { useState, useEffect, useMemo } from 'react';
import { SkillModule, SkillNode, PcepExamQuestion, UserProfile, TrackId } from '../../types';
import { pcepModulesData, pcepMockExamQuestions } from '../../data/pcepData';
import { pcapModulesData, pcapMockExamQuestions } from '../../data/pcapData';
import { CertificationTrackSelector } from '../CertificationTrackSelector';
import {
  Award,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Clock,
  Play,
  RotateCcw,
  Search,
  ExternalLink,
  ChevronRight,
  Code,
  Terminal,
  Flag,
  HelpCircle,
  Check,
  X,
  Zap,
  Bookmark,
  Sparkles,
  Layers,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

interface PcepExamViewProps {
  user: UserProfile;
  activeTrack?: TrackId;
  onSelectTrack?: (track: TrackId) => void;
  modules?: SkillModule[];
  questions?: PcepExamQuestion[];
  onLaunchChallenge: (challengeId: string) => void;
  onUpdateXp: (delta: number) => void;
  onNavigateParcours?: () => void;
  onNavigateBack?: () => void;
  previousViewTitle?: string;
}

type TabType = 'syllabus' | 'exam' | 'cheat-sheet';

export const PcepExamView: React.FC<PcepExamViewProps> = ({
  user,
  activeTrack = 'pcap-31-03',
  onSelectTrack,
  modules: propModules,
  onLaunchChallenge,
  onUpdateXp,
  onNavigateParcours,
  onNavigateBack,
  previousViewTitle = 'Dashboard',
}) => {
  const isPcap = activeTrack === 'pcap-31-03';
  const defaultModules = isPcap ? pcapModulesData : pcepModulesData;
  const modules = propModules || defaultModules;
  const defaultQuestions = isPcap ? pcapMockExamQuestions : pcepMockExamQuestions;
  const officialDurationSeconds = isPcap ? 65 * 60 : 45 * 60;

  const [activeTab, setActiveTab] = useState<TabType>('syllabus');
  const [selectedBlockId, setSelectedBlockId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedNode, setSelectedNode] = useState<SkillNode>(modules[0]?.nodes[0]);

  // Exam Simulation State
  const [isExamActive, setIsExamActive] = useState<boolean>(false);
  const [isExamSubmitted, setIsExamSubmitted] = useState<boolean>(false);
  const [examQuestions, setExamQuestions] = useState<PcepExamQuestion[]>(defaultQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [timeRemaining, setTimeRemaining] = useState<number>(officialDurationSeconds);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
  const [trainingMode, setTrainingMode] = useState<boolean>(false); // instant feedback vs official blind mode
  const [reviewFilter, setReviewFilter] = useState<'all' | 'errors' | 'flagged'>('all');

  // Reset exam state when track changes
  useEffect(() => {
    const newPool = isPcap ? pcapMockExamQuestions : pcepMockExamQuestions;
    setExamQuestions(newPool);
    setTimeRemaining(isPcap ? 65 * 60 : 45 * 60);
    setIsExamActive(false);
    setIsExamSubmitted(false);
    setUserAnswers({});
    setFlaggedQuestions({});
    setCurrentQuestionIndex(0);
    if (modules.length > 0) {
      setSelectedNode(modules[0].nodes[0]);
    }
  }, [activeTrack, isPcap]);

  // Timer Effect
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isExamActive && !isExamSubmitted && !isTimerPaused) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            handleFinishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isExamActive, isExamSubmitted, isTimerPaused]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Start Exam Handler
  const handleStartExam = (filterBlockNumber?: number, filterPcepCode?: string) => {
    let pool = [...defaultQuestions];
    if (filterBlockNumber) {
      pool = pool.filter((q) => q.blockNumber === filterBlockNumber);
    } else if (filterPcepCode) {
      pool = pool.filter((q) => q.pcepCode === filterPcepCode);
    }
    // Shuffle pool
    const shuffled = pool.sort(() => 0.5 - Math.random());
    setExamQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setTimeRemaining(Math.min(officialDurationSeconds, shuffled.length * 90)); // 90 seconds per question or official duration
    setIsExamActive(true);
    setIsExamSubmitted(false);
    setIsTimerPaused(false);
    setActiveTab('exam');
  };

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (isExamSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleToggleFlag = (questionId: string) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleFinishExam = () => {
    setIsExamSubmitted(true);
    // Calculate score
    let correctCount = 0;
    examQuestions.forEach((q) => {
      const selected = userAnswers[q.id];
      const correctOption = q.options.find((o) => o.isCorrect)?.id;
      if (selected === correctOption) {
        correctCount += 1;
      }
    });

    const percent = Math.round((correctCount / examQuestions.length) * 100);
    if (percent >= 70) {
      onUpdateXp(250);
    } else {
      onUpdateXp(50);
    }
  };

  // Exam Score Analytics (Adapted for PCAP 5 Sections or PCEP 4 Blocks)
  const examResults = useMemo(() => {
    if (!isExamSubmitted) return null;
    let correctCount = 0;
    const blockStats: Record<number, { correct: number; total: number; name: string; weight: number }> = isPcap
      ? {
          1: { correct: 0, total: 0, name: 'Section 1: Modules and Packages', weight: 12 },
          2: { correct: 0, total: 0, name: 'Section 2: Exceptions', weight: 14 },
          3: { correct: 0, total: 0, name: 'Section 3: Strings', weight: 18 },
          4: { correct: 0, total: 0, name: 'Section 4: Object-Oriented Programming (OOP)', weight: 34 },
          5: { correct: 0, total: 0, name: 'Section 5: Miscellaneous (Lambdas, Closures, I/O)', weight: 22 },
        }
      : {
          1: { correct: 0, total: 0, name: 'Block 1: Computer Programming & Python Fundamentals', weight: 18 },
          2: { correct: 0, total: 0, name: 'Block 2: Control Flow – Blocks and Loops', weight: 29 },
          3: { correct: 0, total: 0, name: 'Block 3: Data Collections – Tuples, Dicts, Lists', weight: 25 },
          4: { correct: 0, total: 0, name: 'Block 4: Functions and Exceptions', weight: 28 },
        };

    examQuestions.forEach((q) => {
      const selected = userAnswers[q.id];
      const correctOption = q.options.find((o) => o.isCorrect)?.id;
      const isCorrect = selected === correctOption;

      if (blockStats[q.blockNumber]) {
        blockStats[q.blockNumber].total += 1;
        if (isCorrect) {
          blockStats[q.blockNumber].correct += 1;
        }
      }

      if (isCorrect) {
        correctCount += 1;
      }
    });

    const total = examQuestions.length;
    const scorePercent = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const passed = scorePercent >= 70;

    return {
      total,
      correctCount,
      scorePercent,
      passed,
      blockStats,
    };
  }, [isExamSubmitted, examQuestions, userAnswers, isPcap]);

  // Filtered Chapters for Syllabus View
  const filteredChapters = useMemo(() => {
    let allNodes: { node: SkillNode; block: SkillModule }[] = [];
    modules.forEach((mod) => {
      mod.nodes.forEach((n) => {
        allNodes.push({ node: n, block: mod });
      });
    });

    if (selectedBlockId !== 'all') {
      allNodes = allNodes.filter((item) => item.block.id === selectedBlockId);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      allNodes = allNodes.filter(
        (item) =>
          item.node.pcepCode.toLowerCase().includes(q) ||
          item.node.title.toLowerCase().includes(q) ||
          item.node.shortDesc.toLowerCase().includes(q) ||
          item.node.syllabusItems?.some((sub) => sub.toLowerCase().includes(q))
      );
    }

    return allNodes;
  }, [modules, selectedBlockId, searchQuery]);

  const currentQ = examQuestions[currentQuestionIndex];

  return (
    <div className="w-full bg-[#0A0A0A] text-[#F5F5F5] min-h-[calc(100vh-4rem)] pb-16">
      {/* Top Certification Header */}
      <section className="w-full bg-[#101010]/95 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-6 border-b border-[#262626] sticky top-16 z-20">
        <div className="max-w-[1720px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            {onNavigateBack && (
              <button
                onClick={onNavigateBack}
                id="exam-return-button"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#141414] hover:bg-[#202020] border border-[#2D2D2D] hover:border-[#454545] text-xs text-[#E5E5E5] hover:text-white font-medium transition-all group shadow-sm shrink-0"
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

            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-lg shrink-0 ${
                isPcap
                  ? 'bg-gradient-to-br from-[#1E3A8A]/40 to-[#0F172A] border-blue-500/50 text-blue-400 shadow-blue-500/10'
                  : 'bg-gradient-to-br from-[#1C1C1C] to-[#141414] border-[#C5A059]/40 text-[#C5A059] shadow-[#C5A059]/5'
              }`}
            >
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <span
                  className={`font-mono text-[11px] uppercase tracking-[2px] font-bold ${
                    isPcap ? 'text-blue-400' : 'text-[#C5A059]'
                  }`}
                >
                  Python Institute Official Certification
                </span>
                <span
                  className={`px-2 py-0.5 rounded font-mono text-[10px] border ${
                    isPcap
                      ? 'bg-blue-950/60 border-blue-500/50 text-blue-300'
                      : 'bg-[#1C1C1C] border-[#C5A059]/30 text-[#DFC287]'
                  }`}
                >
                  {isPcap ? 'Exam PCAP-31-03' : 'Exam PCEP-30-02'}
                </span>
                <span className="px-2 py-0.5 rounded bg-[#1C1C1C] border border-[#262626] text-[#A0A0A0] font-mono text-[10px]">
                  Python 3.x
                </span>

                {/* Switch Track Button */}
                {onSelectTrack && (
                  <button
                    onClick={() => onSelectTrack(isPcap ? 'pcep-30-02' : 'pcap-31-03')}
                    className="text-[11px] font-sans text-neutral-400 hover:text-white px-2 py-0.5 rounded bg-white/5 border border-white/10 hover:border-white/20 transition-all flex items-center gap-1"
                  >
                    Switch to {isPcap ? 'PCEP-30-02' : 'PCAP-31-03'}
                    <ChevronRight className="w-3 h-3" />
                  </button>
                )}
              </div>
              <h1 className="text-xl sm:text-2xl font-serif font-medium tracking-wide text-[#F5F5F5] mt-1">
                {isPcap
                  ? 'PCAP™ – Certified Associate Python Programmer'
                  : 'PCEP™ – Certified Entry-Level Python Programmer'}
              </h1>
              <p className="text-xs text-[#A0A0A0] mt-0.5">
                {isPcap
                  ? 'Full official syllabus from Chapter 1.1 to 5.5 • 40-question exam simulation • 65 minutes • 70% required to pass'
                  : 'Full official syllabus from Chapter 1.1 to 4.4 • 30-question exam simulation • 45 minutes • 70% required to pass'}
              </p>
            </div>
          </div>

          {/* Tab Navigation Controls */}
          <div className="flex items-center gap-2 bg-[#141414] p-1.5 rounded-xl border border-[#262626] w-full sm:w-auto overflow-x-auto">
            <button
              onClick={() => setActiveTab('syllabus')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'syllabus'
                  ? isPcap
                    ? 'bg-blue-600/20 text-white font-semibold border border-blue-500/50 shadow-sm'
                    : 'bg-[#222222] text-[#F5F5F5] font-semibold border border-[#C5A059]/40 shadow-sm'
                  : 'text-[#A0A0A0] hover:text-[#F5F5F5]'
              }`}
            >
              <BookOpen className={`w-3.5 h-3.5 ${isPcap ? 'text-blue-400' : 'text-[#C5A059]'}`} />
              <span>{isPcap ? 'Syllabus & 22 Chapters' : 'Syllabus & 16 Chapters'}</span>
              <span
                className={`px-1.5 py-0.2 rounded font-mono text-[10px] ${
                  isPcap ? 'bg-blue-950 text-blue-300' : 'bg-[#2E2E2E] text-[#DFC287]'
                }`}
              >
                {isPcap ? '1.1 - 5.5' : '1.1 - 4.4'}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('exam');
                if (!isExamActive && !isExamSubmitted) {
                  handleStartExam();
                }
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'exam'
                  ? isPcap
                    ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/25'
                    : 'bg-[#C5A059] text-[#0A0A0A] font-bold shadow-md shadow-[#C5A059]/20'
                  : 'text-[#A0A0A0] hover:text-[#F5F5F5]'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Exam Simulation</span>
              <span className="px-1.5 py-0.2 bg-black/20 rounded font-mono text-[10px]">
                {isPcap ? '40 Qs • 65m' : '30 Qs • 45m'}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('cheat-sheet')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'cheat-sheet'
                  ? isPcap
                    ? 'bg-blue-600/20 text-white font-semibold border border-blue-500/50 shadow-sm'
                    : 'bg-[#222222] text-[#F5F5F5] font-semibold border border-[#C5A059]/40 shadow-sm'
                  : 'text-[#A0A0A0] hover:text-[#F5F5F5]'
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${isPcap ? 'text-blue-400' : 'text-[#C5A059]'}`} />
              <span>Cheat Sheet & Traps</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* ========================================================================= */}
        {/* TAB 1: SYLLABUS & 16 CHAPTERS (1.1 TO 4.4) */}
        {/* ========================================================================= */}
        {activeTab === 'syllabus' && (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Column: Blocks Overview, Filters & Chapter Grid */}
            <div className="w-full lg:flex-1 flex flex-col gap-6">
              {/* Exam Blocks Weight Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {modules.map((mod) => {
                  const isSelected = selectedBlockId === mod.id;
                  return (
                    <div
                      key={mod.id}
                      onClick={() => setSelectedBlockId(isSelected ? 'all' : mod.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                        isSelected
                          ? 'bg-[#1A1A1A] border-[#C5A059] ring-2 ring-[#C5A059]/40 shadow-lg'
                          : 'bg-[#141414] border-[#262626] hover:border-[#C5A059]/30 hover:bg-[#181818]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] text-[#C5A059] font-bold uppercase tracking-wider">
                          {mod.pcepBlockCode}
                        </span>
                        <span className="px-2 py-0.5 bg-[#1F1F1F] rounded font-mono text-[11px] text-[#DFC287] font-semibold border border-[#262626]">
                          {mod.examWeightPercent}% of exam
                        </span>
                      </div>
                      <h3 className="text-sm font-serif font-medium text-[#F5F5F5] mb-1 leading-snug line-clamp-2">
                        {mod.title}
                      </h3>
                      <p className="text-[11px] text-[#A0A0A0] line-clamp-2 mb-3">
                        {mod.syllabusDescription}
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-[#262626] font-mono text-[10px] text-[#737373]">
                        <span>4 Chapters ({mod.nodes[0]?.pcepCode.replace('PCEP-30-02 ', '')} to {mod.nodes[3]?.pcepCode.replace('PCEP-30-02 ', '')})</span>
                        <span className="text-[#C5A059] font-semibold">{mod.completionText.split('•')[0]}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Filters & Search Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#141414] p-3 rounded-xl border border-[#262626]">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#737373] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Filter by keyword (e.g. slicing, ord, range, try-except, 1.3, bitwise)..."
                    className="w-full pl-9 pr-4 py-2 bg-[#0E0E0E] text-xs text-[#F5F5F5] rounded-lg border border-[#262626] focus:outline-none focus:border-[#C5A059] placeholder:text-[#525252]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#737373] hover:text-[#F5F5F5]"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#737373] hidden sm:inline">
                    {filteredChapters.length} chapters found
                  </span>
                  {selectedBlockId !== 'all' && (
                    <button
                      onClick={() => setSelectedBlockId('all')}
                      className="px-2.5 py-1.5 bg-[#222222] hover:bg-[#2A2A2A] text-xs text-[#DFC287] rounded-lg border border-[#C5A059]/40"
                    >
                      Reset filter
                    </button>
                  )}
                </div>
              </div>

              {/* Chapters List (PCEP 1.1 to 4.4) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredChapters.map(({ node, block }) => {
                  const isSelected = selectedNode.id === node.id;
                  return (
                    <div
                      key={node.id}
                      onClick={() => setSelectedNode(node)}
                      className={`p-5 rounded-xl border transition-all cursor-pointer relative ${
                        isSelected
                          ? 'bg-[#181818] border-[#C5A059] ring-2 ring-[#C5A059]/50 shadow-xl'
                          : 'bg-[#141414] border-[#262626] hover:border-[#C5A059]/40 hover:bg-[#161616]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-[#1C1C1C] border border-[#C5A059]/40 font-mono text-[10px] text-[#C5A059] font-bold">
                            {node.pcepCode}
                          </span>
                          <span className="font-mono text-[10px] text-[#737373]">
                            {block.pcepBlockCode}
                          </span>
                        </div>
                        <span
                          className={`font-mono text-[10px] px-2 py-0.5 rounded ${
                            node.status === 'mastered'
                              ? 'bg-[#1A261A] text-[#78D385] border border-[#2E4A2E]'
                              : node.status === 'active'
                              ? 'bg-[#2A2415] text-[#DFC287] border border-[#524424]'
                              : 'bg-[#1C1C1C] text-[#737373] border border-[#262626]'
                          }`}
                        >
                          {node.status === 'mastered' ? '✓ Mastered' : node.status === 'active' ? '● In Progress' : 'To Prepare'}
                        </span>
                      </div>

                      <h3 className="text-base font-serif font-medium text-[#F5F5F5] mb-1.5 leading-snug">
                        {node.title}
                      </h3>

                      <p className="text-xs text-[#A0A0A0] leading-relaxed mb-3 line-clamp-2">
                        {node.shortDesc}
                      </p>

                      {/* Official syllabus bullet preview */}
                      {node.syllabusItems && (
                        <div className="bg-[#0E0E0E] p-2.5 rounded-lg border border-[#222222] mb-3">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-[#737373] block mb-1">
                            Official Syllabus Objectives:
                          </span>
                          <ul className="text-[11px] text-[#C0C0C0] space-y-0.5">
                            {node.syllabusItems.slice(0, 2).map((item, idx) => (
                              <li key={idx} className="flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-[#C5A059] shrink-0" />
                                <span className="truncate">{item}</span>
                              </li>
                            ))}
                            {node.syllabusItems.length > 2 && (
                              <li className="text-[10px] text-[#737373] pl-2.5">
                                + {node.syllabusItems.length - 2} more objectives...
                              </li>
                            )}
                          </ul>
                        </div>
                      )}

                      {/* Actions Footer */}
                      <div className="flex items-center justify-between pt-2 border-t border-[#222222] font-mono text-xs">
                        <span className="text-[#737373] text-[11px]">{node.examWeight || `${block.examWeightPercent}%`}</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStartExam(undefined, node.pcepCode);
                            }}
                            className="text-[#DFC287] hover:text-[#F5F5F5] text-[11px] underline underline-offset-4"
                          >
                            PCEP Quiz
                          </button>
                          <ChevronRight className="w-4 h-4 text-[#C5A059]" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Selected Chapter Detailed Inspector */}
            <aside className="w-full lg:w-[440px] xl:w-[480px] sticky top-36 bg-[#141414] rounded-2xl p-6 border border-[#262626] shadow-2xl flex flex-col gap-5">
              {/* Header */}
              <div className="flex items-start justify-between pb-4 border-b border-[#262626]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 bg-[#1C1C1C] border border-[#C5A059]/40 text-[#C5A059] font-mono text-xs font-bold rounded">
                      {selectedNode.pcepCode}
                    </span>
                    <span className="font-mono text-xs text-[#A0A0A0]">
                      {selectedNode.duration} • +{selectedNode.xp} XP
                    </span>
                  </div>
                  <h2 className="text-xl font-serif font-medium text-[#F5F5F5] leading-snug">
                    {selectedNode.title}
                  </h2>
                </div>
              </div>

              {/* Comprehensive Description */}
              <div>
                <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-[1.5px] font-bold block mb-1">
                  Module Description
                </span>
                <p className="text-xs text-[#CCCCCC] leading-relaxed">
                  {selectedNode.fullDesc}
                </p>
              </div>

              {/* Official Syllabus Requirements Checklist */}
              {selectedNode.syllabusItems && (
                <div>
                  <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-[1.5px] font-bold block mb-2">
                    Syllabus Requirements (Python Institute)
                  </span>
                  <div className="space-y-1.5 bg-[#0E0E0E] p-3 rounded-xl border border-[#222222]">
                    {selectedNode.syllabusItems.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#E0E0E0]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Code Snippet for this PCEP Chapter */}
              {selectedNode.codeSnippet && (
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-[1.5px] font-bold">
                      Key PCEP Code Example
                    </span>
                    <span className="font-mono text-[10px] text-[#737373]">Python 3.12</span>
                  </div>
                  <pre className="p-3 bg-[#0A0A0A] rounded-xl border border-[#262626] font-mono text-xs text-[#DFC287] overflow-x-auto leading-relaxed">
                    <code>{selectedNode.codeSnippet}</code>
                  </pre>
                </div>
              )}

              {/* Interactive Exercises Checklist */}
              {selectedNode.exercises && selectedNode.exercises.length > 0 && (
                <div>
                  <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-[1.5px] font-bold block mb-2">
                    Associated Practical Exercises
                  </span>
                  <div className="space-y-1.5">
                    {selectedNode.exercises.map((ex, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2.5 bg-[#1A1A1A] rounded-lg border border-[#262626] text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                          <span className="text-[#F5F5F5]">{ex.title}</span>
                        </div>
                        {ex.time && (
                          <span className="font-mono text-[10px] text-[#737373]">{ex.time}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  onClick={() => onLaunchChallenge(selectedNode.challengeId || 'challenge-pcep-2-3')}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#C5A059] hover:bg-[#D4AF65] text-[#0A0A0A] font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-[#C5A059]/20 transition-all"
                >
                  <Terminal className="w-4 h-4" />
                  <span>Practice this chapter in IDE</span>
                </button>

                <button
                  onClick={() => handleStartExam(undefined, selectedNode.pcepCode)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#1C1C1C] hover:bg-[#242424] text-[#DFC287] border border-[#C5A059]/40 rounded-xl text-xs font-semibold transition-all"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Test knowledge on {selectedNode.pcepCode}</span>
                </button>
              </div>
            </aside>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: EXAM SIMULATION (TIMED 30 QUESTIONS) */}
        {/* ========================================================================= */}
        {activeTab === 'exam' && (
          <div className="w-full flex flex-col gap-6">
            {!isExamActive && !isExamSubmitted ? (
              /* Exam Intro Screen */
              <div className="max-w-3xl mx-auto bg-[#141414] rounded-2xl p-8 border border-[#262626] shadow-2xl text-center flex flex-col items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#1C1C1C] border border-[#C5A059]/40 flex items-center justify-center">
                  <Award className="w-8 h-8 text-[#C5A059]" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-[2px] text-[#C5A059] font-bold">
                    Real Exam Conditions
                  </span>
                  <h2 className="text-2xl font-serif font-medium text-[#F5F5F5] mt-1">
                    Official PCEP-30-02 Simulation
                  </h2>
                  <p className="text-sm text-[#A0A0A0] mt-2 max-w-lg mx-auto">
                    30 randomly selected questions covering all 4 blocks of the official syllabus. 45 minutes maximum duration. Passing score set at 70% (21/30 correct answers).
                  </p>
                </div>

                {/* Exam Rules Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left">
                  <div className="p-4 bg-[#0E0E0E] rounded-xl border border-[#262626]">
                    <Clock className="w-4 h-4 text-[#C5A059] mb-1.5" />
                    <span className="font-mono text-xs font-bold text-[#F5F5F5] block">45 Minutes</span>
                    <span className="text-[11px] text-[#737373]">Timer under real conditions</span>
                  </div>
                  <div className="p-4 bg-[#0E0E0E] rounded-xl border border-[#262626]">
                    <HelpCircle className="w-4 h-4 text-[#C5A059] mb-1.5" />
                    <span className="font-mono text-xs font-bold text-[#F5F5F5] block">30 Questions</span>
                    <span className="text-[11px] text-[#737373]">Single choice & output prediction</span>
                  </div>
                  <div className="p-4 bg-[#0E0E0E] rounded-xl border border-[#262626]">
                    <Award className="w-4 h-4 text-[#C5A059] mb-1.5" />
                    <span className="font-mono text-xs font-bold text-[#F5F5F5] block">70% Passing Score</span>
                    <span className="text-[11px] text-[#737373]">Minimum score for certification</span>
                  </div>
                </div>

                {/* Training Mode Toggle */}
                <div className="flex items-center gap-3 bg-[#0E0E0E] px-4 py-2.5 rounded-xl border border-[#262626]">
                  <input
                    type="checkbox"
                    id="trainingMode"
                    checked={trainingMode}
                    onChange={(e) => setTrainingMode(e.target.checked)}
                    className="accent-[#C5A059] w-4 h-4 cursor-pointer"
                  />
                  <label htmlFor="trainingMode" className="text-xs text-[#E0E0E0] cursor-pointer text-left">
                    <span className="font-semibold block">Training Mode with instant explanations</span>
                    <span className="text-[#737373] text-[11px]">Displays corrections and pedagogical explanations question by question</span>
                  </label>
                </div>

                <button
                  onClick={() => handleStartExam()}
                  className="px-8 py-3.5 bg-[#C5A059] hover:bg-[#D4AF65] text-[#0A0A0A] font-bold rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-[#C5A059]/20 transition-all flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Start timed exam</span>
                </button>
              </div>
            ) : isExamActive && !isExamSubmitted ? (
              /* Active Exam Screen */
              <div className="w-full flex flex-col lg:flex-row gap-6 items-start">
                {/* Left Area: Current Question */}
                <div className="w-full lg:flex-1 bg-[#141414] rounded-2xl p-6 sm:p-8 border border-[#262626] shadow-2xl flex flex-col gap-6">
                  {/* Top Bar inside question: PCEP code, Index, Flag */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#262626] flex-wrap gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-1 rounded bg-[#1C1C1C] border border-[#C5A059]/40 font-mono text-xs font-bold text-[#C5A059]">
                        Question {currentQuestionIndex + 1} / {examQuestions.length}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#1C1C1C] border border-[#262626] font-mono text-xs text-[#DFC287]">
                        {currentQ.pcepCode}
                      </span>
                      <span className="font-mono text-xs text-[#737373]">
                        {currentQ.blockName}
                      </span>
                    </div>

                    <button
                      onClick={() => handleToggleFlag(currentQ.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        flaggedQuestions[currentQ.id]
                          ? 'bg-[#332211] text-[#FFAA33] border border-[#FFAA33]/50'
                          : 'bg-[#1C1C1C] text-[#737373] hover:text-[#F5F5F5] border border-[#262626]'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5 fill-current" />
                      <span>{flaggedQuestions[currentQ.id] ? 'Marked for review' : 'Mark for review'}</span>
                    </button>
                  </div>

                  {/* Question Stem */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg sm:text-xl font-serif font-medium text-[#F5F5F5] leading-relaxed">
                      {currentQ.question}
                    </h3>

                    {currentQ.codeSnippet && (
                      <pre className="p-4 bg-[#0A0A0A] rounded-xl border border-[#262626] font-mono text-xs sm:text-[13px] text-[#DFC287] overflow-x-auto leading-relaxed my-2">
                        <code>{currentQ.codeSnippet}</code>
                      </pre>
                    )}
                  </div>

                  {/* Options List */}
                  <div className="space-y-3">
                    {currentQ.options.map((option) => {
                      const isSelected = userAnswers[currentQ.id] === option.id;
                      const showTrainingCorrection = trainingMode && userAnswers[currentQ.id];

                      let optionBorder = 'border-[#262626] hover:border-[#C5A059]/40 bg-[#161616]';
                      if (isSelected) {
                        optionBorder = 'border-[#C5A059] bg-[#221E14] ring-2 ring-[#C5A059]/40';
                      }

                      if (showTrainingCorrection) {
                        if (option.isCorrect) {
                          optionBorder = 'border-[#4E9A51] bg-[#142616] text-[#A6E3A1]';
                        } else if (isSelected && !option.isCorrect) {
                          optionBorder = 'border-[#A33D3D] bg-[#2A1414] text-[#F38BA8]';
                        }
                      }

                      return (
                        <div
                          key={option.id}
                          onClick={() => handleSelectOption(currentQ.id, option.id)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${optionBorder}`}
                        >
                          <div
                            className={`w-6 h-6 rounded-full border flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 ${
                              isSelected
                                ? 'border-[#C5A059] bg-[#C5A059] text-[#0A0A0A]'
                                : 'border-[#444] text-[#A0A0A0]'
                            }`}
                          >
                            {option.id.toUpperCase()}
                          </div>
                          <span className="text-sm text-[#F5F5F5] leading-relaxed flex-1">
                            {option.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Training Mode Immediate Explanation */}
                  {trainingMode && userAnswers[currentQ.id] && (
                    <div className="p-4 bg-[#0E0E0E] rounded-xl border border-[#C5A059]/30 mt-2">
                      <div className="flex items-center gap-2 text-[#C5A059] font-mono text-xs font-bold mb-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Pedagogical Explanation & Syllabus</span>
                      </div>
                      <p className="text-xs text-[#D0D0D0] leading-relaxed">
                        {currentQ.explanation}
                      </p>
                    </div>
                  )}

                  {/* Navigation Buttons (Previous / Next / Finish) */}
                  <div className="flex items-center justify-between pt-6 border-t border-[#262626] gap-3">
                    <button
                      onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                      disabled={currentQuestionIndex === 0}
                      className="px-4 py-2.5 bg-[#1C1C1C] hover:bg-[#242424] disabled:opacity-30 disabled:pointer-events-none rounded-xl text-xs font-semibold text-[#A0A0A0] hover:text-[#F5F5F5] transition-all"
                    >
                      ← Previous Question
                    </button>

                    <div className="flex items-center gap-3">
                      {currentQuestionIndex < examQuestions.length - 1 ? (
                        <button
                          onClick={() =>
                            setCurrentQuestionIndex((prev) =>
                              Math.min(examQuestions.length - 1, prev + 1)
                            )
                          }
                          className="px-6 py-2.5 bg-[#C5A059] hover:bg-[#D4AF65] text-[#0A0A0A] font-bold rounded-xl text-xs uppercase tracking-wider transition-all"
                        >
                          Next →
                        </button>
                      ) : (
                        <button
                          onClick={handleFinishExam}
                          className="px-6 py-2.5 bg-[#78D385] hover:bg-[#8AE097] text-[#0A0A0A] font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg"
                        >
                          Finish and Submit Exam
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Side: Timer & Question Matrix Navigator */}
                <aside className="w-full lg:w-[360px] bg-[#141414] rounded-2xl p-6 border border-[#262626] shadow-2xl flex flex-col gap-6 sticky top-36">
                  {/* Timer Display */}
                  <div className="flex items-center justify-between bg-[#0E0E0E] p-4 rounded-xl border border-[#262626]">
                    <div>
                      <span className="font-mono text-[10px] text-[#737373] uppercase tracking-wider block">
                        TIME REMAINING
                      </span>
                      <span
                        className={`font-mono text-2xl font-bold tracking-wider ${
                          timeRemaining < 300 ? 'text-[#FF5555]' : 'text-[#C5A059]'
                        }`}
                      >
                        {formatTime(timeRemaining)}
                      </span>
                    </div>
                    <button
                      onClick={() => setIsTimerPaused(!isTimerPaused)}
                      className="px-2.5 py-1 bg-[#1C1C1C] hover:bg-[#242424] text-xs font-mono text-[#A0A0A0] rounded border border-[#262626]"
                    >
                      {isTimerPaused ? 'Resume' : 'Pause'}
                    </button>
                  </div>

                  {/* Progress Summary */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#A0A0A0]">Questions answered:</span>
                      <span className="text-[#C5A059] font-bold">
                        {Object.keys(userAnswers).length} / {examQuestions.length}
                      </span>
                    </div>
                    <div className="w-full bg-[#262626] h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#C5A059] to-[#DFC287] h-full transition-all duration-300"
                        style={{
                          width: `${(Object.keys(userAnswers).length / examQuestions.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Grid Palette of Questions */}
                  <div>
                    <span className="font-mono text-[10px] text-[#737373] uppercase tracking-wider block mb-2.5">
                      QUESTION MATRIX
                    </span>
                    <div className="grid grid-cols-5 gap-2">
                      {examQuestions.map((q, idx) => {
                        const isAnswered = !!userAnswers[q.id];
                        const isCurrent = idx === currentQuestionIndex;
                        const isFlagged = !!flaggedQuestions[q.id];

                        let btnClass = 'bg-[#181818] border-[#262626] text-[#737373]';
                        if (isAnswered) {
                          btnClass = 'bg-[#1A261A] border-[#3B663B] text-[#78D385] font-semibold';
                        }
                        if (isFlagged) {
                          btnClass = 'bg-[#332211] border-[#FFAA33] text-[#FFAA33] font-semibold';
                        }
                        if (isCurrent) {
                          btnClass = 'ring-2 ring-[#C5A059] border-[#C5A059] text-[#F5F5F5] bg-[#222222] font-bold';
                        }

                        return (
                          <button
                            key={q.id}
                            onClick={() => setCurrentQuestionIndex(idx)}
                            className={`h-9 rounded-lg border flex items-center justify-center font-mono text-xs transition-all ${btnClass}`}
                          >
                            {idx + 1}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#737373] pt-3 border-t border-[#262626]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded bg-[#78D385]" />
                      <span>Answered</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded bg-[#FFAA33]" />
                      <span>Flagged</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded bg-[#262626]" />
                      <span>Pending</span>
                    </div>
                  </div>

                  {/* Submit Exam Button */}
                  <button
                    onClick={handleFinishExam}
                    className="w-full py-3 bg-[#1C1C1C] hover:bg-[#262626] text-[#DFC287] border border-[#C5A059]/40 font-semibold rounded-xl text-xs uppercase tracking-wider transition-all"
                  >
                    Submit my answers
                  </button>
                </aside>
              </div>
            ) : (
              /* Exam Results Screen */
              examResults && (
                <div className="max-w-4xl mx-auto w-full flex flex-col gap-8">
                  {/* Big Score Card */}
                  <div className="bg-[#141414] rounded-2xl p-8 border border-[#262626] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                      <div
                        className={`w-24 h-24 rounded-2xl flex flex-col items-center justify-center font-mono border ${
                          examResults.passed
                            ? 'bg-[#142616] border-[#4E9A51] text-[#A6E3A1]'
                            : 'bg-[#2A1414] border-[#A33D3D] text-[#F38BA8]'
                        }`}
                      >
                        <span className="text-3xl font-bold">{examResults.scorePercent}%</span>
                        <span className="text-[10px] uppercase tracking-wider">
                          {examResults.correctCount} / {examResults.total}
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2.5 py-0.5 rounded font-mono text-xs font-bold uppercase tracking-wider ${
                              examResults.passed
                                ? 'bg-[#142616] text-[#A6E3A1] border border-[#4E9A51]'
                                : 'bg-[#2A1414] text-[#F38BA8] border border-[#A33D3D]'
                            }`}
                          >
                            {examResults.passed ? 'EXAM PASSED • CERTIFIED' : 'PASSING THRESHOLD NOT MET'}
                          </span>
                          <span className="text-xs text-[#737373] font-mono">
                            (Official passing threshold: 70%)
                          </span>
                        </div>
                        <h2 className="text-2xl font-serif font-medium text-[#F5F5F5] mt-1.5">
                          {examResults.passed
                            ? 'Congratulations! You are ready for PCEP-30-02.'
                            : 'Keep practicing before taking the official exam.'}
                        </h2>
                        <p className="text-xs text-[#A0A0A0] mt-1">
                          {examResults.passed
                            ? 'Your overall score demonstrates solid mastery of Python syntax, loops, collections, and exceptions.'
                            : 'Review the blocks where your score is below 70% below, then take another mock session.'}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleStartExam()}
                      className="px-6 py-3 bg-[#C5A059] hover:bg-[#D4AF65] text-[#0A0A0A] font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 shadow-lg shadow-[#C5A059]/20"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Retake exam</span>
                    </button>
                  </div>

                  {/* Block by Block Breakdown */}
                  <div className="bg-[#141414] rounded-2xl p-6 border border-[#262626] shadow-xl">
                    <span className="font-mono text-xs text-[#C5A059] uppercase tracking-wider font-bold block mb-4">
                      OFFICIAL SYLLABUS BLOCK ANALYSIS
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {Object.entries(examResults.blockStats).map(([bNum, stats]: [string, { correct: number; total: number; name: string; weight: number }]) => {
                        const blockPct =
                          stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
                        const isBlockPass = blockPct >= 70;

                        return (
                          <div
                            key={bNum}
                            className="p-4 bg-[#0E0E0E] rounded-xl border border-[#262626] flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between font-mono text-xs mb-1">
                                <span className="text-[#C5A059] font-bold">Block {bNum} ({stats.weight}%)</span>
                                <span
                                  className={`font-semibold ${
                                    isBlockPass ? 'text-[#78D385]' : 'text-[#FF8888]'
                                  }`}
                                >
                                  {blockPct}%
                                </span>
                              </div>
                              <h4 className="text-xs text-[#F5F5F5] font-medium mb-2 line-clamp-1">
                                {stats.name}
                              </h4>
                            </div>
                            <div>
                              <div className="w-full bg-[#222222] h-1.5 rounded-full overflow-hidden mb-1.5">
                                <div
                                  className={`h-full ${
                                    isBlockPass ? 'bg-[#78D385]' : 'bg-[#FF8888]'
                                  }`}
                                  style={{ width: `${blockPct}%` }}
                                />
                              </div>
                              <span className="font-mono text-[10px] text-[#737373]">
                                {stats.correct} / {stats.total} passed
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Answers Detailed Review */}
                  <div className="bg-[#141414] rounded-2xl p-6 border border-[#262626] shadow-xl flex flex-col gap-6">
                    <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-[#262626]">
                      <div>
                        <span className="font-mono text-xs text-[#C5A059] uppercase tracking-wider font-bold">
                          TECHNICAL REVIEW OF ALL QUESTIONS
                        </span>
                        <h3 className="text-lg font-serif font-medium text-[#F5F5F5] mt-0.5">
                          Detailed answer key & Python Institute explanations
                        </h3>
                      </div>

                      {/* Filter Buttons */}
                      <div className="flex items-center gap-2 bg-[#0E0E0E] p-1 rounded-lg border border-[#262626]">
                        <button
                          onClick={() => setReviewFilter('all')}
                          className={`px-3 py-1 rounded text-xs transition-all ${
                            reviewFilter === 'all'
                              ? 'bg-[#222] text-[#F5F5F5] font-semibold'
                              : 'text-[#737373] hover:text-[#F5F5F5]'
                          }`}
                        >
                          All ({examQuestions.length})
                        </button>
                        <button
                          onClick={() => setReviewFilter('errors')}
                          className={`px-3 py-1 rounded text-xs transition-all ${
                            reviewFilter === 'errors'
                              ? 'bg-[#2A1414] text-[#F38BA8] font-semibold'
                              : 'text-[#737373] hover:text-[#F5F5F5]'
                          }`}
                        >
                          Errors only ({examResults.total - examResults.correctCount})
                        </button>
                        <button
                          onClick={() => setReviewFilter('flagged')}
                          className={`px-3 py-1 rounded text-xs transition-all ${
                            reviewFilter === 'flagged'
                              ? 'bg-[#332211] text-[#FFAA33] font-semibold'
                              : 'text-[#737373] hover:text-[#F5F5F5]'
                          }`}
                        >
                          Flagged ({Object.values(flaggedQuestions).filter(Boolean).length})
                        </button>
                      </div>
                    </div>

                    {/* Questions Review List */}
                    <div className="space-y-6">
                      {examQuestions
                        .filter((q) => {
                          const isCorrect =
                            userAnswers[q.id] === q.options.find((o) => o.isCorrect)?.id;
                          if (reviewFilter === 'errors') return !isCorrect;
                          if (reviewFilter === 'flagged') return !!flaggedQuestions[q.id];
                          return true;
                        })
                        .map((q, qIndex) => {
                          const selectedOptionId = userAnswers[q.id];
                          const correctOption = q.options.find((o) => o.isCorrect);
                          const isCorrect = selectedOptionId === correctOption?.id;

                          return (
                            <div
                              key={q.id}
                              className={`p-5 rounded-xl border ${
                                isCorrect
                                  ? 'bg-[#121A13] border-[#2E4A2E]'
                                  : 'bg-[#1E1414] border-[#4A2626]'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2 font-mono text-xs">
                                  <span className="px-2 py-0.5 bg-[#0A0A0A] rounded text-[#DFC287]">
                                    {q.pcepCode}
                                  </span>
                                  <span className="text-[#737373]">{q.blockName}</span>
                                </div>
                                <span
                                  className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                                    isCorrect
                                      ? 'bg-[#1A331A] text-[#78D385]'
                                      : 'bg-[#331A1A] text-[#FF8888]'
                                  }`}
                                >
                                  {isCorrect ? '✓ Correct Answer' : '✗ Incorrect'}
                                </span>
                              </div>

                              <p className="text-sm font-medium text-[#F5F5F5] mb-2">{q.question}</p>

                              {q.codeSnippet && (
                                <pre className="p-3 bg-[#0A0A0A] rounded-lg border border-[#222] font-mono text-xs text-[#DFC287] overflow-x-auto mb-3">
                                  <code>{q.codeSnippet}</code>
                                </pre>
                              )}

                              {/* Options review */}
                              <div className="space-y-1.5 mb-3">
                                {q.options.map((opt) => {
                                  const isUserPick = opt.id === selectedOptionId;
                                  const isRight = opt.isCorrect;

                                  let rowStyle = 'bg-[#0E0E0E] text-[#888888] border-[#222222]';
                                  if (isRight) {
                                    rowStyle =
                                      'bg-[#162A17] text-[#A6E3A1] border-[#4E9A51] font-semibold';
                                  } else if (isUserPick && !isRight) {
                                    rowStyle =
                                      'bg-[#2A1414] text-[#F38BA8] border-[#A33D3D] line-through';
                                  }

                                  return (
                                    <div
                                      key={opt.id}
                                      className={`px-3 py-2 rounded-lg border text-xs flex items-center justify-between ${rowStyle}`}
                                    >
                                      <span>
                                        {opt.id.toUpperCase()}. {opt.text}
                                      </span>
                                      {isRight && (
                                        <span className="font-mono text-[10px] text-[#A6E3A1] ml-2">
                                          (Correct answer)
                                        </span>
                                      )}
                                      {isUserPick && !isRight && (
                                        <span className="font-mono text-[10px] text-[#F38BA8] ml-2">
                                          (Your choice)
                                        </span>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>

                              {/* Explanation */}
                              <div className="p-3 bg-[#0A0A0A] rounded-lg border border-[#222] text-xs text-[#C0C0C0] leading-relaxed">
                                <span className="font-mono text-[10px] uppercase tracking-wider text-[#C5A059] font-bold block mb-1">
                                  Technical reason:
                                </span>
                                {q.explanation}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: CHEAT SHEET & TRAPS (PCAP-31-03 or PCEP-30-02) */}
        {/* ========================================================================= */}
        {activeTab === 'cheat-sheet' && (
          isPcap ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* PCAP Trap 1: OOP Name Mangling */}
              <div className="bg-[#141414] p-6 rounded-2xl border border-blue-900/40 shadow-xl flex flex-col gap-4">
                <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Code className="w-4 h-4" />
                  <span>PCAP 4.2 • Private Name Mangling</span>
                </div>
                <h3 className="text-base font-serif font-medium text-[#F5F5F5]">
                  Two leading underscores: <code className="text-blue-300">__var</code>
                </h3>
                <div className="space-y-1.5 font-mono text-xs bg-[#0E0E0E] p-3 rounded-xl border border-[#262626]">
                  <div className="p-1.5 bg-[#171717] rounded text-neutral-300">
                    class MyClass:
                    <div className="pl-4 text-blue-300">def __init__(self): self.__secret = 42</div>
                  </div>
                  <div className="p-1.5 text-red-400">
                    obj = MyClass()
                    <div>obj.__secret → AttributeError!</div>
                  </div>
                  <div className="p-1.5 bg-blue-950/40 border border-blue-800/40 rounded text-blue-300">
                    # Python automatically mangles it to:
                    <div className="font-bold text-white">obj._MyClass__secret → 42</div>
                  </div>
                </div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  <strong>PCAP Exam Rule:</strong> Names with at least 2 leading underscores and at most 1 trailing underscore are mangled to <code className="text-blue-300">_ClassName__name</code>. Dunder names like <code className="text-neutral-400">__init__</code> are never mangled.
                </p>
              </div>

              {/* PCAP Trap 2: MRO & Multiple Inheritance */}
              <div className="bg-[#141414] p-6 rounded-2xl border border-blue-900/40 shadow-xl flex flex-col gap-4">
                <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Terminal className="w-4 h-4" />
                  <span>PCAP 4.4 • MRO & Diamond Problem</span>
                </div>
                <h3 className="text-base font-serif font-medium text-[#F5F5F5]">
                  Method Resolution Order: C3 Linearization
                </h3>
                <div className="space-y-2 font-mono text-xs bg-[#0E0E0E] p-3 rounded-xl border border-[#262626]">
                  <div className="p-2 bg-[#171717] rounded text-neutral-300">
                    class A: pass
                    <br />class B(A): pass
                    <br />class C(A): pass
                    <br />class D(B, C): pass
                  </div>
                  <div className="p-2 bg-blue-950/40 border border-blue-800/40 rounded text-blue-300">
                    <span className="text-neutral-400"># D.__mro__ order:</span>
                    <div className="font-bold text-white">[D, B, C, A, object]</div>
                  </div>
                </div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  Python inspects classes depth-first, left-to-right, but guarantees derived classes are checked before their base classes. Incompatible hierarchies raise <code className="text-red-400">TypeError: Cannot create a consistent method resolution order</code>.
                </p>
              </div>

              {/* PCAP Trap 3: String find() vs index() */}
              <div className="bg-[#141414] p-6 rounded-2xl border border-blue-900/40 shadow-xl flex flex-col gap-4">
                <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>PCAP 3.5 • find() vs index() Trap</span>
                </div>
                <h3 className="text-base font-serif font-medium text-[#F5F5F5]">
                  Handling missing substrings
                </h3>
                <div className="space-y-1 font-mono text-xs bg-[#0E0E0E] p-3 rounded-xl border border-[#262626]">
                  <div className="p-2 bg-[#171717] rounded text-neutral-300">
                    s = "pcap_certification"
                  </div>
                  <div className="p-2 bg-emerald-950/40 border border-emerald-800/40 rounded text-emerald-300">
                    s.find("not_found") → -1
                    <div className="text-[11px] text-neutral-400">Never raises an error!</div>
                  </div>
                  <div className="p-2 bg-red-950/40 border border-red-800/40 rounded text-red-300">
                    s.index("not_found") → ValueError!
                    <div className="text-[11px] text-neutral-400">Raises exception immediately!</div>
                  </div>
                </div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  Both accept optional <code className="text-blue-300">start</code> and <code className="text-blue-300">end</code> parameters: <code className="text-blue-300">s.find(sub, start, end)</code>. Notice that <code className="text-blue-300">strip("xyz")</code> treats "xyz" as a set of characters, not a prefix.
                </p>
              </div>

              {/* PCAP Trap 4: Modules & __name__ and sys.path */}
              <div className="bg-[#141414] p-6 rounded-2xl border border-blue-900/40 shadow-xl flex flex-col gap-4">
                <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>PCAP 1.1 & 1.5 • Modules & Packages</span>
                </div>
                <h3 className="text-base font-serif font-medium text-[#F5F5F5]">
                  __name__, __all__, and sys.path
                </h3>
                <div className="space-y-1.5 font-mono text-xs bg-[#0E0E0E] p-3 rounded-xl border border-[#262626]">
                  <div className="p-1.5 bg-[#171717] rounded text-blue-300">
                    __name__ == "__main__"
                    <div className="text-[11px] text-neutral-400">when run directly; contains module name when imported.</div>
                  </div>
                  <div className="p-1.5 bg-[#171717] rounded text-emerald-300">
                    __all__ = ["func1", "func2"]
                    <div className="text-[11px] text-neutral-400">Defines exact export list for 'from module import *'</div>
                  </div>
                  <div className="p-1.5 bg-[#171717] rounded text-neutral-300">
                    sys.path[0]
                    <div className="text-[11px] text-neutral-400">Directory containing the script used to invoke Python.</div>
                  </div>
                </div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  A folder must contain an <code className="text-blue-300">__init__.py</code> file to be recognized as a classic package by the Python interpreter.
                </p>
              </div>

              {/* PCAP Trap 5: Closures & nonlocal vs global */}
              <div className="bg-[#141414] p-6 rounded-2xl border border-blue-900/40 shadow-xl flex flex-col gap-4">
                <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>PCAP 5.4 • Closures & nonlocal Keyword</span>
                </div>
                <h3 className="text-base font-serif font-medium text-[#F5F5F5]">
                  Modifying enclosing lexical scope
                </h3>
                <div className="space-y-1.5 font-mono text-xs bg-[#0E0E0E] p-3 rounded-xl border border-[#262626]">
                  <div className="p-2 bg-[#171717] rounded text-neutral-300">
                    def outer():
                    <div className="pl-4">cnt = 0</div>
                    <div className="pl-4">def inner():</div>
                    <div className="pl-8 text-blue-300 font-bold">nonlocal cnt  # Essential!</div>
                    <div className="pl-8">cnt += 1; return cnt</div>
                    <div className="pl-4">return inner</div>
                  </div>
                  <div className="p-1.5 text-red-400">
                    Without 'nonlocal': <code className="text-red-300">UnboundLocalError</code>
                  </div>
                </div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  Closures store variables inside <code className="text-blue-300">fn.__closure__[i].cell_contents</code>, retaining state across invocations without global state.
                </p>
              </div>

              {/* PCAP Trap 6: File Streams & bytearray */}
              <div className="bg-[#141414] p-6 rounded-2xl border border-blue-900/40 shadow-xl flex flex-col gap-4">
                <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Code className="w-4 h-4" />
                  <span>PCAP 5.5 • File Modes & bytearray</span>
                </div>
                <h3 className="text-base font-serif font-medium text-[#F5F5F5]">
                  Open modes and errno diagnostics
                </h3>
                <div className="space-y-1.5 font-mono text-xs bg-[#0E0E0E] p-3 rounded-xl border border-[#262626]">
                  <div className="p-1.5 bg-[#171717] rounded text-neutral-300">
                    <span className="text-blue-300 font-bold">open(file, "r")</span> → File must exist! (FileNotFoundError / ENOENT)
                  </div>
                  <div className="p-1.5 bg-[#171717] rounded text-neutral-300">
                    <span className="text-blue-300 font-bold">open(file, "w")</span> → Truncates existing file to 0 bytes!
                  </div>
                  <div className="p-1.5 bg-[#171717] rounded text-neutral-300">
                    <span className="text-blue-300 font-bold">open(file, "a")</span> → Writes append at EOF!
                  </div>
                  <div className="p-1.5 bg-blue-950/40 border border-blue-800/40 rounded text-blue-300">
                    bytearray is mutable; bytes is immutable!
                  </div>
                </div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  Stream errors return <code className="text-blue-300">err.errno</code> matching constants in the <code className="text-blue-300">errno</code> standard module (e.g. <code className="text-blue-300">errno.ENOENT</code>, <code className="text-blue-300">errno.EACCES</code>).
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Trap 1: Precedence Table */}
              <div className="bg-[#141414] p-6 rounded-2xl border border-[#262626] shadow-xl flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[#C5A059] font-mono text-xs font-bold uppercase tracking-wider">
                  <Code className="w-4 h-4" />
                  <span>PCEP Operator Precedence</span>
                </div>
                <h3 className="text-base font-serif font-medium text-[#F5F5F5]">
                  Strict evaluation order (highest to lowest)
                </h3>
                <div className="space-y-1.5 font-mono text-xs bg-[#0E0E0E] p-3 rounded-xl border border-[#262626]">
                  <div className="flex justify-between p-1.5 bg-[#171717] rounded">
                    <span className="text-[#DFC287]">1. ** (Puissance)</span>
                    <span className="text-[#FF8888]">Right-to-Left Associativity!</span>
                  </div>
                  <div className="flex justify-between p-1.5 text-[#C0C0C0]">
                    <span>2. +x, -x, ~x (Unaires)</span>
                    <span>Unary</span>
                  </div>
                  <div className="flex justify-between p-1.5 bg-[#171717] rounded text-[#C0C0C0]">
                    <span>3. *, /, //, %</span>
                    <span>Left-to-Right</span>
                  </div>
                  <div className="flex justify-between p-1.5 text-[#C0C0C0]">
                    <span>4. +, - (Binaires)</span>
                    <span>Addition, Subtraction</span>
                  </div>
                  <div className="flex justify-between p-1.5 bg-[#171717] rounded text-[#C0C0C0]">
                    <span>5. &lt;&lt;, &gt;&gt;</span>
                    <span>Bitwise shifts</span>
                  </div>
                  <div className="flex justify-between p-1.5 text-[#C0C0C0]">
                    <span>6. & (ET binaire)</span>
                    <span>Bitwise AND</span>
                  </div>
                  <div className="flex justify-between p-1.5 bg-[#171717] rounded text-[#C0C0C0]">
                    <span>7. ^, |</span>
                    <span>XOR, OR binaire</span>
                  </div>
                  <div className="flex justify-between p-1.5 text-[#C0C0C0]">
                    <span>8. &lt;, &lt;=, &gt;, &gt;=, ==, !=, in, is</span>
                    <span>Comparisons</span>
                  </div>
                  <div className="flex justify-between p-1.5 bg-[#171717] rounded text-[#DFC287]">
                    <span>9. not, and, or</span>
                    <span>Boolean Operators</span>
                  </div>
                </div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  <strong>PCEP Trap:</strong> <code className="text-[#DFC287]">2 ** 2 ** 3</code> equals <code className="text-[#DFC287]">2 ** (2 ** 3) = 2 ** 8 = 256</code> and NOT 64!
                </p>
              </div>

              {/* Trap 2: Division & Floats */}
              <div className="bg-[#141414] p-6 rounded-2xl border border-[#262626] shadow-xl flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[#C5A059] font-mono text-xs font-bold uppercase tracking-wider">
                  <Terminal className="w-4 h-4" />
                  <span>Division / vs // vs %</span>
                </div>
                <h3 className="text-base font-serif font-medium text-[#F5F5F5]">
                  Return types and floor division towards minus infinity
                </h3>
                <div className="space-y-2 font-mono text-xs bg-[#0E0E0E] p-3 rounded-xl border border-[#262626]">
                  <div className="p-2 bg-[#171717] rounded">
                    <span className="text-[#737373]"># In Python 3, / ALWAYS returns a float:</span>
                    <div className="text-[#DFC287]">6 / 2 → 3.0  (float, never int!)</div>
                  </div>
                  <div className="p-2 bg-[#171717] rounded">
                    <span className="text-[#737373]"># // performs floor division (towards minus infinity):</span>
                    <div className="text-[#DFC287]">6 // 4 → 1</div>
                    <div className="text-[#FF8888]">-6 // 4 → -2  (Not -1! Rounded towards -∞)</div>
                  </div>
                  <div className="p-2 bg-[#171717] rounded">
                    <span className="text-[#737373]"># Modulo % with negative numbers:</span>
                    <div className="text-[#DFC287]">14 % 4 → 2</div>
                    <div className="text-[#FF8888]">-14 % 4 → 2  because 4 * (-4) + 2 = -14</div>
                  </div>
                </div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  Any operation involving at least one float produces a float result: <code className="text-[#DFC287]">4 // 2.0 → 2.0</code>.
                </p>
              </div>

              {/* Trap 3: Exceptions Hierarchy */}
              <div className="bg-[#141414] p-6 rounded-2xl border border-[#262626] shadow-xl flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[#C5A059] font-mono text-xs font-bold uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>Exception Hierarchy</span>
                </div>
                <h3 className="text-base font-serif font-medium text-[#F5F5F5]">
                  Capture order in try / except
                </h3>
                <div className="space-y-1 font-mono text-xs bg-[#0E0E0E] p-3 rounded-xl border border-[#262626]">
                  <div className="text-[#A0A0A0]">BaseException</div>
                  <div className="pl-3 text-[#A0A0A0]">└── Exception</div>
                  <div className="pl-6 text-[#C5A059]">├── ArithmeticError</div>
                  <div className="pl-9 text-[#DFC287]">├── ZeroDivisionError</div>
                  <div className="pl-9 text-[#DFC287]">├── OverflowError</div>
                  <div className="pl-9 text-[#DFC287]">└── FloatingPointError</div>
                  <div className="pl-6 text-[#C5A059]">├── LookupError</div>
                  <div className="pl-9 text-[#DFC287]">├── IndexError</div>
                  <div className="pl-9 text-[#DFC287]">└── KeyError</div>
                  <div className="pl-6 text-[#DFC287]">├── TypeError</div>
                  <div className="pl-6 text-[#DFC287]">├── ValueError</div>
                  <div className="pl-6 text-[#DFC287]">└── SyntaxError</div>
                </div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  Always place derived exceptions (subclasses) <strong>BEFORE</strong> their parent classes in <code className="text-[#DFC287]">except</code> blocks.
                </p>
              </div>

              {/* Trap 4: Mutables vs Immutables */}
              <div className="bg-[#141414] p-6 rounded-2xl border border-[#262626] shadow-xl flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[#C5A059] font-mono text-xs font-bold uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>Mutability & Memory</span>
                </div>
                <h3 className="text-base font-serif font-medium text-[#F5F5F5]">
                  What can be modified in-place?
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-3 bg-[#162A17] rounded-xl border border-[#4E9A51]/40 text-[#A6E3A1]">
                    <span className="font-bold block mb-1">MUTABLE (modifiable)</span>
                    <ul className="space-y-0.5 text-[11px]">
                      <li>• list ([1, 2])</li>
                      <li>• dict ({'{"a": 1}'})</li>
                      <li>• set ({'{1, 2}'})</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-[#2A1414] rounded-xl border border-[#A33D3D]/40 text-[#F38BA8]">
                    <span className="font-bold block mb-1">IMMUTABLE (frozen)</span>
                    <ul className="space-y-0.5 text-[11px]">
                      <li>• int, float, bool</li>
                      <li>• str ("abc")</li>
                      <li>• tuple ((1, 2))</li>
                      <li>• frozenset</li>
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  Dictionary keys must be immutable (hashable). A tuple containing a list is not hashable!
                </p>
              </div>

              {/* Trap 5: Slicing Tricks */}
              <div className="bg-[#141414] p-6 rounded-2xl border border-[#262626] shadow-xl flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[#C5A059] font-mono text-xs font-bold uppercase tracking-wider">
                  <Code className="w-4 h-4" />
                  <span>Slicing & Negative Steps</span>
                </div>
                <h3 className="text-base font-serif font-medium text-[#F5F5F5]">
                  Syntax: [start : stop : step]
                </h3>
                <div className="space-y-1.5 font-mono text-xs bg-[#0E0E0E] p-3 rounded-xl border border-[#262626]">
                  <div className="p-1.5 bg-[#171717] rounded text-[#DFC287]">
                    s = "Python"
                  </div>
                  <div className="p-1.5 text-[#C0C0C0]">
                    s[1:4] → "yth" (index 4 excluded!)
                  </div>
                  <div className="p-1.5 bg-[#171717] rounded text-[#C0C0C0]">
                    s[::-1] → "nohtyP" (complete reversal)
                  </div>
                  <div className="p-1.5 text-[#C0C0C0]">
                    s[4:1:-1] → "oht" (starts at 4, stops before 1)
                  </div>
                  <div className="p-1.5 bg-[#171717] rounded text-[#FF8888]">
                    s[1:4:-1] → "" (empty, since 1 &lt; 4 with negative step)
                  </div>
                </div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  Slicing NEVER raises an IndexError, even if indices exceed sequence length.
                </p>
              </div>

              {/* Trap 6: Functions & Default Arguments */}
              <div className="bg-[#141414] p-6 rounded-2xl border border-[#262626] shadow-xl flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[#C5A059] font-mono text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Functions & Default Parameters</span>
                </div>
                <h3 className="text-base font-serif font-medium text-[#F5F5F5]">
                  Positional vs Keyword Arguments
                </h3>
                <div className="space-y-1.5 font-mono text-xs bg-[#0E0E0E] p-3 rounded-xl border border-[#262626]">
                  <div className="p-1.5 bg-[#171717] rounded text-[#DFC287]">
                    def f(a, b=2, c=3): return a + b + c
                  </div>
                  <div className="p-1.5 text-[#C0C0C0]">
                    f(1) → 6 (1 + 2 + 3)
                  </div>
                  <div className="p-1.5 bg-[#171717] rounded text-[#C0C0C0]">
                    f(c=10, a=5) → 17 (5 + 2 + 10)
                  </div>
                  <div className="p-1.5 text-[#FF8888]">
                    f(b=2, 1) → SyntaxError !
                  </div>
                  <div className="text-[11px] text-[#737373] p-1">
                    Positional arguments MUST always precede keyword arguments.
                  </div>
                </div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  A function without an explicit <code className="text-[#DFC287]">return</code> statement (or with a bare <code className="text-[#DFC287]">return</code>) always returns <code className="text-[#DFC287]">None</code>.
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
