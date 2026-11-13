import React, { useEffect, useRef, useState } from 'react';
import {
  Check,
  ChevronDown,
  CircleHelp,
  Download,
  Globe,
  Laptop,
  Lightbulb,
  Moon,
  Settings,
  Sun,
} from 'lucide-react';
import { AppView } from '../types';
import { useSystemSettings } from '../context/SystemSettingsContext';
import { useTheme } from '../context/ThemeContext';
import { useI18n } from '../context/I18nContext';
import { useNoviceMode } from '../context/NoviceModeContext';

interface PreferencesMenuProps {
  onOpenSettings: () => void;
  onNavigate: (view: AppView) => void;
}

function isAppInstalled(): boolean {
  if (typeof window === 'undefined') return false;
  const navigatorWithStandalone = window.navigator as Navigator & { standalone?: boolean };
  return window.matchMedia('(display-mode: standalone)').matches || navigatorWithStandalone.standalone === true;
}

export const PreferencesMenu: React.FC<PreferencesMenuProps> = ({ onOpenSettings, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInstalled, setIsInstalled] = useState(isAppInstalled);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { settings } = useSystemSettings();
  const { theme, setTheme } = useTheme();
  const { lang, setLang, isFrench } = useI18n();
  const { openOnboarding, isNoviceMode, toggleNoviceMode, isInstallable, triggerInstall } = useNoviceMode();

  const copy = isFrench
    ? {
        preferences: 'Préférences',
        language: 'Langue',
        appearance: 'Apparence',
        application: 'Application',
        tools: 'Aide et outils',
        french: 'Français',
        english: 'English',
        light: 'Clair',
        dark: 'Sombre',
        installed: 'Application déjà installée',
        install: 'Installer l’application',
        installGuide: 'Guide d’installation',
        settings: 'Paramètres',
        help: 'Aide et mentions légales',
        landing: 'Présentation de Pythor',
        novice: 'Mode débutant',
        open: 'Ouvrir les préférences',
      }
    : {
        preferences: 'Preferences',
        language: 'Language',
        appearance: 'Appearance',
        application: 'Application',
        tools: 'Help and tools',
        french: 'Français',
        english: 'English',
        light: 'Light',
        dark: 'Dark',
        installed: 'App already installed',
        install: 'Install the app',
        installGuide: 'Installation guide',
        settings: 'Settings',
        help: 'Help and legal notice',
        landing: 'About Pythor',
        novice: 'Beginner mode',
        open: 'Open preferences',
      };

  useEffect(() => {
    const handleAppInstalled = () => setIsInstalled(true);
    window.addEventListener('appinstalled', handleAppInstalled);
    return () => window.removeEventListener('appinstalled', handleAppInstalled);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const firstItem = menuRef.current?.querySelector<HTMLElement>('button:not(:disabled)');
    firstItem?.focus();

    const handlePointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
      if (document.activeElement === document.body && previouslyFocused?.isConnected) {
        previouslyFocused.focus();
      }
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const selectLanguage = (language: 'en' | 'fr') => {
    setLang(language);
    closeMenu();
    triggerRef.current?.focus();
  };
  const selectTheme = (selectedTheme: 'light' | 'dark') => {
    setTheme(selectedTheme);
    closeMenu();
    triggerRef.current?.focus();
  };
  const openSettings = () => {
    closeMenu();
    onOpenSettings();
  };
  const openHelp = () => {
    closeMenu();
    openOnboarding();
  };
  const navigateToLanding = () => {
    closeMenu();
    onNavigate('landing');
  };
  const toggleNovice = () => {
    toggleNoviceMode();
    closeMenu();
    triggerRef.current?.focus();
  };
  const installApp = async () => {
    await triggerInstall();
    setIsInstalled(isAppInstalled());
    closeMenu();
  };

  const optionClass = (active: boolean) =>
    `flex min-h-10 items-center justify-between gap-2 rounded-lg px-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--py-color-focus)] ${
      active
        ? 'bg-[var(--py-color-surface-raised)] text-[var(--py-color-text)]'
        : 'text-[var(--py-color-text-muted)] hover:bg-[var(--py-color-surface-raised)] hover:text-[var(--py-color-text)]'
    }`;

  return (
    <div className="relative" ref={rootRef}>
      <button
        ref={triggerRef}
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--py-color-border)] text-[var(--py-color-text-muted)] transition-colors hover:bg-[var(--py-color-surface-raised)] hover:text-[var(--py-color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--py-color-focus)]"
        aria-label={copy.open}
        aria-expanded={isOpen}
        aria-controls="pythor-preferences-panel"
        onClick={() => setIsOpen((open) => !open)}
      >
        <Settings className="h-4 w-4" aria-hidden="true" />
        {settings.status === 'ready' && (
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[var(--py-color-success)]" aria-label={isFrench ? 'Mise à jour prête' : 'Update ready'} />
        )}
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          id="pythor-preferences-panel"
          className="absolute right-0 top-[calc(100%+0.5rem)] z-[var(--py-z-dropdown)] w-[min(20rem,calc(100vw-1.5rem))] rounded-xl border border-[var(--py-color-border)] bg-[var(--py-color-surface)] p-3 text-[var(--py-color-text)] shadow-[var(--py-shadow-md)]"
          aria-label={copy.preferences}
        >
          <h2 className="px-2 pb-2 text-sm font-semibold">{copy.preferences}</h2>

          <section className="border-t border-[var(--py-color-border)] py-2" aria-labelledby="preferences-language">
            <h3 id="preferences-language" className="px-2 pb-1 text-xs font-medium text-[var(--py-color-text-muted)]">
              <Globe className="mr-1.5 inline h-3.5 w-3.5" aria-hidden="true" />
              {copy.language}
            </h3>
            <div className="grid grid-cols-2 gap-1">
              <button type="button" className={optionClass(lang === 'fr')} aria-pressed={lang === 'fr'} onClick={() => selectLanguage('fr')}>
                {copy.french}
                {lang === 'fr' && <Check className="h-4 w-4" aria-hidden="true" />}
              </button>
              <button type="button" className={optionClass(lang === 'en')} aria-pressed={lang === 'en'} onClick={() => selectLanguage('en')}>
                {copy.english}
                {lang === 'en' && <Check className="h-4 w-4" aria-hidden="true" />}
              </button>
            </div>
          </section>

          <section className="border-t border-[var(--py-color-border)] py-2" aria-labelledby="preferences-theme">
            <h3 id="preferences-theme" className="px-2 pb-1 text-xs font-medium text-[var(--py-color-text-muted)]">
              <Laptop className="mr-1.5 inline h-3.5 w-3.5" aria-hidden="true" />
              {copy.appearance}
            </h3>
            <div className="grid grid-cols-2 gap-1">
              <button type="button" className={optionClass(theme === 'light')} aria-pressed={theme === 'light'} onClick={() => selectTheme('light')}>
                <Sun className="h-4 w-4" aria-hidden="true" />
                <span className="flex-1 text-left">{copy.light}</span>
                {theme === 'light' && <Check className="h-4 w-4" aria-hidden="true" />}
              </button>
              <button type="button" className={optionClass(theme === 'dark')} aria-pressed={theme === 'dark'} onClick={() => selectTheme('dark')}>
                <Moon className="h-4 w-4" aria-hidden="true" />
                <span className="flex-1 text-left">{copy.dark}</span>
                {theme === 'dark' && <Check className="h-4 w-4" aria-hidden="true" />}
              </button>
            </div>
          </section>

          <section className="border-t border-[var(--py-color-border)] py-2" aria-labelledby="preferences-application">
            <h3 id="preferences-application" className="px-2 pb-1 text-xs font-medium text-[var(--py-color-text-muted)]">
              {copy.application}
            </h3>
            <button type="button" className={`${optionClass(false)} w-full`} disabled={isInstalled} onClick={installApp}>
              <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="flex-1 text-left">{isInstalled ? copy.installed : isInstallable ? copy.install : copy.installGuide}</span>
              {isInstalled && <Check className="h-4 w-4" aria-hidden="true" />}
            </button>
          </section>

          <section className="border-t border-[var(--py-color-border)] pt-2" aria-labelledby="preferences-tools">
            <h3 id="preferences-tools" className="px-2 pb-1 text-xs font-medium text-[var(--py-color-text-muted)]">
              {copy.tools}
            </h3>
            <button type="button" className={`${optionClass(false)} w-full`} onClick={openSettings}>
              <Settings className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="flex-1 text-left">{copy.settings}</span>
              {settings.status === 'ready' && <span className="h-1.5 w-1.5 rounded-full bg-[var(--py-color-success)]" aria-hidden="true" />}
            </button>
            <button type="button" className={`${optionClass(false)} w-full`} onClick={openHelp}>
              <CircleHelp className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="flex-1 text-left">{copy.help}</span>
            </button>
            <button type="button" className={`${optionClass(false)} w-full`} onClick={navigateToLanding}>
              <ChevronDown className="h-4 w-4 shrink-0 rotate-[-90deg]" aria-hidden="true" />
              <span className="flex-1 text-left">{copy.landing}</span>
            </button>
            <button type="button" className={`${optionClass(false)} w-full`} aria-pressed={isNoviceMode} onClick={toggleNovice}>
              <Lightbulb className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="flex-1 text-left">{copy.novice}</span>
              <span className="text-xs">{isNoviceMode ? 'On' : 'Off'}</span>
            </button>
          </section>
        </div>
      )}
    </div>
  );
};
