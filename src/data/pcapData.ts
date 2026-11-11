import { Flashcard } from '../types';
import { pcapSection1Flashcards } from './pcapSection1Flashcards';
import { pcapSection2Flashcards } from './pcapSection2Flashcards';
import { pcapSection3Flashcards } from './pcapSection3Flashcards';
import { pcapSection4Flashcards } from './pcapSection4Flashcards';
import { pcapSection5Flashcards } from './pcapSection5Flashcards';

export {
  pcapSection1Flashcards,
  pcapSection2Flashcards,
  pcapSection3Flashcards,
  pcapSection4Flashcards,
  pcapSection5Flashcards,
};



export const pcapFlashcardsData: Flashcard[] = [
  ...pcapSection1Flashcards,
  ...pcapSection2Flashcards,
  ...pcapSection3Flashcards,
  ...pcapSection4Flashcards,
  ...pcapSection5Flashcards,
];

export const allPcapCards = pcapFlashcardsData;

export { pcapSyllabusSections } from './metadata/pcap';
