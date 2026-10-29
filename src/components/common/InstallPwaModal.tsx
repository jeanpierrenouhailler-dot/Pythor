import React, { useState } from 'react';
import {
  Download,
  Smartphone,
  Laptop,
  CheckCircle2,
  X,
  Share,
  PlusSquare,
  ArrowRight,
  Sparkles,
  Zap,
  WifiOff,
} from 'lucide-react';
import { useNoviceMode } from '../../context/NoviceModeContext';

interface InstallPwaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstallPwaModal: React.FC<InstallPwaModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { isInstallable, triggerInstall } = useNoviceMode();
  const [activeTab, setActiveTab] = useState<'android' | 'ios' | 'desktop'>('android');

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="install-modal-title"
    >
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800/90 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <h3 id="install-modal-title" className="text-sm font-extrabold text-white">
                Installer l’Application Pythor
              </h3>
              <p className="text-[11px] text-slate-400">
                Ajoutez Pythor sur votre écran d’accueil pour réviser hors-ligne
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Benefits bar for novices */}
        <div className="px-6 py-3 bg-emerald-950/20 border-b border-emerald-500/20 flex flex-wrap items-center justify-between gap-3 text-[11px] text-emerald-300">
          <div className="flex items-center space-x-1.5">
            <WifiOff className="w-3.5 h-3.5 text-emerald-400" />
            <span>Fonctionne 100% sans Internet</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Ouverture instantanée 0 ms</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Plein écran sans barre d'adresse</span>
          </div>
        </div>

        {/* Device Tabs */}
        <div className="px-6 pt-4 flex space-x-2 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab('android')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
              activeTab === 'android'
                ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 shadow-sm'
                : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Android</span>
          </button>

          <button
            onClick={() => setActiveTab('ios')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
              activeTab === 'ios'
                ? 'bg-blue-500/15 border border-blue-500/40 text-blue-300 shadow-sm'
                : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>iPhone / iPad</span>
          </button>

          <button
            onClick={() => setActiveTab('desktop')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
              activeTab === 'desktop'
                ? 'bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 shadow-sm'
                : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Laptop className="w-4 h-4" />
            <span>PC / Mac</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 space-y-4">
          {activeTab === 'android' && (
            <div className="space-y-3 text-xs animate-in fade-in duration-150">
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <span className="font-bold text-white block">Installation automatique en 1 clic</span>
                  <p className="text-slate-400 mt-1">
                    Si votre navigateur Google Chrome affiche le bouton d’installation natif, cliquez simplement sur le bouton vert ci-dessous.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <span className="font-bold text-white block">Méthode manuelle (Menu ⋮)</span>
                  <p className="text-slate-400 mt-1">
                    Appuyez sur les <strong>trois points verticaux (⋮)</strong> tout en haut à droite de Google Chrome, puis sélectionnez <strong>« Installer l’application »</strong> ou <strong>« Ajouter à l’écran d’accueil »</strong>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ios' && (
            <div className="space-y-3 text-xs animate-in fade-in duration-150">
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <span className="font-bold text-white block flex items-center space-x-1.5">
                    <span>Ouvrez dans Safari et touchez Partager</span>
                    <Share className="w-3.5 h-3.5 text-blue-400" />
                  </span>
                  <p className="text-slate-400 mt-1">
                    Sur Safari iOS, touchez le bouton <strong>Partager</strong> (l’icône carrée avec une flèche pointant vers le haut au bas de votre écran).
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <span className="font-bold text-white block flex items-center space-x-1.5">
                    <span>Sélectionnez « Sur l’écran d’accueil »</span>
                    <PlusSquare className="w-3.5 h-3.5 text-blue-400" />
                  </span>
                  <p className="text-slate-400 mt-1">
                    Faites défiler le menu d'actions vers le bas et appuyez sur la ligne <strong>« Sur l’écran d’accueil »</strong>.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <span className="font-bold text-white block">Validez avec « Ajouter »</span>
                  <p className="text-slate-400 mt-1">
                    Appuyez sur <strong>Ajouter</strong> en haut à droite. L’icône officielle de Pythor apparaîtra immédiatement sur votre écran d'iPhone ou iPad.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'desktop' && (
            <div className="space-y-3 text-xs animate-in fade-in duration-150">
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <span className="font-bold text-white block">Icône dans la barre d'adresse</span>
                  <p className="text-slate-400 mt-1">
                    Sur <strong>Google Chrome</strong>, <strong>Microsoft Edge</strong> ou <strong>Brave</strong>, observez l'extrémité droite de la barre d'adresse URL : une icône d'ordinateur avec flèche de téléchargement y apparaît.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <span className="font-bold text-white block">Cliquez sur « Installer »</span>
                  <p className="text-slate-400 mt-1">
                    Une invite vous demande de confirmer : cliquez sur <strong>Installer</strong>. L'application s’ouvrira dans sa propre fenêtre indépendante sur votre bureau.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-slate-500">
            Gratuit • Aucune création de compte requise
          </span>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            {isInstallable && (
              <button
                onClick={() => {
                  triggerInstall();
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 text-xs font-black shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Installer maintenant</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-200 text-xs font-semibold transition-colors"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
