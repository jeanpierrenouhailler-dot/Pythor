import { Flashcard } from '../types';

export function getUserCardsStorageKey(userId?: string | null): string {
  return userId ? `py_user_cards_${encodeURIComponent(userId)}` : 'py_user_cards';
}

export function readUserCards(userId?: string | null): Flashcard[] {
  try {
    const saved = localStorage.getItem(getUserCardsStorageKey(userId));
    const parsed: unknown = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed as Flashcard[] : [];
  } catch {
    return [];
  }
}

export function writeUserCards(cards: Flashcard[], userId?: string | null): void {
  localStorage.setItem(getUserCardsStorageKey(userId), JSON.stringify(cards));
}

export function mergeUserCards(local: Flashcard[], remote: Flashcard[]): Flashcard[] {
  const cardsByTrackAndId = new Map<string, Flashcard>();
  local.forEach((card) => cardsByTrackAndId.set(`${card.track ?? 'pcap'}:${card.id}`, card));
  remote.forEach((card) => cardsByTrackAndId.set(`${card.track ?? 'pcap'}:${card.id}`, card));
  return [...cardsByTrackAndId.values()];
}
