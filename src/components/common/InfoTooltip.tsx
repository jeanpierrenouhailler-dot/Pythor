import React, { useState, useRef, useEffect } from 'react';
import { HelpCircle, Info, X, Lightbulb } from 'lucide-react';
import { useNoviceMode } from '../../context/NoviceModeContext';

interface InfoTooltipProps {
  title?: string;
  text?: string;
  content?: string;
  tip?: string;
  noviceTip?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  children?: React.ReactNode;
  iconOnly?: boolean;
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({
  title,
  text,
  content,
  tip,
  noviceTip,
  position = 'top',
  className = '',
  children,
  iconOnly = true,
}) => {
  const displayText = text || content || '';
  const displayTip = tip || noviceTip;
  const { isNoviceMode } = useNoviceMode();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex items-center align-middle ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {children ? (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="cursor-pointer"
        >
          {children}
        </div>
      ) : (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className={`p-1 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
            isNoviceMode
              ? 'text-cyan-400 hover:text-cyan-300 bg-cyan-950/60 ring-1 ring-cyan-500/40 hover:bg-cyan-900/60 shadow-sm shadow-cyan-500/20'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
          }`}
          aria-label={title || 'Aide contextuelle pour utilisateur novice'}
          title={title || 'Cliquez pour afficher l’explication'}
        >
          <HelpCircle className="w-3.5 h-3.5" />
        </button>
      )}

      {/* Floating Tooltip Bubble */}
      {isOpen && (
        <div
          role="tooltip"
          className={`absolute z-50 w-72 sm:w-80 p-3.5 rounded-2xl bg-slate-900/95 border border-cyan-500/50 text-slate-100 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-150 ${positionClasses[position]}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-2 mb-1.5 pb-1 border-b border-slate-800">
            <div className="flex items-center space-x-1.5 text-cyan-300 font-bold text-xs">
              <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{title || 'Guide & Explication'}</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-0.5 rounded transition-colors"
              aria-label="Fermer l’infobulle"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-normal">
            {displayText}
          </p>

          {displayTip && (
            <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-start space-x-1.5 text-[11px] text-amber-300 bg-amber-500/10 px-2 py-1.5 rounded-xl border border-amber-500/20">
              <Lightbulb className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-400" />
              <span className="leading-tight">{displayTip}</span>
            </div>
          )}

          {/* Small Arrow indicator */}
          <div
            className={`absolute w-2 h-2 bg-slate-900 border-slate-800 transform rotate-45 ${
              position === 'top'
                ? 'top-full -mt-1 left-1/2 -translate-x-1/2 border-r border-b'
                : position === 'bottom'
                ? 'bottom-full -mb-1 left-1/2 -translate-x-1/2 border-l border-t'
                : position === 'left'
                ? 'left-full -ml-1 top-1/2 -translate-y-1/2 border-t border-r'
                : 'right-full -mr-1 top-1/2 -translate-y-1/2 border-b border-l'
            }`}
          />
        </div>
      )}
    </div>
  );
};
