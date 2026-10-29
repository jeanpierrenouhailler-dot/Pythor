import React from 'react';

interface PythorLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showSubtitle?: boolean;
  className?: string;
}

export const PythorLogo: React.FC<PythorLogoProps> = ({
  size = 'md',
  showText = true,
  showSubtitle = false,
  className = '',
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-xl',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  return (
    <div className={`flex items-center space-x-2.5 ${className}`}>
      {/* Visual Logo Icon: Stylized Shield with Python Snake Curve & Code Accent */}
      <div
        className={`${iconDimensions[size]} relative rounded-xl bg-gradient-to-tr from-cyan-600 via-indigo-600 to-amber-500 p-0.5 flex items-center justify-center shadow-md shadow-cyan-500/25 ring-1 ring-cyan-400/40 shrink-0 group`}
      >
        <div className="w-full h-full bg-slate-950/85 rounded-[10px] flex items-center justify-center overflow-hidden relative">
          {/* Subtle dual-color snake geometry overlay */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-4/5 h-4/5 text-cyan-400 transform group-hover:scale-105 transition-transform"
          >
            {/* Upper Snake Head & Curve in Python Cyan */}
            <path
              d="M12 2C8.686 2 6 4.686 6 8v2h6v2H4C2.895 12 2 12.895 2 14v4c0 3.314 2.686 6 6 6h4v-2H8c-2.209 0-4-1.791-4-4v-2h8v-2h8c1.105 0 2-.895 2-2V8c0-3.314-2.686-6-6-6h-4z"
              fill="url(#pythor-blue-grad)"
              fillOpacity="0.9"
            />
            {/* Lower Snake Curve in Python Amber */}
            <path
              d="M12 22c3.314 0 6-2.686 6-6v-2h-6v-2h8c1.105 0 2-.895 2-2v-4c0-3.314-2.686-6-6-6h-4v2h4c2.209 0 4 1.791 4 4v2h-8v2H4c-1.105 0-2 .895-2 2v6c0 3.314 2.686 6 6 6h4z"
              fill="url(#pythor-amber-grad)"
              fillOpacity="0.85"
            />
            {/* Graduation Cap / Sparkle Accent in Center */}
            <circle cx="9" cy="6" r="1.2" fill="#38bdf8" />
            <circle cx="15" cy="18" r="1.2" fill="#fbbf24" />
            <defs>
              <linearGradient id="pythor-blue-grad" x1="2" y1="2" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38bdf8" />
                <stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="pythor-amber-grad" x1="12" y1="12" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fbbf24" />
                <stop offset="1" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center space-x-1.5">
            <span className={`${textSizes[size]} font-black tracking-tight text-white`}>
              Pythor
            </span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              PWA
            </span>
          </div>
          {showSubtitle && (
            <span className="text-[10px] font-medium text-slate-400 -mt-0.5">
              10 Certifications Python
            </span>
          )}
        </div>
      )}
    </div>
  );
};
