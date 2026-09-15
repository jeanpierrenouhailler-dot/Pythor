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
    examSim: string;
    cheatsheet: string;
    codeLab: string;
    srsMastered: string;
    settings: string;
    return: string;
    returnTo: string;
    quickSearch: string;
    notifications: string;
    streakDays: string;
    level: string;
    switchTrack: string;
    theme: string;
    themeLight: string;
    themeDark: string;
    light: string;
    dark: string;
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
    score: string;
    answered: string;
    flagged: string;
    restartExam: string;
  };
  // Flashcards SRS
  flashcards: {
    title: string;
    flipCard: string;
    showAnswer: string;
    hideAnswer: string;
    again: string;
    hard: string;
    good: string;
    easy: string;
    dueToday: string;
    studiedToday: string;
    masteryRate: string;
    restartSession: string;
    filterSection: string;
    allSections: string;
    allChapters: string;
    totalReviewed: string;
    question: string;
    answer: string;
    officialRef: string;
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
    systemOverview: string;
    releaseDate: string;
    lastChecked: string;
    autoUpdateActive: string;
    autoUpdateDisabled: string;
    checkForUpdates: string;
    forceUpdate: string;
    systemSettings: string;
    cardsMastered: string;
    retentionRate: string;
    examReadiness: string;
    syllabusBreakdown: string;
    startReview: string;
    practiceCode: string;
    takeExam: string;
    openCheatsheet: string;
    // Expanded Dashboard Screen Elements
    alignmentBadge: string;
    heroTitle: string;
    heroDesc: string;
    section1Btn: string;
    section2Btn: string;
    section3Btn: string;
    section4Btn: string;
    section5Btn: string;
    startExamBtn: string;
    cheatsheetBtn: string;
    passMark: string;
    estimatedRetention: string;
    totalCards: string;
    reviewed: string;
    masteredSrs: string;
    inLearning: string;
    cardsCount: string;
    workspacesTitle: string;
    workspacesSubtitle: string;
    flashcardsTitle: string;
    flashcardsDesc: string;
    flashcardsFooter: string;
    examSimTitle: string;
    examSimDesc: string;
    examSimFooter: string;
    codeLabTitle: string;
    codeLabDesc: string;
    codeLabFooter: string;
    cheatsheetCardTitle: string;
    cheatsheetCardDesc: string;
    cheatsheetCardFooter: string;
    blueprintTitle: string;
    blueprintSubtitle: string;
    deepDiveCardsBadge: string;
    cardsBadge: string;
    subChaptersCount: string;
    launchCards: string;
    coreFocusBadge: string;
    selectSubChapterPrompt: string;
    browseAllCards: string;
    startChapter: string;
    trapsTitle: string;
    sec1Title: string;
    sec1Desc: string;
    sec2Title: string;
    sec2Desc: string;
    sec3Title: string;
    sec3Desc: string;
    sec4Title: string;
    sec4Desc: string;
    sec5Title: string;
    sec5Desc: string;
    tabSec4: string;
    tabSec5: string;
    // Track and PCEP Keys
    trackPcapTitle: string;
    trackPcepTitle: string;
    trackPcapBadge: string;
    trackPcepBadge: string;
    trackSelectPrompt: string;
    createCardBtn: string;
    customCardsCount: string;
    pcepHeroDesc: string;
    pcepSec1Title: string;
    pcepSec1Desc: string;
    pcepSec2Title: string;
    pcepSec2Desc: string;
    pcepSec3Title: string;
    pcepSec3Desc: string;
    pcepSec4Title: string;
    pcepSec4Desc: string;
    pcepAlignmentBadge: string;
    pcepHeroTitle: string;
    pcepSec1Btn: string;
    pcepSec2Btn: string;
    pcepSec3Btn: string;
    pcepSec4Btn: string;
    pcepBlueprintTitle: string;
    pcepBlueprintSubtitle: string;
  };
  // Cheatsheet
  cheatsheet: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allCategories: string;
    syntaxSnippet: string;
    pcapTrap: string;
    copyCode: string;
    copied: string;
  };
  // Code Lab
  codelab: {
    title: string;
    subtitle: string;
    runPython: string;
    resetCode: string;
    selectExercise: string;
    outputTerminal: string;
    hints: string;
  };
  // Settings & Updates
  settings: {
    title: string;
    subtitle: string;
    tabUpdates: string;
    tabPreferences: string;
    tabDiagnostics: string;
    tabNotes: string;
    currentVersion: string;
    releaseDate: string;
    lastChecked: string;
    checkForUpdates: string;
    forceUpdate: string;
    restartNow: string;
    autoUpdateTitle: string;
    autoUpdateDesc: string;
    checkInterval: string;
    updateChannel: string;
    languageTitle: string;
    languageDesc: string;
    themeTitle: string;
    themeDesc: string;
    themeLight: string;
    themeDark: string;
    close: string;
    neverChecked: string;
    justNow: string;
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
      flashcards: 'Flashcards',
      dashboard: 'Dashboard',
      examSim: 'Exam Sim',
      cheatsheet: 'Cheatsheet',
      codeLab: 'Code Lab',
      srsMastered: 'SRS Mastered',
      settings: 'Settings',
      return: 'Return',
      returnTo: 'Return to',
      quickSearch: 'Quick search...',
      notifications: 'Notifications',
      streakDays: 'days',
      level: 'Level',
      switchTrack: 'Switch Track',
      theme: 'Theme',
      themeLight: 'Switch to Light Theme',
      themeDark: 'Switch to Dark Theme',
      light: 'Light',
      dark: 'Dark',
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
      score: 'Score',
      answered: 'Answered',
      flagged: 'Flagged',
      restartExam: 'Restart Simulator',
    },
    flashcards: {
      title: 'Spaced Repetition Flashcards',
      flipCard: 'Click or press Space to flip card',
      showAnswer: 'Show Answer',
      hideAnswer: 'Hide Answer',
      again: 'Again (<1m)',
      hard: 'Hard (12h)',
      good: 'Good (1d)',
      easy: 'Easy (4d)',
      dueToday: 'Cards Due Today',
      studiedToday: 'Studied Today',
      masteryRate: 'Retention Rate',
      restartSession: 'Restart Session',
      filterSection: 'Filter by Section',
      allSections: 'All Sections',
      allChapters: 'All Chapters',
      totalReviewed: 'Cards Reviewed',
      question: 'Question',
      answer: 'Answer & Explanation',
      officialRef: 'Official PCAP Reference',
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
      systemOverview: 'System Engine & Release Sync',
      releaseDate: 'Release Date',
      lastChecked: 'Last Checked',
      autoUpdateActive: 'Automatic Background Updates: Active',
      autoUpdateDisabled: 'Automatic Background Updates: Disabled',
      checkForUpdates: 'Check for Updates',
      forceUpdate: 'Force Update',
      systemSettings: 'System Settings',
      cardsMastered: 'Cards Mastered',
      retentionRate: 'Retention Rate',
      examReadiness: 'Exam Readiness',
      syllabusBreakdown: 'Official PCAP-31-03 Exam Blueprint',
      startReview: 'Start Flashcard Review',
      practiceCode: 'Launch Python Code Lab',
      takeExam: 'Take Timed Exam Simulator',
      openCheatsheet: 'Open Syntax Cheatsheet',
      // Expanded Dashboard Screen Elements
      alignmentBadge: 'Python Institute PCAP-31-03 Alignment',
      heroTitle: 'PCAP Python Certification Prep Studio',
      heroDesc: 'Master the Certified Associate in Python Programming exam with spaced repetition (SRS), featuring 100-card deep dives across all curriculum domains: Section 1 (Modules & PIP), Section 2 (Strings & Exceptions), Section 3 (Functions & Generators), Section 4 (OOP), and Section 5 (Comprehensions, Lambdas & I/O).',
      section1Btn: 'Section 1 (100 Cards)',
      section2Btn: 'Section 2 (100 Cards)',
      section3Btn: 'Section 3 (100 Cards)',
      section4Btn: 'Section 4 (100 OOP Cards)',
      section5Btn: 'Section 5 (100 Misc & I/O Cards)',
      startExamBtn: 'Start Practice Exam',
      cheatsheetBtn: 'Dunder Cheatsheet',
      passMark: 'Pass Mark: 70%',
      estimatedRetention: 'estimated retention',
      totalCards: 'Total Cards',
      reviewed: 'Reviewed',
      masteredSrs: 'Mastered (SRS)',
      inLearning: 'In Learning',
      cardsCount: 'Flashcards',
      workspacesTitle: 'Study Workspaces & Features',
      workspacesSubtitle: 'Access all learning tools directly or open the top-left Hamburger Menu from any page.',
      flashcardsTitle: 'Flashcards & SRS Studio',
      flashcardsDesc: 'Active recall with Spaced Repetition ratings, executable Python code snippets, and expected output checks.',
      flashcardsFooter: 'Cards available',
      examSimTitle: 'PCAP Exam Simulator',
      examSimDesc: 'Timed 10 to 25 question practice test simulating real certification conditions with automatic grading.',
      examSimFooter: 'Timed Practice Mode',
      codeLabTitle: 'Python OOP Code Lab',
      codeLabDesc: 'Interactive code viewer demonstrating C3 MRO diamond inheritance, name mangling, and attribute delegation.',
      codeLabFooter: 'Interactive Sandbox',
      cheatsheetCardTitle: 'PCAP Dunder Cheatsheet',
      cheatsheetCardDesc: 'Quick lookup for __init__, __str__, __repr__, __bases__, __mro__, name mangling rules and operator dunders.',
      cheatsheetCardFooter: 'Official Reference',
      blueprintTitle: 'Official PCAP-31-03 Blueprint Domains',
      blueprintSubtitle: 'Weights and curriculum syllabus defined by the Python Institute.',
      deepDiveCardsBadge: 'Deep-Dive Cards',
      cardsBadge: 'Cards',
      subChaptersCount: 'Sub-chapters',
      launchCards: 'Launch Study Cards',
      coreFocusBadge: 'Core Exam Domain',
      selectSubChapterPrompt: 'Select any sub-chapter to launch targeted active recall flashcards.',
      browseAllCards: 'Browse All 100 Cards',
      startChapter: 'Start Chapter',
      trapsTitle: 'High-Yield PCAP-31-03 Exam Traps & Gotchas',
      sec1Title: 'Modules, Packages and PIP',
      sec1Desc: 'Import mechanisms, sys.path, __name__, standard modules math/random/platform, package creation with __init__.py and PIP ecosystem.',
      sec2Title: 'Data Aggregates and Exceptions',
      sec2Desc: 'String immutability, ASCII/Unicode, 20+ string methods, slicing notation, exception hierarchies and try-except-else-finally.',
      sec3Title: 'Functions, Generators, and Closures',
      sec3Desc: 'Advanced parameters, *args/**kwargs, LEGB scopes, generator yield execution suspension, iterator protocol, lambdas, map/filter, and closures.',
      sec4Title: 'Object-Oriented Programming (OOP)',
      sec4Desc: 'Classes, instances, class vs instance attributes, name mangling, __init__, dunders, multiple inheritance, super(), and C3 MRO linearization.',
      sec5Title: 'Miscellaneous (List Comprehensions, Lambdas, Closures, I/O)',
      sec5Desc: 'List, dict, and set comprehensions, ternary expressions, lambdas, map/filter/reduce, closures, nonlocal scope, file streams, bytearray, errno, and OS operations.',
      tabSec4: 'Section 4: OOP Focus (34% Weight)',
      tabSec5: 'Section 5: Misc, Lambdas & I/O (20% Weight)',
      trackPcapTitle: 'PCAP-31-03 Certified Associate in Python Programming',
      trackPcepTitle: 'PCEP-30-0x Certified Entry-Level Python Programmer',
      trackPcapBadge: 'PCAP-31-03 Associate Track',
      trackPcepBadge: 'PCEP-30-0x Entry-Level Track',
      trackSelectPrompt: 'Switch between Entry-Level (PCEP) and Associate (PCAP) preparation tracks',
      createCardBtn: 'Create Flashcard',
      customCardsCount: 'Custom Cards',
      pcepHeroDesc:
        'Official preparation track for the Python Institute PCEP-30-0x exam. Master fundamental programming concepts, syntax, control flows, data collections, and basic functions and exceptions with active recall and custom flashcards.',
      pcepSec1Title: 'Computer Programming and Python Fundamentals',
      pcepSec1Desc:
        'Fundamental concepts of computer programming, interpretation vs compilation, literals, numeric types, basic I/O (print with sep/end), operators, dynamic typing, and PEP 8 naming.',
      pcepSec2Title: 'Control Flow – Conditional Blocks and Loops',
      pcepSec2Desc:
        'Conditional branching (if-elif-else), equality/relational operators, logical operations with short-circuit evaluation, bitwise operators, and loops (while, for, range, break, continue, else).',
      pcepSec3Title: 'Data Collections – Lists, Tuples, Dictionaries',
      pcepSec3Desc:
        'List indexing, slicing [start:stop:step], in-place mutations, memory aliases vs copies ([:]), tuple immutability and singleton syntax, dictionary key hashing, and key-value mapping operations.',
      pcepSec4Title: 'Functions and Exceptions',
      pcepSec4Desc:
        'Function definitions (def), parameter passing (positional vs keyword), default arguments, local and global variable scopes, basic try-except blocks, and common exception types.',
      pcepAlignmentBadge: 'Aligned with OpenEDG Python Institute PCEP-30-0x Blueprint',
      pcepHeroTitle: 'PCEP-30-0x Certified Entry-Level Python Programmer Studio',
      pcepSec1Btn: 'Section 1: Fundamentals',
      pcepSec2Btn: 'Section 2: Control Flow',
      pcepSec3Btn: 'Section 3: Collections',
      pcepSec4Btn: 'Section 4: Functions',
      pcepBlueprintTitle: 'Official PCEP-30-0x Blueprint Domains',
      pcepBlueprintSubtitle: 'Curriculum syllabus & domain weights defined by Python Institute.',
    },
    cheatsheet: {
      title: 'Python 3.12 & PCAP Cheatsheet',
      subtitle: 'Key syntax, built-ins, exceptions, OOP patterns, and common exam traps',
      searchPlaceholder: 'Search syntax, methods, or traps...',
      allCategories: 'All Categories',
      syntaxSnippet: 'Syntax Snippet',
      pcapTrap: 'PCAP Exam Trap',
      copyCode: 'Copy',
      copied: 'Copied!',
    },
    codelab: {
      title: 'Interactive Python 3.12 Code Lab',
      subtitle: 'Hands-on practice exercises testing actual CPython evaluation rules',
      runPython: 'Run Code',
      resetCode: 'Reset',
      selectExercise: 'Select Practice Challenge',
      outputTerminal: 'Execution Output Terminal',
      hints: 'Hints & Solution Walkthrough',
    },
    settings: {
      title: 'System Settings & Updates',
      subtitle: 'Client runtime, background updates daemon, language, and theme',
      tabUpdates: 'Updates & Version',
      tabPreferences: 'Language & Theme',
      tabDiagnostics: 'Diagnostics',
      tabNotes: 'Release Notes',
      currentVersion: 'Current Installed Version',
      releaseDate: 'Release Date',
      lastChecked: 'Last Checked',
      checkForUpdates: 'Check for Updates',
      forceUpdate: 'Force Update',
      restartNow: 'Restart & Apply Update',
      autoUpdateTitle: 'Automatic Background Updates',
      autoUpdateDesc: 'Periodically queries the release registry and stages updates silently without interrupting your study session.',
      checkInterval: 'Checking Frequency',
      updateChannel: 'Release Channel',
      languageTitle: 'Application Language',
      languageDesc: 'Switch the entire interface and exam studio between English and French.',
      themeTitle: 'Visual Appearance',
      themeDesc: 'Toggle between the dark studio environment and the clean high-contrast light theme.',
      themeLight: 'Light Theme',
      themeDark: 'Dark Theme',
      close: 'Close',
      neverChecked: 'Never checked',
      justNow: 'Just now',
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
      flashcards: 'Cartes mémoire',
      dashboard: 'Tableau de bord',
      examSim: 'Simulateur d’examen',
      cheatsheet: 'Aide-mémoire',
      codeLab: 'Lab de code',
      srsMastered: 'SRS Maîtrisé',
      settings: 'Paramètres',
      return: 'Retour',
      returnTo: 'Retour vers',
      quickSearch: 'Recherche rapide...',
      notifications: 'Notifications',
      streakDays: 'jours',
      level: 'Niveau',
      switchTrack: 'Changer de parcours',
      theme: 'Thème',
      themeLight: 'Passer au thème clair',
      themeDark: 'Passer au thème sombre',
      light: 'Clair',
      dark: 'Sombre',
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
      examTitle: 'Simulateur d’examen officiel PCAP',
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
      score: 'Score',
      answered: 'Répondu',
      flagged: 'Marqué',
      restartExam: 'Recommencer l’examen',
    },
    flashcards: {
      title: 'Cartes mémoire & Répétition espacée (SRS)',
      flipCard: 'Cliquez ou appuyez sur Espace pour retourner',
      showAnswer: 'Afficher la réponse',
      hideAnswer: 'Masquer la réponse',
      again: 'À revoir (<1m)',
      hard: 'Difficile (12h)',
      good: 'Bien (1j)',
      easy: 'Facile (4j)',
      dueToday: 'Cartes à réviser aujourd’hui',
      studiedToday: 'Étudiées aujourd’hui',
      masteryRate: 'Taux de mémorisation',
      restartSession: 'Recommencer la session',
      filterSection: 'Filtrer par section',
      allSections: 'Toutes les sections',
      allChapters: 'Tous les chapitres',
      totalReviewed: 'Cartes révisées',
      question: 'Question',
      answer: 'Réponse & Explication',
      officialRef: 'Référence officielle PCAP',
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
      systemOverview: 'Moteur système & Mises à jour',
      releaseDate: 'Date de publication',
      lastChecked: 'Dernière vérification',
      autoUpdateActive: 'Mises à jour automatiques en arrière-plan : Actives',
      autoUpdateDisabled: 'Mises à jour automatiques en arrière-plan : Désactivées',
      checkForUpdates: 'Vérifier les mises à jour',
      forceUpdate: 'Forcer la mise à jour',
      systemSettings: 'Paramètres système',
      cardsMastered: 'Cartes maîtrisées',
      retentionRate: 'Taux de rétention',
      examReadiness: 'Préparation à l’examen',
      syllabusBreakdown: 'Programme officiel de l’examen PCAP-31-03',
      startReview: 'Démarrer les cartes mémoire',
      practiceCode: 'Lancer le Lab de code Python',
      takeExam: 'Lancer le simulateur chronométré',
      openCheatsheet: 'Consulter l’aide-mémoire',
      // Expanded Dashboard Screen Elements
      alignmentBadge: 'Conformité au Programme Python Institute PCAP-31-03',
      heroTitle: 'Studio de Préparation à la Certification PCAP Python',
      heroDesc: 'Maîtrisez l’examen Certified Associate in Python Programming grâce à la répétition espacée (SRS), avec 100 cartes approfondies pour chaque domaine du programme : Section 1 (Modules & PIP), Section 2 (Chaînes & Exceptions), Section 3 (Fonctions & Générateurs), Section 4 (POO) et Section 5 (Compréhensions, Lambdas & E/S).',
      section1Btn: 'Section 1 (100 Cartes)',
      section2Btn: 'Section 2 (100 Cartes)',
      section3Btn: 'Section 3 (100 Cartes)',
      section4Btn: 'Section 4 (100 Cartes POO)',
      section5Btn: 'Section 5 (100 Cartes E/S & Divers)',
      startExamBtn: 'Démarrer l’examen blanc',
      cheatsheetBtn: 'Aide-mémoire Dunders',
      passMark: 'Seuil d’admission : 70%',
      estimatedRetention: 'rétention estimée',
      totalCards: 'Total des cartes',
      reviewed: 'Révisées',
      masteredSrs: 'Maîtrisées (SRS)',
      inLearning: 'En apprentissage',
      cardsCount: 'Cartes mémoire',
      workspacesTitle: 'Espaces d’étude & Outils interactifs',
      workspacesSubtitle: 'Accédez directement à tous les modules ou ouvrez le menu hamburger en haut à gauche depuis n’importe quel écran.',
      flashcardsTitle: 'Studio de Cartes Mémoire & SRS',
      flashcardsDesc: 'Rappel actif avec répétition espacée, extraits de code Python exécutables et vérification des sorties attendues.',
      flashcardsFooter: 'Cartes disponibles',
      examSimTitle: 'Simulateur d’Examen PCAP',
      examSimDesc: 'Test chronométré de 10 à 25 questions simulant les conditions réelles de certification avec notation automatique.',
      examSimFooter: 'Mode d’entraînement chronométré',
      codeLabTitle: 'Lab de Code Python & POO',
      codeLabDesc: 'Visualiseur de code interactif démontrant l’héritage en diamant C3 MRO, le masquage de noms et la délégation d’attributs.',
      codeLabFooter: 'Bac à sable interactif',
      cheatsheetCardTitle: 'Aide-mémoire PCAP & Dunders',
      cheatsheetCardDesc: 'Recherche rapide pour __init__, __str__, __repr__, __bases__, __mro__, règles de masquage de noms et dunders d’opérateurs.',
      cheatsheetCardFooter: 'Référence officielle',
      blueprintTitle: 'Domaines officiels du programme PCAP-31-03',
      blueprintSubtitle: 'Pondérations et programme pédagogique définis par le Python Institute.',
      deepDiveCardsBadge: 'Cartes approfondies',
      cardsBadge: 'Cartes',
      subChaptersCount: 'Sous-chapitres',
      launchCards: 'Lancer les cartes d’étude',
      coreFocusBadge: 'Domaine clé du programme',
      selectSubChapterPrompt: 'Sélectionnez un sous-chapitre pour lancer des cartes de révision ciblées.',
      browseAllCards: 'Parcourir les 100 cartes',
      startChapter: 'Démarrer le chapitre',
      trapsTitle: 'Pièges fréquents & Astuces de l’examen PCAP-31-03',
      sec1Title: 'Modules, Paquetages et PIP',
      sec1Desc: 'Mécanismes d’importation, sys.path, __name__, modules standard math/random/platform, création de paquetages avec __init__.py et écosystème PIP.',
      sec2Title: 'Agrégats de Données et Exceptions',
      sec2Desc: 'Immuabilité des chaînes, ASCII/Unicode, plus de 20 méthodes de chaînes, découpage en tranches, hiérarchie d’exceptions et blocs try-except-else-finally.',
      sec3Title: 'Fonctions, Générateurs et Fermetures',
      sec3Desc: 'Paramètres avancés, *args/**kwargs, portées LEGB, suspension d’exécution avec yield, protocole itérateur, lambdas, map/filter et fermetures.',
      sec4Title: 'Programmation Orientée Objet (POO)',
      sec4Desc: 'Classes, instances, attributs de classe vs instance, masquage de noms, constructeur __init__, dunders, héritage multiple, super() et linéarisation MRO C3.',
      sec5Title: 'Divers (Compréhensions, Lambdas, Fermetures, E/S)',
      sec5Desc: 'Compréhensions de listes, dictionnaires et ensembles, expressions ternaires, lambdas, map/filter/reduce, fermetures, mot-clé nonlocal, flux de fichiers texte et binaires, bytearray, errno et opérations système OS.',
      tabSec4: 'Section 4 : Domaine POO (34% du score)',
      tabSec5: 'Section 5 : Divers, Lambdas & E/S (20% du score)',
      trackPcapTitle: 'Certification PCAP-31-03 Associé Certifié en Programmation Python',
      trackPcepTitle: 'Certification PCEP-30-0x Programmeur Python Niveau Débutant',
      trackPcapBadge: 'Parcours Associé PCAP-31-03',
      trackPcepBadge: 'Parcours Débutant PCEP-30-0x',
      trackSelectPrompt: 'Basculer entre les parcours de préparation Débutant (PCEP) et Associé (PCAP)',
      createCardBtn: 'Créer une carte',
      customCardsCount: 'Cartes personnalisées',
      pcepHeroDesc:
        'Parcours officiel de préparation à la certification Python Institute PCEP-30-0x. Maîtrisez les concepts fondamentaux de programmation, la syntaxe de base, les structures de contrôle, les collections de données, ainsi que les fonctions et exceptions avec répétition espacée et création de cartes.',
      pcepSec1Title: 'Programmation et Fondamentaux Python',
      pcepSec1Desc:
        'Concepts fondamentaux de l’informatique, interprétation vs compilation, littéraux, types numériques, E/S de base (print avec sep/end), opérateurs, typage dynamique et conventions PEP 8.',
      pcepSec2Title: 'Contrôle du Flux – Blocs Conditionnels et Boucles',
      pcepSec2Desc:
        'Branchements conditionnels (if-elif-else), opérateurs relationnels et d’égalité, logique booléenne avec évaluation en court-circuit, opérateurs bit à bit et boucles (while, for, range, break, continue, else).',
      pcepSec3Title: 'Collections de Données – Listes, Tuples, Dictionnaires',
      pcepSec3Desc:
        'Indexation et découpage [start:stop:step], méthodes de listes, références mémoires vs copies ([:]), immuabilité des tuples et syntaxe singleton, clés de dictionnaire et manipulations clé-valeur.',
      pcepSec4Title: 'Fonctions et Exceptions',
      pcepSec4Desc:
        'Définition de fonctions (def), passage d’arguments positionnels et nommés, paramètres par défaut, portées locales et globales (mot-clé global), blocs try-except et exceptions courantes.',
      pcepAlignmentBadge: 'Conforme au référentiel officiel OpenEDG Python Institute PCEP-30-0x',
      pcepHeroTitle: 'Studio PCEP-30-0x Programmeur Python Certifié Niveau Débutant',
      pcepSec1Btn: 'Section 1 : Fondamentaux',
      pcepSec2Btn: 'Section 2 : Contrôle du flux',
      pcepSec3Btn: 'Section 3 : Collections',
      pcepSec4Btn: 'Section 4 : Fonctions',
      pcepBlueprintTitle: 'Domaines Officiels du Référentiel PCEP-30-0x',
      pcepBlueprintSubtitle: 'Programme officiel et pondération des domaines définis par le Python Institute.',
    },
    cheatsheet: {
      title: 'Aide-mémoire Python 3.12 & PCAP',
      subtitle: 'Syntaxe clé, fonctions natives, exceptions, POO et pièges fréquents de l’examen',
      searchPlaceholder: 'Rechercher syntaxe, méthodes ou pièges...',
      allCategories: 'Toutes les catégories',
      syntaxSnippet: 'Extrait de syntaxe',
      pcapTrap: 'Piège typique PCAP',
      copyCode: 'Copier',
      copied: 'Copié !',
    },
    codelab: {
      title: 'Lab interactif Python 3.12',
      subtitle: 'Exercices pratiques testant les règles réelles d’évaluation de CPython',
      runPython: 'Exécuter le code',
      resetCode: 'Réinitialiser',
      selectExercise: 'Sélectionner un exercice',
      outputTerminal: 'Terminal de sortie d’exécution',
      hints: 'Indices et résolution guidée',
    },
    settings: {
      title: 'Paramètres système & Mises à jour',
      subtitle: 'Runtime client, daemon de mise à jour en arrière-plan, langue et thème',
      tabUpdates: 'Mises à jour & Version',
      tabPreferences: 'Langue & Thème',
      tabDiagnostics: 'Diagnostics',
      tabNotes: 'Notes de version',
      currentVersion: 'Version actuelle installée',
      releaseDate: 'Date de publication',
      lastChecked: 'Dernière vérification',
      checkForUpdates: 'Vérifier les mises à jour',
      forceUpdate: 'Forcer la mise à jour',
      restartNow: 'Redémarrer & Appliquer la mise à jour',
      autoUpdateTitle: 'Mises à jour automatiques en arrière-plan',
      autoUpdateDesc: 'Interroge régulièrement le registre et télécharge silencieusement les mises à jour sans interrompre votre session de révision.',
      checkInterval: 'Fréquence de vérification',
      updateChannel: 'Canal de publication',
      languageTitle: 'Langue de l’application',
      languageDesc: 'Basculez l’ensemble de l’interface et du studio entre l’anglais et le français.',
      themeTitle: 'Apparence visuelle',
      themeDesc: 'Basculez entre le thème sombre studio et le thème clair haute lisibilité.',
      themeLight: 'Thème clair',
      themeDark: 'Thème sombre',
      close: 'Fermer',
      neverChecked: 'Jamais vérifié',
      justNow: 'À l’instant',
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

