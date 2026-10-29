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
  Plus,
  Trash2,
} from 'lucide-react';
import { Flashcard, CardSRSData, CertificationTrack } from '../../types';
import { pcapSyllabusSections } from '../../data/pcapData';
import { pcepSyllabusSections } from '../../data/pcepData';
import { pcppSyllabusSections } from '../../data/pcppData';
import { pcedSyllabusSections } from '../../data/pcedData';
import { pcadSyllabusSections } from '../../data/pcadData';
import { pcetSyllabusSections } from '../../data/pcetData';
import { pcatSyllabusSections } from '../../data/pcatData';
import { pcesSyllabusSections } from '../../data/pcesData';
import { pceaSyllabusSections } from '../../data/pceaData';
import { pceiSyllabusSections } from '../../data/pceiData';
import { useI18n } from '../../context/I18nContext';
import { useAuth } from '../../context/AuthContext';
import { saveUserSrsItem, subscribeUserSrsProgress } from '../../services/firestoreService';
import { InfoTooltip } from '../common/InfoTooltip';

interface FlashcardsSrsViewProps {
  cards: Flashcard[];
  selectedSection: string;
  onSelectSection: (section: string) => void;
  initialChapter?: string;
  currentTrack?: CertificationTrack;
  onSelectTrack?: (track: CertificationTrack) => void;
  onOpenCreateCard?: () => void;
  onDeleteCard?: (id: string) => void;
}

export const FlashcardsSrsView: React.FC<FlashcardsSrsViewProps> = ({
  cards,
  selectedSection,
  onSelectSection,
  initialChapter,
  currentTrack = 'pcap',
  onSelectTrack,
  onOpenCreateCard,
  onDeleteCard,
}) => {
  const { t, isFrench } = useI18n();
  const { user } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState<string>(initialChapter || 'all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    if (initialChapter) {
      setSelectedChapter(initialChapter);
    }
  }, [initialChapter]);

  // SRS State stored locally
  const [srsState, setSrsState] = useState<Record<string, CardSRSData>>(() => {
    try {
      const saved = localStorage.getItem('pcap_srs_state');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Real-time synchronization of SRS progress from Firestore when user is authenticated
  useEffect(() => {
    if (!user) return;
    const unsubscribe = subscribeUserSrsProgress(user.uid, (cloudSrs) => {
      setSrsState((prev) => {
        const merged = { ...prev, ...cloudSrs };
        try {
          localStorage.setItem('pcap_srs_state', JSON.stringify(merged));
        } catch {}
        return merged;
      });
    });
    return () => unsubscribe();
  }, [user]);

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
        const matchQ = (card.question || '').toLowerCase().includes(q);
        const matchCode = (card.codeSnippet || '').toLowerCase().includes(q);
        const matchTopic = (card.topic || '').toLowerCase().includes(q);
        const matchExp = (card.explanationText || card.explanation || card.deepDive || '').toLowerCase().includes(q);
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

    const updatedSrsItem: CardSRSData = {
      repetitions: prev.repetitions + 1,
      interval: newInterval,
      easeFactor: Number(newEase.toFixed(2)),
      lastReviewed: Date.now(),
      dueDate: Date.now() + newInterval * 86400000,
      status: newStatus,
    };

    saveSrsState({
      ...srsState,
      [cardId]: updatedSrsItem,
    });

    if (user) {
      saveUserSrsItem(user.uid, cardId, updatedSrsItem).catch((err) => {
        console.warn('Could not save SRS progress to Firestore:', err);
      });
    }

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
        {/* Track switch bar if onSelectTrack provided */}
        {onSelectTrack && (
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800/60">
            <div className="flex items-center space-x-2">
              <span className="text-xs text-slate-400 font-medium">Certification Track:</span>
              <div className="inline-flex rounded-lg bg-slate-950 p-1 border border-slate-800">
                <button
                  onClick={() => {
                    onSelectTrack('pcap');
                    onSelectSection('Section 1');
                    setSelectedChapter('all');
                  }}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    currentTrack === 'pcap'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  PCAP-31-03 (Associate)
                </button>
                <button
                  onClick={() => {
                    onSelectTrack('pcep');
                    onSelectSection('Section 1');
                    setSelectedChapter('all');
                  }}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    currentTrack === 'pcep'
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  PCEP-30-0x (Entry-Level)
                </button>
                <button
                  onClick={() => {
                    onSelectTrack('pcpp');
                    onSelectSection('Section 1');
                    setSelectedChapter('all');
                  }}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    currentTrack === 'pcpp'
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  PCPP-32-10x (Professional)
                </button>
                <button
                  onClick={() => {
                    onSelectTrack('pced');
                    onSelectSection('Section 1');
                    setSelectedChapter('all');
                  }}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    currentTrack === 'pced'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  PCED-30-02 (Entry Data)
                </button>
                <button
                  onClick={() => {
                    onSelectTrack('pcad');
                    onSelectSection('Section 1');
                    setSelectedChapter('all');
                  }}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    currentTrack === 'pcad'
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  PCAD-31-02 (Data Analyst)
                </button>
                <button
                  onClick={() => {
                    onSelectTrack('pcet');
                    onSelectSection('Section 1');
                    setSelectedChapter('all');
                  }}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    currentTrack === 'pcet'
                      ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  PCET-30-01 (Entry Tester)
                </button>
                <button
                  onClick={() => {
                    onSelectTrack('pcat');
                    onSelectSection('Section 1');
                    setSelectedChapter('all');
                  }}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    currentTrack === 'pcat'
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  PCAT-31-0x (Associate Tester)
                </button>
              </div>
            </div>

            {onOpenCreateCard && (
              <button
                onClick={onOpenCreateCard}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-colors"
              >
                <Plus className="w-3.5 h-3.5 text-cyan-400" />
                <span>+ Create Flashcard</span>
              </button>
            )}
          </div>
        )}

        {/* Section Tabs Selector */}
        <div className="flex flex-wrap items-center gap-1.5 pb-4 border-b border-slate-800/60">
          <button
            onClick={() => {
              onSelectSection('all');
              setSelectedChapter('all');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedSection === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200'
            }`}
          >
            All Sections
          </button>
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
          ).map((sec) => (
            <button
              key={sec.id}
              onClick={() => {
                onSelectSection(`Section ${sec.number}`);
                setSelectedChapter('all');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedSection === `Section ${sec.number}`
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200'
              }`}
            >
              Sec {sec.number}: {sec.title.split(':')[0]} ({sec.weight})
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {currentTrack.toUpperCase()} • {selectedSection === 'all' ? 'Complete Bank' : selectedSection}
              </span>
              <span className="text-xs text-slate-400">
                {filteredCards.length} {filteredCards.length === 1 ? 'card' : 'cards'} available
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white mt-1 tracking-tight">
              {currentTrack === 'pcei' ? (
                selectedSection === 'Section 1'
                  ? 'PCEI Section 1: Artificial Intelligence Fundamentals (100 Cards)'
                  : selectedSection === 'Section 2'
                  ? 'PCEI Section 2: Machine Learning Fundamentals (100 Cards)'
                  : selectedSection === 'Section 3'
                  ? 'PCEI Section 3: Data Handling, Analysis & Visualization (100 Cards)'
                  : selectedSection === 'Section 4'
                  ? 'PCEI Section 4: Neural Networks, Deep Learning & Generative AI (100 Cards)'
                  : selectedSection === 'Section 5'
                  ? 'PCEI Section 5: Responsible AI, Ethics & Critical Thinking (100 Cards)'
                  : selectedSection === 'Section 6'
                  ? 'PCEI Section 6: AI Projects, Collaboration & Communication (100 Cards)'
                  : 'PCEI-30-01 Certified Entry-Level AI Specialist with Python (600 Cards)'
              ) : currentTrack === 'pcea' ? (
                selectedSection === 'Section 1'
                  ? 'PCEA Section 1: Automation Fundamentals & CLI Operations (100 Cards)'
                  : selectedSection === 'Section 2'
                  ? 'PCEA Section 2: File System & Data Automation (100 Cards)'
                  : selectedSection === 'Section 3'
                  ? 'PCEA Section 3: Web, API & Network Automation (100 Cards)'
                  : selectedSection === 'Section 4'
                  ? 'PCEA Section 4: Scheduling, Monitoring & Notifications (100 Cards)'
                  : 'PCEA-30-01 Certified Entry-Level Automation Specialist with Python (400 Cards)'
              ) : currentTrack === 'pces' ? (
                selectedSection === 'Section 1'
                  ? 'PCES Section 1: Security Essentials (100 Cards)'
                  : selectedSection === 'Section 2'
                  ? 'PCES Section 2: IT Systems Security (100 Cards)'
                  : selectedSection === 'Section 3'
                  ? 'PCES Section 3: Python for Security Operations (100 Cards)'
                  : selectedSection === 'Section 4'
                  ? 'PCES Section 4: Secure Development & Implementation in Python (100 Cards)'
                  : 'PCES-30-01 Certified Entry-Level Security Specialist with Python (400 Cards)'
              ) : currentTrack === 'pcat' ? (
                selectedSection === 'Section 1'
                  ? 'PCAT Section 1: Software Testing Essentials (100 Cards)'
                  : selectedSection === 'Section 2'
                  ? 'PCAT Section 2: Test Automation & Code Refactoring (100 Cards)'
                  : selectedSection === 'Section 3'
                  ? 'PCAT Section 3: Assertions, Context Managers & Decorators (100 Cards)'
                  : selectedSection === 'Section 4'
                  ? 'PCAT Section 4: Unit Testing Foundations with unittest (100 Cards)'
                  : selectedSection === 'Section 5'
                  ? 'PCAT Section 5: Advanced Unit Testing Techniques & Mocking (100 Cards)'
                  : selectedSection === 'Section 6'
                  ? 'PCAT Section 6: Test-Driven & Behavior-Driven Development (100 Cards)'
                  : 'PCAT-31-0x Certified Associate Tester with Python (600 Cards)'
              ) : currentTrack === 'pcet' ? (
                selectedSection === 'Section 1'
                  ? 'PCET Section 1: Testing Fundamentals & QA Concepts (100 Cards)'
                  : selectedSection === 'Section 2'
                  ? 'PCET Section 2: Test Levels & Defect Process (100 Cards)'
                  : selectedSection === 'Section 3'
                  ? 'PCET Section 3: Static Analysis & Code Quality (100 Cards)'
                  : selectedSection === 'Section 4'
                  ? 'PCET Section 4: pytest Automation & CI/CD Pipelines (100 Cards)'
                  : 'PCET-30-01 Certified Entry-Level Tester with Python (400 Cards)'
              ) : currentTrack === 'pcad' ? (
                selectedSection === 'Section 1'
                  ? 'PCAD Section 1: Data Acquisition & Pre-Processing (100 Cards)'
                  : selectedSection === 'Section 2'
                  ? 'PCAD Section 2: Programming & Database Skills (100 Cards)'
                  : selectedSection === 'Section 3'
                  ? 'PCAD Section 3: Statistical Analysis & Inference (100 Cards)'
                  : selectedSection === 'Section 4'
                  ? 'PCAD Section 4: Data Analysis & Modeling (100 Cards)'
                  : selectedSection === 'Section 5'
                  ? 'PCAD Section 5: Data Communication & Visualization (100 Cards)'
                  : 'PCAD-31-02 Certified Associate Data Analyst with Python'
              ) : currentTrack === 'pced' ? (
                selectedSection === 'Section 1'
                  ? 'PCED Section 1: Introduction to Data and Data Analysis Concepts (100 Cards)'
                  : selectedSection === 'Section 2'
                  ? 'PCED Section 2: Python Basics for Data Analysis (100 Cards)'
                  : selectedSection === 'Section 3'
                  ? 'PCED Section 3: Working with Data and Performing Simple Analyses (100 Cards)'
                  : selectedSection === 'Section 4'
                  ? 'PCED Section 4: Communicating Insights and Reporting'
                  : 'PCED-30-02 Interactive Data Analyst Flashcards & SRS Recall'
              ) : currentTrack === 'pcep' ? (
                selectedSection === 'Section 1'
                  ? 'PCEP Section 1: Computer Programming & Python Fundamentals'
                  : selectedSection === 'Section 2'
                  ? 'PCEP Section 2: Control Flow, Conditional Blocks & Loops'
                  : selectedSection === 'Section 3'
                  ? 'PCEP Section 3: Data Collections (Lists, Tuples, Dictionaries)'
                  : selectedSection === 'Section 4'
                  ? 'PCEP Section 4: Functions & Basic Exception Handling'
                  : 'PCEP-30-0x Interactive Flashcards & SRS Recall'
              ) : currentTrack === 'pcpp' ? (
                selectedSection === 'Section 1'
                  ? 'PCPP Section 1: Advanced Object-Oriented Programming (100 Cards)'
                  : selectedSection === 'Section 2'
                  ? 'PCPP Section 2: Coding Conventions, Best Practices & Design Patterns (100 Cards)'
                  : selectedSection === 'Section 3'
                  ? 'PCPP Section 3: GUI Programming with Tkinter (100 Cards)'
                  : selectedSection === 'Section 4'
                  ? 'PCPP Section 4: Network Programming, Sockets & REST'
                  : selectedSection === 'Section 5'
                  ? 'PCPP Section 5: File Processing, sqlite3, XML & Logging'
                  : 'PCPP-32-10x Interactive Professional Flashcards & SRS Recall'
              ) : (
                selectedSection === 'Section 1'
                  ? 'PCAP Section 1: Modules, Packages & PIP Deep Dive'
                  : selectedSection === 'Section 2'
                  ? 'PCAP Section 2: Data Aggregates, Strings & Exception Handling Deep Dive'
                  : selectedSection === 'Section 3'
                  ? 'PCAP Section 3: Functions, Generators, Closures & File Streams Deep Dive'
                  : selectedSection === 'Section 4'
                  ? 'PCAP Section 4: Object-Oriented Programming (OOP) Deep Dive'
                  : selectedSection === 'Section 5'
                  ? 'PCAP Section 5: Miscellaneous (Comprehensions, Lambdas, Closures, I/O)'
                  : 'PCAP-31-03 Interactive Active Recall & SRS Flashcards'
              )}
            </h1>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              {currentTrack === 'pcei' ? (
                selectedSection === 'Section 6' ? (
                  'Comprehensive 100-card deep dive into identifying AI opportunities vs deterministic software, resource and cloud GPU economics, agile AI project lifecycle, Git/DVC collaboration, and audience-tailored communication of results.'
                ) : selectedSection === 'Section 5' ? (
                  'Comprehensive 100-card deep dive into algorithmic bias, fairness definitions, data privacy & GDPR, model transparency, explainable AI (SHAP/LIME), safety guardrails, hallucination mitigation, and AI governance.'
                ) : selectedSection === 'Section 4' ? (
                  'Comprehensive 100-card deep dive into perceptrons, activation functions, backpropagation, CNN architectures, NLP tokenization & embeddings, and Generative AI, transformer attention, and prompt engineering.'
                ) : selectedSection === 'Section 3' ? (
                  'Comprehensive 100-card deep dive into pandas data ingestion, missing value imputation, feature encoding and scaling (StandardScaler/MinMaxScaler), exploratory data analysis, and visualization with matplotlib/seaborn.'
                ) : selectedSection === 'Section 2' ? (
                  'Comprehensive 100-card deep dive into machine learning paradigms (supervised, unsupervised, RL), classification and regression, k-means clustering, bias-variance tradeoff, and cross-validation evaluation.'
                ) : selectedSection === 'Section 1' ? (
                  'Comprehensive 100-card deep dive into AI definitions and taxonomy, intelligent agents, knowledge representation, propositional logic, state-space search algorithms, and computational capabilities/Turing Test.'
                ) : (
                  'Master artificial intelligence foundations, machine learning algorithms, deep neural nets, and responsible AI ethics for the PCEI-30-01 certification exam.'
                )
              ) : currentTrack === 'pcea' ? (
                selectedSection === 'Section 4' ? (
                  'Comprehensive 100-card deep dive into time & datetime manipulation, ISO-8601, schedule periodic jobs, enterprise logging handlers, resilient retry logic with exponential backoff, and automated email alerts with smtplib.'
                ) : selectedSection === 'Section 3' ? (
                  'Comprehensive 100-card deep dive into requests HTTP operations, REST API authentication (Bearer/Basic), BeautifulSoup scraping, session connection pooling, rate limiting with jitter, and chunked streaming downloads.'
                ) : selectedSection === 'Section 2' ? (
                  'Comprehensive 100-card deep dive into modern pathlib manipulation, os.walk and shutil automation, csv reader/writer/DictWriter, json serialization and JSON Lines, and regular expression pattern matching with re.'
                ) : selectedSection === 'Section 1' ? (
                  'Comprehensive 100-card deep dive into automation candidates & ROI, idempotency & atomicity, CLI parsing with sys.argv & argparse, environment variables & virtual environments, and process orchestration with subprocess.'
                ) : (
                  'Master automation engineering, CLI scripting, filesystem operations, REST APIs, and resilient periodic workflows for the PCEA-30-01 certification exam.'
                )
              ) : currentTrack === 'pces' ? (
                selectedSection === 'Section 4' ? (
                  'Comprehensive 100-card deep dive into Secure SDLC, Shift-Left, bandit/pip-audit, SQL/command injection defense, pickle RCE prevention, safe YAML/JSON/XML, PII regex masking, and cryptography with secrets, Fernet & bcrypt.'
                ) : selectedSection === 'Section 3' ? (
                  'Comprehensive 100-card deep dive into ethical testing scoping, Python socket scanning (connect vs connect_ex, timeouts, thread pools), psutil process monitoring & port auditing, hashlib file integrity baselines, and subprocess automation.'
                ) : selectedSection === 'Section 2' ? (
                  'Comprehensive 100-card deep dive into Zero Trust, Defense-in-Depth, CIS benchmarks, OS hardening, TCP/IP & UDP, well-known ports, ARP/DNSSEC, firewalls, TLS/VPNs, AAA, MFA/TOTP, and cloud shared responsibility.'
                ) : selectedSection === 'Section 1' ? (
                  'Comprehensive 100-card deep dive into CIA triad, authenticity & non-repudiation, vulnerability management (CVE/CVSS/CWE), threat actor taxonomy, attack vectors (phishing, DDoS, MitM), risk formulas (SLE, ARO, ALE), and security regulations.'
                ) : (
                  'Master essential security principles, IT infrastructure hardening, defensive Python operations, and secure coding for the PCES-30-01 certification exam.'
                )
              ) : currentTrack === 'pcat' ? (
                selectedSection === 'Section 6' ? (
                  'Comprehensive 100-card deep dive into TDD Red-Green-Refactor cycles, BDD principles, Dan North ubiquitous language, Gherkin syntax (Scenario Outline, Examples), and Python BDD frameworks (behave, pytest-bdd).'
                ) : selectedSection === 'Section 5' ? (
                  'Comprehensive 100-card deep dive into test fixtures lifecycle (setUp/tearDown/setUpClass/tearDownClass/addCleanup), parameterized subtests (self.subTest), conditional execution (@skip/@skipIf/@expectedFailure), unittest.mock (Mock, MagicMock, patch, side_effect, autospec), and assertRaises/assertWarns.'
                ) : selectedSection === 'Section 4' ? (
                  'Comprehensive 100-card deep dive into F.I.R.S.T. unit testing principles, xUnit framework architecture in Python (TestCase, TestSuite, TestRunner, TestLoader, TestResult), CLI discovery flags, clean directory structuring, and specialized assertions.'
                ) : selectedSection === 'Section 3' ? (
                  'Comprehensive 100-card deep dive into Python assert statement syntax, invariant verification, context managers and the with statement (ExitStack, suppress, redirect_stdout), function/class decorators, and OOP method types (@classmethod, @staticmethod, @property).'
                ) : selectedSection === 'Section 2' ? (
                  'Comprehensive 100-card deep dive into test automation ROI, flakiness remediation, code refactoring loops, technical debt, Arrange-Act-Assert (AAA) pattern, DRY vs DAMP test readability, and KISS principles.'
                ) : selectedSection === 'Section 1' ? (
                  'Comprehensive 100-card deep dive into software testing concepts, QA vs QC, verification vs validation, error/fault/failure taxonomy, defect lifecycle, testing levels, 7 fundamental principles of testing, and the Test Pyramid.'
                ) : (
                  'Master professional automated software testing, unittest, mock doubles, TDD and BDD in Python for the PCAT-31-0x certification exam.'
                )
              ) : currentTrack === 'pcet' ? (
                selectedSection === 'Section 4' ? (
                  'Comprehensive coverage of pytest automation, fixture lifecycles, test discovery, CLI flags, plugins, and CI/CD quality gates.'
                ) : selectedSection === 'Section 3' ? (
                  'Comprehensive coverage of static code analysis (flake8, pylint, black), code complexity metrics (cyclomatic, Halstead), and refactoring techniques.'
                ) : selectedSection === 'Section 2' ? (
                  'Comprehensive coverage of software testing levels, black-box vs white-box techniques, boundary value analysis, equivalence partitioning, and defect management.'
                ) : selectedSection === 'Section 1' ? (
                  'Comprehensive coverage of quality assurance vs testing, software defect lifecycle, verification vs validation, and fundamental testing principles.'
                ) : (
                  'Master software testing fundamentals, quality processes, static analysis, and pytest automation for the PCET-30-01 exam.'
                )
              ) : currentTrack === 'pcad' ? (
                selectedSection === 'Section 5' ? (
                  'Comprehensive coverage of 100 flashcards spanning Matplotlib OO API, styling & annotations, Seaborn statistical distributions & categorical plots, multi-plot grids & Plotly interactive dashboards, and executive data storytelling & ethical visualization.'
                ) : selectedSection === 'Section 4' ? (
                  'Comprehensive coverage of 100 flashcards spanning exploratory feature relationships & correlations, data pipeline architecture, Scikit-Learn preprocessing, supervised regression/classification algorithms & metrics, and unsupervised clustering, PCA & hyperparameter tuning.'
                ) : selectedSection === 'Section 3' ? (
                  'Comprehensive coverage of 100 flashcards spanning descriptive statistics, theoretical distributions, sampling theory & CLT, parametric & non-parametric hypothesis testing, and regression analysis.'
                ) : selectedSection === 'Section 2' ? (
                  'Comprehensive coverage of 100 flashcards spanning advanced Python data structures, functional tools & generators, relational database architecture & SQL, database connectivity (sqlite3, SQLAlchemy), and pandas-SQL integration.'
                ) : selectedSection === 'Section 1' ? (
                  'Comprehensive coverage of 100 flashcards spanning multi-format data ingestion, cleansing & imputation, wrangling & type coercion, reshaping & pivoting, and feature engineering.'
                ) : (
                  'Master professional data acquisition, wrangling, SQL integration, inferential statistics, machine learning pipelines, and executive visualization for the PCAD-31-02 exam.'
                )
              ) : currentTrack === 'pced' ? (
                selectedSection === 'Section 4' ? (
                  'Complete coverage of 100 flashcards spanning visual encodings & graphic integrity, Matplotlib OO API, Seaborn statistical plots, executive dashboard layouts & KPIs, and narrative data storytelling.'
                ) : selectedSection === 'Section 3' ? (
                  'Complete coverage of 100 flashcards spanning open() file operations, CSV reader/DictReader, handling missing data & duplicates, type coercion, string cleaning & normalization, NumPy vectorization & slicing, and descriptive statistics.'
                ) : selectedSection === 'Section 2' ? (
                  'Complete coverage of 100 flashcards spanning Python types, casting, string manipulation, control flow, functions, lambdas, math/statistics modules, data collections (lists, tuples, sets, dicts), and file I/O.'
                ) : selectedSection === 'Section 1' ? (
                  'Complete coverage of 100 flashcards spanning data classification, DIKW hierarchy, collection methods, relational vs NoSQL storage, data analysis workflows, CRISP-DM, analytics types, and data ethics & privacy.'
                ) : (
                  'Master Python for data analysis, data structures, cleansing workflows, NumPy arrays, and statistics for the PCED-30-02 exam.'
                )
              ) : currentTrack === 'pcep' ? (
                selectedSection === 'Section 2' ? (
                  'Complete coverage of 100 questions spanning conditional logic (if-elif-else, ternary), relational operators, short-circuit evaluation, bitwise operations (&, |, ^, ~, <<, >>), and loops with break/continue/else.'
                ) : selectedSection === 'Section 1' ? (
                  'Complete coverage of 100 questions spanning computer programming fundamentals, compilation vs interpretation, literals, basic I/O with print/input, operator precedence, and variable assignment rules.'
                ) : (
                  'Master Python fundamental syntax, memory model, data types, control flow decisions, and core collections for the PCEP-30-0x exam.'
                )
              ) : currentTrack === 'pcpp' ? (
                selectedSection === 'Section 1' ? (
                  'Comprehensive 100-card deep dive into advanced classes, @classmethod, @staticmethod, @property, dunder methods, ABCs, multiple inheritance, C3 MRO, metaclass internals, and serialization.'
                ) : selectedSection === 'Section 2' ? (
                  'Comprehensive 100-card deep dive into PEP 8 styling, PEP 20 Zen of Python, PEP 257 docstring conventions, and Gang of Four (GoF) creational, structural, and behavioral design patterns.'
                ) : selectedSection === 'Section 3' ? (
                  'Comprehensive 100-card deep dive into Tkinter GUI architecture, window lifecycle, core widgets, pack/grid/place geometry managers, event-driven bindings, variables, and dialogs.'
                ) : selectedSection === 'Section 4' ? (
                  'Comprehensive 100-card deep dive into TCP/IP networking, low-level socket programming (client/server), RESTful APIs, HTTP verbs/status codes, requests library, and JSON serialization.'
                ) : selectedSection === 'Section 5' ? (
                  'Comprehensive 100-card deep dive into relational databases with sqlite3 (transactions, parameterized queries), XML ElementTree, CSV reader/DictReader/dialects, and enterprise logging.'
                ) : (
                  'Master professional Python engineering concepts: advanced OOP, design patterns, Tkinter GUIs, network sockets, and data persistence for PCPP-32-10x.'
                )
              ) : selectedSection === 'Section 5' ? (
                'Comprehensive coverage of 100 questions spanning list/dict/set comprehensions, lambda expressions, closures, file streams, bytearrays, and platform module APIs.'
              ) : selectedSection === 'Section 4' ? (
                'Comprehensive coverage of 100 questions spanning all 5 exam chapters: paradigms, variable scopes, name mangling, dunders, operator overloading, and MRO.'
              ) : selectedSection === 'Section 3' ? (
                '100 comprehensive questions on function parameters (*args/**kwargs), LEGB scopes, generator yield execution suspension, iterator protocol, and closures.'
              ) : selectedSection === 'Section 2' ? (
                '100 deep-dive questions on string immutability, ASCII/Unicode, 20+ methods, extended slicing, and exception hierarchy.'
              ) : (
                'Spaced repetition system designed for rapid mastery of Python syntax nuances, runtime exceptions, and exam traps.'
              )}
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

        {/* Section 1 Chapter Sub-Nav (PCAP) */}
        {currentTrack === 'pcap' && selectedSection === 'Section 1' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Filter by Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Section 1 (100 Cards)' },
                { id: '1.1', label: '1.1 Import & Namespaces (1-20)' },
                { id: '1.2', label: '1.2 sys.path & Bytecode (21-40)' },
                { id: '1.3', label: '1.3 Packages & __all__ (41-60)' },
                { id: '1.4', label: '1.4 math, random, platform (61-80)' },
                { id: '1.5', label: '1.5 PIP & PyPI (81-100)' },
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

        {/* Section 2 Chapter Sub-Nav (PCAP) */}
        {currentTrack === 'pcap' && selectedSection === 'Section 2' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Filter by Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Section 2 (100 Cards)' },
                { id: '2.1', label: '2.1 Characters & Encodings (1-20)' },
                { id: '2.2', label: '2.2 String Methods (21-40)' },
                { id: '2.3', label: '2.3 Slicing & Aggregates (41-60)' },
                { id: '2.4', label: '2.4 Exception Flow (61-80)' },
                { id: '2.5', label: '2.5 Exception Hierarchy & args (81-100)' },
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

        {/* Section 3 Chapter Sub-Nav (PCAP) */}
        {currentTrack === 'pcap' && selectedSection === 'Section 3' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Filter by Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Section 3 (100 Cards)' },
                { id: '3.1', label: '3.1 Parameters & LEGB (1-20)' },
                { id: '3.2', label: '3.2 Generators & yield (21-40)' },
                { id: '3.3', label: '3.3 Lambdas & map/filter (41-60)' },
                { id: '3.4', label: '3.4 Closures & Decorators (61-80)' },
                { id: '3.5', label: '3.5 File Streams & bytearray (81-100)' },
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

        {/* Section 4 Chapter Sub-Nav (PCAP) */}
        {currentTrack === 'pcap' && selectedSection === 'Section 4' && (
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

        {/* Section 5 Chapter Sub-Nav (PCAP) */}
        {currentTrack === 'pcap' && selectedSection === 'Section 5' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Filter by Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Section 5 (100 Cards)' },
                { id: '5.1', label: '5.1 List/Dict/Set Comprehensions (1-20)' },
                { id: '5.2', label: '5.2 Lambdas & Functional map/filter (21-40)' },
                { id: '5.3', label: '5.3 Closures & Nested Scopes (41-60)' },
                { id: '5.4', label: '5.4 File Streams & bytearray (61-80)' },
                { id: '5.5', label: '5.5 Platform & Sys Streams (81-100)' },
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

        {/* PCEP Chapter Sub-Navs (Sections 1 to 4) */}
        {currentTrack === 'pcep' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>Filter by Chapter:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => {
                  setSelectedChapter('all');
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedChapter === 'all'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                    : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200'
                }`}
              >
                All Chapters
              </button>
              {selectedSection === 'Section 1' && [
                { id: '1.1', label: '1.1 Fundamentals (1-20)' },
                { id: '1.2', label: '1.2 Literals & Types (21-40)' },
                { id: '1.3', label: '1.3 Basic I/O & Escapes (41-60)' },
                { id: '1.4', label: '1.4 Operators & Precedence (61-80)' },
                { id: '1.5', label: '1.5 Variables & PEP 8 (81-100)' },
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
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                      : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
              {selectedSection === 'Section 2' && [
                { id: '2.1', label: '2.1 Conditionals (1-20)' },
                { id: '2.2', label: '2.2 Relational Operators (21-40)' },
                { id: '2.3', label: '2.3 Logical & Short-Circuit (41-60)' },
                { id: '2.4', label: '2.4 Bitwise & Shifts (61-80)' },
                { id: '2.5', label: '2.5 Loops & Control (81-100)' },
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
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                      : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
              {selectedSection === 'Section 3' && [
                { id: '3.1', label: '3.1 Lists & Indexing' },
                { id: '3.2', label: '3.2 List Slices & Operations' },
                { id: '3.3', label: '3.3 Tuples & Immutability' },
                { id: '3.4', label: '3.4 Dictionaries & Key-Value' },
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
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                      : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
              {selectedSection === 'Section 4' && [
                { id: '4.1', label: '4.1 Functions & Return' },
                { id: '4.2', label: '4.2 Scopes & LEGB' },
                { id: '4.3', label: '4.3 Exceptions (try-except)' },
                { id: '4.4', label: '4.4 Exception Hierarchy' },
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
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                      : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PCPP Chapter Sub-Nav (Section 1: 1.1 to 1.5) */}
        {currentTrack === 'pcpp' && selectedSection === 'Section 1' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              <span>Filter by Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Section 1 (100 Cards)' },
                { id: '1.1', label: '1.1 Advanced Classes & Methods (1-20)' },
                { id: '1.2', label: '1.2 Properties & Encapsulation (21-40)' },
                { id: '1.3', label: '1.3 Magic Dunders & Subclassing (41-60)' },
                { id: '1.4', label: '1.4 ABCs & Multiple Inheritance / MRO (61-80)' },
                { id: '1.5', label: '1.5 Metaclasses & Serialization (81-100)' },
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
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm'
                      : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PCPP Chapter Sub-Nav (Section 2: 2.1 to 2.5) */}
        {currentTrack === 'pcpp' && selectedSection === 'Section 2' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span>Filter by Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Section 2 (100 Cards)' },
                { id: '2.1', label: '2.1 PEP 8 Style Guide & Linters (1-20)' },
                { id: '2.2', label: '2.2 PEP 20 & PEP 257 Docstrings (21-40)' },
                { id: '2.3', label: '2.3 Creational Design Patterns (41-60)' },
                { id: '2.4', label: '2.4 Structural Design Patterns (61-80)' },
                { id: '2.5', label: '2.5 Behavioral Design Patterns (81-100)' },
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
                      ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
                      : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PCPP Chapter Sub-Nav (Section 3: 3.1 to 3.5) */}
        {currentTrack === 'pcpp' && selectedSection === 'Section 3' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Filter by Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Section 3 (100 Cards)' },
                { id: '3.1', label: '3.1 Tkinter Architecture & Lifecycle (1-20)' },
                { id: '3.2', label: '3.2 Core Widgets & Attributes (21-40)' },
                { id: '3.3', label: '3.3 Geometry Managers (pack/grid/place) (41-60)' },
                { id: '3.4', label: '3.4 Event-Driven Programming & Bindings (61-80)' },
                { id: '3.5', label: '3.5 Variables, Menus & Dialogs (81-100)' },
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

        {/* PCPP Chapter Sub-Nav (Section 4: 4.1 to 4.5) */}
        {currentTrack === 'pcpp' && selectedSection === 'Section 4' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-sky-400" />
              <span>Filter by Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Section 4 (100 Cards)' },
                { id: '4.1', label: '4.1 Network & Sockets Architecture (1-20)' },
                { id: '4.2', label: '4.2 Socket Server & Client Coding (21-40)' },
                { id: '4.3', label: '4.3 REST & HTTP Verbs/Status Codes (41-60)' },
                { id: '4.4', label: '4.4 HTTP Requests with requests (61-80)' },
                { id: '4.5', label: '4.5 JSON Data Exchange & Serialization (81-100)' },
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
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                      : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PCPP Chapter Sub-Nav (Section 5: 5.1 to 5.5) */}
        {currentTrack === 'pcpp' && selectedSection === 'Section 5' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Filter by Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Section 5 (100 Cards)' },
                { id: '5.1', label: '5.1 SQLite3 Relational Operations (1-20)' },
                { id: '5.2', label: '5.2 XML ElementTree Processing (21-40)' },
                { id: '5.3', label: '5.3 CSV Reader & DictReader (41-60)' },
                { id: '5.4', label: '5.4 Logging Architecture & Formatters (61-80)' },
                { id: '5.5', label: '5.5 Handlers, Rotation & Config (81-100)' },
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
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                      : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PCED Chapter Sub-Nav (Section 1: 1.1 to 1.5) */}
        {currentTrack === 'pced' && selectedSection === 'Section 1' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Filter by Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Section 1 (100 Cards)' },
                { id: '1.1', label: '1.1 Defining & Classifying Data (1-20)' },
                { id: '1.2', label: '1.2 Sources, Collection & Storage (21-40)' },
                { id: '1.3', label: '1.3 Data Analysis Process (41-60)' },
                { id: '1.4', label: '1.4 Analytics Types & Roles (61-80)' },
                { id: '1.5', label: '1.5 Ethics, Privacy & Compliance (81-100)' },
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
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                      : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PCED Chapter Sub-Nav (Section 2: 2.1 to 2.5) */}
        {currentTrack === 'pced' && selectedSection === 'Section 2' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-orange-400" />
              <span>Filter by Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Section 2 (100 Cards)' },
                { id: '2.1', label: '2.1 Types, Casting & Strings (1-20)' },
                { id: '2.2', label: '2.2 Control Flow & Iteration (21-40)' },
                { id: '2.3', label: '2.3 Functions, Lambdas & Math/Stats (41-60)' },
                { id: '2.4', label: '2.4 Lists, Tuples, Sets & Comprehensions (61-80)' },
                { id: '2.5', label: '2.5 Dicts, Records & File I/O (CSV/JSON) (81-100)' },
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
                      ? 'bg-orange-500/20 text-orange-300 border border-orange-500/40 shadow-sm'
                      : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PCED Chapter Sub-Nav (Section 3: 3.1 to 3.5) */}
        {currentTrack === 'pced' && selectedSection === 'Section 3' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>Filter by Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Section 3 (100 Cards)' },
                { id: '3.1', label: '3.1 File Operations: open(), CSV & DictReader (1-20)' },
                { id: '3.2', label: '3.2 Cleansing: Nulls, Duplicates & Types (21-40)' },
                { id: '3.3', label: '3.3 Transformations, Normalization & Strings (41-60)' },
                { id: '3.4', label: '3.4 NumPy Arrays & Vectorization (61-80)' },
                { id: '3.5', label: '3.5 Descriptive Stats, Aggregations & EDA (81-100)' },
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
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                      : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PCED Chapter Sub-Nav (Section 4: 4.1 to 4.5) */}
        {currentTrack === 'pced' && selectedSection === 'Section 4' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>Filter by Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Section 4 (100 Cards)' },
                { id: '4.1', label: '4.1 Visual Encodings & Graphic Integrity (1-20)' },
                { id: '4.2', label: '4.2 Matplotlib OO API & Mechanics (21-40)' },
                { id: '4.3', label: '4.3 Seaborn Statistical Plots (41-60)' },
                { id: '4.4', label: '4.4 Dashboard Layouts & Executive Reporting (61-80)' },
                { id: '4.5', label: '4.5 Narrative Data Storytelling & Presentation (81-100)' },
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
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40 shadow-sm'
                      : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PCAD Chapter Sub-Nav (Section 1: 1.1 to 1.5) */}
        {currentTrack === 'pcad' && selectedSection === 'Section 1' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>Filter by Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Section 1 (100 Cards)' },
                { id: '1.1', label: '1.1 Ingestion & Parsing (1-20)' },
                { id: '1.2', label: '1.2 Cleansing & Imputation (21-40)' },
                { id: '1.3', label: '1.3 Wrangling & Vectorization (41-60)' },
                { id: '1.4', label: '1.4 Reshaping & Merging (61-80)' },
                { id: '1.5', label: '1.5 Feature Engineering & Scalers (81-100)' },
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
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40 shadow-sm'
                      : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PCAD Chapter Sub-Nav (Section 2: 2.1 to 2.5) */}
        {currentTrack === 'pcad' && selectedSection === 'Section 2' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span>Filter by Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Section 2 (100 Cards)' },
                { id: '2.1', label: '2.1 Advanced Data Structures (1-20)' },
                { id: '2.2', label: '2.2 Functional Tools & Decorators (21-40)' },
                { id: '2.3', label: '2.3 RDBMS, Normalization & SQL (41-60)' },
                { id: '2.4', label: '2.4 DB Connectivity (sqlite3/SQLAlchemy) (61-80)' },
                { id: '2.5', label: '2.5 Pandas-SQL Integration & Optimization (81-100)' },
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
                      ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
                      : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PCAD Chapter Sub-Nav (Section 3: 3.1 to 3.5) */}
        {currentTrack === 'pcad' && selectedSection === 'Section 3' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Filter by Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Section 3 (100 Cards)' },
                { id: '3.1', label: '3.1 Descriptive Statistics & EDA (1-20)' },
                { id: '3.2', label: '3.2 Distributions & Probability (21-40)' },
                { id: '3.3', label: '3.3 Sampling Theory & CLT (41-60)' },
                { id: '3.4', label: '3.4 Hypothesis Testing (61-80)' },
                { id: '3.5', label: '3.5 Categorical Tests & Regression (81-100)' },
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

        {/* PCAD Chapter Sub-Nav (Section 4: 4.1 to 4.5) */}
        {currentTrack === 'pcad' && selectedSection === 'Section 4' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-violet-400" />
              <span>Filter by Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Section 4 (100 Cards)' },
                { id: '4.1', label: '4.1 Feature Relationships & Correlation (1-20)' },
                { id: '4.2', label: '4.2 Data Pipelines & Validation (21-40)' },
                { id: '4.3', label: '4.3 ML Preprocessing & Pipeline Architecture (41-60)' },
                { id: '4.4', label: '4.4 Supervised Learning & Metrics (61-80)' },
                { id: '4.5', label: '4.5 Unsupervised Learning & Tuning (81-100)' },
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
                      ? 'bg-violet-500/20 text-violet-300 border border-violet-500/40 shadow-sm'
                      : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PCAD Chapter Sub-Nav (Section 5: 5.1 to 5.5) */}
        {currentTrack === 'pcad' && selectedSection === 'Section 5' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-teal-400" />
              <span>Filter by Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Section 5 (100 Cards)' },
                { id: '5.1', label: '5.1 Matplotlib Core Architecture (1-20)' },
                { id: '5.2', label: '5.2 Matplotlib Styling & Annotations (21-40)' },
                { id: '5.3', label: '5.3 Seaborn Statistical Plots (41-60)' },
                { id: '5.4', label: '5.4 Multi-Plot Grids & Plotly Dashboards (61-80)' },
                { id: '5.5', label: '5.5 Data Storytelling & Ethical Charting (81-100)' },
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
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
                      : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PCAT Chapter Sub-Navs (Sections 1 to 6) */}
        {currentTrack === 'pcat' && selectedSection !== 'all' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-teal-400" />
              <span>Filter PCAT Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(selectedSection === 'Section 1'
                ? [
                    { id: 'all', label: 'All Section 1 (100 Cards)' },
                    { id: '1.1', label: '1.1 Concepts & Terminology (1-20)' },
                    { id: '1.2', label: '1.2 Testing Levels (21-40)' },
                    { id: '1.3', label: '1.3 Defect Lifecycle (41-60)' },
                    { id: '1.4', label: '1.4 Seven Principles (61-80)' },
                    { id: '1.5', label: '1.5 Importance & Test Pyramid (81-100)' },
                  ]
                : selectedSection === 'Section 2'
                ? [
                    { id: 'all', label: 'All Section 2 (100 Cards)' },
                    { id: '2.1', label: '2.1 Automation Goals & ROI (1-20)' },
                    { id: '2.2', label: '2.2 Refactoring Loop & Debt (21-40)' },
                    { id: '2.3', label: '2.3 Arrange, Act, Assert (41-60)' },
                    { id: '2.4', label: '2.4 DRY vs DAMP (61-80)' },
                    { id: '2.5', label: '2.5 KISS & Simplicity (81-100)' },
                  ]
                : selectedSection === 'Section 3'
                ? [
                    { id: 'all', label: 'All Section 3 (100 Cards)' },
                    { id: '3.1', label: '3.1 Assertions & Invariants (1-20)' },
                    { id: '3.2', label: '3.2 Context Managers & with (21-40)' },
                    { id: '3.3', label: '3.3 Function Decorators (41-60)' },
                    { id: '3.4', label: '3.4 Class Decorators (61-80)' },
                    { id: '3.5', label: '3.5 Method Types & Properties (81-100)' },
                  ]
                : selectedSection === 'Section 4'
                ? [
                    { id: 'all', label: 'All Section 4 (100 Cards)' },
                    { id: '4.1', label: '4.1 F.I.R.S.T. Principles (1-20)' },
                    { id: '4.2', label: '4.2 xUnit Architecture (21-40)' },
                    { id: '4.3', label: '4.3 CLI Tools & Discovery (41-60)' },
                    { id: '4.4', label: '4.4 Structure & Naming (61-80)' },
                    { id: '4.5', label: '4.5 unittest Assertions (81-100)' },
                  ]
                : selectedSection === 'Section 5'
                ? [
                    { id: 'all', label: 'All Section 5 (100 Cards)' },
                    { id: '5.1', label: '5.1 Fixtures & Lifecycle (1-20)' },
                    { id: '5.2', label: '5.2 SubTests & Matrix (21-40)' },
                    { id: '5.3', label: '5.3 Conditional & Skips (41-60)' },
                    { id: '5.4', label: '5.4 Mocks & Doubles (61-80)' },
                    { id: '5.5', label: '5.5 Exceptions & Warnings (81-100)' },
                  ]
                : [
                    { id: 'all', label: 'All Section 6 (100 Cards)' },
                    { id: '6.1', label: '6.1 TDD Red-Green-Refactor (1-20)' },
                    { id: '6.2', label: '6.2 BDD Foundations (21-40)' },
                    { id: '6.3', label: '6.3 Gherkin Syntax (41-60)' },
                    { id: '6.4', label: '6.4 Behave & pytest-bdd (61-80)' },
                    { id: '6.5', label: '6.5 Living Docs & ATDD (81-100)' },
                  ]
              ).map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => {
                    setSelectedChapter(ch.id);
                    setCurrentIndex(0);
                    setIsFlipped(false);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    selectedChapter === ch.id
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
                      : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PCES Chapter Sub-Navs (Sections 1 to 4) */}
        {currentTrack === 'pces' && selectedSection !== 'all' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Filter PCES Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(selectedSection === 'Section 1'
                ? [
                    { id: 'all', label: 'All Section 1 (100 Cards)' },
                    { id: '1.1', label: '1.1 CIA Triad & Security Model (1-20)' },
                    { id: '1.2', label: '1.2 Threats & Threat Actors (21-40)' },
                    { id: '1.3', label: '1.3 Attacks & Threat Vectors (41-60)' },
                    { id: '1.4', label: '1.4 Risk Management & ALE (61-80)' },
                    { id: '1.5', label: '1.5 Compliance & Incident Ethics (81-100)' },
                  ]
                : selectedSection === 'Section 2'
                ? [
                    { id: 'all', label: 'All Section 2 (100 Cards)' },
                    { id: '2.1', label: '2.1 Security Principles & Architecture (1-20)' },
                    { id: '2.2', label: '2.2 System & OS Hardening (21-40)' },
                    { id: '2.3', label: '2.3 Network Security & Protocols (41-60)' },
                    { id: '2.4', label: '2.4 Authentication & Access Control (61-80)' },
                    { id: '2.5', label: '2.5 Cloud & Remote Work Security (81-100)' },
                  ]
                : selectedSection === 'Section 3'
                ? [
                    { id: 'all', label: 'All Section 3 (100 Cards)' },
                    { id: '3.1', label: '3.1 Ethical Testing & Scoping (1-20)' },
                    { id: '3.2', label: '3.2 Sockets & Network Scanning (21-40)' },
                    { id: '3.3', label: '3.3 Process Monitoring with psutil (41-60)' },
                    { id: '3.4', label: '3.4 File Integrity with hashlib (61-80)' },
                    { id: '3.5', label: '3.5 Security Automation & Reports (81-100)' },
                  ]
                : [
                    { id: 'all', label: 'All Section 4 (100 Cards)' },
                    { id: '4.1', label: '4.1 Secure SDLC & Bandit/SAST (1-20)' },
                    { id: '4.2', label: '4.2 Injection & Path Traversal (21-40)' },
                    { id: '4.3', label: '4.3 Deserialization & Unsafe Ops (41-60)' },
                    { id: '4.4', label: '4.4 Data Anonymization & Logs (61-80)' },
                    { id: '4.5', label: '4.5 Cryptography & Fernet/Secrets (81-100)' },
                  ]
              ).map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => {
                    setSelectedChapter(ch.id);
                    setCurrentIndex(0);
                    setIsFlipped(false);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    selectedChapter === ch.id
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                      : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PCEA Chapter Sub-Navs (Sections 1 to 4) */}
        {currentTrack === 'pcea' && selectedSection !== 'all' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>Filter PCEA Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(selectedSection === 'Section 1'
                ? [
                    { id: 'all', label: 'All Section 1 (100 Cards)' },
                    { id: '1.1', label: '1.1 Concepts, ROI & Idempotency (1-20)' },
                    { id: '1.2', label: '1.2 sys.argv & argparse (21-40)' },
                    { id: '1.3', label: '1.3 Env Vars & Virtual Envs (41-60)' },
                    { id: '1.4', label: '1.4 Subprocess Execution (61-80)' },
                    { id: '1.5', label: '1.5 Modular Scripts & Exit Codes (81-100)' },
                  ]
                : selectedSection === 'Section 2'
                ? [
                    { id: 'all', label: 'All Section 2 (100 Cards)' },
                    { id: '2.1', label: '2.1 Modern Path Operations (1-20)' },
                    { id: '2.2', label: '2.2 Files & Dirs with os/shutil (21-40)' },
                    { id: '2.3', label: '2.3 Tabular Processing with csv (41-60)' },
                    { id: '2.4', label: '2.4 JSON Serialization & .jsonl (61-80)' },
                    { id: '2.5', label: '2.5 Pattern Extraction with re (81-100)' },
                  ]
                : selectedSection === 'Section 3'
                ? [
                    { id: 'all', label: 'All Section 3 (100 Cards)' },
                    { id: '3.1', label: '3.1 HTTP with requests (1-20)' },
                    { id: '3.2', label: '3.2 REST APIs & Auth (21-40)' },
                    { id: '3.3', label: '3.3 Scraping with BeautifulSoup (41-60)' },
                    { id: '3.4', label: '3.4 Pagination, Sessions & Limits (61-80)' },
                    { id: '3.5', label: '3.5 File Downloads & Streams (81-100)' },
                  ]
                : [
                    { id: 'all', label: 'All Section 4 (100 Cards)' },
                    { id: '4.1', label: '4.1 time, datetime & Durations (1-20)' },
                    { id: '4.2', label: '4.2 Scheduling with schedule & cron (21-40)' },
                    { id: '4.3', label: '4.3 Audit Logging & Handlers (41-60)' },
                    { id: '4.4', label: '4.4 Retries & Backoff Logic (61-80)' },
                    { id: '4.5', label: '4.5 Email Alerts with smtplib (81-100)' },
                  ]
              ).map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => {
                    setSelectedChapter(ch.id);
                    setCurrentIndex(0);
                    setIsFlipped(false);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    selectedChapter === ch.id
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                      : 'bg-slate-950/40 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PCEI Chapter Sub-Navs (Sections 1 to 6) */}
        {currentTrack === 'pcei' && selectedSection !== 'all' && (
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-violet-400" />
              <span>Filter PCEI Chapter (20 Cards Each):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(selectedSection === 'Section 1'
                ? [
                    { id: 'all', label: 'All Section 1 (100 Cards)' },
                    { id: '1.1', label: '1.1 AI Concepts & Taxonomy (1-20)' },
                    { id: '1.2', label: '1.2 Intelligent Agents & Envs (21-40)' },
                    { id: '1.3', label: '1.3 Knowledge Rep & Search (41-60)' },
                    { id: '1.4', label: '1.4 Capabilities & Turing Test (61-80)' },
                    { id: '1.5', label: '1.5 Applications & Impact (81-100)' },
                  ]
                : selectedSection === 'Section 2'
                ? [
                    { id: 'all', label: 'All Section 2 (100 Cards)' },
                    { id: '2.1', label: '2.1 Learning Paradigms (1-20)' },
                    { id: '2.2', label: '2.2 Supervised Learning (21-40)' },
                    { id: '2.3', label: '2.3 Unsupervised & Clustering (41-60)' },
                    { id: '2.4', label: '2.4 Reinforcement Learning (61-80)' },
                    { id: '2.5', label: '2.5 Evaluation & Validation (81-100)' },
                  ]
                : selectedSection === 'Section 3'
                ? [
                    { id: 'all', label: 'All Section 3 (100 Cards)' },
                    { id: '3.1', label: '3.1 Ingestion with pandas (1-20)' },
                    { id: '3.2', label: '3.2 Cleaning & Preprocessing (21-40)' },
                    { id: '3.3', label: '3.3 Encoding & Scaling (41-60)' },
                    { id: '3.4', label: '3.4 EDA & Descriptive Stats (61-80)' },
                    { id: '3.5', label: '3.5 Visualization for AI (81-100)' },
                  ]
                : selectedSection === 'Section 4'
                ? [
                    { id: 'all', label: 'All Section 4 (100 Cards)' },
                    { id: '4.1', label: '4.1 Artificial Neural Nets (1-20)' },
                    { id: '4.2', label: '4.2 Deep Learning & Training (21-40)' },
                    { id: '4.3', label: '4.3 Computer Vision & CNNs (41-60)' },
                    { id: '4.4', label: '4.4 NLP Fundamentals (61-80)' },
                    { id: '4.5', label: '4.5 GenAI, LLMs & Prompting (81-100)' },
                  ]
                : selectedSection === 'Section 5'
                ? [
                    { id: 'all', label: 'All Section 5 (100 Cards)' },
                    { id: '5.1', label: '5.1 Bias, Fairness & Parity (1-20)' },
                    { id: '5.2', label: '5.2 Privacy, Data & Security (21-40)' },
                    { id: '5.3', label: '5.3 Transparency & XAI (41-60)' },
                    { id: '5.4', label: '5.4 Safety, Hallucination & Robustness (61-80)' },
                    { id: '5.5', label: '5.5 Governance & Societal Impact (81-100)' },
                  ]
                : [
                    { id: 'all', label: 'All Section 6 (100 Cards)' },
                    { id: '6.1', label: '6.1 Real-World AI Opportunities (1-20)' },
                    { id: '6.2', label: '6.2 Cost & Resource Economics (21-40)' },
                    { id: '6.3', label: '6.3 Basic Development Lifecycle (41-60)' },
                    { id: '6.4', label: '6.4 Git, DVC & Team Workflows (61-80)' },
                    { id: '6.5', label: '6.5 Communication & Visuals (81-100)' },
                  ]
              ).map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => {
                    setSelectedChapter(ch.id);
                    setCurrentIndex(0);
                    setIsFlipped(false);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    selectedChapter === ch.id
                      ? 'bg-violet-500/20 text-violet-300 border border-violet-500/40 shadow-sm'
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
              <span className="text-slate-300 font-medium">
                {currentCard.cardType || `PCED ${currentCard.chapter}`}
              </span>
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
                        {currentCard.category || 'Data Analysis'}
                      </span>
                      {currentCard.isUserCreated && (
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                          Custom
                        </span>
                      )}
                      <span
                        className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                          currentCard.difficulty?.toLowerCase() === 'beginner'
                            ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                            : currentCard.difficulty?.toLowerCase() === 'intermediate'
                            ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                            : 'bg-rose-500/10 text-rose-300 border border-rose-500/30'
                        }`}
                      >
                        {currentCard.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 text-xs text-slate-400">
                      <span>Topic:</span>
                      <span className="text-slate-200 font-medium">
                        {currentCard.topic || `Chapter ${currentCard.chapter}`}
                      </span>
                      {currentCard.isUserCreated && onDeleteCard && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (window.confirm('Delete this custom flashcard?')) {
                              onDeleteCard(currentCard.id);
                            }
                          }}
                          className="ml-2 p-1 rounded-md text-rose-400 hover:bg-rose-500/20 border border-rose-500/30 transition-colors"
                          title="Delete custom card"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
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

                  {/* Multiple Choice Options if available */}
                  {currentCard.options && currentCard.options.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <div className="text-xs font-semibold text-slate-400">Answer Options:</div>
                      <div className="grid grid-cols-1 gap-2">
                        {currentCard.options.map((opt, optIdx) => (
                          <div
                            key={optIdx}
                            className="flex items-start space-x-2.5 p-2.5 rounded-lg border border-slate-800 bg-slate-950/60 text-xs text-slate-300"
                          >
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-slate-800 text-[11px] font-bold text-cyan-400 shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="leading-relaxed">{opt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom hint to flip */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center space-x-1 text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Interval: {currentCard.intervalDays || 1}d • Ease: {currentCard.factor || '2.5'}</span>
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
                  {(currentCard.stdoutExpected || (currentCard.options && currentCard.correctAnswer !== undefined ? currentCard.options[Number(currentCard.correctAnswer)] : null)) && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="mt-4 rounded-xl border border-emerald-950/50 bg-slate-950 p-4 font-mono text-xs sm:text-sm text-emerald-400 shadow-inner"
                    >
                      <div className="flex items-center space-x-1.5 text-[11px] text-slate-500 mb-2 border-b border-slate-800 pb-1.5">
                        <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{currentCard.stdoutExpected ? 'Console Output / Value' : 'Correct Answer'}</span>
                      </div>
                      <pre className="overflow-x-auto whitespace-pre font-mono leading-relaxed">
                        {currentCard.stdoutExpected || (currentCard.options && currentCard.correctAnswer !== undefined ? currentCard.options[Number(currentCard.correctAnswer)] : '')}
                      </pre>
                    </div>
                  )}

                  {/* Detailed Explanation Breakdown */}
                  <div className="mt-5 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Brain className="w-4 h-4 text-cyan-400" />
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {currentCard.explanationTitle || 'Concept & Exam Insight'}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed pl-6">
                      {currentCard.explanationText || currentCard.explanation}
                    </p>
                    {currentCard.deepDive && (
                      <p className="text-xs text-slate-400 leading-relaxed pl-6 mt-2 border-l-2 border-cyan-500/40 py-1">
                        <strong className="text-cyan-400">Deep Dive: </strong>
                        {currentCard.deepDive}
                      </p>
                    )}
                  </div>

                  {/* Tags */}
                  {currentCard.tags && currentCard.tags.length > 0 && (
                    <div className="mt-3 pl-6 flex flex-wrap gap-1.5">
                      {currentCard.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/60">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

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
                    <div className="flex items-center space-x-1.5">
                      <span className="font-semibold text-slate-200">
                        {isFrench ? 'Évaluez votre souvenir (1-4) :' : 'Rate your recall (1-4):'}
                      </span>
                      <InfoTooltip
                        title="Algorithme SuperMemo-2 (SM-2)"
                        text="Indiquez votre aisance pour planifier la prochaine révision. Encore réinitialise la carte pour demain. Difficile planifie à 2 jours. Bon planifie à 4 jours. Facile espace à 7 jours et plus."
                        tip="Soyez honnête envers vous-même : coter 'Difficile' ou 'Encore' permet à l’application de vous représenter les pièges au moment opportun."
                      />
                    </div>
                    <span className="text-[11px] text-slate-500">
                      {isFrench ? 'Passe automatiquement à la carte suivante' : 'Automatically advances to next card'}
                    </span>
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
