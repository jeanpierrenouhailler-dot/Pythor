import React from 'react';
import { Menu } from 'lucide-react';
import { AppView, CertificationTrack } from '../types';
import { PythorLogo } from './common/PythorLogo';
import { CertificationSelector } from './common/CertificationSelector';
import { PreferencesMenu } from './PreferencesMenu';
import { useI18n } from '../context/I18nContext';

interface NavbarProps {
  currentTrack: CertificationTrack;
  onSelectTrack: (track: CertificationTrack) => void;
  onOpenSettings: () => void;
  onNavigate: (view: AppView) => void;
  onToggleMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTrack,
  onSelectTrack,
  onOpenSettings,
  onNavigate,
  onToggleMenu,
}) => {
  const { isFrench } = useI18n();

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--py-color-border)] bg-[var(--py-color-background)]">
      <div className="mx-auto flex h-14 min-w-0 max-w-7xl items-center gap-2 px-3 sm:px-5 lg:px-7">
        <button
          type="button"
          onClick={onToggleMenu}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[var(--py-color-text-muted)] transition-colors hover:bg-[var(--py-color-surface-raised)] hover:text-[var(--py-color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--py-color-focus)] sm:hidden"
          aria-label={isFrench ? 'Ouvrir les outils complémentaires' : 'Open additional tools'}
          title={isFrench ? 'Outils complémentaires' : 'Additional tools'}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={() => onNavigate('dashboard')}
          className="min-w-0 shrink-0 rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--py-color-focus)]"
          aria-label={isFrench ? 'Pythor — tableau de bord' : 'Pythor — dashboard'}
        >
          <PythorLogo size="sm" showText showBadge={false} />
        </button>

        <div className="ml-auto flex min-w-0 items-center gap-2">
          <CertificationSelector
            value={currentTrack}
            onChange={onSelectTrack}
            isFrench={isFrench}
            label={isFrench ? 'Certification active' : 'Active certification'}
            className="max-w-[min(13rem,42vw)] sm:max-w-[15rem]"
          />
          <PreferencesMenu onOpenSettings={onOpenSettings} onNavigate={onNavigate} />
        </div>
      </div>
    </header>
  );
};
