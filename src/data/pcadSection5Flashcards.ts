import { Flashcard } from '../types';
import { pcadSection5CardsPart1 } from './pcadSection5CardsPart1';
import { pcadSection5CardsPart2 } from './pcadSection5CardsPart2';
import { pcadSection5CardsPart3 } from './pcadSection5CardsPart3';

export const pcadSection5Flashcards: Flashcard[] = [
  ...pcadSection5CardsPart1, // Cards 1 - 35 (Chapters 5.1 & 5.2 pt 1)
  ...pcadSection5CardsPart2, // Cards 36 - 70 (Chapters 5.2 pt 2, 5.3 & 5.4 pt 1)
  ...pcadSection5CardsPart3, // Cards 71 - 100 (Chapters 5.4 pt 2 & 5.5)
];
