import { Flashcard } from '../types';
import { pcadSection3CardsPart1 } from './pcadSection3CardsPart1';
import { pcadSection3CardsPart2 } from './pcadSection3CardsPart2';
import { pcadSection3CardsPart3 } from './pcadSection3CardsPart3';

export const pcadSection3Flashcards: Flashcard[] = [
  ...pcadSection3CardsPart1, // Cards 1 - 35
  ...pcadSection3CardsPart2, // Cards 36 - 70
  ...pcadSection3CardsPart3, // Cards 71 - 100
];
