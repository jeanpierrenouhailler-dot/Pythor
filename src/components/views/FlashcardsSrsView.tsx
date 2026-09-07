import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  CheckCircle2,
  Copy,
  Check,
  Search,
  Filter,
  Layers,
  Terminal,
  Brain,
  AlertCircle,
  HelpCircle,
  Clock,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { Flashcard, CardSRSData } from '../../types';
import { pcapSyllabusSections } from '../../data/pcapData';

interface FlashcardsSrsViewProps {
  cards: Flashcard[];
  selectedSection: string;
  onSelectSection: (section: string) => void;
}

export const FlashcardsSrsView: React.FC<FlashcardsSrsViewProps> = ({
  cards,
  selectedSection,
  onSelectSection,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  // SRS State stored locally
  const [srsState, setSrsState] = useState<Record<string, CardSRSData>>(() => {
    try {
      const saved = localStorage.getItem('pcap_srs_state');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const saveSrsState = (newState: Record<string, CardSRSData>) => {
    setSrsState(newState);
    try {
      localStorage.setItem('pcap_srs_state', JSON.stringify(newState));
    } catch {
      // ignore
    }
  };

  // Filter cards based on section, chapter, category, difficulty, search
  const filteredCards = useMemo(() => {
    return cards.filter((card) => {
      // Section filter
      if (selectedSection !== 'all' && card.section !== selectedSection) {
        return false;
      }
      // Chapter filter
      if (selectedChapter !== 'all' && card.chapter !== selectedChapter) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all' && card.category !== selectedCategory) {
        return false;
      }
      // Difficulty filter
      if (selectedDifficulty !== 'all' && card.difficulty !== selectedDifficulty) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchQ = card.question.toLowerCase().includes(q);
        const matchCode = card.codeSnippet.toLowerCase().includes(q);
        const matchTopic = card.topic.toLowerCase().includes(q);
        const matchExp = card.explanationText.toLowerCase().includes(q);
        return matchQ || matchCode || matchTopic || matchExp;
      }
      return true;
    });
  }, [cards, selectedSection, selectedChapter, selectedCategory, selectedDifficulty, searchQuery]);

  // Adjust current index if out of bounds
  useEffect(() => {
    if (currentIndex >= filteredCards.length) {
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  }, [filteredCards.length, currentIndex]);

  const currentCard: Flashcard | undefined = filteredCards[currentIndex];

  const handleNext = useCallback(() => {
    if (filteredCards.length === 0) return;
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  }, [filteredCards.length]);

  const handlePrev = useCallback(() => {
    if (filteredCards.length === 0) return;
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  }, [filteredCards.length]);

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  const handleShuffle = () => {
    if (filteredCards.length <= 1) return;
    const randomIndex = Math.floor(Math.random() * filteredCards.length);
    setIsFlipped(false);
    setCurrentIndex(randomIndex);
  };

  const handleCopyCode = () => {
    if (!currentCard) return;
    navigator.clipboard.writeText(currentCard.codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleRateSRS = (rating: 'again' | 'hard' | 'good' | 'easy') => {
    if (!currentCard) return;
    const cardId = currentCard.id;
    const prev = srsState[cardId] || {
      repetitions: 0,
      interval: 1,
      easeFactor: 2.5,
      status: 'new',
    };

    let newInterval = 1;
    let newEase = prev.easeFactor;
    let newStatus: CardSRSData['status'] = 'learning';

    if (rating === 'again') {
      newInterval = 1;
      newEase = Math.max(1.3, prev.easeFactor - 0.2);
      newStatus = 'learning';
    } else if (rating === 'hard') {
      newInterval = Math.max(1, Math.round(prev.interval * 1.2));
      newEase = Math.max(1.3, prev.easeFactor - 0.15);
      newStatus = 'review';
    } else if (rating === 'good') {
      newInterval = Math.round(prev.interval * newEase);
      newStatus = 'review';
    } else if (rating === 'easy') {
      newInterval = Math.round(prev.interval * newEase * 1.5);
      newEase = prev.easeFactor + 0.15;
      newStatus = 'mastered';
    }

    saveSrsState({
      ...srsState,
      [cardId]: {
        repetitions: prev.repetitions + 1,
        interval: newInterval,
        easeFactor: Number(newEase.toFixed(2)),
        lastReviewed: Date.now(),
        dueDate: Date.now() + newInterval * 86400000,
        status: newStatus,
      },
    });

    // Auto-advance to next card on rating
    handleNext();
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in search input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        handleFlip();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (isFlipped) {
        if (e.key === '1') handleRateSRS('again');
        if (e.key === '2') handleRateSRS('hard');
        if (e.key === '3') handleRateSRS('good');
        if (e.key === '4') handleRateSRS('easy');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFlip, handleNext, handlePrev, isFlipped, currentCard, srsState]);

  // Stats calculation
  const stats = useMemo(() => {
    let mastered = 0;
    let review = 0;
    let learning = 0;
    let fresh = 0;

    cards.forEach((c) => {
      const s = srsState[c.id];
      if (!s) fresh++;
      else if (s.status === 'mastered') mastered++;
      else if (s.status === 'review') review++;
      else learning++;
    });

    return { mastered, review, learning, fresh, total: cards.length };
  }, [cards, srsState]);

  const currentCardSRS = currentCard ? srsState[currentCard.id] : undefined;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Top Banner / Section Header */}
      <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 sm:p-6 shadow-xl backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {selectedSection === 'all'
                  ? 'Complete PCAP Bank'
                  : selectedSection === 'Section 4'
                  ? 'PCAP Section 4 • 100 Flashcards'
                  : selectedSection}
              </span>
              <span className="text-xs text-slate-400">
                {filteredCards.length} {filteredCards.length === 1 ? 'card' : 'cards'} available
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white mt-1 tracking-tight">
              {selectedSection === 'Section 4'
                ? 'Object-Oriented Programming (OOP) Deep Dive'
                : 'Interactive Active Recall & SRS Flashcards'}
            </h1>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              {selectedSection === 'Section 4'
                ? 'Comprehensive coverage of 100 questions spanning all 5 exam chapters: paradigms, variable scopes, name mangling, dunders, operator overloading, and MRO.'
                : 'Spaced repetition system designed for rapid mastery of Python syntax nuances, runtime exceptions, and PCAP-31-03 exam traps.'}
            </p>
          </div>

          {/* Mini Stats Badges */}
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl px-2.5 py-1.5">
              <span className="text-[10px] uppercase font-semibold text-slate-400 block">Fresh</span>
              <span className="text-sm font-bold text-slate-200">{stats.fresh}</span>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl px-2.5 py-1.5">
              <span className="text-[10px] uppercase font-semibold text-amber-300 block">Learning</span>
              <span className="text-sm font-bold text-amber-300">{stats.learning}</span>
            </div>
            <div className="bg-sky-500/10 border border-sky-500/20 rounded-xl px-2.5 py-1.5">
              <span className="text-[10px] uppercase font-semibold text-sky-300 block">Review</span>
              <span className="text-sm font-bold text-sky-300">{stats.review}</span>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-2.5 py-1.5">
              <span className="text-[10px] uppercase font-semibold text-emerald-300 block">Mastered</span>
              <span className="text-sm font-bold text-emerald-300">{stats.mastered}</span>
            </div>
          </div>
        </div>

        {/* Section 4 Chapter Sub-Nav (if Section 4 is active) */}
        {selectedSection === 'Section 4' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Filter by Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Chapters (100 Cards)' },
                { id: '4.1', label: '4.1 OOP Approach (1-20)' },
                { id: '4.2', label: '4.2 Class vs Instance (21-40)' },
                { id: '4.3', label: '4.3 Name Mangling (41-60)' },
                { id: '4.4', label: '4.4 Methods & Dunders (61-80)' },
                { id: '4.5', label: '4.5 Inheritance & MRO (81-100)' },
              ].map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => {
                    setSelectedChapter(ch.id);
                    setCurrentIndex(0);
                    setIsFlipped(false);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    selectedChapter === ch.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search & Secondary Filter Bar */}
        <div className="mt-4 flex flex-col sm:flex-row items-center gap-2.5">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search code, topics, rules..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
            />
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto overflow-x-auto">
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className="bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-cyan-500"
            >
              <option value="all">All Categories</option>
              <option value="T1: Built-ins">T1: Built-ins</option>
              <option value="T2: Output">T2: Output Prediction</option>
              <option value="T3: Theory">T3: Theory</option>
              <option value="T4: Bugs">T4: Common Bugs</option>
            </select>

            {/* Difficulty Filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => {
                setSelectedDifficulty(e.target.value);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className="bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-cyan-500"
            >
              <option value="all">All Difficulties</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            {/* Shuffle Button */}
            <button
              onClick={handleShuffle}
              title="Shuffle card order"
              className="p-1.5 rounded-xl border border-slate-800 text-slate-400 hover:text-cyan-300 hover:bg-slate-800/60 transition-colors ml-auto sm:ml-0"
            >
              <Shuffle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Flashcard Card Area */}
      {filteredCards.length === 0 ? (
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-12 text-center">
          <AlertCircle className="w-10 h-10 text-amber-400 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-slate-200">No flashcards found</h3>
          <p className="text-sm text-slate-400 mt-1 max-w-sm mx-auto">
            Try resetting your search query or selecting another chapter/section filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedChapter('all');
              setSelectedCategory('all');
              setSelectedDifficulty('all');
            }}
            className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-semibold transition-all shadow-md shadow-cyan-600/20"
          >
            Clear All Filters
          </button>
        </div>
      ) : currentCard ? (
        <div className="space-y-4">
          {/* Card Top Navigator Bar */}
          <div className="flex items-center justify-between px-2 text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <span className="font-mono text-cyan-400 font-semibold">
                Card {currentIndex + 1} of {filteredCards.length}
              </span>
              <span>•</span>
              <span className="text-slate-300 font-medium">{currentCard.cardType}</span>
            </div>

            <div className="flex items-center space-x-1.5">
              {currentCardSRS && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                  SRS: {currentCardSRS.status} (interval: {currentCardSRS.interval}d)
                </span>
              )}
            </div>
          </div>

          {/* Flip Container */}
          <div
            onClick={handleFlip}
            className="relative min-h-[420px] sm:min-h-[460px] rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8 cursor-pointer shadow-2xl transition-all duration-200 hover:border-slate-700 hover:shadow-cyan-950/20 group"
          >
            {/* Front Side: Question & Code snippet */}
            {!isFlipped ? (
              <div className="flex flex-col h-full justify-between space-y-6">
                <div>
                  {/* Card Metadata Chips */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                        {currentCard.category}
                      </span>
                      <span
                        className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                          currentCard.difficulty === 'Beginner'
                            ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                            : currentCard.difficulty === 'Intermediate'
                            ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                            : 'bg-rose-500/10 text-rose-300 border border-rose-500/30'
                        }`}
                      >
                        {currentCard.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 text-xs text-slate-400">
                      <span>Topic:</span>
                      <span className="text-slate-200 font-medium">{currentCard.topic}</span>
                    </div>
                  </div>

                  {/* Question Title */}
                  <div className="mt-5 space-y-2">
                    <h2 className="text-lg sm:text-xl font-bold text-slate-100 leading-snug">
                      {currentCard.question}
                    </h2>
                  </div>

                  {/* Code Snippet Box */}
                  {currentCard.codeSnippet && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="mt-4 relative rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs sm:text-sm text-slate-200 shadow-inner group/code"
                    >
                      <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2 border-b border-slate-800 pb-1.5">
                        <div className="flex items-center space-x-1.5">
                          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Python Code Snippet</span>
                        </div>
                        <button
                          onClick={handleCopyCode}
                          className="flex items-center space-x-1 text-slate-400 hover:text-white transition-colors"
                        >
                          {copiedCode ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="overflow-x-auto whitespace-pre leading-relaxed text-cyan-200/90 font-mono">
                        {currentCard.codeSnippet}
                      </pre>
                    </div>
                  )}
                </div>

                {/* Bottom hint to flip */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center space-x-1 text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Interval: {currentCard.intervalDays}d • Ease: {currentCard.factor}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-cyan-400 font-medium group-hover:text-cyan-300">
                    <RotateCw className="w-4 h-4 transition-transform group-hover:rotate-180 duration-500" />
                    <span>Click or press Space to Reveal Answer</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Back Side: Expected Output & Full Explanation */
              <div className="flex flex-col h-full justify-between space-y-6">
                <div>
                  {/* Back Top Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 flex items-center space-x-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Expected STDOUT / Resolution</span>
                      </span>
                    </div>

                    <span className="text-xs text-slate-400">Click to view Question</span>
                  </div>

                  {/* Expected Output Terminal */}
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="mt-4 rounded-xl border border-emerald-950/50 bg-slate-950 p-4 font-mono text-xs sm:text-sm text-emerald-400 shadow-inner"
                  >
                    <div className="flex items-center space-x-1.5 text-[11px] text-slate-500 mb-2 border-b border-slate-800 pb-1.5">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Console Output / Value</span>
                    </div>
                    <pre className="overflow-x-auto whitespace-pre font-mono leading-relaxed">
                      {currentCard.stdoutExpected}
                    </pre>
                  </div>

                  {/* Detailed Explanation Breakdown */}
                  <div className="mt-5 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Brain className="w-4 h-4 text-cyan-400" />
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {currentCard.explanationTitle}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed pl-6">
                      {currentCard.explanationText}
                    </p>
                  </div>

                  {/* Complexity / PCAP Tip */}
                  {currentCard.complexityInfo && (
                    <div className="mt-4 pl-6 flex items-start space-x-2 text-xs text-amber-300/90 bg-amber-500/5 border border-amber-500/20 rounded-lg p-2.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="font-semibold text-amber-300">Exam Note: </strong>
                        {currentCard.complexityInfo}
                      </span>
                    </div>
                  )}
                </div>

                {/* SRS Rating Bar on Back */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="pt-4 border-t border-slate-800/80 space-y-3"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-medium text-slate-300">Rate your recall (1-4):</span>
                    <span className="text-[11px] text-slate-500">Automatically advances to next card</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button
                      onClick={() => handleRateSRS('again')}
                      className="flex flex-col items-center justify-center p-2.5 rounded-xl border border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 font-medium text-xs transition-all shadow-sm group/btn"
                    >
                      <span className="font-bold flex items-center space-x-1">
                        <span>Again</span>
                        <kbd className="text-[10px] bg-rose-950/80 px-1.5 py-0.5 rounded border border-rose-500/40">
                          1
                        </kbd>
                      </span>
                      <span className="text-[10px] text-rose-400/80 mt-0.5">&lt; 1 min</span>
                    </button>

                    <button
                      onClick={() => handleRateSRS('hard')}
                      className="flex flex-col items-center justify-center p-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-medium text-xs transition-all shadow-sm group/btn"
                    >
                      <span className="font-bold flex items-center space-x-1">
                        <span>Hard</span>
                        <kbd className="text-[10px] bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-500/40">
                          2
                        </kbd>
                      </span>
                      <span className="text-[10px] text-amber-400/80 mt-0.5">12 hours</span>
                    </button>

                    <button
                      onClick={() => handleRateSRS('good')}
                      className="flex flex-col items-center justify-center p-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-medium text-xs transition-all shadow-sm group/btn"
                    >
                      <span className="font-bold flex items-center space-x-1">
                        <span>Good</span>
                        <kbd className="text-[10px] bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/40">
                          3
                        </kbd>
                      </span>
                      <span className="text-[10px] text-emerald-400/80 mt-0.5">1 day</span>
                    </button>

                    <button
                      onClick={() => handleRateSRS('easy')}
                      className="flex flex-col items-center justify-center p-2.5 rounded-xl border border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 font-medium text-xs transition-all shadow-sm group/btn"
                    >
                      <span className="font-bold flex items-center space-x-1">
                        <span>Easy</span>
                        <kbd className="text-[10px] bg-sky-950/80 px-1.5 py-0.5 rounded border border-sky-500/40">
                          4
                        </kbd>
                      </span>
                      <span className="text-[10px] text-sky-400/80 mt-0.5">4 days</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Controls Bar */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <button
              onClick={handlePrev}
              disabled={filteredCards.length <= 1}
              className="px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 transition-all flex items-center space-x-2 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
              <kbd className="hidden sm:inline text-[10px] text-slate-500 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">
                ←
              </kbd>
            </button>

            {/* Slider / Card Quick Jumper */}
            <div className="flex items-center space-x-3 w-full max-w-xs justify-center">
              <input
                type="range"
                min={0}
                max={filteredCards.length - 1}
                value={currentIndex}
                onChange={(e) => {
                  setCurrentIndex(Number(e.target.value));
                  setIsFlipped(false);
                }}
                className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
              />
            </div>

            <button
              onClick={handleNext}
              disabled={filteredCards.length <= 1}
              className="px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 transition-all flex items-center space-x-2 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <kbd className="hidden sm:inline text-[10px] text-slate-500 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">
                →
              </kbd>
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Keyboard Shortcuts Helper Pill */}
          <div className="text-center pt-2">
            <span className="inline-flex items-center space-x-3 text-[11px] text-slate-500 bg-slate-950/60 border border-slate-900 px-3 py-1 rounded-full">
              <span>
                <strong className="text-slate-400">Space</strong>: Flip Card
              </span>
              <span>•</span>
              <span>
                <strong className="text-slate-400">← / →</strong>: Navigate
              </span>
              <span>•</span>
              <span>
                <strong className="text-slate-400">1-4</strong>: Active Recall Rating
              </span>
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
