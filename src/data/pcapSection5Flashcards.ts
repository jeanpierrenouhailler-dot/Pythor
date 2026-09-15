import { Flashcard } from '../types';
import { section5CardsPart1 } from './pcapSection5CardsPart1';
import { section5CardsPart2 } from './pcapSection5CardsPart2';
import { section5CardsPart3 } from './pcapSection5CardsPart3';

/**
 * PCAP-31-03 SECTION 5: MISCELLANEOUS (List Comprehensions, Lambdas, Closures, I/O)
 * 100 Interactive Flashcards covering all 5 syllabus chapters:
 * - Chapter 5.1: List, Dict & Set Comprehensions and Conditional Expressions (Cards 1-20)
 * - Chapter 5.2: Lambdas and Anonymous Functions (Cards 21-40)
 * - Chapter 5.3: Closures, Nested Scopes & nonlocal (Cards 41-60)
 * - Chapter 5.4: File Streams & Text I/O (Cards 61-80)
 * - Chapter 5.5: Binary I/O, bytearray, errno & OS Operations (Cards 81-100)
 */
export const pcapSection5Flashcards: Flashcard[] = [
  ...section5CardsPart1,
  ...section5CardsPart2,
  ...section5CardsPart3,
];
