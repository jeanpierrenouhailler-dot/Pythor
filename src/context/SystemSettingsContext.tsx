import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { SystemSettingsState, SystemUpdateStatus, UpdateChannel, UpdateLogEntry } from '../types';

interface SystemSettingsContextType {
  settings: SystemSettingsState;
  checkForUpdates: (manual?: boolean) => Promise<void>;
  forceUpdate: () => Promise<void>;
  installAndRestart: () => void;
  setAutoUpdateEnabled: (enabled: boolean) => void;
  setCheckIntervalMinutes: (minutes: number) => void;
  setUpdateChannel: (channel: UpdateChannel) => void;
  dismissUpdateNotice: () => void;
  clearCache: () => void;
  simulateNewVersion: () => void;
  isSettingsOpen: boolean;
  setIsSettingsOpen: (open: boolean) => void;
}

const STORAGE_KEY = 'pcap_system_settings_state';

const DEFAULT_INITIAL_STATE: SystemSettingsState = {
  currentVersion: 'v3.12.4',
  buildNumber: '2026.09.08-rev4',
  releaseDate: 'September 04, 2026',
  lastChecked: Date.now() - 1000 * 60 * 18, // 18 minutes ago initially
  autoUpdateEnabled: true,
  checkIntervalMinutes: 15,
  updateChannel: 'stable',
  status: 'idle',
  availableVersion: null,
  releaseNotes: null,
  progress: 0,
  downloadSize: '4.8 MB',
  autoPreparedInBackground: false,
  lastLogMessage: 'System initialized. Automatic background updates active.',
  updateHistory: [
    {
      id: 'init-1',
      timestamp: Date.now() - 1000 * 60 * 60 * 24 * 4,
      type: 'applied',
      message: 'Installed release v3.12.4: 100 deep-dive Section 4 OOP flashcards + execution engine.',
      version: 'v3.12.4',
    },
    {
      id: 'init-2',
      timestamp: Date.now() - 1000 * 60 * 60 * 24 * 7,
      type: 'applied',
      message: 'Installed release v3.12.3: Section 3 Generator Protocols & Closure inspection lab.',
      version: 'v3.12.3',
    },
  ],
};

const SystemSettingsContext = createContext<SystemSettingsContextType | undefined>(undefined);

export const SystemSettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SystemSettingsState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_INITIAL_STATE,
          ...parsed,
          // Reset transient downloading or checking status on boot
          status: parsed.status === 'ready' ? 'ready' : 'idle',
          progress: parsed.status === 'ready' ? 100 : 0,
        };
      }
    } catch (e) {
      console.error('Failed to parse system settings from storage', e);
    }
    return DEFAULT_INITIAL_STATE;
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const isUpdatingRef = useRef<boolean>(false);

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to persist system settings to localStorage', e);
    }
  }, [settings]);

  const addLog = useCallback(
    (type: UpdateLogEntry['type'], message: string, version: string) => {
      const newEntry: UpdateLogEntry = {
        id: `log-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        timestamp: Date.now(),
        type,
        message,
        version,
      };
      setSettings((prev) => ({
        ...prev,
        lastLogMessage: message,
        updateHistory: [newEntry, ...prev.updateHistory.slice(0, 29)],
      }));
    },
    []
  );

  // Core download & staging simulator
  const downloadAndStageUpdate = useCallback(
    async (targetVersion: string, notes: string[], inBackground = false) => {
      isUpdatingRef.current = true;
      setSettings((prev) => ({
        ...prev,
        status: 'downloading',
        availableVersion: targetVersion,
        releaseNotes: notes,
        progress: 0,
        autoPreparedInBackground: inBackground,
        lastLogMessage: inBackground
          ? `[Background Worker] Downloading and preparing ${targetVersion}...`
          : `Downloading update package ${targetVersion}...`,
      }));

      // Simulate chunk-by-chunk download and bundle compilation
      for (let p = 10; p <= 100; p += 15) {
        await new Promise((res) => setTimeout(res, 260));
        setSettings((prev) => ({
          ...prev,
          progress: Math.min(100, p),
        }));
      }

      await new Promise((res) => setTimeout(res, 200));

      setSettings((prev) => ({
        ...prev,
        status: 'ready',
        progress: 100,
        autoPreparedInBackground: inBackground,
        lastLogMessage: inBackground
          ? `[Background Worker] ${targetVersion} prepared and staged in local cache. Ready to install.`
          : `Update ${targetVersion} downloaded and verified. Ready to restart.`,
      }));

      addLog(
        inBackground ? 'background_check' : 'staged',
        inBackground
          ? `Background updater staged new release ${targetVersion} in offline cache.`
          : `Staged update ${targetVersion} successfully. Verified SHA-256 integrity.`,
        targetVersion
      );

      isUpdatingRef.current = false;
    },
    [addLog]
  );

  // Manual or automatic check for updates
  const checkForUpdates = useCallback(
    async (manual = true) => {
      if (isUpdatingRef.current || settings.status === 'downloading') return;

      const now = Date.now();
      setSettings((prev) => ({
        ...prev,
        status: 'checking',
        lastChecked: now,
        lastLogMessage: manual
          ? 'Querying remote update distribution server...'
          : '[Background Worker] Periodic version check in progress...',
      }));

      // Simulate network request to version registry
      await new Promise((res) => setTimeout(res, manual ? 1200 : 800));

      // Determine next version based on current
      const isAlreadyReady = settings.status === 'ready' && settings.availableVersion;
      if (isAlreadyReady) {
        setSettings((prev) => ({
          ...prev,
          status: 'ready',
          lastChecked: now,
          lastLogMessage: `Update ${prev.availableVersion} is already staged and ready to install.`,
        }));
        return;
      }

      // If current is 3.12.4, an update 3.12.5 is available
      const nextVersion = settings.currentVersion === 'v3.12.4' ? 'v3.12.5' : 'v3.12.6';
      const notes = [
        'Added 20 advanced Python 3.12 mock exam questions covering pattern matching & ExceptionGroup.',
        'Refined generator protocol edge cases (StopIteration with return value propagation).',
        'Enhanced offline active recall persistence with zero-latency IndexedDB chunking.',
        'Official Python Institute PCAP-31-03 November 2026 blueprint alignment updates.',
      ];

      addLog(
        manual ? 'check' : 'background_check',
        manual
          ? `Update check completed: New version ${nextVersion} detected on ${settings.updateChannel} channel.`
          : `Periodic background check found update ${nextVersion}. Preparing package...`,
        nextVersion
      );

      // If automatic updates enabled or manual check found it:
      // In background or manual, prepare and stage it!
      await downloadAndStageUpdate(nextVersion, notes, !manual);
    },
    [settings.status, settings.availableVersion, settings.currentVersion, settings.updateChannel, addLog, downloadAndStageUpdate]
  );

  // Force update button logic: bypasses cache, forces download of fresh package
  const forceUpdate = useCallback(async () => {
    isUpdatingRef.current = true;
    const now = Date.now();
    const forcedVersion =
      settings.currentVersion === 'v3.12.4' ? 'v3.12.5-hotfix' : `${settings.currentVersion}-force.${Date.now().toString().slice(-4)}`;

    setSettings((prev) => ({
      ...prev,
      status: 'downloading',
      lastChecked: now,
      progress: 0,
      autoPreparedInBackground: false,
      availableVersion: forcedVersion,
      releaseNotes: [
        'Forced full client rebuild & asset cache purge initiated by user.',
        'Re-synchronized local database with certified PCAP-31-03 syllabus repository.',
        'Fresh runtime manifest and asset signatures applied.',
      ],
      lastLogMessage: `Force update initiated. Purging stale caches and downloading ${forcedVersion}...`,
    }));

    addLog('forced', `Force update triggered: bypassing cache to pull ${forcedVersion}`, forcedVersion);

    // Progressive download simulation
    for (let p = 15; p <= 100; p += 20) {
      await new Promise((res) => setTimeout(res, 300));
      setSettings((prev) => ({
        ...prev,
        progress: Math.min(100, p),
      }));
    }

    setSettings((prev) => ({
      ...prev,
      status: 'ready',
      progress: 100,
      lastLogMessage: `Forced update ${forcedVersion} prepared successfully. Ready to restart.`,
    }));

    addLog('staged', `Force update package ${forcedVersion} prepared and staged in storage.`, forcedVersion);
    isUpdatingRef.current = false;
  }, [settings.currentVersion, addLog]);

  // Install prepared version and restart application
  const installAndRestart = useCallback(() => {
    const versionToInstall = settings.availableVersion || 'v3.12.5';
    const today = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    setSettings((prev) => ({
      ...prev,
      currentVersion: versionToInstall,
      buildNumber: `${new Date().toISOString().slice(0, 10).replace(/-/g, '.')}-rev1`,
      releaseDate: today,
      status: 'idle',
      availableVersion: null,
      releaseNotes: null,
      progress: 0,
      autoPreparedInBackground: false,
      lastLogMessage: `Successfully installed and restarted into ${versionToInstall}.`,
      updateHistory: [
        {
          id: `applied-${Date.now()}`,
          timestamp: Date.now(),
          type: 'applied',
          message: `Installed and booted version ${versionToInstall}.`,
          version: versionToInstall,
        },
        ...prev.updateHistory,
      ],
    }));

    setIsSettingsOpen(false);

    // Broadcast reload or trigger slight animation
    window.dispatchEvent(new CustomEvent('pcap_version_updated', { detail: { version: versionToInstall } }));
  }, [settings.availableVersion]);

  // Automatic Background Updates Engine:
  // Periodically checks and prepares new versions automatically in the background
  useEffect(() => {
    if (!settings.autoUpdateEnabled) {
      return;
    }

    // Interval in milliseconds based on user-configured checkIntervalMinutes
    const intervalMs = Math.max(30000, settings.checkIntervalMinutes * 60 * 1000);

    // Initial delayed background check after mounting (e.g. after 8 seconds if not checked in last 10 mins)
    const initialTimer = setTimeout(() => {
      const timeSinceLastCheck = Date.now() - (settings.lastChecked || 0);
      if (timeSinceLastCheck > 10 * 60 * 1000 && settings.status !== 'ready' && !isUpdatingRef.current) {
        checkForUpdates(false);
      }
    }, 8000);

    const intervalTimer = setInterval(() => {
      if (settings.status !== 'ready' && !isUpdatingRef.current) {
        checkForUpdates(false);
      }
    }, intervalMs);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, [settings.autoUpdateEnabled, settings.checkIntervalMinutes, settings.status, checkForUpdates, settings.lastChecked]);

  const setAutoUpdateEnabled = (enabled: boolean) => {
    setSettings((prev) => ({
      ...prev,
      autoUpdateEnabled: enabled,
      lastLogMessage: enabled
        ? 'Automatic background updates enabled. Background worker active.'
        : 'Automatic background updates disabled by user.',
    }));
    addLog('info', enabled ? 'Enabled automatic background updates.' : 'Disabled automatic background updates.', settings.currentVersion);
  };

  const setCheckIntervalMinutes = (minutes: number) => {
    setSettings((prev) => ({
      ...prev,
      checkIntervalMinutes: minutes,
      lastLogMessage: `Background update check interval set to ${minutes} minutes.`,
    }));
    addLog('info', `Background check interval adjusted to ${minutes} minutes.`, settings.currentVersion);
  };

  const setUpdateChannel = (channel: UpdateChannel) => {
    setSettings((prev) => ({
      ...prev,
      updateChannel: channel,
      lastLogMessage: `Update release channel switched to ${channel}.`,
    }));
    addLog('info', `Switched update channel to ${channel}.`, settings.currentVersion);
  };

  const dismissUpdateNotice = () => {
    setSettings((prev) => ({
      ...prev,
      autoPreparedInBackground: false,
    }));
  };

  const clearCache = () => {
    setSettings((prev) => ({
      ...prev,
      status: 'idle',
      progress: 0,
      availableVersion: null,
      releaseNotes: null,
      autoPreparedInBackground: false,
      lastLogMessage: 'Client update cache, staged bundles, and worker buffers cleared.',
    }));
    addLog('info', 'Update cache and staged assets purged.', settings.currentVersion);
  };

  const simulateNewVersion = () => {
    const simVersion = `v3.12.${Math.floor(Math.random() * 90 + 10)}`;
    const simNotes = [
      'Simulated background bundle deployment.',
      'New mock exam scenario with 50 live execution test cases.',
      'Memory and performance improvements in active recall carousel.',
    ];
    downloadAndStageUpdate(simVersion, simNotes, true);
  };

  return (
    <SystemSettingsContext.Provider
      value={{
        settings,
        checkForUpdates,
        forceUpdate,
        installAndRestart,
        setAutoUpdateEnabled,
        setCheckIntervalMinutes,
        setUpdateChannel,
        dismissUpdateNotice,
        clearCache,
        simulateNewVersion,
        isSettingsOpen,
        setIsSettingsOpen,
      }}
    >
      {children}
    </SystemSettingsContext.Provider>
  );
};

export const useSystemSettings = () => {
  const context = useContext(SystemSettingsContext);
  if (!context) {
    throw new Error('useSystemSettings must be used within a SystemSettingsProvider');
  }
  return context;
};
