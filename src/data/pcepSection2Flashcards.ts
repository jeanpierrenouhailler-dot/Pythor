import { Flashcard } from '../types';
import { pcepSection2CardsPart1 } from './pcepSection2CardsPart1';
import { pcepSection2CardsPart2 } from './pcepSection2CardsPart2';
import { pcepSection2CardsPart3 } from './pcepSection2CardsPart3';

/**
 * PCEP-30-0x SECTION 2: CONTROL FLOW – CONDITIONAL BLOCKS AND LOOPS (29% of Official PCEP Exam)
 * 100 Interactive Flashcards covering all 5 syllabus chapters:
 * - Chapter 2.1: Conditional Statements (if, if-else, if-elif-else, ternary & nesting) (Cards 1-20)
 * - Chapter 2.2: Relational and Equality Operators (Cards 21-40)
 * - Chapter 2.3: Logical Operators & Short-Circuit Evaluation (Cards 41-60)
 * - Chapter 2.4: Bitwise Operators & Bit Shifting (Cards 61-80)
 * - Chapter 2.5: Loops: while, for, range(), break, continue, loop-else (Cards 81-100)
 */
export const pcepSection2Flashcards: Flashcard[] = [
  ...pcepSection2CardsPart1,
  ...pcepSection2CardsPart2,
  ...pcepSection2CardsPart3,
];
