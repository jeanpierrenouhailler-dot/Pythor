import { CardSRSData, CertificationTrack, LastStudyActivity } from '../types';
import { CERTIFICATION_IDS } from '../data/certificationIds';

export const CERTIFICATION_TRACKS: CertificationTrack[] = CERTIFICATION_IDS;

let activeUserId: string | null = null;

export function setSrsStorageUserId(userId: string | null): void {
  activeUserId = userId;
}

function getScopedKey(key: string): string {
  return activeUserId ? `py_user_${encodeURIComponent(activeUserId)}_${key}` : key;
}

function getPendingResetsKey(): string {
  return getScopedKey('srs_pending_resets');
}

export function getStudyActivityStorageKey(userId = activeUserId): string {
  return userId ? `py_user_${encodeURIComponent(userId)}_last_study_activity` : 'py_last_study_activity';
}

export interface SrsResetOperation {
  generation: number;
  operationId: string;
  cleared?: boolean;
  userId?: string;
}

export function getSrsStorageKey(track: CertificationTrack = 'pcap'): string {
  return getScopedKey(`${track}_srs_state`);
}

function getGenerationKey(track: CertificationTrack): string {
  return getScopedKey(`${track}_srs_generation`);
}

function createOperationId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `reset-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function readTrackSrsState(track: CertificationTrack = 'pcap'): Record<string, CardSRSData> {
  try {
    if (readPendingTrackResets()[track]?.cleared === false) return {};
    const saved = localStorage.getItem(getSrsStorageKey(track));
    if (saved) return JSON.parse(saved) as Record<string, CardSRSData>;
  } catch {
    // Ignore malformed local storage payloads and fall back to an empty state.
  }
  return {};
}

export function writeTrackSrsState(track: CertificationTrack, state: Record<string, CardSRSData>): void {
  try {
    localStorage.setItem(getSrsStorageKey(track), JSON.stringify(state));
  } catch {
    // Preserve the existing best-effort behavior for ordinary review updates.
  }
}

export function readTrackSrsGeneration(track: CertificationTrack): number {
  try {
    const stored = Number(localStorage.getItem(getGenerationKey(track))) || 0;
    const pending = readPendingTrackResets()[track]?.generation ?? 0;
    return Math.max(stored, pending);
  } catch {
    return 0;
  }
}

export function readPendingTrackResets(): Partial<Record<CertificationTrack, SrsResetOperation>> {
  try {
    const serialized = localStorage.getItem(getPendingResetsKey());
    if (!serialized) return {};
    const parsed: unknown = JSON.parse(serialized);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};

    return Object.fromEntries(
      Object.entries(parsed).filter(([track, operation]) =>
        CERTIFICATION_TRACKS.includes(track as CertificationTrack)
        && !!operation
        && typeof operation === 'object'
        && Number.isInteger((operation as SrsResetOperation).generation)
        && (operation as SrsResetOperation).generation > 0
        && typeof (operation as SrsResetOperation).operationId === 'string'
      ),
    ) as Partial<Record<CertificationTrack, SrsResetOperation>>;
  } catch {
    return {};
  }
}

export function queueTrackReset(
  track: CertificationTrack,
  generation = readTrackSrsGeneration(track),
  userId?: string,
): SrsResetOperation {
  const pending = readPendingTrackResets();
  if (pending[track]) return pending[track]!;

  const operation = { generation, operationId: createOperationId(), cleared: true, userId };
  pending[track] = operation;
  localStorage.setItem(getPendingResetsKey(), JSON.stringify(pending));
  return operation;
}

export function completePendingTrackReset(
  track: CertificationTrack,
  operationId: string,
  generation: number,
): void {
  const pending = readPendingTrackResets();
  if (pending[track]?.operationId !== operationId) return;
  localStorage.setItem(getGenerationKey(track), String(Math.max(generation, pending[track]!.generation)));
  delete pending[track];
  localStorage.setItem(getPendingResetsKey(), JSON.stringify(pending));
}

export function resetTrackProgress(track: CertificationTrack, userId?: string): SrsResetOperation | null {
  setSrsStorageUserId(userId ?? null);
  if (!userId) {
    localStorage.setItem(getSrsStorageKey(track), '{}');
    clearTrackActivity(track);
    window.dispatchEvent(new Event('pythor-study-activity'));
    return null;
  }

  const operation = {
    generation: readTrackSrsGeneration(track) + 1,
    operationId: createOperationId(),
    cleared: false,
    userId,
  };
  const pending = readPendingTrackResets();
  pending[track] = operation;

  // Persist the tombstone first so interrupted resets cannot restore old data.
  localStorage.setItem(getPendingResetsKey(), JSON.stringify(pending));
  localStorage.setItem(getGenerationKey(track), String(operation.generation));
  localStorage.setItem(getSrsStorageKey(track), '{}');
  operation.cleared = true;
  pending[track] = operation;
  localStorage.setItem(getPendingResetsKey(), JSON.stringify(pending));

  clearTrackActivity(track);
  window.dispatchEvent(new Event('pythor-study-activity'));
  return operation;
}

function clearTrackActivity(track: CertificationTrack): void {
  try {
    const activityKey = getStudyActivityStorageKey();
    const lastActivity = localStorage.getItem(activityKey);
    if (lastActivity) {
      const activity = JSON.parse(lastActivity) as LastStudyActivity;
      if (activity.track === track) localStorage.removeItem(activityKey);
    }
  } catch {
    // Malformed activity metadata is unrelated to the certification SRS data.
  }
}

export function applyRemoteTrackReset(track: CertificationTrack, generation: number): void {
  const localGeneration = readTrackSrsGeneration(track);
  if (generation <= localGeneration) return;

  localStorage.setItem(getGenerationKey(track), String(generation));
  localStorage.setItem(getSrsStorageKey(track), '{}');
  window.dispatchEvent(new Event('pythor-study-activity'));
}

export function readAllTrackSrsStates(): Record<CertificationTrack, Record<string, CardSRSData>> {
  return CERTIFICATION_TRACKS.reduce((accumulator, track) => {
    accumulator[track] = readTrackSrsState(track);
    return accumulator;
  }, {} as Record<CertificationTrack, Record<string, CardSRSData>>);
}

export function writeAllTrackSrsStates(
  states: Partial<Record<CertificationTrack, Record<string, CardSRSData>>>,
): void {
  for (const track of CERTIFICATION_TRACKS) {
    if (states[track]) writeTrackSrsState(track, states[track]);
  }
}

export function mergeSrsProgress(
  local: Record<string, CardSRSData>,
  remote: Record<string, CardSRSData>,
): Record<string, CardSRSData> {
  const merged = { ...local };

  Object.entries(remote).forEach(([cardId, remoteState]) => {
    const localState = local[cardId];
    if (!localState || isSrsStateNewer(remoteState, localState)) {
      merged[cardId] = remoteState;
    }
  });

  return merged;
}

export function isSrsStateNewer(candidate: CardSRSData, current: CardSRSData): boolean {
  if (candidate.repetitions !== current.repetitions) {
    return candidate.repetitions > current.repetitions;
  }
  return (candidate.lastReviewed ?? 0) > (current.lastReviewed ?? 0);
}

export function reconcileTrackSrsProgress(
  track: CertificationTrack,
  remoteGeneration: number,
  remoteState: Record<string, CardSRSData>,
  userId: string,
): { status: 'pending' | 'needs-reset' | 'remote-reset' | 'merged'; states: Record<string, CardSRSData> } {
  const pending = readPendingTrackResets()[track];
  if (pending) {
    return { status: 'pending', states: readTrackSrsState(track) };
  }

  const localGeneration = readTrackSrsGeneration(track);
  if (remoteGeneration > localGeneration) {
    applyRemoteTrackReset(track, remoteGeneration);
    return { status: 'remote-reset', states: {} };
  }
  if (remoteGeneration < localGeneration) {
    queueTrackReset(track, localGeneration, userId);
    return { status: 'needs-reset', states: readTrackSrsState(track) };
  }

  const states = mergeSrsProgress(readTrackSrsState(track), remoteState);
  writeTrackSrsState(track, states);
  return { status: 'merged', states };
}
