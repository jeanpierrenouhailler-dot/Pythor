import { Flashcard } from '../types';
import { pcedSection1Flashcards } from './pcedSection1Flashcards';
import { pcedSection2Flashcards } from './pcedSection2Flashcards';
import { pcedSection3Flashcards } from './pcedSection3Flashcards';
import { pcedSection4Flashcards } from './pcedSection4Flashcards';





export const pcedStarterFlashcards: Flashcard[] = [
  // SECTION 1 (100 Complete Cards: Chapters 1.1 to 1.5)
  ...pcedSection1Flashcards,
  // SECTION 2 (100 Complete Cards: Chapters 2.1 to 2.5)
  ...pcedSection2Flashcards,
  // SECTION 3 (100 Complete Cards: Chapters 3.1 to 3.5)
  ...pcedSection3Flashcards,
  // SECTION 4 (100 Complete Cards: Chapters 4.1 to 4.5)
  ...pcedSection4Flashcards,
];

export const pcedFlashcardsData = pcedStarterFlashcards;
export { pcedSection1Flashcards, pcedSection2Flashcards, pcedSection3Flashcards, pcedSection4Flashcards };

export { pcedTrackInfo, pcedSyllabusSections } from './metadata/pced';
