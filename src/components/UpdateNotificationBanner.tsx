import React from 'react';
import { Sparkles, RefreshCw, X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useSystemSettings } from '../context/SystemSettingsContext';

export const UpdateNotificationBanner: React.FC = () => {
  const { settings, installAndRestart, dismissUpdateNotice, setIsSettingsOpen } = useSystemSettings();

  // Only display banner if update is prepared and ready
  if (settings.status !== 'ready' || !settings.autoPreparedInBackground) {
    return null;
  }

  const version = settings.availableVersion || 'v3.12.5';

  return (
    <aside
      aria-label="System update available"
      className="fixed bottom-5 right-5 z-40 max-w-md w-full p-4 rounded-2xl bg-slate-900/95 border border-emerald-500/40 shadow-2xl shadow-emerald-950/40 backdrop-blur-md text-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start space-x-3">
          <div className="p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 mt-0.5 shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Automatic Background Update
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                {version}
              </span>
            </div>
            <h4 className="text-sm font-semibold text-slate-100 mt-0.5">
              New Version Prepared in Background
            </h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Downloaded and staged silently into local cache. No study data or active flashcard session will be lost.
            </p>
          </div>
        </div>

        <button
          onClick={dismissUpdateNotice}
          className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Dismiss update notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center justify-end space-x-2.5 mt-3.5 pt-3 border-t border-slate-800/80">
        <button
          onClick={() => {
            setIsSettingsOpen(true);
            dismissUpdateNotice();
          }}
          className="px-3 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
        >
          View Release Notes
        </button>

        <button
          onClick={installAndRestart}
          className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 transition-all flex items-center space-x-1.5"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Restart & Apply</span>
        </button>
      </div>
    </aside>
  );
};
