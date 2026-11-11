import { Flashcard } from '../types';
import { pcetSection1Flashcards } from './pcetSection1Flashcards';
import { pcetSection2Flashcards } from './pcetSection2Flashcards';
import { pcetSection3Flashcards } from './pcetSection3Flashcards';
import { pcetSection4Flashcards } from './pcetSection4Flashcards';





export const pcetAllFlashcards: Flashcard[] = [
  ...pcetSection1Flashcards,
  ...pcetSection2Flashcards,
  ...pcetSection3Flashcards,
  ...pcetSection4Flashcards,
];

export { pcetTrackInfo, pcetSyllabusSections } from './metadata/pcet';
