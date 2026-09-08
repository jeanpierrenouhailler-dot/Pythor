import React, { useState } from 'react';
import {
  BookMarked,
  Search,
  Copy,
  Check,
  Code2,
  ShieldAlert,
  ArrowRight,
  Layers,
  Sparkles,
} from 'lucide-react';
import { AppView } from '../../types';

interface CheatsheetViewProps {
  onNavigate: (view: AppView, section?: string) => void;
}

export const CheatsheetView: React.FC<CheatsheetViewProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const dunderMethods = [
    { name: '__init__(self, ...)', category: 'Constructor', returns: 'Must return None', description: 'Instance initialization hook. Raising a return value other than None causes TypeError.' },
    { name: '__str__(self)', category: 'Representation', returns: 'str', description: 'Informal, readable string representation for str() and print(). If missing, falls back to __repr__().' },
    { name: '__repr__(self)', category: 'Representation', returns: 'str', description: 'Official string representation. Intended for developers and debugging. Default fallback when __str__ is undefined.' },
    { name: '__add__(self, other)', category: 'Operator Overloading', returns: 'Any', description: 'Implements binary addition + operator. e.g., a + b calls a.__add__(b).' },
    { name: '__sub__(self, other)', category: 'Operator Overloading', returns: 'Any', description: 'Implements subtraction - operator.' },
    { name: '__mul__(self, other)', category: 'Operator Overloading', returns: 'Any', description: 'Implements multiplication * operator.' },
    { name: '__eq__(self, other)', category: 'Comparison', returns: 'bool', description: 'Implements equality == comparison. Without this, == checks object identity (id).' },
    { name: '__lt__(self, other)', category: 'Comparison', returns: 'bool', description: 'Implements less-than < comparison. Enables list.sort() and sorted().' },
    { name: '__len__(self)', category: 'Container Protocol', returns: 'int >= 0', description: 'Called by len(). Must return a non-negative integer or raises TypeError.' },
    { name: '__getitem__(self, key)', category: 'Container Protocol', returns: 'Any', description: 'Enables index access obj[key] or slicing obj[start:stop].' },
    { name: '__dict__', category: 'Introspection Attribute', returns: 'dict', description: 'Dictionary containing writable attributes belonging to the instance or class namespace.' },
    { name: '__name__', category: 'Introspection Attribute', returns: 'str', description: 'Name of the class, module, or function. Does NOT exist directly on instance objects!' },
    { name: '__module__', category: 'Introspection Attribute', returns: 'str', description: 'Name of the module where the class was defined (__main__ if current script).' },
    { name: '__bases__', category: 'Introspection Attribute', returns: 'tuple of classes', description: 'Tuple containing immediate base superclasses. Exists on class objects only.' },
    { name: '__mro__', category: 'Method Resolution', returns: 'tuple of classes', description: 'Method Resolution Order tuple showing the lookup chain starting with the class and ending in object.' },
  ];

  const nameManglingRules = [
    { prefix: 'variable', meaning: 'Public attribute', example: 'obj.x', rule: 'Freely accessible and modifiable inside and outside the class.' },
    { prefix: '_variable', meaning: 'Protected convention', example: 'obj._x', rule: 'PEP 8 convention indicating internal usage; NOT enforced by Python runtime; no mangling.' },
    { prefix: '__variable', meaning: 'Private (Mangled)', example: 'obj.__x -> obj._Class__x', rule: 'Enforced at compile-time: Python prepends _ClassName to prevent accidental subclass collision.' },
    { prefix: '__variable__', meaning: 'Special Dunder', example: 'obj.__str__', rule: 'System-reserved identifiers; NOT mangled by Python!' },
  ];

  const exceptionHierarchy = [
    { parent: 'BaseException', child: 'Exception', note: 'Root of all standard exceptions (skips KeyboardInterrupt and SystemExit)' },
    { parent: 'Exception', child: 'ArithmeticError', note: 'Base for FloatingPointError, OverflowError, ZeroDivisionError' },
    { parent: 'ArithmeticError', child: 'ZeroDivisionError', note: 'Raised on division or modulo by zero' },
    { parent: 'Exception', child: 'LookupError', note: 'Base for IndexError (sequences) and KeyError (mappings)' },
    { parent: 'Exception', child: 'ValueError', note: 'Right type but inappropriate value (e.g. int("abc"))' },
    { parent: 'Exception', child: 'TypeError', note: 'Operation applied to an object of inappropriate type' },
  ];

  const filteredDunders = dunderMethods.filter(
    (d) =>
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center space-x-2">
            <BookMarked className="w-5 h-5 text-cyan-400" />
            <h1 className="text-xl sm:text-2xl font-bold text-white">PCAP-31-03 Cheatsheet & Dunder Guide</h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Quick-reference compendium for special dunder methods, name mangling mechanics, and exception inheritance.
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search dunder or gotcha..."
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>
      </div>

      {/* Section 1: Special Dunder Methods Table */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-100 flex items-center space-x-2">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>Section 4: Essential Dunder (Magic) Methods</span>
          </h2>
          <span className="text-xs text-slate-500">{filteredDunders.length} entries</span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 uppercase font-semibold text-[11px]">
              <tr>
                <th className="px-4 py-3">Dunder Identifier</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Expected Return</th>
                <th className="px-4 py-3">PCAP Exam Role</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredDunders.map((dunder, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="px-4 py-3 font-mono font-bold text-cyan-300">
                    {dunder.name}
                  </td>
                  <td className="px-4 py-3 text-slate-400">
                    <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px]">
                      {dunder.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-emerald-400 text-[11px]">
                    {dunder.returns}
                  </td>
                  <td className="px-4 py-3 text-slate-300 max-w-md">
                    {dunder.description}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => handleCopy(dunder.name, dunder.name)}
                      className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                      title="Copy"
                    >
                      {copiedKey === dunder.name ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: Name Mangling & Access Mechanics */}
      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-100 flex items-center space-x-2">
          <ShieldAlert className="w-4 h-4 text-amber-400" />
          <span>Name Mangling & Underscore Conventions</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {nameManglingRules.map((rule, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-cyan-300">{rule.prefix}</span>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-800 text-amber-300">
                  {rule.meaning}
                </span>
              </div>
              <div className="p-2 rounded-lg bg-slate-950 font-mono text-xs text-slate-300 border border-slate-800/80">
                {rule.example}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{rule.rule}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Built-in Exception Hierarchy (PCAP Core) */}
      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-100 flex items-center space-x-2">
          <Layers className="w-4 h-4 text-purple-400" />
          <span>Python Institute Built-in Exception Hierarchy</span>
        </h2>

        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <p className="text-xs text-slate-400">
            Rule of Exception Ordering: Subclasses must be caught BEFORE their superclasses in <code className="text-cyan-300">try...except</code> blocks; otherwise, the broader parent clause shadows the child clause.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
            {exceptionHierarchy.map((exc, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
                <div className="flex items-center space-x-1.5 font-mono text-cyan-300 mb-1">
                  <span className="text-slate-400">{exc.parent}</span>
                  <span className="text-slate-600">→</span>
                  <span className="font-bold text-amber-300">{exc.child}</span>
                </div>
                <p className="text-slate-400 text-[11px]">{exc.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
