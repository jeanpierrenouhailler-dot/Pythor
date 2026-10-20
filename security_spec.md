# Security Specification & Threat Model

## Data Invariants & Zero-Trust Principles
1. **User Identity Boundary**: Every document stored under `/users/{userId}/...` strictly requires `request.auth.uid == userId`. No user may read, list, create, update, or delete records belonging to another candidate.
2. **PII and Profile Isolation**: The `/users/{userId}` collection explicitly forbids blanket collection `list` operations to prevent mass user directory scraping.
3. **Email Verification Requirement**: All database mutations (`create`, `update`, `delete`) mandate `request.auth.token.email_verified == true`.
4. **Temporal Integrity**: Immutable fields (`createdAt`, `completedAt`) must equal `request.time` upon creation and must not change on update. Update timestamps (`updatedAt`) must always be refreshed to `request.time`.
5. **Exam History Immutability**: Exam simulation results in `/users/{userId}/examAttempts/{attemptId}` are write-once records; `update` and `delete` operations are strictly forbidden to ensure score integrity.
6. **Path ID Integrity**: Subcollection document IDs (`cardId`, `attemptId`) must be valid alphanumeric strings (`^[a-zA-Z0-9_\-]+$`) with a maximum size of 128 characters, matching the internal payload `id`.

## The Dirty Dozen Payloads (Designed to Fail)
1. **Unauthenticated Write**: Creating a profile without active Firebase Authentication.
2. **Cross-User Snooping**: Reading `/users/victim_user_123` while authenticated as `attacker_user_456`.
3. **Unverified Email Mutation**: Writing custom flashcards when `email_verified == false`.
4. **ID Injection Poisoning**: Submitting a document with a 10KB malicious string as `cardId`.
5. **Ghost Field Shadow Update**: Adding an arbitrary `isAdmin: true` field to `UserProfile`.
6. **Immutable Timestamp Tampering**: Modifying `createdAt` to a backdated timestamp during an update.
7. **Exam History Tampering**: Attempting to execute an `update` on an existing `UserExamAttempt` to change a failing percentage to 100%.
8. **Exam Result Deletion**: Attempting to delete an `examAttempts` document.
9. **Mismatched Author UID**: Creating a card in `/users/{userId}/customCards/{cardId}` where payload `userId != request.auth.uid`.
10. **Collection List Scraping**: Running a collection query against `/users` root without user document targeting.
11. **Excessive Content Injection**: Creating a flashcard with a `question` length exceeding 2000 characters.
12. **Mismatched Track Enum**: Saving a custom card with an invalid track name like `java-cert-01`.
