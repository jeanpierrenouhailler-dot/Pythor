import { Flashcard } from '../types';
import { pcepSection3CardsPart1 } from './pcepSection3CardsPart1';
import { pcepSection3CardsPart2 } from './pcepSection3CardsPart2';
import { pcepSection3CardsPart3 } from './pcepSection3CardsPart3';

/**
 * PCEP-30-0x SECTION 3: DATA COLLECTIONS – LISTS, TUPLES, DICTIONARIES (25% of Official PCEP Exam)
 * 100 Interactive Flashcards covering all 5 syllabus chapters:
 * - Chapter 3.1: Lists: Indexing, Negative Indices, Slicing [start:stop:step], Operations (Cards 1-20)
 * - Chapter 3.2: List Methods & Operations (append, insert, pop, remove, sort, reverse) (Cards 21-40)
 * - Chapter 3.3: Memory Model, Aliases, Shallow Copies & Nested Lists / Matrices (Cards 41-60)
 * - Chapter 3.4: Tuples: Immutability, Syntax, Singleton Comma, Unpacking & Conversions (Cards 61-80)
 * - Chapter 3.5: Dictionaries: Key-Value Mappings, Hashability, Methods & Iteration (Cards 81-100)
 */
export const pcepSection3Flashcards: Flashcard[] = [
  ...pcepSection3CardsPart1,
  ...pcepSection3CardsPart2,
  ...pcepSection3CardsPart3,
];
