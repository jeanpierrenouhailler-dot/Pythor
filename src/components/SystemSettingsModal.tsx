import React, { useState } from 'react';
import {
  X,
  RefreshCw,
  Zap,
  CheckCircle2,
  AlertCircle,
  Clock,
  Calendar,
  Layers,
  HardDrive,
  Radio,
  ChevronRight,
  Sparkles,
  RotateCcw,
  Check,
  ArrowRight,
  ShieldCheck,
  Sliders,
  Terminal,
  Download,
  Info,
} from 'lucide-react';
import { useSystemSettings } from '../context/SystemSettingsContext';
import { UpdateChannel } from '../types';

interface SystemSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SystemSettingsModal: React.FC<SystemSettingsModalProps> = ({ isOpen, onClose }) => {
  const {
    settings,
    checkForUpdates,
    forceUpdate,
    installAndRestart,
    setAutoUpdateEnabled,
    setCheckIntervalMinutes,
    setUpdateChannel,
    clearCache,
    simulateNewVersion,
  } = useSystemSettings();

  const [activeTab, setActiveTab] = useState<'updates' | 'diagnostics' | 'notes'>('updates');
  const [copiedStatus, setCopiedStatus] = useState(false);

  if (!isOpen) return null;

  // Format Last Checked nicely (relative + absolute)
  const formatLastChecked = (timestamp: number | null) => {
    if (!timestamp) return 'Never checked';
    const diffSeconds = Math.floor((Date.now() - timestamp) / 1000);
    let relative = '';
    if (diffSeconds < 60) {
      relative = 'Just now';
    } else if (diffSeconds < 3600) {
      const mins = Math.floor(diffSeconds / 60);
      relative = `${mins} minute${mins > 1 ? 's' : ''} ago`;
    } else {
      const hours = Math.floor(diffSeconds / 3600);
      relative = `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }

    const fullDate = new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    return { relative, fullDate };
  };

  const lastCheckedInfo = formatLastChecked(settings.lastChecked);

  const isChecking = settings.status === 'checking';
  const isDownloading = settings.status === 'downloading';
  const isReady = settings.status === 'ready';

  const handleCopyDiagnostics = () => {
    const report = {
      version: settings.currentVersion,
      build: settings.buildNumber,
      releaseDate: settings.releaseDate,
      lastChecked: settings.lastChecked ? new Date(settings.lastChecked).toISOString() : null,
      autoUpdateEnabled: settings.autoUpdateEnabled,
      checkIntervalMinutes: settings.checkIntervalMinutes,
      channel: settings.updateChannel,
      status: settings.status,
      availableVersion: settings.availableVersion,
    };
    navigator.clipboard.writeText(JSON.stringify(report, null, 2));
    setCopiedStatus(true);
    setTimeout(() => setCopiedStatus(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="system-settings-title"
    >
      {/* Darkened Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content Container */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-cyan-950/30 flex flex-col max-h-[92vh] z-10 overflow-hidden text-slate-100">
        {/* Header */}
        <div className="px-5 sm:px-6 py-4 border-b border-slate-800 bg-slate-950/90 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h2 id="system-settings-title" className="text-base sm:text-lg font-semibold text-slate-100 flex items-center space-x-2">
                <span>System Settings & Updates</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-medium">
                  {settings.currentVersion}
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Client release status, background update automation, and offline sync
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Close Settings Dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center space-x-1 px-6 pt-3 border-b border-slate-800/80 bg-slate-950/50">
          <button
            onClick={() => setActiveTab('updates')}
            className={`px-3.5 py-2 text-xs font-medium border-b-2 transition-colors flex items-center space-x-2 ${
              activeTab === 'updates'
                ? 'border-cyan-400 text-cyan-300 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isChecking || isDownloading ? 'animate-spin text-cyan-400' : ''}`} />
            <span>Update Manager</span>
            {isReady && (
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('notes')}
            className={`px-3.5 py-2 text-xs font-medium border-b-2 transition-colors flex items-center space-x-2 ${
              activeTab === 'notes'
                ? 'border-cyan-400 text-cyan-300 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Release Notes</span>
          </button>

          <button
            onClick={() => setActiveTab('diagnostics')}
            className={`px-3.5 py-2 text-xs font-medium border-b-2 transition-colors flex items-center space-x-2 ${
              activeTab === 'diagnostics'
                ? 'border-cyan-400 text-cyan-300 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Activity Log & Cache</span>
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {activeTab === 'updates' && (
            <>
              {/* PRIMARY HERO: Release Date, Version & Last Checked */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400 block mb-1">
                      Current Installed System
                    </span>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold font-mono text-slate-100">
                        {settings.currentVersion}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        ({settings.buildNumber})
                      </span>
                    </div>
                  </div>

                  {/* Status Pill */}
                  <div className="flex items-center space-x-2">
                    {isReady ? (
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Update Ready to Install</span>
                      </span>
                    ) : isDownloading ? (
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Preparing Version ({settings.progress}%)</span>
                      </span>
                    ) : isChecking ? (
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sky-500/15 text-sky-300 border border-sky-500/30">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Checking for Updates...</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                        <span>System Up-to-Date</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Metadata Grid: Release Date & Last Checked */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  {/* Release Date */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wide text-slate-400 font-semibold block">
                        Release Date
                      </span>
                      <span className="text-sm font-semibold text-slate-200 mt-0.5 block">
                        {settings.releaseDate}
                      </span>
                      <span className="text-[11px] text-slate-500 block mt-0.5">
                        Official Certified Associate candidate build
                      </span>
                    </div>
                  </div>

                  {/* Last Checked */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wide text-slate-400 font-semibold block">
                        Last Checked
                      </span>
                      <span className="text-sm font-semibold text-slate-200 mt-0.5 block">
                        {typeof lastCheckedInfo === 'object' ? lastCheckedInfo.relative : lastCheckedInfo}
                      </span>
                      <span className="text-[11px] text-slate-500 block mt-0.5 font-mono">
                        {typeof lastCheckedInfo === 'object' ? lastCheckedInfo.fullDate : ''}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar (when downloading or staging) */}
                {isDownloading && (
                  <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-cyan-300 font-medium flex items-center space-x-2">
                        <Download className="w-3.5 h-3.5 animate-bounce" />
                        <span>Downloading & preparing {settings.availableVersion}...</span>
                      </span>
                      <span className="font-mono text-cyan-300 font-bold">{settings.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-300"
                        style={{ width: `${settings.progress}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Compiling bytecode chunks and staging to offline browser IndexedDB storage...
                    </p>
                  </div>
                )}

                {/* Prepared Update Ready Card */}
                {isReady && (
                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span className="text-sm font-bold text-emerald-300">
                            Version {settings.availableVersion} Ready to Apply!
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1">
                          The update package was fully staged in the background. Restarting takes less than 1 second and preserves your active study history.
                        </p>
                      </div>
                      <button
                        onClick={installAndRestart}
                        className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 transition-all flex items-center space-x-1.5 shrink-0"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Restart Now</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Primary Action Buttons: "Check for Updates" & "Force Update" */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {/* CHECK FOR UPDATES BUTTON */}
                  <button
                    onClick={() => checkForUpdates(true)}
                    disabled={isChecking || isDownloading}
                    className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    title="Check remote repository for new releases and question banks"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isChecking ? 'animate-spin' : ''}`} />
                    <span>{isChecking ? 'Checking Updates...' : 'Check for Updates'}</span>
                  </button>

                  {/* FORCE UPDATE BUTTON */}
                  <button
                    onClick={forceUpdate}
                    disabled={isChecking || isDownloading}
                    className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-50 border border-slate-700 hover:border-amber-500/50 text-slate-200 hover:text-white font-semibold text-xs transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
                    title="Bypass local cache, purge transient buffers, and pull fresh binary bundle"
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Force Update</span>
                  </button>

                  {/* Staged Install button if ready */}
                  {isReady && (
                    <button
                      onClick={installAndRestart}
                      className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-sm transition-all"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                      <span>Install & Restart</span>
                    </button>
                  )}
                </div>
              </div>

              {/* AUTOMATIC BACKGROUND UPDATES CARD */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Radio className={`w-4 h-4 ${settings.autoUpdateEnabled ? 'text-emerald-400 animate-pulse' : 'text-slate-500'}`} />
                      <h3 className="text-sm font-semibold text-slate-100">
                        Automatic Background Updates
                      </h3>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        settings.autoUpdateEnabled
                          ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {settings.autoUpdateEnabled ? 'Active' : 'Disabled'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-lg">
                      Periodically checks and prepares new versions automatically in the background. When a new revision or updated PCAP-31-03 question bank is discovered, assets are silently downloaded and staged into offline storage without interrupting active flashcard recall.
                    </p>
                  </div>

                  {/* Toggle Switch */}
                  <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={settings.autoUpdateEnabled}
                      onChange={(e) => setAutoUpdateEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500" />
                  </label>
                </div>

                {/* Sub-settings when enabled */}
                {settings.autoUpdateEnabled && (
                  <div className="pt-3 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    {/* Check Interval */}
                    <div>
                      <label className="block text-slate-400 mb-1.5 font-medium">
                        Background Check Frequency
                      </label>
                      <select
                        value={settings.checkIntervalMinutes}
                        onChange={(e) => setCheckIntervalMinutes(Number(e.target.value))}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 text-xs focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                      >
                        <option value={5}>Every 5 minutes (Aggressive / Testing)</option>
                        <option value={15}>Every 15 minutes (Recommended)</option>
                        <option value={30}>Every 30 minutes</option>
                        <option value={60}>Every 1 hour</option>
                      </select>
                      <span className="text-[11px] text-slate-500 mt-1 block">
                        Silent query to CDN repository manifest
                      </span>
                    </div>

                    {/* Update Channel */}
                    <div>
                      <label className="block text-slate-400 mb-1.5 font-medium">
                        Update Channel
                      </label>
                      <select
                        value={settings.updateChannel}
                        onChange={(e) => setUpdateChannel(e.target.value as UpdateChannel)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 text-xs focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                      >
                        <option value="stable">Stable (PCAP-31-03 Official Syllabus)</option>
                        <option value="beta">Beta (Preview Section 5 OOP additions)</option>
                        <option value="nightly">Nightly (Python 3.12 / 3.13 edge syntax)</option>
                      </select>
                      <span className="text-[11px] text-slate-500 mt-1 block">
                        Channel determines release validation tier
                      </span>
                    </div>
                  </div>
                )}

                {/* Background worker status footer */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Background worker daemon active in browser runtime</span>
                  </div>

                  <button
                    onClick={simulateNewVersion}
                    className="text-cyan-400 hover:text-cyan-300 underline font-medium"
                    title="Simulates finding and staging a background release immediately"
                  >
                    Simulate background release test
                  </button>
                </div>
              </div>
            </>
          )}

          {activeTab === 'notes' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-sm font-bold text-cyan-300">
                      {settings.availableVersion ? settings.availableVersion : settings.currentVersion}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      {settings.availableVersion ? 'Incoming Release' : 'Installed Build'}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">{settings.releaseDate}</span>
                </div>

                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                    <span>
                      <strong>Section 3 Comprehensive Expansion</strong>: 100 deep-dive flashcards covering Function mechanics, Generator protocols (`iter()`, `yield from`), Lambda functions, Lexical Closures, and File Stream buffering (`seek`, `tell`, `bytearray`).
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                    <span>
                      <strong>Section 4 Object-Oriented Programming (OOP)</strong>: 100 flashcards covering classes, inheritance, polymorphism, MRO, `__dict__`, `__bases__`, custom exceptions, and name mangling.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                    <span>
                      <strong>Active Recall Leitner SRS Engine</strong>: Mathematical ease factors, intervals, and persistent local storage synchronization.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                    <span>
                      <strong>Automated Background Updates</strong>: Periodically checks and prepares new versions automatically in the background with zero study interruption.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Version History Table */}
              <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 space-y-2">
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Past Build Changelog
                </h4>
                <div className="space-y-2 text-xs text-slate-400 divide-y divide-slate-800/80">
                  <div className="pt-2 flex justify-between items-center">
                    <span className="font-mono text-slate-200">v3.12.3</span>
                    <span className="text-slate-500">August 28, 2026</span>
                  </div>
                  <div className="pt-2 flex justify-between items-center">
                    <span className="font-mono text-slate-200">v3.12.0</span>
                    <span className="text-slate-500">August 15, 2026</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'diagnostics' && (
            <div className="space-y-4">
              {/* Storage & Cache Management */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <HardDrive className="w-4 h-4 text-cyan-400" />
                    <h4 className="text-xs font-semibold text-slate-200">
                      Offline Storage & Asset Cache
                    </h4>
                  </div>
                  <button
                    onClick={clearCache}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-rose-500/10 text-rose-300 border border-rose-500/30 hover:bg-rose-500/20 transition-colors flex items-center space-x-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Purge Update Cache</span>
                  </button>
                </div>
                <p className="text-xs text-slate-400">
                  Total client database size is ~3.2 MB including 200 flashcards, syllabus definitions, and active recall records.
                </p>
              </div>

              {/* Update History Activity Log */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Terminal className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                      Update Daemon Activity Log
                    </span>
                  </div>
                  <button
                    onClick={handleCopyDiagnostics}
                    className="text-[11px] text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
                  >
                    {copiedStatus ? <Check className="w-3 h-3" /> : null}
                    <span>{copiedStatus ? 'Copied' : 'Copy Report'}</span>
                  </button>
                </div>

                <div className="p-3 rounded-lg bg-black/60 font-mono text-[11px] text-slate-300 max-h-48 overflow-y-auto space-y-1.5 divide-y divide-slate-800/40">
                  {settings.updateHistory.map((log) => (
                    <div key={log.id} className="pt-1 flex items-start space-x-2">
                      <span className="text-slate-500 shrink-0">
                        {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                      </span>
                      <span className={`px-1 rounded text-[10px] uppercase font-bold shrink-0 ${
                        log.type === 'applied' ? 'bg-emerald-500/20 text-emerald-300' :
                        log.type === 'forced' ? 'bg-amber-500/20 text-amber-300' :
                        log.type === 'background_check' ? 'bg-indigo-500/20 text-indigo-300' :
                        'bg-slate-800 text-cyan-300'
                      }`}>
                        {log.type}
                      </span>
                      <span className="text-slate-300">{log.message}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-3.5 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Python Institute Alignment: PCAP-31-03 Certified</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
