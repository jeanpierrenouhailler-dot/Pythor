import { Flashcard } from '../types';
import { pcadSection4CardsPart1 } from './pcadSection4CardsPart1';
import { pcadSection4CardsPart2 } from './pcadSection4CardsPart2';
import { pcadSection4CardsPart3 } from './pcadSection4CardsPart3';

export const pcadSection4Flashcards: Flashcard[] = [
  ...pcadSection4CardsPart1, // Cards 1 - 35 (Chapters 4.1 & 4.2 pt 1)
  ...pcadSection4CardsPart2, // Cards 36 - 70 (Chapters 4.2 pt 2, 4.3 & 4.4 pt 1)
  ...pcadSection4CardsPart3, // Cards 71 - 100 (Chapters 4.4 pt 2 & 4.5)
];
