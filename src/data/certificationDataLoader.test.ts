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
  }, 30000);
});
