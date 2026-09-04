export type ViewType = 'parcours' | 'ide-studio' | 'flashcards-srs' | 'dashboard' | 'pcep-exam';
export type TrackId = 'pcep-30-02' | 'pcap-31-03';

export interface CertificationTrack {
  id: TrackId;
  code: string; // e.g. "PCEP-30-02" or "PCAP-31-0x"
  fullCode: string; // e.g. "PCEP-30-02" or "PCAP-31-03"
  title: string;
  subtitle: string;
  badgeLevel: string;
  status: 'Active' | 'Available' | 'Mastered';
  sectionsCount: number;
  chaptersRange: string;
  examQuestionsCount: number;
  examDurationMinutes: number;
  passingScorePercent: number;
  description: string;
}

export interface UserProfile {
  name: string;
  avatarUrl: string;
  levelTitle: string;
  level: number;
  streakDays: number;
  totalXp: number;
  weeklyXp: number;
  completedChallenges: number;
  firstTryPassRate: number;
  srsCardsLearned: number;
  srsRetentionRate: number;
  diamondLeagueRank: number;
}

export interface TestCase {
  id: string;
  name: string;
  invocation: string;
  expectedOutput: string;
  actualOutput?: string;
  passed: boolean;
}

export interface HintTier {
  tier: 1 | 2 | 3;
  title: string;
  cost: number;
  content: string;
  unlocked: boolean;
}

export interface CodingChallenge {
  id: string;
  track: string;
  category: string;
  pcepCode?: string; // e.g. "PCEP-30-02 1.1"
  pcepObjective?: string;
  challengeNumber: number;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  xpReward: number;
  estimatedMinutes: number;
  mode: 'free' | 'blanks';
  pedagogicalObjective: string;
  guidelines: string[];
  executionSteps: {
    input: string;
    step1: string;
    step2: string;
    output: string;
  };
  starterCode: string;
  blankCode: string;
  solutionCode: string;
  testCases: TestCase[];
  hints: HintTier[];
  aiFeedback: {
    badge: string;
    title: string;
    text: string;
  };
}

export interface SkillNode {
  id: string;
  pcepCode: string; // e.g. "PCEP-30-02 1.1"
  title: string;
  shortDesc: string;
  fullDesc: string;
  status: 'mastered' | 'active' | 'ready' | 'locked';
  stars?: number;
  duration: string;
  xp: number;
  progressText: string;
  progressPercent: number;
  iconName: string;
  challengeId?: string;
  examWeight?: string;
  syllabusItems?: string[];
  exercises?: {
    title: string;
    time?: string;
    isFinalChallenge?: boolean;
    completed: boolean;
  }[];
  codeSnippet?: string;
}

export interface SkillModule {
  id: string;
  moduleNumber: string;
  pcepBlockCode: string; // e.g. "PCEP-30-02 Block 1"
  title: string;
  examWeightPercent: number; // e.g. 18, 29, 25, 28
  status: 'mastered' | 'active' | 'ready' | 'locked';
  completionText: string;
  syllabusDescription?: string;
  quizStatus?: string;
  nodes: SkillNode[];
}

export interface PcepExamQuestion {
  id: string;
  trackId?: TrackId;
  pcepCode: string; // e.g. "PCEP-30-02 2.3" or "PCAP-31-03 4.2"
  blockNumber: 1 | 2 | 3 | 4 | 5;
  blockName: string;
  question: string;
  codeSnippet?: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  format: 'single_choice' | 'multi_choice' | 'output_prediction';
}

export interface Flashcard {
  id: string;
  cardType: string;
  topic: string;
  category: 'T1: Built-ins' | 'T2: Output' | 'T3: Theory' | 'T4: Bugs';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  factor: string;
  intervalDays: number;
  question: string;
  codeSnippet: string;
  stdoutExpected: string;
  explanationTitle: string;
  explanationText: string;
  complexityInfo: string;
  masteryLevel?: 1 | 2 | 3 | 4; // 1: Review, 2: Hard, 3: Good, 4: Easy
}

export interface DailyQuest {
  id: string;
  title: string;
  statusText: string;
  xpReward: number;
  completed: boolean;
}

export interface RealProject {
  id: string;
  title: string;
  description: string;
  badge: string;
  progressPercent: number;
  locked?: boolean;
  requiredLevel?: number;
}

export interface RecentSubmission {
  id: string;
  title: string;
  filename: string;
  timeAgo: string;
  assertionsPassed: string;
  xpEarned: number;
  status: 'completed' | 'draft';
  challengeId: string;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  avatarUrl: string;
  xp: number;
  isCurrentUser?: boolean;
}
