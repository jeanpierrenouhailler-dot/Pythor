import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  BookMarked,
  CheckCircle2,
  Cloud,
  CloudOff,
  Code2,
  Clock3,
  GraduationCap,
  Layers,
  Library,
  Plus,
  RotateCcw,
  WifiOff,
} from 'lucide-react';
import { AppView, CertificationTrack, CardSRSData, Flashcard, LastStudyActivity } from '../../types';
import { CERTIFICATION_BY_ID } from '../../data/certifications';
import { useAuth } from '../../context/AuthContext';
import { useI18n } from '../../context/I18nContext';
import { getStudyActivityStorageKey, readTrackSrsState } from '../../utils/srsStorage';
import { calculateSrsCardStats } from '../../utils/srsStats';
import {
  ActionCard,
  Badge,
  EmptyState,
  PageContainer,
  PageHeader,
  PrimaryButton,
  ProgressBar,
  SectionHeader,
  StatCard,
} from '../common/ui';

interface DashboardOverviewProps {
  cards: Flashcard[];
  currentTrack: CertificationTrack;
  onNavigate: (view: AppView, section?: string, chapter?: string) => void;
  onOpenCreateCard: () => void;
}

function readLastActivity(userId?: string): LastStudyActivity | null {
  try {
    const stored = localStorage.getItem(getStudyActivityStorageKey(userId));
    if (!stored) return null;
    const activity = JSON.parse(stored) as LastStudyActivity;
    if (
      typeof activity.track !== 'string'
      || typeof activity.cardId !== 'string'
      || typeof activity.section !== 'string'
      || typeof activity.chapter !== 'string'
      || typeof activity.timestamp !== 'number'
    ) return null;
    return activity;
  } catch {
    return null;
  }
}

function countProgress(cards: Flashcard[], states: Record<string, CardSRSData>) {
  const cardStats = calculateSrsCardStats(cards, states);
  const progress = cards.reduce(
    (counts, card) => {
      const state = states[card.id];
      if (!state) return counts;
      if (state.lastReviewed && state.lastReviewed > counts.latestReview) {
        counts.latestReview = state.lastReviewed;
        counts.latestCard = card;
      }
      return counts;
    },
    { latestReview: 0, latestCard: null as Flashcard | null },
  );
  return { ...progress, ...cardStats };
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  cards,
  currentTrack,
  onNavigate,
  onOpenCreateCard,
}) => {
  const { user, syncState } = useAuth();
  const { isFrench } = useI18n();
  const [isOnline, setIsOnline] = useState(() => navigator.onLine);
  const [lastActivity, setLastActivity] = useState(() => readLastActivity(user?.uid));
  const certification = CERTIFICATION_BY_ID[currentTrack];
  const [srsStates, setSrsStates] = useState(() => readTrackSrsState(currentTrack));
  const stats = useMemo(() => countProgress(cards, srsStates), [cards, srsStates]);
  const totalChapters = certification.syllabus.reduce((count, section) => count + section.chapters.length, 0);
  const studiedChapters = certification.syllabus.reduce((count, section) => {
    const sectionName = `Section ${section.number}`;
    return count + section.chapters.filter((chapter) =>
      cards.some((card) => {
        const state = srsStates[card.id];
        return card.section === sectionName && card.chapter === chapter.id && state && state.status !== 'new';
      }),
    ).length;
  }, 0);
  const progressPercent = cards.length ? Math.round((stats.started / cards.length) * 100) : 0;
  const activityCard = lastActivity?.track === currentTrack
    ? cards.find((card) => card.id === lastActivity.cardId)
    : undefined;
  const resumeCard = activityCard ?? stats.latestCard;
  const resumeSection = activityCard?.section ?? resumeCard?.section ?? 'Section 1';
  const resumeChapter = activityCard?.chapter ?? resumeCard?.chapter ?? 'all';
  const welcomeName = user?.displayName?.trim().split(/\s+/)[0];
  const certificationName = isFrench ? certification.nameFr : certification.info.name;
  const lastSessionAt = stats.latestReview
    ? new Intl.DateTimeFormat(isFrench ? 'fr-FR' : 'en-US', { dateStyle: 'medium' }).format(stats.latestReview)
    : null;
  const hasStarted = stats.started > 0;

  useEffect(() => {
    const updateOnline = () => setIsOnline(navigator.onLine);
    const updateActivity = () => setLastActivity(readLastActivity(user?.uid));
    const updateSrsStates = () => setSrsStates(readTrackSrsState(currentTrack));
    window.addEventListener('online', updateOnline);
    window.addEventListener('offline', updateOnline);
    window.addEventListener('pythor-study-activity', updateActivity);
    window.addEventListener('pythor-study-activity', updateSrsStates);
    window.addEventListener('storage', updateSrsStates);
    return () => {
      window.removeEventListener('online', updateOnline);
      window.removeEventListener('offline', updateOnline);
      window.removeEventListener('pythor-study-activity', updateActivity);
      window.removeEventListener('pythor-study-activity', updateSrsStates);
      window.removeEventListener('storage', updateSrsStates);
    };
  }, [currentTrack, user?.uid]);

  useEffect(() => {
    setLastActivity(readLastActivity(user?.uid));
    setSrsStates(readTrackSrsState(currentTrack));
  }, [currentTrack, user?.uid]);

  const quickActions = [
    {
      title: isFrench ? 'Flashcards' : 'Flashcards',
      description: isFrench ? 'Parcourir les cartes du programme' : 'Browse certification flashcards',
      icon: <Layers size={20} />,
      view: 'flashcards' as const,
      trailing: <ArrowRight size={16} />,
    },
    {
      title: isFrench ? 'Répétition espacée' : 'Spaced repetition',
      description: stats.due
        ? (isFrench ? `${stats.due} carte${stats.due > 1 ? 's' : ''} à réviser` : `${stats.due} card${stats.due > 1 ? 's' : ''} due`)
        : (isFrench ? 'Aucune révision en retard' : 'No reviews due'),
      icon: <RotateCcw size={20} />,
      view: 'review' as const,
      trailing: stats.due > 0 ? <Badge tone="warning">{stats.due}</Badge> : <ArrowRight size={16} />,
    },
    {
      title: isFrench ? 'Examens' : 'Exams',
      description: isFrench ? 'Tester vos connaissances' : 'Test your knowledge',
      icon: <GraduationCap size={20} />,
      view: 'exam' as const,
      trailing: <ArrowRight size={16} />,
    },
    {
      title: 'Code Lab',
      description: isFrench ? 'Pratiquer avec des exercices de code' : 'Practice with coding exercises',
      icon: <Code2 size={20} />,
      view: 'codelab' as const,
      trailing: <ArrowRight size={16} />,
    },
    {
      title: 'Cheatsheet',
      description: isFrench ? 'Retrouver les notions essentielles' : 'Review essential concepts',
      icon: <BookMarked size={20} />,
      view: 'cheatsheet' as const,
      trailing: <ArrowRight size={16} />,
    },
    {
      title: isFrench ? 'Mes cartes personnalisées' : 'My custom cards',
      description: isFrench ? 'Créer et réviser vos propres cartes' : 'Create and review your own cards',
      icon: <Library size={20} />,
      view: 'custom-cards' as const,
      trailing: <ArrowRight size={16} />,
    },
  ];

  return (
    <PageContainer className="space-y-8">
      <PageHeader
        eyebrow={isFrench ? certification.info.code : certification.info.code}
        title={`${isFrench ? 'Bonjour' : 'Hello'}${welcomeName ? ` ${welcomeName}` : ''}`}
        description={certificationName}
        actions={<Badge tone="primary">{progressPercent}% {isFrench ? 'étudié' : 'studied'}</Badge>}
      />

      <section className="py-surface grid gap-6 p-5 sm:p-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge tone={hasStarted ? 'primary' : 'neutral'}>
              {hasStarted
                ? (isFrench ? 'Parcours en cours' : 'In progress')
                : (isFrench ? 'Pour commencer' : 'Getting started')}
            </Badge>
            {stats.mastered === cards.length && cards.length > 0 && (
              <Badge tone="success">{isFrench ? 'Toutes les cartes maîtrisées' : 'All cards mastered'}</Badge>
            )}
            {stats.due > 0 && <Badge tone="warning">{isFrench ? 'Révisions en retard' : 'Reviews due'}</Badge>}
          </div>
          <h2 className="text-xl font-semibold text-[var(--py-color-text)] sm:text-2xl">
            {isFrench ? 'Reprendre mon apprentissage' : 'Resume learning'}
          </h2>
          <p className="mt-2 text-sm text-[var(--py-color-text-muted)]">
            {cards.length === 0
              ? (isFrench ? 'Les cartes de ce parcours ne sont pas disponibles pour le moment.' : 'Cards for this certification are unavailable right now.')
              : resumeCard
                ? `${isFrench ? 'Dernier chapitre' : 'Last chapter'} : ${resumeCard.chapter} · ${resumeCard.section}`
                : (isFrench ? 'Aucune activité enregistrée. Commencez par une première série de flashcards.' : 'No activity yet. Start with a set of flashcards.')}
            {lastSessionAt && ` · ${isFrench ? 'Dernière révision' : 'Last review'} ${lastSessionAt}`}
          </p>
          <div className="mt-5 max-w-xl">
            <ProgressBar value={progressPercent} label={isFrench ? 'Cartes étudiées' : 'Cards studied'} showValue />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <PrimaryButton
              onClick={() => onNavigate('flashcards', resumeSection, resumeChapter)}
              disabled={cards.length === 0}
            >
              {resumeCard
                ? (isFrench ? 'Reprendre' : 'Resume')
                : (isFrench ? 'Commencer' : 'Get started')}
              <ArrowRight size={16} className="ml-2 inline" />
            </PrimaryButton>
            <button
              type="button"
              className="py-button py-button--secondary"
              onClick={() => onNavigate('syllabus')}
            >
              <BookOpen size={16} className="mr-2 inline" />
              {isFrench ? 'Voir le programme' : 'View syllabus'}
            </button>
          </div>
        </div>
        {stats.latestReview > 0 && (
          <div className="flex items-center gap-3 rounded-xl border border-[var(--py-color-border)] p-4 lg:min-w-56 lg:flex-col lg:items-start">
            <Clock3 size={20} className="text-[var(--py-color-primary)]" />
            <div>
              <div className="text-xs text-[var(--py-color-text-muted)]">{isFrench ? 'Dernière activité' : 'Last activity'}</div>
              <div className="mt-1 text-sm font-medium">{lastSessionAt}</div>
            </div>
          </div>
        )}
      </section>

      {cards.length === 0 ? (
        <EmptyState
          title={isFrench ? 'Données du parcours indisponibles' : 'Certification data unavailable'}
          message={isFrench ? 'Vous pouvez consulter les autres outils ou réessayer plus tard.' : 'You can still use the other tools or try again later.'}
        />
      ) : (
        <section>
          <SectionHeader title={isFrench ? 'Votre progression' : 'Your progress'} />
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard label={isFrench ? 'Cartes maîtrisées' : 'Mastered cards'} value={stats.mastered} icon={<CheckCircle2 size={20} />} />
            <StatCard label={isFrench ? 'À réviser' : 'Due for review'} value={stats.due} icon={<RotateCcw size={20} />} detail={isFrench ? 'Selon votre répétition espacée' : 'Based on spaced repetition'} />
            <StatCard label={isFrench ? 'En apprentissage' : 'Learning'} value={stats.learning} icon={<Layers size={20} />} />
            <StatCard label={isFrench ? 'Progression globale' : 'Overall progress'} value={`${progressPercent}%`} icon={<CheckCircle2 size={20} />} detail={`${stats.started}/${cards.length} ${isFrench ? 'cartes étudiées' : 'cards studied'}`} />
          </div>
        </section>
      )}

      <section>
        <SectionHeader title={isFrench ? 'Accès rapides' : 'Quick access'} />
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {quickActions.map((action) => (
            <ActionCard
              key={action.view}
              title={action.title}
              description={action.description}
              icon={action.icon}
              trailing={action.trailing}
              onClick={() => onNavigate(action.view)}
            />
          ))}
          <ActionCard
            title={isFrench ? 'Créer une carte' : 'Create a card'}
            description={isFrench ? 'Ajouter une carte à votre collection' : 'Add a card to your collection'}
            icon={<Plus size={20} />}
            trailing={<ArrowRight size={16} />}
            onClick={onOpenCreateCard}
          />
        </div>
      </section>

      <section className="py-surface p-5 sm:p-6">
        <SectionHeader
          title={isFrench ? 'Programme de certification' : 'Certification syllabus'}
          description={isFrench ? 'Un aperçu, sans dérouler tout le catalogue ici.' : 'A concise overview; the full chapter list lives in its own view.'}
          action={
            <button type="button" className="py-button py-button--secondary" onClick={() => onNavigate('syllabus')}>
              {isFrench ? 'Détails' : 'Details'} <ArrowRight size={16} className="ml-2 inline" />
            </button>
          }
        />
        <div className="grid gap-4 sm:grid-cols-3">
          <div><div className="text-2xl font-semibold">{certification.syllabus.length}</div><div className="text-sm text-[var(--py-color-text-muted)]">{isFrench ? 'domaines officiels' : 'official domains'}</div></div>
          <div><div className="text-2xl font-semibold">{totalChapters}</div><div className="text-sm text-[var(--py-color-text-muted)]">{isFrench ? 'chapitres au programme' : 'syllabus chapters'}</div></div>
          <div><div className="text-2xl font-semibold">{studiedChapters}/{totalChapters}</div><div className="text-sm text-[var(--py-color-text-muted)]">{isFrench ? 'chapitres étudiés' : 'chapters studied'}</div></div>
        </div>
      </section>

      <section className="flex flex-wrap items-center gap-3 text-sm text-[var(--py-color-text-muted)]" aria-live="polite">
        {!isOnline && <Badge tone="warning"><WifiOff size={13} className="mr-1 inline" />{isFrench ? 'Mode hors ligne' : 'Offline'}</Badge>}
        {syncState === 'syncing' && <Badge tone="primary"><Cloud size={13} className="mr-1 inline" />{isFrench ? 'Synchronisation en cours' : 'Syncing'}</Badge>}
        {syncState === 'synced' && <Badge tone="success"><Cloud size={13} className="mr-1 inline" />{isFrench ? 'Données synchronisées' : 'Synced'}</Badge>}
        {syncState === 'error' && <Badge tone="danger"><CloudOff size={13} className="mr-1 inline" />{isFrench ? 'Erreur de synchronisation' : 'Sync error'}</Badge>}
        {syncState === 'idle' && user && isOnline && <span>{isFrench ? 'Vos données restent disponibles sur cet appareil.' : 'Your data remains available on this device.'}</span>}
        {syncState === 'idle' && !user && isOnline && <span>{isFrench ? 'Connectez-vous pour synchroniser votre progression.' : 'Sign in to sync your progress.'}</span>}
      </section>

      {hasStarted && progressPercent >= 85 && progressPercent < 100 && (
        <p className="text-sm text-[var(--py-color-text-muted)]">
          {isFrench ? 'Vous approchez de la fin du parcours : quelques révisions régulières vous aideront à consolider vos acquis.' : 'You are nearing the end of this track; regular reviews can help reinforce what you have learned.'}
        </p>
      )}
    </PageContainer>
  );
};
