import { CertificationTrack, Flashcard } from '../types';

const cardLoaders: Record<CertificationTrack, () => Promise<Flashcard[]>> = {
  pcap: async () => (await import('./pcapData')).pcapFlashcardsData,
  pcep: async () => (await import('./pcepData')).pcepStarterFlashcards,
  pcpp: async () => (await import('./pcppData')).pcppStarterFlashcards,
  pced: async () => (await import('./pcedData')).pcedStarterFlashcards,
  pcad: async () => (await import('./pcadData')).pcadStarterFlashcards,
  pcet: async () => (await import('./pcetData')).pcetAllFlashcards,
  pcat: async () => (await import('./pcatData')).pcatAllFlashcards,
  pces: async () => (await import('./pcesData')).pcesAllFlashcards,
  pcea: async () => (await import('./pceaData')).pceaAllFlashcards,
  pcei: async () => (await import('./pceiData')).pceiAllFlashcards,
};

export function loadCertificationCards(track: CertificationTrack): Promise<Flashcard[]> {
  return cardLoaders[track]();
}
