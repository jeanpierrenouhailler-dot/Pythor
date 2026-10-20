export type CardDifficulty =
  | 'Beginner'
  | 'Intermediate'
  | 'Advanced'
  | 'beginner'
  | 'intermediate'
  | 'advanced';

export type AppView = 'dashboard' | 'flashcards' | 'exam' | 'cheatsheet' | 'codelab';

export type CertificationTrack = 'pcap' | 'pcep' | 'pcpp' | 'pced' | 'pcad' | 'pcet' | 'pcat' | 'pces' | 'pcea' | 'pcei';

export interface CertificationTrackInfo {
  id: CertificationTrack;
  code: string;
  name: string;
  shortName: string;
  level: string;
  officialRef: string;
  totalSections: number;
  durationMinutes: number;
  questionCount: number;
  passingScore: number;
  description: string;
}

export interface Flashcard {
  id: string;
  track?: CertificationTrack;
  cardType?: string;
  topic?: string;
  category?: string;
  difficulty: CardDifficulty;
  factor?: string;
  intervalDays?: number;
  chapter: string;
  section: string;
  question: string;
  codeSnippet: string;
  stdoutExpected?: string;
  explanationTitle?: string;
  explanationText?: string;
  complexityInfo?: string;
  options?: string[];
  correctOption?: number;
  correctAnswer?: string | number;
  explanation?: string;
  deepDive?: string;
  officialRef?: string;
  tags?: string[];
  isUserCreated?: boolean;
}

export interface SyllabusChapter {
  id: string;
  title: string;
  weight?: string;
  examObjectives?: string[];
  cardCount: number;
}

export interface SyllabusSection {
  id: string;
  number: number;
  title: string;
  weight: string;
  description: string;
  chapters: SyllabusChapter[];
}

export interface CardSRSData {
  repetitions: number;
  interval: number;
  easeFactor: number;
  lastReviewed?: number;
  dueDate?: number;
  status: 'new' | 'learning' | 'review' | 'mastered';
}

export interface UserExamAttemptRecord {
  id: string;
  userId: string;
  track: CertificationTrack;
  section: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  durationSeconds: number;
  completedAt?: string;
}

export interface UserProfileData {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  selectedTrack?: CertificationTrack;
  createdAt?: string;
  updatedAt?: string;
}

export type SystemUpdateStatus =
  | 'idle'
  | 'checking'
  | 'available'
  | 'downloading'
  | 'ready'
  | 'up-to-date'
  | 'error';

export type UpdateChannel = 'stable' | 'beta' | 'nightly';

export interface UpdateLogEntry {
  id: string;
  timestamp: number;
  type: 'check' | 'background_check' | 'download' | 'staged' | 'applied' | 'forced' | 'info';
  message: string;
  version: string;
}

export interface SystemSettingsState {
  currentVersion: string;
  buildNumber: string;
  releaseDate: string;
  lastChecked: number | null;
  autoUpdateEnabled: boolean;
  checkIntervalMinutes: number;
  updateChannel: UpdateChannel;
  status: SystemUpdateStatus;
  availableVersion: string | null;
  releaseNotes: string[] | null;
  progress: number;
  downloadSize: string;
  autoPreparedInBackground: boolean;
  lastLogMessage: string;
  updateHistory: UpdateLogEntry[];
}
