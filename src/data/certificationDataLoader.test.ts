import { describe, expect, it } from 'vitest';
import { CERTIFICATIONS } from './certifications';
import { loadCertificationCards } from './certificationDataLoader';

describe('lazy certification card data', () => {
  it('loads every card set with counts matching its lightweight syllabus metadata', async () => {
    const loaded = await Promise.all(
      CERTIFICATIONS.map(async ({ id, syllabus }) => {
        const cards = await loadCertificationCards(id);
        const syllabusCount = syllabus.reduce(
          (total, section) => total + section.chapters.reduce((sectionTotal, chapter) => sectionTotal + chapter.cardCount, 0),
          0,
        );
        return { id, cards, syllabusCount };
      }),
    );

    loaded.forEach(({ cards, syllabusCount }) => {
      expect(cards.length).toBe(syllabusCount);
    });

    loaded.forEach(({ id, cards }) => {
      const cardIds = new Set<string>();
      cards.forEach((card) => {
        expect(card.id).toMatch(/^[a-zA-Z0-9_-]{1,120}$/);
        expect(cardIds.has(card.id), `${id} contains duplicate card ID ${card.id}`).toBe(false);
        expect(card.question.trim(), `${id}/${card.id} has no question`).not.toBe('');
        cardIds.add(card.id);
      });
    });
  }, 30000);
});
