import React, { useState } from 'react';
import {
  ShieldCheck,
  Layers,
  GraduationCap,
  Code2,
  BookMarked,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Zap,
  Package,
  AlertTriangle,
  Box,
  RefreshCw,
  Settings,
  Sliders,
  Plus,
  Trash2,
} from 'lucide-react';
import { AppView, CertificationTrack, Flashcard } from '../../types';
import { pcapSyllabusSections } from '../../data/pcapData';
import { pcepSyllabusSections, pcepTrackInfo } from '../../data/pcepData';
import { useSystemSettings } from '../../context/SystemSettingsContext';
import { useI18n } from '../../context/I18nContext';

interface DashboardViewProps {
  cards: Flashcard[];
  onNavigate: (view: AppView, section?: string, chapter?: string) => void;
  reviewedCount: number;
  currentTrack: CertificationTrack;
  onSelectTrack: (track: CertificationTrack) => void;
  onOpenCreateCard: () => void;
  onDeleteCustomCard?: (cardId: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  cards,
  onNavigate,
  reviewedCount,
  currentTrack,
  onSelectTrack,
  onOpenCreateCard,
  onDeleteCustomCard,
}) => {
  const { settings, checkForUpdates, forceUpdate, setIsSettingsOpen } = useSystemSettings();
  const { t, isFrench } = useI18n();
  const [activeDeepDiveTab, setActiveDeepDiveTab] = useState<string>(
    currentTrack === 'pcep' ? 'pcep-1' : 'section-4'
  );

  // Count SRS breakdown
  const getSrsStats = () => {
    try {
      const saved = localStorage.getItem('pcap_srs_state');
      if (!saved) {
        return { mastered: 0, learning: 0, review: 0, fresh: cards.length };
      }
      const data = JSON.parse(saved);
      let mastered = 0;
      let learning = 0;
      let review = 0;

      Object.values(data).forEach((item: any) => {
        if (item.status === 'mastered') mastered++;
        else if (item.status === 'review') review++;
        else if (item.status === 'learning') learning++;
      });

      const fresh = Math.max(0, cards.length - (mastered + learning + review));
      return { mastered, learning, review, fresh };
    } catch {
      return { mastered: 0, learning: 0, review: 0, fresh: cards.length };
    }
  };

  const srsStats = getSrsStats();
  const progressPercent = cards.length > 0 ? Math.round((reviewedCount / cards.length) * 100) : 0;
  const readinessPercent = Math.min(
    100,
    Math.round(
      ((srsStats.mastered * 1.0 + srsStats.review * 0.6 + srsStats.learning * 0.3) /
        (cards.length || 1)) *
        100
    )
  );

  const section4Chapters = [
    {
      id: '4.1',
      title: isFrench ? 'Comprendre l’approche orientée objet' : 'Understand the OOP Approach',
      range: isFrench ? 'Cartes 1–20' : 'Cards 1–20',
      focus: isFrench
        ? 'Classes vs instances, identité vs égalité, attributs dynamiques, id() et structures fondamentales'
        : 'Classes vs. instances, identity vs. equality, dynamic attributes, id(), and basic structures',
    },
    {
      id: '4.2',
      title: isFrench ? 'Variables d’instance vs variables de classe' : 'Instance vs. Class Variables',
      range: isFrench ? 'Cartes 21–40' : 'Cards 21–40',
      focus: isFrench
        ? 'Masquage d’attributs, espaces de noms __dict__, délégation de recherche, hasattr/getattr et mutabilité'
        : 'Attribute shadowing, __dict__ namespaces, lookup delegation, hasattr/getattr, and mutable traps',
    },
    {
      id: '4.3',
      title: isFrench ? 'Masquage de noms (Name Mangling) & Attributs privés' : 'Name Mangling & Private Attributes',
      range: isFrench ? 'Cartes 41–60' : 'Cards 41–60',
      focus: isFrench
        ? 'Double tiret bas initial, transformation _Classe__var, protection contre les collisions en sous-classes'
        : 'Double leading underscores, _Class__var mangling, subclass collision protection, consenting adults',
    },
    {
      id: '4.4',
      title: isFrench ? 'Méthodes, constructeurs & dunders' : 'Methods, Constructors & Dunders',
      range: isFrench ? 'Cartes 61–80' : 'Cards 61–80',
      focus: isFrench
        ? 'self explicite, __init__ retournant None, __str__ vs __repr__, surcharge d’opérateurs, __bases__, __name__'
        : 'Explicit self, __init__ returning None, __str__ vs __repr__, operator overloading, __bases__, __name__',
    },
    {
      id: '4.5',
      title: isFrench ? 'Héritage, polymorphisme & MRO' : 'Inheritance, Polymorphism & MRO',
      range: isFrench ? 'Cartes 81–100' : 'Cards 81–100',
      focus: isFrench
        ? 'Héritage simple/multiple, super(), isinstance/issubclass, linéarisation C3, résolution en diamant'
        : 'Single/multiple inheritance, super(), isinstance/issubclass, C3 linearization, diamond resolution',
    },
  ];

  const section5Chapters = [
    {
      id: '5.1',
      title: isFrench ? 'Compréhensions de listes, dictionnaires & ensembles' : 'List, Dict & Set Comprehensions',
      range: isFrench ? 'Cartes 1–20' : 'Cards 1–20',
      focus: isFrench
        ? 'Syntaxe [expr for x in seq if cond], clauses for multiples, ternaires, isolation de portée et inversion'
        : 'Syntax patterns, multiple for clauses, ternary expressions, scope isolation, and dict key inversion',
    },
    {
      id: '5.2',
      title: isFrench ? 'Fonctions anonymes et lambdas' : 'Lambdas and Anonymous Functions',
      range: isFrench ? 'Cartes 21–40' : 'Cards 21–40',
      focus: isFrench
        ? 'Règle de l’expression unique, fonctions de tri key=, pipelines fonctionnels avec map(), filter() et reduce()'
        : 'Single expression limits, key extraction for sorted(), functional pipelines with map(), filter(), reduce()',
    },
    {
      id: '5.3',
      title: isFrench ? 'Fermetures, portées imbriquées & nonlocal' : 'Closures, Nested Scopes & nonlocal',
      range: isFrench ? 'Cartes 41–60' : 'Cards 41–60',
      focus: isFrench
        ? 'Variables libres, introspection __closure__, mot-clé nonlocal, piège de liaison tardive et décorateurs'
        : 'Free variables, __closure__ introspection, nonlocal binding, late-binding loop traps and decorators',
    },
    {
      id: '5.4',
      title: isFrench ? 'Flux de fichiers & entrées/sorties texte' : 'File Streams & Text I/O',
      range: isFrench ? 'Cartes 61–80' : 'Cards 61–80',
      focus: isFrench
        ? 'Modes d’ouverture (\'r\', \'w\', \'a\', \'x\', \'r+\'), read/readline/readlines, flush(), tell() et gestionnaire with'
        : 'open() modes (\'r\', \'w\', \'a\', \'x\', \'r+\'), read/readline/readlines, buffer flush, tell(), and with context managers',
    },
    {
      id: '5.5',
      title: isFrench ? 'E/S binaires, bytearray, errno & opérations OS' : 'Binary I/O, bytearray, errno & OS Operations',
      range: isFrench ? 'Cartes 81–100' : 'Cards 81–100',
      focus: isFrench
        ? 'Mode binaire \'b\', mutabilité de bytearray, readinto(), offsets seek(whence), fonctions os et erreurs errno'
        : 'Binary mode \'b\', bytearray mutability, readinto(), seek() whence offsets, os module methods and errno error codes',
    },
  ];

  const pcepSection1Chapters = [
    {
      id: '1.1',
      title: isFrench ? 'Notions fondamentales & Modèle d’exécution' : 'Fundamentals of Computer Programming & Execution',
      range: isFrench ? 'Cartes 1–20' : 'Cards 1–20',
      focus: isFrench
        ? 'Compilation vs interprétation, lexique, syntaxe, PVM, bytecode .pyc, CPython et modèle d’exécution'
        : 'Compilation vs interpretation, lexis, syntax, PVM, .pyc bytecode, CPython, and execution lifecycle',
    },
    {
      id: '1.2',
      title: isFrench ? 'Littéraux, Nombres, Flottants & Booléens' : 'Literals, Numeric Types, Booleans & Scientific Notation',
      range: isFrench ? 'Cartes 21–40' : 'Cards 21–40',
      focus: isFrench
        ? 'Entiers, flottants, notation scientifique (1e-3), octal (0o), hexadécimal (0x), binaire (0b) et booléens'
        : 'Integers, floats, scientific notation (1e-3), octal (0o), hexadecimal (0x), binary (0b), and booleans',
    },
    {
      id: '1.3',
      title: isFrench ? 'Entrées/Sorties : print(), input() & Échappements' : 'Basic I/O: print(), input(), sep=, end= & Escapes',
      range: isFrench ? 'Cartes 41–60' : 'Cards 41–60',
      focus: isFrench
        ? 'print() avec sep et end, séquences d’échappement (\\n, \\t, \\\\), input() renvoyant un str et conversions'
        : 'print() with sep/end parameters, escape sequences (\\n, \\t, \\\\), input() string semantics and type conversions',
    },
    {
      id: '1.4',
      title: isFrench ? 'Opérateurs, Priorités & Expressions' : 'Operators, Precedence, and Expressions',
      range: isFrench ? 'Cartes 61–80' : 'Cards 61–80',
      focus: isFrench
        ? 'Opérateurs arithmétiques, division flottante /, division entière //, modulo %, associativité droite de **'
        : 'Arithmetic operators, true division /, floor division //, modulo %, right-to-left associativity of **',
    },
    {
      id: '1.5',
      title: isFrench ? 'Variables, Affectation dynamique & PEP 8' : 'Variables, Assignment, Dynamic Typing & PEP 8 Rules',
      range: isFrench ? 'Cartes 81–100' : 'Cards 81–100',
      focus: isFrench
        ? 'Règles de nommage des identifiants, mots-clés réservés, affectation multiple, permutation, snake_case et PEP 8'
        : 'Identifier rules, reserved keywords, chained/tuple assignment, swapping a, b = b, a, snake_case and PEP 8',
    },
  ];

  const pcepSection2Chapters = [
    {
      id: '2.1',
      title: isFrench ? 'Instructions conditionnelles (if, if-else, if-elif-else)' : 'Conditional Statements (if, if-else, if-elif-else)',
      range: isFrench ? 'Cartes 1–20' : 'Cards 1–20',
      focus: isFrench
        ? 'Syntaxe if/elif/else, indentation stricte, expressions ternaires, évaluation paresseuse et imbrication'
        : 'if/elif/else syntax, strict indentation, ternary expressions, lazy evaluation, and nested branches',
    },
    {
      id: '2.2',
      title: isFrench ? 'Opérateurs relationnels et d’égalité' : 'Relational and Equality Operators',
      range: isFrench ? 'Cartes 21–40' : 'Cards 21–40',
      focus: isFrench
        ? '==, !=, <, <=, >, >=, comparaison de chaînes lexicographique (ord/ASCII), précision float et is vs =='
        : '==, !=, <, <=, >, >=, lexicographical string comparison (ASCII ord), float precision, and is vs ==',
    },
    {
      id: '2.3',
      title: isFrench ? 'Opérateurs logiques & court-circuit' : 'Logical Operators & Short-Circuit Evaluation',
      range: isFrench ? 'Cartes 41–60' : 'Cards 41–60',
      focus: isFrench
        ? 'and, or, not, court-circuit, valeurs de retour des opérandes (x or y), vérité des conteneurs et lois de De Morgan'
        : 'and, or, not, short-circuit rules, operand return values (x or y), truthiness of empty collections, De Morgan',
    },
    {
      id: '2.4',
      title: isFrench ? 'Opérateurs bit à bit & décalages' : 'Bitwise Operators & Bit Shifting',
      range: isFrench ? 'Cartes 61–80' : 'Cards 61–80',
      focus: isFrench
        ? 'ET (&), OU (|), XOR (^), NOT (~x = -(x+1)), décalages <<, >>, masquage binaire et conversion bin()/int()'
        : 'AND (&), OR (|), XOR (^), NOT (~x = -(x+1)), bit shifts <<, >>, masking techniques, and bin()/int() conversion',
    },
    {
      id: '2.5',
      title: isFrench ? 'Boucles : while, for, range(), break, continue, else' : 'Loops: while, for, range(), break, continue, loop-else',
      range: isFrench ? 'Cartes 81–100' : 'Cards 81–100',
      focus: isFrench
        ? 'Boucles while/for, range(start, stop, step), interruption break, saut continue et clause else des boucles'
        : 'while and for loops, range(start, stop, step), break termination, continue skips, and loop else clauses',
    },
  ];

  const pcepSection3Chapters = [
    {
      id: '3.1',
      title: isFrench ? 'Listes : Indexation, Découpage [start:stop:step] & Opérations' : 'Lists: Indexing, Slicing [start:stop:step] & Operations',
      range: isFrench ? 'Cartes 1–20' : 'Cards 1–20',
      focus: isFrench
        ? 'Indexation 0-based et négative, tranches [start:stop:step], pas négatif [::-1], concaténation (+), répétition (*), len(), min(), max(), sum()'
        : 'Zero-based and negative indices, slicing [start:stop:step], reverse step [::-1], concatenation (+), repetition (*), len(), min(), max(), sum()',
    },
    {
      id: '3.2',
      title: isFrench ? 'Méthodes de listes : append, insert, pop, remove, sort, reverse' : 'List Methods: append, insert, pop, remove, sort, reverse',
      range: isFrench ? 'Cartes 21–40' : 'Cards 21–40',
      focus: isFrench
        ? 'Méthodes mutantes en place vs fonctions intégrées (sorted() vs sort()), pop(i), remove(x), del, count(), index(), extend() et appartenance in'
        : 'In-place mutating methods vs built-in functions (sorted() vs sort()), pop(i), remove(x), del, count(), index(), extend() and in membership',
    },
    {
      id: '3.3',
      title: isFrench ? 'Modèle mémoire : Alias, Copies superficielles & Matrices 2D' : 'Memory Model: Aliases, Shallow Copies & 2D Matrices',
      range: isFrench ? 'Cartes 41–60' : 'Cards 41–60',
      focus: isFrench
        ? 'Assignation par référence (b = a), copies superficielles ([:], list(), copy()), identité is/id(), listes imbriquées, piège [[0]*3]*3'
        : 'Reference aliasing (b = a), shallow copying ([:], list(), copy()), is/id() identity, nested 2D matrices, [[0]*3]*3 reference trap',
    },
    {
      id: '3.4',
      title: isFrench ? 'Tuples : Immuabilité, Syntaxe (x,), Déballage & Méthodes' : 'Tuples: Immutability, Syntax (x,), Unpacking & Methods',
      range: isFrench ? 'Cartes 61–80' : 'Cards 61–80',
      focus: isFrench
        ? 'Séquences immuables, virgule de singleton obligatoire (x,), déballage (unpacking), échange a, b = b, a, méthodes count/index et conversions'
        : 'Immutable sequences, mandatory singleton comma (x,), tuple unpacking, atomic swap a, b = b, a, count/index methods, and type conversions',
    },
    {
      id: '3.5',
      title: isFrench ? 'Dictionnaires : Mappages clé-valeur, Hachabilité & Méthodes' : 'Dictionaries: Key-Value Mappings, Hashability & Methods',
      range: isFrench ? 'Cartes 81–100' : 'Cards 81–100',
      focus: isFrench
        ? 'Paires clé:valeur, hachabilité des clés (types immuables), get(), pop(), keys(), values(), items(), update(), et itération par défaut sur les clés'
        : 'Key:value mappings, key hashability requirements (immutable keys), get(), pop(), keys(), values(), items(), update(), default iteration over keys',
    },
  ];

  const pcepSection4Chapters = [
    {
      id: '4.1',
      title: isFrench ? 'Définition de fonctions & Instruction return' : 'Function Definition & Return Values',
      range: isFrench ? 'Cartes 1–20' : 'Cards 1–20',
      focus: isFrench
        ? 'Mot-clé def, invocation f(), valeur par défaut None, return tuple, fin anticipée et flux de contrôle'
        : 'def statement, invocation f(), implicit return None, return tuple packing, early exit, and control flow',
    },
    {
      id: '4.2',
      title: isFrench ? 'Arguments positionnels, par mot-clé & Défauts' : 'Positional, Keyword Args & Defaults',
      range: isFrench ? 'Cartes 21–40' : 'Cards 21–40',
      focus: isFrench
        ? 'Arguments positionnels vs keyword, règles d’ordre (positionnel avant keyword), piège des listes par défaut mutables (lst=[])'
        : 'Positional vs keyword args, strict ordering (positional before keyword), mutable default argument trap (lst=[])',
    },
    {
      id: '4.3',
      title: isFrench ? 'Portée des variables & Mot-clé global' : 'Variable Scope & the global Keyword',
      range: isFrench ? 'Cartes 41–60' : 'Cards 41–60',
      focus: isFrench
        ? 'Portée locale vs globale, masquage de variables, UnboundLocalError, mot-clé global et règle de résolution LEGB'
        : 'Local vs global scope, variable shadowing, UnboundLocalError, global keyword declaration, and LEGB lookup rule',
    },
    {
      id: '4.4',
      title: isFrench ? 'Gestion des exceptions & Blocs try-except' : 'Exception Handling & try-except Blocks',
      range: isFrench ? 'Cartes 61–80' : 'Cards 61–80',
      focus: isFrench
        ? 'Syntaxe try-except, except multiple, except nu en fin, tuple d’exceptions, hiérarchie de classes et mot-clé raise'
        : 'try-except syntax, multiple except clauses, bare except positioning, exception tuples, class hierarchy, and raise',
    },
    {
      id: '4.5',
      title: isFrench ? 'Exceptions courantes & Fonctions intégrées' : 'Built-in Exceptions & Built-in Utilities',
      range: isFrench ? 'Cartes 81–100' : 'Cards 81–100',
      focus: isFrench
        ? 'ZeroDivisionError, ValueError, TypeError, IndexError, KeyError, input() retourne str, et conversions int/float/bool/round'
        : 'ZeroDivisionError, ValueError, TypeError, IndexError, KeyError, input() returning str, and int/float/bool/round utilities',
    },
  ];

  const pcepHighYieldTraps = [
    {
      title: isFrench ? 'Paramètres sep et end de print()' : 'print() sep and end Parameters',
      text: isFrench
        ? 'print(1, 2, sep="-", end="*") affiche "1-2*" sans saut de ligne. sep sépare les arguments, end est affiché tout à la fin.'
        : 'print(1, 2, sep="-", end="*") outputs "1-2*" without a newline. sep separates arguments; end is printed after the last argument.',
    },
    {
      title: isFrench ? 'Division flottante (/) vs division entière (//)' : 'Float Division (/) vs Floor Division (//)',
      text: isFrench
        ? '7 / 2 donne 3.5 (toujours float). 7 // 2 donne 3 (int). Avec des négatifs, -7 // 2 arrondit vers le bas à -4 !'
        : '7 / 2 produces 3.5 (always float). 7 // 2 gives 3 (int). With negative numbers, -7 // 2 rounds down towards negative infinity, yielding -4!',
    },
    {
      title: isFrench ? 'Évaluation en court-circuit (Short-Circuit)' : 'Short-Circuit Evaluation',
      text: isFrench
        ? 'Dans (False and func()), func() n\'est JAMAIS appelée. Dans (True or func()), func() n\'est pas appelée non plus.'
        : 'In (False and func()), func() is NEVER called because False guarantees a falsy result. Similarly, (True or func()) skips func() completely.',
    },
    {
      title: isFrench ? 'Piège du tuple à un élément (Singleton)' : 'One-Element Tuple Syntax Trap',
      text: isFrench
        ? 't = (42) est un entier (int) entre parenthèses ! Pour créer un tuple d’un élément, la virgule finale est obligatoire : t = (42,).'
        : 't = (42) produces a plain int! To create a single-element tuple, a trailing comma is required: t = (42,).',
    },
    {
      title: isFrench ? 'Ordre des paramètres par défaut dans def' : 'Default Parameter Order in def',
      text: isFrench
        ? 'Les paramètres par défaut doivent impérativement suivre les paramètres sans valeur par défaut : def f(x, y=0) est valide, def f(x=0, y) déclenche SyntaxError.'
        : 'Parameters with defaults MUST follow non-default parameters: def f(x, y=0) is valid, def f(x=0, y) triggers a SyntaxError.',
    },
    {
      title: isFrench ? 'La fonction input() retourne TOUJOURS str' : 'input() Always Returns str',
      text: isFrench
        ? 'Même si l\'utilisateur saisit 123, input() renvoie la chaîne "123". a + b sur des entrées non converties produit "123456" (concaténation) et non une somme numérique.'
        : 'Even if the user types digits like 123, input() always returns a str ("123"). Adding two unconverted inputs concatenates them ("123" + "456" = "123456").',
    },
  ];

  const highYieldTraps = [
    {
      title: isFrench ? 'Piège du retour de __init__' : '__init__ Return Trap',
      text: isFrench
        ? 'Un constructeur __init__ doit retourner None (ou n’avoir aucune instruction return). Retourner une valeur (entier, chaîne, etc.) déclenche une TypeError à l’exécution.'
        : 'An __init__ constructor must return None (or have no return statement). Returning any value like an int or string raises a TypeError at runtime.',
    },
    {
      title: isFrench ? 'Syntaxe du masquage de noms (Name Mangling)' : 'Name Mangling Syntax',
      text: isFrench
        ? 'Un double tiret bas initial (ex: __salary) est transformé en _NomClasse__salary à la compilation. Il s’agit d’un renommage automatique pour éviter les collisions, pas d’une stricte encapsulation privée.'
        : 'Double leading underscores (e.g., __salary) are transformed to _ClassName__salary at compile time. It is name mangling, not strict privacy.',
    },
    {
      title: isFrench ? 'MRO & Linéarisation C3 en diamant' : 'MRO & Diamond Inheritance',
      text: isFrench
        ? 'Python applique la linéarisation C3. L’ordre de résolution est exploré de gauche à droite dans les sous-classes avant d’atteindre les classes ancêtres communes.'
        : 'Python uses C3 Linearization. Search order is checked left-to-right through subclasses before common ancestor bases.',
    },
    {
      title: isFrench ? 'Masquage d’attribut de classe (Shadowing)' : 'Attribute Shadowing',
      text: isFrench
        ? 'Écrire self.count = 5 crée une variable d’instance qui masque toute variable count existante au niveau de la classe sans altérer l’attribut de classe.'
        : 'Writing self.count = 5 creates an instance variable that shadows any existing class-level count variable without modifying the class attribute.',
    },
    {
      title: isFrench ? 'Liaison tardive dans les fermetures & lambdas' : 'Late Binding in Closures & Lambdas',
      text: isFrench
        ? 'Les lambdas créées dans une boucle résolvent les variables au moment de l’appel, pas à la définition. Utilisez un argument par défaut (ex: lambda x=i: x) pour capturer chaque valeur de boucle.'
        : 'Lambdas created inside loops look up variables at call time, not definition time. Use default arguments like lambda x=i: x to capture current iteration values.',
    },
    {
      title: isFrench ? 'Modes d’ouverture (\'w\' vs \'w+\') & piège writelines()' : 'File Modes (\'w\', \'w+\') & writelines()',
      text: isFrench
        ? 'Les modes \'w\' et \'w+\' tronquent immédiatement le fichier à 0 octet dès open(). De plus, writelines() n’ajoute aucun saut de ligne automatique (\\n)—chaque ligne doit avoir son propre \\n.'
        : 'Modes \'w\' and \'w+\' immediately truncate files to 0 bytes upon open(). Also, writelines() does not append newlines automatically—each item must include its own \\n.',
    },
  ];

  const getSectionTitle = (secNumber: number, fallback: string) => {
    if (currentTrack === 'pcep') {
      if (!isFrench) return fallback;
      switch (secNumber) {
        case 1:
          return t.dashboard.pcepSec1Title;
        case 2:
          return t.dashboard.pcepSec2Title;
        case 3:
          return t.dashboard.pcepSec3Title;
        case 4:
          return t.dashboard.pcepSec4Title;
        default:
          return fallback;
      }
    }
    if (!isFrench) return fallback;
    switch (secNumber) {
      case 1:
        return t.dashboard.sec1Title;
      case 2:
        return t.dashboard.sec2Title;
      case 3:
        return t.dashboard.sec3Title;
      case 4:
        return t.dashboard.sec4Title;
      case 5:
        return t.dashboard.sec5Title;
      default:
        return fallback;
    }
  };

  const getSectionDesc = (secNumber: number, fallback: string) => {
    if (currentTrack === 'pcep') {
      if (!isFrench) return fallback;
      switch (secNumber) {
        case 1:
          return t.dashboard.pcepSec1Desc;
        case 2:
          return t.dashboard.pcepSec2Desc;
        case 3:
          return t.dashboard.pcepSec3Desc;
        case 4:
          return t.dashboard.pcepSec4Desc;
        default:
          return fallback;
      }
    }
    if (!isFrench) return fallback;
    switch (secNumber) {
      case 1:
        return t.dashboard.sec1Desc;
      case 2:
        return t.dashboard.sec2Desc;
      case 3:
        return t.dashboard.sec3Desc;
      case 4:
        return t.dashboard.sec4Desc;
      case 5:
        return t.dashboard.sec5Desc;
      default:
        return fallback;
    }
  };

  // Custom user cards for current track
  const customCardsForTrack = cards.filter(
    (c) => c.isUserCreated && (c.track === currentTrack || (!c.track && currentTrack === 'pcap'))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* Top Certification Track Selector & Custom Flashcard Bar */}
      <section className="bg-slate-900/90 border border-slate-800/90 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg">
        <div className="flex items-center space-x-3.5">
          <div
            className={`p-3 rounded-xl border ${
              currentTrack === 'pcep'
                ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                : 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400'
            }`}
          >
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {isFrench ? 'Parcours actif :' : 'Active Track:'}
              </span>
              <span
                className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold border ${
                  currentTrack === 'pcep'
                    ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                    : 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                }`}
              >
                {currentTrack === 'pcep' ? 'PCEP-30-0x • Entry-Level' : 'PCAP-31-03 • Associate'}
              </span>
              {customCardsForTrack.length > 0 && (
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                  {customCardsForTrack.length} {isFrench ? 'carte(s) créée(s)' : 'custom card(s)'}
                </span>
              )}
            </div>
            <p className="text-xs text-slate-300 mt-1">
              {currentTrack === 'pcep'
                ? isFrench
                  ? 'Programme officiel PCEP-30-0x (4 Domaines, 30 questions, 40 min, 70% pour réussir)'
                  : 'Python Institute PCEP-30-0x Syllabus (4 Domains, 30 questions, 40 min, 70% pass)'
                : isFrench
                ? 'Programme officiel PCAP-31-03 (5 Domaines, 40 questions, 65 min, 70% pour réussir)'
                : 'Python Institute PCAP-31-03 Syllabus (5 Domains, 40 questions, 65 min, 70% pass)'}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-start md:justify-end">
          {/* Switch track pill */}
          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1">
            <button
              onClick={() => onSelectTrack('pcep')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentTrack === 'pcep'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              PCEP-30-0x
            </button>
            <button
              onClick={() => onSelectTrack('pcap')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentTrack === 'pcap'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              PCAP-31-03
            </button>
          </div>

          {/* Create Custom Flashcard Button */}
          <button
            onClick={onOpenCreateCard}
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20 flex items-center space-x-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>{isFrench ? 'Créer une carte' : 'Create Flashcard'}</span>
          </button>
        </div>
      </section>

      {/* Hero Banner with Certification Status */}
      <section className="relative overflow-hidden rounded-2xl hero-card bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800/80 p-6 sm:p-8 shadow-xl">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-300 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>
                {currentTrack === 'pcep' ? t.dashboard.pcepAlignmentBadge : t.dashboard.alignmentBadge}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              {currentTrack === 'pcep' ? t.dashboard.pcepHeroTitle : t.dashboard.heroTitle}
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {currentTrack === 'pcep' ? (
                t.dashboard.pcepHeroDesc
              ) : isFrench ? (
                <>
                  Maîtrisez l’examen Certified Associate in Python Programming grâce à la répétition espacée (SRS), 
                  avec 100 cartes approfondies par domaine du programme officiel :{' '}
                  <strong className="text-cyan-600 dark:text-cyan-400 font-semibold">Section 1 (Modules & PIP)</strong>,{' '}
                  <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">Section 2 (Chaînes & Exceptions)</strong>,{' '}
                  <strong className="text-amber-600 dark:text-amber-400 font-semibold">Section 3 (Fonctions & Générateurs)</strong>,{' '}
                  <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">Section 4 (POO)</strong> et{' '}
                  <strong className="text-fuchsia-600 dark:text-fuchsia-400 font-semibold">Section 5 (Compréhensions, Lambdas & E/S)</strong>.
                </>
              ) : (
                <>
                  Master the Certified Associate in Python Programming exam with spaced repetition (SRS), 
                  featuring 100-card deep dives across all curriculum domains:{' '}
                  <strong className="text-cyan-600 dark:text-cyan-400 font-semibold">Section 1 (Modules & PIP)</strong>,{' '}
                  <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">Section 2 (Strings & Exceptions)</strong>,{' '}
                  <strong className="text-amber-600 dark:text-amber-400 font-semibold">Section 3 (Functions & Generators)</strong>,{' '}
                  <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">Section 4 (OOP)</strong>, and{' '}
                  <strong className="text-fuchsia-600 dark:text-fuchsia-400 font-semibold">Section 5 (Comprehensions, Lambdas & I/O)</strong>.
                </>
              )}
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {currentTrack === 'pcep' ? (
                <>
                  <button
                    onClick={() => onNavigate('flashcards', 'Section 1')}
                    className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-cyan-500/20 flex items-center space-x-1.5"
                  >
                    <Package className="w-4 h-4" />
                    <span>{t.dashboard.pcepSec1Btn}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('flashcards', 'Section 2')}
                    className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md shadow-emerald-600/20 flex items-center space-x-1.5"
                  >
                    <AlertTriangle className="w-4 h-4" />
                    <span>{t.dashboard.pcepSec2Btn}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('flashcards', 'Section 3')}
                    className="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-all shadow-md shadow-amber-600/20 flex items-center space-x-1.5"
                  >
                    <Zap className="w-4 h-4" />
                    <span>{t.dashboard.pcepSec3Btn}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('flashcards', 'Section 4')}
                    className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-md shadow-indigo-600/20 flex items-center space-x-1.5"
                  >
                    <Box className="w-4 h-4" />
                    <span>{t.dashboard.pcepSec4Btn}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => onNavigate('flashcards', 'Section 1')}
                    className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-cyan-500/20 flex items-center space-x-1.5"
                  >
                    <Package className="w-4 h-4" />
                    <span>{t.dashboard.section1Btn}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('flashcards', 'Section 2')}
                    className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md shadow-emerald-600/20 flex items-center space-x-1.5"
                  >
                    <AlertTriangle className="w-4 h-4" />
                    <span>{t.dashboard.section2Btn}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('flashcards', 'Section 3')}
                    className="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-all shadow-md shadow-amber-600/20 flex items-center space-x-1.5"
                  >
                    <Zap className="w-4 h-4" />
                    <span>{t.dashboard.section3Btn}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('flashcards', 'Section 4')}
                    className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-md shadow-indigo-600/20 flex items-center space-x-1.5"
                  >
                    <Box className="w-4 h-4" />
                    <span>{t.dashboard.section4Btn}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('flashcards', 'Section 5')}
                    className="px-3.5 py-2 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold text-xs transition-all shadow-md shadow-fuchsia-600/20 flex items-center space-x-1.5"
                  >
                    <Sliders className="w-4 h-4" />
                    <span>{t.dashboard.section5Btn}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>
                </>
              )}

              <button
                onClick={() => onNavigate('exam')}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/60 font-medium text-xs transition-colors flex items-center space-x-1.5"
              >
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>{t.dashboard.startExamBtn}</span>
              </button>

              <button
                onClick={() => onNavigate('cheatsheet')}
                className="px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/50 font-medium text-xs transition-colors flex items-center space-x-1.5"
              >
                <BookMarked className="w-4 h-4 text-sky-400" />
                <span>{t.dashboard.cheatsheetBtn}</span>
              </button>

              <button
                onClick={onOpenCreateCard}
                className="px-3.5 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 font-medium text-xs transition-colors flex items-center space-x-1.5"
              >
                <Plus className="w-4 h-4 text-cyan-400" />
                <span>{isFrench ? '+ Créer une carte' : '+ New Card'}</span>
              </button>
            </div>
          </div>

          {/* Exam Readiness Card */}
          <div className="w-full lg:w-80 bg-slate-950/80 border border-slate-800 rounded-2xl p-5 backdrop-blur-md shadow-inner">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {t.dashboard.examReadiness}
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {t.dashboard.passMark}
              </span>
            </div>

            <div className="flex items-baseline space-x-2 mb-3">
              <span className="text-3xl font-bold font-mono text-cyan-400">
                {readinessPercent}%
              </span>
              <span className="text-xs text-slate-400">{t.dashboard.estimatedRetention}</span>
            </div>

            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-500"
                style={{ width: `${readinessPercent}%` }}
              />
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs border-t border-slate-800/80 pt-3">
              <div className="flex flex-col">
                <span className="text-slate-400">{t.dashboard.totalCards}</span>
                <span className="font-mono font-semibold text-slate-200">
                  {cards.length} {t.dashboard.cardsCount}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400">{t.dashboard.reviewed}</span>
                <span className="font-mono font-semibold text-cyan-300">
                  {reviewedCount} ({progressPercent}%)
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400">{t.dashboard.masteredSrs}</span>
                <span className="font-mono font-semibold text-emerald-400">
                  {srsStats.mastered} {isFrench ? 'cartes' : 'Cards'}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400">{t.dashboard.inLearning}</span>
                <span className="font-mono font-semibold text-amber-400">
                  {srsStats.learning} {isFrench ? 'cartes' : 'Cards'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Functional Workspaces Hub */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>{t.dashboard.workspacesTitle}</span>
            </h2>
            <p className="text-xs text-slate-400">
              {t.dashboard.workspacesSubtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Flashcards & SRS */}
          <div
            onClick={() => onNavigate('flashcards')}
            className="group cursor-pointer p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-850 transition-all flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-cyan-500/20">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-100 text-base group-hover:text-cyan-300 transition-colors">
                {t.dashboard.flashcardsTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                {t.dashboard.flashcardsDesc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-medium">
              <span>{cards.length} {t.dashboard.flashcardsFooter}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Exam Simulator */}
          <div
            onClick={() => onNavigate('exam')}
            className="group cursor-pointer p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 transition-all flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-amber-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-100 text-base group-hover:text-amber-300 transition-colors">
                {t.dashboard.examSimTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                {t.dashboard.examSimDesc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-400 font-medium">
              <span>{t.dashboard.examSimFooter}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Code Lab */}
          <div
            onClick={() => onNavigate('codelab')}
            className="group cursor-pointer p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-850 transition-all flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-indigo-500/20">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-100 text-base group-hover:text-indigo-300 transition-colors">
                {t.dashboard.codeLabTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                {t.dashboard.codeLabDesc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-indigo-400 font-medium">
              <span>{t.dashboard.codeLabFooter}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Dunder Cheatsheet */}
          <div
            onClick={() => onNavigate('cheatsheet')}
            className="group cursor-pointer p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-850 transition-all flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-sky-500/20">
                <BookMarked className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-100 text-base group-hover:text-sky-300 transition-colors">
                {t.dashboard.cheatsheetCardTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                {t.dashboard.cheatsheetCardDesc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-sky-400 font-medium">
              <span>{t.dashboard.cheatsheetCardFooter}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Official Syllabus Blueprint */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>
                {currentTrack === 'pcep' ? t.dashboard.pcepBlueprintTitle : t.dashboard.blueprintTitle}
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              {currentTrack === 'pcep' ? t.dashboard.pcepBlueprintSubtitle : t.dashboard.blueprintSubtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(currentTrack === 'pcep' ? pcepSyllabusSections : pcapSyllabusSections).map((sec) => {
            const secCardsCount = cards.filter((c) => c.section === `Section ${sec.number}`).length;

            return (
              <div
                key={sec.id}
                className="p-5 rounded-2xl border transition-all bg-slate-900/90 border-cyan-500/40 ring-1 ring-cyan-500/20"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2.5 rounded-xl ${
                        sec.number === 1
                          ? 'bg-cyan-500/20 text-cyan-400'
                          : sec.number === 2
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : sec.number === 3
                          ? 'bg-amber-500/20 text-amber-400'
                          : sec.number === 4
                          ? 'bg-indigo-500/20 text-indigo-400'
                          : 'bg-fuchsia-500/20 text-fuchsia-400'
                      }`}
                    >
                      {sec.number === 1 && <Package className="w-5 h-5" />}
                      {sec.number === 2 && <AlertTriangle className="w-5 h-5" />}
                      {sec.number === 3 && <Zap className="w-5 h-5" />}
                      {sec.number === 4 && <Box className="w-5 h-5" />}
                      {sec.number === 5 && <Sliders className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono font-medium text-slate-400">
                          Section {sec.number}
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                          {secCardsCount} {t.dashboard.deepDiveCardsBadge}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-100">
                        {getSectionTitle(sec.number, sec.title)}
                      </h3>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-slate-800 text-cyan-300 border border-slate-700">
                    {sec.weight}
                  </span>
                </div>

                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  {getSectionDesc(sec.number, sec.description)}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    <strong className="text-cyan-400 font-medium">
                      {secCardsCount} {t.dashboard.cardsCount}
                    </strong>{' '}
                    • {sec.chapters.length} {t.dashboard.subChaptersCount}
                  </span>
                  <button
                    onClick={() => onNavigate('flashcards', `Section ${sec.number}`)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
                  >
                    <span>{t.dashboard.launchCards}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Deep-Dive Sub-Chapter Breakdown */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                {currentTrack === 'pcep'
                  ? activeDeepDiveTab === 'pcep-1'
                    ? '18% Weight'
                    : activeDeepDiveTab === 'pcep-2'
                    ? '29% Weight'
                    : activeDeepDiveTab === 'pcep-3'
                    ? '25% Weight'
                    : '28% Weight'
                  : activeDeepDiveTab === 'section-4'
                  ? '34% Weight'
                  : '20% Weight'}
              </span>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {currentTrack === 'pcep'
                  ? activeDeepDiveTab === 'pcep-1'
                    ? isFrench
                      ? 'Section 1 : Notions de base (Syllabus 1.1 à 1.5 • 100 Cartes)'
                      : 'Section 1: Computer Programming Fundamentals (1.1 - 1.5 • 100 Cards)'
                    : activeDeepDiveTab === 'pcep-2'
                    ? isFrench
                      ? 'Section 2 : Contrôle de flux & Boucles (Syllabus 2.1 à 2.4)'
                      : 'Section 2: Control Flow, Logic & Loops (2.1 - 2.4)'
                    : activeDeepDiveTab === 'pcep-3'
                    ? isFrench
                      ? 'Section 3 : Collections de données (Syllabus 3.1 à 3.4)'
                      : 'Section 3: Data Collections – Lists, Tuples, Dicts (3.1 - 3.4)'
                    : isFrench
                    ? 'Section 4 : Fonctions & Exceptions (Syllabus 4.1 à 4.4)'
                    : 'Section 4: Functions, Scopes & Exceptions (4.1 - 4.4)'
                  : activeDeepDiveTab === 'section-4'
                  ? isFrench
                    ? 'Section 4 : Programmation Orientée Objet (100 Cartes)'
                    : 'Section 4: Object-Oriented Programming (100 Cards)'
                  : isFrench
                  ? 'Section 5 : Divers (Compréhensions, Lambdas, E/S) (100 Cartes)'
                  : 'Section 5: Miscellaneous (Comprehensions, Lambdas, I/O) (100 Cards)'}
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {t.dashboard.selectSubChapterPrompt}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Tab switch buttons */}
            <div className="flex items-center space-x-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800 overflow-x-auto">
              {currentTrack === 'pcep' ? (
                <>
                  <button
                    onClick={() => setActiveDeepDiveTab('pcep-1')}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1 ${
                      activeDeepDiveTab === 'pcep-1'
                        ? 'bg-cyan-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Package className="w-3.5 h-3.5" />
                    <span>Sec 1</span>
                  </button>
                  <button
                    onClick={() => setActiveDeepDiveTab('pcep-2')}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1 ${
                      activeDeepDiveTab === 'pcep-2'
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Sec 2</span>
                  </button>
                  <button
                    onClick={() => setActiveDeepDiveTab('pcep-3')}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1 ${
                      activeDeepDiveTab === 'pcep-3'
                        ? 'bg-amber-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>Sec 3</span>
                  </button>
                  <button
                    onClick={() => setActiveDeepDiveTab('pcep-4')}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1 ${
                      activeDeepDiveTab === 'pcep-4'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>Sec 4</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setActiveDeepDiveTab('section-4')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                      activeDeepDiveTab === 'section-4'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>{t.dashboard.tabSec4}</span>
                  </button>
                  <button
                    onClick={() => setActiveDeepDiveTab('section-5')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                      activeDeepDiveTab === 'section-5'
                        ? 'bg-fuchsia-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>{t.dashboard.tabSec5}</span>
                  </button>
                </>
              )}
            </div>

            <button
              onClick={() => {
                if (currentTrack === 'pcep') {
                  const secNum =
                    activeDeepDiveTab === 'pcep-1'
                      ? 'Section 1'
                      : activeDeepDiveTab === 'pcep-2'
                      ? 'Section 2'
                      : activeDeepDiveTab === 'pcep-3'
                      ? 'Section 3'
                      : 'Section 4';
                  onNavigate('flashcards', secNum);
                } else {
                  onNavigate(
                    'flashcards',
                    activeDeepDiveTab === 'section-4' ? 'Section 4' : 'Section 5'
                  );
                }
              }}
              className="px-3.5 py-1.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/25 transition-colors flex items-center space-x-1.5"
            >
              <span>{t.dashboard.browseAllCards}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 ${
          (currentTrack === 'pcep' && (activeDeepDiveTab === 'pcep-1' || activeDeepDiveTab === 'pcep-2' || activeDeepDiveTab === 'pcep-3' || activeDeepDiveTab === 'pcep-4')) ||
          (currentTrack === 'pcap' && (activeDeepDiveTab === 'section-4' || activeDeepDiveTab === 'section-5'))
            ? 'lg:grid-cols-5'
            : 'lg:grid-cols-4'
        } gap-3 pt-2`}>
          {(currentTrack === 'pcep'
            ? activeDeepDiveTab === 'pcep-1'
              ? pcepSection1Chapters
              : activeDeepDiveTab === 'pcep-2'
              ? pcepSection2Chapters
              : activeDeepDiveTab === 'pcep-3'
              ? pcepSection3Chapters
              : pcepSection4Chapters
            : activeDeepDiveTab === 'section-4'
            ? section4Chapters
            : section5Chapters
          ).map((chap) => {
            const secName =
              currentTrack === 'pcep'
                ? activeDeepDiveTab === 'pcep-1'
                  ? 'Section 1'
                  : activeDeepDiveTab === 'pcep-2'
                  ? 'Section 2'
                  : activeDeepDiveTab === 'pcep-3'
                  ? 'Section 3'
                  : 'Section 4'
                : activeDeepDiveTab === 'section-4'
                ? 'Section 4'
                : 'Section 5';

            return (
              <div
                key={chap.id}
                onClick={() => onNavigate('flashcards', secName, chap.id)}
                className="group cursor-pointer p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono font-bold text-cyan-400">
                      Chapter {chap.id}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                      {chap.range}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                    {chap.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {chap.focus}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-medium text-cyan-400">
                  <span>
                    {t.dashboard.startChapter} {chap.id}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* User Custom Flashcards Section (if any created) */}
      {customCardsForTrack.length > 0 && (
        <section className="bg-slate-900/60 border border-indigo-500/30 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center space-x-2">
                  <span>{isFrench ? 'Vos cartes mémoire personnalisées' : 'Your Custom Flashcards'}</span>
                  <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                    {customCardsForTrack.length}
                  </span>
                </h2>
                <p className="text-xs text-slate-400">
                  {isFrench
                    ? 'Cartes personnalisées créées pour vous entraîner spécifiquement sur vos notions clés.'
                    : 'Cards you created to study your own specific focus areas and questions.'}
                </p>
              </div>
            </div>

            <button
              onClick={onOpenCreateCard}
              className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center space-x-1.5 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>{isFrench ? '+ Créer une autre' : '+ Create Another'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {customCardsForTrack.map((c) => (
              <div
                key={c.id}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs flex flex-col justify-between hover:border-indigo-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                      {c.section} • {c.chapter}
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300">
                      {c.category}
                    </span>
                  </div>
                  <h4 className="font-semibold text-slate-100 line-clamp-2">{c.question}</h4>
                  {c.codeSnippet && (
                    <div className="mt-2 p-2 rounded bg-slate-900 border border-slate-800 font-mono text-[10px] text-slate-300 overflow-x-auto">
                      <pre>{c.codeSnippet.slice(0, 100)}</pre>
                    </div>
                  )}
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-400 truncate max-w-[160px]">
                    =&gt; {c.stdoutExpected || 'Review'}
                  </span>
                  <div className="flex items-center space-x-2">
                    {onDeleteCustomCard && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (confirm(isFrench ? 'Supprimer cette carte ?' : 'Delete this flashcard?')) {
                            onDeleteCustomCard(c.id);
                          }
                        }}
                        className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                        title={isFrench ? 'Supprimer' : 'Delete'}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <button
                      onClick={() => onNavigate('flashcards', c.section, c.chapter)}
                      className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center space-x-1"
                    >
                      <span>{isFrench ? 'Étudier' : 'Study'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* High-Yield Exam Traps */}
      <section className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 space-y-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span>
            {currentTrack === 'pcep'
              ? isFrench
                ? 'Pièges & Points Critiques Fréquents – Examen PCEP-30-0x'
                : 'High-Yield Traps & Nuances – PCEP-30-0x Exam'
              : t.dashboard.trapsTitle}
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {(currentTrack === 'pcep' ? pcepHighYieldTraps : highYieldTraps).map((trap, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/60 text-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-semibold text-amber-300 block mb-1">{trap.title}</span>
                <p className="text-slate-400 leading-relaxed">{trap.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* System Settings & Background Updates Overview Card */}
      <section className="bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-cyan-950/20 border border-slate-800 rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Settings className="w-4 h-4" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                {isFrench ? 'Moteur système & Mises à jour' : 'System Engine & Update Manager'}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                {settings.currentVersion}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {isFrench
                ? 'Exécution du client & Synchronisation d’arrière-plan'
                : 'Client Runtime & Background Release Sync'}
            </h3>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-300 pt-1">
              <div>
                <span className="text-slate-500">{t.settings.releaseDate}: </span>
                <strong className="text-slate-200">{settings.releaseDate}</strong>
              </div>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <div>
                <span className="text-slate-500">{t.settings.lastChecked}: </span>
                <strong className="text-slate-200">
                  {settings.lastChecked
                    ? new Date(settings.lastChecked).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                    : isFrench
                    ? 'Jamais'
                    : 'Never'}
                </strong>
              </div>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <div className="flex items-center space-x-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${
                    settings.autoUpdateEnabled ? 'bg-emerald-400 animate-pulse' : 'bg-slate-600'
                  }`}
                />
                <span className="text-slate-300">
                  {isFrench
                    ? 'Mises à jour automatiques en arrière-plan :'
                    : 'Automatic Background Updates:'}{' '}
                  <strong
                    className={settings.autoUpdateEnabled ? 'text-emerald-400' : 'text-slate-400'}
                  >
                    {settings.autoUpdateEnabled
                      ? isFrench
                        ? 'Actif'
                        : 'Active'
                      : isFrench
                      ? 'Désactivé'
                      : 'Disabled'}
                  </strong>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={() => checkForUpdates(true)}
              disabled={settings.status === 'checking' || settings.status === 'downloading'}
              className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs shadow-sm transition-all flex items-center space-x-1.5"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${settings.status === 'checking' ? 'animate-spin' : ''}`}
              />
              <span>{t.settings.checkForUpdates}</span>
            </button>

            <button
              onClick={forceUpdate}
              disabled={settings.status === 'checking' || settings.status === 'downloading'}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-50 border border-slate-700 text-slate-200 hover:text-white font-semibold text-xs transition-all flex items-center space-x-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.settings.forceUpdate}</span>
            </button>

            <button
              onClick={() => setIsSettingsOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 text-slate-300 hover:text-white font-medium text-xs transition-all flex items-center space-x-1.5"
            >
              <Settings className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.nav.settings}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
