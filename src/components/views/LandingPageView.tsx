import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  GraduationCap,
  Code2,
  BookMarked,
  Download,
  Smartphone,
  Laptop,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Cloud,
  Lock,
  Zap,
  Globe,
  Sun,
  Moon,
  Database,
  Terminal,
  Cpu,
  Brain,
  Bug,
  Share2,
  BookmarkCheck,
  RefreshCw,
  Github,
} from 'lucide-react';
import { AppView, CertificationTrack } from '../../types';
import { useI18n } from '../../context/I18nContext';
import { useTheme } from '../../context/ThemeContext';

interface LandingPageViewProps {
  onOpenApp: (view?: AppView, track?: CertificationTrack) => void;
  currentTrack: CertificationTrack;
  onSelectTrack: (track: CertificationTrack) => void;
}

export const LandingPageView: React.FC<LandingPageViewProps> = ({
  onOpenApp,
  currentTrack,
  onSelectTrack,
}) => {
  const { lang, toggleLang, isFrench } = useI18n();
  const { isDark, toggleTheme } = useTheme();

  // PWA Install Prompt State
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);

  // Interactive Demo State
  const [demoTrack, setDemoTrack] = useState<CertificationTrack>('pcap');
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      alert(
        isFrench
          ? 'Pour installer Pythor, utilisez le menu de votre navigateur (icône "Installer" dans la barre d’adresse sur Chrome/Edge ou "Partager > Sur l’écran d’accueil" sur Safari iOS).'
          : 'To install Pythor, use your browser menu (Install icon in the address bar on Chrome/Edge or Share > Add to Home Screen on iOS Safari).'
      );
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setInstallSuccess(true);
      setIsInstallable(false);
    }
    setDeferredPrompt(null);
  };

  // Verified 10 Certification Tracks Data from the codebase
  const certificationTracks = [
    {
      id: 'pcep' as CertificationTrack,
      code: 'PCEP-30-0x',
      title: isFrench ? 'Certified Entry-Level Python Programmer' : 'Certified Entry-Level Python Programmer',
      level: isFrench ? 'Débutant (Entry-Level)' : 'Entry-Level',
      badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
      icon: Terminal,
      questions: 400,
      sections: 4,
      examDuration: '40 min',
      examQuestions: '30 questions',
      passRate: '70%',
      desc: isFrench
        ? 'Fondations absolues : syntaxe, types primitifs, entrées/sorties, boucles for/while, conditionnels et fonctions basiques.'
        : 'Foundations: syntax, primitive types, I/O, for/while loops, conditionals and basic functions.',
    },
    {
      id: 'pcap' as CertificationTrack,
      code: 'PCAP-31-03',
      title: isFrench ? 'Certified Associate in Python Programming' : 'Certified Associate in Python Programming',
      level: isFrench ? 'Associé (Associate)' : 'Associate',
      badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
      icon: Layers,
      questions: 500,
      sections: 5,
      examDuration: '65 min',
      examQuestions: '40 questions',
      passRate: '70%',
      desc: isFrench
        ? 'Programmation orientée objet, héritage, gestion des exceptions avancée, modules, packages, closures, générateurs et I/O de fichiers.'
        : 'Object-oriented programming, inheritance, advanced exceptions, modules, packages, closures, generators, and file I/O.',
    },
    {
      id: 'pcpp' as CertificationTrack,
      code: 'PCPP1-32-101',
      title: isFrench ? 'Certified Professional in Python Programming 1' : 'Certified Professional in Python Programming 1',
      level: isFrench ? 'Professionnel (Professional)' : 'Professional',
      badgeColor: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
      icon: Cpu,
      questions: 500,
      sections: 5,
      examDuration: '65 min',
      examQuestions: '45 questions',
      passRate: '70%',
      desc: isFrench
        ? 'POO avancée, métaclasses, MRO, design patterns PEP, interfaces graphiques Tkinter, programmation réseau (sockets, REST) et logging.'
        : 'Advanced OOP, metaclasses, MRO, PEP design patterns, Tkinter GUIs, network programming (sockets, REST), and logging.',
    },
    {
      id: 'pced' as CertificationTrack,
      code: 'PCED-30-02',
      title: isFrench ? 'Certified Entry-Level Data Analyst with Python' : 'Certified Entry-Level Data Analyst with Python',
      level: isFrench ? 'Data Débutant (Entry-Level)' : 'Entry Data Analyst',
      badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
      icon: Database,
      questions: 400,
      sections: 4,
      examDuration: '40 min',
      examQuestions: '30 questions',
      passRate: '70%',
      desc: isFrench
        ? 'Concepts de données, typologie, NumPy, bases de pandas, statistiques descriptives fondamentales et visualisation Matplotlib.'
        : 'Data concepts, typology, NumPy, pandas basics, foundational descriptive statistics, and Matplotlib visualization.',
    },
    {
      id: 'pcad' as CertificationTrack,
      code: 'PCAD-31-02',
      title: isFrench ? 'Certified Associate Data Analyst with Python' : 'Certified Associate Data Analyst with Python',
      level: isFrench ? 'Data Associé (Associate)' : 'Associate Data Analyst',
      badgeColor: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
      icon: Database,
      questions: 500,
      sections: 5,
      examDuration: '65 min',
      examQuestions: '45 questions',
      passRate: '70%',
      desc: isFrench
        ? 'Acquisition SQL, manipulation avancée pandas, statistiques inférentielles, tests d’hypothèses, régressions et narration de données.'
        : 'SQL acquisition, advanced pandas manipulation, inferential stats, hypothesis testing, regressions, and data storytelling.',
    },
    {
      id: 'pcet' as CertificationTrack,
      code: 'PCET-30-01',
      title: isFrench ? 'Certified Entry-Level Tester with Python' : 'Certified Entry-Level Tester with Python',
      level: isFrench ? 'Test Débutant (Entry-Level)' : 'Entry Tester',
      badgeColor: 'border-rose-500/30 bg-rose-500/10 text-rose-400',
      icon: Bug,
      questions: 400,
      sections: 4,
      examDuration: '40 min',
      examQuestions: '30 questions',
      passRate: '70%',
      desc: isFrench
        ? 'Principes du test logiciel, assertions, tests unitaires avec unittest, structure de cas de test, test fixtures et reporting.'
        : 'Software testing principles, assertions, unit testing with unittest, test case structures, test fixtures, and test reporting.',
    },
    {
      id: 'pcat' as CertificationTrack,
      code: 'PCAT-31-0x',
      title: isFrench ? 'Certified Associate Tester with Python' : 'Certified Associate Tester with Python',
      level: isFrench ? 'Test Associé (Associate)' : 'Associate Tester',
      badgeColor: 'border-teal-500/30 bg-teal-500/10 text-teal-400',
      icon: Bug,
      questions: 400,
      sections: 4,
      examDuration: '65 min',
      examQuestions: '40 questions',
      passRate: '70%',
      desc: isFrench
        ? 'Automatisation pytest, fixtures avancées, paramétrage, mocking avec unittest.mock, tests d’intégration et couverture de code.'
        : 'pytest automation, advanced fixtures, test parameterization, mocking with unittest.mock, integration tests, and test coverage.',
    },
    {
      id: 'pces' as CertificationTrack,
      code: 'PCES-30-01',
      title: isFrench ? 'Certified Entry-Level Security Specialist with Python' : 'Certified Entry-Level Security Specialist with Python',
      level: isFrench ? 'Sécurité Débutant (Entry-Level)' : 'Entry Security Specialist',
      badgeColor: 'border-red-500/30 bg-red-500/10 text-red-400',
      icon: Lock,
      questions: 400,
      sections: 4,
      examDuration: '40 min',
      examQuestions: '30 questions',
      passRate: '70%',
      desc: isFrench
        ? 'Cybersécurité avec Python : cryptographie (hashs, hachage salé, AES), analyse de paquets réseau, scan de ports et codage défensif.'
        : 'Cybersecurity with Python: cryptography (hashing, salted hashes, AES), network packet inspection, port scanning, and secure coding.',
    },
    {
      id: 'pcea' as CertificationTrack,
      code: 'PCEA-30-01',
      title: isFrench ? 'Certified Entry-Level Automation Specialist with Python' : 'Certified Entry-Level Automation Specialist with Python',
      level: isFrench ? 'Automatisation Débutant (Entry-Level)' : 'Entry Automation Specialist',
      badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
      icon: Zap,
      questions: 400,
      sections: 4,
      examDuration: '40 min',
      examQuestions: '30 questions',
      passRate: '70%',
      desc: isFrench
        ? 'Scripts d’automatisation système : manipulation de fichiers, os/shutil/pathlib, web scraping BeautifulSoup, API REST et parsing CSV/JSON.'
        : 'System automation scripting: file manipulation, os/shutil/pathlib, web scraping with BeautifulSoup, REST APIs, and CSV/JSON parsing.',
    },
    {
      id: 'pcei' as CertificationTrack,
      code: 'PCEI-30-01',
      title: isFrench ? 'Certified Entry-Level AI Specialist with Python' : 'Certified Entry-Level AI Specialist with Python',
      level: isFrench ? 'IA Débutant (Entry-Level)' : 'Entry AI Specialist',
      badgeColor: 'border-violet-500/30 bg-violet-500/10 text-violet-400',
      icon: Brain,
      questions: 400,
      sections: 4,
      examDuration: '40 min',
      examQuestions: '30 questions',
      passRate: '70%',
      desc: isFrench
        ? 'Fondations du Machine Learning, scikit-learn, régression, classification, matrices de confusion, NLP de base et éthique de l’IA.'
        : 'Machine Learning foundations, scikit-learn, regression, classification, confusion matrices, basic NLP, and AI ethics.',
    },
  ];

  // Verified real demo questions taken directly from Pythor data sets
  const demoQuestions: Record<
    CertificationTrack,
    {
      code: string;
      trackName: string;
      question: string;
      codeSnippet: string;
      options: string[];
      correctOption: number;
      explanation: string;
    }
  > = {
    pcap: {
      code: 'PCAP-31-03',
      trackName: 'Section 3: Object-Oriented Programming',
      question: isFrench
        ? 'Quelle sera la sortie exacte générée par l’exécution du script Python suivant ?'
        : 'What is the exact output of running the following Python script?',
      codeSnippet: `class Alpha:\n    def __init__(self):\n        self.__val = 42\n\nclass Beta(Alpha):\n    def show(self):\n        return self.__val\n\nb = Beta()\nprint(b.show())`,
      options: [
        '42',
        'AttributeError: \'Beta\' object has no attribute \'_Beta__val\'',
        'None',
        'NameError: name \'__val\' is not defined',
      ],
      correctOption: 1,
      explanation: isFrench
        ? 'En Python, les attributs préfixés par deux underscores (__val) subissent le name mangling : dans Alpha, l’attribut devient _Alpha__val. La classe fille Beta recherche _Beta__val qui n’existe pas, levant un AttributeError.'
        : 'In Python, identifiers starting with two leading underscores undergo name mangling. Inside Alpha, __val is mangled to _Alpha__val. Beta tries to access _Beta__val, causing an AttributeError.',
    },
    pcep: {
      code: 'PCEP-30-0x',
      trackName: 'Section 2: Data Types & Operations',
      question: isFrench
        ? 'Quel est le résultat de l’évaluation de cette expression en Python 3 ?'
        : 'What is the result of evaluating this expression in Python 3?',
      codeSnippet: `x = 2 ** 3 ** 2\nprint(x)`,
      options: ['64', '512', '128', '256'],
      correctOption: 1,
      explanation: isFrench
        ? 'L’opérateur d’exponentiation (**) en Python a une associativité de droite à gauche. 3 ** 2 = 9, puis 2 ** 9 = 512.'
        : 'The exponentiation operator (**) in Python evaluates with right-to-left associativity. 3 ** 2 = 9, and then 2 ** 9 = 512.',
    },
    pcpp: {
      code: 'PCPP1-32-101',
      trackName: 'Section 1: Advanced OOP & MRO',
      question: isFrench
        ? 'Selon l’algorithme C3 Linearization (MRO), quel ordre d’héritage est valide ?'
        : 'According to C3 Linearization (MRO), which inheritance order is valid?',
      codeSnippet: `class A: pass\nclass B(A): pass\nclass C(A, B): pass`,
      options: [
        'Ordre: C -> A -> B -> object',
        'TypeError: Cannot create a consistent method resolution order (MRO)',
        'Ordre: C -> B -> A -> object',
        'SyntaxError: duplicate base class',
      ],
      correctOption: 1,
      explanation: isFrench
        ? 'La classe C tente d’hériter de A puis de B, alors que B hérite déjà de A. L’algorithme C3 refuse de placer la classe mère (A) avant sa sous-classe (B), levant un TypeError.'
        : 'Class C attempts to inherit from A then B, while B already subclasses A. C3 linearization cannot satisfy this local precedence, throwing a TypeError.',
    },
    pced: {
      code: 'PCED-30-02',
      trackName: 'Section 2: NumPy & Pandas Foundations',
      question: isFrench
        ? 'Quel est le type de données retourné par l’extraction d’une colonne unique d’un DataFrame pandas ?'
        : 'What data type is returned when extracting a single column from a pandas DataFrame?',
      codeSnippet: `import pandas as pd\ndf = pd.DataFrame({'age': [25, 30, 35]})\ncol = df['age']\nprint(type(col).__name__)`,
      options: ['Series', 'DataFrame', 'ndarray', 'list'],
      correctOption: 0,
      explanation: isFrench
        ? 'L’extraction d’une colonne unique par son label via df[\'col\'] retourne toujours une structure unidimensionnelle pandas.Series.'
        : 'Extracting a single column by label with df[\'col\'] returns a one-dimensional pandas.Series object.',
    },
    pcad: {
      code: 'PCAD-31-02',
      trackName: 'Section 3: Statistical Analysis',
      question: isFrench
        ? 'Quel test statistique convient pour comparer les moyennes de 3 groupes indépendants ?'
        : 'Which statistical test is appropriate to compare the means of 3 independent groups?',
      codeSnippet: `# Scénario : comparaison de salaires entre 3 régions distinctes\nfrom scipy import stats\n# Quel test appliquer ?`,
      options: ['t-test de Student indépendant', 'Test du Chi-carré (Chi-square)', 'ANOVA à un facteur (One-way ANOVA)', 'Test de Shapiro-Wilk'],
      correctOption: 2,
      explanation: isFrench
        ? 'L’ANOVA (Analysis of Variance) à un facteur permet de tester l’égalité des moyennes de 3 groupes ou plus, évitant l’inflation de l’erreur de type I induite par des t-tests répétés.'
        : 'One-way ANOVA compares the means of three or more independent groups without inflating the Type I family-wise error rate.',
    },
    pcet: {
      code: 'PCET-30-01',
      trackName: 'Section 3: Unit Testing with unittest',
      question: isFrench
        ? 'Quelle méthode est exécutée avant chaque méthode de test dans une classe unittest.TestCase ?'
        : 'Which method runs before each individual test method in a unittest.TestCase?',
      codeSnippet: `import unittest\n\nclass SampleTest(unittest.TestCase):\n    def ______?(self):\n        self.db = []`,
      options: ['setUpClass', 'setUp', 'beforeEach', '__init__'],
      correctOption: 1,
      explanation: isFrench
        ? 'La méthode setUp() est automatiquement invoquée avant chaque méthode de test individuelle par le runner unittest.'
        : 'The setUp() fixture method is called immediately before running every test method in unittest.',
    },
    pcat: {
      code: 'PCAT-31-0x',
      trackName: 'Section 2: pytest Fixtures & Mocking',
      question: isFrench
        ? 'Quelle est la portée (scope) par défaut d’une fixture déclarée avec @pytest.fixture ?'
        : 'What is the default scope of a fixture declared with @pytest.fixture?',
      codeSnippet: `import pytest\n\n@pytest.fixture\ndef sample_resource():\n    return {'status': 'active'}`,
      options: ['session', 'module', 'function', 'class'],
      correctOption: 2,
      explanation: isFrench
        ? 'Par défaut, toute fixture pytest a le scope "function", ce qui signifie qu’elle est réinstanciée pour chaque fonction de test.'
        : 'By default, pytest fixtures have a "function" scope, meaning they are created anew for each test execution.',
    },
    pces: {
      code: 'PCES-30-01',
      trackName: 'Section 2: Cryptographic Primitives',
      question: isFrench
        ? 'Quelle fonction de la bibliothèque standard hashlib génère l’empreinte SHA-256 en chaîne hexadécimale ?'
        : 'Which method in Python standard hashlib generates the hexadecimal SHA-256 digest?',
      codeSnippet: `import hashlib\nmsg = b"SecurePassword"\nh = hashlib.sha256(msg)\nprint(h.______?())`,
      options: ['digest', 'hexdigest', 'to_hex', 'encode'],
      correctOption: 1,
      explanation: isFrench
        ? 'h.hexdigest() retourne l’empreinte sous forme d’une chaîne de caractères hexadécimaux de 64 caractères (contrairement à h.digest() qui renvoie des octets b\'...\').'
        : 'hexdigest() returns the digest string of 64 hexadecimal digits, whereas digest() returns raw bytes.',
    },
    pcea: {
      code: 'PCEA-30-01',
      trackName: 'Section 2: Files & System Automation',
      question: isFrench
        ? 'Quelle méthode de pathlib.Path supprime un répertoire s’il est vide ?'
        : 'Which method of pathlib.Path removes a directory if it is empty?',
      codeSnippet: `from pathlib import Path\np = Path('/tmp/test_dir')\np.______?()`,
      options: ['delete', 'rmdir', 'unlink', 'remove'],
      correctOption: 1,
      explanation: isFrench
        ? 'p.rmdir() supprime un répertoire vide (comme os.rmdir). Pour supprimer un fichier, on utilise p.unlink().'
        : 'p.rmdir() removes an empty directory. p.unlink() is used to remove files or symbolic links.',
    },
    pcei: {
      code: 'PCEI-30-01',
      trackName: 'Section 2: Machine Learning Evaluation',
      question: isFrench
        ? 'Dans une matrice de confusion binaire, comment se calcule le Recall (Sensibilité) ?'
        : 'In a binary confusion matrix, how is Recall (Sensitivity) calculated?',
      codeSnippet: `# TP = Vrais Positifs, FN = Faux Négatifs, FP = Faux Positifs\n# Recall = ?`,
      options: ['TP / (TP + FP)', 'TP / (TP + FN)', '(TP + TN) / Total', 'TN / (TN + FP)'],
      correctOption: 1,
      explanation: isFrench
        ? 'Le Recall (sensibilité) mesure la proportion de vrais positifs correctement détectés parmi tous les positifs réels : TP / (TP + FN). La précision est quant à elle TP / (TP + FP).'
        : 'Recall is calculated as TP / (TP + FN). Precision is calculated as TP / (TP + FP).',
    },
  };

  const currentDemo = demoQuestions[demoTrack] || demoQuestions.pcap;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 1. TOP STICKY HEADER */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-indigo-600 to-amber-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400/30">
              <span className="font-mono font-black text-white text-lg tracking-tight">Py</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-extrabold tracking-tight text-white">Pythor</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  PWA v2.4
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                {isFrench ? 'Studio d’Entraînement Certifié Python' : 'Python Certification Study Studio'}
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-semibold text-slate-300">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">
              {isFrench ? 'Accueil' : 'Home'}
            </a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">
              {isFrench ? '10 Certifications' : '10 Certifications'}
            </a>
            <a href="#features" className="hover:text-cyan-400 transition-colors">
              {isFrench ? 'Fonctionnalités' : 'Features'}
            </a>
            <a href="#demo" className="hover:text-cyan-400 transition-colors">
              {isFrench ? 'Question en Direct' : 'Live Question'}
            </a>
            <a href="#pwa" className="hover:text-cyan-400 transition-colors">
              {isFrench ? 'PWA & Hors-ligne' : 'PWA & Offline'}
            </a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Header Controls & Primary CTA */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Lang Toggle */}
            <button
              onClick={toggleLang}
              className="px-2.5 py-1.5 rounded-lg border border-slate-800 bg-slate-900/80 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-colors flex items-center space-x-1"
              title={isFrench ? 'Passer en anglais' : 'Switch to French'}
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isFrench ? 'FR' : 'EN'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title={isDark ? 'Mode clair' : 'Mode sombre'}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenApp('dashboard')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center space-x-1.5 group cursor-pointer"
            >
              <span>{isFrench ? 'Ouvrir Pythor' : 'Launch Pythor'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-amber-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-sm shadow-cyan-500/10">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>
                {isFrench
                  ? '10 Certifications Officielles • 4 300+ Flashcards • PWA Hors-Ligne'
                  : '10 Official Certifications • 4,300+ Flashcards • Offline PWA'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              {isFrench ? (
                <>
                  Maîtrisez vos certifications Python avec la{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-amber-300">
                    Répétition Espacée SM-2
                  </span>
                </>
              ) : (
                <>
                  Master your Python Certifications with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-amber-300">
                    SM-2 Spaced Repetition
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
              {isFrench
                ? 'Du niveau Débutant PCEP à l’Expertise PCPP, en passant par la Data Science, le Testing, la Cybersécurité, l’Automatisation et l’IA. Révisez intelligemment, simulez les examens en temps réel et testez votre code dans le Code Lab.'
                : 'From entry-level PCEP to professional PCPP, including Data Science, Software Testing, Cybersecurity, Automation, and AI. Study efficiently, simulate timed exams, and experiment in the interactive Code Lab.'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => onOpenApp('dashboard')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{isFrench ? 'Lancer Pythor Gratuitement' : 'Launch Pythor for Free'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#demo"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 text-slate-200 hover:text-white font-semibold text-sm transition-all flex items-center justify-center space-x-2"
              >
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>{isFrench ? 'Tester une question interactive' : 'Test an Interactive Question'}</span>
              </a>

              {isInstallable && (
                <button
                  onClick={handleInstallClick}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/70 border border-emerald-500/40 text-emerald-300 font-semibold text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>{isFrench ? 'Installer l’application PWA' : 'Install PWA App'}</span>
                </button>
              )}
            </div>

            {/* Trust and Independence Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{isFrench ? '100% Gratuit & Libre' : '100% Free & Open'}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>{isFrench ? 'Sans inscription obligatoire' : 'No sign-up required'}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>{isFrench ? 'Fonctionne Hors-Ligne (PWA)' : 'Works Fully Offline'}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>{isFrench ? 'Synchronisation Cloud optionnelle' : 'Optional Cloud Sync'}</span>
              </div>
            </div>
          </div>

          {/* Key Metric Numbers Bar */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <span className="block text-3xl font-black text-cyan-400">10</span>
              <span className="text-xs text-slate-400 mt-1 block">
                {isFrench ? 'Filières de Certification' : 'Certification Tracks'}
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <span className="block text-3xl font-black text-indigo-400">4 300+</span>
              <span className="text-xs text-slate-400 mt-1 block">
                {isFrench ? 'Flashcards & Questions' : 'Flashcards & Questions'}
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <span className="block text-3xl font-black text-amber-400">SM-2</span>
              <span className="text-xs text-slate-400 mt-1 block">
                {isFrench ? 'Algorithme Répétition Espacée' : 'Spaced Repetition Algorithm'}
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <span className="block text-3xl font-black text-emerald-400">100%</span>
              <span className="text-xs text-slate-400 mt-1 block">
                {isFrench ? 'Offline & PWA Installable' : 'Offline & PWA Installable'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION ARCHITECTURE PÉDAGOGIQUE & VALEUR */}
      <section className="py-16 bg-slate-900/40 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {isFrench ? 'L’Efficacité Scientifique au Service de la Programmation' : 'Cognitive Science for Python Mastery'}
            </h2>
            <p className="text-sm text-slate-400 mt-3">
              {isFrench
                ? 'Apprendre la syntaxe ne suffit pas pour réussir un examen Python. Pythor utilise des principes cognitifs prouvés pour ancrer durablement la logique et les subtilités du langage.'
                : 'Simply reading syntax isn’t enough. Pythor uses proven cognitive principles to lock in Python edge cases, runtime behaviors, and paradigms.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800/90 hover:border-cyan-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 text-cyan-400">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {isFrench ? 'Algorithme de Répétition Espacée SM-2' : 'SM-2 Spaced Repetition Engine'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isFrench
                  ? 'Basé sur l’algorithme SuperMemo-2, Pythor calcule l’intervalle de révision idéal et le facteur de facilité (Easiness Factor) pour chaque notion afin de vaincre la courbe de l’oubli d’Ebbinghaus.'
                  : 'Based on SuperMemo-2, Pythor computes optimal review intervals and card easiness factors to counteract the Ebbinghaus forgetting curve.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800/90 hover:border-indigo-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mb-4 text-indigo-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {isFrench ? 'Simulateur d’Examen Réel Chronométré' : 'Timed Official Exam Simulator'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isFrench
                  ? 'Évaluez-vous dans les conditions réelles des certifications Python Institute : minuterie exacte (40 à 65 minutes), décompte officiel, seuil d’admission à 70% et débriefing détaillé des réponses.'
                  : 'Practice under real Python Institute conditions: strict timer countdown (40 to 65 min), randomized question pools, 70% pass threshold, and granular score breakdowns.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800/90 hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4 text-amber-400">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {isFrench ? 'Code Lab Interactif Intégré' : 'Built-in Interactive Code Lab'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isFrench
                  ? 'Ne devinez plus le comportement d’un snippet : exécutez et observez en direct les sorties console, les mutations de listes, les levées d’exceptions et les résolutions MRO dans un bac à sable dédié.'
                  : 'Stop guessing what code does. Execute snippets on the fly to inspect stdout, list mutations, exceptions, and class MRO resolution directly inside the Code Lab.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 10 CERTIFICATIONS OFFICIELLES */}
      <section id="certifications" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                {isFrench ? 'Catalogue de formation complet' : 'Full Certification Catalog'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                {isFrench ? 'Les 10 Certifications Python Couvertes' : 'All 10 Python Certifications Covered'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mt-2 md:mt-0">
              {isFrench
                ? 'Chaque filière comprend 4 à 5 sections officielles de syllabus, avec 100 flashcards approfondies par section.'
                : 'Each track features 4 to 5 official syllabus sections, packed with 100 in-depth flashcards per section.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationTracks.map((track) => {
              const TrackIcon = track.icon;
              const isSelected = currentTrack === track.id;
              return (
                <div
                  key={track.id}
                  className={`relative flex flex-col justify-between p-6 rounded-2xl border transition-all ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500/60 ring-2 ring-cyan-500/20 shadow-xl'
                      : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div>
                    {/* Header with Code & Level */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center space-x-2">
                        <div className={`p-2 rounded-xl border ${track.badgeColor}`}>
                          <TrackIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-mono font-black text-white text-base leading-none block">
                            {track.code}
                          </span>
                          <span className="text-[11px] text-slate-400">{track.level}</span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                        {track.questions} cards
                      </span>
                    </div>

                    {/* Track Title */}
                    <h3 className="text-sm font-bold text-slate-100 line-clamp-1 mb-2">
                      {track.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {track.desc}
                    </p>

                    {/* Exam Specs Strip */}
                    <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center text-[10px]">
                      <div>
                        <span className="text-slate-500 block">{isFrench ? 'Durée' : 'Duration'}</span>
                        <span className="font-semibold text-slate-200">{track.examDuration}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">{isFrench ? 'Questions' : 'Items'}</span>
                        <span className="font-semibold text-slate-200">{track.examQuestions}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">{isFrench ? 'Seuil' : 'Pass'}</span>
                        <span className="font-semibold text-emerald-400">{track.passRate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => {
                        onSelectTrack(track.id);
                        onOpenApp('flashcards', track.id);
                      }}
                      className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{isFrench ? 'Étudier ce parcours' : 'Study this track'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE LIVE DEMO QUESTION WIDGET */}
      <section id="demo" className="py-20 bg-slate-900/60 border-y border-slate-800/80 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {isFrench ? 'Démonstration en conditions réelles' : 'Live Interactive Sample'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              {isFrench ? 'Testez une Question Réelle Immédiatement' : 'Try a Real Question Right Now'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              {isFrench
                ? 'Choisissez une filière, observez le snippet de code, sélectionnez votre réponse et retournez la carte pour voir l’explication technique.'
                : 'Select a certification track, review the code, pick your choice, and flip the card to inspect the explanation.'}
            </p>
          </div>

          {/* Track selector for the demo */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-6">
            {(['pcep', 'pcap', 'pcpp', 'pced', 'pcad', 'pcet', 'pcat', 'pces', 'pcea', 'pcei'] as CertificationTrack[]).map((trk) => (
              <button
                key={trk}
                onClick={() => {
                  setDemoTrack(trk);
                  setIsCardFlipped(false);
                  setSelectedOption(null);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
                  demoTrack === trk
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {trk.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Interactive Card Container */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Top Bar of the Card */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {currentDemo.code}
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">{currentDemo.trackName}</span>
              </div>
              <button
                onClick={() => setIsCardFlipped(!isCardFlipped)}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{isCardFlipped ? (isFrench ? 'Voir la Question' : 'View Question') : (isFrench ? 'Retourner (Explication)' : 'Flip (Explanation)')}</span>
              </button>
            </div>

            {!isCardFlipped ? (
              /* Front of the Card: Question & Options */
              <div className="space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                    {currentDemo.question}
                  </h3>
                </div>

                {/* Code Block */}
                {currentDemo.codeSnippet && (
                  <div className="rounded-xl bg-slate-950 p-4 border border-slate-800/90 font-mono text-xs sm:text-sm text-cyan-300 overflow-x-auto shadow-inner">
                    <pre className="whitespace-pre">{currentDemo.codeSnippet}</pre>
                  </div>
                )}

                {/* Multiple choice options */}
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    {isFrench ? 'Choisissez votre réponse :' : 'Select your answer:'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentDemo.options.map((opt, idx) => {
                      const isChosen = selectedOption === idx;
                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedOption(idx)}
                          className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-start space-x-2 cursor-pointer ${
                            isChosen
                              ? 'bg-cyan-950/70 border-cyan-500 text-cyan-200 ring-1 ring-cyan-500/40'
                              : 'bg-slate-950/50 border-slate-800 hover:bg-slate-800/50 text-slate-300'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                            isChosen ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                          }`}>
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="leading-snug">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Action to verify */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    {selectedOption !== null
                      ? (isFrench ? 'Réponse sélectionnée. Retournez la carte pour vérifier.' : 'Answer selected. Flip card to check.')
                      : (isFrench ? 'Sélectionnez une option pour tester votre niveau.' : 'Select an option to test your knowledge.')}
                  </span>
                  <button
                    onClick={() => setIsCardFlipped(true)}
                    className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer"
                  >
                    <span>{isFrench ? 'Vérifier la réponse' : 'Check Answer'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              /* Back of the Card: Solution & Technical Deep Dive */
              <div className="space-y-5 animate-in fade-in duration-300">
                <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40">
                  <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>
                      {isFrench ? 'Bonne Réponse :' : 'Correct Answer:'}{' '}
                      {String.fromCharCode(65 + currentDemo.correctOption)} - {currentDemo.options[currentDemo.correctOption]}
                    </span>
                  </div>
                  {selectedOption !== null && (
                    <p className="text-xs text-slate-300 mt-1">
                      {selectedOption === currentDemo.correctOption ? (
                        <span className="text-emerald-300 font-semibold">
                          {isFrench ? 'Bravo ! Votre choix est exact.' : 'Well done! Your choice is correct.'}
                        </span>
                      ) : (
                        <span className="text-rose-400 font-semibold">
                          {isFrench ? 'Pas tout à fait. Analysez l’explication ci-dessous :' : 'Not quite. Review the explanation below:'}
                        </span>
                      )}
                    </p>
                  )}
                </div>

                {/* Detailed Explanation */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block">
                    {isFrench ? 'Explication Technique Dédiée' : 'Technical Deep-Dive Explanation'}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                    {currentDemo.explanation}
                  </p>
                </div>

                {/* Spaced repetition rating simulation buttons */}
                <div className="pt-2 border-t border-slate-800">
                  <span className="text-[11px] font-semibold text-slate-400 block mb-2">
                    {isFrench ? 'Simulation d’évaluation SM-2 (Active Recall) :' : 'Simulate SM-2 Rating:'}
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    <button
                      onClick={() => setIsCardFlipped(false)}
                      className="py-2 px-1 rounded-xl bg-rose-950/50 hover:bg-rose-900 border border-rose-500/40 text-rose-300 text-[11px] font-bold text-center cursor-pointer"
                    >
                      {isFrench ? 'Encore (1j)' : 'Again (1d)'}
                    </button>
                    <button
                      onClick={() => setIsCardFlipped(false)}
                      className="py-2 px-1 rounded-xl bg-amber-950/50 hover:bg-amber-900 border border-amber-500/40 text-amber-300 text-[11px] font-bold text-center cursor-pointer"
                    >
                      {isFrench ? 'Difficile (2j)' : 'Hard (2d)'}
                    </button>
                    <button
                      onClick={() => setIsCardFlipped(false)}
                      className="py-2 px-1 rounded-xl bg-blue-950/50 hover:bg-blue-900 border border-blue-500/40 text-blue-300 text-[11px] font-bold text-center cursor-pointer"
                    >
                      {isFrench ? 'Bon (4j)' : 'Good (4d)'}
                    </button>
                    <button
                      onClick={() => setIsCardFlipped(false)}
                      className="py-2 px-1 rounded-xl bg-emerald-950/50 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold text-center cursor-pointer"
                    >
                      {isFrench ? 'Facile (7j)' : 'Easy (7d)'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. CORE FEATURES DEEP-DIVE */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              {isFrench ? 'Boîte à outils d’apprentissage' : 'Learning Toolkit'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              {isFrench ? 'Tout ce dont vous avez besoin pour réussir' : 'Everything You Need to Succeed'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              {isFrench
                ? 'Une suite intégrée conçue pour transformer la lecture passive en pratique réflexive active.'
                : 'An integrated suite designed to turn passive reading into active, reflexive mastery.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1: Flashcards SM-2 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {isFrench ? '4 300+ Flashcards SM-2' : '4,300+ SM-2 Flashcards'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isFrench
                  ? 'Des questions ciblées avec coloration syntaxique du code, tests pièges du compilateur Python et explications exhaustives de chaque comportement d’exécution.'
                  : 'Targeted questions with syntax-highlighted code, edge cases, compiler behaviors, and comprehensive execution breakdowns.'}
              </p>
            </div>

            {/* Feature 2: Simulateur d'Examen */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {isFrench ? 'Simulateur d’Examen Chronométré' : 'Timed Exam Simulator'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isFrench
                  ? 'Évaluez votre vitesse et votre sang-froid sous la contrainte du chronomètre officiel. Suivez votre taux de réussite par section pour cibler vos lacunes.'
                  : 'Test your speed and confidence under strict exam countdowns. Track passing rates per section to eliminate your weak spots.'}
              </p>
            </div>

            {/* Feature 3: Code Lab */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {isFrench ? 'Code Lab Interactif' : 'Interactive Code Lab'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isFrench
                  ? 'Testez instantanément les snippets Python directement dans votre navigateur. Validez par vous-même les particularités du découpage de listes, des tuples et des closures.'
                  : 'Run and inspect Python snippets instantly in your browser. Verify list slicing, tuple immutability, and closures firsthand.'}
              </p>
            </div>

            {/* Feature 4: Custom Flashcards */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <BookmarkCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {isFrench ? 'Création de Cartes Personnalisées' : 'Custom Card Creator'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isFrench
                  ? 'Ajoutez vos propres cartes d’étude, notez vos erreurs fréquentes et intégrez-les directement dans votre algorithme de révision espacée personnel.'
                  : 'Add your own flashcards, write down frequent personal traps, and integrate them straight into your custom SRS schedule.'}
              </p>
            </div>

            {/* Feature 5: Firebase Cloud Sync */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                <Cloud className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {isFrench ? 'Synchronisation Cloud Optionnelle' : 'Optional Cloud Sync'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isFrench
                  ? 'Vos données restent par défaut en local sur votre appareil. Vous pouvez aussi vous connecter avec Google pour synchroniser votre progression sur smartphone et PC via Cloud Firestore.'
                  : 'Your data stays on your device by default. Optionally sign in with Google to sync your study progress between smartphone and desktop via Cloud Firestore.'}
              </p>
            </div>

            {/* Feature 6: Anti-sèches & Fiches */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                <BookMarked className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {isFrench ? 'Fiches Synthétiques & Cheatsheet' : 'Condensed Cheatsheets'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isFrench
                  ? 'Consultez rapidement les mémentos de syntaxe, tableaux de précédence des opérateurs, conventions PEP 8 et hiérarchies d’exceptions avant votre épreuve.'
                  : 'Quickly review syntax cheatsheets, operator precedence tables, PEP 8 conventions, and Python exception hierarchies before test day.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION PWA & OFFLINE INSTALLATION */}
      <section id="pwa" className="py-20 bg-slate-900/40 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isFrench ? 'Progressive Web App (PWA)' : 'Progressive Web App (PWA)'}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {isFrench
                  ? 'Installez Pythor sur votre mobile ou ordinateur et révisez partout, même sans connexion.'
                  : 'Install Pythor on your phone or laptop and study anywhere, even offline.'}
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                {isFrench
                  ? 'Grâce aux technologies PWA (Service Worker et Web App Manifest), l’ensemble des 4 300+ flashcards, syllabi et moteurs de simulation est stocké localement dans votre navigateur. Vous pouvez réviser dans le train, en avion ou sans Wi-Fi en toute fluidité.'
                  : 'Thanks to modern PWA standards (Service Worker and Web App Manifest), all 4,300+ flashcards, syllabi, and test engines are cached locally. Study in the subway, on a flight, or with no Wi-Fi with instant speed.'}
              </p>

              {/* Install trigger button */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={handleInstallClick}
                  className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>
                    {installSuccess
                      ? (isFrench ? '✓ Application Installée' : '✓ Application Installed')
                      : (isFrench ? 'Installer Pythor sur cet appareil' : 'Install Pythor on this device')}
                  </span>
                </button>

                <button
                  onClick={() => onOpenApp('dashboard')}
                  className="px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Laptop className="w-4 h-4 text-cyan-400" />
                  <span>{isFrench ? 'Utiliser dans le navigateur' : 'Use in Web Browser'}</span>
                </button>
              </div>

              {/* How to install instructions accordion */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="font-bold text-white block mb-1">Android (Chrome)</span>
                  <span className="text-slate-400">
                    {isFrench
                      ? 'Cliquez sur le bouton "Installer" ou sur les 3 points > "Ajouter à l’écran d’accueil".'
                      : 'Click "Install" button or 3 dots > "Add to Home Screen".'}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="font-bold text-white block mb-1">iOS (Safari)</span>
                  <span className="text-slate-400">
                    {isFrench
                      ? 'Appuyez sur "Partager" (carré avec flèche) puis "Sur l’écran d’accueil".'
                      : 'Tap Share icon (box with arrow) then "Add to Home Screen".'}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="font-bold text-white block mb-1">Windows / macOS</span>
                  <span className="text-slate-400">
                    {isFrench
                      ? 'Cliquez sur l’icône d’ordinateur dans la barre d’adresse de Chrome ou Edge.'
                      : 'Click the computer icon in the URL bar of Chrome or Edge.'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Mockup illustration of PWA features */}
            <div className="relative">
              <div className="rounded-3xl bg-slate-950 p-6 border border-slate-800 shadow-2xl relative">
                <div className="flex items-center space-x-2 pb-4 border-b border-slate-800 text-xs text-slate-400">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="font-mono text-[11px] ml-2 text-slate-500">pythor.swinux.ch • PWA Standalone</span>
                </div>

                <div className="py-6 space-y-4">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-emerald-400" />
                      <div>
                        <span className="font-bold text-xs text-white block">Service Worker Actif</span>
                        <span className="text-[10px] text-slate-400">Cache-First & Stale-While-Revalidate</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      ONLINE & OFFLINE
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="flex items-center space-x-3">
                      <Database className="w-5 h-5 text-cyan-400" />
                      <div>
                        <span className="font-bold text-xs text-white block">Stockage Local Embarqué</span>
                        <span className="text-[10px] text-slate-400">4 300+ fiches prêtes en mémoire</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      0 ms LATENCE
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="flex items-center space-x-3">
                      <Lock className="w-5 h-5 text-indigo-400" />
                      <div>
                        <span className="font-bold text-xs text-white block">Sécurité & Confidentialité</span>
                        <span className="text-[10px] text-slate-400">Aucun pistage, stockage sécurisé</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                      100% PRIVÉ
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] text-slate-500">
                    {isFrench
                      ? 'Hébergé sur Cloudflare Pages • Certificat SSL HTTPS • Déploiement CDN mondial'
                      : 'Hosted on Cloudflare Pages • HTTPS SSL • Global Edge Network'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION BÉNÉFICES & PUBLICS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              {isFrench ? 'À qui s’adresse Pythor' : 'Target Audiences'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              {isFrench ? 'Conçu pour tous les candidats Python' : 'Designed for Every Python Candidate'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="text-base font-bold text-white mb-2">
                {isFrench ? 'Débutants & Reconversion' : 'Beginners & Career Changers'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {isFrench
                  ? 'Pour ceux qui préparent le PCEP ou découvrent la programmation. Les cartes décomposent chaque syntaxe pas à pas avec des explications claires et directes.'
                  : 'For those preparing PCEP or entering tech. Cards break down syntax step-by-step with plain, accessible explanations.'}
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isFrench ? 'Parcours PCEP-30-0x dédié' : 'Dedicated PCEP-30-0x track'}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isFrench ? 'Vocabulaire vulgarisé sans jargon' : 'Clear, straightforward glossary'}</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="text-base font-bold text-white mb-2">
                {isFrench ? 'Développeurs & Ingénieurs' : 'Developers & Engineers'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {isFrench
                  ? 'Pour les candidats aux certifications PCAP et PCPP1. Maîtrisez le name mangling, la linéarisation C3 MRO, les générateurs, les sockets et les décorateurs.'
                  : 'For PCAP and PCPP1 candidates. Master name mangling, C3 linearization MRO, generators, network sockets, and decorators.'}
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isFrench ? 'Questions pièges d’examen réel' : 'Real-world tricky exam questions'}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isFrench ? 'POO avancée et introspection' : 'Advanced OOP & introspection'}</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="text-base font-bold text-white mb-2">
                {isFrench ? 'Spécialistes Data, QA, SecOps & IA' : 'Data, QA, SecOps & AI Specialists'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {isFrench
                  ? 'Pour les spécialistes préparant PCED, PCAD, PCET, PCAT, PCES, PCEA ou PCEI. Couvre pandas, pytest, la cryptographie, les scripts système et scikit-learn.'
                  : 'For specialists studying PCED, PCAD, PCET, PCAT, PCES, PCEA, or PCEI. Covers pandas, pytest, cryptography, automation, and scikit-learn.'}
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isFrench ? '7 filières métiers spécialisées' : '7 specialized domain tracks'}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isFrench ? 'Code Lab adapté à chaque filière' : 'Code Lab tailored for each field'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section id="faq" className="py-20 bg-slate-900/60 border-y border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              {isFrench ? 'Questions Fréquemment Posées' : 'Frequently Asked Questions'}
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: isFrench ? 'Pythor est-il gratuit ? Y a-t-il un abonnement caché ?' : 'Is Pythor completely free? Are there hidden fees?',
                a: isFrench
                  ? 'Pythor est 100% gratuit et libre. Il n’y a aucun abonnement, aucun paywall, aucune publicité et aucune version bridée.'
                  : 'Pythor is 100% free and open. There are no subscriptions, no paywalls, no ads, and no restricted tiers.',
              },
              {
                q: isFrench ? 'Est-il nécessaire de créer un compte pour utiliser Pythor ?' : 'Do I need to create an account to use Pythor?',
                a: isFrench
                  ? 'Non. Vous pouvez commencer à réviser immédiatement en mode Invité. Toutes vos données sont stockées sur votre appareil. La connexion avec Google est facultative et sert uniquement à synchroniser vos fiches entre plusieurs appareils.'
                  : 'No. You can start studying immediately in Guest mode. All progress is saved in your local browser storage. Google Sign-in is entirely optional for cross-device cloud sync.',
              },
              {
                q: isFrench ? 'Comment fonctionne la répétition espacée (SM-2) ?' : 'How does the SM-2 Spaced Repetition algorithm work?',
                a: isFrench
                  ? 'Après chaque carte, vous choisissez votre niveau de maîtrise (Encore, Difficile, Bon, Facile). L’algorithme calcule l’intervalle de temps idéal avant de vous reproposer la carte, ce qui optimise la rétention mnésique à long terme.'
                  : 'After reviewing a flashcard, you rate your recall (Again, Hard, Good, Easy). The SuperMemo-2 algorithm dynamically computes your next review date based on your ease factor.',
              },
              {
                q: isFrench ? 'Les questions sont-elles conformes aux examens officiels ?' : 'Are questions aligned with official exams?',
                a: isFrench
                  ? 'Oui. Les 10 parcours suivent strictement les blueprints et syllabi officiels publiés par le Python Institute (objectifs, pourcentages de pondération par section, et durées d’épreuve officielles).'
                  : 'Yes. All 10 tracks strictly reflect the official exam blueprints and syllabus section weights published by the Python Institute.',
              },
              {
                q: isFrench ? 'Pythor est-il affilié à OpenEDG Python Institute ?' : 'Is Pythor affiliated with OpenEDG Python Institute?',
                a: isFrench
                  ? 'Non. Pythor est un outil d’étude indépendant conçu pour aider les étudiants et les professionnels à préparer leurs examens. Les marques Python Institute, PCEP, PCAP, PCPP, etc. appartiennent à leurs détenteurs respectifs.'
                  : 'No. Pythor is an independent study companion built to help developers pass certification exams. Python Institute, PCEP, PCAP, and PCPP are trademarks of their respective owners.',
              },
              {
                q: isFrench ? 'Puis-je utiliser Pythor hors-ligne dans les transports ?' : 'Can I use Pythor offline while traveling?',
                a: isFrench
                  ? 'Absolument ! Pythor est une PWA (Progressive Web App). Une fois la page chargée ou l’application installée sur votre écran d’accueil, l’intégralité des 4 300+ questions et le moteur d’examen fonctionnent sans aucune connexion réseau.'
                  : 'Yes! Pythor is a full Progressive Web App. Once loaded or installed to your home screen, all 4,300+ questions and exam features operate with zero network connection.',
              },
            ].map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-semibold text-xs sm:text-sm text-slate-100 flex items-center justify-between hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        isOpen ? 'rotate-180 text-cyan-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FINAL CONVERSION BANNER */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-cyan-950/80 via-slate-900 to-indigo-950/80 border border-cyan-500/30 shadow-2xl space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isFrench
                ? 'Prêt à Décrocher Votre Certification Python ?'
                : 'Ready to Pass Your Python Certification?'}
            </h2>
            <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              {isFrench
                ? 'Rejoignez les candidats qui révisent chaque jour avec Pythor. Démarrez immédiatement votre premier test blanc sans aucune contrainte.'
                : 'Join candidates preparing their exams daily with Pythor. Launch your first study session right now with zero friction.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => onOpenApp('dashboard')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{isFrench ? 'Lancer Pythor Maintenant' : 'Launch Pythor Now'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://github.com/jeanpierrenouhailler-dot/Pythor"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-semibold transition-all flex items-center justify-center space-x-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white font-mono font-bold">
                Py
              </div>
              <div>
                <span className="font-bold text-white text-sm">Pythor</span>
                <p className="text-[11px] text-slate-400">
                  {isFrench ? 'Studio d’Entraînement aux Certifications Python & PWA' : 'Python Certification Study Studio & PWA'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-300">
              <button onClick={() => onOpenApp('dashboard')} className="hover:text-cyan-400 transition-colors">
                {isFrench ? 'Ouvrir l’App' : 'Open App'}
              </button>
              <button onClick={() => onOpenApp('exam')} className="hover:text-cyan-400 transition-colors">
                {isFrench ? 'Simulateur d’Examen' : 'Exam Simulator'}
              </button>
              <button onClick={() => onOpenApp('codelab')} className="hover:text-cyan-400 transition-colors">
                {isFrench ? 'Code Lab' : 'Code Lab'}
              </button>
              <a
                href="https://github.com/jeanpierrenouhailler-dot/Pythor"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center space-x-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://pythor.swinux.ch/"
                className="hover:text-cyan-400 transition-colors flex items-center space-x-1"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>pythor.swinux.ch</span>
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <p>
              {isFrench
                ? '© 2025 Pythor. Conçu pour les candidats et formateurs Python. Hébergé sur Cloudflare Pages.'
                : '© 2025 Pythor. Built for Python candidates and instructors. Hosted on Cloudflare Pages.'}
            </p>
            <p className="text-slate-400 text-center md:text-right max-w-lg">
              {isFrench
                ? 'Avis d’indépendance : Pythor est un outil d’apprentissage indépendant non affilié ni approuvé par OpenEDG Python Institute. Python™ est une marque déposée de la Python Software Foundation.'
                : 'Academic independence notice: Pythor is an independent study tool not affiliated with or endorsed by the OpenEDG Python Institute. Python™ is a trademark of the Python Software Foundation.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
