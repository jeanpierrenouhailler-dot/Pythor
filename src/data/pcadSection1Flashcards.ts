import { Flashcard } from '../types';
import { pcadSection1CardsPart1 } from './pcadSection1CardsPart1';
import { pcadSection1CardsPart2 } from './pcadSection1CardsPart2';
import { pcadSection1CardsPart3 } from './pcadSection1CardsPart3';

export const pcadSection1Flashcards: Flashcard[] = [
  ...pcadSection1CardsPart1, // Cards 1 - 35
  ...pcadSection1CardsPart2, // Cards 36 - 70
  ...pcadSection1CardsPart3, // Cards 71 - 100
];
