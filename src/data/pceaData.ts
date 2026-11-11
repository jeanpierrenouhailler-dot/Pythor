import { Flashcard } from '../types';
import { pceaSection1Flashcards } from './pceaSection1Flashcards';
import { pceaSection2Flashcards } from './pceaSection2Flashcards';
import { pceaSection3Flashcards } from './pceaSection3Flashcards';
import { pceaSection4Flashcards } from './pceaSection4Flashcards';





export const pceaAllFlashcards: Flashcard[] = [
  ...pceaSection1Flashcards,
  ...pceaSection2Flashcards,
  ...pceaSection3Flashcards,
  ...pceaSection4Flashcards,
];

export { pceaTrackInfo, pceaSyllabusSections } from './metadata/pcea';
