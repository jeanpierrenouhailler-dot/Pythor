import { describe, expect, it } from 'vitest';
import { CardSRSData } from '../types';
import { calculateSrsCardStats } from './srsStats';

const reviewed = (status: CardSRSData['status'], dueDate?: number): CardSRSData => ({
  repetitions: 1,
  interval: 1,
  easeFactor: 2.5,
  status,
  dueDate,
});

describe('calculateSrsCardStats', () => {
  it('counts new, learning, review, mastered, and currently due cards', () => {
    const stats = calculateSrsCardStats(
      ['fresh', 'new', 'learning', 'review-due', 'review-later', 'mastered'].map((id) => ({ id })),
      {
        new: reviewed('new'),
        learning: reviewed('learning', 100),
        'review-due': reviewed('review', 100),
        'review-later': reviewed('review', 300),
        mastered: reviewed('mastered', 100),
      },
      200,
    );

    expect(stats).toEqual({
      fresh: 2,
      learning: 1,
      review: 2,
      mastered: 1,
      started: 4,
      due: 2,
      total: 6,
    });
  });

  it('treats a learning card without a due date as due', () => {
    const stats = calculateSrsCardStats(
      [{ id: 'learning' }],
      { learning: reviewed('learning') },
      200,
    );

    expect(stats.due).toBe(1);
  });
});
