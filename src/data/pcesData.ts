import { Flashcard } from '../types';
import { pcesSection1Flashcards } from './pcesSection1Flashcards';
import { pcesSection2Flashcards } from './pcesSection2Flashcards';
import { pcesSection3Flashcards } from './pcesSection3Flashcards';
import { pcesSection4Flashcards } from './pcesSection4Flashcards';





export const pcesAllFlashcards: Flashcard[] = [
  ...pcesSection1Flashcards,
  ...pcesSection2Flashcards,
  ...pcesSection3Flashcards,
  ...pcesSection4Flashcards,
];

export { pcesTrackInfo, pcesSyllabusSections } from './metadata/pces';
