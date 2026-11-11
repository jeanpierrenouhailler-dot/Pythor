import { Flashcard } from '../types';
import { pcppSection1Flashcards } from './pcppSection1Flashcards';
import { pcppSection2Flashcards } from './pcppSection2Flashcards';
import { pcppSection3Flashcards } from './pcppSection3Flashcards';
import { pcppSection4Flashcards } from './pcppSection4Flashcards';
import { pcppSection5Flashcards } from './pcppSection5Flashcards';





export const pcppStarterFlashcards: Flashcard[] = [
  ...pcppSection1Flashcards,
  ...pcppSection2Flashcards,
  ...pcppSection3Flashcards,
  ...pcppSection4Flashcards,
  ...pcppSection5Flashcards,
];

export const pcppFlashcardsData = pcppStarterFlashcards;
export {
  pcppSection1Flashcards,
  pcppSection2Flashcards,
  pcppSection3Flashcards,
  pcppSection4Flashcards,
  pcppSection5Flashcards,
};

export { pcppTrackInfo, pcppSyllabusSections } from './metadata/pcpp';
