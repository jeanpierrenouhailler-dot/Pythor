import React, { useState } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  Terminal,
  Layers,
  GraduationCap,
  Download,
  ArrowRight,
  ArrowLeft,
  X,
  FileText,
  AlertTriangle,
  Lock,
  Sparkles,
} from 'lucide-react';
import { useNoviceMode } from '../../context/NoviceModeContext';
import { PythorLogo } from '../common/PythorLogo';

interface OnboardingLegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnboardingLegalModal: React.FC<OnboardingLegalModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { hasAcceptedLegal, acceptLegalTerms, isNoviceMode, toggleNoviceMode } = useNoviceMode();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [hasCheckedDisclaimer, setHasCheckedDisclaimer] = useState<boolean>(hasAcceptedLegal);

  if (!isOpen) return null;

  const steps = [
    {
      id: 'welcome',
      title: 'Bienvenue sur Pythor',
      subtitle: 'Votre studio complet de préparation aux 10 certifications Python',
      icon: Sparkles,
    },
    {
      id: 'guide',
      title: 'Guide de l’Apprenant Novice',
      subtitle: 'Comment réviser efficacement avec la répétition espacée (SM-2)',
      icon: BookOpen,
    },
    {
      id: 'pwa',
      title: 'Application PWA Hors-Ligne',
      subtitle: 'Installez Pythor sur votre smartphone ou PC en 1 clic',
      icon: Download,
    },
    {
      id: 'legal',
      title: 'Mentions Légales & Non-Responsabilité',
      subtitle: 'Conditions d’utilisation et clause de non-responsabilité éditoriale',
      icon: ShieldAlert,
    },
  ];

  const handleFinish = () => {
    if (!hasCheckedDisclaimer) {
      alert('Veuillez cocher la case attestant que vous avez lu et accepté les mentions légales et la clause de non-responsabilité.');
      return;
    }
    acceptLegalTerms();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-title"
    >
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[90vh]">
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-slate-800/90 bg-slate-950 flex items-center justify-between">
          <PythorLogo size="sm" showSubtitle={true} />

          <div className="flex items-center space-x-2">
            {/* Step Indicators */}
            <div className="flex items-center space-x-1.5 mr-2">
              {steps.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentStep(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentStep === idx
                      ? 'w-6 bg-cyan-400'
                      : idx < currentStep
                      ? 'bg-cyan-600/60'
                      : 'bg-slate-700'
                  }`}
                  aria-label={`Aller à l'étape ${idx + 1}`}
                  title={s.title}
                />
              ))}
            </div>

            {hasAcceptedLegal && (
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Fermer le guide"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* STEP 0: BIENVENUE */}
          {currentStep === 0 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="text-center max-w-lg mx-auto space-y-2">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-600 via-indigo-600 to-amber-500 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-cyan-400" />
                  </div>
                </div>
                <h2 id="onboarding-title" className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Préparez et Réussissez vos Certifications Python
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Pythor est une plateforme d’entraînement interactive conçue pour accompagner votre apprentissage du langage Python, du niveau débutant au niveau professionnel.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3">
                  <Layers className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">10 Filières Officielles</span>
                    <span className="text-[11px] text-slate-400">
                      PCEP, PCAP, PCPP1, PCED, PCAD, PCET, PCAT, PCES, PCEA, PCEI.
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3">
                  <Sparkles className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">4 300+ Flashcards</span>
                    <span className="text-[11px] text-slate-400">
                      100 fiches approfondies par section avec code et explications.
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3">
                  <Terminal className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">Code Lab & Simulateur</span>
                    <span className="text-[11px] text-slate-400">
                      Testez des snippets en direct et passez des examens blancs chronométrés.
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3">
                  <Download className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">100% Hors-Ligne (PWA)</span>
                    <span className="text-[11px] text-slate-400">
                      Installez l’application sur votre téléphone et révisez partout.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 1: GUIDE NOVICE */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-cyan-400" />
                  <span>Guide Novice : Les 3 Règles d'Or pour Réussir</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Découvrez comment tirer le meilleur parti des fonctionnalités de Pythor dès votre première session.
                </p>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-cyan-500/20 space-y-1.5">
                  <span className="font-bold text-cyan-300 block flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-[10px]">1</span>
                    <span>La Répétition Espacée SM-2 (Active Recall)</span>
                  </span>
                  <p className="text-slate-400 leading-relaxed">
                    Sur chaque carte, essayez de deviner la réponse ou la sortie du code avant de retourner la fiche. Ensuite, notez votre niveau de souvenir :
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-1 text-[11px]">
                    <span className="p-1.5 rounded-lg bg-rose-950/40 text-rose-300 text-center border border-rose-500/30">
                      <strong>Encore</strong> (revu demain)
                    </span>
                    <span className="p-1.5 rounded-lg bg-amber-950/40 text-amber-300 text-center border border-amber-500/30">
                      <strong>Difficile</strong> (revu sous 2j)
                    </span>
                    <span className="p-1.5 rounded-lg bg-blue-950/40 text-blue-300 text-center border border-blue-500/30">
                      <strong>Bon</strong> (revu sous 4j)
                    </span>
                    <span className="p-1.5 rounded-lg bg-emerald-950/40 text-emerald-300 text-center border border-emerald-500/30">
                      <strong>Facile</strong> (revu sous 7j)
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-indigo-300 block flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-[10px]">2</span>
                    <span>Passez l’Examen Blanc avant le Jour J</span>
                  </span>
                  <p className="text-slate-400 leading-relaxed">
                    Le simulateur d’examen reproduit exactement les conditions réelles : compte à rebours dégressif (40 à 65 minutes selon la certification) et calcul du score sur le barème officiel avec un seuil d'admission fixé à <strong>70%</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-amber-300 block flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center text-[10px]">3</span>
                    <span>Testez vos hypothèses dans le Code Lab</span>
                  </span>
                  <p className="text-slate-400 leading-relaxed">
                    Un doute sur l’ordre d’héritage (MRO), le découpage de listes ou une exception ? Ouvrez le Code Lab, modifiez le code et observez en direct la sortie standard.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: PWA INSTALLATION */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center space-x-2">
                  <Download className="w-5 h-5 text-emerald-400" />
                  <span>Installation PWA : Révisez Hors-Ligne Partout</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Pythor est une Progressive Web App. Vous pouvez l’ajouter sur votre écran d’accueil pour l’utiliser comme une application native sans passer par Google Play ou l’App Store.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 font-bold">
                    📱
                  </div>
                  <div>
                    <span className="font-bold text-white block">Sur Android (Google Chrome)</span>
                    <p className="text-slate-400 mt-0.5">
                      Cliquez sur le bouton <strong>« Installer l'application »</strong> dans la barre supérieure ou appuyez sur les <strong>3 points verticaux (⋮)</strong> en haut à droite puis sélectionnez <strong>« Installer l'application »</strong> ou <strong>« Ajouter à l'écran d'accueil »</strong>.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 font-bold">
                    🍏
                  </div>
                  <div>
                    <span className="font-bold text-white block">Sur iPhone / iPad (Safari)</span>
                    <p className="text-slate-400 mt-0.5">
                      Appuyez sur le bouton <strong>Partager</strong> (le carré avec une flèche vers le haut), faites défiler vers le bas puis touchez <strong>« Sur l'écran d'accueil »</strong> puis <strong>« Ajouter »</strong>.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 font-bold">
                    💻
                  </div>
                  <div>
                    <span className="font-bold text-white block">Sur Ordinateur (Chrome / Edge)</span>
                    <p className="text-slate-400 mt-0.5">
                      Cliquez sur la petite icône d’ordinateur avec flèche située tout à droite dans la barre d'adresse de votre navigateur, puis cliquez sur <strong>« Installer »</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: MENTIONS LÉGALES & CLAUSE DE NON-RESPONSABILITÉ */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/40 space-y-2">
                <div className="flex items-center space-x-2 text-rose-300 font-bold text-sm">
                  <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>Avertissement & Clause de Non-Responsabilité Éditoriale</span>
                </div>
                <p className="text-xs text-rose-200/90 leading-relaxed">
                  <strong>Important :</strong> L'auteur et l'éditeur de l'application Pythor <strong>déclinent expressément toute responsabilité</strong> quant aux données, questions, codes sources, réponses et explications fournis dans l'application.
                </p>
              </div>

              {/* Legal Points Accordion / Box */}
              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <span className="font-bold text-white block">1. Nature Pédagogique & Absence de Garantie de Résultat</span>
                  <p className="text-slate-400 leading-relaxed text-[11px]">
                    Pythor est un outil d'étude et d'auto-évaluation mis à disposition à titre purement indicatif et éducatif. L'auteur ne garantit en aucun cas que les contenus reflètent de manière exhaustive ou absolue les épreuves officielles contemporaines, ni que leur utilisation garantit la réussite aux examens officiels. L’utilisateur utilise l’application sous sa seule et entière responsabilité.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <span className="font-bold text-white block">2. Indépendance & Propriété Intellectuelle des Marques</span>
                  <p className="text-slate-400 leading-relaxed text-[11px]">
                    Pythor est un projet indépendant. L'application n'est ni sponsorisée, ni affiliée, ni approuvée par OpenEDG Python Institute, la Python Software Foundation, ou toute autre organisation de certification. Les termes <em>Python™</em>, <em>PCEP™</em>, <em>PCAP™</em>, <em>PCPP™</em>, <em>PCED™</em>, <em>PCAD™</em>, <em>PCET™</em>, <em>PCAT™</em>, <em>PCES™</em>, <em>PCEA™</em>, <em>PCEI™</em> sont des marques ou dénominations commerciales appartenant à leurs titulaires respectifs.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <span className="font-bold text-white block">3. Respect des Données Personnelles (Architecture Local-First)</span>
                  <p className="text-slate-400 leading-relaxed text-[11px]">
                    L’application ne collecte ni ne commercialise aucune donnée personnelle. Vos statistiques de progression, scores et créations de fiches sont conservés localement dans le stockage de votre navigateur (localStorage). La connexion Google optionnelle sert exclusivement à synchroniser vos cartes personnalisées via Cloud Firestore si vous choisissez de l’activer.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <span className="font-bold text-white block">4. Exécution de Code dans le Code Lab</span>
                  <p className="text-slate-400 leading-relaxed text-[11px]">
                    L'utilisateur demeure seul responsable des scripts saisis et exécutés dans le bac à sable expérimental. L'auteur ne saurait être tenu responsable d'un quelconque dysfonctionnement découlant de l'exécution de code par l'utilisateur.
                  </p>
                </div>
              </div>

              {/* Mandatory acceptance checkbox */}
              <div className="pt-2 p-3.5 rounded-2xl bg-slate-950 border border-cyan-500/40 flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="legal-checkbox"
                  checked={hasCheckedDisclaimer}
                  onChange={(e) => setHasCheckedDisclaimer(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-cyan-500 bg-slate-900 border-slate-700 focus:ring-cyan-400 cursor-pointer"
                />
                <label htmlFor="legal-checkbox" className="text-xs text-slate-200 cursor-pointer select-none">
                  <span className="font-bold text-white block">Consentement & Acceptation Obligatoire</span>
                  <span>
                    J'atteste avoir pris connaissance des mentions légales ci-dessus et je reconnais que l'auteur et l'éditeur ne sont en aucun cas responsables des données et contenus fournis dans l'application Pythor.
                  </span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Navigation & Action Buttons */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-3 py-1.5 rounded-xl border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center space-x-1.5 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Précédent</span>
              </button>
            )}
            <span className="text-[11px] text-slate-500">
              Étape {currentStep + 1} sur {steps.length}
            </span>
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            {currentStep < steps.length - 1 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 text-xs font-extrabold shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center space-x-1.5"
              >
                <span>Continuer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleFinish}
                disabled={!hasCheckedDisclaimer}
                className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-extrabold shadow-lg transition-all flex items-center justify-center space-x-2 ${
                  hasCheckedDisclaimer
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-emerald-500/25 cursor-pointer'
                    : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Accepter et Commencer à Réviser</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
