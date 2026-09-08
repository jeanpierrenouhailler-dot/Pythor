export type CardDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type AppView = 'dashboard' | 'flashcards' | 'exam' | 'cheatsheet' | 'codelab';

export interface Flashcard {
  id: string;
  cardType: string;
  topic: string;
  category: string;
  difficulty: CardDifficulty;
  factor: string;
  intervalDays: number;
  chapter: string;
  section: string;
  question: string;
  codeSnippet: string;
  stdoutExpected: string;
  explanationTitle: string;
  explanationText: string;
  complexityInfo?: string;
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
