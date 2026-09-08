import { Flashcard } from '../types';
import { section2CardsPart1 } from './pcapSection2CardsPart1';
import { section2CardsPart2 } from './pcapSection2CardsPart2';
import { section2CardsPart3 } from './pcapSection2CardsPart3';

/**
 * PCAP-31-03 SECTION 2: Data Aggregates and Exceptions
 * Complete 100-Card Deep-Dive Syllabus Bank
 * - Chapter 2.1: Characters, Encoding, ASCII/Unicode & Immutability (Cards 1-20)
 * - Chapter 2.2: String Methods (Search, Test, Transform, Split/Join) (Cards 21-40)
 * - Chapter 2.3: String Comparison, Slicing & Sequence Operations (Cards 41-60)
 * - Chapter 2.4: Exception Handling (try-except-else-finally, raise, assert) (Cards 61-80)
 * - Chapter 2.5: Exception Hierarchy, Custom Exceptions & args (Cards 81-100)
 */
export const pcapSection2Flashcards: Flashcard[] = [
  ...section2CardsPart1,
  ...section2CardsPart2,
  ...section2CardsPart3,
];
