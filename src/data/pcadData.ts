import { Flashcard } from '../types';
import { pcadSection1Flashcards } from './pcadSection1Flashcards';
import { pcadSection2Flashcards } from './pcadSection2Flashcards';
import { pcadSection3Flashcards } from './pcadSection3Flashcards';
import { pcadSection4Flashcards } from './pcadSection4Flashcards';
import { pcadSection5Flashcards } from './pcadSection5Flashcards';





export const pcadStarterFlashcards: Flashcard[] = [
  // SECTION 1 (100 Complete Cards: Chapters 1.1 to 1.5)
  ...pcadSection1Flashcards,
  // SECTION 2 (100 Complete Cards: Chapters 2.1 to 2.5)
  ...pcadSection2Flashcards,
  // SECTION 3 (100 Complete Cards: Chapters 3.1 to 3.5)
  ...pcadSection3Flashcards,
  // SECTION 4 (100 Complete Cards: Chapters 4.1 to 4.5)
  ...pcadSection4Flashcards,
  // SECTION 5 (100 Complete Cards: Chapters 5.1 to 5.5)
  ...pcadSection5Flashcards,
];

export const pcadFlashcardsData = pcadStarterFlashcards;
export {
  pcadSection1Flashcards,
  pcadSection2Flashcards,
  pcadSection3Flashcards,
  pcadSection4Flashcards,
  pcadSection5Flashcards,
};

export { pcadTrackInfo, pcadSyllabusSections } from './metadata/pcad';
