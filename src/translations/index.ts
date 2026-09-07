export type Language = 'en' | 'fr';

export interface Translations {
  // Navigation & Header
  nav: {
    learningPath: string;
    pcapCert: string;
    pcepCert: string;
    ideStudio: string;
    flashcards: string;
    dashboard: string;
    return: string;
    returnTo: string;
    quickSearch: string;
    notifications: string;
    streakDays: string;
    level: string;
    switchTrack: string;
    themeLight: string;
    themeDark: string;
    language: string;
    toggleLanguage: string;
    english: string;
    french: string;
  };
  // Learning Path / Parcours
  parcours: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterProgress: string;
    filterMastered: string;
    slideOverSheet: string;
    dockedPanel: string;
    inspectSection: string;
    inspectChapter: string;
    positionAtPanel: string;
    takeExam: string;
    duration: string;
    reward: string;
    mastery: string;
    status: string;
    examWeight: string;
    coreObjective: string;
    examRequirements: string;
    pythonSyntax: string;
    exercisesInChapter: string;
    complete: string;
    launchPractice: string;
    locateInTree: string;
    prevChapter: string;
    nextChapter: string;
    closeDetails: string;
    pressEnter: string;
    escToClose: string;
    copy: string;
    copied: string;
    practice: string;
    details: string;
    clickToOpen: string;
    ready: string;
    masteredTag: string;
    filterToPrepare: string;
  };
  // IDE Studio
  ide: {
    briefing: string;
    consoleOutput: string;
    unitTests: string;
    runCode: string;
    submit: string;
    reset: string;
    copyCode: string;
    copied: string;
    hints: string;
    aiAssistant: string;
    editor: string;
    timeRemaining: string;
    successOutput: string;
  };
  // Exam Simulator
  exam: {
    examTitle: string;
    question: string;
    of: string;
    timeRemaining: string;
    flagQuestion: string;
    unflagQuestion: string;
    submitExam: string;
    prevQuestion: string;
    nextQuestion: string;
    passingScore: string;
    congratulations: string;
    examPassed: string;
    examFailed: string;
    reviewAnswers: string;
    startNewExam: string;
    exitExam: string;
  };
  // Flashcards SRS
  flashcards: {
    title: string;
    flipCard: string;
    showAnswer: string;
    again: string;
    hard: string;
    good: string;
    easy: string;
    dueToday: string;
    studiedToday: string;
    masteryRate: string;
    restartSession: string;
  };
  // Dashboard
  dashboard: {
    welcome: string;
    continueLearning: string;
    dailyQuests: string;
    realProjects: string;
    recentSubmissions: string;
    leaderboard: string;
    activeTrack: string;
    overallProgress: string;
    openInIde: string;
    past30Days: string;
    streak: string;
    experience: string;
    challenges: string;
  };
  // Command Palette
  palette: {
    placeholder: string;
    noResults: string;
    navigation: string;
    actions: string;
    toggleTheme: string;
    changeLanguage: string;
    returnToPrev: string;
  };
  // Hamburger Feature Menu
  menu: {
    menuButton: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    noResults: string;
    allCategories: string;
    activeBadge: string;
    catCertifications: string;
    catCertificationsDesc: string;
    catCoding: string;
    catCodingDesc: string;
    catSrs: string;
    catSrsDesc: string;
    catAnalytics: string;
    catAnalyticsDesc: string;
    catTools: string;
    catToolsDesc: string;
    catPreferences: string;
    catPreferencesDesc: string;
    openFeature: string;
    switchTrackPrompt: string;
    quickLaunchChallenge: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      learningPath: 'Learning Path',
      pcapCert: 'PCAP™ Certification',
      pcepCert: 'PCEP™ Certification',
      ideStudio: 'IDE Studio',
      flashcards: 'Flashcards & SRS',
      dashboard: 'Dashboard',
      return: 'Return',
      returnTo: 'Return to',
      quickSearch: 'Quick search...',
      notifications: 'Notifications',
      streakDays: 'days',
      level: 'Level',
      switchTrack: 'Switch Track',
      themeLight: 'Switch to Light Theme',
      themeDark: 'Switch to Dark Theme',
      language: 'Language',
      toggleLanguage: 'Français',
      english: 'English',
      french: 'French',
    },
    parcours: {
      title: 'Certification Learning Path',
      subtitle: 'Official curriculum syllabus covering 100% of exam objectives.',
      filterAll: 'All Modules',
      filterProgress: 'In Progress',
      filterMastered: 'Mastered',
      slideOverSheet: 'Slide-Over Sheet',
      dockedPanel: 'Docked Panel',
      inspectSection: 'Inspect Section',
      inspectChapter: 'Inspect Chapter',
      positionAtPanel: 'Position At Panel',
      takeExam: 'Take Mock Exam',
      duration: 'DURATION',
      reward: 'REWARD',
      mastery: 'MASTERY',
      status: 'STATUS',
      examWeight: 'Exam Weight',
      coreObjective: 'Syllabus Core Objective',
      examRequirements: 'Official Exam Requirements:',
      pythonSyntax: 'Python 3.12 Syntax Reference',
      exercisesInChapter: 'Exercises in this chapter:',
      complete: 'Complete',
      launchPractice: 'Launch Chapter Practice in IDE Studio',
      locateInTree: 'Locate in tree ↓',
      prevChapter: 'Previous Chapter',
      nextChapter: 'Next Chapter',
      closeDetails: 'Close Details (Esc)',
      pressEnter: 'Press Enter to launch',
      escToClose: 'Esc to close',
      copy: 'Copy',
      copied: 'Copied!',
      practice: 'Practice',
      details: 'Details',
      clickToOpen: 'Click to open ↗',
      ready: 'Ready',
      masteredTag: 'Mastered ✓',
      filterToPrepare: 'To Prepare',
    },
    ide: {
      briefing: 'Briefing & Objectives',
      consoleOutput: 'Console Output',
      unitTests: 'Unit Tests',
      runCode: 'Run Code',
      submit: 'Submit Solution',
      reset: 'Reset Code',
      copyCode: 'Copy',
      copied: 'Copied!',
      hints: 'Hints',
      aiAssistant: 'AI Tutor',
      editor: 'Python 3.12 Editor',
      timeRemaining: 'Time Left',
      successOutput: 'All tests passed successfully!',
    },
    exam: {
      examTitle: 'Certification Exam Simulator',
      question: 'Question',
      of: 'of',
      timeRemaining: 'Time Remaining',
      flagQuestion: 'Flag for Review',
      unflagQuestion: 'Unflag Question',
      submitExam: 'Submit Exam',
      prevQuestion: 'Previous',
      nextQuestion: 'Next',
      passingScore: 'Passing Score: 70%',
      congratulations: 'Congratulations!',
      examPassed: 'You passed the certification exam simulator!',
      examFailed: 'You did not reach the 70% threshold. Review your weak areas below.',
      reviewAnswers: 'Review Detailed Answers',
      startNewExam: 'Start New Simulator',
      exitExam: 'Return to Learning Path',
    },
    flashcards: {
      title: 'Spaced Repetition Flashcards',
      flipCard: 'Click or press Space to flip card',
      showAnswer: 'Show Answer',
      again: 'Again (<1m)',
      hard: 'Hard (12h)',
      good: 'Good (1d)',
      easy: 'Easy (4d)',
      dueToday: 'Cards Due Today',
      studiedToday: 'Studied Today',
      masteryRate: 'Retention Rate',
      restartSession: 'Restart Session',
    },
    dashboard: {
      welcome: 'Welcome back',
      continueLearning: 'Continue Learning',
      dailyQuests: 'Daily Quests',
      realProjects: 'Practical Projects',
      recentSubmissions: 'Recent Submissions',
      leaderboard: 'Global Leaderboard',
      activeTrack: 'Active Certification Track',
      overallProgress: 'Overall Syllabus Progress',
      openInIde: 'Open in IDE',
      past30Days: 'Past 30 Days Activity',
      streak: 'Streak',
      experience: 'Experience',
      challenges: 'Challenges',
    },
    palette: {
      placeholder: 'Type a command, chapter or search...',
      noResults: 'No results found',
      navigation: 'Navigation',
      actions: 'Preferences & Actions',
      toggleTheme: 'Toggle Theme (Light / Dark)',
      changeLanguage: 'Passer en Français (French)',
      returnToPrev: 'Return to previous screen',
    },
    menu: {
      menuButton: 'Features Menu',
      title: 'Feature Directory',
      subtitle: 'All Pythor tools, modules & engines organized by feature',
      searchPlaceholder: 'Filter features, modules or tools...',
      noResults: 'No features found matching your filter.',
      allCategories: 'All Features',
      activeBadge: 'Active View',
      catCertifications: 'Certifications & Curriculum',
      catCertificationsDesc: 'Official syllabus tree, chapter breakdowns & mock exam simulator',
      catCoding: 'Code & Practice Labs',
      catCodingDesc: 'Python 3.12 IDE, terminals, blanks exercises & hands-on challenges',
      catSrs: 'Retention & Spaced Repetition',
      catSrsDesc: 'Leitner flashcards deck, STDOUT prediction & daily review queue',
      catAnalytics: 'Analytics & Progress',
      catAnalyticsDesc: 'Readiness index, daily quests, streak & Diamond League rankings',
      catTools: 'Quick Tools & Palette',
      catToolsDesc: 'Global search, notifications & quick return navigation',
      catPreferences: 'Preferences & Settings',
      catPreferencesDesc: 'Theme customization, language switch & active user profile',
      openFeature: 'Open Feature',
      switchTrackPrompt: 'Switch between PCEP and PCAP curriculum tracks',
      quickLaunchChallenge: 'Quick launch coding challenge',
    },
  },
  fr: {
    nav: {
      learningPath: 'Parcours d’apprentissage',
      pcapCert: 'Certification PCAP™',
      pcepCert: 'Certification PCEP™',
      ideStudio: 'Studio IDE',
      flashcards: 'Flashcards & SRS',
      dashboard: 'Tableau de bord',
      return: 'Retour',
      returnTo: 'Retour vers',
      quickSearch: 'Recherche rapide...',
      notifications: 'Notifications',
      streakDays: 'jours',
      level: 'Niveau',
      switchTrack: 'Changer de parcours',
      themeLight: 'Passer au thème clair',
      themeDark: 'Passer au thème sombre',
      language: 'Langue',
      toggleLanguage: 'English',
      english: 'Anglais',
      french: 'Français',
    },
    parcours: {
      title: 'Parcours Officiel de Certification',
      subtitle: 'Programme officiel couvrant 100% des compétences requises pour l’examen.',
      filterAll: 'Tous les modules',
      filterProgress: 'En cours',
      filterMastered: 'Maîtrisés',
      slideOverSheet: 'Volet latéral',
      dockedPanel: 'Panneau ancré',
      inspectSection: 'Inspecter la section',
      inspectChapter: 'Inspecter le chapitre',
      positionAtPanel: 'Positionner sur le panneau',
      takeExam: 'Passer l’examen blanc',
      duration: 'DURÉE',
      reward: 'RÉCOMPENSE',
      mastery: 'MAÎTRISE',
      status: 'STATUT',
      examWeight: 'Poids à l’examen',
      coreObjective: 'Objectif pédagogique principal',
      examRequirements: 'Exigences officielles de l’examen :',
      pythonSyntax: 'Référence syntaxique Python 3.12',
      exercisesInChapter: 'Exercices dans ce chapitre :',
      complete: 'Terminé',
      launchPractice: 'Lancer l’exercice dans le Studio IDE',
      locateInTree: 'Repérer dans l’arbre ↓',
      prevChapter: 'Chapitre précédent',
      nextChapter: 'Chapitre suivant',
      closeDetails: 'Fermer les détails (Échap)',
      pressEnter: 'Appuyez sur Entrée pour lancer',
      escToClose: 'Échap pour fermer',
      copy: 'Copier',
      copied: 'Copié !',
      practice: 'Pratiquer',
      details: 'Détails',
      clickToOpen: 'Cliquer pour ouvrir ↗',
      ready: 'Prêt',
      masteredTag: 'Maîtrisé ✓',
      filterToPrepare: 'À préparer',
    },
    ide: {
      briefing: 'Briefing & Objectifs',
      consoleOutput: 'Sortie console',
      unitTests: 'Tests unitaires',
      runCode: 'Exécuter le code',
      submit: 'Soumettre la solution',
      reset: 'Réinitialiser',
      copyCode: 'Copier',
      copied: 'Copié !',
      hints: 'Indices',
      aiAssistant: 'Tuteur IA',
      editor: 'Éditeur Python 3.12',
      timeRemaining: 'Temps restant',
      successOutput: 'Tous les tests ont réussi avec succès !',
    },
    exam: {
      examTitle: 'Simulateur d’examen officiel',
      question: 'Question',
      of: 'sur',
      timeRemaining: 'Temps restant',
      flagQuestion: 'Marquer pour révision',
      unflagQuestion: 'Démarquer la question',
      submitExam: 'Valider et terminer l’examen',
      prevQuestion: 'Précédente',
      nextQuestion: 'Suivante',
      passingScore: 'Score de réussite : 70%',
      congratulations: 'Félicitations !',
      examPassed: 'Vous avez brillamment réussi le simulateur d’examen !',
      examFailed: 'Le seuil de 70% n’a pas été atteint. Analysez vos points faibles ci-dessous.',
      reviewAnswers: 'Consulter les corrigés détaillés',
      startNewExam: 'Relancer un examen blanc',
      exitExam: 'Retourner au parcours',
    },
    flashcards: {
      title: 'Cartes mémoire & Répétition espacée (SRS)',
      flipCard: 'Cliquez ou appuyez sur Espace pour retourner',
      showAnswer: 'Afficher la réponse',
      again: 'À revoir (<1m)',
      hard: 'Difficile (12h)',
      good: 'Bien (1j)',
      easy: 'Facile (4j)',
      dueToday: 'Cartes à réviser aujourd’hui',
      studiedToday: 'Étudiées aujourd’hui',
      masteryRate: 'Taux de mémorisation',
      restartSession: 'Recommencer la session',
    },
    dashboard: {
      welcome: 'Bon retour parmi nous',
      continueLearning: 'Reprendre l’apprentissage',
      dailyQuests: 'Quêtes du jour',
      realProjects: 'Projets appliqués',
      recentSubmissions: 'Dernières soumissions',
      leaderboard: 'Classement général',
      activeTrack: 'Parcours de certification actif',
      overallProgress: 'Progression globale du programme',
      openInIde: 'Ouvrir dans l’IDE',
      past30Days: 'Activité des 30 derniers jours',
      streak: 'Série',
      experience: 'Expérience',
      challenges: 'Défis',
    },
    palette: {
      placeholder: 'Tapez une commande, un chapitre ou recherchez...',
      noResults: 'Aucun résultat trouvé',
      navigation: 'Navigation',
      actions: 'Préférences & Actions',
      toggleTheme: 'Basculer le thème (Clair / Sombre)',
      changeLanguage: 'Switch to English (Anglais)',
      returnToPrev: 'Retourner à l’écran précédent',
    },
    menu: {
      menuButton: 'Menu des fonctionnalités',
      title: 'Répertoire des fonctionnalités',
      subtitle: 'Tous les outils, modules et moteurs de Pythor classés par catégorie',
      searchPlaceholder: 'Filtrer les fonctionnalités, modules ou outils...',
      noResults: 'Aucune fonctionnalité ne correspond à votre filtre.',
      allCategories: 'Toutes',
      activeBadge: 'Vue active',
      catCertifications: 'Certifications & Parcours',
      catCertificationsDesc: 'Arbre pédagogique officiel, chapitres détaillés et simulateur d’examen',
      catCoding: 'Studio de Code & Pratique',
      catCodingDesc: 'IDE Python 3.12, terminal interactif, exercices guidés et défis pratiques',
      catSrs: 'Mémorisation & SRS',
      catSrsDesc: 'Cartes mémoire Leitner, prédiction de sortie CPython et file de révision',
      catAnalytics: 'Progression & Analytique',
      catAnalyticsDesc: 'Indice de préparation, quêtes quotidiennes, série et Ligue Diamant',
      catTools: 'Outils & Commandes rapides',
      catToolsDesc: 'Recherche globale, notifications et retour rapide en arrière',
      catPreferences: 'Préférences & Paramètres',
      catPreferencesDesc: 'Thèmes clair/sombre, changement de langue et profil utilisateur',
      openFeature: 'Ouvrir la fonctionnalité',
      switchTrackPrompt: 'Changer entre les programmes PCEP et PCAP',
      quickLaunchChallenge: 'Lancement rapide d’un défi de code',
    },
  },
};
