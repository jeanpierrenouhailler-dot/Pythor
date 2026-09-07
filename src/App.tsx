import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { FlashcardsSrsView } from './components/views/FlashcardsSrsView';
import { pcapFlashcardsData, pcapSyllabusSections } from './data/pcapData';
import { CheckCircle2, ShieldCheck, Terminal, Award } from 'lucide-react';

export function App() {
  const [selectedSection, setSelectedSection] = useState<string>('Section 4');

  // Count reviewed cards from localStorage
  const getReviewedCount = () => {
    try {
      const saved = localStorage.getItem('pcap_srs_state');
      if (!saved) return 0;
      const parsed = JSON.parse(saved);
      return Object.keys(parsed).length;
    } catch {
      return 0;
    }
  };

  const reviewedCount = getReviewedCount();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Top Navigation */}
      <Navbar
        totalCards={pcapFlashcardsData.length}
        reviewedCount={reviewedCount}
        selectedSection={selectedSection}
        onSelectSection={setSelectedSection}
      />

      {/* Main Flashcards SRS View */}
      <main className="flex-1 py-4">
        <FlashcardsSrsView
          cards={pcapFlashcardsData}
          selectedSection={selectedSection}
          onSelectSection={setSelectedSection}
        />
      </main>

      {/* Footer Exam Blueprint Bar */}
      <footer className="border-t border-slate-800/80 bg-slate-950/90 py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold text-slate-200">
              PCAP-31-03 Certified Associate in Python Programming
            </span>
            <span className="text-slate-500">|</span>
            <span>Python Institute Official Alignment</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {pcapSyllabusSections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setSelectedSection(`Section ${sec.number}`)}
                className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-md transition-colors ${
                  selectedSection === `Section ${sec.number}`
                    ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="font-mono font-medium">Sec {sec.number}</span>
                <span className="text-[10px] text-slate-400">({sec.weight})</span>
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
