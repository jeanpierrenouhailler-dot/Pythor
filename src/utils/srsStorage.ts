import { CardSRSData, CertificationTrack } from '../types';
import { CERTIFICATION_IDS } from '../data/certificationIds';

export const CERTIFICATION_TRACKS: CertificationTrack[] = CERTIFICATION_IDS;

export function getSrsStorageKey(track: CertificationTrack = 'pcap'): string {
  return `${track}_srs_state`;
}

export function readTrackSrsState(track: CertificationTrack = 'pcap'): Record<string, CardSRSData> {
  try {
    const key = getSrsStorageKey(track);
    const saved = localStorage.getItem(key);
    if (saved) {
      return JSON.parse(saved) as Record<string, CardSRSData>;
    }

    if (track === 'pcap') {
      const legacySaved = localStorage.getItem('pcap_srs_state');
      if (legacySaved) {
        return JSON.parse(legacySaved) as Record<string, CardSRSData>;
      }
    }
  } catch {
    // Ignore malformed local storage payloads and fall back to an empty state.
  }

  return {};
}

export function writeTrackSrsState(track: CertificationTrack, state: Record<string, CardSRSData>): void {
  try {
    localStorage.setItem(getSrsStorageKey(track), JSON.stringify(state));
  } catch {
    // Ignore quota or browser storage failures.
  }
}

export function readAllTrackSrsStates(): Record<CertificationTrack, Record<string, CardSRSData>> {
  return CERTIFICATION_TRACKS.reduce((accumulator, track) => {
    accumulator[track] = readTrackSrsState(track);
    return accumulator;
  }, {} as Record<CertificationTrack, Record<string, CardSRSData>>);
}

export function writeAllTrackSrsStates(
  states: Partial<Record<CertificationTrack, Record<string, CardSRSData>>>
): void {
  for (const track of CERTIFICATION_TRACKS) {
    const trackState = states[track] ?? readTrackSrsState(track);
    writeTrackSrsState(track, trackState);
  }
}

export function flattenTrackSrsStates(
  states: Partial<Record<CertificationTrack, Record<string, CardSRSData>>> = {}
): Record<string, CardSRSData> {
  return CERTIFICATION_TRACKS.reduce((accumulator, track) => {
    const trackState = states[track] ?? readTrackSrsState(track);
    return { ...accumulator, ...trackState };
  }, {} as Record<string, CardSRSData>);
}

export function persistSrsMapByTrack(srsMap: Record<string, CardSRSData>): void {
  const states = readAllTrackSrsStates();

  for (const track of CERTIFICATION_TRACKS) {
    states[track] = {};
  }

  Object.entries(srsMap).forEach(([cardId, srsData]) => {
    const normalizedCardId = cardId.toLowerCase();
    const matchingTrack = CERTIFICATION_TRACKS.find((track) => normalizedCardId.startsWith(track));
    if (!matchingTrack) {
      return;
    }

    states[matchingTrack][cardId] = srsData;
  });

  writeAllTrackSrsStates(states);
}

export function mergeSrsProgress(
  local: Record<string, CardSRSData>,
  remote: Record<string, CardSRSData>,
): Record<string, CardSRSData> {
  const merged = { ...local };

  Object.entries(remote).forEach(([cardId, remoteState]) => {
    const localState = local[cardId];
    if (!localState || (remoteState.lastReviewed ?? 0) > (localState.lastReviewed ?? 0)) {
      merged[cardId] = remoteState;
    }
  });

  return merged;
}
