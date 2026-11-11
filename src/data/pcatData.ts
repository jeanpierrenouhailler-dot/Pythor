import { Flashcard } from '../types';
import { pcatSection1Flashcards } from './pcatSection1Flashcards';
import { pcatSection2Flashcards } from './pcatSection2Flashcards';
import { pcatSection3Flashcards } from './pcatSection3Flashcards';
import { pcatSection4Flashcards } from './pcatSection4Flashcards';
import { pcatSection5Flashcards } from './pcatSection5Flashcards';
import { pcatSection6Flashcards } from './pcatSection6Flashcards';





export const pcatAllFlashcards: Flashcard[] = [
  ...pcatSection1Flashcards,
  ...pcatSection2Flashcards,
  ...pcatSection3Flashcards,
  ...pcatSection4Flashcards,
  ...pcatSection5Flashcards,
  ...pcatSection6Flashcards,
];

export { pcatTrackInfo, pcatSyllabusSections } from './metadata/pcat';
