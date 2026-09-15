import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Clock,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Award,
  AlertCircle,
  Copy,
  Check,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { Flashcard, AppView, CertificationTrack } from '../../types';
import { useI18n } from '../../context/I18nContext';

interface ExamSimulatorViewProps {
  cards: Flashcard[];
  onNavigate: (view: AppView, section?: string) => void;
  currentTrack?: CertificationTrack;
}

export const ExamSimulatorView: React.FC<ExamSimulatorViewProps> = ({
  cards,
  onNavigate,
  currentTrack = 'pcap',
}) => {
  const { t, isFrench } = useI18n();
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [questionCount, setQuestionCount] = useState(10);
  const [selectedSectionFilter, setSelectedSectionFilter] = useState('all');
  const [examCards, setExamCards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [copied, setCopied] = useState(false);

  // Timer effect
  useEffect(() => {
    let timer: any;
    if (examStarted && !examFinished) {
      timer = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [examStarted, examFinished]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartExam = () => {
    let pool = cards;
    if (selectedSectionFilter !== 'all') {
      pool = cards.filter((c) => c.section === selectedSectionFilter);
    }
    // Shuffle pool and slice
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));
    setExamCards(selected);
    setCurrentIndex(0);
    setUserAnswers({});
    setSecondsElapsed(0);
    setExamStarted(true);
    setExamFinished(false);
  };

  const currentCard = examCards[currentIndex];

  // Derive 4 plausible answer options: 1 correct answer + 3 distractors
  const getAnswerOptions = (card: Flashcard, index: number) => {
    const correct = card.stdoutExpected.trim();

    // Generic realistic PCAP distractors based on question content
    const potentialDistractors = [
      'AttributeError: \'NoneType\' object has no attribute',
      'TypeError: object is not subscriptable',
      'TypeError: __init__() should return None, not \'int\'',
      'True',
      'False',
      '<class \'object\'>',
      'None',
      'NameError: name is not defined',
      '0',
      '1',
      'CompilationError',
      'SyntaxError: invalid syntax',
    ];

    // Pick 3 distractors not equal to correct
    const filteredDistractors = potentialDistractors.filter(
      (d) => d.toLowerCase() !== correct.toLowerCase()
    );
    const distractors = filteredDistractors.slice(0, 3);
    const options = [correct, ...distractors].sort((a, b) => {
      // Deterministic pseudo-shuffle per question index
      return (a.charCodeAt(0) + index) % 3 - (b.charCodeAt(0) + index) % 3;
    });

    return options;
  };

  const handleSelectOption = (option: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: option,
    }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    examCards.forEach((card, idx) => {
      if (userAnswers[idx] === card.stdoutExpected.trim()) {
        correctCount++;
      }
    });
    return correctCount;
  };

  const handleFinishExam = () => {
    setExamFinished(true);
  };

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 1. Pre-Exam Configuration View
  if (!examStarted) {
    const scopeOptions = currentTrack === 'pcep' ? [
      { id: 'all', label: isFrench ? `Toutes les Sections (${cards.length} Cartes)` : `All Sections (${cards.length} Cards)` },
      { id: 'Section 1', label: isFrench ? 'Section 1 : Fondamentaux Python' : 'Section 1: Python Fundamentals' },
      { id: 'Section 2', label: isFrench ? 'Section 2 : Flux de Contrôle & Boucles' : 'Section 2: Control Flow & Loops' },
      { id: 'Section 3', label: isFrench ? 'Section 3 : Collections de Données' : 'Section 3: Data Collections' },
      { id: 'Section 4', label: isFrench ? 'Section 4 : Fonctions & Exceptions' : 'Section 4: Functions & Exceptions' },
    ] : [
      { id: 'all', label: isFrench ? `Toutes les Sections (${cards.length} Cartes)` : `All Sections (${cards.length} Cards)` },
      { id: 'Section 1', label: isFrench ? 'Section 1 : Modules & PIP' : 'Section 1: Modules & PIP' },
      { id: 'Section 2', label: isFrench ? 'Section 2 : Chaînes & Exceptions' : 'Section 2: Strings & Exceptions' },
      { id: 'Section 3', label: isFrench ? 'Section 3 : Fonctions & Générateurs' : 'Section 3: Functions & Generators' },
      { id: 'Section 4', label: isFrench ? 'Section 4 : POO (100 Cartes)' : 'Section 4: OOP (100 Cards)' },
      { id: 'Section 5', label: isFrench ? 'Section 5 : Divers (Compréhensions, E/S)' : 'Section 5: Miscellaneous (100 Cards)' },
    ];

    return (
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        <div className="text-center space-y-3">
          <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-2">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {currentTrack === 'pcep'
              ? (isFrench ? "Simulateur d'Examen PCEP-30-0x" : 'PCEP-30-0x Exam Simulator')
              : (isFrench ? "Simulateur d'Examen PCAP-31-03" : 'PCAP-31-03 Exam Simulator')}
          </h1>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            {isFrench
              ? "Testez votre préparation aux certifications Python avec des questions réalistes et chronométrées. Le seuil de réussite est de 70% (norme officielle Python Institute)."
              : "Test your Python certification readiness with realistic, timed questions. Passing mark is 70% (Python Institute official standard)."}
          </p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl">
          {/* Section Filter */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              {isFrench ? "Sélectionner la Portée de l'Examen" : 'Select Exam Scope'}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {scopeOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedSectionFilter(opt.id)}
                  className={`p-3 rounded-xl text-left border text-xs font-medium transition-all ${
                    selectedSectionFilter === opt.id
                      ? 'bg-cyan-500/15 border-cyan-500 text-cyan-300'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question Count */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              {isFrench ? "Nombre de Questions" : 'Question Count'}
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[10, 20, 30].map((count) => (
                <button
                  key={count}
                  onClick={() => setQuestionCount(count)}
                  className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${
                    questionCount === count
                      ? 'bg-amber-500/15 border-amber-500 text-amber-300'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {count} {isFrench ? 'Questions' : 'Questions'}
                </button>
              ))}
            </div>
          </div>

          {/* Guidelines */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 space-y-1.5">
            <span className="font-semibold text-slate-200 block">
              {isFrench ? 'Consignes pour l’Examen :' : 'Exam Instructions:'}
            </span>
            <p>
              {isFrench
                ? "• Inspectez attentivement les snippets de code (indentation, types, opérateurs, dunders)."
                : "• Carefully inspect code snippets for indentation, assignment vs equality, and dunder spellings."}
            </p>
            <p>
              {isFrench
                ? "• Prédisez la sortie console stdout exacte ou l'erreur levée à l'exécution."
                : "• Predict the exact stdout console output or runtime error raised."}
            </p>
            <p>
              {isFrench
                ? "• Un score minimum de 70% est requis pour réussir l'examen officiel de certification Python."
                : "• A minimum score of 70% is required to pass the official Python certification examination."}
            </p>
          </div>

          <button
            onClick={handleStartExam}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center space-x-2"
          >
            <span>{isFrench ? "Commencer l'Examen Pratique Chronométré" : 'Begin Timed Practice Exam'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // 2. Exam Finished Results View
  if (examFinished) {
    const correctCount = calculateScore();
    const scorePercent = Math.round((correctCount / examCards.length) * 100);
    const isPassed = scorePercent >= 70;

    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-4 shadow-2xl">
          <div className={`inline-flex p-4 rounded-2xl ${isPassed ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
            {isPassed ? <Award className="w-12 h-12" /> : <AlertCircle className="w-12 h-12" />}
          </div>

          <h2 className="text-3xl font-bold text-white">
            {isPassed
              ? (isFrench ? 'Félicitations ! Vous avez réussi !' : 'Congratulations! You Passed!')
              : (isFrench ? 'Révision requise — Continuez à vous entraîner' : 'Review Needed — Keep Practicing')}
          </h2>

          <p className="text-sm text-slate-400 max-w-md mx-auto">
            {isPassed
              ? (isFrench
                  ? `Vous avez obtenu ${scorePercent}%, dépassant l'exigence officielle de réussite de 70% du Python Institute.`
                  : `You achieved ${scorePercent}%, exceeding the official 70% Python Institute passing requirement.`)
              : (isFrench
                  ? `Vous avez obtenu ${scorePercent}%. Le seuil de passage est de 70%. Révisez les questions ci-dessous et entraînez-vous avec les Flashcards SRS.`
                  : `You scored ${scorePercent}%. The passing threshold is 70%. Review the questions below and drill with Flashcards SRS.`)}
          </p>

          <div className="flex items-center justify-center space-x-8 py-4 border-y border-slate-800 my-4">
            <div>
              <span className="block text-2xl font-mono font-bold text-cyan-400">{scorePercent}%</span>
              <span className="text-xs text-slate-500 uppercase">{isFrench ? 'Score' : 'Score'}</span>
            </div>
            <div>
              <span className="block text-2xl font-mono font-bold text-slate-200">
                {correctCount} / {examCards.length}
              </span>
              <span className="text-xs text-slate-500 uppercase">{isFrench ? 'Correctes' : 'Correct'}</span>
            </div>
            <div>
              <span className="block text-2xl font-mono font-bold text-amber-400">
                {formatTime(secondsElapsed)}
              </span>
              <span className="text-xs text-slate-500 uppercase">{isFrench ? 'Temps' : 'Time'}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleStartExam}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all flex items-center space-x-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{isFrench ? "Repasser l'Examen" : 'Retake Exam'}</span>
            </button>

            <button
              onClick={() => onNavigate('flashcards', 'Section 1')}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-colors flex items-center space-x-2"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>{isFrench ? 'Réviser les Flashcards' : 'Drill Flashcards'}</span>
            </button>

            <button
              onClick={() => setExamStarted(false)}
              className="px-5 py-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-400 text-sm transition-colors"
            >
              {isFrench ? 'Configurer un Nouvel Examen' : 'Configure New Exam'}
            </button>
          </div>
        </div>

        {/* Detailed Question Review List */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">
            {isFrench ? 'Revue des Questions' : 'Question Review'}
          </h3>
          <div className="space-y-4">
            {examCards.map((card, idx) => {
              const userAns = userAnswers[idx];
              const isCorrect = userAns === card.stdoutExpected.trim();

              return (
                <div
                  key={card.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    isCorrect
                      ? 'bg-slate-900/60 border-emerald-500/30'
                      : 'bg-slate-900/60 border-rose-500/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono font-bold text-slate-400">Q{idx + 1}.</span>
                      <span className="text-xs font-mono text-cyan-400">{card.topic}</span>
                      <span className="text-[10px] text-slate-500">({card.chapter})</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-xs font-semibold">
                      {isCorrect ? (
                        <span className="text-emerald-400 flex items-center space-x-1">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>{isFrench ? 'Correct' : 'Correct'}</span>
                        </span>
                      ) : (
                        <span className="text-rose-400 flex items-center space-x-1">
                          <XCircle className="w-4 h-4" />
                          <span>{isFrench ? 'Incorrect' : 'Incorrect'}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm font-medium text-slate-200 mb-3">{card.question}</p>

                  <div className="bg-slate-950 p-3 rounded-xl font-mono text-xs text-slate-300 mb-3 overflow-x-auto border border-slate-800">
                    <pre>{card.codeSnippet}</pre>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                      <span className="text-slate-500 block mb-0.5">
                        {isFrench ? 'Votre Réponse :' : 'Your Answer:'}
                      </span>
                      <span className={isCorrect ? 'text-emerald-400 font-mono' : 'text-rose-400 font-mono'}>
                        {userAns || (isFrench ? 'Aucune réponse sélectionnée' : 'No answer selected')}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                      <span className="text-slate-500 block mb-0.5">
                        {isFrench ? 'Réponse Attendue :' : 'Expected Correct:'}
                      </span>
                      <span className="text-emerald-400 font-mono">{card.stdoutExpected}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-850 text-xs text-slate-400 border border-slate-800">
                    <strong className="text-slate-200 block mb-1">{card.explanationTitle}</strong>
                    <p>{card.explanationText}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // 3. Active Exam View
  const options = getAnswerOptions(currentCard, currentIndex);
  const selectedOption = userAnswers[currentIndex];
  const progress = Math.round(((currentIndex + 1) / examCards.length) * 100);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {/* Exam Header */}
      <div className="flex items-center justify-between bg-slate-900 border border-slate-800 px-5 py-3 rounded-2xl">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-mono font-bold text-cyan-400">
            {isFrench ? `Question ${currentIndex + 1} sur ${examCards.length}` : `Question ${currentIndex + 1} of ${examCards.length}`}
          </span>
          <span className="text-xs text-slate-500">•</span>
          <span className="text-xs text-slate-400">{currentCard.topic}</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1.5 text-xs font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>{formatTime(secondsElapsed)}</span>
          </div>

          <button
            onClick={handleFinishExam}
            className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
          >
            {isFrench ? "Terminer l'Examen" : 'Finish Exam'}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-cyan-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              {currentCard.chapter}
            </span>
            <span className="text-xs text-slate-400">{currentCard.section}</span>
          </div>
          <h2 className="text-base sm:text-lg font-semibold text-slate-100">
            {currentCard.question}
          </h2>
        </div>

        {/* Code Snippet */}
        <div className="relative rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto">
          <button
            onClick={() => handleCopyCode(currentCard.codeSnippet)}
            className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            title={isFrench ? 'Copier le code' : 'Copy code'}
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <pre>{currentCard.codeSnippet}</pre>
        </div>

        {/* Answer Options */}
        <div className="space-y-2.5 pt-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
            {isFrench
              ? 'Sélectionnez la sortie console stdout ou la valeur attendue :'
              : 'Select Expected Console Output / Return Value:'}
          </span>
          {options.map((option, idx) => {
            const isSelected = selectedOption === option;
            const letter = String.fromCharCode(65 + idx);

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(option)}
                className={`w-full text-left p-3.5 rounded-xl border font-mono text-xs sm:text-sm transition-all flex items-start space-x-3 ${
                  isSelected
                    ? 'bg-cyan-500/15 border-cyan-500 text-cyan-200 ring-1 ring-cyan-400/40 shadow-sm'
                    : 'bg-slate-950/60 border-slate-800/80 text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-bold shrink-0 ${
                  isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  {letter}
                </span>
                <span className="pt-0.5 break-all">{option}</span>
              </button>
            );
          })}
        </div>

        {/* Navigation Bottom Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
          <button
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((prev) => prev - 1)}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold text-slate-300 transition-colors flex items-center space-x-1.5"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{isFrench ? 'Précédente' : 'Previous'}</span>
          </button>

          <span className="text-xs font-mono text-slate-500">
            {isFrench
              ? `Répondues : ${Object.keys(userAnswers).length} / ${examCards.length}`
              : `Answered: ${Object.keys(userAnswers).length} / ${examCards.length}`}
          </span>

          {currentIndex < examCards.length - 1 ? (
            <button
              onClick={() => setCurrentIndex((prev) => prev + 1)}
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-colors flex items-center space-x-1.5"
            >
              <span>{isFrench ? 'Question Suivante' : 'Next Question'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleFinishExam}
              className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-colors flex items-center space-x-1.5"
            >
              <span>{isFrench ? "Soumettre l'Examen" : 'Submit Exam'}</span>
              <CheckCircle2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
