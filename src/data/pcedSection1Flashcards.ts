import { Flashcard } from '../types';
import { pcedSection1CardsPart1 } from './pcedSection1CardsPart1';
import { pcedSection1CardsPart2 } from './pcedSection1CardsPart2';
import { pcedSection1CardsPart3 } from './pcedSection1CardsPart3';

/**
 * PCED-30-02 SECTION 1 COMPLETE FLASHCARD COLLECTION
 * Block 1: Introduction to Data and Data Analysis Concepts (22.5% of PCED exam)
 * 100 High-Yield Exam Preparation Flashcards:
 * - Chapter 1.1: Defining and Classifying Data (Cards 1 to 20)
 * - Chapter 1.2: Data Sources, Collection Methods, and Storage (Cards 21 to 40)
 * - Chapter 1.3: Data Lifecycle and Management (Cards 41 to 60)
 * - Chapter 1.4: Scope of Data Science, Analytics, and Analysis (Cards 61 to 80)
 * - Chapter 1.5: Ethical, Legal, and Compliance Principles in Data Handling (Cards 81 to 100)
 */
export const pcedSection1Flashcards: Flashcard[] = [
  ...pcedSection1CardsPart1,
  ...pcedSection1CardsPart2,
  ...pcedSection1CardsPart3,
];
