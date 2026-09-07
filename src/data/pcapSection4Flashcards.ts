import { Flashcard } from '../types';
import { section4CardsPart1 } from './pcapSection4CardsPart1';
import { section4CardsPart2 } from './pcapSection4CardsPart2';
import { section4CardsPart3 } from './pcapSection4CardsPart3';

/**
 * PCAP-31-03 SECTION 4: OBJECT-ORIENTED PROGRAMMING (OOP) (34% of Official PCAP Exam)
 * 100 Interactive Flashcards covering all 5 syllabus chapters:
 * - Chapter 4.1: Understand the Object-Oriented Approach (Cards 1-20)
 * - Chapter 4.2: Instance Variables vs Class Variables (Cards 21-40)
 * - Chapter 4.3: Name Mangling & Private Attributes (Cards 41-60)
 * - Chapter 4.4: Methods, Constructor __init__, and Special Dunder Methods (Cards 61-80)
 * - Chapter 4.5: Inheritance, Polymorphism & Method Resolution Order (MRO) (Cards 81-100)
 */
export const pcapSection4Flashcards: Flashcard[] = [
  ...section4CardsPart1,
  ...section4CardsPart2,
  ...section4CardsPart3,
];
