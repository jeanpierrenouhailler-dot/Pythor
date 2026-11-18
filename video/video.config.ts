import { defineVideoConfig } from '@nouhailler/video-studio';
import tutorielFr from './scenarios/tutoriel-fr';

function buildDemoPreseed(): Record<string, string> {
  const baseMs = Date.parse('2026-11-20T14:30:00+01:00');
  const day = 86400000;

  const pcapSrs: Record<string, {
    repetitions: number;
    interval: number;
    easeFactor: number;
    lastReviewed: number;
    dueDate: number;
    status: 'new' | 'learning' | 'review' | 'mastered';
  }> = {
    'pcap-s1-fc-001': { repetitions: 2, interval: 4, easeFactor: 2.5, lastReviewed: baseMs - 4 * day, dueDate: baseMs - 1 * day, status: 'review' },
    'pcap-s1-fc-002': { repetitions: 2, interval: 3, easeFactor: 2.4, lastReviewed: baseMs - 4 * day, dueDate: baseMs - 1 * day, status: 'review' },
    'pcap-s1-fc-003': { repetitions: 4, interval: 14, easeFactor: 2.65, lastReviewed: baseMs - 2 * day, dueDate: baseMs + 12 * day, status: 'mastered' },
    'pcap-s1-fc-004': { repetitions: 3, interval: 9, easeFactor: 2.55, lastReviewed: baseMs - 3 * day, dueDate: baseMs + 6 * day, status: 'mastered' },
    'pcap-s1-fc-005': { repetitions: 1, interval: 1, easeFactor: 2.36, lastReviewed: baseMs - 1 * day, dueDate: baseMs + 1 * day, status: 'learning' },
    'pcap-s2-fc-001': { repetitions: 2, interval: 5, easeFactor: 2.5, lastReviewed: baseMs - 5 * day, dueDate: baseMs - 1 * day, status: 'review' },
    'pcap-s2-fc-002': { repetitions: 2, interval: 4, easeFactor: 2.45, lastReviewed: baseMs - 5 * day, dueDate: baseMs - 1 * day, status: 'review' },
    'pcap-s2-fc-003': { repetitions: 4, interval: 16, easeFactor: 2.7, lastReviewed: baseMs - 1 * day, dueDate: baseMs + 15 * day, status: 'mastered' },
    'pcap-s2-fc-004': { repetitions: 3, interval: 10, easeFactor: 2.6, lastReviewed: baseMs - 2 * day, dueDate: baseMs + 8 * day, status: 'mastered' },
    'pcap-s4-fc-001': { repetitions: 4, interval: 15, easeFactor: 2.65, lastReviewed: baseMs - 1 * day, dueDate: baseMs + 14 * day, status: 'mastered' },
    'pcap-s4-fc-002': { repetitions: 3, interval: 8, easeFactor: 2.5, lastReviewed: baseMs - 3 * day, dueDate: baseMs + 5 * day, status: 'mastered' },
    'pcap-s4-fc-004': { repetitions: 1, interval: 1, easeFactor: 2.35, lastReviewed: baseMs - 6 * day, dueDate: baseMs + 2 * day, status: 'learning' },
    'pcap-s4-fc-005': { repetitions: 3, interval: 12, easeFactor: 2.6, lastReviewed: baseMs, dueDate: baseMs + 12 * day, status: 'mastered' },
    'pcap-s4-fc-006': { repetitions: 1, interval: 2, easeFactor: 2.4, lastReviewed: baseMs, dueDate: baseMs + 2 * day, status: 'learning' },
  };

  const pcepSrs: Record<string, {
    repetitions: number;
    interval: number;
    easeFactor: number;
    lastReviewed: number;
    dueDate: number;
    status: 'new' | 'learning' | 'review' | 'mastered';
  }> = {
    'pcep-s1-fc-001': { repetitions: 4, interval: 14, easeFactor: 2.6, lastReviewed: baseMs - 2 * day, dueDate: baseMs + 12 * day, status: 'mastered' },
    'pcep-s1-fc-002': { repetitions: 4, interval: 12, easeFactor: 2.55, lastReviewed: baseMs - 3 * day, dueDate: baseMs + 9 * day, status: 'mastered' },
    'pcep-s1-fc-003': { repetitions: 3, interval: 9, easeFactor: 2.5, lastReviewed: baseMs - 1 * day, dueDate: baseMs + 8 * day, status: 'mastered' },
    'pcep-s1-fc-004': { repetitions: 1, interval: 1, easeFactor: 2.35, lastReviewed: baseMs - 1 * day, dueDate: baseMs + 1 * day, status: 'learning' },
  };

  return {
    pythor_legal_accepted: 'true',
    pythor_lang: 'fr',
    pythor_theme: 'dark',
    pythor_novice_mode: 'true',
    py_cert_track: 'pcap',
    py_last_study_activity: JSON.stringify({
      track: 'pcap',
      cardId: 'pcap-s4-fc-001',
      section: 'Section 4',
      chapter: '4.1',
      timestamp: baseMs - 1 * day,
    }),
    pcap_srs_state: JSON.stringify(pcapSrs),
    pcep_srs_state: JSON.stringify(pcepSrs),
  };
}

export default defineVideoConfig({
  name: 'Pythor',
  app: {
    build: 'npm run build',
    staticDir: 'dist',
    spaFallback: true,
  },
  driver: {
    type: 'runtime',
    url: '/',
    targetAttribute: 'data-demo-id',
  },
  layout: 'phone',
  scenarios: [tutorielFr],
  validation: {
    sourceDirs: ['src'],
  },
  output: {
    timeoutMs: 180000,
  },
  theme: {
    brand: 'Pythor',
    logo: '../public/logo.svg',
    colors: {
      bg: '#020617',
      bgTop: '#0f172a',
      bgMid: '#071124',
      surface: '#0f172a',
      line: 'rgba(56, 189, 248, 0.22)',
      text: '#f8fafc',
      dim: '#94a3b8',
      faint: '#64748b',
      accent: '#38bdf8',
      accentLight: '#7dd3fc',
      accentDark: '#0284c7',
      accentSoft: 'rgba(56, 189, 248, 0.14)',
      accentLine: 'rgba(56, 189, 248, 0.35)',
      accentInk: '#020617',
      glowA: 'rgba(56, 189, 248, 0.18)',
      glowB: 'rgba(245, 158, 11, 0.14)',
    },
    labels: {
      chapter: 'Chapitre',
      tutorial: 'Tutoriel',
      intro: 'Introduction',
      outro: 'Conclusion',
    },
  },
  preseed: () => buildDemoPreseed(),
  pronunciations: {
    fr: [
      [/\bPythor\b/g, 'Pitor'],
      [/\bSM-2\b/g, 'S M 2'],
      [/\bPWA\b/g, 'P W A'],
      [/\bSTDOUT\b/g, 'sortie standard'],
      [/\b__mro__\b/g, 'M R O'],
      [/\bMRO\b/g, 'M R O'],
      [/\bPCAP\b/g, 'P C A P'],
      [/\bPCEP\b/g, 'P C E P'],
      [/\bPCPP\b/g, 'P C P P'],
      [/\bCode Lab\b/gi, 'Code Labe'],
      [/\bFlashcards?\b/gi, 'flach card'],
      [/\bBlueprint\b/g, 'Blouprint'],
      [/\bGood\b/g, 'Goud'],
      [/\bname mangling\b/gi, 'néme manglingue'],
      [/\bdunder\b/gi, 'deundeur'],
    ],
  },
});
