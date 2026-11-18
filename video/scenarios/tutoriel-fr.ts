import { defineScenario, type RuntimeStep } from '@nouhailler/video-studio';

export default defineScenario<RuntimeStep>({
  id: 'tutoriel-fr',
  video: {
    title: 'Tutoriel complet de Pythor — Certifications Python & Répétition Espacée',
    description:
      'Découverte guidée de Pythor : tableau de bord multi-parcours, flashcards SM-2, révisions dues, statistiques, simulateur d’examen, Code Lab, aide-mémoire et PWA hors-ligne.',
    language: 'fr',
    voiceEnabled: true,
    resolution: { width: 1920, height: 1080 },
    fps: 30,
    clock: '2026-11-20T14:30:00+01:00',
    firstChapter: 'Découverte et Tableau de bord',
    intro: {
      eyebrow: 'Tutoriel complet',
      title: 'Maîtriser Pythor de A à Z',
      tagline: '10 certifications Python • Flashcards SM-2 • Simulateur d’examen • PWA hors-ligne',
      bullets: [
        'Tableau de bord et programme officiel',
        'Flashcards avec répétition espacée SM-2',
        'Simulateur chronométré et Code Lab',
        'Usage hors-ligne et synchronisation',
      ],
      narration:
        'Bienvenue dans ce tutoriel sur Pythor. Découvrons comment préparer vos certifications Python avec les flashcards intelligentes, le simulateur d’examen, le Code Lab et le mode hors-ligne.',
    },
    outro: {
      eyebrow: 'À vous de pratiquer',
      title: 'Prêt pour votre certification Python',
      tagline: 'Révisez à votre rythme, en ligne ou hors-ligne',
      bullets: [
        'Suivez votre avancement par chapitre',
        'Consolidez vos acquis avec l’algorithme SM-2',
        'Entraînez-vous en conditions réelles d’examen',
        'Installez l’application sur mobile ou ordinateur',
      ],
      narration:
        'Vous maîtrisez maintenant l’essentiel de Pythor. Commencez par quelques flashcards chaque jour, puis testez-vous avec le simulateur d’examen.',
    },
  },
  scenario: {
    name: 'tutoriel-fr',
    label: 'Tutoriel complet (FR)',
    description: 'Visite pédagogique complète des écrans et fonctions principales de Pythor.',
    steps: [
      // ── Chapitre 1 : Découverte et Tableau de bord ───────────────────────
      {
        type: 'highlight',
        target: 'landing-hero-badge',
        narrate:
          'Pythor propose dix parcours de certification et plus de quatre mille cartes gratuites sans inscription.',
        video: {
          chapter: 'Découverte et Tableau de bord',
          transition: 'fade',
          zoom: 1.2,
        },
      },
      {
        type: 'highlight',
        target: 'landing-hero-metrics',
        narrate:
          'L’application combine répétition espacée SM-2, examens blancs et fonctionnement complet hors-ligne.',
      },
      {
        type: 'navigate',
        target: 'landing-launch-btn',
        narrate:
          'Touchez Lancer Pythor Gratuitement pour accéder au tableau de bord.',
      },
      {
        type: 'highlight',
        target: 'cert-selector',
        narrate:
          'Ce sélecteur permet de basculer entre PCEP, PCAP, PCPP et les parcours spécialisés.',
        video: { zoom: 1.3 },
      },
      {
        type: 'highlight',
        target: 'dashboard-resume-card',
        narrate:
          'La carte de reprise mémorise votre dernier chapitre pour continuer sans chercher.',
      },
      {
        type: 'highlight',
        target: 'dashboard-stats-grid',
        narrate:
          'Ces quatre compteurs affichent vos cartes maîtrisées, à réviser, en cours et votre progression globale.',
        video: { readingPause: 900 },
      },

      // ── Chapitre 2 : Programme et Flashcards SM-2 ────────────────────────
      {
        type: 'click',
        target: 'dashboard-syllabus-btn',
        narrate:
          'Ouvrons le programme détaillé pour parcourir les chapitres officiels de la certification.',
        video: {
          chapter: 'Programme et Flashcards SM-2',
          transition: 'fade',
        },
      },
      {
        type: 'highlight',
        target: 'syllabus-progress',
        narrate:
          'Cette barre indique la proportion du référentiel déjà étudiée.',
      },
      {
        type: 'scroll',
        target: 'syllabus-section-4',
        narrate:
          'Descendons vers la section quatre dédiée à la programmation orientée objet.',
      },
      {
        type: 'click',
        target: 'syllabus-chapter-4.1',
        narrate:
          'Un clic sur ce chapitre ouvre directement ses flashcards.',
      },
      {
        type: 'type',
        target: 'flashcards-search',
        text: 'Blueprint',
        narrate:
          'La recherche filtre par mot-clé ; cherchons Blueprint pour isoler un exemple sur les classes.',
        video: { zoom: 1.2 },
      },
      {
        type: 'highlight',
        target: 'flashcard-code',
        narrate:
          'Lisez la question et le code Python afin d’anticiper le résultat console.',
        video: { readingPause: 900 },
      },
      {
        type: 'click',
        target: 'flashcard-flip-btn',
        narrate:
          'Touchez pour retourner la carte et révéler la réponse.',
      },
      {
        type: 'highlight',
        target: 'flashcard-output',
        narrate:
          'Le verso montre la sortie STDOUT exacte attendue à l’exécution.',
        video: { zoom: 1.2 },
      },
      {
        type: 'highlight',
        target: 'flashcard-explanation',
        narrate:
          'L’explication précise la règle Python et les pièges classiques d’examen.',
        video: { readingPause: 1000 },
      },
      {
        type: 'highlight',
        target: 'flashcard-srs-bar',
        narrate:
          'Notez votre rappel selon l’algorithme SM-2 pour ajuster le délai avant la prochaine révision.',
        video: { zoom: 1.15 },
      },
      {
        type: 'click',
        target: 'flashcard-rate-good',
        narrate:
          'Validons avec Good pour planifier le prochain rappel et avancer.',
      },

      // ── Chapitre 3 : Révisions dues et Statistiques ──────────────────────
      {
        type: 'click',
        target: 'nav-mobile-more',
        narrate:
          'Ouvrons le menu Plus pour accéder aux révisions du jour et aux statistiques.',
        video: {
          chapter: 'Révisions dues et Statistiques',
          transition: 'fade',
        },
      },
      {
        type: 'click',
        target: 'menu-nav-review',
        narrate:
          'Répétition espacée ne garde que les cartes arrivées à échéance aujourd’hui.',
      },
      {
        type: 'highlight',
        target: 'flashcard-question',
        narrate:
          'Vous révisez uniquement les notions à consolider, sans perdre de temps sur le reste.',
        video: { readingPause: 800 },
      },
      {
        type: 'click',
        target: 'nav-mobile-more',
        narrate:
          'Passons maintenant à la vue Statistiques via le menu.',
      },
      {
        type: 'click',
        target: 'menu-nav-statistics',
        narrate:
          'Cet écran regroupe votre progression sur les dix certifications.',
      },
      {
        type: 'highlight',
        target: 'stats-track-pcap',
        narrate:
          'Chaque parcours détaille les cartes étudiées, maîtrisées et le pourcentage atteint.',
      },
      {
        type: 'highlight',
        target: 'stats-activity-chart',
        narrate:
          'Le graphique suit vos révisions des sept derniers jours pour garder un rythme régulier.',
        video: { readingPause: 900 },
      },
      {
        type: 'scroll',
        target: 'stats-exam-results',
        narrate:
          'Plus bas apparaît l’historique de vos examens blancs enregistrés.',
      },

      // ── Chapitre 4 : Simulateur d'examen chronométré ─────────────────────
      {
        type: 'navigate',
        target: 'nav-mobile-exam',
        narrate:
          'Ouvrons le simulateur d’examen depuis la barre inférieure.',
        video: {
          chapter: "Simulateur d'examen chronométré",
          transition: 'fade',
        },
      },
      {
        type: 'click',
        target: 'exam-scope-section-4',
        narrate:
          'Ciblez tout le programme ou une seule section, ici la POO.',
      },
      {
        type: 'click',
        target: 'exam-count-10',
        narrate:
          'Choisissons dix questions pour une série pratique rapide.',
        video: { zoom: 1.2 },
      },
      {
        type: 'click',
        target: 'exam-start-btn',
        narrate:
          'Démarrons l’épreuve chronométrée.',
      },
      {
        type: 'highlight',
        target: 'exam-timer',
        narrate:
          'Le chronomètre vous aide à gérer votre cadence comme le jour officiel.',
        video: { zoom: 1.3 },
      },
      {
        type: 'click',
        target: 'exam-option-0',
        narrate:
          'Sélectionnez la sortie attendue parmi les quatre choix proposés.',
      },
      {
        type: 'click',
        target: 'exam-next-btn',
        narrate:
          'Passez à la question suivante ; le compteur met à jour votre avancement.',
      },
      {
        type: 'highlight',
        target: 'exam-finish-btn',
        narrate:
          'En fin de série, ce bouton soumet la copie pour afficher le score et la correction.',
        video: { zoom: 1.2, readingPause: 800 },
      },

      // ── Chapitre 5 : Code Lab, Aide-mémoire et Cartes ────────────────────
      {
        type: 'click',
        target: 'nav-mobile-more',
        narrate:
          'Explorons le Code Lab, l’aide-mémoire et les cartes personnalisées.',
        video: {
          chapter: 'Code Lab, Aide-mémoire et Cartes',
          transition: 'fade',
        },
      },
      {
        type: 'click',
        target: 'menu-nav-codelab',
        narrate:
          'Le Code Lab propose des scripts guidés par certification.',
      },
      {
        type: 'click',
        target: 'codelab-exp-name-mangling',
        narrate:
          'Sélectionnons l’expérience sur le double underscore et le name mangling.',
      },
      {
        type: 'click',
        target: 'codelab-run-btn',
        narrate:
          'Affichons la sortie attendue de cet exemple.',
        video: { zoom: 1.2 },
      },
      {
        type: 'highlight',
        target: 'codelab-console',
        narrate:
          'La console et l’encadré dessous montrent comment Python renomme l’attribut en interne.',
        video: { readingPause: 900 },
      },
      {
        type: 'click',
        target: 'nav-mobile-more',
        narrate:
          'Passons maintenant à l’aide-mémoire de référence.',
      },
      {
        type: 'click',
        target: 'menu-nav-cheatsheet',
        narrate:
          'Il rassemble les méthodes spéciales dunder, préfixes et exceptions.',
      },
      {
        type: 'type',
        target: 'cheatsheet-search',
        text: '__mro__',
        narrate:
          'Tapez un nom pour filtrer instantanément le tableau.',
        video: { zoom: 1.2 },
      },
      {
        type: 'highlight',
        target: 'cheatsheet-dunder-table',
        narrate:
          'Vous vérifiez aussitôt le retour attendu et le rôle à l’examen.',
        video: { readingPause: 800 },
      },
      {
        type: 'scroll',
        target: 'cheatsheet-exceptions',
        narrate:
          'Plus bas, la hiérarchie des exceptions rappelle l’ordre des clauses except.',
      },
      {
        type: 'navigate',
        target: 'nav-mobile-dashboard',
        narrate:
          'Revenons au tableau de bord pour créer une carte personnelle.',
      },
      {
        type: 'click',
        target: 'dashboard-create-card-btn',
        narrate:
          'Ouvrons l’éditeur de flashcard personnalisée.',
      },
      {
        type: 'type',
        target: 'create-card-topic',
        text: 'Ordre MRO Python',
        narrate:
          'Renseignez le sujet, la question et l’explication détaillée.',
        video: { zoom: 1.15 },
      },
      {
        type: 'type',
        target: 'create-card-question',
        text: 'Dans quel ordre __mro__ recherche-t-il les méthodes ?',
      },
      {
        type: 'type',
        target: 'create-card-explanation',
        text: 'Python applique la linéarisation C3 de gauche à droite.',
      },
      {
        type: 'click',
        target: 'create-card-submit',
        narrate:
          'Enregistrez : la carte rejoint votre collection locale et votre file SM-2.',
      },

      // ── Chapitre 6 : Préférences, Hors-ligne et Cloud ────────────────────
      {
        type: 'click',
        target: 'preferences-btn',
        narrate:
          'Finissons avec les réglages, le mode hors-ligne et le compte optionnel.',
        video: {
          chapter: 'Préférences, Hors-ligne et Cloud',
          transition: 'fade',
          zoom: 1.25,
        },
      },
      {
        type: 'highlight',
        target: 'pref-novice-btn',
        narrate:
          'Choisissez la langue, le thème clair ou sombre, et activez le mode débutant pour les infobulles d’aide.',
        video: { zoom: 1.2 },
      },
      {
        type: 'click',
        target: 'pref-install-btn',
        narrate:
          'Ouvrons le guide d’installation PWA.',
      },
      {
        type: 'click',
        target: 'install-tab-ios',
        narrate:
          'Chaque onglet explique comment installer Pythor sur Android, iPhone ou ordinateur pour réviser sans Internet.',
        video: { zoom: 1.2 },
      },
      {
        type: 'click',
        target: 'install-modal-close',
        narrate:
          'Refermons ce guide pour vérifier la synchronisation.',
      },
      {
        type: 'click',
        target: 'nav-mobile-more',
        narrate:
          'Ouvrons le menu Plus une dernière fois.',
      },
      {
        type: 'highlight',
        target: 'menu-account-card',
        narrate:
          'Tout fonctionne en local par défaut ; le compte Google reste optionnel pour synchroniser vos données entre appareils.',
        video: { readingPause: 900 },
      },
    ],
  },
});
