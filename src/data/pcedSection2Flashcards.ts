import { Flashcard } from '../types';
import { pcedSection2CardsPart1 } from './pcedSection2CardsPart1';
import { pcedSection2CardsPart2 } from './pcedSection2CardsPart2';
import { pcedSection2CardsPart3 } from './pcedSection2CardsPart3';

export const pcedSection2Flashcards: Flashcard[] = [
  ...pcedSection2CardsPart1, // Cards 001 - 035 (Ch 2.1 & part of 2.2)
  ...pcedSection2CardsPart2, // Cards 036 - 070 (Ch 2.2 cont, Ch 2.3 & part of 2.4)
  ...pcedSection2CardsPart3, // Cards 071 - 100 (Ch 2.4 cont & Ch 2.5)
];
