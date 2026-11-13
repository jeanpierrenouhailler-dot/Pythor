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
      className="h-10 w-[clamp(7.5rem,24vw,13rem)] min-w-0 truncate rounded-lg border border-[var(--py-color-border)] bg-[var(--py-color-surface)] px-2 text-sm font-medium text-[var(--py-color-text)] outline-none transition-colors hover:border-[var(--py-color-primary)] focus-visible:ring-2 focus-visible:ring-[var(--py-color-focus)] sm:w-[15rem] sm:px-3"
    >
      {CERTIFICATIONS.map(({ id, info, levelFr }) => {
        const level = isFrench ? levelFr : info.level;
        const compactLevel = level.length > 18 ? `${level.slice(0, 16)}…` : level;
        return (
          <option key={id} value={id}>
            {info.shortName} · {compactLevel}
          </option>
        );
      })}
    </select>
  </label>
);
