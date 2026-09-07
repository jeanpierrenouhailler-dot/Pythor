import React, { useState, useEffect } from 'react';
import { CodingChallenge, UserProfile } from '../../types';
import {
  Play,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  Terminal,
  CheckSquare,
  Lock,
  Unlock,
  Key,
  Clock,
  Zap,
  ChevronRight,
  FileCode,
  Check,
  Type,
  Lightbulb,
  ArrowLeft,
} from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

interface IdeStudioViewProps {
  challenge: CodingChallenge;
  user: UserProfile;
  onUpdateXp: (delta: number) => void;
  onNavigateBack: () => void;
  previousViewTitle?: string;
}

export const IdeStudioView: React.FC<IdeStudioViewProps> = ({
  challenge,
  onUpdateXp,
  onNavigateBack,
  previousViewTitle = 'Previous View',
}) => {
  const { t, lang } = useI18n();
  const [activeTab, setActiveTab] = useState<'main.py' | 'test_solution.py'>('main.py');
  const [mode, setMode] = useState<'free' | 'blanks'>('free');
  const [code, setCode] = useState(challenge.starterCode);
  const [fontSize, setFontSize] = useState<number>(13.5);
  const [hints, setHints] = useState(challenge.hints);
  const [bottomTab, setBottomTab] = useState<'tests' | 'terminal'>('tests');
  const [isRunning, setIsRunning] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [validationSuccess, setValidationSuccess] = useState(false);
  const [executionTime, setExecutionTime] = useState<number>(42);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    'Linux pythor-vm-sandbox 6.1.0 #1 SMP x86_64',
    'user@pythor:~/workspace$ python3 main.py',
    "{ 'python': 2, 'code': 1 }",
    '[Process exited 0 in 0.042s - Mem: 14.8MB]',
  ]);

  useEffect(() => {
    setCode(mode === 'free' ? challenge.starterCode : challenge.blankCode);
    setHints(challenge.hints);
    setValidationSuccess(false);
  }, [challenge, mode]);

  const testFileCode = `import pytest
from main import count_words

def test_multiple_occurrences():
    assert count_words("python code python") == {"python": 2, "code": 1}

def test_empty_string():
    assert count_words("") == {}

def test_case_insensitivity():
    assert count_words("test TEST test") == {"test": 3}

if __name__ == "__main__":
    pytest.main(["-v", "test_solution.py"])
`;

  // Keyboard shortcut listener for ⌘R (Run) and ⌘Enter (Validate)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'r') {
        e.preventDefault();
        handleRunCode();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        handleValidateSolution();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [code]);

  const handleModeChange = (newMode: 'free' | 'blanks') => {
    setMode(newMode);
    setCode(newMode === 'free' ? challenge.starterCode : challenge.blankCode);
  };

  const handleResetCode = () => {
    setCode(mode === 'free' ? challenge.starterCode : challenge.blankCode);
    setValidationSuccess(false);
  };

  const handleUnlockHint = (tierNum: number, cost: number) => {
    if (cost > 0) {
      onUpdateXp(-cost);
    }
    setHints((prev) =>
      prev.map((h) => (h.tier === tierNum ? { ...h, unlocked: true } : h))
    );
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setBottomTab('terminal');
    setTimeout(() => {
      const nowMs = Math.floor(Math.random() * 20) + 32;
      setExecutionTime(nowMs);
      setTerminalOutput([
        'Linux pythor-vm-sandbox 6.1.0 #1 SMP x86_64',
        'user@pythor:~/workspace$ python3 main.py',
        "{ 'python': 2, 'code': 1 }",
        `[Process exited 0 in 0.0${nowMs}s - Mem: 14.8MB]`,
      ]);
      setIsRunning(false);
    }, 400);
  };

  const handleValidateSolution = () => {
    setIsValidating(true);
    setBottomTab('tests');
    setTimeout(() => {
      setIsValidating(false);
      setValidationSuccess(true);
      onUpdateXp(challenge.xpReward);
      setTimeout(() => {
        // keep badge visible
      }, 3000);
    }, 650);
  };

  return (
    <div className="w-full h-[calc(100vh-102px)] xl:h-[calc(100vh-4rem)] flex flex-col lg:flex-row overflow-hidden bg-[#0A0A0A] text-[#F5F5F5]">
      {/* LEFT PANEL: Pedagogy, Challenge Briefing & SRS Hints (35%) */}
      <aside className="w-full lg:w-[36%] xl:w-[34%] flex flex-col bg-[#141414] border-r border-[#262626] overflow-y-auto">
        {/* Top Meta Bar & Breadcrumb */}
        <div className="p-6 bg-[#141414]/95 backdrop-blur sticky top-0 z-10 border-b border-[#262626]">
          {/* Return button toolbar */}
          <div className="flex items-center justify-between gap-2 mb-3.5">
            <button
              onClick={onNavigateBack}
              id="ide-return-button"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1C1C1C] hover:bg-[#262626] border border-[#2D2D2D] hover:border-[#454545] text-xs text-[#E5E5E5] hover:text-white font-medium transition-all group shadow-sm"
              title={`${t.nav.returnTo} ${previousViewTitle} (Alt+←)`}
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#A0A0A0] group-hover:text-white transition-transform group-hover:-translate-x-0.5" />
              <span>{t.nav.returnTo} {previousViewTitle}</span>
            </button>
            <span className="text-[10px] font-mono text-[#737373] hidden sm:inline">Alt+←</span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#A0A0A0] mb-2 flex-wrap">
            {challenge.pcepCode && (
              <>
                <span className="text-[#C5A059] font-bold bg-[#1C1C1C] px-2 py-0.5 rounded border border-[#C5A059]/40">
                  {challenge.pcepCode}
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-[#737373]" />
              </>
            )}
            <span>{challenge.track}</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#737373]" />
            <span>{challenge.category}</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#737373]" />
            <span className="text-[#C5A059] font-semibold">
              {lang === 'fr' ? `Défi #${challenge.challengeNumber}` : `Challenge #${challenge.challengeNumber}`}
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl font-serif font-light tracking-wide text-[#F5F5F5] mb-3 leading-snug">
            {challenge.title}
          </h1>

          {/* Challenge Badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1C1C1C] text-[#DFC287] font-mono text-xs font-medium border border-[#262626]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DFC287]" />
              {challenge.difficulty}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#1C1C1C] text-[#C5A059] font-mono text-xs font-semibold border border-[#262626]">
              <Zap className="w-3.5 h-3.5 text-[#C5A059]" />
              +{challenge.xpReward} XP
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#1C1C1C] text-[#A0A0A0] font-mono text-xs border border-[#262626]">
              <Clock className="w-3.5 h-3.5 text-[#A0A0A0]" />
              {challenge.estimatedMinutes} min
            </span>
          </div>
        </div>

        {/* Mode Selector Switch */}
        <div className="px-6 pt-3 pb-4">
          <div className="p-1 bg-[#0A0A0A] rounded-lg border border-[#262626] flex gap-1 font-sans text-xs">
            <button
              onClick={() => handleModeChange('free')}
              className={`flex-1 py-1.5 px-2 rounded-md font-semibold text-center transition-all flex items-center justify-center gap-1.5 ${
                mode === 'free'
                  ? 'bg-[#222222] text-[#F5F5F5] shadow-sm border border-[#C5A059]/40'
                  : 'text-[#A0A0A0] hover:text-[#F5F5F5]'
              }`}
            >
              <Terminal className="w-4 h-4 text-[#C5A059]" />
              <span>{lang === 'fr' ? 'Code libre' : 'Free Code'}</span>
            </button>
            <button
              onClick={() => handleModeChange('blanks')}
              className={`flex-1 py-1.5 px-2 rounded-md font-medium text-center transition-all flex items-center justify-center gap-1.5 ${
                mode === 'blanks'
                  ? 'bg-[#222222] text-[#F5F5F5] shadow-sm border border-[#C5A059]/40'
                  : 'text-[#A0A0A0] hover:text-[#F5F5F5]'
              }`}
            >
              <CheckSquare className="w-4 h-4 text-[#DFC287]" />
              <span>{lang === 'fr' ? 'Texte à trous' : 'Fill-in-the-blanks'}</span>
            </button>
          </div>
        </div>

        {/* Content Well */}
        <div className="px-6 pb-12 space-y-6 flex-1">
          {/* Concept Context */}
          <section className="space-y-3">
            <h2 className="text-base font-serif font-medium text-[#F5F5F5] flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#C5A059]" />
              <span>{lang === 'fr' ? 'Objectif pédagogique' : 'Pedagogical Objective'}</span>
            </h2>
            <p className="text-sm text-[#A0A0A0] leading-relaxed">
              {challenge.pedagogicalObjective}
            </p>

            <div className="bg-[#181818] p-4 rounded-lg border border-[#262626] space-y-2">
              <div className="font-mono text-xs text-[#F5F5F5] font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>{lang === 'fr' ? 'Consignes spécifiques :' : 'Specific Guidelines:'}</span>
              </div>
              <ul className="text-xs text-[#A0A0A0] space-y-1.5 pl-4 list-disc marker:text-[#C5A059]">
                {challenge.guidelines.map((g, i) => (
                  <li key={i} className="leading-relaxed">
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Dynamic Visualization Card */}
          <section className="bg-[#181818] p-4 rounded-lg border border-[#262626] space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-[#C5A059] font-semibold uppercase tracking-[2px]">
                Execution Visualization
              </span>
              <span className="font-mono text-xs text-[#DFC287] font-medium">
                O(N) Complexity
              </span>
            </div>
            <div className="p-3 bg-[#0A0A0A] rounded border border-[#262626] font-mono text-xs text-[#A0A0A0] space-y-2">
              <div className="flex items-center justify-between text-[#F5F5F5]">
                <span>{challenge.executionSteps.input}</span>
                <span className="text-[#C5A059] text-sm">↓</span>
              </div>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="px-2 py-0.5 bg-[#1C1C1C] rounded text-[#DFC287] border border-[#262626]">
                  {challenge.executionSteps.step1}
                </span>
                <span className="px-2 py-0.5 bg-[#1C1C1C] rounded text-[#C5A059] border border-[#262626]">
                  {challenge.executionSteps.step2}
                </span>
              </div>
              <div className="p-1.5 bg-[#1C1C1C] rounded text-[#C5A059] font-semibold text-center border border-[#C5A059]/30">
                {challenge.executionSteps.output}
              </div>
            </div>
          </section>

          {/* 3-Level SRS Interactive Hint System */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-serif font-medium text-[#F5F5F5] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span>{lang === 'fr' ? 'Indices intelligents (SRS)' : 'Smart Hints (SRS)'}</span>
              </h3>
              <span className="font-mono text-xs text-[#737373]">
                {lang === 'fr'
                  ? `Palier ${hints.filter((h) => h.unlocked).length}/3 débloqué`
                  : `Tier ${hints.filter((h) => h.unlocked).length}/3 unlocked`}
              </span>
            </div>

            {/* Hint 1: Free */}
            <div className="bg-[#181818] p-3.5 rounded-lg border border-[#262626] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#C5A059] font-semibold uppercase flex items-center gap-1.5">
                  <Unlock className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{hints[0].title}</span>
                </span>
                <span className="font-mono text-[11px] text-[#737373]">
                  {lang === 'fr' ? 'Gratuit' : 'Free'}
                </span>
              </div>
              <p className="text-xs text-[#F5F5F5] leading-relaxed">
                {hints[0].content}
              </p>
            </div>

            {/* Hint 2: -10 XP */}
            <div className="bg-[#181818]/80 p-3.5 rounded-lg border border-[#262626] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#A0A0A0] uppercase flex items-center gap-1.5 font-semibold">
                  {hints[1].unlocked ? (
                    <Unlock className="w-3.5 h-3.5 text-[#DFC287]" />
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-[#DFC287]" />
                  )}
                  <span>{hints[1].title}</span>
                </span>
                <span className="font-mono text-xs text-[#DFC287] font-medium">-10 XP</span>
              </div>
              {hints[1].unlocked ? (
                <div className="text-xs text-[#F5F5F5] leading-relaxed bg-[#0A0A0A] p-2.5 rounded border border-[#C5A059]/40">
                  {hints[1].content}
                </div>
              ) : (
                <button
                  onClick={() => handleUnlockHint(2, 10)}
                  className="w-full py-1.5 px-3 rounded-md bg-[#1C1C1C] hover:bg-[#222222] text-[#DFC287] hover:text-[#F5F5F5] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors border border-[#C5A059]/30"
                >
                  <Key className="w-3.5 h-3.5" />
                  <span>{lang === 'fr' ? 'Révéler l’indice 2 (-10 XP)' : 'Reveal Hint 2 (-10 XP)'}</span>
                </button>
              )}
            </div>

            {/* Hint 3: Full Solution */}
            <div className="bg-[#181818]/50 p-3.5 rounded-lg border border-[#262626] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#737373] uppercase flex items-center gap-1.5">
                  {hints[2].unlocked ? (
                    <Unlock className="w-3.5 h-3.5 text-[#C5A059]" />
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-[#737373]" />
                  )}
                  <span>{hints[2].title}</span>
                </span>
                <span className="font-mono text-xs text-[#737373]">-50 XP</span>
              </div>
              {hints[2].unlocked ? (
                <pre className="text-[11px] font-mono text-[#DFC287] bg-[#0A0A0A] p-2.5 rounded overflow-x-auto border border-[#262626]">
                  {hints[2].content}
                </pre>
              ) : (
                <button
                  onClick={() => handleUnlockHint(3, 50)}
                  className="w-full py-1.5 px-3 rounded-md bg-[#1C1C1C] hover:bg-[#222222] text-[#A0A0A0] hover:text-[#F5F5F5] text-xs flex items-center justify-center gap-1.5 transition-colors border border-[#262626]"
                >
                  <Key className="w-3.5 h-3.5" />
                  <span>{lang === 'fr' ? 'Débloquer la solution (-50 XP)' : 'Unlock Solution (-50 XP)'}</span>
                </button>
              )}
            </div>
          </section>
        </div>
      </aside>

      {/* RIGHT / CENTRAL AREA: Python Cloud IDE & Terminal Console (64%) */}
      <main className="w-full lg:w-[64%] xl:w-[66%] flex flex-col h-full bg-[#0A0A0A] overflow-hidden">
        {/* IDE Control Toolbar */}
        <div className="h-12 bg-[#141414] px-4 flex items-center justify-between select-none border-b border-[#262626]">
          {/* Left: Open Tabs & Return Button */}
          <div className="flex items-center h-full gap-1.5 overflow-x-auto">
            <button
              onClick={onNavigateBack}
              id="ide-editor-tab-return"
              className="h-8 px-2.5 rounded-md bg-[#1C1C1C] hover:bg-[#252525] border border-[#2D2D2D] hover:border-[#404040] text-xs text-[#E5E5E5] hover:text-white flex items-center gap-1.5 transition-all shrink-0 mr-1"
              title={`${t.nav.returnTo} ${previousViewTitle}`}
            >
              <ArrowLeft className="w-3.5 h-3.5 text-neutral-400" />
              <span className="hidden sm:inline text-[11px] font-semibold uppercase tracking-wider">
                {t.nav.return}
              </span>
            </button>

            {/* main.py Tab */}
            <button
              onClick={() => setActiveTab('main.py')}
              className={`h-full px-3 sm:px-4 flex items-center gap-2 font-mono text-xs font-semibold relative transition-colors ${
                activeTab === 'main.py'
                  ? 'bg-[#0A0A0A] text-[#C5A059]'
                  : 'text-[#A0A0A0] hover:text-[#F5F5F5] hover:bg-[#181818]'
              }`}
            >
              <FileCode className="w-4 h-4 text-[#C5A059]" />
              <span>main.py</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] ml-0.5" />
              {activeTab === 'main.py' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059] shadow-[0_0_8px_rgba(197,160,89,0.5)]" />
              )}
            </button>

            {/* test_solution.py Tab */}
            <button
              onClick={() => setActiveTab('test_solution.py')}
              className={`h-full px-3 sm:px-4 flex items-center gap-2 font-mono text-xs font-medium relative transition-colors ${
                activeTab === 'test_solution.py'
                  ? 'bg-[#0A0A0A] text-[#C5A059]'
                  : 'text-[#A0A0A0] hover:text-[#F5F5F5] hover:bg-[#181818]'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-[#737373]" />
              <span>test_solution.py</span>
              {activeTab === 'test_solution.py' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059] shadow-[0_0_8px_rgba(197,160,89,0.5)]" />
              )}
            </button>
          </div>

          {/* Right: Editor Tools & Action CTAs */}
          <div className="flex items-center gap-2">
            {/* Font Size & Reset */}
            <div className="hidden sm:flex items-center gap-1 px-1 py-0.5 bg-[#181818] rounded-md border border-[#262626]">
              <button
                onClick={() => setFontSize((prev) => (prev > 12 ? prev - 1 : 15))}
                className="p-1 text-[#A0A0A0] hover:text-[#F5F5F5] rounded transition-colors"
                title="Adjust font size"
              >
                <Type className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleResetCode}
                className="p-1 text-[#A0A0A0] hover:text-[#F5F5F5] rounded transition-colors"
                title="Reset code to original"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Execute Button (⌘R) */}
            <button
              onClick={handleRunCode}
              disabled={isRunning}
              className="px-3 py-1.5 rounded-md bg-[#1C1C1C] hover:bg-[#222222] text-[#F5F5F5] font-sans text-xs font-medium flex items-center gap-1.5 transition-all shadow-sm border border-[#262626] hover:border-[#C5A059]/40"
              title="Run code in local sandbox (⌘R)"
            >
              <Play className={`w-3.5 h-3.5 text-[#C5A059] ${isRunning ? 'animate-spin' : ''}`} />
              <span>{lang === 'fr' ? 'Exécuter' : 'Run'}</span>
              <kbd className="hidden md:inline text-[10px] font-mono text-[#737373] px-1 py-0.2 bg-[#0A0A0A] rounded border border-[#262626]">
                ⌘R
              </kbd>
            </button>

            {/* Validate / Submit Button (⌘↵) */}
            <button
              onClick={handleValidateSolution}
              disabled={isValidating}
              className={`px-4 py-1.5 rounded-md font-sans text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md ${
                validationSuccess
                  ? 'bg-[#DFC287] text-[#0A0A0A]'
                  : 'bg-[#C5A059] hover:bg-[#D6B574] text-[#0A0A0A]'
              }`}
              title="Validate solution and execute unit tests (⌘↵)"
            >
              {validationSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>{lang === 'fr' ? `Validé (+${challenge.xpReward} XP)` : `Passed (+${challenge.xpReward} XP)`}</span>
                </>
              ) : isValidating ? (
                <>
                  <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                  <span>{lang === 'fr' ? 'Vérification...' : 'Verifying...'}</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{lang === 'fr' ? 'Soumettre' : 'Submit Solution'}</span>
                  <kbd className="hidden md:inline text-[10px] font-mono px-1 bg-black/15 text-[#0A0A0A] rounded">
                    ⌘↵
                  </kbd>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Editor Core Surface */}
        <div className="flex-1 flex overflow-hidden bg-[#0A0A0A] font-mono leading-6 relative ide-editor-surface">
          {activeTab === 'main.py' ? (
            <div className="flex-1 flex overflow-hidden">
              {/* Line Numbers */}
              <div className="w-11 py-3 select-none bg-[#0A0A0A] text-[#737373]/60 text-right pr-3 font-mono text-xs space-y-0 border-r border-[#262626]">
                {code.split('\n').map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>

              {/* Code TextArea / Editable Surface */}
              <div className="flex-1 relative overflow-auto">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  style={{ fontSize: `${fontSize}px` }}
                  spellCheck={false}
                  className="w-full h-full p-3 bg-transparent text-[#F5F5F5] font-mono resize-none focus:outline-none leading-6 selection:bg-[#C5A059]/30 selection:text-[#C5A059] whitespace-pre"
                />
              </div>
            </div>
          ) : (
            /* test_solution.py viewer */
            <div className="flex-1 flex overflow-hidden">
              <div className="w-11 py-3 select-none bg-[#0A0A0A] text-[#737373]/60 text-right pr-3 font-mono text-xs space-y-0 border-r border-[#262626]">
                {testFileCode.split('\n').map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <pre
                style={{ fontSize: `${fontSize}px` }}
                className="flex-1 p-3 text-[#A0A0A0] font-mono overflow-auto leading-6 select-text bg-transparent"
              >
                {testFileCode}
              </pre>
            </div>
          )}
        </div>

        {/* BOTTOM SPLIT PANE: Test Runner & Output Console (Fixed 40% height ~ 280px) */}
        <div className="h-72 flex flex-col bg-[#141414] border-t border-[#262626]">
          {/* Console Tabs Header */}
          <div className="h-10 bg-[#181818] flex items-center justify-between px-4 select-none border-b border-[#262626]">
            <div className="flex items-center gap-2 h-full">
              <button
                onClick={() => setBottomTab('tests')}
                className={`h-full px-3 text-xs font-semibold flex items-center gap-1.5 relative transition-colors ${
                  bottomTab === 'tests'
                    ? 'text-[#C5A059]'
                    : 'text-[#A0A0A0] hover:text-[#F5F5F5]'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>{lang === 'fr' ? 'Console & Tests unitaires' : 'Console & Unit Tests'}</span>
                <span className="px-1.5 py-0.2 bg-[#C5A059]/20 text-[#C5A059] font-mono text-[10px] rounded-full">
                  3/3
                </span>
                {bottomTab === 'tests' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059]" />
                )}
              </button>

              <button
                onClick={() => setBottomTab('terminal')}
                className={`h-full px-3 text-xs font-medium flex items-center gap-1.5 relative transition-colors ${
                  bottomTab === 'terminal'
                    ? 'text-[#C5A059]'
                    : 'text-[#A0A0A0] hover:text-[#F5F5F5]'
                }`}
              >
                <Terminal className="w-4 h-4 text-[#DFC287]" />
                <span>{lang === 'fr' ? 'Terminal interactif' : 'Live Terminal'}</span>
                {bottomTab === 'terminal' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059]" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-3 font-mono text-[11px] text-[#737373]">
              <span className="flex items-center gap-1.5 text-[#C5A059]">
                <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping" />
                PyPy 3.12.1 Engine
              </span>
              <span className="hidden sm:inline">• {executionTime} ms</span>
            </div>
          </div>

          {/* Tab 1 Body: Unit Tests Suite & Intelligent Pedagogy Banner */}
          {bottomTab === 'tests' && (
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {/* Intelligent Feedback Banner */}
              <div className="p-3.5 rounded-lg bg-[#1C1C1C] border border-[#C5A059]/20 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[#C5A059] font-bold tracking-[1.5px] uppercase">
                      {challenge.aiFeedback.title}
                    </span>
                    <span className="font-mono text-[11px] text-[#DFC287] font-semibold">
                      {challenge.aiFeedback.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#F5F5F5] leading-relaxed">
                    {challenge.aiFeedback.text}
                  </p>
                </div>
              </div>

              {/* Test Cases Suite Grid */}
              <div className="space-y-1.5">
                {challenge.testCases.map((tc) => (
                  <div
                    key={tc.id}
                    className="p-2.5 bg-[#181818] rounded-md border border-[#262626] flex items-center justify-between font-mono text-xs hover:bg-[#1C1C1C] transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-5 h-5 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-[#F5F5F5] font-semibold truncate">
                        {tc.name}
                      </span>
                      <span className="hidden md:inline text-[#737373] truncate">
                        {tc.invocation}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-[#DFC287]">{tc.expectedOutput}</span>
                      <span className="px-2 py-0.5 rounded bg-[#C5A059]/20 text-[#C5A059] text-[10px] font-bold tracking-wider">
                        PASSED
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2 Body: Raw Interactive Terminal */}
          {bottomTab === 'terminal' && (
            <div className="flex-1 p-4 font-mono text-xs bg-[#0F172A] text-[#F8FAFC] overflow-y-auto space-y-2 select-text terminal-window preserve-dark">
              {terminalOutput.map((line, idx) => (
                <div
                  key={idx}
                  className={`${
                    line.startsWith('user@')
                      ? 'text-[#C5A059]'
                      : line.startsWith('[Process')
                      ? 'text-[#737373]'
                      : 'text-[#F5F5F5]'
                  }`}
                >
                  {line}
                </div>
              ))}
              <div className="flex items-center gap-2 text-[#C5A059]">
                <span>user@pythor:~/workspace$</span>
                <span className="w-2 h-4 bg-[#C5A059] inline-block animate-pulse" />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
