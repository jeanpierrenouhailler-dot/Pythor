import React from 'react';
import { CertificationTrack } from '../../types';
import { CERTIFICATIONS } from '../../data/certifications';

interface CertificationSelectorProps {
  value: CertificationTrack;
  onChange: (track: CertificationTrack) => void;
  isFrench: boolean;
  className?: string;
  label?: string;
}

export const CertificationSelector: React.FC<CertificationSelectorProps> = ({
  value,
  onChange,
  isFrench,
  className = '',
  label,
}) => (
  <label className={`inline-flex min-w-0 items-center gap-2 ${className}`}>
    {label && <span className="sr-only">{label}</span>}
    <select
      value={value}
      onChange={(event) => onChange(event.target.value as CertificationTrack)}
      aria-label={label || (isFrench ? 'Certification active' : 'Active certification')}
      className="min-w-0 max-w-full rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-2 text-sm font-semibold text-slate-100 outline-none transition-colors hover:border-cyan-500/60 focus-visible:ring-2 focus-visible:ring-cyan-400"
    >
      {CERTIFICATIONS.map(({ id, info, levelFr }) => (
        <option key={id} value={id}>
          {info.shortName} · {isFrench ? levelFr : info.level}
        </option>
      ))}
    </select>
  </label>
);
