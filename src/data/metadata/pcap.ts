import { CertificationTrackInfo, SyllabusSection } from '../../types';

export const pcapTrackInfo: CertificationTrackInfo = {
  id: 'pcap',
  code: 'PCAP-31-03',
  name: 'Certified Associate in Python Programming',
  shortName: 'PCAP',
  level: 'Associate',
  officialRef: 'Python Institute PCAP-31-03',
  totalSections: 5,
  durationMinutes: 65,
  questionCount: 40,
  passingScore: 70,
  description:
    'Demonstrates intermediate proficiency with Python 3, covering modules & packages, string algorithms & exceptions, advanced functions & generators, object-oriented programming (OOP), and comprehensions, lambdas & I/O operations.',
};

export const pcapSyllabusSections: SyllabusSection[] = [
  {
    id: 'section-1',
    number: 1,
    title: 'Control and Evaluations',
    weight: '25%',
    description: 'Modules, packages, sys.path, __init__.py, import mechanisms, and execution environments.',
    chapters: [
      { id: '1.1', title: 'Import Mechanics & Namespaces', weight: 'Cards 1-20', cardCount: 20 },
      { id: '1.2', title: 'Module Internals, sys.path & Bytecode', weight: 'Cards 21-40', cardCount: 20 },
      { id: '1.3', title: 'Package Architecture, __init__.py & __all__', weight: 'Cards 41-60', cardCount: 20 },
      { id: '1.4', title: 'Standard Modules: math, random, platform', weight: 'Cards 61-80', cardCount: 20 },
      { id: '1.5', title: 'PIP Commands & Package Management', weight: 'Cards 81-100', cardCount: 20 },
    ],
  },
  {
    id: 'section-2',
    number: 2,
    title: 'Data Aggregates and Exceptions',
    weight: '21%',
    description: 'Strings immutability, ASCII/Unicode, 20+ string methods, slice notation, exception handling hierarchies and try-except-else-finally.',
    chapters: [
      { id: '2.1', title: 'Characters, Encoding & Immutability', weight: 'Cards 1-20', cardCount: 20 },
      { id: '2.2', title: 'String Methods (Search, Test, Transform)', weight: 'Cards 21-40', cardCount: 20 },
      { id: '2.3', title: 'Comparisons, Slicing & Aggregates', weight: 'Cards 41-60', cardCount: 20 },
      { id: '2.4', title: 'Exception Handling: try-except-else-finally', weight: 'Cards 61-80', cardCount: 20 },
      { id: '2.5', title: 'Exception Hierarchy, Custom Errors & args', weight: 'Cards 81-100', cardCount: 20 },
    ],
  },
  {
    id: 'section-3',
    number: 3,
    title: 'Functions, Generators, and Closures',
    weight: '20%',
    description: 'Advanced parameters, *args/**kwargs, LEGB scopes, generator yield execution suspension, iterator protocol, lambdas, map/filter, closures, decorators, and file I/O streams.',
    chapters: [
      { id: '3.1', title: 'Parameters, *args, **kwargs & LEGB Scope', weight: 'Cards 1-20', cardCount: 20 },
      { id: '3.2', title: 'Generators, yield & Iterator Protocol', weight: 'Cards 21-40', cardCount: 20 },
      { id: '3.3', title: 'Lambdas & Functional Built-ins (map, filter)', weight: 'Cards 41-60', cardCount: 20 },
      { id: '3.4', title: 'Closures, Nested Scopes & Decorators', weight: 'Cards 61-80', cardCount: 20 },
      { id: '3.5', title: 'File Streams, Context Managers & bytearray', weight: 'Cards 81-100', cardCount: 20 },
    ],
  },
  {
    id: 'section-4',
    number: 4,
    title: 'Object-Oriented Programming (OOP)',
    weight: '34%',
    description: 'Official PCAP core domain (34% weight): Classes, instances, class vs instance attributes, name mangling, __init__, dunders, inheritance, super(), MRO, polymorphism, and composition.',
    chapters: [
      { id: '4.1', title: 'Understand the Object-Oriented Approach', weight: 'Cards 1-20', cardCount: 20 },
      { id: '4.2', title: 'Instance Variables vs Class Variables', weight: 'Cards 21-40', cardCount: 20 },
      { id: '4.3', title: 'Name Mangling & Private Attributes', weight: 'Cards 41-60', cardCount: 20 },
      { id: '4.4', title: 'Methods, Constructor __init__ & Dunders', weight: 'Cards 61-80', cardCount: 20 },
      { id: '4.5', title: 'Inheritance, Polymorphism & MRO', weight: 'Cards 81-100', cardCount: 20 },
    ],
  },
  {
    id: 'section-5',
    number: 5,
    title: 'Miscellaneous (List Comprehensions, Lambdas, Closures, I/O)',
    weight: '20%',
    description: 'List, dict, and set comprehensions, ternary expressions, lambdas, map/filter/reduce, closures, nonlocal scope binding, text and binary file streams, bytearray, errno, and OS operations.',
    chapters: [
      { id: '5.1', title: 'List, Dict & Set Comprehensions', weight: 'Cards 1-20', cardCount: 20 },
      { id: '5.2', title: 'Lambdas and Anonymous Functions', weight: 'Cards 21-40', cardCount: 20 },
      { id: '5.3', title: 'Closures, Nested Scopes & nonlocal', weight: 'Cards 41-60', cardCount: 20 },
      { id: '5.4', title: 'File Streams & Text I/O', weight: 'Cards 61-80', cardCount: 20 },
      { id: '5.5', title: 'Binary I/O, bytearray, errno & OS Operations', weight: 'Cards 81-100', cardCount: 20 },
    ],
  },
];
