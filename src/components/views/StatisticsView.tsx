import React, { useEffect, useMemo, useState } from 'react';
import { BarChart3, BookOpenCheck, Cloud, Clock3, Trophy } from 'lucide-react';
import { AppView, CardSRSData, CertificationTrack, Flashcard, UserExamAttemptRecord } from '../../types';
import { CERTIFICATIONS, CERTIFICATION_BY_ID, CERTIFICATION_IDS } from '../../data/certifications';
import { loadCertificationCards } from '../../data/certificationDataLoader';
import { useAuth } from '../../context/AuthContext';
import { useI18n } from '../../context/I18nContext';
import { subscribeUserExamAttempts } from '../../services/firestoreService';
import { readTrackSrsState } from '../../utils/srsStorage';
import {
  Badge,
  EmptyState,
  PageContainer,
  PageHeader,
  ProgressBar,
  SectionHeader,
  StatCard,
} from '../common/ui';

interface StatisticsViewProps {
  cards: Flashcard[];
  customCards: Flashcard[];
  currentTrack: CertificationTrack;
  onNavigate: (view: AppView) => void;
}

function getLastSevenDays(states: Record<string, CardSRSData>, isFrench: boolean) {
  const today = new Date();
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (6 - index));
    date.setHours(0, 0, 0, 0);
    const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    return {
      key,
      label: new Intl.DateTimeFormat(isFrench ? 'fr-FR' : 'en-US', { weekday: 'short' }).format(date),
      count: 0,
    };
  });
  const byDate = new Map(days.map((day) => [day.key, day]));

  Object.values(states).forEach(({ lastReviewed }) => {
    if (!lastReviewed) return;
    const date = new Date(lastReviewed);
    const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    const day = byDate.get(key);
    if (day) day.count += 1;
  });

  return days;
}

export const StatisticsView: React.FC<StatisticsViewProps> = ({ cards, customCards, currentTrack, onNavigate }) => {
  const { user } = useAuth();
  const { isFrench } = useI18n();
  const [examAttempts, setExamAttempts] = useState<UserExamAttemptRecord[]>([]);
  const [isExamHistoryLoading, setIsExamHistoryLoading] = useState(Boolean(user));
  const [examHistoryError, setExamHistoryError] = useState(false);
  const [allTrackCards, setAllTrackCards] = useState<Partial<Record<CertificationTrack, Flashcard[]>>>({});
  const [allTrackCardsLoading, setAllTrackCardsLoading] = useState(true);
  const [allTrackCardsError, setAllTrackCardsError] = useState(false);
  const certification = CERTIFICATION_BY_ID[currentTrack];
  const activeStates = useMemo(() => readTrackSrsState(currentTrack), [currentTrack]);
  const activeCards = cards;
  const masteredCards = activeCards.filter((card) => activeStates[card.id]?.status === 'mastered').length;
  const activeAttempts = examAttempts.filter((attempt) => attempt.track === currentTrack);
  const averageExamScore = activeAttempts.length
    ? Math.round(activeAttempts.reduce((sum, attempt) => sum + attempt.percentage, 0) / activeAttempts.length)
    : null;
  const lastSevenDays = useMemo(() => getLastSevenDays(activeStates, isFrench), [activeStates, isFrench]);
  const maxDailyReviews = Math.max(1, ...lastSevenDays.map(({ count }) => count));
  const latestAttempts = [...examAttempts]
    .filter((attempt) => attempt.completedAt)
    .sort((left, right) => (right.completedAt || '').localeCompare(left.completedAt || ''))
    .slice(0, 8);

  useEffect(() => {
    let active = true;
    setAllTrackCardsLoading(true);
    setAllTrackCardsError(false);
    Promise.all(
      CERTIFICATION_IDS.map(async (track) => [track, await loadCertificationCards(track)] as const),
    )
      .then((entries) => {
        if (active) {
          setAllTrackCards(Object.fromEntries(entries) as Record<CertificationTrack, Flashcard[]>);
          setAllTrackCardsLoading(false);
        }
      })
      .catch((error: unknown) => {
        console.error('Could not load certification cards for statistics:', error);
        if (active) {
          setAllTrackCardsError(true);
          setAllTrackCardsLoading(false);
        }
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!user) {
      setExamAttempts([]);
      setIsExamHistoryLoading(false);
      setExamHistoryError(false);
      return;
    }

    setIsExamHistoryLoading(true);
    setExamHistoryError(false);
    const unsubscribe = subscribeUserExamAttempts(
      user.uid,
      (attempts) => {
        setExamAttempts(attempts);
        setIsExamHistoryLoading(false);
      },
      () => {
        setExamHistoryError(true);
        setIsExamHistoryLoading(false);
      },
    );
    return () => unsubscribe();
  }, [user]);

  return (
    <PageContainer className="space-y-8">
      <PageHeader
        eyebrow={certification.info.code}
        title={isFrench ? 'Statistiques' : 'Statistics'}
        description={isFrench ? 'Suivez votre progression réelle et vos résultats enregistrés.' : 'Review your actual study progress and recorded results.'}
        actions={
          <button type="button" className="py-button py-button--secondary" onClick={() => onNavigate('dashboard')}>
            {isFrench ? 'Tableau de bord' : 'Dashboard'}
          </button>
        }
      />

      <section>
        <SectionHeader title={isFrench ? 'Maîtrise des cartes par certification' : 'Flashcard mastery by certification'} />
        {allTrackCardsLoading && (
          <p role="status" className="py-8 text-center text-[var(--py-color-text-muted)]">
            {isFrench ? 'Chargement des statistiques…' : 'Loading statistics…'}
          </p>
        )}
        {allTrackCardsError && (
          <p role="alert" className="py-8 text-center text-red-300">
            {isFrench ? 'Les statistiques des certifications n’ont pas pu être chargées.' : 'Certification statistics could not be loaded.'}
          </p>
        )}
        {!allTrackCardsLoading && !allTrackCardsError && (
        <div className="space-y-3">
          {CERTIFICATIONS.map(({ id, info, nameFr }) => {
            const certificationCards = allTrackCards[id] ?? [];
            const trackCustomCards = customCards.filter((card) =>
              id === 'pcap' ? card.track === 'pcap' || !card.track : card.track === id,
            );
            const trackCards = id === currentTrack ? cards : [...certificationCards, ...trackCustomCards];
            const states = id === currentTrack ? activeStates : readTrackSrsState(id);
            const mastered = trackCards.filter((card) => states[card.id]?.status === 'mastered').length;
            const started = trackCards.filter((card) => {
              const status = states[card.id]?.status;
              return status !== undefined && status !== 'new';
            }).length;
            const mastery = trackCards.length ? Math.round((mastered / trackCards.length) * 100) : 0;
            return (
              <article key={id} className="py-surface p-4">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h2 className="font-semibold">{id === currentTrack ? (isFrench ? nameFr : info.name) : `${info.code} · ${isFrench ? nameFr : info.name}`}</h2>
                    <p className="mt-1 text-sm text-[var(--py-color-text-muted)]">
                      {mastered} {isFrench ? 'maîtrisées' : 'mastered'} · {started}/{trackCards.length} {isFrench ? 'étudiées' : 'studied'}
                    </p>
                  </div>
                  <Badge>{mastery}%</Badge>
                </div>
                <ProgressBar value={mastery} label={isFrench ? 'Maîtrise des cartes' : 'Card mastery'} />
              </article>
            );
          })}
        </div>
        )}
      </section>

      <section className="py-surface p-5 sm:p-6">
        <SectionHeader
          title={isFrench ? 'Activité de révision récente' : 'Recent review activity'}
          description={isFrench
            ? 'Cartes dont la dernière révision enregistrée date de chacun des sept derniers jours.'
            : 'Cards whose most recent recorded review falls on each of the last seven days.'}
        />
        <div className="grid grid-cols-7 items-end gap-2 sm:gap-4" aria-label={isFrench ? 'Dernières révisions par jour' : 'Most recent card reviews by day'}>
          {lastSevenDays.map(({ key, label, count }) => (
            <div key={key} className="flex min-w-0 flex-col items-center gap-2">
              <span className="text-xs tabular-nums text-[var(--py-color-text-muted)]">{count}</span>
              <div className="flex h-24 w-full items-end rounded-md bg-[var(--py-color-surface-raised)] p-1">
                <div
                  className="w-full rounded-sm bg-[var(--py-color-primary)]"
                  style={{ height: `${count ? Math.max(8, (count / maxDailyReviews) * 100) : 0}%` }}
                  title={`${count} ${isFrench ? 'cartes' : 'cards'}`}
                />
              </div>
              <span className="text-xs text-[var(--py-color-text-muted)]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          title={isFrench ? 'Résultats des examens' : 'Exam results'}
          description={isFrench ? 'Tentatives réellement enregistrées dans votre compte.' : 'Attempts actually recorded in your account.'}
        />
        {user ? (
          <>
            <div className="mb-4 grid gap-3 sm:grid-cols-3">
              <StatCard label={isFrench ? 'Tentatives' : 'Attempts'} value={activeAttempts.length} icon={<BookOpenCheck size={20} />} detail={certification.info.code} />
              <StatCard label={isFrench ? 'Score moyen' : 'Average score'} value={averageExamScore === null ? '—' : `${averageExamScore}%`} icon={<BarChart3 size={20} />} />
              <StatCard label={isFrench ? 'Examens réussis' : 'Exams passed'} value={activeAttempts.filter(({ passed }) => passed).length} icon={<Trophy size={20} />} />
            </div>
            {isExamHistoryLoading ? (
              <div className="py-surface p-5 text-sm text-[var(--py-color-text-muted)]" role="status">
                {isFrench ? 'Chargement de l’historique des examens…' : 'Loading exam history…'}
              </div>
            ) : examHistoryError ? (
              <div className="py-surface p-5 text-sm text-[var(--py-color-danger)]" role="alert">
                {isFrench ? 'L’historique des examens est momentanément indisponible.' : 'Exam history is temporarily unavailable.'}
              </div>
            ) : latestAttempts.length ? (
              <div className="space-y-2">
                {latestAttempts.map((attempt) => (
                  <article key={attempt.id} className="py-surface flex flex-wrap items-center justify-between gap-3 p-4">
                    <div className="min-w-0">
                      <div className="font-medium">{CERTIFICATION_BY_ID[attempt.track]?.info.code ?? attempt.track} · {attempt.section}</div>
                      <div className="mt-1 flex items-center gap-2 text-sm text-[var(--py-color-text-muted)]">
                        <Clock3 size={14} />
                        {attempt.completedAt && new Intl.DateTimeFormat(isFrench ? 'fr-FR' : 'en-US', { dateStyle: 'medium' }).format(new Date(attempt.completedAt))}
                        · {attempt.score}/{attempt.totalQuestions} · {Math.round(attempt.durationSeconds / 60)} {isFrench ? 'min' : 'min'}
                      </div>
                    </div>
                    <Badge tone={attempt.passed ? 'success' : 'danger'}>{attempt.percentage}% · {attempt.passed ? (isFrench ? 'Réussi' : 'Passed') : (isFrench ? 'À revoir' : 'Review needed')}</Badge>
                  </article>
                ))}
              </div>
            ) : (
              <EmptyState
                title={isFrench ? 'Aucun résultat enregistré' : 'No exam results recorded'}
                message={isFrench ? 'Terminez un examen pour commencer votre historique.' : 'Complete an exam to start your history.'}
              />
            )}
          </>
        ) : (
          <EmptyState
            title={isFrench ? 'Historique cloud non disponible' : 'Cloud history unavailable'}
            message={isFrench ? 'La progression des cartes reste visible sur cet appareil. Connectez-vous pour enregistrer et consulter les résultats des examens.' : 'Card progress remains available on this device. Sign in to save and view exam results.'}
            action={<Badge><Cloud size={13} className="mr-1 inline" />{isFrench ? 'Résultats d’examens synchronisés avec le compte' : 'Exam results synced to account'}</Badge>}
          />
        )}
      </section>
    </PageContainer>
  );
};
