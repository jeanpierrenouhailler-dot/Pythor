import React from 'react';
import { TrackId, CertificationTrack } from '../types';
import { CertificationTrackCard } from './CertificationTrackCard';
import { availableCertificationTracks } from '../data/mockData';
import { Award, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

interface CertificationTrackSelectorProps {
  activeTrack: TrackId;
  onSelectTrack: (trackId: TrackId) => void;
  showAll?: boolean;
}

export const CertificationTrackSelector: React.FC<CertificationTrackSelectorProps> = ({
  activeTrack,
  onSelectTrack,
  showAll = true,
}) => {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center">
            <Award className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase font-mono">
              Official Python Institute Certification Track
            </h2>
            <p className="text-xs text-neutral-400">
              Select your certification target to tailor the curriculum syllabus, challenges, and exam simulator
            </p>
          </div>
        </div>

        {/* Quick Segmented Toggle */}
        <div className="flex items-center p-1 bg-[#141414] rounded-xl border border-[#262626] self-start sm:self-auto">
          {availableCertificationTracks.map((track) => {
            const isSelected = track.id === activeTrack;
            const isPcap = track.id === 'pcap-31-03';
            return (
              <button
                key={track.id}
                onClick={() => onSelectTrack(track.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isSelected
                    ? isPcap
                      ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/20'
                      : 'bg-[#C5A059] text-black font-semibold shadow-md shadow-[#C5A059]/20'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                <span>{track.code}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Certification Track Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {availableCertificationTracks.map((track) => (
          <CertificationTrackCard
            key={track.id}
            track={track}
            isActive={track.id === activeTrack}
            onSelect={() => onSelectTrack(track.id)}
          />
        ))}
      </div>
    </div>
  );
};
