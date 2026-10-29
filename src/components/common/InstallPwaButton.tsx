import React from 'react';
import { Download, Smartphone } from 'lucide-react';
import { useNoviceMode } from '../../context/NoviceModeContext';

interface InstallPwaButtonProps {
  variant?: 'primary' | 'secondary' | 'navbar' | 'banner';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showIconOnlyOnMobile?: boolean;
}

export const InstallPwaButton: React.FC<InstallPwaButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  showIconOnlyOnMobile = true,
}) => {
  const { triggerInstall, isInstallable } = useNoviceMode();

  const baseStyle =
    'inline-flex items-center justify-center font-bold transition-all cursor-pointer group focus:outline-none focus:ring-2 focus:ring-emerald-400';

  const sizeClasses = {
    sm: 'px-2.5 py-1.5 text-xs rounded-lg gap-1.5',
    md: 'px-3.5 py-2 text-xs sm:text-sm rounded-xl gap-2',
    lg: 'px-6 py-3 text-sm sm:text-base rounded-2xl gap-2.5 shadow-lg',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/35',
    secondary:
      'bg-emerald-950/60 hover:bg-emerald-900/70 border border-emerald-500/40 text-emerald-300 hover:text-white',
    navbar:
      'bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 hover:text-emerald-200',
    banner:
      'bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black shadow-lg shadow-emerald-500/30',
  };

  return (
    <button
      onClick={() => triggerInstall()}
      className={`${baseStyle} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      title="Ajouter Pythor sur l’écran d’accueil de votre mobile ou ordinateur pour réviser hors-ligne"
      aria-label="Installer l’application Pythor sur votre appareil"
    >
      <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-current shrink-0" />
      <span className={showIconOnlyOnMobile ? 'hidden sm:inline font-semibold' : 'font-semibold'}>
        Installer l’application
      </span>
      {isInstallable && (
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse hidden sm:inline" />
      )}
    </button>
  );
};
