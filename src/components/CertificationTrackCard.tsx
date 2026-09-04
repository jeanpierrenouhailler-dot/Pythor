import React from 'react';
import { TrackId, CertificationTrack } from '../types';
import { Check, CheckCircle2, ChevronRight, Award, Sparkles, BookOpen, Clock, HelpCircle } from 'lucide-react';

interface CertificationTrackCardProps {
  track: CertificationTrack;
  isActive: boolean;
  onSelect: () => void;
  compact?: boolean;
}

export const CertificationTrackCard: React.FC<CertificationTrackCardProps> = ({
  track,
  isActive,
  onSelect,
  compact = false,
}) => {
  const isPcap = track.id === 'pcap-31-03';

  return (
    <div
      onClick={onSelect}
      className={`relative cursor-pointer transition-all duration-300 rounded-2xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden group select-none ${
        isActive
          ? isPcap
            ? 'bg-[#0E1526] border-2 border-[#2563EB] shadow-[0_0_25px_rgba(37,99,235,0.25)] ring-1 ring-[#3B82F6]/50'
            : 'bg-[#15130E] border-2 border-[#C5A059] shadow-[0_0_25px_rgba(197,160,89,0.25)] ring-1 ring-[#DFC287]/50'
          : 'bg-[#111111] border border-[#262626] hover:border-[#383838] hover:bg-[#151515]'
      }`}
    >
      {/* Background Accent Subtle Glow */}
      {isActive && (
        <div
          className={`absolute -right-12 -bottom-12 w-44 h-44 rounded-full blur-3xl pointer-events-none opacity-20 ${
            isPcap ? 'bg-[#2563EB]' : 'bg-[#C5A059]'
          }`}
        />
      )}

      <div className="flex items-start gap-4">
        {/* Python Institute Official-Style Circular Emblem Badge */}
        <div className="relative flex-shrink-0">
          <div
            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center p-1.5 shadow-xl transition-transform duration-300 group-hover:scale-105 ${
              isPcap
                ? 'bg-gradient-to-b from-[#1E3A8A] via-[#172554] to-[#0A1128] border-2 border-white/80 ring-2 ring-[#2563EB]/60'
                : 'bg-gradient-to-b from-[#3B2F15] via-[#241D0D] to-[#120F07] border-2 border-[#DFC287] ring-2 ring-[#C5A059]/60'
            }`}
          >
            {/* Top curved/small label */}
            <span className="text-[7px] sm:text-[8px] font-mono uppercase tracking-wider text-white/90 font-bold text-center leading-none">
              PYTHON INST.
            </span>

            {/* Inner Shield / Logo Icon */}
            <div className="my-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <span
                className={`text-[9px] sm:text-[11px] font-black tracking-tighter ${
                  isPcap ? 'text-blue-300' : 'text-[#DFC287]'
                }`}
              >
                {isPcap ? 'PCAP' : 'PCEP'}
              </span>
            </div>

            {/* Sub-label inside badge */}
            <span className="text-[6px] sm:text-[7px] text-white/80 uppercase tracking-tight text-center leading-none px-0.5">
              {isPcap ? 'Associate' : 'Entry-Level'}
            </span>

            {/* Stars */}
            <div className="flex items-center gap-0.5 mt-0.5">
              <span className="text-[7px] text-amber-300">★</span>
              <span className="text-[7px] text-amber-300">★</span>
              {isPcap && <span className="text-[7px] text-amber-300">★</span>}
            </div>
          </div>

          {/* Active green checked badge overlay */}
          {isActive && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#10B981] border-2 border-[#0A0A0A] flex items-center justify-center shadow-md">
              <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
            </div>
          )}
        </div>

        {/* Text Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3
              className={`text-xl sm:text-2xl font-bold tracking-tight text-white ${
                isActive ? (isPcap ? 'text-blue-100' : 'text-amber-100') : 'text-neutral-200'
              }`}
            >
              {track.code}
            </h3>

            {/* Status Pill */}
            {isActive ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/40 shadow-sm font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                Active
              </span>
            ) : (
              <span className="text-xs text-neutral-400 font-medium px-2 py-0.5 rounded bg-white/5 border border-white/10">
                Switch Track
              </span>
            )}
          </div>

          <p className="text-sm sm:text-base font-medium text-white/95 leading-snug mt-0.5">
            {track.subtitle.split(' ')[0]} {track.subtitle.split(' ')[1]} {track.subtitle.split(' ')[2]}
            <br />
            {track.subtitle.split(' ').slice(3).join(' ')}
          </p>

          <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
            {track.description}
          </p>
        </div>
      </div>

      {/* Footer Specs Row */}
      <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
        <div className="flex items-center gap-3 text-neutral-300">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-neutral-400" />
            <strong className="text-white">{track.sectionsCount}</strong> Sections ({track.chaptersRange})
          </span>
          <span className="text-neutral-600">•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-neutral-400" />
            {track.examDurationMinutes} min
          </span>
          <span className="text-neutral-600">•</span>
          <span>{track.examQuestionsCount} Qs (Pass {track.passingScorePercent}%)</span>
        </div>

        <div className="flex items-center gap-1">
          {isActive ? (
            <span
              className={`text-[11px] font-semibold flex items-center gap-1 ${
                isPcap ? 'text-blue-400' : 'text-amber-400'
              }`}
            >
              Current Learning Syllabus
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          ) : (
            <span className="text-[11px] text-neutral-400 flex items-center gap-1 group-hover:text-white transition-colors">
              Click to activate
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
