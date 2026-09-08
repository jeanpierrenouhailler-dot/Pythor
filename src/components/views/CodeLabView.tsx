import React, { useState } from 'react';
import {
  Code2,
  Play,
  CheckCircle2,
  Terminal,
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { AppView } from '../../types';

interface CodeLabViewProps {
  onNavigate: (view: AppView, section?: string) => void;
}

interface CodeLabExperiment {
  id: string;
  title: string;
  category: string;
  description: string;
  code: string;
  output: string;
  explanation: string;
  pcapRule: string;
}

export const CodeLabView: React.FC<CodeLabViewProps> = ({ onNavigate }) => {
  const experiments: CodeLabExperiment[] = [
    {
      id: 'mro-diamond',
      title: 'Diamond Inheritance & C3 MRO Order',
      category: 'Inheritance & MRO',
      description: 'See how Python resolves methods in diamond multiple inheritance using C3 Linearization.',
      code: `class A:
    def action(self):
        return "A"

class B(A):
    def action(self):
        return "B"

class C(A):
    def action(self):
        return "C"

class D(B, C):
    pass

d = D()
print("Method resolved:", d.action())
print("MRO tuple:", [cls.__name__ for cls in D.__mro__])`,
      output: `Method resolved: B
MRO tuple: ['D', 'B', 'C', 'A', 'object']`,
      explanation: 'D inherits from (B, C). Python searches D -> B -> C -> A -> object. Since B overrides action(), B is found first.',
      pcapRule: 'C3 Linearization checks subclasses before common ancestor superclasses.',
    },
    {
      id: 'name-mangling',
      title: 'Double Underscore Name Mangling',
      category: 'Encapsulation & Mangling',
      description: 'Demonstrating how Python transforms __var to _ClassName__var at compile time.',
      code: `class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Mangled!

acc = BankAccount(1000)

# Direct access will fail:
try:
    print(acc.__balance)
except AttributeError as e:
    print("Direct access:", type(e).__name__)

# Accessing via mangled name:
print("Mangled name value:", acc._BankAccount__balance)
print("Instance attributes:", list(acc.__dict__.keys()))`,
      output: `Direct access: AttributeError
Mangled name value: 1000
Instance attributes: ['_BankAccount__balance']`,
      explanation: 'Double leading underscores are mechanically replaced with _ClassName__attr. Python has no private keyword.',
      pcapRule: 'Names with two leading underscores and at most one trailing underscore are mangled.',
    },
    {
      id: 'shadowing-trap',
      title: 'Class vs. Instance Variable Shadowing',
      category: 'Variable Scopes',
      description: 'Illustrates how modifying self.x creates an instance variable and shadows the class variable.',
      code: `class Counter:
    count = 0  # Class variable

c1 = Counter()
c2 = Counter()

c1.count = 10  # Creates instance attribute on c1!

print("c1.count:", c1.count)
print("c2.count:", c2.count)
print("Counter.count:", Counter.count)
print("c1.__dict__:", c1.__dict__)
print("c2.__dict__:", c2.__dict__)`,
      output: `c1.count: 10
c2.count: 0
Counter.count: 0
c1.__dict__: {'count': 10}
c2.__dict__: {}`,
      explanation: 'Assigning to c1.count does not touch Counter.count. It creates a local entry in c1.__dict__ that shadows the class attribute.',
      pcapRule: 'Assignment to an instance always writes to that instance namespace.',
    },
    {
      id: 'init-return',
      title: '__init__ Constructor Return TypeError Trap',
      category: 'Dunder Rules',
      description: 'Proving that returning any non-None value from __init__ causes a fatal TypeError at instantiation.',
      code: `class InvalidClass:
    def __init__(self):
        return 42  # Trap! Must return None

try:
    obj = InvalidClass()
except TypeError as err:
    print("Caught:", err)`,
      output: `Caught: __init__() should return None, not 'int'`,
      explanation: 'The __init__ method is an initializer, not the instance creator (__new__ does that). It must strictly return None.',
      pcapRule: '__init__() must return None or have no return statement; otherwise TypeError is raised.',
    },
  ];

  const [activeExp, setActiveExp] = useState<CodeLabExperiment>(experiments[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setHasRun(false);
    setTimeout(() => {
      setIsRunning(false);
      setHasRun(true);
    }, 400);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center space-x-2">
            <Code2 className="w-5 h-5 text-indigo-400" />
            <h1 className="text-xl sm:text-2xl font-bold text-white">Python OOP Code Lab & Sandbox</h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Interactive syntax runner and mechanics breakdown for the trickiest PCAP-31-03 topics.
          </p>
        </div>

        <button
          onClick={() => onNavigate('flashcards', 'Section 4')}
          className="self-start sm:self-auto px-4 py-2 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/25 transition-colors flex items-center space-x-2"
        >
          <span>Jump to 100 Flashcards</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Experiments Navigation Sidebar */}
        <div className="lg:col-span-4 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block px-1 mb-2">
            PCAP Code Experiments
          </span>
          {experiments.map((exp) => {
            const isActive = activeExp.id === exp.id;
            return (
              <button
                key={exp.id}
                onClick={() => {
                  setActiveExp(exp);
                  setHasRun(true);
                }}
                className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                  isActive
                    ? 'bg-indigo-950/40 border-indigo-500/50 text-indigo-200 shadow-md ring-1 ring-indigo-400/20'
                    : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/60 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                    {exp.category}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-100">{exp.title}</h4>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{exp.description}</p>
              </button>
            );
          })}
        </div>

        {/* Code Runner & Console Output Main Stage */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-indigo-400 font-bold">{activeExp.category}</span>
                <h3 className="text-base font-bold text-white">{activeExp.title}</h3>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleCopy(activeExp.code)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  title="Copy code"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>

                <button
                  onClick={handleRun}
                  disabled={isRunning}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/20 flex items-center space-x-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isRunning ? 'Executing...' : 'Run Code'}</span>
                </button>
              </div>
            </div>

            {/* Python Code Window */}
            <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto">
              <pre>{activeExp.code}</pre>
            </div>

            {/* Terminal Console Output */}
            <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Console stdout</span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-emerald-400 whitespace-pre-wrap">
                {hasRun ? activeExp.output : 'Press "Run Code" to inspect output...'}
              </div>
            </div>

            {/* Conceptual Breakdown & PCAP Rule */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-2">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <strong className="text-slate-200">How Python Executes This:</strong>
              </div>
              <p className="text-slate-400 leading-relaxed">{activeExp.explanation}</p>
              <div className="pt-2 border-t border-slate-800/80">
                <span className="font-mono text-cyan-300 font-semibold">PCAP Blueprint Rule: </span>
                <span className="text-slate-300">{activeExp.pcapRule}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
