import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CardSRSData } from '../types';
import {
  CERTIFICATION_TRACKS,
  completePendingTrackReset,
  mergeSrsProgress,
  readPendingTrackResets,
  readTrackSrsGeneration,
  readTrackSrsState,
  reconcileTrackSrsProgress,
  resetTrackProgress,
  setSrsStorageUserId,
  writeTrackSrsState,
} from './srsStorage';

const createSrsState = (lastReviewed: number): CardSRSData => ({
  repetitions: 2,
  interval: 3,
  easeFactor: 2.5,
  lastReviewed,
  dueDate: lastReviewed + 1000,
  status: 'review',
});

describe('SRS track storage and synchronization', () => {
  let values: Map<string, string>;

  beforeEach(() => {
    values = new Map<string, string>();
    vi.stubGlobal('localStorage', {
      getItem: (key: string) => values.get(key) ?? null,
      setItem: (key: string, value: string) => values.set(key, value),
      removeItem: (key: string) => values.delete(key),
      clear: () => values.clear(),
    });
    vi.stubGlobal('window', { dispatchEvent: vi.fn() });
    setSrsStorageUserId('test-user');
  });

  it('stores identical card IDs independently for all configured certifications', () => {
    CERTIFICATION_TRACKS.forEach((track, index) => {
      writeTrackSrsState(track, { 'same-card-id': createSrsState(index + 1) });
    });
    expect(CERTIFICATION_TRACKS).toHaveLength(10);
    CERTIFICATION_TRACKS.forEach((track, index) => {
      expect(readTrackSrsState(track)['same-card-id']).toEqual(createSrsState(index + 1));
    });
  });

  it('keeps SRS data separate between authenticated users and guest storage', () => {
    writeTrackSrsState('pcap', { 'PCAP-1': createSrsState(100) });
    setSrsStorageUserId('another-user');
    expect(readTrackSrsState('pcap')).toEqual({});

    writeTrackSrsState('pcap', { 'PCAP-1': createSrsState(200) });
    setSrsStorageUserId('test-user');
    expect(readTrackSrsState('pcap')).toEqual({ 'PCAP-1': createSrsState(100) });
    setSrsStorageUserId(null);
    expect(readTrackSrsState('pcap')).toEqual({});
  });

  it('resets guest progress locally without scheduling a cloud reset', () => {
    setSrsStorageUserId(null);
    writeTrackSrsState('pcap', { 'PCAP-1': createSrsState(100) });

    expect(resetTrackProgress('pcap')).toBeNull();
    expect(readTrackSrsState('pcap')).toEqual({});
    expect(readPendingTrackResets().pcap).toBeUndefined();
  });

  it('resets only the selected track and preserves custom cards and unrelated activity', () => {
    const pcapState = { 'PCAP-1': createSrsState(100) };
    const pcepState = { 'PCEP-1': createSrsState(200) };
    const pcppState = { 'PCPP-1': createSrsState(300) };
    writeTrackSrsState('pcap', pcapState);
    writeTrackSrsState('pcep', pcepState);
    writeTrackSrsState('pcpp', pcppState);
    values.set('py_user_cards', '[{"id":"PCAP-CUSTOM-1","track":"pcap"}]');
    values.set('py_last_study_activity', JSON.stringify({
      track: 'pcep',
      cardId: 'PCEP-1',
      section: 'Section 1',
      chapter: '1.1',
      timestamp: 200,
    }));

    const operation = resetTrackProgress('pcap', 'test-user');
    if (!operation) throw new Error('Authenticated reset did not return an operation');

    expect(readTrackSrsState('pcap')).toEqual({});
    expect(readTrackSrsState('pcep')).toEqual(pcepState);
    expect(readTrackSrsState('pcpp')).toEqual(pcppState);
    expect(values.get('py_user_cards')).toBe('[{"id":"PCAP-CUSTOM-1","track":"pcap"}]');
    expect(JSON.parse(values.get('py_last_study_activity') || '{}').track).toBe('pcep');
    expect(readTrackSrsGeneration('pcap')).toBe(1);
    expect(readPendingTrackResets().pcap).toEqual({ ...operation, cleared: true });
  });

  it('retains a reset tombstone until synchronization succeeds and makes acknowledgement idempotent', () => {
    writeTrackSrsState('pcpp', { 'PCPP-1': createSrsState(100) });
    const operation = resetTrackProgress('pcpp', 'test-user');
    if (!operation) throw new Error('Authenticated reset did not return an operation');

    expect(reconcileTrackSrsProgress('pcpp', 0, { 'PCPP-1': createSrsState(500) }, 'test-user')).toEqual({
      status: 'pending',
      states: {},
    });

    completePendingTrackReset('pcpp', operation.operationId, operation.generation);
    completePendingTrackReset('pcpp', operation.operationId, operation.generation);
    expect(readPendingTrackResets().pcpp).toBeUndefined();
    expect(readTrackSrsGeneration('pcpp')).toBe(1);
    expect(reconcileTrackSrsProgress('pcpp', 0, { 'PCPP-1': createSrsState(500) }, 'test-user')).toEqual({
      status: 'needs-reset',
      states: {},
    });
  });

  it('applies a newer remote reset and refuses to merge stale progress', () => {
    writeTrackSrsState('pcad', { 'PCAD-1': createSrsState(100) });

    expect(reconcileTrackSrsProgress('pcad', 1, { 'PCAD-1': createSrsState(500) }, 'test-user')).toEqual({
      status: 'remote-reset',
      states: {},
    });
    expect(readTrackSrsGeneration('pcad')).toBe(1);
    expect(readTrackSrsState('pcad')).toEqual({});
  });

  it('preserves local-only state and selects the newest state within one generation', () => {
    const local = {
      'PCAP-1': createSrsState(200),
      'PCAP-2': createSrsState(300),
    };
    writeTrackSrsState('pcap', local);

    const result = reconcileTrackSrsProgress('pcap', 0, {
      'PCAP-1': createSrsState(100),
      'PCAP-2': createSrsState(400),
      'PCAP-3': createSrsState(150),
    }, 'test-user');

    expect(result.status).toBe('merged');
    expect(result.states).toEqual({
      'PCAP-1': createSrsState(200),
      'PCAP-2': createSrsState(400),
      'PCAP-3': createSrsState(150),
    });
  });

  it('does not drop local progress when the cloud snapshot is empty or older', () => {
    const local = { 'PCAP-1': createSrsState(200) };

    expect(mergeSrsProgress(local, {})).toEqual(local);
    expect(mergeSrsProgress(local, { 'PCAP-1': createSrsState(100) })).toEqual(local);
  });

  it('uses the monotonic review count before client timestamps when resolving clock skew', () => {
    const localState = { ...createSrsState(500), repetitions: 2 };
    const remoteState = { ...createSrsState(100), repetitions: 3 };

    expect(mergeSrsProgress({ 'PCAP-1': localState }, { 'PCAP-1': remoteState })['PCAP-1'])
      .toEqual(remoteState);
  });
});
