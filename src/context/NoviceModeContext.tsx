import React, { createContext, useContext, useState, useEffect } from 'react';

interface NoviceModeContextType {
  isNoviceMode: boolean;
  toggleNoviceMode: () => void;
  isOnboardingOpen: boolean;
  openOnboarding: () => void;
  closeOnboarding: () => void;
  isInstallModalOpen: boolean;
  openInstallModal: () => void;
  closeInstallModal: () => void;
  isInstallable: boolean;
  triggerInstall: () => Promise<void>;
  hasAcceptedLegal: boolean;
  acceptLegalTerms: () => void;
}

const NoviceModeContext = createContext<NoviceModeContextType | undefined>(undefined);

export const NoviceModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Novice mode with contextual tooltips enabled by default for new users
  const [isNoviceMode, setIsNoviceMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('pythor_novice_mode');
      return saved !== null ? saved === 'true' : true;
    } catch {
      return true;
    }
  });

  // Legal & Onboarding acceptance state
  const [hasAcceptedLegal, setHasAcceptedLegal] = useState<boolean>(() => {
    try {
      return localStorage.getItem('pythor_legal_accepted') === 'true';
    } catch {
      return false;
    }
  });

  // Onboarding modal is opened explicitly when entering the app or via help buttons
  const [isOnboardingOpen, setIsOnboardingOpen] = useState<boolean>(false);

  const [isInstallModalOpen, setIsInstallModalOpen] = useState<boolean>(false);

  // Global PWA Deferred Prompt State
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState<boolean>(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // If app installed event fires
    const handleAppInstalled = () => {
      setIsInstallable(false);
      setDeferredPrompt(null);
    };
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const toggleNoviceMode = () => {
    setIsNoviceMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('pythor_novice_mode', String(next));
      } catch {}
      return next;
    });
  };

  const acceptLegalTerms = () => {
    setHasAcceptedLegal(true);
    try {
      localStorage.setItem('pythor_legal_accepted', 'true');
    } catch {}
    setIsOnboardingOpen(false);
  };

  const openOnboarding = () => setIsOnboardingOpen(true);
  const closeOnboarding = () => {
    // Only close if accepted or user chooses to close
    setIsOnboardingOpen(false);
  };

  const openInstallModal = () => setIsInstallModalOpen(true);
  const closeInstallModal = () => setIsInstallModalOpen(false);

  const triggerInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstallable(false);
      }
      setDeferredPrompt(null);
    } else {
      // If browser doesn't support beforeinstallprompt or is iOS / Safari, open the visual step-by-step modal!
      setIsInstallModalOpen(true);
    }
  };

  return (
    <NoviceModeContext.Provider
      value={{
        isNoviceMode,
        toggleNoviceMode,
        isOnboardingOpen,
        openOnboarding,
        closeOnboarding,
        isInstallModalOpen,
        openInstallModal,
        closeInstallModal,
        isInstallable,
        triggerInstall,
        hasAcceptedLegal,
        acceptLegalTerms,
      }}
    >
      {children}
    </NoviceModeContext.Provider>
  );
};

export const useNoviceMode = () => {
  const context = useContext(NoviceModeContext);
  if (!context) {
    throw new Error('useNoviceMode must be used within a NoviceModeProvider');
  }
  return context;
};
