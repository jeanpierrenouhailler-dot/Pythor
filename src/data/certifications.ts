import {
  Brain,
  Bug,
  Cpu,
  Database,
  Layers,
  Lock,
  LucideIcon,
  Terminal,
  Zap,
} from 'lucide-react';
import { CertificationTrack, CertificationTrackInfo, SyllabusSection } from '../types';
import { CERTIFICATION_IDS } from './certificationIds';
import { pcapTrackInfo, pcapSyllabusSections } from './metadata/pcap';
import { pcepTrackInfo, pcepSyllabusSections } from './metadata/pcep';
import { pcppTrackInfo, pcppSyllabusSections } from './metadata/pcpp';
import { pcedTrackInfo, pcedSyllabusSections } from './metadata/pced';
import { pcadTrackInfo, pcadSyllabusSections } from './metadata/pcad';
import { pcetTrackInfo, pcetSyllabusSections } from './metadata/pcet';
import { pcatTrackInfo, pcatSyllabusSections } from './metadata/pcat';
import { pcesTrackInfo, pcesSyllabusSections } from './metadata/pces';
import { pceaTrackInfo, pceaSyllabusSections } from './metadata/pcea';
import { pceiTrackInfo, pceiSyllabusSections } from './metadata/pcei';

export interface CertificationMetadata {
  id: CertificationTrack;
  info: CertificationTrackInfo;
  syllabus: SyllabusSection[];
  icon: LucideIcon;
  accentClass: string;
  nameFr: string;
  levelFr: string;
  descriptionFr: string;
}

export const CERTIFICATIONS: CertificationMetadata[] = [
  {
    id: 'pcep', info: pcepTrackInfo, syllabus: pcepSyllabusSections,
    icon: Terminal, accentClass: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    nameFr: 'Certified Entry-Level Python Programmer', levelFr: 'Débutant',
    descriptionFr: 'Fondations : syntaxe, types primitifs, entrées/sorties, boucles, conditions et fonctions.',
  },
  {
    id: 'pcap', info: pcapTrackInfo, syllabus: pcapSyllabusSections,
    icon: Layers, accentClass: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
    nameFr: 'Certified Associate in Python Programming', levelFr: 'Associé',
    descriptionFr: 'POO, héritage, exceptions avancées, modules, closures, générateurs et entrées/sorties fichiers.',
  },
  {
    id: 'pcpp', info: pcppTrackInfo, syllabus: pcppSyllabusSections,
    icon: Cpu, accentClass: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
    nameFr: 'Certified Professional in Python Programming 1', levelFr: 'Professionnel',
    descriptionFr: 'POO avancée, design patterns, interfaces graphiques, réseau, bases de données et journalisation.',
  },
  {
    id: 'pced', info: pcedTrackInfo, syllabus: pcedSyllabusSections,
    icon: Database, accentClass: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    nameFr: 'Certified Entry-Level Data Analyst with Python', levelFr: 'Analyste de données débutant',
    descriptionFr: 'Concepts des données, NumPy, pandas, statistiques descriptives et visualisation.',
  },
  {
    id: 'pcad', info: pcadTrackInfo, syllabus: pcadSyllabusSections,
    icon: Database, accentClass: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
    nameFr: 'Certified Associate Data Analyst with Python', levelFr: 'Analyste de données associé',
    descriptionFr: 'Acquisition, pandas, statistiques inférentielles, modélisation et visualisation.',
  },
  {
    id: 'pcet', info: pcetTrackInfo, syllabus: pcetSyllabusSections,
    icon: Bug, accentClass: 'border-rose-500/30 bg-rose-500/10 text-rose-400',
    nameFr: 'Certified Entry-Level Tester with Python', levelFr: 'Testeur débutant',
    descriptionFr: 'Principes du test logiciel, assertions, tests unitaires, fixtures et reporting.',
  },
  {
    id: 'pcat', info: pcatTrackInfo, syllabus: pcatSyllabusSections,
    icon: Bug, accentClass: 'border-teal-500/30 bg-teal-500/10 text-teal-400',
    nameFr: 'Certified Associate Tester with Python', levelFr: 'Testeur associé',
    descriptionFr: 'Automatisation pytest, fixtures, mocking, tests d’intégration et couverture.',
  },
  {
    id: 'pces', info: pcesTrackInfo, syllabus: pcesSyllabusSections,
    icon: Lock, accentClass: 'border-red-500/30 bg-red-500/10 text-red-400',
    nameFr: 'Certified Entry-Level Security Specialist with Python', levelFr: 'Spécialiste sécurité débutant',
    descriptionFr: 'Cybersécurité, cryptographie, analyse réseau et programmation défensive.',
  },
  {
    id: 'pcea', info: pceaTrackInfo, syllabus: pceaSyllabusSections,
    icon: Zap, accentClass: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    nameFr: 'Certified Entry-Level Automation Specialist with Python', levelFr: 'Spécialiste automatisation débutant',
    descriptionFr: 'Automatisation système, fichiers, web, API REST et formats CSV/JSON.',
  },
  {
    id: 'pcei', info: pceiTrackInfo, syllabus: pceiSyllabusSections,
    icon: Brain, accentClass: 'border-violet-500/30 bg-violet-500/10 text-violet-400',
    nameFr: 'Certified Entry-Level AI Specialist with Python', levelFr: 'Spécialiste IA débutant',
    descriptionFr: 'Fondamentaux du machine learning, scikit-learn, NLP et éthique de l’IA.',
  },
];

export const CERTIFICATION_BY_ID = Object.fromEntries(
  CERTIFICATIONS.map((certification) => [certification.id, certification]),
) as Record<CertificationTrack, CertificationMetadata>;

export { CERTIFICATION_IDS };
