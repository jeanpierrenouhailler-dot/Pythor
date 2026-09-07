export type CardDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

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
