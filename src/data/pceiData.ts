import { Flashcard } from '../types';
import { pceiSection1Flashcards } from './pceiSection1Flashcards';
import { pceiSection2Flashcards } from './pceiSection2Flashcards';
import { pceiSection3Flashcards } from './pceiSection3Flashcards';
import { pceiSection4Flashcards } from './pceiSection4Flashcards';
import { pceiSection5Flashcards } from './pceiSection5Flashcards';
import { pceiSection6Flashcards } from './pceiSection6Flashcards';





export const pceiAllFlashcards: Flashcard[] = [
  ...pceiSection1Flashcards,
  ...pceiSection2Flashcards,
  ...pceiSection3Flashcards,
  ...pceiSection4Flashcards,
  ...pceiSection5Flashcards,
  ...pceiSection6Flashcards,
];

export { pceiTrackInfo, pceiSyllabusSections } from './metadata/pcei';
