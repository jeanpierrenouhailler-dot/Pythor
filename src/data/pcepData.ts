import { Flashcard } from '../types';
import { pcepSection1Flashcards } from './pcepSection1Flashcards';
import { pcepSection2Flashcards } from './pcepSection2Flashcards';
import { pcepSection3Flashcards } from './pcepSection3Flashcards';
import { pcepSection4Flashcards } from './pcepSection4Flashcards';







export const pcepStarterFlashcards: Flashcard[] = [
  // SECTION 1 (100 Complete Cards: Chapters 1.1 to 1.5)
  ...pcepSection1Flashcards,

  // SECTION 2 (100 Complete Cards: Chapters 2.1 to 2.5)
  ...pcepSection2Flashcards,

  // SECTION 3 (100 Complete Cards: Chapters 3.1 to 3.5)
  ...pcepSection3Flashcards,

  // SECTION 4 (100 Complete Cards: Chapters 4.1 to 4.5)
  ...pcepSection4Flashcards,
];

export const pcepFlashcardsData = pcepStarterFlashcards;
export { pcepSection1Flashcards, pcepSection2Flashcards, pcepSection3Flashcards, pcepSection4Flashcards };

export { pcapTrackInfo, pcapSyllabusSections } from './metadata/pcap';
export { pcepTrackInfo, pcepSyllabusSections } from './metadata/pcep';
