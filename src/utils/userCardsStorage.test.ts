import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Flashcard } from '../types';
import { mergeUserCards, readUserCards, writeUserCards } from './userCardsStorage';

const card = (id: string, track: Flashcard['track']): Flashcard => ({
  id,
  track,
  difficulty: 'Beginner',
  chapter: '1.1',
  section: 'Section 1',
  question: `${track} question`,
  codeSnippet: '',
});

describe('custom card local storage', () => {
  let values: Map<string, string>;

  beforeEach(() => {
    values = new Map<string, string>();
    vi.stubGlobal('localStorage', {
      getItem: (key: string) => values.get(key) ?? null,
      setItem: (key: string, value: string) => values.set(key, value),
      removeItem: (key: string) => values.delete(key),
    });
  });

  it('isolates guest and per-user cards', () => {
    writeUserCards([card('shared-id', 'pcap')]);
    writeUserCards([card('shared-id', 'pcep')], 'user-a');
    writeUserCards([card('shared-id', 'pcpp')], 'user-b');

    expect(readUserCards()).toEqual([card('shared-id', 'pcap')]);
    expect(readUserCards('user-a')).toEqual([card('shared-id', 'pcep')]);
    expect(readUserCards('user-b')).toEqual([card('shared-id', 'pcpp')]);
  });

  it('merges local and cloud cards by track and ID without cross-track collisions', () => {
    expect(mergeUserCards(
      [card('shared-id', 'pcap'), card('local-id', 'pcep')],
      [card('shared-id', 'pcep')],
    )).toEqual([
      card('shared-id', 'pcap'),
      card('local-id', 'pcep'),
      card('shared-id', 'pcep'),
    ]);
  });
});
