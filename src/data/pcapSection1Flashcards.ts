import { Flashcard } from '../types';
import { section1CardsPart1 } from './pcapSection1CardsPart1';
import { section1CardsPart2 } from './pcapSection1CardsPart2';
import { section1CardsPart3 } from './pcapSection1CardsPart3';

/**
 * PCAP-31-03 SECTION 1: CONTROL AND EVALUATIONS / MODULES, PACKAGES & PIP (25% of Official PCAP Exam)
 * 100 Interactive Flashcards covering all 5 syllabus chapters:
 * - Chapter 1.1: Import Mechanics & Namespaces (Cards 1-20)
 * - Chapter 1.2: Module Internals, sys.path & Bytecode (Cards 21-40)
 * - Chapter 1.3: Package Architecture, __init__.py & __all__ (Cards 41-60)
 * - Chapter 1.4: Standard Library Modules: math, random, platform (Cards 61-80)
 * - Chapter 1.5: Package Management with PIP & PyPI Ecosystem (Cards 81-100)
 */
export const pcapSection1Flashcards: Flashcard[] = [
  ...section1CardsPart1,
  ...section1CardsPart2,
  ...section1CardsPart3,
];
