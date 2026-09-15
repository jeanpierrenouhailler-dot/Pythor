import { Flashcard } from '../types';
import { pcepSection1CardsPart1 } from './pcepSection1CardsPart1';
import { pcepSection1CardsPart2 } from './pcepSection1CardsPart2';
import { pcepSection1CardsPart3 } from './pcepSection1CardsPart3';

/**
 * PCEP-30-0x SECTION 1: COMPUTER PROGRAMMING AND PYTHON FUNDAMENTALS (18% of Official PCEP Exam)
 * 100 Interactive Flashcards covering all 5 syllabus chapters:
 * - Chapter 1.1: Fundamentals of Computer Programming & Execution (Cards 1-20)
 * - Chapter 1.2: Literals, Numeric Types, Booleans & Scientific Notation (Cards 21-40)
 * - Chapter 1.3: Basic I/O: print(), input(), sep=, end=, and Escape Sequences (Cards 41-60)
 * - Chapter 1.4: Operators, Precedence, and Expressions (Cards 61-80)
 * - Chapter 1.5: Variables, Assignment, Dynamic Typing & PEP 8 Rules (Cards 81-100)
 */
export const pcepSection1Flashcards: Flashcard[] = [
  ...pcepSection1CardsPart1,
  ...pcepSection1CardsPart2,
  ...pcepSection1CardsPart3,
];
