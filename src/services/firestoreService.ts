import {
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  Unsubscribe,
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { Flashcard, CardSRSData, UserExamAttemptRecord, CertificationTrack } from '../types';

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
  const docId = sanitizeDocId(card.id);
  const path = `users/${userId}/customCards/${docId}`;
  try {
    const cardRef = doc(db, 'users', userId, 'customCards', docId);
    const snap = await getDoc(cardRef);

    const basePayload: Record<string, any> = {
      id: docId,
      userId,
      track: card.track || 'pcap',
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
  cardId: string
): Promise<void> {
  const docId = sanitizeDocId(cardId);
  const path = `users/${userId}/customCards/${docId}`;
  try {
    const cardRef = doc(db, 'users', userId, 'customCards', docId);
    await deleteDoc(cardRef);
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
      const cards: Flashcard[] = snapshot.docs.map((docSnap) => {
        const d = docSnap.data();
        return {
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
      });
      onCards(cards);
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
  cardId: string,
  srsData: CardSRSData
): Promise<void> {
  const docId = sanitizeDocId(cardId);
  const path = `users/${userId}/srsProgress/${docId}`;
  try {
    const srsRef = doc(db, 'users', userId, 'srsProgress', docId);
    const payload = {
      cardId: docId,
      userId,
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

/**
 * Real-time listener for user SRS progress
 */
export function subscribeUserSrsProgress(
  userId: string,
  onProgress: (srsMap: Record<string, CardSRSData>) => void
): Unsubscribe {
  const path = `users/${userId}/srsProgress`;
  const colRef = collection(db, 'users', userId, 'srsProgress');

  return onSnapshot(
    colRef,
    (snapshot) => {
      const srsMap: Record<string, CardSRSData> = {};
      snapshot.docs.forEach((docSnap) => {
        const d = docSnap.data();
        srsMap[d.cardId] = {
          repetitions: d.repetitions,
          interval: d.interval,
          easeFactor: d.easeFactor,
          status: d.status,
          lastReviewed: d.lastReviewed,
          dueDate: d.dueDate,
        };
      });
      onProgress(srsMap);
    },
    (error) => {
      handleFirestoreError(error, OperationType.LIST, path);
    }
  );
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
  onAttempts: (attempts: UserExamAttemptRecord[]) => void
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
    }
  );
}
