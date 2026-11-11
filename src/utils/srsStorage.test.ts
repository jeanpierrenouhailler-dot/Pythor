import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CardSRSData } from '../types';
import { CERTIFICATION_TRACKS, mergeSrsProgress, persistSrsMapByTrack, readTrackSrsState } from './srsStorage';

const createSrsState = (lastReviewed: number): CardSRSData => ({
  repetitions: 2,
  interval: 3,
  easeFactor: 2.5,
  lastReviewed,
  dueDate: lastReviewed + 1000,
  status: 'review',
});

describe('SRS track storage and synchronization', () => {
  beforeEach(() => {
    const values = new Map<string, string>();
    vi.stubGlobal('localStorage', {
      getItem: (key: string) => values.get(key) ?? null,
      setItem: (key: string, value: string) => values.set(key, value),
      removeItem: (key: string) => values.delete(key),
      clear: () => values.clear(),
    });
  });

  it('keeps progress isolated by certification track', () => {
    const pcap = { 'PCAP-1': createSrsState(100) };
    const pcep = { 'PCEP-1': createSrsState(200) };
    persistSrsMapByTrack({ ...pcap, ...pcep });

    expect(readTrackSrsState('pcap')).toEqual(pcap);
    expect(readTrackSrsState('pcep')).toEqual(pcep);
    expect(CERTIFICATION_TRACKS).toHaveLength(10);
  });

  it('preserves local progress when the cloud snapshot is empty or older', () => {
    const local = { 'PCAP-1': createSrsState(200) };

    expect(mergeSrsProgress(local, {})).toEqual(local);
    expect(mergeSrsProgress(local, { 'PCAP-1': createSrsState(100) })).toEqual(local);
  });

  it('accepts newer cloud progress without dropping local-only cards', () => {
    const local = {
      'PCAP-1': createSrsState(100),
      'PCAP-2': createSrsState(200),
    };
    const remote = { 'PCAP-1': createSrsState(300) };

    expect(mergeSrsProgress(local, remote)).toEqual({
      'PCAP-1': createSrsState(300),
      'PCAP-2': createSrsState(200),
    });
  });
});
