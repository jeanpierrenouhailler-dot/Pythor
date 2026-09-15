import { SyllabusSection, Flashcard, CertificationTrackInfo } from '../types';
import { pcepSection1Flashcards } from './pcepSection1Flashcards';
import { pcepSection2Flashcards } from './pcepSection2Flashcards';
import { pcepSection3Flashcards } from './pcepSection3Flashcards';
import { pcepSection4Flashcards } from './pcepSection4Flashcards';

export const pcepTrackInfo: CertificationTrackInfo = {
  id: 'pcep',
  code: 'PCEP-30-0x',
  name: 'Certified Entry-Level Python Programmer',
  shortName: 'PCEP',
  level: 'Entry-Level',
  officialRef: 'Python Institute PCEP-30-02',
  totalSections: 4,
  durationMinutes: 40,
  questionCount: 30,
  passingScore: 70,
  description:
    'Demonstrates fundamental knowledge of Python 3 programming concepts, including basic syntax, variables, input/output, control flow, collections, and introductory functions and exceptions.',
};

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

export const pcepSyllabusSections: SyllabusSection[] = [
  {
    id: 'pcep-section-1',
    number: 1,
    title: 'Computer Programming and Python Fundamentals',
    weight: '18%',
    description:
      'Foundational concepts of computing, compilation vs. interpretation, Python literals, basic I/O (print with sep/end), numeric types, operators, dynamic typing, and PEP 8 identifier naming conventions.',
    chapters: [
      { id: '1.1', title: 'Fundamentals of Computer Programming & Execution', cardCount: 20 },
      { id: '1.2', title: 'Literals, Numeric Types, Booleans & Scientific Notation', cardCount: 20 },
      { id: '1.3', title: 'Basic I/O: print(), sep=, end=, and Escape Sequences', cardCount: 20 },
      { id: '1.4', title: 'Operators, Precedence, and Expressions', cardCount: 20 },
      { id: '1.5', title: 'Variables, Assignment, Dynamic Typing & PEP 8 Rules', cardCount: 20 },
    ],
  },
  {
    id: 'pcep-section-2',
    number: 2,
    title: 'Control Flow – Conditional Blocks and Loops',
    weight: '29%',
    description:
      'Decision-making structures (if, if-else, if-elif-else), equality and relational comparisons, boolean logic with short-circuit evaluation, bitwise operations, and loop controls (while, for, range, break, continue, else blocks).',
    chapters: [
      { id: '2.1', title: 'Conditional Statements (if, if-else, if-elif-else)', cardCount: 20 },
      { id: '2.2', title: 'Relational and Equality Operators', cardCount: 20 },
      { id: '2.3', title: 'Logical Operators & Short-Circuit Evaluation', cardCount: 20 },
      { id: '2.4', title: 'Bitwise Operators & Bit Shifting', cardCount: 20 },
      { id: '2.5', title: 'Loops: while, for, range(), break, continue, loop-else', cardCount: 20 },
    ],
  },
  {
    id: 'pcep-section-3',
    number: 3,
    title: 'Data Collections – Lists, Tuples, Dictionaries',
    weight: '25%',
    description:
      'Sequences and mappings in Python: list slicing and in-place methods, reference alias vs shallow copying, tuple immutability and singleton syntax, dictionary key hashing requirements, and key-value manipulation.',
    chapters: [
      { id: '3.1', title: 'Lists: Indexing, Slicing [start:stop:step], len()', cardCount: 20 },
      { id: '3.2', title: 'List Methods: append, insert, pop, remove, sort, reverse', cardCount: 20 },
      { id: '3.3', title: 'Memory Models: Aliases vs Copies (list.copy(), [:])', cardCount: 20 },
      { id: '3.4', title: 'Tuples: Immutability, Single Element (x,), Indexing', cardCount: 20 },
      { id: '3.5', title: 'Dictionaries: Key-Value Pairs, keys(), values(), items()', cardCount: 20 },
    ],
  },
  {
    id: 'pcep-section-4',
    number: 4,
    title: 'Functions and Exceptions',
    weight: '28%',
    description:
      'Writing modular code: def syntax, return statements, positional vs keyword arguments, default parameters, local and global scoping with global keyword, and exception handling using try-except blocks.',
    chapters: [
      { id: '4.1', title: 'Function Definition (def), Invocations & Return Values', cardCount: 20 },
      { id: '4.2', title: 'Positional vs Keyword Arguments & Default Parameters', cardCount: 20 },
      { id: '4.3', title: 'Variable Scope: Local vs Global & the global Keyword', cardCount: 20 },
      { id: '4.4', title: 'Basic Exception Handling: try-except Blocks', cardCount: 20 },
      { id: '4.5', title: 'Built-in Functions & Type Casting (int, float, str, input)', cardCount: 20 },
    ],
  },
];

export const pcepStarterFlashcards: Flashcard[] = [
  // SECTION 1 (100 Complete Cards: Chapters 1.1 to 1.5)
  ...pcepSection1Flashcards,

  // SECTION 2 (100 Complete Cards: Chapters 2.1 to 2.5)
  ...pcepSection2Flashcards,

  // SECTION 3 (100 Complete Cards: Chapters 3.1 to 3.5)
  ...pcepSection3Flashcards,

  // SECTION 4 (100 Complete Cards: Chapters 4.1 to 4.5)
  ...pcepSection4Flashcards,
];

export const pcepFlashcardsData = pcepStarterFlashcards;
export { pcepSection1Flashcards, pcepSection2Flashcards, pcepSection3Flashcards, pcepSection4Flashcards };

