import { CardSRSData, Flashcard } from '../types';

export interface SrsCardStats {
  fresh: number;
  learning: number;
  review: number;
  mastered: number;
  started: number;
  due: number;
  total: number;
}

export function calculateSrsCardStats(
  cards: readonly Pick<Flashcard, 'id'>[],
  states: Record<string, CardSRSData>,
  now = Date.now(),
): SrsCardStats {
  return cards.reduce<SrsCardStats>((stats, card) => {
    const state = states[card.id];
    if (!state || state.status === 'new') {
      stats.fresh += 1;
    } else {
      stats.started += 1;
      if (state.status === 'learning') stats.learning += 1;
      if (state.status === 'review') stats.review += 1;
      if (state.status === 'mastered') stats.mastered += 1;
      if (
        (state.status === 'learning' || state.status === 'review')
        && (state.dueDate === undefined || state.dueDate <= now)
      ) stats.due += 1;
    }
    stats.total += 1;
    return stats;
  }, { fresh: 0, learning: 0, review: 0, mastered: 0, started: 0, due: 0, total: 0 });
}
