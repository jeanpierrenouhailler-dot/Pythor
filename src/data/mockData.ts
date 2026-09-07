import {
  UserProfile,
  CodingChallenge,
  SkillModule,
  Flashcard,
  DailyQuest,
  RealProject,
  RecentSubmission,
  LeaderboardUser,
} from '../types';
import {
  pcepModulesData,
  pcepChallengesData,
  pcepFlashcardsData,
  pcepMockExamQuestions,
} from './pcepData';
import {
  availableCertificationTracks,
  pcapModulesData,
  pcapChallengesData,
  pcapFlashcardsData,
  pcapMockExamQuestions,
  pcapSection1Flashcards,
  pcapSection2Flashcards,
  pcapSection3Flashcards,
} from './pcapData';

export {
  pcepModulesData,
  pcepChallengesData,
  pcepFlashcardsData,
  pcepMockExamQuestions,
  availableCertificationTracks,
  pcapModulesData,
  pcapChallengesData,
  pcapFlashcardsData,
  pcapMockExamQuestions,
  pcapSection1Flashcards,
  pcapSection2Flashcards,
  pcapSection3Flashcards,
};

export const allChallenges: Record<string, CodingChallenge> = {
  ...pcepChallengesData,
  ...pcapChallengesData,
};

export const currentUser: UserProfile = {
  name: 'Alexandre D.',
  avatarUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCthiOG3BeRSCM45_i3lUwdjpt0N6zvQaaGAaZlWu8ExoX97OXN7Ke3JGoElvBbLkOGM9jqu4yT96eTCdoaZ5BGNF3nuhhUhfMn9XVhlmOemIMgXogCAIICjwAcHj-mC3lkpYIZ7QzSb4RLUNKJND4O2tduQC-msDcFk7BuXtr1xU-89R3O1vd7s6TRnL9xZWEEhyl9KSdyPiOpGMEXgeha4ZJRrj-s9ah8VKJQXE2dhZm6t7tKgnYHEQ',
  levelTitle: 'PCEP-30-02 Candidate (Lvl 5)',
  level: 5,
  streakDays: 14,
  totalXp: 2450,
  weeklyXp: 320,
  completedChallenges: 48,
  firstTryPassRate: 98,
  srsCardsLearned: 184,
  srsRetentionRate: 91,
  diamondLeagueRank: 3,
};

export const defaultChallenge: CodingChallenge =
  pcepChallengesData['challenge-pcep-2-3'] || Object.values(pcepChallengesData)[0];

export const allPcepChallenges = pcepChallengesData;

export const skillModulesData: SkillModule[] = pcepModulesData;

export const flashcardsData: Flashcard[] = pcepFlashcardsData;

export const mockExamQuestions = pcepMockExamQuestions;

export const dailyQuestsData: DailyQuest[] = [
  {
    id: 'quest-1',
    title: 'Solve 1 live coding challenge',
    statusText: 'Completed at 10:15 AM',
    xpReward: 50,
    completed: true,
  },
  {
    id: 'quest-2',
    title: 'Review 10 SRS Flashcards',
    statusText: 'Completed at 11:30 AM',
    xpReward: 30,
    completed: true,
  },
  {
    id: 'quest-3',
    title: 'Write a Python function without hint unlocks',
    statusText: 'In progress in IDE Studio',
    xpReward: 80,
    completed: false,
  },
];

export const realProjectsData: RealProject[] = [
  {
    id: 'proj-1',
    title: 'CSV Data Processing & Reporting Bot',
    description:
      'Parse, aggregate, and generate automated financial metrics with robust file I/O and exception handling.',
    badge: '80% Unlocked',
    progressPercent: 80,
  },
  {
    id: 'proj-2',
    title: 'Web Scraper with BeautifulSoup',
    description:
      'Structured extraction, resilient pagination traversal, and sanitization on simulated e-commerce catalogs.',
    badge: 'Level 6 Required',
    progressPercent: 0,
    locked: true,
    requiredLevel: 6,
  },
  {
    id: 'proj-3',
    title: 'RESTful API with Flask & SQLite',
    description:
      'JWT token authentication routes, endpoint schemas, and persistent database CRUD transactions.',
    badge: 'Locked',
    progressPercent: 0,
    locked: true,
  },
];

export const recentSubmissionsData: RecentSubmission[] = [
  {
    id: 'sub-1',
    title: 'Inverted Dictionary Comprehension',
    filename: 'dict_invert.py',
    timeAgo: '2h ago',
    assertionsPassed: '12/12 assertions passed',
    xpEarned: 45,
    status: 'completed',
    challengeId: 'challenge-42',
  },
  {
    id: 'sub-2',
    title: 'Tuple Filtering with Lambda Expressions',
    filename: 'lambda_filter.py',
    timeAgo: 'Yesterday at 7:42 PM',
    assertionsPassed: '8/8 assertions passed',
    xpEarned: 35,
    status: 'completed',
    challengeId: 'challenge-42',
  },
  {
    id: 'sub-3',
    title: 'Custom Context Manager `with` Protocol',
    filename: 'context_mgr.py',
    timeAgo: '2 days ago',
    assertionsPassed: 'Draft saved (4/6 tests)',
    xpEarned: 0,
    status: 'draft',
    challengeId: 'challenge-42',
  },
];

export const leaderboardUsersData: LeaderboardUser[] = [
  {
    rank: 1,
    name: 'Clara M.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    xp: 3120,
  },
  {
    rank: 2,
    name: 'Thomas V.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    xp: 2890,
  },
  {
    rank: 3,
    name: 'Alexandre D. (You)',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCthiOG3BeRSCM45_i3lUwdjpt0N6zvQaaGAaZlWu8ExoX97OXN7Ke3JGoElvBbLkOGM9jqu4yT96eTCdoaZ5BGNF3nuhhUhfMn9XVhlmOemIMgXogCAIICjwAcHj-mC3lkpYIZ7QzSb4RLUNKJND4O2tduQC-msDcFk7BuXtr1xU-89R3O1vd7s6TRnL9xZWEEhyl9KSdyPiOpGMEXgeha4ZJRrj-s9ah8VKJQXE2dhZm6t7tKgnYHEQ',
    xp: 2450,
    isCurrentUser: true,
  },
  {
    rank: 4,
    name: 'Sami B.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    xp: 2310,
  },
  {
    rank: 5,
    name: 'Elena K.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    xp: 2180,
  },
];
