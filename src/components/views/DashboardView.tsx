import React, { useState, useEffect } from 'react';
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
import { pcppSyllabusSections, pcppTrackInfo } from '../../data/pcppData';
import { pcedSyllabusSections, pcedTrackInfo } from '../../data/pcedData';
import { pcadSyllabusSections, pcadTrackInfo } from '../../data/pcadData';
import { pcetSyllabusSections, pcetTrackInfo } from '../../data/pcetData';
import { pcatSyllabusSections, pcatTrackInfo } from '../../data/pcatData';
import { pcesSyllabusSections, pcesTrackInfo } from '../../data/pcesData';
import { pceaSyllabusSections, pceaTrackInfo } from '../../data/pceaData';
import { pceiSyllabusSections, pceiTrackInfo } from '../../data/pceiData';
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
    currentTrack === 'pcep'
      ? 'pcep-1'
      : currentTrack === 'pcpp'
      ? 'pcpp-1'
      : currentTrack === 'pced'
      ? 'pced-1'
      : currentTrack === 'pcad'
      ? 'pcad-1'
      : currentTrack === 'pcet'
      ? 'pcet-1'
      : currentTrack === 'pcat'
      ? 'pcat-1'
      : currentTrack === 'pces'
      ? 'pces-1'
      : currentTrack === 'pcea'
      ? 'pcea-1'
      : currentTrack === 'pcei'
      ? 'pcei-1'
      : 'section-4'
  );

  useEffect(() => {
    setActiveDeepDiveTab(
      currentTrack === 'pcep'
        ? 'pcep-1'
        : currentTrack === 'pcpp'
        ? 'pcpp-1'
        : currentTrack === 'pced'
        ? 'pced-1'
        : currentTrack === 'pcad'
        ? 'pcad-1'
        : currentTrack === 'pcet'
        ? 'pcet-1'
        : currentTrack === 'pcat'
        ? 'pcat-1'
        : currentTrack === 'pces'
        ? 'pces-1'
        : currentTrack === 'pcea'
        ? 'pcea-1'
        : currentTrack === 'pcei'
        ? 'pcei-1'
        : 'section-4'
    );
  }, [currentTrack]);

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

  const pcppSection1Chapters = [
    {
      id: '1.1',
      title: isFrench ? 'Classes avancées, @classmethod, @staticmethod & @property' : 'Advanced Classes, @classmethod, @staticmethod & @property',
      range: isFrench ? 'Cartes 1–20' : 'Cards 1–20',
      focus: isFrench
        ? 'Méthodes de classe (cls), méthodes statiques, getters/setters/deleters avec @property, et descripteurs (__get__, __set__)'
        : 'Class methods (cls), static methods, @property getters/setters/deleters, descriptors (__get__, __set__), and __slots__ memory optimization',
    },
    {
      id: '1.2',
      title: isFrench ? 'Méthodes spéciales (dunders) & Surcharge d’opérateurs' : 'Dunder Methods, Container Protocol & Operator Overloading',
      range: isFrench ? 'Cartes 21–40' : 'Cards 21–40',
      focus: isFrench
        ? '__str__ vs __repr__, protocole conteneur (__len__, __getitem__, __setitem__), comparaisons riches (__eq__, __lt__) et opérateurs arithmétiques'
        : '__str__ vs __repr__, container protocol (__len__, __getitem__, __setitem__), rich comparisons (__eq__, __lt__), and arithmetic dunders (__add__, __radd__)',
    },
    {
      id: '1.3',
      title: isFrench ? 'Métaclasses, type & Création interne de classes' : 'Metaclasses, type Metaclass & Class Creation Internals',
      range: isFrench ? 'Cartes 41–60' : 'Cards 41–60',
      focus: isFrench
        ? 'type() à 3 arguments, classe comme instance de métaclasse, __new__ vs __init__ de métaclasse, metaclass=Meta et __init_subclass__'
        : '3-argument type(), classes as metaclass instances, metaclass __new__ vs __init__, metaclass=Meta keyword, and __init_subclass__ hook',
    },
    {
      id: '1.4',
      title: isFrench ? 'Classes de base abstraites (ABCs) & @abstractmethod' : 'Abstract Base Classes (ABCs), @abstractmethod & Virtual Subclasses',
      range: isFrench ? 'Cartes 61–75' : 'Cards 61–75',
      focus: isFrench
        ? 'Module abc, classe ABC, décorateur @abstractmethod, instanciation impossible de classes incomplètes et enregistrement virtuel avec register()'
        : 'abc module, ABC base class, @abstractmethod decorator, instantiation prevention of incomplete subclasses, and virtual subclass register()',
    },
    {
      id: '1.5',
      title: isFrench ? 'Héritage multiple, MRO C3, Sérialisation pickle & copy' : 'Multiple Inheritance, C3 MRO, Serialization (pickle/shelve) & copy',
      range: isFrench ? 'Cartes 76–100' : 'Cards 76–100',
      focus: isFrench
        ? 'Linéarisation C3 (__mro__), super() coopératif, sérialisation avec pickle/shelve, __getstate__/__setstate__, et copies copy.copy/deepcopy'
        : 'C3 MRO linearization (__mro__), cooperative super(), pickle/shelve serialization protocols (__getstate__/__setstate__), and copy vs deepcopy',
    },
  ];

  const pcppSection2Chapters = [
    {
      id: '2.1',
      title: isFrench ? 'Guide de style PEP 8 & Outils qualité' : 'PEP 8 Style Guide & Code Quality Linters',
      range: isFrench ? 'Cartes 1–20' : 'Cards 1–20',
      focus: isFrench
        ? 'Indentation 4 espaces, limite 79 caractères, conventions de nommage (PascalCase, snake_case), comparaison d’identité is None vs == None, et linters (flake8, pycodestyle, black)'
        : '4-space indentation, 79-char limit, naming conventions (PascalCase, snake_case), identity checks (is None vs == None), and linters (flake8, pycodestyle, black)',
    },
    {
      id: '2.2',
      title: isFrench ? 'PEP 20 Zen of Python & PEP 257 Docstrings' : 'PEP 20 Zen of Python & PEP 257 Docstrings',
      range: isFrench ? 'Cartes 21–40' : 'Cards 21–40',
      focus: isFrench
        ? 'Aphorismes du Zen (this.py / Tim Peters), Beautiful is better than ugly, PEP 257 docstrings sur une vs plusieurs lignes, attribut __doc__, formats reST et Google/NumPy'
        : 'Zen aphorisms (import this / Tim Peters), Beautiful is better than ugly, PEP 257 one-line vs multi-line docstrings, __doc__ attribute, and reST/Google styles',
    },
    {
      id: '2.3',
      title: isFrench ? 'Patrons créationnels : Singleton, Factory, Builder, Prototype' : 'Creational Patterns: Singleton, Factory, Builder, Prototype',
      range: isFrench ? 'Cartes 41–60' : 'Cards 41–60',
      focus: isFrench
        ? 'Singleton via __new__, métaclasse ou module; patron Borg (état partagé via __dict__); Factory Method, Abstract Factory, Builder avec chaînage fluent, et Prototype avec copy.deepcopy'
        : 'Singleton via __new__, metaclass, or module cache; Borg shared-state idiom; Factory Method, Abstract Factory, fluent Builder, and Prototype with copy.deepcopy',
    },
    {
      id: '2.4',
      title: isFrench ? 'Patrons structurels : Adapter, Decorator, Facade, Proxy, Composite' : 'Structural Patterns: Adapter, Decorator, Facade, Proxy, Composite',
      range: isFrench ? 'Cartes 61–80' : 'Cards 61–80',
      focus: isFrench
        ? 'Adapter pour convertir les interfaces incompatibles, Decorator dynamique sans sous-classement, Facade simplifiant un sous-système complexe, Proxy contrôlant l’accès, Composite arborescent, et Flyweight'
        : 'Adapter translating interfaces, Decorator adding behavior dynamically, Facade providing high-level entry, Proxy controlling access (__getattr__), Composite trees, and Flyweight sharing',
    },
    {
      id: '2.5',
      title: isFrench ? 'Patrons comportementaux : Observer, Strategy, Command, State, Iterator' : 'Behavioral Patterns: Observer, Strategy, Command, State, Iterator',
      range: isFrench ? 'Cartes 81–100' : 'Cards 81–100',
      focus: isFrench
        ? 'Observer (pub/sub, attach/notify), Strategy (algorithmes interchangeables via callables), Command (requêtes encapsulées avec undo/redo), State, Chain of Responsibility, Visitor et Memento'
        : 'Observer (pub/sub, attach/notify), Strategy (pluggable algorithms via first-class functions), Command (encapsulated actions with undo/redo), State, Chain of Responsibility, Visitor, and Memento',
    },
  ];

  const pcedSection1Chapters = [
    {
      id: '1.1',
      title: isFrench ? 'Définir et classifier les données' : 'Defining & Classifying Data',
      range: isFrench ? 'Cartes 1–20' : 'Cards 1–20',
      focus: isFrench
        ? 'Données quantitatives vs qualitatives, échelles de mesure (nominale, ordinale, intervalle, rapport), données structurées, semi-structurées et non structurées.'
        : 'Quantitative vs qualitative, measurement scales (nominal, ordinal, interval, ratio), structured, semi-structured, and unstructured data.',
    },
    {
      id: '1.2',
      title: isFrench ? 'Sources de données et stockage' : 'Data Sources & Storage',
      range: isFrench ? 'Cartes 21–40' : 'Cards 21–40',
      focus: isFrench
        ? 'Sources primaires vs secondaires, RDBMS vs NoSQL, data warehouses vs data lakes, formats tabulaires et métadonnées.'
        : 'Primary vs secondary sources, RDBMS vs NoSQL, data warehouses vs data lakes, tabular formats, and metadata types.',
    },
    {
      id: '1.3',
      title: isFrench ? 'Cycle de vie et gouvernance des données' : 'Data Lifecycle & Management',
      range: isFrench ? 'Cartes 41–60' : 'Cards 41–60',
      focus: isFrench
        ? 'Les 8 étapes du cycle de vie des données, dimensions de qualité de données (DAMA), gouvernance et traçabilité (lineage).'
        : '8-stage data lifecycle, DAMA data quality dimensions (accuracy, completeness, consistency, etc.), governance, and lineage.',
    },
    {
      id: '1.4',
      title: isFrench ? 'Périmètre de la Data Science et de l’analyse' : 'Data Science, Analytics & Analysis',
      range: isFrench ? 'Cartes 61–80' : 'Cards 61–80',
      focus: isFrench
        ? 'Les 4 types d’analytique (descriptive, diagnostique, prédictive, prescriptive), méthodologie CRISP-DM, rôles et compétences.'
        : '4 branches of analytics (descriptive, diagnostic, predictive, prescriptive), CRISP-DM methodology, analyst vs data scientist roles.',
    },
    {
      id: '1.5',
      title: isFrench ? 'Principes éthiques, légaux et de conformité' : 'Ethical, Legal & Compliance Principles',
      range: isFrench ? 'Cartes 81–100' : 'Cards 81–100',
      focus: isFrench
        ? 'Protection des DCP/PII, RGPD/GDPR, CCPA, HIPAA, anonymisation, pseudonymisation, k-anonymat, et confidentialité différentielle.'
        : 'PII protection, GDPR, CCPA, HIPAA regulations, anonymization, pseudonymization, k-anonymity, differential privacy, and bias.',
    },
  ];

  const pcedSection2Chapters = [
    {
      id: '2.1',
      title: isFrench ? 'Variables, types, inspection & chaînes de caractères' : 'Variables, Data Types, Type Inspection & Strings',
      range: isFrench ? 'Cartes 1–20' : 'Cards 1–20',
      focus: isFrench
        ? 'Typage dynamique, int/float/str/bool, type() vs isinstance(), cast de type, f-strings, découpage [start:stop:step], et méthodes strip/split/join.'
        : 'Dynamic typing, int/float/str/bool, type() vs isinstance(), casting traps, f-strings, slicing [start:stop:step], and strip/split/join methods.',
    },
    {
      id: '2.2',
      title: isFrench ? 'Contrôle de flux, boucles & itération défensive' : 'Control Flow, Loops & Iteration in Data Processing',
      range: isFrench ? 'Cartes 21–40' : 'Cards 21–40',
      focus: isFrench
        ? 'if/elif/else, comparaisons chaînées, opérateur ternaire, for/while, range(), enumerate(), zip(), break/continue, et clause else de boucle.'
        : 'if/elif/else, chained comparisons, ternary expressions, for/while loops, range(), enumerate(), zip(), break/continue, and loop-else clauses.',
    },
    {
      id: '2.3',
      title: isFrench ? 'Fonctions, portées, lambdas & modules analytiques' : 'Functions, Scopes, Lambdas & Analytical Modules',
      range: isFrench ? 'Cartes 41–60' : 'Cards 41–60',
      focus: isFrench
        ? 'def, paramètres positionnels vs mot-clé, portée LEGB, lambdas, map/filter, agrégations (sum, min, max, any, all), round(), math et statistics.'
        : 'def, positional vs keyword args, LEGB scope, lambdas, map/filter, built-in aggregations (sum, min, max, any, all), round(), math & statistics.',
    },
    {
      id: '2.4',
      title: isFrench ? 'Structures séquentielles & ensembles : listes, tuples, sets' : 'Sequential & Set Structures: Lists, Tuples, Sets & Comprehensions',
      range: isFrench ? 'Cartes 61–80' : 'Cards 61–80',
      focus: isFrench
        ? 'Mutation de listes (append/extend/pop), tri in-place vs sorted(), compréhensions de listes, tuples hachables, déduplication et algèbre d’ensembles (|, &, -, ^).'
        : 'List mutation (append/extend/pop), sort() vs sorted(), list comprehensions, tuple immutability/hashing, set deduplication & algebra (|, &, -, ^).',
    },
    {
      id: '2.5',
      title: isFrench ? 'Dictionnaires, tables de correspondance & entrées/sorties de fichiers' : 'Dictionaries, Structured Records, File I/O & Parsing (CSV / JSON)',
      range: isFrench ? 'Cartes 81–100' : 'Cards 81–100',
      focus: isFrench
        ? 'Paires clé-valeur O(1), dict.get() défensif, dénombrement de fréquences, gestionnaire with open(), modes (r, w, a), csv.reader/DictReader, et json.loads/dumps.'
        : 'O(1) key-value lookup, defensive dict.get(), frequency counting, with open() context managers, file modes (r, w, a), csv.reader/DictReader, and json.loads/dumps.',
    },
  ];

  const pcedSection3Chapters = [
    {
      id: '3.1',
      title: isFrench ? 'Opérations fichiers & Ingestion : open(), CSV & DictReader' : 'File Operations & Ingestion: open(), CSV & DictReader',
      range: isFrench ? 'Cartes 1–20' : 'Cards 1–20',
      focus: isFrench
        ? 'Modes de fichiers (r, w, a), encodage utf-8, context manager with open(), csv.reader/writer, csv.DictReader/DictWriter, délimiteurs et FileNotFoundError.'
        : 'File modes (r, w, a), utf-8 encoding, with open() safety, csv.reader/writer, csv.DictReader/DictWriter, delimiters, and FileNotFoundError.',
    },
    {
      id: '3.2',
      title: isFrench ? 'Nettoyage des données : Valeurs manquantes, doublons & typage' : 'Data Cleansing: Missing Values, Duplicates & Types',
      range: isFrench ? 'Cartes 21–40' : 'Cards 21–40',
      focus: isFrench
        ? 'Détection de None et chaînes vides, suppression vs imputation (moyenne, médiane, mode), déduplication par sets/clés, et transtypage sécurisé.'
        : 'Detecting None and empty strings, dropping vs imputation (mean, median, mode), deduplication via sets/keys, and safe type conversions.',
    },
    {
      id: '3.3',
      title: isFrench ? 'Transformation des données, normalisation & opérations texte' : 'Data Transformation, Normalization & String Operations',
      range: isFrench ? 'Cartes 41–60' : 'Cards 41–60',
      focus: isFrench
        ? 'Normalisation de casse (.lower), strip, replace, normalisation Min-Max [0, 1], standardisation Z-score, discrétisation (binning), et formatage f-strings.'
        : 'Case folding (.lower), strip, replace, Min-Max scaling [0, 1], Z-score standardization, binning, one-hot dummy flags, and f-string formatting.',
    },
    {
      id: '3.4',
      title: isFrench ? 'Fondamentaux NumPy & calculs vectoriels' : 'NumPy Fundamentals & Vectorized Calculations',
      range: isFrench ? 'Cartes 61–80' : 'Cards 61–80',
      focus: isFrench
        ? 'ndarray homogène, shape/ndim/size/dtype, np.arange, np.linspace, vectorisation élément par élément, broadcasting, masques booléens et np.where.'
        : 'Homogeneous ndarray, shape/ndim/size/dtype, np.arange, np.linspace, element-wise vectorization, broadcasting, boolean masking, and np.where.',
    },
    {
      id: '3.5',
      title: isFrench ? 'Statistiques descriptives, agrégations & EDA' : 'Descriptive Statistics, Aggregations & EDA',
      range: isFrench ? 'Cartes 81–100' : 'Cards 81–100',
      focus: isFrench
        ? 'Tendance centrale (moyenne, médiane, mode), dispersion (variance n-1, écart-type, IQR), détection des outliers (règle 1.5*IQR de Tukey), corrélation de Pearson r et paradoxe de Simpson.'
        : 'Central tendency (mean, median, mode), dispersion (sample variance n-1, std, IQR), Tukey outlier fences (1.5*IQR), Pearson r, and Simpson’s Paradox.',
    },
  ];

  const pcadSection1Chapters = [
    {
      id: '1.1',
      title: isFrench ? 'Ingestion multi-formats & Parsage de données' : 'Data Ingestion & Multi-Format Parsing',
      range: isFrench ? 'Cartes 1–20' : 'Cards 1–20',
      focus: isFrench
        ? 'read_csv, read_json, read_excel, read_parquet, gestion des délimiteurs, encodages (UTF-8, Latin-1), types (dtype) et parse_dates.'
        : 'read_csv, read_json, read_excel, read_parquet, handling custom delimiters, encodings, memory dtype optimization, and parse_dates.',
    },
    {
      id: '1.2',
      title: isFrench ? 'Nettoyage des données & Imputation des valeurs manquantes' : 'Data Cleaning & Missing Value Imputation',
      range: isFrench ? 'Cartes 21–40' : 'Cards 21–40',
      focus: isFrench
        ? 'isna, dropna, fillna (ffill, bfill, moyenne, médiane), déduplication drop_duplicates et cohérence des types.'
        : 'isna, notna, dropna strategies, fillna (ffill, bfill, mean/median), drop_duplicates, and type casting with astype.',
    },
    {
      id: '1.3',
      title: isFrench ? 'Wrangling de données & Opérations sur chaînes' : 'Data Wrangling & String Operations',
      range: isFrench ? 'Cartes 41–60' : 'Cards 41–60',
      focus: isFrench
        ? 'Accesseur .str (lower, strip, replace, extract regex), filtrage booléen complexe, requêtes avec .query() et indexation .loc / .iloc.'
        : '.str vector methods, regex pattern extraction, boolean querying (.query), safe slicing with .loc / .iloc, and SettingWithCopy prevention.',
    },
    {
      id: '1.4',
      title: isFrench ? 'Remodelage, Pivotement, Jointures & Concaténation' : 'Reshaping, Pivoting, Merging & Concatenation',
      range: isFrench ? 'Cartes 61–80' : 'Cards 61–80',
      focus: isFrench
        ? 'pivot_table, melt, stack/unstack, merge (inner, left, right, outer), suffixes, validation et concaténation avec pd.concat.'
        : 'pivot_table, melt (wide-to-long), stack/unstack, merge joins (inner, left, right, outer), key validation, and pd.concat along axes.',
    },
    {
      id: '1.5',
      title: isFrench ? 'Ingénierie des variables, Encodage & Mise à l’échelle' : 'Feature Engineering, Categorical Encoding & Scaling',
      range: isFrench ? 'Cartes 81–100' : 'Cards 81–100',
      focus: isFrench
        ? 'pd.get_dummies, Ordinal/One-Hot, binning avec pd.cut/qcut, standardisation StandardScaler (Z-score), normalisation MinMaxScaler et détection d’outliers.'
        : 'pd.get_dummies, dummy trap avoidance, pd.cut vs pd.qcut, StandardScaler, MinMaxScaler, and robust outlier clipping.',
    },
  ];

  const pcadSection2Chapters = [
    {
      id: '2.1',
      title: isFrench ? 'Structures Python avancées & Gestion mémoire' : 'Python Advanced Structures & Memory Management',
      range: isFrench ? 'Cartes 1–20' : 'Cards 1–20',
      focus: isFrench
        ? 'Compréhensions avancées, collections (defaultdict, Counter, deque, namedtuple), itérateurs, générateurs (yield) et profileur mémoire.'
        : 'Nested comprehensions, collections module (Counter, defaultdict, deque, namedtuple), iterator protocol, yield generators, and memory overhead.',
    },
    {
      id: '2.2',
      title: isFrench ? 'Outils fonctionnels, Fermetures & Décorateurs' : 'Functional Tools, Closures & Decorators',
      range: isFrench ? 'Cartes 21–40' : 'Cards 21–40',
      focus: isFrench
        ? 'functools (lru_cache, partial, reduce), itertools (groupby, product, combinations), fermetures lexicales et décorateurs de chronométrage.'
        : 'functools (lru_cache, partial, reduce), itertools (chain, groupby, product), lexical closures, and performance-timing decorators.',
    },
    {
      id: '2.3',
      title: isFrench ? 'Bases de données relationnelles & SQL analytique' : 'Relational Databases & Analytical SQL',
      range: isFrench ? 'Cartes 41–60' : 'Cards 41–60',
      focus: isFrench
        ? 'Jointures SQL complexes, agrégations GROUP BY / HAVING, sous-requêtes, CTE (WITH) et fonctions de fenêtrage (ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG).'
        : 'Multi-table JOINs, GROUP BY & HAVING, CTEs (WITH), and window functions (ROW_NUMBER, RANK, DENSE_RANK, OVER PARTITION BY, LEAD/LAG).',
    },
    {
      id: '2.4',
      title: isFrench ? 'Connectivité Python & Bases de données' : 'Python Database Connectivity (sqlite3 & SQLAlchemy)',
      range: isFrench ? 'Cartes 61–80' : 'Cards 61–80',
      focus: isFrench
        ? 'sqlite3 connection, cursor, execute, executemany, requêtes paramétrées (sécurité anti-injection SQL), commit, rollback et SQLAlchemy create_engine.'
        : 'sqlite3 connection/cursor lifecycle, parameterized queries (? placeholders), commit/rollback transaction integrity, and SQLAlchemy engines.',
    },
    {
      id: '2.5',
      title: isFrench ? 'Intégration Pandas-SQL & Gestion des transactions' : 'Pandas & SQL Integration & Transaction Management',
      range: isFrench ? 'Cartes 81–100' : 'Cards 81–100',
      focus: isFrench
        ? 'pd.read_sql, pd.read_sql_query, pd.read_sql_table, df.to_sql (if_exists, chunksize, index), mapping des types et transactions atomiques.'
        : 'pd.read_sql, pd.read_sql_query, df.to_sql parameters (if_exists, chunksize, index), type casting between SQL/Pandas, and ACID transactions.',
    },
  ];

  const pcadSection3Chapters = [
    {
      id: '3.1',
      title: isFrench ? 'Statistiques descriptives & Analyse exploratoire (EDA)' : 'Descriptive Statistics & Exploratory Data Analysis (EDA)',
      range: isFrench ? 'Cartes 1–20' : 'Cards 1–20',
      focus: isFrench
        ? 'Tendance centrale (moyenne, médiane, mode), dispersion (variance, std, IQR), asymétrie (skewness), kurtosis, corrélation (Pearson vs Spearman).'
        : 'Measures of center, dispersion (sample vs population std), skewness, kurtosis, covariance, and Pearson vs Spearman rank correlation.',
    },
    {
      id: '3.2',
      title: isFrench ? 'Distributions théoriques & Probabilités' : 'Theoretical Probability Distributions',
      range: isFrench ? 'Cartes 21–40' : 'Cards 21–40',
      focus: isFrench
        ? 'Distributions discrètes (Bernoulli, Binomiale, Poisson) et continues (Normale, Uniforme, Exponentielle, Student t), PDF, CDF, PPF et règle 68-95-99.7.'
        : 'Discrete (Binomial, Poisson) & continuous (Normal, t, Exponential) distributions, PMF/PDF, CDF, PPF/percentiles, and 68-95-99.7 rule.',
    },
    {
      id: '3.3',
      title: isFrench ? 'Théorie de l’échantillonnage, Estimation & TCL' : 'Sampling Theory, Estimation & Central Limit Theorem',
      range: isFrench ? 'Cartes 41–60' : 'Cards 41–60',
      focus: isFrench
        ? 'Techniques d’échantillonnage (aléatoire simple, stratifié, en grappes), Théorème Central Limite (TCL), erreur type (SEM) et intervalles de confiance (IC à 95%).'
        : 'Random vs stratified sampling, Central Limit Theorem (CLT), Standard Error of Mean (SEM), and 95% Confidence Intervals (Z vs t-distribution).',
    },
    {
      id: '3.4',
      title: isFrench ? 'Tests d’hypothèses (Paramétriques & Non-Paramétriques)' : 'Hypothesis Testing (Parametric & Non-Parametric)',
      range: isFrench ? 'Cartes 61–80' : 'Cards 61–80',
      focus: isFrench
        ? 'H0 vs H1, niveau alpha, p-valeur, t-test à 1 échantillon, 2 échantillons indépendants, appariés, ANOVA unidirectionnelle, Mann-Whitney U et Wilcoxon.'
        : 'Null vs alternative hypotheses, Type I/II errors, p-value decision rule, 1-sample/2-sample/paired t-tests, One-Way ANOVA, and non-parametric tests.',
    },
    {
      id: '3.5',
      title: isFrench ? 'Tests catégoriels, Régression & Statistiques appliquées' : 'Categorical Tests, Regression & Applied Statistics',
      range: isFrench ? 'Cartes 81–100' : 'Cards 81–100',
      focus: isFrench
        ? 'Test du Chi-carré d’indépendance / adéquation, V de Cramér, régression linéaire simple OLS, R², R² ajusté, résidus et correction de Bonferroni.'
        : 'Chi-Square test of independence, goodness of fit, Cramér’s V, OLS linear regression, R-squared vs Adjusted R-squared, residual diagnostics, and Bonferroni.',
    },
  ];

  const pcadSection4Chapters = [
    {
      id: '4.1',
      title: isFrench ? 'Relations entre variables & Corrélations' : 'Feature Relationships & Correlations',
      range: isFrench ? 'Cartes 1–20' : 'Cards 1–20',
      focus: isFrench
        ? 'Corrélations de Pearson, Spearman, Kendall Tau, matrice de covariance, nuages de points et multicolinéarité VIF.'
        : 'Pearson, Spearman, Kendall Tau, covariance matrix, scatter plots, pairplots, and VIF multicollinearity.',
    },
    {
      id: '4.2',
      title: isFrench ? 'Pipelines de données, Fuites & Validation' : 'Data Pipelines, Leakage Prevention & Validation',
      range: isFrench ? 'Cartes 21–40' : 'Cards 21–40',
      focus: isFrench
        ? 'Prévention des fuites de données (Data Leakage), train_test_split (stratify, random_state), validation croisée K-Fold et StratifiedKFold.'
        : 'Data leakage prevention, train_test_split (stratify, random_state), K-Fold vs StratifiedKFold, and cross_val_score.',
    },
    {
      id: '4.3',
      title: isFrench ? 'Prétraitement Scikit-Learn & Architecture Pipeline' : 'Scikit-Learn Preprocessing & Pipeline Architecture',
      range: isFrench ? 'Cartes 41–60' : 'Cards 41–60',
      focus: isFrench
        ? 'Pipeline, make_pipeline, ColumnTransformer, SimpleImputer, StandardScaler, OneHotEncoder et respect strict de fit vs transform.'
        : 'Pipeline, make_pipeline, ColumnTransformer, SimpleImputer, StandardScaler, OneHotEncoder, and fit vs transform rules.',
    },
    {
      id: '4.4',
      title: isFrench ? 'Apprentissage supervisé : Algorithmes & Métriques' : 'Supervised Learning Algorithms & Evaluation Metrics',
      range: isFrench ? 'Cartes 61–80' : 'Cards 61–80',
      focus: isFrench
        ? 'Régression linéaire, Ridge/Lasso, Régression logistique, Arbres & Forêts, MAE, MSE, RMSE, R², matrice de confusion, ROC-AUC.'
        : 'LinearRegression, Ridge/Lasso L1/L2, LogisticRegression, DecisionTree, RandomForest, MAE/MSE/RMSE/R2, precision/recall/F1, and ROC-AUC.',
    },
    {
      id: '4.5',
      title: isFrench ? 'Apprentissage non-supervisé, ACP & Réglage d’hyperparamètres' : 'Unsupervised Learning, PCA & Hyperparameter Tuning',
      range: isFrench ? 'Cartes 81–100' : 'Cards 81–100',
      focus: isFrench
        ? 'K-Means, inertie, méthode du coude, coefficient de silhouette, ACP (variance expliquée), GridSearchCV et RandomizedSearchCV.'
        : 'K-Means clustering, inertia, elbow method, silhouette score, PCA dimensionality reduction, GridSearchCV, and RandomizedSearchCV.',
    },
  ];

  const pcadSection5Chapters = [
    {
      id: '5.1',
      title: isFrench ? 'Architecture Matplotlib & API Orientée-Objet' : 'Matplotlib Core Architecture & Object-Oriented API',
      range: isFrench ? 'Cartes 1–20' : 'Cards 1–20',
      focus: isFrench
        ? 'Hiérarchie Figure/Axes, plt.subplots(), ax.plot(), ax.scatter(), ax.bar(), ax.hist(), limites et formatage des repères.'
        : 'Figure vs Axes hierarchy, plt.subplots(), OO methods (ax.plot, ax.scatter, ax.bar, ax.hist), set_xlim/ylim, and tick formatters.',
    },
    {
      id: '5.2',
      title: isFrench ? 'Styles, Annotations, Légendes & Sauvegardes' : 'Matplotlib Styling, Annotations, Legends & Exports',
      range: isFrench ? 'Cartes 21–40' : 'Cards 21–40',
      focus: isFrench
        ? 'Couleurs, styles de traits, marqueurs, ax.legend(loc, bbox_to_anchor), ax.annotate(arrowprops), plt.tight_layout() et savefig (dpi, bbox_inches).'
        : 'Colors, line/marker styles, colormaps, ax.legend(loc, bbox_to_anchor), ax.annotate with arrows, plt.tight_layout(), and savefig options.',
    },
    {
      id: '5.3',
      title: isFrench ? 'Seaborn : Distributions & Données catégorielles' : 'Seaborn Statistical Distributions & Categorical Plots',
      range: isFrench ? 'Cartes 41–60' : 'Cards 41–60',
      focus: isFrench
        ? 'histplot (kde=True), kdeplot, ecdfplot, boxplot, violinplot, barplot (estimateur moyenne), countplot, pointplot et hue.'
        : 'sns.histplot, kdeplot, ecdfplot, boxplot, violinplot, barplot (ci/errorbar), countplot, pointplot, and semantic mapping with hue/style/size.',
    },
    {
      id: '5.4',
      title: isFrench ? 'Grilles multi-graphes Seaborn & Tableaux de bord Plotly' : 'Seaborn Multi-Plot Grids & Plotly Interactive Dashboards',
      range: isFrench ? 'Cartes 61–80' : 'Cards 61–80',
      focus: isFrench
        ? 'FacetGrid, pairplot, jointplot, heatmaps annotées, Plotly Express (px.scatter, px.line), hover_data et personnalisation de layout.'
        : 'sns.FacetGrid, pairplot, jointplot, annot heatmaps, Plotly Express (px.scatter, px.line, px.bar), hover_data, and layout styling.',
    },
    {
      id: '5.5',
      title: isFrench ? 'Storytelling de données & Visualisation éthique' : 'Data Storytelling & Ethical Charting Standards',
      range: isFrench ? 'Cartes 81–100' : 'Cards 81–100',
      focus: isFrench
        ? 'Principes de Tufte (Data-Ink ratio, Lie Factor), Gestalt, encodages pré-attentifs, accessibilité (daltonisme, Viridis/Cividis), et dashboards décisionnels.'
        : 'Tufte Data-Ink ratio, Lie Factor, Gestalt principles, pre-attentive attributes, colorblind-safe palettes (Viridis, Cividis), and executive dashboard hierarchy.',
    },
  ];

  const pcadHighYieldTraps = [
    {
      title: isFrench ? 'Fuite de données (Data Leakage) avec le pré-traitement' : 'Data Leakage: Fitting Scalers on Full Dataset',
      text: isFrench
        ? 'Ne faites JAMAIS scaler.fit() sur le dataset complet avant de séparer train et test. Utilisez sklearn Pipeline pour que fit() s’applique uniquement aux données d’entraînement.'
        : 'Never call scaler.fit() or imputer.fit() on the entire dataset prior to splitting. Always use Scikit-Learn Pipelines so transformers fit only on training folds.',
    },
    {
      title: isFrench ? 'API Matplotlib Orientée-Objet vs API Pyplot d’état' : 'Matplotlib Object-Oriented API vs. Pyplot State-Machine',
      text: isFrench
        ? 'Privilégiez toujours fig, ax = plt.subplots() et ax.plot(...) plutôt que plt.plot(...). L’API orientée-objet évite les conflits d’état en production ou en sous-tracés multiples.'
        : 'Always prefer fig, ax = plt.subplots() and ax.plot(...) over plt.plot(...). The OO interface ensures unambiguous target axes across complex multi-figure layouts.',
    },
    {
      title: isFrench ? 'Attribution indexée chaînée dans Pandas (SettingWithCopyWarning)' : 'Chained Indexing Assignment in Pandas (SettingWithCopyWarning)',
      text: isFrench
        ? 'Évitez df[df["A"] > 0]["B"] = 10 car Pandas opère sur une copie temporaire. Utilisez toujours df.loc[df["A"] > 0, "B"] = 10 pour modifier le DataFrame original avec certitude.'
        : 'Avoid chained assignment df[df["A"] > 0]["B"] = 10 because it operates on an ambiguous view/copy. Always use explicit .loc indexer: df.loc[df["A"] > 0, "B"] = 10.',
    },
    {
      title: isFrench ? 'df.dropna() & df.fillna() : Pas de mutation par défaut' : 'df.dropna() & df.fillna() Return New DataFrames by Default',
      text: isFrench
        ? 'Les méthodes dropna() et fillna() ne modifient pas l’objet sur place. Vous devez réassigner le résultat (df = df.dropna()) ou spécifier inplace=True.'
        : 'Methods like dropna() and fillna() return a new DataFrame by default and do not mutate in place. You must either reassign (df = df.dropna()) or pass inplace=True.',
    },
    {
      title: isFrench ? 'Interprétation rigoureuse de la p-valeur en inférence statistique' : 'Rigorous Interpretation of p-value in Hypothesis Testing',
      text: isFrench
        ? 'Une p-valeur < 0.05 permet de REJETER l’hypothèse nulle H0, mais ne prouve JAMAIS que H1 est vraie ni que l’effet est important en pratique (vérifiez la taille d’effet).'
        : 'A p-value < 0.05 allows rejecting H0 in favor of H1, but never proves H1 is true nor indicates practical effect size. Always report effect size alongside statistical significance.',
    },
    {
      title: isFrench ? 'Erreur de Type I (faux positif) vs Erreur de Type II (faux négatif)' : 'Type I Error (False Positive) vs. Type II Error (False Negative)',
      text: isFrench
        ? 'Type I (alpha) : rejeter H0 alors qu’elle est vraie. Type II (beta) : ne pas rejeter H0 alors qu’elle est fausse. La puissance statistique est 1 - beta.'
        : 'Type I error (alpha) is rejecting true H0 (false alarm). Type II error (beta) is failing to reject false H0 (missed discovery). Statistical power equals 1 - beta.',
    },
    {
      title: isFrench ? 'Le Théorème Central Limite s’applique à la moyenne, pas aux données brutes' : 'Central Limit Theorem Applies to Sample Mean, Not Raw Data',
      text: isFrench
        ? 'Le TCL stipule que la distribution des MOYENNES d’échantillons tend vers la normale pour n >= 30, même si la distribution de la population d’origine est fortement asymétrique ou multimodale.'
        : 'CLT guarantees that the sampling distribution of the sample MEAN approaches normality as sample size n grows (n >= 30), not that the underlying raw population distribution becomes normal.',
    },
    {
      title: isFrench ? 'R² vs R² ajusté dans la régression linéaire' : 'R-squared vs. Adjusted R-squared in Multiple Regression',
      text: isFrench
        ? 'Le coefficient R² augmente (ou reste constant) à chaque ajout d’une nouvelle variable, même non pertinente. Seul le R² ajusté pénalise l’ajout de prédicteurs inutiles.'
        : 'Standard R² monotonically increases (or stays constant) with every added predictor, even useless noise. Only Adjusted R² penalizes model complexity for irrelevant features.',
    },
    {
      title: isFrench ? 'Requêtes SQL paramétrées obligatoires contre l’injection SQL' : 'Mandatory Parameterized Queries in sqlite3 vs. String Formatting',
      text: isFrench
        ? 'N’utilisez JAMAIS f"SELECT * FROM t WHERE id = {val}". Utilisez toujours les marqueurs de paramètres sécurisés : cursor.execute("SELECT * FROM t WHERE id = ?", (val,)).'
        : 'Never format raw user inputs into SQL strings (f"SELECT * FROM t WHERE id = {val}"). Always use parameter placeholders: cursor.execute("SELECT * FROM t WHERE id = ?", (val,)).',
    },
    {
      title: isFrench ? 'Piège de la variable factice (Dummy Variable Trap)' : 'Dummy Variable Trap & Multicollinearity in One-Hot Encoding',
      text: isFrench
        ? 'Pour une colonne catégorielle à k niveaux, inclure les k indicatrices crée une multicolinéarité parfaite dans une régression. Spécifiez toujours drop_first=True dans pd.get_dummies.'
        : 'For a categorical feature with k distinct categories, including all k dummy columns causes perfect multicollinearity in linear models. Always specify drop_first=True in pd.get_dummies.',
    },
  ];

  const pcetSection1Chapters = [
    {
      id: '1.1',
      title: isFrench ? 'Fondamentaux des Tests & Principes Clés' : 'Testing Fundamentals & Key Principles',
      range: isFrench ? 'Cartes 1–20' : 'Cards 1–20',
      focus: isFrench
        ? 'Définitions du test, distinction erreur/défaut/défaillance, les 7 principes de test (les tests montrent la présence de défauts, test exhaustif impossible, etc.).'
        : 'Testing definitions, error vs defect vs failure vs anomaly, the 7 testing principles (testing shows presence of defects, exhaustive testing is impossible, etc.).',
    },
    {
      id: '1.2',
      title: isFrench ? 'Assurance Qualité (QA) vs Contrôle Qualité (QC)' : 'Quality Assurance (QA) vs Quality Control (QC)',
      range: isFrench ? 'Cartes 21–40' : 'Cards 21–40',
      focus: isFrench
        ? 'Différences QA/QC, vérification vs validation, coût de la qualité (prévention vs correction), et normes ISO/IEC/IEEE 29119.'
        : 'QA vs QC distinction, verification vs validation, cost of quality (prevention, appraisal, failure costs), and ISO/IEC/IEEE 29119 standards.',
    },
    {
      id: '1.3',
      title: isFrench ? 'Psychologie du Test & Éthique' : 'Psychology of Testing & Tester Mindset',
      range: isFrench ? 'Cartes 41–60' : 'Cards 41–60',
      focus: isFrench
        ? 'État d’esprit critique du testeur, indépendance des niveaux de test, communication constructive et code de déontologie/éthique.'
        : 'Tester critical mindset, levels of testing independence, constructive communication between dev and QA, and code of ethics.',
    },
    {
      id: '1.4',
      title: isFrench ? 'Cycle de Vie des Défauts & Rapports d’Anomalie' : 'Defect Lifecycle & Incident Management',
      range: isFrench ? 'Cartes 61–80' : 'Cards 61–80',
      focus: isFrench
        ? 'Champs essentiels d’un rapport d’anomalie, criticité (Severity) vs priorité (Priority), transitions d’état (New, Open, Fixed, Closed, Rejected).'
        : 'Defect report structure, severity vs priority, bug workflow lifecycle (New, Assigned, Open, Fixed, Verified, Closed, Reopened), and triage.',
    },
    {
      id: '1.5',
      title: isFrench ? 'Tests Basés sur les Risques & Métriques de Couverture' : 'Risk-Based Testing & Coverage Metrics',
      range: isFrench ? 'Cartes 81–100' : 'Cards 81–100',
      focus: isFrench
        ? 'Matrice probabilité x impact, hiérarchisation des tests par le risque, critères de début/fin (entry/exit criteria), et métriques de couverture.'
        : 'Risk analysis (probability x impact), prioritizing test effort, entry and exit criteria, and coverage metrics.',
    },
  ];

  const pcetSection2Chapters = [
    {
      id: '2.1',
      title: isFrench ? 'Niveaux de Test : Unitaire, Intégration, Système, UAT' : 'Testing Levels: Unit, Integration, System, Acceptance',
      range: isFrench ? 'Cartes 1–20' : 'Cards 1–20',
      focus: isFrench
        ? 'Objectifs, bases de test et cibles de chaque niveau : tests unitaires, intégration (top-down, bottom-up, big bang), système et UAT.'
        : 'Objectives, test basis and test targets for Unit, Integration (top-down, bottom-up, big bang), System, and Acceptance (UAT, Alpha/Beta) testing.',
    },
    {
      id: '2.2',
      title: isFrench ? 'Types de Test : Fonctionnels vs Non-Fonctionnels' : 'Testing Types: Functional vs Non-Functional',
      range: isFrench ? 'Cartes 21–40' : 'Cards 21–40',
      focus: isFrench
        ? 'Tests fonctionnels, non-fonctionnels (performance, charge, sécurité, ergonomie), tests structurels (boîte blanche) et tests de régression vs confirmation.'
        : 'Functional testing, non-functional testing (performance, load, security, usability), structural white-box testing, regression vs re-testing.',
    },
    {
      id: '2.3',
      title: isFrench ? 'Partitions d’Équivalence & Analyse des Valeurs Limites' : 'Equivalence Partitioning & Boundary Value Analysis',
      range: isFrench ? 'Cartes 41–60' : 'Cards 41–60',
      focus: isFrench
        ? 'Identification des classes valides/invalides, analyse des frontières à 2 points vs 3 points, minimisation des cas de test boîte noire.'
        : 'Valid vs invalid equivalence classes, 2-point vs 3-point Boundary Value Analysis (BVA), minimizing test cases for black-box coverage.',
    },
    {
      id: '2.4',
      title: isFrench ? 'Tables de Décision & Transitions d’États' : 'Decision Tables & State Transition Testing',
      range: isFrench ? 'Cartes 61–80' : 'Cards 61–80',
      focus: isFrench
        ? 'Combinaison de règles métier complexes, tables de vérité, diagrammes d’états-transitions, détection des transitions invalides.'
        : 'Complex business logic rule combinations, decision truth tables, state transition diagrams, testing invalid state transitions.',
    },
    {
      id: '2.5',
      title: isFrench ? 'Planification, Conception & Rapports de Test' : 'Test Planning, Execution & Reporting',
      range: isFrench ? 'Cartes 81–100' : 'Cards 81–100',
      focus: isFrench
        ? 'Stratégie de test, plan de test (IEEE 829), rédaction des cas de test (pré-conditions, étapes, résultat attendu), suites et bilans d’exécution.'
        : 'Test strategy vs test plan (IEEE 829), drafting test cases (preconditions, steps, expected results), test suites, execution summary reports.',
    },
  ];

  const pcetSection3Chapters = [
    {
      id: '3.1',
      title: isFrench ? 'Tests Statiques & Revues de Code' : 'Static Testing & Code Review Formalities',
      range: isFrench ? 'Cartes 1–20' : 'Cards 1–20',
      focus: isFrench
        ? 'Revue informelle, relecture technique (walkthrough), inspection formelle (Fagan), bénéfices de la détection précoce des anomalies.'
        : 'Informal review, walkthrough, technical review, formal inspection (Fagan), early bug detection benefits before code execution.',
    },
    {
      id: '3.2',
      title: isFrench ? 'Linters & Analyseurs Statiques Python' : 'Python Linters & Static Analysis Tools',
      range: isFrench ? 'Cartes 21–40' : 'Cards 21–40',
      focus: isFrench
        ? 'Vérification de conformité PEP 8, analyseurs statiques flake8, pylint, formatage automatique black, tri des imports isort.'
        : 'PEP 8 compliance verification, static analyzers flake8, pylint, auto-formatter black, import sorting with isort.',
    },
    {
      id: '3.3',
      title: isFrench ? 'Typage Statique & Mypy en Python' : 'Static Typing & Type Hints with Mypy',
      range: isFrench ? 'Cartes 41–60' : 'Cards 41–60',
      focus: isFrench
        ? 'Annotations de type PEP 484, module typing (Union, Optional, List, Dict, Callable, Any), exécution et configuration de mypy.'
        : 'PEP 484 type annotations, typing module (Union, Optional, List, Dict, Callable, Any), running and configuring mypy static type checker.',
    },
    {
      id: '3.4',
      title: isFrench ? 'Code Smells & Refactoring en Python' : 'Code Smells & Refactoring in Python',
      range: isFrench ? 'Cartes 61–80' : 'Cards 61–80',
      focus: isFrench
        ? 'Signaux d’alerte (longue méthode, duplication, couplage excessif), techniques de refactoring (extraire méthode, renommer, principe DRY).'
        : 'Common smells (long methods, duplicate code, high cyclomatic complexity), refactoring techniques (extract method, rename, DRY principle).',
    },
    {
      id: '3.5',
      title: isFrench ? 'Docstrings & Tests Intégrés avec doctest' : 'Docstrings & Documentation Testing with doctest',
      range: isFrench ? 'Cartes 81–100' : 'Cards 81–100',
      focus: isFrench
        ? 'Conventions PEP 257 pour docstrings, module standard doctest, syntaxe >>>, exécution avec doctest.testmod() et doctest -v.'
        : 'PEP 257 docstring conventions, standard library doctest module, >>> prompt syntax, running tests via doctest.testmod() and CLI flags.',
    },
  ];

  const pcetSection4Chapters = [
    {
      id: '4.1',
      title: isFrench ? 'Découverte de Tests & CLI pytest' : 'pytest Architecture & Test Discovery',
      range: isFrench ? 'Cartes 1–20' : 'Cards 1–20',
      focus: isFrench
        ? 'Conventions de nommage (test_*.py, TestClass, test_*), découverte automatique, options CLI (-v, -k, -m, -x, --tb=short).'
        : 'Naming conventions (test_*.py, TestClass, test_* methods), auto-discovery, CLI flags (-v, -k expression, -m marker, -x, --tb=short).',
    },
    {
      id: '4.2',
      title: isFrench ? 'Assertions, Exceptions & Paramétrisation' : 'Assertions, Exception Testing & Parametrization',
      range: isFrench ? 'Cartes 21–40' : 'Cards 21–40',
      focus: isFrench
        ? 'Assertion standard assert avec introspection, pytest.raises(ExpectedException), pytest.mark.parametrize pour tests pilotés par données.'
        : 'Plain assert statement with expression introspection, pytest.raises() context manager, pytest.mark.parametrize for data-driven tests.',
    },
    {
      id: '4.3',
      title: isFrench ? 'Fixtures pytest & Injection de Dépendances' : 'pytest Fixtures & Dependency Injection',
      range: isFrench ? 'Cartes 41–60' : 'Cards 41–60',
      focus: isFrench
        ? 'Décorateur @pytest.fixture, portées (function, class, module, session), autouse=True, nettoyage avec yield (setup/teardown).'
        : '@pytest.fixture decorator, scopes (function, class, module, session), autouse=True, teardown teardown patterns using yield statements.',
    },
    {
      id: '4.4',
      title: isFrench ? 'Doublures de Test : Mocks, Stubs & Monkeypatch' : 'Test Doubles: Mocking, Stubs & Monkeypatching',
      range: isFrench ? 'Cartes 61–80' : 'Cards 61–80',
      focus: isFrench
        ? 'Module unittest.mock (Mock, MagicMock), décorateur @patch, assertions assert_called_once_with(), et fixture monkeypatch de pytest.'
        : 'unittest.mock (Mock vs MagicMock), @patch context and decorator, assert_called_with assertions, pytest monkeypatch fixture for env/attrs.',
    },
    {
      id: '4.5',
      title: isFrench ? 'Couverture de Code (pytest-cov) & Intégration CI/CD' : 'Code Coverage (pytest-cov) & CI/CD Pipelines',
      range: isFrench ? 'Cartes 81–100' : 'Cards 81–100',
      focus: isFrench
        ? 'Mesure de couverture d’instructions et de branches avec pytest-cov, rapports HTML/XML, intégration dans GitHub Actions et seuils minimaux.'
        : 'Statement vs branch coverage with pytest-cov, generating HTML/XML reports, automated CI runs in GitHub Actions, and enforcing fail-under.',
    },
  ];

  const pcetHighYieldTraps = [
    {
      title: isFrench ? 'L’instruction assert est désactivée avec l’option -O de Python' : 'assert Statements Are Disabled in Optimized Mode (python -O)',
      text: isFrench
        ? 'N’utilisez JAMAIS assert pour la validation d’arguments en code de production. Avec le flag -O (optimisation), toutes les instructions assert sont ignorées par l’interpréteur ! Utilisez if not cond: raise ValueError(...).'
        : 'Never rely on assert for production validation or security checks. When Python runs with -O (optimized mode), all assert statements are completely stripped from bytecode. Use explicit if not cond: raise ValueError(...) instead.',
    },
    {
      title: isFrench ? 'Mock vs MagicMock : Prise en charge des méthodes dunders' : 'unittest.mock.Mock vs. MagicMock: Magic Method Protocols',
      text: isFrench
        ? 'Mock ne prend pas en charge les dunders (__iter__, __len__, __getitem__, __enter__). MagicMock implémente automatiquement toutes les méthodes magiques par défaut. Pour tester un context manager ou une collection, utilisez toujours MagicMock.'
        : 'Plain Mock does not implement dunder magic methods (__len__, __iter__, __enter__, __getitem__). MagicMock comes pre-configured with default implementations for all magic methods. Always use MagicMock when mocking context managers or iterables.',
    },
    {
      title: isFrench ? 'Portée des Fixtures pytest (module/session) : Fuite d’état' : 'pytest Fixture Scopes: Shared State Mutation Leaks',
      text: isFrench
        ? 'Une fixture avec scope="module" ou "session" n’est instanciée qu’une seule fois. Si un test mute cet objet partagé (ex: ajoute un élément dans une liste), les tests suivants reçoivent un état pollué. Privilégiez scope="function" ou clonez les données.'
        : 'A fixture with scope="module" or "session" is instantiated only once across all tests in that scope. Mutating its shared data in one test contaminates state for subsequent tests. Default to scope="function" unless resource teardown demands wider scope.',
    },
    {
      title: isFrench ? '100% de couverture de lignes != 100% de couverture de branches' : '100% Statement Coverage Does Not Equal 100% Branch Coverage',
      text: isFrench
        ? 'Une instruction if condition: sans clause else exécutée lorsque la condition est vraie offre 100% de couverture de lignes, mais seulement 50% de couverture de branches car le cas faux n’a jamais été testé. Utilisez pytest --cov --cov-branch.'
        : 'An if statement without an else branch achieves 100% statement coverage if executed when True, but only 50% branch coverage because the False evaluation path was never tested. Always run coverage with --cov-branch.',
    },
    {
      title: isFrench ? 'Vérification (Verification) vs Validation (Validation)' : 'Verification vs. Validation: "Right Product" vs "Product Right"',
      text: isFrench
        ? 'Vérification : "Construisons-nous le produit correctement ?" (conformité aux spécifications techniques). Validation : "Construisons-nous le bon produit ?" (répond aux besoins réels et attentes de l’utilisateur final).'
        : 'Verification asks: "Are we building the product right?" (conformance to technical specifications). Validation asks: "Are we building the right product?" (meeting real user needs and operational expectations).',
    },
    {
      title: isFrench ? 'Gravité (Severity) vs Priorité (Priority) d’une anomalie' : 'Defect Severity vs. Defect Priority: Distinct Dimensions',
      text: isFrench
        ? 'La gravité mesure l’impact technique sur le système (ex: crash complet du serveur = gravité Bloquante). La priorité mesure l’urgence commerciale de correction (ex: faute d’orthographe sur le logo principal = gravité Faible mais priorité Haute).'
        : 'Severity measures technical impact on the system (e.g. server crash = Critical). Priority measures business urgency for resolution (e.g. typo on company header logo = Low severity, but High priority). They are completely independent dimensions.',
    },
    {
      title: isFrench ? 'Piège de la syntaxe de tuple dans les assertions assert' : 'Tuple Trap in Python assert Statements',
      text: isFrench
        ? 'Écrire assert (x == 5, "Erreur") évalue un tuple à 2 éléments non vide, qui est TOUJOURS considéré comme truthy en Python, même si x != 5 ! La syntaxe correcte est sans parenthèses globales : assert x == 5, "Erreur".'
        : 'Writing assert (x == 5, "Error message") constructs a non-empty 2-element tuple, which always evaluates to True in Python boolean context regardless of x! Correct syntax is unparenthesized: assert x == 5, "Error message".',
    },
    {
      title: isFrench ? 'Valeurs limites à 2 points vs 3 points en BVA' : '2-Point vs. 3-Point Boundary Value Analysis (BVA)',
      text: isFrench
        ? 'Pour une frontière x >= 18, la BVA à 2 points teste la frontière (18) et son voisin invalide (17). La BVA à 3 points teste la frontière (18), son voisin immédiat supérieur (19) et son voisin immédiat inférieur (17).'
        : 'For boundary condition x >= 18, 2-point BVA tests boundary (18) and closest invalid value (17). 3-point BVA tests boundary (18), immediate interior neighbor (19), and immediate exterior neighbor (17).',
    },
  ];

  const pcppHighYieldTraps = [
    {
      title: isFrench ? 'type() à 3 arguments crée dynamiquement des classes' : '3-Argument type() Dynamically Creates Classes',
      text: isFrench
        ? 'type(name, bases, dict) crée une classe à l’exécution : type("MyClass", (object,), {"x": 10}). Les métaclasses personnalisées héritent de type.'
        : 'type(name, bases, dict) creates a class object at runtime: type("MyClass", (object,), {"x": 10}). Custom metaclasses inherit directly from type.',
    },
    {
      title: isFrench ? 'Classes abstraites : Impossible d’instancier avec @abstractmethod' : 'ABCs Cannot Be Instantiated with Unimplemented @abstractmethod',
      text: isFrench
        ? 'Instancier une classe dérivée sans avoir implémenté toutes les méthodes décorées par @abstractmethod lève immédiatement une TypeError.'
        : 'Attempting to instantiate a subclass without overriding every @abstractmethod from its ABC immediately raises a TypeError at instantiation.',
    },
    {
      title: isFrench ? 'Surcharge de l’opérateur d’égalité : __eq__ supprime __hash__' : 'Overriding __eq__ Automatically Sets __hash__ = None',
      text: isFrench
        ? 'Définir un __eq__ personnalisé sans définir __hash__ rend les instances non hachables (TypeError: unhashable type dans dicts et sets).'
        : 'Defining a custom __eq__ without explicitly providing __hash__ sets __hash__ to None, making instances unhashable in sets and dict keys.',
    },
    {
      title: isFrench ? 'Optimisation mémoire avec __slots__' : 'Memory Optimization with __slots__',
      text: isFrench
        ? 'Définir __slots__ = (\'x\', \'y\') supprime le dictionnaire d’instance __dict__ par défaut, économisant la mémoire mais empêchant l’ajout d’attributs arbitraires.'
        : 'Defining __slots__ = (\'x\', \'y\') suppresses the default instance __dict__, saving significant RAM but preventing arbitrary dynamic attribute additions.',
    },
    {
      title: isFrench ? 'Appel coopératif super() dans le graphe MRO' : 'super() Traverses the C3 MRO Order, Not Direct Parent',
      text: isFrench
        ? 'super().meth() n’appelle pas forcément le parent direct déclaré, mais le prochain élément dans la liste __mro__ de l’instance active (C3 Linearization).'
        : 'super().meth() does not necessarily invoke the immediate syntactic base class; it delegates to the next class in the object’s C3 __mro__.',
    },
    {
      title: isFrench ? 'Sérialisation pickle : __getstate__ & __setstate__' : 'pickle Customization via __getstate__ & __setstate__',
      text: isFrench
        ? 'pickle ne peut pas sérialiser les lambdas, sockets ou fichiers ouverts. Utilisez __getstate__ pour exclure les descripteurs non sérialisables.'
        : 'pickle cannot serialize lambdas, active network sockets, or open file streams. Use __getstate__ and __setstate__ to strip non-serializable descriptors.',
    },
    {
      title: isFrench ? 'Singleton via __new__ : __init__ est toujours réexécuté' : 'Singleton via __new__: __init__ is Re-executed on Every Call',
      text: isFrench
        ? 'Quand __new__ renvoie une instance existante de la classe, Python appelle quand même __init__(self, ...) à chaque instanciation. Prémunissez-vous avec un flag hasattr(self, "_initialized").'
        : 'When __new__ returns an instance of the class, Python always invokes __init__(self, ...) upon every constructor call. Guard initialization using hasattr(self, "_initialized").',
    },
    {
      title: isFrench ? 'Patron Borg vs Singleton classique' : 'Borg Idiom vs. Classic GoF Singleton',
      text: isFrench
        ? 'Le Borg d’Alex Martelli partage l’état plutôt que l’identité : self.__dict__ = self._shared_state. Deux instances ont des id() différents mais un état identique.'
        : 'Alex Martelli’s Borg pattern emphasizes shared state over shared identity: self.__dict__ = self._shared_state. Instances have different id()s but share mutable state.',
    },
    {
      title: isFrench ? 'PEP 8 : Comparaisons avec les singletons (None, True, False)' : 'PEP 8: Identity Comparisons for Singletons (None, bool)',
      text: isFrench
        ? 'Comparez toujours les singletons comme None avec "is" ou "is not", jamais avec les opérateurs d’égalité ("==" ou "!="), pour éviter les faux positifs de __eq__.'
        : 'Always compare singletons like None using "is" or "is not", never equality operators ("==" or "!="), guarding against customized __eq__ overrides.',
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

  const pcedHighYieldTraps = [
    {
      title: isFrench ? 'Échelle d’intervalle vs de rapport : le zéro absolu' : 'Interval vs. Ratio Scale: Absolute Zero Point',
      text: isFrench
        ? 'Les températures en °C et °F sont sur une échelle d’intervalle (0°C ne signifie pas absence d’énergie thermique). Seule l’échelle de rapport (ex. Kelvin, revenu, âge, distance) possède un zéro absolu permettant de calculer des ratios significatifs ("2x plus grand").'
        : 'Celsius and Fahrenheit are interval scales because 0° is an arbitrary reference point, not the total absence of heat. Only ratio scales (e.g., Kelvin, revenue, age, distance) feature a true absolute zero allowing valid multiplication and division ratios.',
    },
    {
      title: isFrench ? 'Analytique diagnostique vs prédictive' : 'Diagnostic vs. Predictive Analytics Scope',
      text: isFrench
        ? 'L’analytique diagnostique répond à "Pourquoi cela s’est-il produit ?" (recherche de causes, drill-down, corrélations). L’analytique prédictive répond à "Que va-t-il se passer ?" (modèles statistiques, séries temporelles, prévisions).'
        : 'Diagnostic analytics investigates "Why did it happen?" using root cause discovery, drilling down, and correlations. Predictive analytics forecasts "What will happen next?" using historical patterns, time series, and machine learning models.',
    },
    {
      title: isFrench ? 'Pseudonymisation vs Anonymisation sous le RGPD' : 'Pseudonymization vs. Anonymization Under GDPR',
      text: isFrench
        ? 'Les données pseudonymisées (remplacement d’identifiants par des tokens ou hachages) restent des données à caractère personnel (PII) soumises au RGPD si une clé de correspondance existe. Seule l’anonymisation irréversible exclut les données du champ d’application légal.'
        : 'Pseudonymized records (e.g., tokenized IDs) remain legally protected PII under GDPR because re-identification is possible via a separate mapping key. Only completely irreversible anonymization removes data from GDPR compliance obligations.',
    },
    {
      title: isFrench ? 'Data Warehouse vs Data Lake : Schema-on-Write vs Read' : 'Data Warehouse vs. Data Lake: Schema Philosophies',
      text: isFrench
        ? 'Un Data Warehouse applique le "Schema-on-Write" via ETL (données structurées et nettoyées avant chargement). Un Data Lake applique le "Schema-on-Read" via ELT (stockage de données brutes multi-formats, schéma appliqué lors de la requête).'
        : 'Data Warehouses enforce Schema-on-Write via structured ETL pipelines prior to database ingestion. Data Lakes enforce Schema-on-Read via ELT, ingesting multi-format raw data and defining schemas only when analytical queries execute.',
    },
    {
      title: isFrench ? 'Qualité des données DAMA : Exactitude vs Précision' : 'DAMA Quality Dimensions: Accuracy vs. Precision',
      text: isFrench
        ? 'L’exactitude (accuracy) mesure la conformité à la vérité terrain du monde réel. La précision mesure la granularité ou la reproductibilité de la mesure. Une valeur peut être très précise (12,4589 kg) mais inexacte si la balance est mal étalonnée.'
        : 'Accuracy reflects closeness of recorded observations to true real-world facts. Precision reflects degree of measurement granularity and repeatability. Measurements can be extraordinarily precise (12.4589 kg) yet inaccurate if the instrument suffers from systematic bias.',
    },
    {
      title: isFrench ? 'type() vs isinstance() avec les booléens en Python' : 'type() vs. isinstance() with Python Booleans',
      text: isFrench
        ? 'En Python, bool hérite de int ! Ainsi isinstance(True, int) renvoie True, tandis que type(True) == int renvoie False. Pour un contrôle strict de type, utilisez type() ; pour accepter le sous-typage, préférez isinstance().'
        : 'In Python, bool subclasses int! Thus isinstance(True, int) returns True, whereas type(True) == int evaluates to False. Use type() for exact type checks and isinstance() when allowing inheritance hierarchies.',
    },
    {
      title: isFrench ? 'Arrondi bancaire (Banker’s Rounding) avec round()' : 'Banker’s Rounding Rule in round()',
      text: isFrench
        ? 'round() en Python 3 applique l’arrondi au pair le plus proche (half-to-even) : round(2.5) donne 2, et round(3.5) donne 4 ! Cela élimine le biais statistique d’arrondi systématique vers le haut.'
        : 'Python 3 uses banker’s rounding (round half to even): round(2.5) produces 2, while round(3.5) produces 4! This minimizes cumulative rounding bias across large numeric data series.',
    },
    {
      title: isFrench ? 'csv.DictReader : En-têtes comme clés de dictionnaires' : 'csv.DictReader vs. csv.reader in Tabular Parsing',
      text: isFrench
        ? 'csv.DictReader utilise la première ligne non vide comme clés et renvoie des dictionnaires ordonnés. Attention : toutes les valeurs parsées sont des chaînes de caractères (str) et doivent être converties explicitement en int ou float.'
        : 'csv.DictReader maps each row into an OrderedDict using the first line as column keys. Crucially, all values are parsed as raw strings (str) and require explicit numeric casting (int/float) before calculation.',
    },
    {
      title: isFrench ? 'Barrières d’outliers de Tukey : 1.5 * IQR' : 'Tukey’s Outlier Fences: 1.5 * IQR Rule',
      text: isFrench
        ? 'Les barrières d’outliers se calculent avec [Q1 - 1.5*IQR, Q3 + 1.5*IQR]. Toute valeur au-delà est un outlier statistique (tracé par les moustaches d’une boîte à moustaches / boxplot). L’IQR résiste parfaitement aux valeurs extrêmes.'
        : 'Tukey’s outlier thresholds are [Q1 - 1.5*IQR, Q3 + 1.5*IQR]. Any observation outside this interval is flagged as a statistical outlier (represented as individual dots beyond boxplot whiskers). IQR is robust against tail skew.',
    },
    {
      title: isFrench ? 'Slicing de base NumPy : Vues vs Copies mémoire' : 'NumPy Basic Slicing: Memory Views vs. Copies',
      text: isFrench
        ? 'Contrairement aux listes Python pures, le découpage arr[1:3] dans NumPy renvoie une VUE (view) partageant le même buffer mémoire C. Modifier un élément de la sous-tranche mute directement le tableau d’origine ! Utilisez arr[1:3].copy() pour dupliquer.'
        : 'Unlike Python lists, basic slicing in NumPy (arr[1:3]) returns a memory VIEW sharing the underlying C data buffer. Modifying the slice mutates the parent array! Use arr[1:3].copy() if independent mutation is required.',
    },
    {
      title: isFrench ? 'Corrélation de Pearson vs Causalité & Paradoxe de Simpson' : 'Pearson Correlation vs. Causation & Simpson’s Paradox',
      text: isFrench
        ? 'Un coefficient r élevé (ex: r = +0.85) mesure une association linéaire sans prouver de lien de cause à effet (variables cachées / confondantes). Le paradoxe de Simpson montre qu’une tendance apparente peut s’inverser dès que l’on désagrège par sous-groupes.'
        : 'High Pearson correlation (|r| > 0.8) indicates strong linear association, never direct causality. Shared confounding variables create spurious correlations, and Simpson’s Paradox can completely reverse trends when data is disaggregated into subgroups.',
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
    if (currentTrack === 'pcpp') {
      if (!isFrench) return fallback;
      switch (secNumber) {
        case 1:
          return 'Programmation Orientée Objet Avancée';
        case 2:
          return 'Bonnes Pratiques de Codage & Patrons de Conception';
        case 3:
          return 'Programmation d’Interfaces Graphiques (GUI)';
        case 4:
          return 'Programmation Réseau dans Python';
        case 5:
          return 'Traitement de Fichiers Divers & Outils Système';
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pced') {
      if (!isFrench) return fallback;
      switch (secNumber) {
        case 1:
          return 'Introduction aux données et concepts d’analyse de données';
        case 2:
          return 'Rôle de Python dans l’analyse de données';
        case 3:
          return 'Collecte, nettoyage et manipulation de données';
        case 4:
          return 'Visualisation de données, communication et narration';
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pcad') {
      if (!isFrench) return fallback;
      switch (secNumber) {
        case 1:
          return 'Acquisition, nettoyage et manipulation des données';
        case 2:
          return 'Bases de données relationnelles & SQL analytique';
        case 3:
          return 'Statistiques fondamentales, inférence & analyse de données';
        case 4:
          return 'Modélisation & Évaluation de Données';
        case 5:
          return 'Visualisation & Narration des Données';
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pcet') {
      if (!isFrench) return fallback;
      switch (secNumber) {
        case 1:
          return 'Fondamentaux des Tests & Assurance Qualité';
        case 2:
          return 'Types, Niveaux et Processus de Test';
        case 3:
          return 'Analyse Statique & Refactoring';
        case 4:
          return 'Automatisation de Tests (pytest & CI/CD)';
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pcat') {
      if (!isFrench) return fallback;
      switch (secNumber) {
        case 1:
          return 'Essentiels des Tests Logiciels';
        case 2:
          return 'Automatisation des Tests & Refactoring';
        case 3:
          return 'Assertions, Contextes, Décorateurs & Méthodes';
        case 4:
          return 'Fondations des Tests Unitaires';
        case 5:
          return 'Techniques Avancées de Tests Unitaires';
        case 6:
          return 'Développement TDD et BDD';
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pces') {
      if (!isFrench) return fallback;
      switch (secNumber) {
        case 1:
          return 'Essentiels de la Sécurité Informatique';
        case 2:
          return 'Sécurité des Systèmes et Réseaux IT';
        case 3:
          return 'Python pour les Opérations de Sécurité (SecOps)';
        case 4:
          return 'Développement Sécurisé et Bonnes Pratiques en Python';
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pcea') {
      if (!isFrench) return fallback;
      switch (secNumber) {
        case 1:
          return 'Fondamentaux de l\'Automatisation et Opérations CLI';
        case 2:
          return 'Automatisation du Système de Fichiers et des Données';
        case 3:
          return 'Automatisation Web, Réseau et API REST';
        case 4:
          return 'Planification, Supervision, Alertes et Résilience';
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pcei') {
      if (!isFrench) return fallback;
      switch (secNumber) {
        case 1:
          return 'Fondamentaux de l\'Intelligence Artificielle';
        case 2:
          return 'Fondamentaux de l\'Apprentissage Automatique';
        case 3:
          return 'Traitement des Données, Analyse et Visualisation';
        case 4:
          return 'Réseaux de Neurones, Deep Learning et IA Générative';
        case 5:
          return 'IA Responsable, Éthique et Esprit Critique';
        case 6:
          return 'Projets d\'IA, Collaboration et Communication';
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
    if (currentTrack === 'pcpp') {
      if (!isFrench) return fallback;
      switch (secNumber) {
        case 1:
          return 'Classes avancées, dunders, métaclasses, classes abstraites (ABC), linéarisation MRO C3, copie profonde et sérialisation binaire.';
        case 2:
          return 'Conformité PEP 8, aphorismes PEP 20, docstrings PEP 257, patrons créationnels, structurels et comportementaux du GoF.';
        case 3:
          return 'Développement d’interfaces Tkinter, widgets, gestionnaires de géométrie (pack, grid, place) et gestion des événements.';
        case 4:
          return 'Architecture client-serveur, sockets TCP/UDP, requêtes HTTP REST, parsage JSON et transferts réseau.';
        case 5:
          return 'Base de données relationnelle sqlite3, traitement XML/XPath, journalisation logging et fichiers de configuration.';
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pced') {
      if (!isFrench) return fallback;
      switch (secNumber) {
        case 1:
          return 'Définition des données, échelles de mesure, sources et stockage, cycle de vie DAMA, les 4 branches de l’analytique et éthique des données.';
        case 2:
          return 'Environnement Python pour l’analyse de données, bibliothèques fondamentales (NumPy, pandas) et syntaxe analytique.';
        case 3:
          return 'Ingestion, traitement des valeurs manquantes, détection des anomalies, normalisation et transformations tabulaires.';
        case 4:
          return 'Principes de visualisation, choix des graphiques (Matplotlib, Seaborn), narration par les données et restitution aux décideurs.';
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pcad') {
      if (!isFrench) return fallback;
      switch (secNumber) {
        case 1:
          return 'Ingestion multi-formats (CSV, JSON, Parquet), nettoyage des valeurs manquantes, déduplication, requêtes vectorisées, jointures, pivotement et encodage.';
        case 2:
          return 'Structures Python avancées, outils fonctionnels, SQL analytique (CTEs, fenêtrage), connectivité sqlite3 sécurisée et intégration Pandas-SQL.';
        case 3:
          return 'Statistiques descriptives, distributions théoriques, Théorème Central Limite, tests d’hypothèses (t-test, ANOVA, Mann-Whitney) et régression OLS.';
        case 4:
          return 'Modélisation supervisée (régression, classification) et non supervisée (K-Means, PCA), métriques d’évaluation et validation croisée.';
        case 5:
          return 'Visualisation statistique (Matplotlib, Seaborn, Plotly), storytelling de données, conception éthique et dashboards exécutifs.';
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pcet') {
      if (!isFrench) return fallback;
      switch (secNumber) {
        case 1:
          return 'Définitions fondamentales du test, 7 principes clés, assurance et contrôle qualité, cycle de vie des anomalies et tests basés sur les risques.';
        case 2:
          return 'Niveaux de test (unitaire, intégration, système, UAT), tests fonctionnels/non-fonctionnels, partitions d’équivalence et analyse aux limites.';
        case 3:
          return 'Revues et inspections de code, linters Python (flake8, pylint, black), typage statique avec mypy, détection de code smells et doctest.';
        case 4:
          return 'Framework pytest, découverte automatique, assertions enrichies, fixtures et injection de dépendances, mocking (unittest.mock) et couverture.';
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pcat') {
      if (!isFrench) return fallback;
      switch (secNumber) {
        case 1:
          return 'Concepts clés de la qualité logicielle, vérification vs validation, cycle de vie et gestion des anomalies, niveaux de test et pyramide des tests.';
        case 2:
          return 'Objectifs et ROI de l\'automatisation, boucle de refactoring Red-Green-Refactor, dette technique, patron AAA (Arrange, Act, Assert) et principes DRY/DAMP et KISS.';
        case 3:
          return 'Assertions Python, gestionnaires de contexte et instruction with (contextlib, ExitStack), décorateurs de fonction et de classe (@wraps), et méthodes OOP (@classmethod, @staticmethod, @property).';
        case 4:
          return 'Principes F.I.R.S.T., architecture xUnit (TestCase, TestSuite, TestRunner, TestLoader, TestResult), exécution CLI (-v, -f, -c, -b), arborescence projet et assertions spécialisées.';
        case 5:
          return 'Fixtures et cycle de vie (setUp, tearDown, addCleanup), tests paramétrés (self.subTest), exécution conditionnelle (@skip, @expectedFailure), doublures et mocks (unittest.mock, autospec), et assertions d\'exceptions/avertissements.';
        case 6:
          return 'Développement piloté par les tests (TDD, triangulation), BDD (Dan North, langage ubiquitaire, 3 Amigos), syntaxe Gherkin (Feature, Scenario, Given-When-Then, Scenario Outline), outils Python (behave, pytest-bdd) et documentation vivante.';
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pces') {
      if (!isFrench) return fallback;
      switch (secNumber) {
        case 1:
          return 'Triade CIA, Authentification vs Autorisation, gestion des vulnérabilités (CVE/CVSS), vecteurs d\'attaque (DDoS, Ransomware, Phishing), et conformité légale (GDPR, CFAA).';
        case 2:
          return 'Principes Zero Trust, durcissement OS (benchmarks CIS, pare-feu, permissions), protocoles réseau (TCP/UDP, TLS, VPN, NAT), contrôle d\'accès (RBAC, ABAC, MFA), et sécurité cloud.';
        case 3:
          return 'Scanners de ports avec socket, supervision des processus avec psutil, vérification de l\'intégrité des fichiers avec hashlib (SHA-256), automatisation subprocess et reporting structuré.';
        case 4:
          return 'SDLC sécurisé, analyse statique (bandit, pip-audit), prévention des injections (SQLi, commandes, path traversal), désérialisation sécurisée, anonymisation des données et chiffrement Fernet/bcrypt.';
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pcea') {
      if (!isFrench) return fallback;
      switch (secNumber) {
        case 1:
          return 'Principes d\'automatisation, calcul du ROI, idempotence, CLI avec sys.argv et argparse, variables d\'environnement, exécution de processus avec subprocess, et architecture modulaire.';
        case 2:
          return 'Manipulation moderne des chemins avec pathlib, opérations de fichiers et dossiers avec os et shutil, traitement CSV et JSON, et filtrage par regex avec re.';
        case 3:
          return 'Client HTTP avec requests (méthodes, codes d\'état, en-têtes, jetons Bearer, auth Basic), scraping HTML avec BeautifulSoup, gestion des sessions, limitation de débit, et téléchargement sécurisé de fichiers.';
        case 4:
          return 'Calculs de dates et durées avec datetime, planification de tâches avec schedule et cron, journalisation d\'audit avec logging, gestion robuste des exceptions et logique de rejeu, et alertes email via smtplib.';
        default:
          return fallback;
      }
    }
    if (currentTrack === 'pcei') {
      if (!isFrench) return fallback;
      switch (secNumber) {
        case 1:
          return 'Taxonomie de l\'IA et du ML, agents intelligents, représentations de connaissances, logique, recherche d\'états, et test de Turing.';
        case 2:
          return 'Paradigmes d\'apprentissage (supervisé, non supervisé, renforcement), régression, classification, clustering k-means, et validation croisée.';
        case 3:
          return 'Ingestion tabulaire pandas, nettoyage des données manquantes, encodage One-Hot/Label, mise à l\'échelle StandardScaler, et visualisation matplotlib/seaborn.';
        case 4:
          return 'Perceptrons, fonctions d\'activation, rétropropagation, rétroaction, CNNs et vision par ordinateur, NLP, tokenisation, et modèles de langage génératifs (LLMs).';
        case 5:
          return 'Biais algorithmique, discrimination indirecte, confidentialité des données, RGPD, explicabilité SHAP/LIME, robustesse, et gouvernance de l\'IA.';
        case 6:
          return 'Cadrage de projets IA vs programmation déterministe, économie des ressources et GPU, cycle de vie MVP, collaboration Git/DVC, et communication des résultats.';
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
                : currentTrack === 'pcpp'
                ? 'bg-purple-500/15 border-purple-500/30 text-purple-400'
                : currentTrack === 'pced'
                ? 'bg-amber-500/15 border-amber-500/30 text-amber-400'
                : currentTrack === 'pcad'
                ? 'bg-blue-500/15 border-blue-500/30 text-blue-400'
                : currentTrack === 'pcet'
                ? 'bg-rose-500/15 border-rose-500/30 text-rose-400'
                : currentTrack === 'pcat'
                ? 'bg-teal-500/15 border-teal-500/30 text-teal-400'
                : currentTrack === 'pces'
                ? 'bg-amber-500/15 border-amber-500/30 text-amber-400'
                : currentTrack === 'pcea'
                ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                : currentTrack === 'pcei'
                ? 'bg-violet-500/15 border-violet-500/30 text-violet-400'
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
                    : currentTrack === 'pcpp'
                    ? 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                    : currentTrack === 'pced'
                    ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                    : currentTrack === 'pcad'
                    ? 'bg-blue-500/15 text-blue-300 border-blue-500/30'
                    : currentTrack === 'pcet'
                    ? 'bg-rose-500/15 text-rose-300 border-rose-500/30'
                    : currentTrack === 'pcat'
                    ? 'bg-teal-500/15 text-teal-300 border-teal-500/30'
                    : currentTrack === 'pces'
                    ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                    : currentTrack === 'pcea'
                    ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                    : currentTrack === 'pcei'
                    ? 'bg-violet-500/15 text-violet-300 border-violet-500/30'
                    : 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                }`}
              >
                {currentTrack === 'pcep'
                  ? 'PCEP-30-0x • Entry-Level'
                  : currentTrack === 'pcpp'
                  ? 'PCPP-32-10x • Professional'
                  : currentTrack === 'pced'
                  ? 'PCED-30-02 • Data Analyst'
                  : currentTrack === 'pcad'
                  ? 'PCAD-31-02 • Associate Analyst'
                  : currentTrack === 'pcet'
                  ? 'PCET-30-01 • Entry-Level Tester'
                  : currentTrack === 'pcat'
                  ? 'PCAT-31-0x • Associate Tester'
                  : currentTrack === 'pces'
                  ? 'PCES-30-01 • Security Specialist'
                  : currentTrack === 'pcea'
                  ? 'PCEA-30-01 • Automation Specialist'
                  : currentTrack === 'pcei'
                  ? 'PCEI-30-01 • AI Specialist'
                  : 'PCAP-31-03 • Associate'}
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
                : currentTrack === 'pcpp'
                ? isFrench
                  ? 'Programme officiel PCPP-32-10x (5 Domaines, 45 questions, 65 min, 70% pour réussir)'
                  : 'Python Institute PCPP-32-10x Syllabus (5 Domains, 45 questions, 65 min, 70% pass)'
                : currentTrack === 'pced'
                ? isFrench
                  ? 'Programme officiel PCED-30-02 (4 Domaines, 45 questions, 45 min, 70% pour réussir)'
                  : 'Python Institute PCED-30-02 Syllabus (4 Blocks, 45 questions, 45 min, 70% pass)'
                : currentTrack === 'pcad'
                ? isFrench
                  ? 'Programme officiel PCAD-31-02 (3 Domaines, 45 questions, 65 min, 70% pour réussir)'
                  : 'Python Institute PCAD-31-02 Syllabus (3 Blocks, 45 questions, 65 min, 70% pass)'
                : currentTrack === 'pcet'
                ? isFrench
                  ? 'Programme officiel PCET-30-01 (4 Domaines, 30 questions, 40 min, 70% pour réussir)'
                  : 'Python Institute PCET-30-01 Syllabus (4 Blocks, 30 questions, 40 min, 70% pass)'
                : currentTrack === 'pcat'
                ? isFrench
                  ? 'Programme officiel PCAT-31-0x (6 Blocs, 40 questions, 65 min, 70% pour réussir)'
                  : 'Python Institute PCAT-31-0x Syllabus (6 Blocks, 40 questions, 65 min, 70% pass)'
                : currentTrack === 'pces'
                ? isFrench
                  ? 'Programme officiel PCES-30-01 (4 Blocs, 40 questions, 45 min, 70% pour réussir)'
                  : 'Python Institute PCES-30-01 Syllabus (4 Blocks, 40 questions, 45 min, 70% pass)'
                : currentTrack === 'pcea'
                ? isFrench
                  ? 'Programme officiel PCEA-30-01 (4 Blocs, 46 questions, 60 min, 75% pour réussir)'
                  : 'Python Institute PCEA-30-01 Syllabus (4 Blocks, 46 questions, 60 min, 75% pass)'
                : currentTrack === 'pcei'
                ? isFrench
                  ? 'Programme officiel PCEI-30-01 (6 Blocs, 36 questions, 60 min, 75% pour réussir)'
                  : 'Python Institute PCEI-30-01 Syllabus (6 Blocks, 36 questions, 60 min, 75% pass)'
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
            <button
              onClick={() => onSelectTrack('pcpp')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentTrack === 'pcpp'
                  ? 'bg-purple-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              PCPP-32-10x
            </button>
            <button
              onClick={() => onSelectTrack('pced')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentTrack === 'pced'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              PCED-30-02
            </button>
            <button
              onClick={() => onSelectTrack('pcad')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentTrack === 'pcad'
                  ? 'bg-blue-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              PCAD-31-02
            </button>
            <button
              onClick={() => onSelectTrack('pcet')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentTrack === 'pcet'
                  ? 'bg-rose-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              PCET-30-01
            </button>
            <button
              onClick={() => onSelectTrack('pcat')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentTrack === 'pcat'
                  ? 'bg-teal-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              PCAT-31-0x
            </button>
            <button
              onClick={() => onSelectTrack('pces')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentTrack === 'pces'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              PCES-30-01
            </button>
            <button
              onClick={() => onSelectTrack('pcea')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentTrack === 'pcea'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              PCEA-30-01
            </button>
            <button
              onClick={() => onSelectTrack('pcei')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentTrack === 'pcei'
                  ? 'bg-violet-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              PCEI-30-01
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
                {currentTrack === 'pcep'
                  ? t.dashboard.pcepAlignmentBadge
                  : currentTrack === 'pcpp'
                  ? isFrench
                    ? 'Aligné sur le programme officiel Python Institute PCPP-32-10x'
                    : 'Aligned with Python Institute PCPP-32-10x Official Syllabus'
                  : currentTrack === 'pced'
                  ? isFrench
                    ? 'Aligné sur le programme officiel Python Institute PCED-30-02'
                    : 'Aligned with Python Institute PCED-30-02 Official Syllabus'
                  : currentTrack === 'pcad'
                  ? isFrench
                    ? 'Aligné sur le programme officiel Python Institute PCAD-31-02'
                    : 'Aligned with Python Institute PCAD-31-02 Official Syllabus'
                  : currentTrack === 'pcet'
                  ? isFrench
                    ? 'Aligné sur le programme officiel Python Institute PCET-30-01'
                    : 'Aligned with Python Institute PCET-30-01 Official Syllabus'
                  : currentTrack === 'pcat'
                  ? isFrench
                    ? 'Aligné sur le programme officiel Python Institute PCAT-31-0x'
                    : 'Aligned with Python Institute PCAT-31-0x Official Syllabus'
                  : t.dashboard.alignmentBadge}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              {currentTrack === 'pcep'
                ? t.dashboard.pcepHeroTitle
                : currentTrack === 'pcpp'
                ? isFrench
                  ? 'Examen PCPP-32-10x : Pratique & Maîtrise Avancée'
                  : 'PCPP-32-10x Exam: Professional Python Mastery'
                : currentTrack === 'pced'
                ? isFrench
                  ? 'Examen PCED-30-02 : Analyse de Données avec Python'
                  : 'PCED-30-02 Exam: Entry-Level Python Data Analysis'
                : currentTrack === 'pcad'
                ? isFrench
                  ? 'Examen PCAD-31-02 : Certified Associate Data Analyst'
                  : 'PCAD-31-02 Exam: Associate Python Data Analyst'
                : currentTrack === 'pcet'
                ? isFrench
                  ? 'Examen PCET-30-01 : Certified Entry-Level Tester with Python'
                  : 'PCET-30-01 Exam: Certified Entry-Level Tester with Python'
                : currentTrack === 'pcat'
                ? isFrench
                  ? 'Examen PCAT-31-0x : Certified Associate Tester with Python'
                  : 'PCAT-31-0x Exam: Certified Associate Tester with Python'
                : t.dashboard.heroTitle}
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {currentTrack === 'pcep' ? (
                t.dashboard.pcepHeroDesc
              ) : currentTrack === 'pcpp' ? (
                isFrench ? (
                  <>
                    Maîtrisez l’examen Certified Professional in Python Programming 1 avec répétition espacée (SRS),
                    avec 100 cartes approfondies pour la{' '}
                    <strong className="text-purple-400 font-semibold">Section 1 (POO Avancée, Métaclasses & MRO)</strong>{' '}
                    et une couverture complète des 5 domaines professionnels (Design Patterns, Tkinter, Réseau & Sockets, sqlite3/XML/Logging).
                  </>
                ) : (
                  <>
                    Master the Certified Professional in Python Programming 1 exam with spaced repetition (SRS),
                    featuring 100-card deep dives for{' '}
                    <strong className="text-purple-400 font-semibold">Section 1 (Advanced OOP, Metaclasses & MRO)</strong>{' '}
                    and full coverage of all 5 professional domains (Design Patterns, Tkinter, Network & Sockets, sqlite3/XML/Logging).
                  </>
                )
              ) : currentTrack === 'pced' ? (
                isFrench ? (
                  <>
                    Maîtrisez l’examen Certified Entry-Level Data Analyst with Python grâce à la répétition espacée (SRS),
                    avec 100 cartes d’entraînement approfondies pour la{' '}
                    <strong className="text-amber-400 font-semibold">Section 1 (Introduction aux données & concepts d’analyse)</strong>{' '}
                    couvrant échelles de mesure, sources/stockage (RDBMS/NoSQL/Lakes), cycle de vie DAMA, les 4 branches analytiques, CRISP-DM et l’éthique RGPD.
                  </>
                ) : (
                  <>
                    Master the Certified Entry-Level Data Analyst with Python exam with spaced repetition (SRS),
                    featuring 100 deep-dive cards for{' '}
                    <strong className="text-amber-400 font-semibold">Section 1 (Introduction to Data and Data Analysis Concepts)</strong>{' '}
                    covering measurement scales, storage architectures (RDBMS/NoSQL/warehouses/lakes), DAMA lifecycle, 4 analytics branches, CRISP-DM, and GDPR/CCPA ethics.
                  </>
                )
              ) : currentTrack === 'pcad' ? (
                isFrench ? (
                  <>
                    Maîtrisez l’examen Certified Associate Data Analyst with Python (PCAD-31-02) avec répétition espacée (SRS),
                    avec 100 cartes d’entraînement par domaine (500 cartes au total) :{' '}
                    <strong className="text-blue-400 font-semibold">Section 1 (Acquisition & Nettoyage Pandas)</strong>,{' '}
                    <strong className="text-emerald-400 font-semibold">Section 2 (Bases de données SQL & Connexions)</strong>,{' '}
                    <strong className="text-cyan-400 font-semibold">Section 3 (Statistiques & Inférence)</strong>,{' '}
                    <strong className="text-violet-400 font-semibold">Section 4 (Analyse de Données & Modélisation ML)</strong>, et{' '}
                    <strong className="text-teal-400 font-semibold">Section 5 (Communication & Visualisation)</strong>.
                  </>
                ) : (
                  <>
                    Master the Certified Associate Data Analyst with Python (PCAD-31-02) exam with spaced repetition (SRS),
                    featuring 100 deep-dive cards per curriculum domain (500 cards total):{' '}
                    <strong className="text-blue-400 font-semibold">Section 1 (Pandas Data Ingestion & Wrangling)</strong>,{' '}
                    <strong className="text-emerald-400 font-semibold">Section 2 (Relational Databases & Analytical SQL)</strong>,{' '}
                    <strong className="text-cyan-400 font-semibold">Section 3 (Foundational & Inferential Statistics)</strong>,{' '}
                    <strong className="text-violet-400 font-semibold">Section 4 (Data Analysis & ML Modeling)</strong>, and{' '}
                    <strong className="text-teal-400 font-semibold">Section 5 (Data Communication & Visualization)</strong>.
                  </>
                )
              ) : currentTrack === 'pcet' ? (
                isFrench ? (
                  <>
                    Maîtrisez l’examen Certified Entry-Level Tester with Python (PCET-30-01) avec répétition espacée (SRS),
                    avec 100 cartes approfondies par domaine du programme officiel (400 cartes au total) :{' '}
                    <strong className="text-rose-400 font-semibold">Section 1 (Fondamentaux des Tests & QA)</strong>,{' '}
                    <strong className="text-emerald-400 font-semibold">Section 2 (Types, Niveaux & Processus de Test)</strong>,{' '}
                    <strong className="text-amber-400 font-semibold">Section 3 (Analyse Statique & Refactoring)</strong>, et{' '}
                    <strong className="text-cyan-400 font-semibold">Section 4 (Automatisation pytest & CI/CD)</strong>.
                  </>
                ) : (
                  <>
                    Master the Certified Entry-Level Tester with Python (PCET-30-01) exam with spaced repetition (SRS),
                    featuring 100 deep-dive cards across all curriculum domains (400 cards total):{' '}
                    <strong className="text-rose-400 font-semibold">Section 1 (Testing Fundamentals & QA)</strong>,{' '}
                    <strong className="text-emerald-400 font-semibold">Section 2 (Testing Types, Levels & Lifecycle)</strong>,{' '}
                    <strong className="text-amber-400 font-semibold">Section 3 (Static Analysis & Refactoring)</strong>, and{' '}
                    <strong className="text-cyan-400 font-semibold">Section 4 (pytest Automation & CI/CD Pipelines)</strong>.
                  </>
                )
              ) : currentTrack === 'pcat' ? (
                isFrench ? (
                  <>
                    Maîtrisez l’examen Certified Associate Tester with Python (PCAT-31-0x) avec répétition espacée (SRS),
                    avec 100 cartes d’entraînement approfondies pour chacun des 6 blocs officiels (600 cartes au total) :{' '}
                    <strong className="text-teal-400 font-semibold">Bloc 1 (Essentiels des Tests)</strong>,{' '}
                    <strong className="text-emerald-400 font-semibold">Bloc 2 (Automatisation & Refactoring)</strong>,{' '}
                    <strong className="text-cyan-400 font-semibold">Bloc 3 (Assertions, Contextes & Décorateurs)</strong>,{' '}
                    <strong className="text-blue-400 font-semibold">Bloc 4 (Fondations Tests Unitaires xUnit)</strong>,{' '}
                    <strong className="text-indigo-400 font-semibold">Bloc 5 (Techniques Avancées & Mocks)</strong>, et{' '}
                    <strong className="text-amber-400 font-semibold">Bloc 6 (TDD & BDD Gherkin / Behave)</strong>.
                  </>
                ) : (
                  <>
                    Master the Certified Associate Tester with Python (PCAT-31-0x) exam with spaced repetition (SRS),
                    featuring 100 deep-dive cards for each of the 6 official syllabus blocks (600 cards total):{' '}
                    <strong className="text-teal-400 font-semibold">Block 1 (Software Testing Essentials)</strong>,{' '}
                    <strong className="text-emerald-400 font-semibold">Block 2 (Automation & Refactoring)</strong>,{' '}
                    <strong className="text-cyan-400 font-semibold">Block 3 (Assertions, Contexts & Decorators)</strong>,{' '}
                    <strong className="text-blue-400 font-semibold">Block 4 (Unit Testing Foundations)</strong>,{' '}
                    <strong className="text-indigo-400 font-semibold">Block 5 (Advanced Unit Testing & Mocks)</strong>, and{' '}
                    <strong className="text-amber-400 font-semibold">Block 6 (TDD & BDD Gherkin / Behave)</strong>.
                  </>
                )
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
              ) : currentTrack === 'pcpp' ? (
                <>
                  <button
                    onClick={() => onNavigate('flashcards', 'Section 1')}
                    className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all shadow-md shadow-purple-600/20 flex items-center space-x-1.5"
                  >
                    <Box className="w-4 h-4" />
                    <span>{isFrench ? 'Sec 1 : POO Avancée (100 Cartes)' : 'Sec 1: Advanced OOP (100 Cards)'}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('flashcards', 'Section 2')}
                    className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-md shadow-indigo-600/20 flex items-center space-x-1.5"
                  >
                    <Layers className="w-4 h-4" />
                    <span>{isFrench ? 'Sec 2 : Patrons & PEP (100 Cartes)' : 'Sec 2: Patterns & PEP (100 Cards)'}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('flashcards', 'Section 3')}
                    className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-all flex items-center space-x-1.5"
                  >
                    <Sliders className="w-4 h-4" />
                    <span>{isFrench ? 'Sec 3 : Tkinter GUI' : 'Sec 3: Tkinter GUI'}</span>
                  </button>
                </>
              ) : currentTrack === 'pced' ? (
                <>
                  <button
                    onClick={() => onNavigate('flashcards', 'Section 1')}
                    className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-amber-500/20 flex items-center space-x-1.5"
                  >
                    <Package className="w-4 h-4" />
                    <span>{isFrench ? 'Sec 1 : Concepts Données (100 Cartes)' : 'Sec 1: Data Concepts (100 Cards)'}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('flashcards', 'Section 2')}
                    className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md shadow-emerald-600/20 flex items-center space-x-1.5"
                  >
                    <Layers className="w-4 h-4" />
                    <span>{isFrench ? 'Sec 2 : Bases Python (100 Cartes)' : 'Sec 2: Python Basics (100 Cards)'}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('flashcards', 'Section 3')}
                    className="px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-all shadow-md shadow-cyan-600/20 flex items-center space-x-1.5"
                  >
                    <Zap className="w-4 h-4" />
                    <span>{isFrench ? 'Sec 3 : Analyse & Données (100 Cartes)' : 'Sec 3: Data & Analysis (100 Cards)'}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('flashcards', 'Section 4')}
                    className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-all flex items-center space-x-1.5"
                  >
                    <Box className="w-4 h-4" />
                    <span>{isFrench ? 'Sec 4 : Visualisation & Insights' : 'Sec 4: Insights & Reporting'}</span>
                  </button>
                </>
              ) : currentTrack === 'pcad' ? (
                <>
                  <button
                    onClick={() => onNavigate('flashcards', 'Section 1')}
                    className="px-3.5 py-2 rounded-xl bg-blue-500 hover:bg-blue-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-blue-500/20 flex items-center space-x-1.5"
                  >
                    <Package className="w-4 h-4" />
                    <span>{isFrench ? 'Sec 1 : Pandas & Wrangling (100 Cartes)' : 'Sec 1: Pandas & Wrangling (100 Cards)'}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('flashcards', 'Section 2')}
                    className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md shadow-emerald-600/20 flex items-center space-x-1.5"
                  >
                    <Layers className="w-4 h-4" />
                    <span>{isFrench ? 'Sec 2 : SQL & Bases de données (100 Cartes)' : 'Sec 2: SQL & Databases (100 Cards)'}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('flashcards', 'Section 3')}
                    className="px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-all shadow-md shadow-cyan-600/20 flex items-center space-x-1.5"
                  >
                    <Zap className="w-4 h-4" />
                    <span>{isFrench ? 'Sec 3 : Statistiques & Inférence (100 Cartes)' : 'Sec 3: Stats & Inference (100 Cards)'}</span>
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
                {currentTrack === 'pcep'
                  ? t.dashboard.pcepBlueprintTitle
                  : currentTrack === 'pcpp'
                  ? isFrench
                    ? 'Plan du programme officiel PCPP-32-10x'
                    : 'PCPP-32-10x Official Curriculum Blueprint'
                  : currentTrack === 'pced'
                  ? isFrench
                    ? 'Plan du programme officiel PCED-30-02'
                    : 'PCED-30-02 Official Curriculum Blueprint'
                  : currentTrack === 'pcad'
                  ? isFrench
                    ? 'Plan du programme officiel PCAD-31-02'
                    : 'PCAD-31-02 Official Curriculum Blueprint'
                  : t.dashboard.blueprintTitle}
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              {currentTrack === 'pcep'
                ? t.dashboard.pcepBlueprintSubtitle
                : currentTrack === 'pcpp'
                ? isFrench
                  ? 'Les 5 blocs de compétences professionnelles Python pour l’examen PCPP-32-10x'
                  : 'The 5 professional Python skill domains for the PCPP-32-10x exam'
                : currentTrack === 'pced'
                ? isFrench
                  ? 'Les 4 blocs de compétences en analyse de données pour l’examen PCED-30-02'
                  : 'The 4 foundational data analysis skill blocks for the PCED-30-02 exam'
                : currentTrack === 'pcad'
                ? isFrench
                  ? 'Les 3 blocs de compétences en analyse de données avec Python pour l’examen PCAD-31-02'
                  : 'The 3 core data analyst skill blocks for the PCAD-31-02 exam'
                : t.dashboard.blueprintSubtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(currentTrack === 'pcep'
            ? pcepSyllabusSections
            : currentTrack === 'pcpp'
            ? pcppSyllabusSections
            : currentTrack === 'pced'
            ? pcedSyllabusSections
            : currentTrack === 'pcad'
            ? pcadSyllabusSections
            : currentTrack === 'pcet'
            ? pcetSyllabusSections
            : currentTrack === 'pcat'
            ? pcatSyllabusSections
            : currentTrack === 'pces'
            ? pcesSyllabusSections
            : currentTrack === 'pcea'
            ? pceaSyllabusSections
            : currentTrack === 'pcei'
            ? pceiSyllabusSections
            : pcapSyllabusSections
          ).map((sec) => {
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
                  : currentTrack === 'pcpp'
                  ? activeDeepDiveTab === 'pcpp-2'
                    ? '20% Weight'
                    : '25% Weight'
                  : currentTrack === 'pced'
                  ? '22.5% Weight'
                  : currentTrack === 'pcad'
                  ? activeDeepDiveTab === 'pcad-1'
                    ? '25% Weight'
                    : activeDeepDiveTab === 'pcad-2'
                    ? '20% Weight'
                    : activeDeepDiveTab === 'pcad-3'
                    ? '20% Weight'
                    : activeDeepDiveTab === 'pcad-4'
                    ? '20% Weight'
                    : '15% Weight'
                  : currentTrack === 'pcet'
                  ? '25% Weight'
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
                  : currentTrack === 'pcpp'
                  ? activeDeepDiveTab === 'pcpp-2'
                    ? isFrench
                      ? 'Section 2 : Bonnes pratiques & Patrons de conception (2.1 à 2.5 • 100 Cartes)'
                      : 'Section 2: Best Practices & Design Patterns (2.1 - 2.5 • 100 Cards)'
                    : isFrench
                    ? 'Section 1 : POO Avancée, Métaclasses & MRO (1.1 à 1.5 • 100 Cartes)'
                    : 'Section 1: Advanced OOP, Metaclasses & MRO (1.1 - 1.5 • 100 Cards)'
                  : currentTrack === 'pced'
                  ? activeDeepDiveTab === 'pced-2'
                    ? isFrench
                      ? 'Section 2 : Les bases de Python pour l’analyse de données (2.1 à 2.5 • 100 Cartes)'
                      : 'Section 2: Python Basics for Data Analysis (2.1 - 2.5 • 100 Cards)'
                    : isFrench
                    ? 'Section 1 : Concepts fondamentaux des données (Syllabus 1.1 à 1.5 • 100 Cartes)'
                    : 'Section 1: Data & Data Analysis Concepts (1.1 - 1.5 • 100 Cards)'
                  : currentTrack === 'pcad'
                  ? activeDeepDiveTab === 'pcad-1'
                    ? isFrench
                      ? 'Section 1 : Acquisition & Nettoyage des données (1.1 à 1.5 • 100 Cartes)'
                      : 'Section 1: Data Acquisition, Cleaning & Wrangling (1.1 - 1.5 • 100 Cards)'
                    : activeDeepDiveTab === 'pcad-2'
                    ? isFrench
                      ? 'Section 2 : Bases relationnelles & SQL analytique (2.1 à 2.5 • 100 Cartes)'
                      : 'Section 2: Relational Databases & Analytical SQL (2.1 - 2.5 • 100 Cards)'
                    : activeDeepDiveTab === 'pcad-3'
                    ? isFrench
                      ? 'Section 3 : Statistiques fondamentales & Inférence (3.1 à 3.5 • 100 Cartes)'
                      : 'Section 3: Foundational Statistics & Inference (3.1 - 3.5 • 100 Cards)'
                    : activeDeepDiveTab === 'pcad-4'
                    ? isFrench
                      ? 'Section 4 : Modélisation & Évaluation de Données (4.1 à 4.5 • 100 Cartes)'
                      : 'Section 4: Data Modeling & ML Evaluation (4.1 - 4.5 • 100 Cards)'
                    : isFrench
                    ? 'Section 5 : Visualisation & Narration des Données (5.1 à 5.5 • 100 Cartes)'
                    : 'Section 5: Data Visualization & Storytelling (5.1 - 5.5 • 100 Cards)'
                  : currentTrack === 'pcet'
                  ? activeDeepDiveTab === 'pcet-1'
                    ? isFrench
                      ? 'Section 1 : Fondamentaux des Tests & Assurance Qualité (1.1 à 1.5 • 100 Cartes)'
                      : 'Section 1: Testing Fundamentals & Quality Assurance (1.1 - 1.5 • 100 Cards)'
                    : activeDeepDiveTab === 'pcet-2'
                    ? isFrench
                      ? 'Section 2 : Types, Niveaux et Processus de Test (2.1 à 2.5 • 100 Cartes)'
                      : 'Section 2: Testing Levels, Types & Lifecycle (2.1 - 2.5 • 100 Cards)'
                    : activeDeepDiveTab === 'pcet-3'
                    ? isFrench
                      ? 'Section 3 : Analyse Statique & Refactoring (3.1 à 3.5 • 100 Cartes)'
                      : 'Section 3: Static Analysis, Linters & Refactoring (3.1 - 3.5 • 100 Cards)'
                    : isFrench
                    ? 'Section 4 : Automatisation pytest & Intégration CI/CD (4.1 à 4.5 • 100 Cartes)'
                    : 'Section 4: pytest Automation & CI/CD Pipelines (4.1 - 4.5 • 100 Cards)'
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
              ) : currentTrack === 'pcpp' ? (
                <>
                  <button
                    onClick={() => setActiveDeepDiveTab('pcpp-1')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                      activeDeepDiveTab === 'pcpp-1'
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>{isFrench ? 'Section 1 (POO)' : 'Section 1 (OOP)'}</span>
                  </button>
                  <button
                    onClick={() => setActiveDeepDiveTab('pcpp-2')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                      activeDeepDiveTab === 'pcpp-2'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>{isFrench ? 'Section 2 (PEP & Patrons)' : 'Section 2 (PEP & Patterns)'}</span>
                  </button>
                </>
              ) : currentTrack === 'pced' ? (
                <>
                  <button
                    onClick={() => setActiveDeepDiveTab('pced-1')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                      activeDeepDiveTab === 'pced-1'
                        ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Package className="w-3.5 h-3.5" />
                    <span>{isFrench ? 'Section 1 (Concepts)' : 'Section 1 (Concepts)'}</span>
                  </button>
                  <button
                    onClick={() => setActiveDeepDiveTab('pced-2')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                      activeDeepDiveTab === 'pced-2'
                        ? 'bg-emerald-500 text-slate-950 shadow-sm font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>{isFrench ? 'Section 2 (Bases Python)' : 'Section 2 (Python Basics)'}</span>
                  </button>
                  <button
                    onClick={() => setActiveDeepDiveTab('pced-3')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                      activeDeepDiveTab === 'pced-3'
                        ? 'bg-cyan-500 text-slate-950 shadow-sm font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>{isFrench ? 'Section 3 (Analyse Données)' : 'Section 3 (Data & Analysis)'}</span>
                  </button>
                </>
              ) : currentTrack === 'pcad' ? (
                <>
                  <button
                    onClick={() => setActiveDeepDiveTab('pcad-1')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                      activeDeepDiveTab === 'pcad-1'
                        ? 'bg-blue-600 text-white shadow-sm font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Package className="w-3.5 h-3.5" />
                    <span>{isFrench ? 'Section 1 (Pandas)' : 'Section 1 (Pandas)'}</span>
                  </button>
                  <button
                    onClick={() => setActiveDeepDiveTab('pcad-2')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                      activeDeepDiveTab === 'pcad-2'
                        ? 'bg-emerald-600 text-white shadow-sm font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>{isFrench ? 'Section 2 (SQL)' : 'Section 2 (SQL)'}</span>
                  </button>
                  <button
                    onClick={() => setActiveDeepDiveTab('pcad-3')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                      activeDeepDiveTab === 'pcad-3'
                        ? 'bg-cyan-600 text-white shadow-sm font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>{isFrench ? 'Section 3 (Stats)' : 'Section 3 (Stats)'}</span>
                  </button>
                  <button
                    onClick={() => setActiveDeepDiveTab('pcad-4')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                      activeDeepDiveTab === 'pcad-4'
                        ? 'bg-violet-600 text-white shadow-sm font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>{isFrench ? 'Section 4 (Modélisation)' : 'Section 4 (Modeling)'}</span>
                  </button>
                  <button
                    onClick={() => setActiveDeepDiveTab('pcad-5')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                      activeDeepDiveTab === 'pcad-5'
                        ? 'bg-teal-600 text-white shadow-sm font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>{isFrench ? 'Section 5 (Visualisation)' : 'Section 5 (Dataviz)'}</span>
                  </button>
                </>
              ) : currentTrack === 'pcet' ? (
                <>
                  <button
                    onClick={() => setActiveDeepDiveTab('pcet-1')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                      activeDeepDiveTab === 'pcet-1'
                        ? 'bg-rose-600 text-white shadow-sm font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Package className="w-3.5 h-3.5" />
                    <span>{isFrench ? 'Section 1 (QA)' : 'Section 1 (QA)'}</span>
                  </button>
                  <button
                    onClick={() => setActiveDeepDiveTab('pcet-2')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                      activeDeepDiveTab === 'pcet-2'
                        ? 'bg-emerald-600 text-white shadow-sm font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>{isFrench ? 'Section 2 (Niveaux)' : 'Section 2 (Levels)'}</span>
                  </button>
                  <button
                    onClick={() => setActiveDeepDiveTab('pcet-3')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                      activeDeepDiveTab === 'pcet-3'
                        ? 'bg-amber-600 text-white shadow-sm font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>{isFrench ? 'Section 3 (Statique)' : 'Section 3 (Static)'}</span>
                  </button>
                  <button
                    onClick={() => setActiveDeepDiveTab('pcet-4')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                      activeDeepDiveTab === 'pcet-4'
                        ? 'bg-cyan-600 text-white shadow-sm font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>{isFrench ? 'Section 4 (pytest)' : 'Section 4 (pytest)'}</span>
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
                } else if (currentTrack === 'pcpp') {
                  onNavigate('flashcards', activeDeepDiveTab === 'pcpp-2' ? 'Section 2' : 'Section 1');
                } else if (currentTrack === 'pced') {
                  onNavigate(
                    'flashcards',
                    activeDeepDiveTab === 'pced-3'
                      ? 'Section 3'
                      : activeDeepDiveTab === 'pced-2'
                      ? 'Section 2'
                      : 'Section 1'
                  );
                } else if (currentTrack === 'pcad') {
                  const secNum =
                    activeDeepDiveTab === 'pcad-1'
                      ? 'Section 1'
                      : activeDeepDiveTab === 'pcad-2'
                      ? 'Section 2'
                      : activeDeepDiveTab === 'pcad-3'
                      ? 'Section 3'
                      : activeDeepDiveTab === 'pcad-4'
                      ? 'Section 4'
                      : 'Section 5';
                  onNavigate('flashcards', secNum);
                } else if (currentTrack === 'pcet') {
                  const secNum =
                    activeDeepDiveTab === 'pcet-1'
                      ? 'Section 1'
                      : activeDeepDiveTab === 'pcet-2'
                      ? 'Section 2'
                      : activeDeepDiveTab === 'pcet-3'
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
          (currentTrack === 'pcpp' && (activeDeepDiveTab === 'pcpp-1' || activeDeepDiveTab === 'pcpp-2')) ||
          (currentTrack === 'pced' && (activeDeepDiveTab === 'pced-1' || activeDeepDiveTab === 'pced-2' || activeDeepDiveTab === 'pced-3')) ||
          (currentTrack === 'pcad' && (activeDeepDiveTab === 'pcad-1' || activeDeepDiveTab === 'pcad-2' || activeDeepDiveTab === 'pcad-3' || activeDeepDiveTab === 'pcad-4' || activeDeepDiveTab === 'pcad-5')) ||
          (currentTrack === 'pcet' && (activeDeepDiveTab === 'pcet-1' || activeDeepDiveTab === 'pcet-2' || activeDeepDiveTab === 'pcet-3' || activeDeepDiveTab === 'pcet-4')) ||
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
            : currentTrack === 'pcpp'
            ? activeDeepDiveTab === 'pcpp-2'
              ? pcppSection2Chapters
              : pcppSection1Chapters
            : currentTrack === 'pced'
            ? activeDeepDiveTab === 'pced-3'
              ? pcedSection3Chapters
              : activeDeepDiveTab === 'pced-2'
              ? pcedSection2Chapters
              : pcedSection1Chapters
            : currentTrack === 'pcad'
            ? activeDeepDiveTab === 'pcad-5'
              ? pcadSection5Chapters
              : activeDeepDiveTab === 'pcad-4'
              ? pcadSection4Chapters
              : activeDeepDiveTab === 'pcad-3'
              ? pcadSection3Chapters
              : activeDeepDiveTab === 'pcad-2'
              ? pcadSection2Chapters
              : pcadSection1Chapters
            : currentTrack === 'pcet'
            ? activeDeepDiveTab === 'pcet-4'
              ? pcetSection4Chapters
              : activeDeepDiveTab === 'pcet-3'
              ? pcetSection3Chapters
              : activeDeepDiveTab === 'pcet-2'
              ? pcetSection2Chapters
              : pcetSection1Chapters
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
                : currentTrack === 'pcpp'
                ? activeDeepDiveTab === 'pcpp-2'
                  ? 'Section 2'
                  : 'Section 1'
                : currentTrack === 'pced'
                ? activeDeepDiveTab === 'pced-3'
                  ? 'Section 3'
                  : activeDeepDiveTab === 'pced-2'
                  ? 'Section 2'
                  : 'Section 1'
                : currentTrack === 'pcad'
                ? activeDeepDiveTab === 'pcad-5'
                  ? 'Section 5'
                  : activeDeepDiveTab === 'pcad-4'
                  ? 'Section 4'
                  : activeDeepDiveTab === 'pcad-3'
                  ? 'Section 3'
                  : activeDeepDiveTab === 'pcad-2'
                  ? 'Section 2'
                  : 'Section 1'
                : currentTrack === 'pcet'
                ? activeDeepDiveTab === 'pcet-4'
                  ? 'Section 4'
                  : activeDeepDiveTab === 'pcet-3'
                  ? 'Section 3'
                  : activeDeepDiveTab === 'pcet-2'
                  ? 'Section 2'
                  : 'Section 1'
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
              : currentTrack === 'pcpp'
              ? isFrench
                ? 'Pièges & Notions Avancées Critiques – Examen PCPP-32-10x'
                : 'High-Yield Traps & Advanced Nuances – PCPP-32-10x Exam'
              : currentTrack === 'pced'
              ? isFrench
                ? 'Pièges & Notions Clés d’Analyse – Examen PCED-30-02'
                : 'High-Yield Traps & Key Data Concepts – PCED-30-02 Exam'
              : currentTrack === 'pcad'
              ? isFrench
                ? 'Pièges & Notions Clés d’Analyse de Données – Examen PCAD-31-02'
                : 'High-Yield Traps & Data Analytics Nuances – PCAD-31-02 Exam'
              : currentTrack === 'pcet'
              ? isFrench
                ? 'Pièges & Notions Critiques en Test Logiciel – Examen PCET-30-01'
                : 'High-Yield Traps & QA Testing Nuances – PCET-30-01 Exam'
              : t.dashboard.trapsTitle}
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {(currentTrack === 'pcep'
            ? pcepHighYieldTraps
            : currentTrack === 'pcpp'
            ? pcppHighYieldTraps
            : currentTrack === 'pced'
            ? pcedHighYieldTraps
            : currentTrack === 'pcad'
            ? pcadHighYieldTraps
            : currentTrack === 'pcet'
            ? pcetHighYieldTraps
            : highYieldTraps
          ).map((trap, idx) => (
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
