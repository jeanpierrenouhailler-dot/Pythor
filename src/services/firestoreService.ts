import {
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  runTransaction,
  Unsubscribe,
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { Flashcard, CardSRSData, UserExamAttemptRecord, CertificationTrack } from '../types';
import { CERTIFICATION_TRACKS, isSrsStateNewer, SrsResetOperation } from '../utils/srsStorage';

export interface TrackSrsSnapshot {
  generation: number;
  states: Record<string, CardSRSData>;
}

export type UserSrsSnapshot = Partial<Record<CertificationTrack, TrackSrsSnapshot>>;

/**
 * Clean and sanitize string identifier for Firestore document key
 */
export function sanitizeDocId(id: string): string {
  return id.replace(/[^a-zA-Z0-9_\-]/g, '_').slice(0, 128) || 'doc_' + Date.now();
}

/**
 * Synchronize or initialize user profile in Firestore
 */
export async function syncUserProfile(
  userId: string,
  email: string,
  displayName?: string | null,
  photoURL?: string | null,
  selectedTrack?: CertificationTrack
): Promise<void> {
  const path = `users/${userId}`;
  try {
    const userRef = doc(db, 'users', userId);
    const snap = await getDoc(userRef);

    if (!snap.exists()) {
      // First-time creation
      const payload: Record<string, any> = {
        uid: userId,
        email: email || '',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };
      if (displayName) payload.displayName = displayName.slice(0, 128);
      if (photoURL) payload.photoURL = photoURL.slice(0, 1024);
      if (selectedTrack) payload.selectedTrack = selectedTrack;

      await setDoc(userRef, payload);
    } else {
      // Existing profile update
      const existingData = snap.data();
      const payload: Record<string, any> = {
        uid: userId,
        email: email || existingData.email,
        createdAt: existingData.createdAt,
        updatedAt: serverTimestamp(),
      };
      if (displayName) payload.displayName = displayName.slice(0, 128);
      else if (existingData.displayName) payload.displayName = existingData.displayName;

      if (photoURL) payload.photoURL = photoURL.slice(0, 1024);
      else if (existingData.photoURL) payload.photoURL = existingData.photoURL;

      if (selectedTrack) payload.selectedTrack = selectedTrack;
      else if (existingData.selectedTrack) payload.selectedTrack = existingData.selectedTrack;

      await setDoc(userRef, payload);
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

/**
 * Save or update a user custom flashcard in Firestore
 */
export async function saveUserCustomCard(
  userId: string,
  card: Flashcard
): Promise<void> {
  if (!/^[a-zA-Z0-9_-]{1,120}$/.test(card.id)) {
    throw new Error(`Invalid custom card id: ${card.id}`);
  }
  const track = card.track || 'pcap';
  const docId = `${track}__${card.id}`;
  const path = `users/${userId}/customCards/${docId}`;
  try {
    const cardRef = doc(db, 'users', userId, 'customCards', docId);
    const snap = await getDoc(cardRef);

    const basePayload: Record<string, any> = {
      id: card.id,
      userId,
      track,
      section: (card.section || 'Section 1').slice(0, 128),
      chapter: (card.chapter || 'Custom').slice(0, 128),
      difficulty: card.difficulty || 'Intermediate',
      question: (card.question || '').slice(0, 2000),
      updatedAt: serverTimestamp(),
    };

    if (card.codeSnippet) {
      basePayload.codeSnippet = card.codeSnippet.slice(0, 5000);
    }
    if (card.correctAnswer !== undefined) {
      basePayload.correctAnswer = String(card.correctAnswer).slice(0, 1000);
    }
    if (card.explanation || card.explanationText) {
      basePayload.explanation = (card.explanation || card.explanationText || '').slice(0, 5000);
    }
    if (Array.isArray(card.tags)) {
      basePayload.tags = card.tags.slice(0, 20).map((t) => String(t).slice(0, 64));
    }

    if (!snap.exists()) {
      basePayload.createdAt = serverTimestamp();
    } else {
      basePayload.createdAt = snap.data().createdAt;
    }

    await setDoc(cardRef, basePayload);
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

/**
 * Delete a user custom flashcard from Firestore
 */
export async function deleteUserCustomCard(
  userId: string,
  track: CertificationTrack,
  cardId: string
): Promise<void> {
  const docId = `${track}__${sanitizeDocId(cardId)}`;
  const legacyDocId = sanitizeDocId(cardId);
  const path = `users/${userId}/customCards/${docId}`;
  try {
    const cardRef = doc(db, 'users', userId, 'customCards', docId);
    await Promise.all([
      deleteDoc(cardRef),
      ...(legacyDocId === docId ? [] : [deleteDoc(doc(db, 'users', userId, 'customCards', legacyDocId))]),
    ]);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

/**
 * Real-time listener for user custom flashcards
 */
export function subscribeUserCustomCards(
  userId: string,
  onCards: (cards: Flashcard[]) => void
): Unsubscribe {
  const path = `users/${userId}/customCards`;
  const colRef = collection(db, 'users', userId, 'customCards');

  return onSnapshot(
    colRef,
    (snapshot) => {
      const cardsByTrackAndId = new Map<string, Flashcard>();
      snapshot.docs.forEach((docSnap) => {
        const d = docSnap.data();
        const card: Flashcard = {
          id: d.id,
          track: d.track,
          section: d.section,
          chapter: d.chapter,
          difficulty: d.difficulty,
          question: d.question,
          codeSnippet: d.codeSnippet || '',
          correctAnswer: d.correctAnswer,
          explanation: d.explanation,
          explanationText: d.explanation,
          tags: d.tags || [],
          isUserCreated: true,
        };
        cardsByTrackAndId.set(`${card.track ?? 'pcap'}:${card.id}`, card);
      });
      onCards([...cardsByTrackAndId.values()]);
    },
    (error) => {
      handleFirestoreError(error, OperationType.LIST, path);
    }
  );
}

/**
 * Save an individual card's SRS Spaced Repetition progress to Firestore
 */
export async function saveUserSrsItem(
  userId: string,
  track: CertificationTrack,
  cardId: string,
  srsData: CardSRSData,
  generation: number,
): Promise<void> {
  if (!/^[a-zA-Z0-9_-]{1,120}$/.test(cardId)) {
    throw new Error(`Invalid SRS card id: ${cardId}`);
  }
  const docId = `${track}__${cardId}`;
  const path = `users/${userId}/srsProgress/${docId}`;
  try {
    const srsRef = doc(db, 'users', userId, 'srsProgress', docId);
    const payload = {
      cardId,
      userId,
      track,
      generation,
      repetitions: Number(srsData.repetitions) || 0,
      interval: Number(srsData.interval) || 1,
      easeFactor: Number(srsData.easeFactor) || 2.5,
      status: srsData.status || 'learning',
      lastReviewed: Number(srsData.lastReviewed) || Date.now(),
      dueDate: Number(srsData.dueDate) || Date.now(),
      updatedAt: serverTimestamp(),
    };
    await setDoc(srsRef, payload, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function syncUserSrsReset(
  userId: string,
  track: CertificationTrack,
  operation: SrsResetOperation,
): Promise<number> {
  const path = `users/${userId}/srsResets/${track}`;
  const resetRef = doc(db, 'users', userId, 'srsResets', track);
  try {
    return await runTransaction(db, async (transaction) => {
      const snapshot = await transaction.get(resetRef);
      const existing = snapshot.exists() ? snapshot.data() : undefined;
      if (existing?.operationId === operation.operationId) {
        return Number(existing.generation) || operation.generation;
      }

      const generation = Math.max(operation.generation, (Number(existing?.generation) || 0) + 1);
      transaction.set(resetRef, {
        track,
        userId,
        generation,
        operationId: operation.operationId,
        updatedAt: serverTimestamp(),
      });
      return generation;
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

/**
 * Real-time listener for user SRS progress
 */
export function subscribeUserSrsProgress(
  userId: string,
  onProgress: (snapshot: UserSrsSnapshot) => void,
): Unsubscribe {
  const progressPath = `users/${userId}/srsProgress`;
  const resetsPath = `users/${userId}/srsResets`;
  const progressRef = collection(db, 'users', userId, 'srsProgress');
  const resetsRef = collection(db, 'users', userId, 'srsResets');
  let progressSnapshot: UserSrsSnapshot | null = null;
  let resetGenerations: Partial<Record<CertificationTrack, number>> | null = null;
  const publish = () => {
    if (!progressSnapshot || !resetGenerations) return;
    const result: UserSrsSnapshot = {};
    for (const track of CERTIFICATION_TRACKS) {
      const progress = progressSnapshot[track] ?? { generation: 0, states: {} };
      const generation = Math.max(resetGenerations[track] ?? 0, progress.generation);
      result[track] = {
        generation,
        states: generation === progress.generation ? progress.states : {},
      };
    }
    onProgress(result);
  };

  const unsubscribeProgress = onSnapshot(
    progressRef,
    (snapshot) => {
      const progress: UserSrsSnapshot = {};
      snapshot.docs.forEach((docSnap) => {
        const data = docSnap.data();
        const cardId = typeof data.cardId === 'string' ? data.cardId : '';
        const track = CERTIFICATION_TRACKS.includes(data.track)
          ? data.track as CertificationTrack
          : CERTIFICATION_TRACKS.find((candidate) =>
              cardId.toLowerCase().startsWith(candidate.toLowerCase()),
            );
        if (!track || !cardId) return;

        const documentGeneration = Number(data.generation) || 0;
        const current = progress[track] ?? { generation: documentGeneration, states: {} };
        if (documentGeneration > current.generation) {
          current.generation = documentGeneration;
          current.states = {};
        }
        if (documentGeneration < current.generation) {
          progress[track] = current;
          return;
        }
        const nextState: CardSRSData = {
          repetitions: data.repetitions,
          interval: data.interval,
          easeFactor: data.easeFactor,
          status: data.status,
          lastReviewed: data.lastReviewed,
          dueDate: data.dueDate,
        };
        const previous = current.states[cardId];
        if (!previous || isSrsStateNewer(nextState, previous) || (
          nextState.repetitions === previous.repetitions
          && nextState.lastReviewed === previous.lastReviewed
        )) {
          current.states[cardId] = nextState;
        }
        progress[track] = current;
      });
      progressSnapshot = progress;
      publish();
    },
    (error) => handleFirestoreError(error, OperationType.LIST, progressPath),
  );
  const unsubscribeResets = onSnapshot(
    resetsRef,
    (snapshot) => {
      const generations: Partial<Record<CertificationTrack, number>> = {};
      snapshot.docs.forEach((docSnap) => {
        const data = docSnap.data();
        if (CERTIFICATION_TRACKS.includes(data.track)) {
          generations[data.track as CertificationTrack] = Number(data.generation) || 0;
        }
      });
      resetGenerations = generations;
      publish();
    },
    (error) => handleFirestoreError(error, OperationType.LIST, resetsPath),
  );

  return () => {
    unsubscribeProgress();
    unsubscribeResets();
  };
}

/**
 * Record an immutable completed exam attempt in Firestore
 */
export async function saveUserExamAttempt(
  userId: string,
  attempt: UserExamAttemptRecord
): Promise<void> {
  const docId = sanitizeDocId(attempt.id);
  const path = `users/${userId}/examAttempts/${docId}`;
  try {
    const attemptRef = doc(db, 'users', userId, 'examAttempts', docId);
    const payload = {
      id: docId,
      userId,
      track: attempt.track,
      section: (attempt.section || 'All').slice(0, 128),
      score: Number(attempt.score) || 0,
      totalQuestions: Number(attempt.totalQuestions) || 0,
      percentage: Number(attempt.percentage) || 0,
      passed: Boolean(attempt.passed),
      durationSeconds: Number(attempt.durationSeconds) || 0,
      completedAt: serverTimestamp(),
    };
    await setDoc(attemptRef, payload);
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

/**
 * Real-time listener for user exam attempts history
 */
export function subscribeUserExamAttempts(
  userId: string,
  onAttempts: (attempts: UserExamAttemptRecord[]) => void,
  onError?: (error: Error) => void
): Unsubscribe {
  const path = `users/${userId}/examAttempts`;
  const colRef = collection(db, 'users', userId, 'examAttempts');

  return onSnapshot(
    colRef,
    (snapshot) => {
      const attempts: UserExamAttemptRecord[] = snapshot.docs.map((docSnap) => {
        const d = docSnap.data();
        return {
          id: d.id,
          userId: d.userId,
          track: d.track,
          section: d.section,
          score: d.score,
          totalQuestions: d.totalQuestions,
          percentage: d.percentage,
          passed: d.passed,
          durationSeconds: d.durationSeconds,
          completedAt: d.completedAt?.toDate ? d.completedAt.toDate().toISOString() : undefined,
        };
      });
      onAttempts(attempts);
    },
    (error) => {
      handleFirestoreError(error, OperationType.LIST, path);
      onError?.(error);
    }
  );
}
