import React, { useState } from 'react';
import {
  X,
  Plus,
  Code2,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  BookOpen,
  Layers,
  Eye,
} from 'lucide-react';
import { CardDifficulty, CertificationTrack, Flashcard } from '../types';
import { useI18n } from '../context/I18nContext';
import { pcapSyllabusSections } from '../data/pcapData';
import { pcepSyllabusSections } from '../data/pcepData';

interface CreateFlashcardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCardCreated: (newCard: Flashcard) => void;
  defaultTrack?: CertificationTrack;
  defaultSection?: string;
}

export const CreateFlashcardModal: React.FC<CreateFlashcardModalProps> = ({
  isOpen,
  onClose,
  onCardCreated,
  defaultTrack = 'pcep',
  defaultSection,
}) => {
  const { t, isFrench } = useI18n();

  const [track, setTrack] = useState<CertificationTrack>(defaultTrack);
  const [sectionNumber, setSectionNumber] = useState<number>(1);
  const [chapter, setChapter] = useState<string>('1.1');
  const [topic, setTopic] = useState<string>('');
  const [category, setCategory] = useState<string>('Syntax');
  const [difficulty, setDifficulty] = useState<CardDifficulty>('Beginner');
  const [question, setQuestion] = useState<string>('');
  const [codeSnippet, setCodeSnippet] = useState<string>('');
  const [stdoutExpected, setStdoutExpected] = useState<string>('');
  const [explanationTitle, setExplanationTitle] = useState<string>('');
  const [explanationText, setExplanationText] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentSections = track === 'pcep' ? pcepSyllabusSections : pcapSyllabusSections;
  const currentSection = currentSections.find((s) => s.number === sectionNumber) || currentSections[0];

  const handleTrackChange = (newTrack: CertificationTrack) => {
    setTrack(newTrack);
    setSectionNumber(1);
    const newSections = newTrack === 'pcep' ? pcepSyllabusSections : pcapSyllabusSections;
    setChapter(newSections[0].chapters[0]?.id || '1.1');
  };

  const handleSectionChange = (newSecNum: number) => {
    setSectionNumber(newSecNum);
    const targetSec = currentSections.find((s) => s.number === newSecNum);
    if (targetSec && targetSec.chapters.length > 0) {
      setChapter(targetSec.chapters[0].id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!topic.trim()) {
      setErrorMsg(isFrench ? 'Veuillez renseigner un titre ou sujet.' : 'Please provide a topic/title.');
      return;
    }
    if (!question.trim()) {
      setErrorMsg(isFrench ? 'Veuillez saisir une question.' : 'Please provide a question.');
      return;
    }
    if (!explanationText.trim()) {
      setErrorMsg(
        isFrench
          ? 'Veuillez saisir une explication détaillée.'
          : 'Please provide an explanation for the answer.'
      );
      return;
    }

    const prefix = track === 'pcep' ? 'PCEP' : 'PCAP';
    const newCard: Flashcard = {
      id: `${prefix}-CUSTOM-${Date.now().toString().slice(-6)}`,
      track,
      cardType: `${prefix} Custom Card`,
      topic: topic.trim(),
      category: category.trim() || 'Syntax',
      difficulty,
      factor: '2.5',
      intervalDays: 1,
      section: `Section ${sectionNumber}`,
      chapter: chapter || `${sectionNumber}.1`,
      question: question.trim(),
      codeSnippet: codeSnippet.trim(),
      stdoutExpected: stdoutExpected.trim(),
      explanationTitle: explanationTitle.trim() || topic.trim(),
      explanationText: explanationText.trim(),
      isUserCreated: true,
    };

    onCardCreated(newCard);
    onClose();

    // Reset fields
    setTopic('');
    setQuestion('');
    setCodeSnippet('');
    setStdoutExpected('');
    setExplanationTitle('');
    setExplanationText('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Plus className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-100">
                {isFrench ? 'Créer une carte mémoire' : 'Create Custom Flashcard'}
              </h2>
              <p className="text-xs text-slate-400">
                {isFrench
                  ? 'Ajoutez vos propres questions d’entraînement pour préparer l’examen'
                  : 'Add your own practice questions with code snippet and explanation'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Target Track & Difficulty */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {isFrench ? 'Programme de Certification' : 'Target Certification Track'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleTrackChange('pcep')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center space-x-1.5 ${
                    track === 'pcep'
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 ring-1 ring-emerald-500/30'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>PCEP-30-0x</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleTrackChange('pcap')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center space-x-1.5 ${
                    track === 'pcap'
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 ring-1 ring-cyan-500/30'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>PCAP-31-03</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {isFrench ? 'Niveau de difficulté' : 'Difficulty Level'}
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as CardDifficulty)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
              >
                <option value="Beginner">{isFrench ? 'Débutant (Beginner)' : 'Beginner'}</option>
                <option value="Intermediate">
                  {isFrench ? 'Intermédiaire (Intermediate)' : 'Intermediate'}
                </option>
                <option value="Advanced">{isFrench ? 'Avancé (Advanced)' : 'Advanced'}</option>
              </select>
            </div>
          </div>

          {/* Section & Chapter */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {isFrench ? 'Section officielle' : 'Syllabus Section'}
              </label>
              <select
                value={sectionNumber}
                onChange={(e) => handleSectionChange(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
              >
                {currentSections.map((sec) => (
                  <option key={sec.id} value={sec.number}>
                    Section {sec.number}: {sec.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {isFrench ? 'Sous-chapitre' : 'Sub-chapter'}
              </label>
              <select
                value={chapter}
                onChange={(e) => setChapter(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
              >
                {currentSection.chapters.map((chap) => (
                  <option key={chap.id} value={chap.id}>
                    Chapter {chap.id}: {chap.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Topic & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {isFrench ? 'Sujet / Titre de la carte *' : 'Topic / Card Title *'}
              </label>
              <input
                type="text"
                placeholder={
                  track === 'pcep'
                    ? 'e.g. print() sep and end keyword parameters'
                    : 'e.g. MRO diamond inheritance order'
                }
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 placeholder:text-slate-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {isFrench ? 'Catégorie thématique' : 'Category / Subdomain'}
              </label>
              <input
                type="text"
                placeholder="e.g. Basic I/O, Operators, Control Flow, Lists"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 placeholder:text-slate-600"
              />
            </div>
          </div>

          {/* Question */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              {isFrench ? 'Question d’examen *' : 'Exam Question *'}
            </label>
            <textarea
              rows={2}
              placeholder="e.g. What is the output produced by the following Python code snippet?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 placeholder:text-slate-600"
            />
          </div>

          {/* Code Snippet & Expected STDOUT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                <span>{isFrench ? 'Extrait de code Python (optionnel)' : 'Python Code Snippet (Optional)'}</span>
                <Code2 className="w-3.5 h-3.5 text-slate-500" />
              </label>
              <textarea
                rows={4}
                placeholder={`x = [1, 2, 3]\nprint(x[::-1])`}
                value={codeSnippet}
                onChange={(e) => setCodeSnippet(e.target.value)}
                className="w-full bg-slate-950 font-mono text-xs border border-slate-800 rounded-xl p-3 text-cyan-300 focus:outline-none focus:border-cyan-500 placeholder:text-slate-700"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {isFrench ? 'Sortie attendue (STDOUT)' : 'Expected Output (STDOUT)'}
              </label>
              <textarea
                rows={4}
                placeholder="[3, 2, 1]"
                value={stdoutExpected}
                onChange={(e) => setStdoutExpected(e.target.value)}
                className="w-full bg-slate-950 font-mono text-xs border border-slate-800 rounded-xl p-3 text-emerald-300 focus:outline-none focus:border-emerald-500 placeholder:text-slate-700"
              />
            </div>
          </div>

          {/* Explanation */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              {isFrench ? 'Explication détaillée *' : 'Detailed Explanation & Core Concept *'}
            </label>
            <textarea
              rows={3}
              placeholder={
                isFrench
                  ? 'Expliquez la règle Python sous-jacente, le comportement du compilateur ou le piège...'
                  : 'Explain the underlying Python rule, evaluation order, or common gotcha...'
              }
              value={explanationText}
              onChange={(e) => setExplanationText(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 placeholder:text-slate-600"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-800">
            <span className="text-[11px] text-slate-500">
              {isFrench
                ? 'La carte sera automatiquement enregistrée dans votre stockage local'
                : 'Card will be persisted in local storage and added to your deck'}
            </span>

            <div className="flex items-center space-x-2.5">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
              >
                {isFrench ? 'Annuler' : 'Cancel'}
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all flex items-center space-x-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>{isFrench ? 'Enregistrer la carte' : 'Save Flashcard'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
