import { SyllabusSection, Flashcard } from '../types';
import { pcapSection1Flashcards } from './pcapSection1Flashcards';
import { pcapSection2Flashcards } from './pcapSection2Flashcards';
import { pcapSection3Flashcards } from './pcapSection3Flashcards';
import { pcapSection4Flashcards } from './pcapSection4Flashcards';

export {
  pcapSection1Flashcards,
  pcapSection2Flashcards,
  pcapSection3Flashcards,
  pcapSection4Flashcards,
};

export const pcapSyllabusSections: SyllabusSection[] = [
  {
    id: 'section-1',
    number: 1,
    title: 'Control and Evaluations',
    weight: '25%',
    description: 'Modules, packages, sys.path, __init__.py, import mechanisms, and execution environments.',
    chapters: [
      { id: '1.1', title: 'Modules and Namespaces', cardCount: 3 },
      { id: '1.2', title: 'Packages and __init__.py', cardCount: 2 },
    ],
  },
  {
    id: 'section-2',
    number: 2,
    title: 'Data Aggregates and Exceptions',
    weight: '21%',
    description: 'Strings immutability, methods, slice notation, exception handling hierarchies and try-except-else-finally.',
    chapters: [
      { id: '2.1', title: 'String Operations & Encoding', cardCount: 1 },
      { id: '2.2', title: 'Exception Flow & Handling', cardCount: 1 },
      { id: '2.3', title: 'Containers & Slicing', cardCount: 1 },
    ],
  },
  {
    id: 'section-3',
    number: 3,
    title: 'Functions, Generators, and Closures',
    weight: '20%',
    description: 'Generator iterators, yield state suspension, anonymous lambdas, closures, and math/random built-in packages.',
    chapters: [
      { id: '3.1', title: 'Generators and Iterators', cardCount: 1 },
      { id: '3.2', title: 'Anonymous Lambdas', cardCount: 1 },
      { id: '3.3', title: 'Closures & Scopes', cardCount: 1 },
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
];

export const pcapFlashcardsData: Flashcard[] = [
  ...pcapSection1Flashcards,
  ...pcapSection2Flashcards,
  ...pcapSection3Flashcards,
  ...pcapSection4Flashcards,
];

export const allPcapCards = pcapFlashcardsData;
