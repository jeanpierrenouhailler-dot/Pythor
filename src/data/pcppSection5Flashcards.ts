import { Flashcard } from '../types';
import { pcppSection5CardsPart1 } from './pcppSection5CardsPart1';
import { pcppSection5CardsPart2 } from './pcppSection5CardsPart2';
import { pcppSection5CardsPart3 } from './pcppSection5CardsPart3';

/**
 * PCPP-32-10x Section 5 Flashcards: File Processing and Data Persistence (100 Flashcards)
 * - Chapter 5.1: Relational Database Operations with sqlite3 (Cards 1 to 20)
 * - Chapter 5.2: XML Processing with xml.etree.ElementTree (Cards 21 to 40)
 * - Chapter 5.3: CSV File Operations: reader, writer & DictReader (Cards 41 to 60)
 * - Chapter 5.4: Logging Architecture: loggers, handlers, formatters (Cards 61 to 80)
 * - Chapter 5.5: Configuring Log Levels & File Handlers (Cards 81 to 100)
 */
export const pcppSection5Flashcards: Flashcard[] = [
  ...pcppSection5CardsPart1,
  ...pcppSection5CardsPart2,
  ...pcppSection5CardsPart3,
];
