import { Flashcard } from '../types';
import { pcadSection2CardsPart1 } from './pcadSection2CardsPart1';
import { pcadSection2CardsPart2 } from './pcadSection2CardsPart2';
import { pcadSection2CardsPart3 } from './pcadSection2CardsPart3';

export const pcadSection2Flashcards: Flashcard[] = [
  ...pcadSection2CardsPart1, // Cards 1 - 35
  ...pcadSection2CardsPart2, // Cards 36 - 70
  ...pcadSection2CardsPart3, // Cards 71 - 100
];
