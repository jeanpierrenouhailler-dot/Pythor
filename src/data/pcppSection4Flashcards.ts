import { Flashcard } from '../types';
import { pcppSection4CardsPart1 } from './pcppSection4CardsPart1';
import { pcppSection4CardsPart2 } from './pcppSection4CardsPart2';
import { pcppSection4CardsPart3 } from './pcppSection4CardsPart3';

/**
 * Complete PCPP-32-10x Section 4 Flashcard Deck (100 Cards)
 * Covers Chapters 4.1 through 4.5:
 * - 4.1 Network Fundamentals, TCP/IP & Sockets Architecture (Cards 1-20)
 * - 4.2 Socket Programming: Server and Client Implementation (Cards 21-40)
 * - 4.3 RESTful Architecture & HTTP Methods/Status Codes (Cards 41-60)
 * - 4.4 HTTP Requests with the requests Library (Cards 61-80)
 * - 4.5 JSON Data Exchange & API Serialization (Cards 81-100)
 */
export const pcppSection4Flashcards: Flashcard[] = [
  ...pcppSection4CardsPart1,
  ...pcppSection4CardsPart2,
  ...pcppSection4CardsPart3,
];
