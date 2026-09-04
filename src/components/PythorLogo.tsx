import React from 'react';

interface PythorLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
  versionBadge?: string;
}

export const PythorLogo: React.FC<PythorLogoProps> = ({
  size = 36,
  className = '',
  showText = false,
  versionBadge = 'v3.12 PRO',
}) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div
        className="relative flex items-center justify-center shrink-0 rounded-xl overflow-hidden shadow-lg shadow-[#C5A059]/10 border border-[#C5A059]/30"
        style={{ width: size, height: size }}
      >
        {/* Vector representation faithful to Pythor Logo with Sophisticated Dark gold aesthetic */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <rect width="100" height="100" rx="22" fill="#0A0A0A" />
          <rect width="100" height="100" rx="22" fill="url(#bg-gradient)" />
          
          {/* Subtle Outer Glow */}
          <circle cx="50" cy="50" r="38" fill="#C5A059" opacity="0.2" filter="url(#glow)" />
          
          {/* Upper Snake (Champagne Gold) */}
          <path
            d="M 28 32 
               C 28 20, 72 20, 72 32 
               C 72 44, 48 44, 48 54 
               C 48 54, 28 54, 28 32 Z"
            fill="url(#gold-snake)"
            filter="url(#subtle-shadow)"
          />
          {/* Gold snake head rounded cap */}
          <path
            d="M 32 24 C 24 24 24 40 32 40 C 40 40 40 24 32 24 Z"
            fill="url(#gold-snake)"
          />
          {/* Eye of upper snake */}
          <circle cx="36" cy="29" r="3.5" fill="#0A0A0A" />

          {/* Lower Snake (Antique Bronze Gold) */}
          <path
            d="M 72 68 
               C 72 80, 28 80, 28 68 
               C 28 56, 52 56, 52 46 
               C 52 46, 72 46, 72 68 Z"
            fill="url(#bronze-snake)"
            filter="url(#subtle-shadow)"
          />
          {/* Bronze snake head rounded cap */}
          <path
            d="M 68 76 C 76 76 76 60 68 60 C 60 60 60 76 68 76 Z"
            fill="url(#bronze-snake)"
          />
          {/* Eye of lower snake */}
          <circle cx="64" cy="71" r="3.5" fill="#0A0A0A" />

          {/* Center Lightning Bolt */}
          <path
            d="M 52 38 L 45 50 L 51 50 L 47 62 L 56 48 L 50 48 Z"
            fill="#F5F5F5"
            filter="url(#lightning-glow)"
          />

          <defs>
            <linearGradient id="bg-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1A1A1A" />
              <stop offset="100%" stopColor="#0A0A0A" />
            </linearGradient>
            <linearGradient id="gold-snake" x1="28" y1="20" x2="72" y2="54" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#DFC287" />
              <stop offset="100%" stopColor="#C5A059" />
            </linearGradient>
            <linearGradient id="bronze-snake" x1="72" y1="80" x2="28" y2="46" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A38342" />
              <stop offset="100%" stopColor="#6E5627" />
            </linearGradient>
            <filter id="glow" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="8" />
            </filter>
            <filter id="subtle-shadow" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.6" />
            </filter>
            <filter id="lightning-glow" x="35" y="30" width="30" height="40" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#C5A059" floodOpacity="0.9" />
            </filter>
          </defs>
        </svg>
      </div>

      {showText && (
        <div className="flex items-center gap-2 select-none">
          <span className="font-serif text-xl tracking-[1.5px] uppercase font-semibold text-[#C5A059]">
            Pythor
          </span>
          {versionBadge && (
            <span className="px-1.5 py-0.5 bg-[#141414] rounded border border-[#C5A059]/40 font-mono text-[10px] tracking-wider text-[#DFC287]">
              {versionBadge}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
