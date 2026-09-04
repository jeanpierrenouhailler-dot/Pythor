import React, { useState, useEffect } from 'react';
import { Flashcard, UserProfile, TrackId } from '../../types';
import {
  ArrowLeft,
  Settings,
  Maximize2,
  Minimize2,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  Eye,
  RotateCcw,
  Zap,
  TrendingUp,
  Brain,
  Layers,
  ChevronLeft,
  ChevronRight,
  Award,
} from 'lucide-react';

interface FlashcardsSrsViewProps {
  cards: Flashcard[];
  user: UserProfile;
  activeTrack?: TrackId;
  onSelectTrack?: (track: TrackId) => void;
  onNavigateParcours?: () => void;
  onNavigateBack?: () => void;
  previousViewTitle?: string;
  onUpdateXp: (delta: number) => void;
}

export const FlashcardsSrsView: React.FC<FlashcardsSrsViewProps> = ({
  cards,
  user,
  activeTrack = 'pcap-31-03',
  onSelectTrack,
  onNavigateParcours,
  onNavigateBack,
  previousViewTitle = 'Learning Path',
  onUpdateXp,
}) => {
  const isPcap = activeTrack === 'pcap-31-03';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(true); // Default flipped as shown in Image 7 reference
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(12);
  const totalCardsToday = Math.max(cards.length, 28);
  const [showGradingFeedback, setShowGradingFeedback] = useState<string | null>(null);

  // Reset index if cards change
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(true);
  }, [activeTrack, cards]);

  const card = cards[currentIndex] || cards[0];

  // Keyboard navigation & Anki shortcuts: Space (flip), 1 (Revoir), 2 (Difficile), 3 (Bon), 4 (Facile)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (isFlipped) {
        if (e.key === '1') handleGrade('revoir', 0);
        else if (e.key === '2') handleGrade('difficile', 10);
        else if (e.key === '3') handleGrade('bon', 20);
        else if (e.key === '4') handleGrade('facile', 30);
      }
      if (e.key === 'ArrowRight') handleNextCard();
      if (e.key === 'ArrowLeft') handlePrevCard();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFlipped, currentIndex]);

  const handleNextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
    } else {
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  };

  const handlePrevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsFlipped(false);
    }
  };

  const handleGrade = (rating: 'revoir' | 'difficile' | 'bon' | 'facile', xpEarned: number) => {
    setShowGradingFeedback(rating);
    if (xpEarned > 0) {
      onUpdateXp(xpEarned);
    }
    setReviewedCount((prev) => Math.min(prev + 1, totalCardsToday));

    setTimeout(() => {
      setShowGradingFeedback(null);
      handleNextCard();
    }, 450);
  };

  const progressPercent = Math.round((reviewedCount / totalCardsToday) * 100);

  return (
    <div
      className={`w-full min-h-[calc(100vh-4rem)] bg-[#0A0A0A] text-[#F5F5F5] flex flex-col ${
        isFullscreen ? 'fixed inset-0 z-50 bg-[#0A0A0A]' : ''
      }`}
    >
      {/* Top SRS Sub-Navigation Bar */}
      <div className="w-full bg-[#0A0A0A]/90 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-3.5 border-b border-[#262626] sticky top-16 z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Return link & Deck Header */}
          <div className="flex flex-col gap-2">
            <button
              onClick={onNavigateBack || onNavigateParcours}
              id="srs-return-button"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-[#1E1E1E] border border-[#2D2D2D] hover:border-[#454545] text-xs text-[#E5E5E5] hover:text-white font-medium transition-all group shadow-sm w-fit"
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
            <div className="flex items-center gap-2.5 flex-wrap">
              <Brain className={`w-5 h-5 ${isPcap ? 'text-blue-400' : 'text-[#C5A059]'}`} />
              <h1 className="text-base sm:text-lg font-serif font-medium text-[#F5F5F5]">
                {isPcap
                  ? 'PCAP™ Associate Deck (Modules, Exceptions, Strings, OOP, I/O)'
                  : 'PCEP™ Entry-Level Deck (Syntax, Control Flow, Collections, Functions)'}
              </h1>

              {/* Track Selector Pill */}
              {onSelectTrack && (
                <div className="flex items-center p-0.5 bg-[#141414] rounded-lg border border-[#262626] ml-2">
                  <button
                    onClick={() => onSelectTrack('pcap-31-03')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
                      isPcap
                        ? 'bg-blue-600 text-white font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    PCAP-31-03
                  </button>
                  <button
                    onClick={() => onSelectTrack('pcep-30-02')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
                      !isPcap
                        ? 'bg-[#C5A059] text-black font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    PCEP-30-02
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* SRS Progress Metrics & Controls */}
          <div className="flex items-center gap-4 sm:gap-6 w-full md:w-auto justify-between md:justify-end">
            {/* Progress Bar with count */}
            <div className="flex flex-col gap-1 min-w-[140px] sm:min-w-[180px]">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className={`font-semibold ${isPcap ? 'text-blue-400' : 'text-[#C5A059]'}`}>
                  Card {currentIndex + 1} of {cards.length}
                </span>
                <span className="text-[#737373]">{progressPercent}%</span>
              </div>
              <div className="w-full bg-[#1C1C1C] h-1.5 rounded-full overflow-hidden border border-[#262626]">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    isPcap
                      ? 'bg-gradient-to-r from-blue-600 via-blue-400 to-sky-200'
                      : 'bg-gradient-to-r from-[#C5A059] via-[#DFC287] to-[#F5F5F5]'
                  }`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* SRS Retention Rate Badge */}
            <div
              className={`hidden sm:flex items-center gap-2 bg-[#141414] px-3 py-1.5 rounded-md border font-mono text-xs ${
                isPcap ? 'border-blue-900/50 text-blue-300' : 'border-[#262626] text-[#DFC287]'
              }`}
            >
              <TrendingUp className={`w-4 h-4 ${isPcap ? 'text-blue-400' : 'text-[#C5A059]'}`} />
              <span>Retention: {user.srsRetentionRate}%</span>
            </div>

            {/* Fullscreen & Settings icons */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 text-[#737373] hover:text-[#F5F5F5] hover:bg-[#1C1C1C] rounded-md transition-colors"
                title="Fullscreen"
              >
                {isFullscreen ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Flashcard Interactive Stage */}
      <div className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col justify-center">
        {/* Main Card Container */}
        <div className="bg-[#141414] rounded-xl border border-[#262626] shadow-2xl overflow-hidden transition-all duration-300 flex flex-col">
          {/* Card Top Metadata Ribbon */}
          <div className="p-4 sm:p-5 bg-[#181818] border-b border-[#262626] flex flex-wrap items-center justify-between gap-3 select-none">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 bg-[#1C1C1C] text-[#C5A059] text-xs font-mono font-semibold rounded border border-[#C5A059]/30">
                {card.cardType}
              </span>
              <span className="px-2.5 py-1 bg-[#1C1C1C] text-[#A0A0A0] text-xs font-mono rounded border border-[#262626]">
                {card.topic}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1C1C1C] text-[#DFC287] font-mono text-xs font-medium border border-[#262626]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DFC287]" />
                {card.difficulty}
              </span>
              <span className="px-2 py-0.5 bg-[#0A0A0A] text-[#737373] font-mono text-[11px] rounded border border-[#262626]">
                Factor: {card.factor}
              </span>
            </div>
          </div>

          {/* Card Question Prompt */}
          <div className="p-6 sm:p-8 space-y-4">
            <h2 className="text-base sm:text-xl font-serif font-light text-[#F5F5F5] leading-relaxed">
              {card.question}
            </h2>

            {/* Python Code Snippet */}
            <div className="bg-[#0A0A0A] rounded-lg border border-[#262626] p-4 font-mono text-xs sm:text-sm overflow-x-auto relative">
              <div className="absolute top-2.5 right-3 text-[10px] font-mono text-[#737373] px-2 py-0.5 bg-[#181818] rounded border border-[#262626]">
                Python 3.12
              </div>
              <div className="flex">
                <div className="select-none text-[#737373]/60 pr-4 text-right font-mono border-r border-[#262626] mr-4">
                  {card.codeSnippet.split('\n').map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <pre className="text-[#F5F5F5] leading-relaxed">
                  {card.codeSnippet}
                </pre>
              </div>
            </div>

            {/* Flip / Show Answer Trigger */}
            {!isFlipped ? (
              <div className="pt-4 flex flex-col items-center">
                <button
                  onClick={() => setIsFlipped(true)}
                  className="px-6 py-3 rounded-lg bg-[#C5A059] hover:bg-[#D6B574] text-[#0A0A0A] font-semibold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>Show Answer</span>
                  <kbd className="px-1.5 py-0.5 bg-black/15 rounded font-mono text-[10px] font-normal">
                    Space
                  </kbd>
                </button>
                <span className="text-[11px] text-[#737373] mt-2 font-mono">
                  Or press Spacebar
                </span>
              </div>
            ) : (
              /* Answer Revealed Content */
              <div className="space-y-4 pt-2 animate-in fade-in duration-300">
                {/* STDOUT Expected Output */}
                <div className="bg-[#0A0A0A] rounded-lg border border-[#C5A059]/40 p-4 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono text-[#C5A059]">
                    <span className="font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      &gt;&gt;&gt; STDOUT Console Output:
                    </span>
                    <span className="text-[#737373] text-[10px]">CPython Output</span>
                  </div>
                  <pre className="font-mono text-sm sm:text-base font-bold text-[#DFC287] bg-[#141414] p-2.5 rounded border border-[#262626]">
                    {card.stdoutExpected}
                  </pre>
                </div>

                {/* Pedagogy Explanation Card */}
                <div className="bg-[#181818] p-4 sm:p-5 rounded-lg border border-[#262626] space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#F5F5F5] uppercase tracking-[1.5px]">
                    <Lightbulb className="w-4 h-4 text-[#C5A059]" />
                    <span>{card.explanationTitle}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                    {card.explanationText}
                  </p>
                  <div className="pt-2 border-t border-[#262626] font-mono text-[11px] text-[#C5A059] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{card.complexityInfo}</span>
                  </div>
                </div>

                {/* Anki / SM-2 Grading Action Bar */}
                <div className="pt-4 border-t border-[#262626]">
                  <div className="text-xs text-[#737373] font-mono mb-2 text-center">
                    Spaced repetition self-assessment (SM-2 Algorithm)
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {/* Grade 1: Revoir */}
                    <button
                      onClick={() => handleGrade('revoir', 0)}
                      className="p-3 bg-[#181818] hover:bg-[#201518] border border-[#ff6b6b]/40 rounded-lg text-left transition-all group flex flex-col"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs font-bold text-[#ff6b6b]">
                          AGAIN
                        </span>
                        <kbd className="px-1 py-0.2 bg-[#0A0A0A] text-[#737373] font-mono text-[10px] rounded">
                          1
                        </kbd>
                      </div>
                      <span className="text-[11px] text-[#737373] group-hover:text-[#A0A0A0]">
                        &lt; 10 min
                      </span>
                    </button>

                    {/* Grade 2: Difficile */}
                    <button
                      onClick={() => handleGrade('difficile', 10)}
                      className="p-3 bg-[#181818] hover:bg-[#221e14] border border-[#DFC287]/40 rounded-lg text-left transition-all group flex flex-col"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs font-bold text-[#DFC287]">
                          HARD
                        </span>
                        <kbd className="px-1 py-0.2 bg-[#0A0A0A] text-[#737373] font-mono text-[10px] rounded">
                          2
                        </kbd>
                      </div>
                      <span className="text-[11px] text-[#737373] group-hover:text-[#A0A0A0]">
                        2 days
                      </span>
                    </button>

                    {/* Grade 3: Bon */}
                    <button
                      onClick={() => handleGrade('bon', 20)}
                      className="p-3 bg-[#181818] hover:bg-[#232014] border border-[#C5A059]/50 rounded-lg text-left transition-all group flex flex-col"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs font-bold text-[#C5A059]">
                          GOOD
                        </span>
                        <kbd className="px-1 py-0.2 bg-[#0A0A0A] text-[#737373] font-mono text-[10px] rounded">
                          3
                        </kbd>
                      </div>
                      <span className="text-[11px] text-[#737373] group-hover:text-[#A0A0A0]">
                        6 days (+20 XP)
                      </span>
                    </button>

                    {/* Grade 4: Facile */}
                    <button
                      onClick={() => handleGrade('facile', 30)}
                      className="p-3 bg-[#181818] hover:bg-[#142318] border border-[#4ade80]/40 rounded-lg text-left transition-all group flex flex-col"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs font-bold text-[#4ade80]">
                          EASY
                        </span>
                        <kbd className="px-1 py-0.2 bg-[#0A0A0A] text-[#737373] font-mono text-[10px] rounded">
                          4
                        </kbd>
                      </div>
                      <span className="text-[11px] text-[#737373] group-hover:text-[#A0A0A0]">
                        12 days (+30 XP)
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Card Deck Controller & Keyboard hints */}
        <div className="flex items-center justify-between mt-4 text-xs font-mono text-[#737373] px-2 select-none">
          <button
            onClick={handlePrevCard}
            className="flex items-center gap-1 hover:text-[#F5F5F5] transition-colors p-1"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous (←)</span>
          </button>

          <div className="hidden sm:flex items-center gap-4">
            <span>[Space] Reveal</span>
            <span>[1-4] Grade</span>
            <span>Deck v3.12 SRS</span>
          </div>

          <button
            onClick={handleNextCard}
            className="flex items-center gap-1 hover:text-[#F5F5F5] transition-colors p-1"
          >
            <span>Next (→)</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
