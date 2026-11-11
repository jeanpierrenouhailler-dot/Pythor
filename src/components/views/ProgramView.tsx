import React, { useMemo } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { AppView, CertificationTrack, CardSRSData, Flashcard } from '../../types';
import { CERTIFICATION_BY_ID } from '../../data/certifications';
import { useI18n } from '../../context/I18nContext';
import { readTrackSrsState } from '../../utils/srsStorage';
import { Badge, PageContainer, PageHeader, ProgressBar, SectionHeader } from '../common/ui';

interface ProgramViewProps {
  cards: Flashcard[];
  currentTrack: CertificationTrack;
  onNavigate: (view: AppView, section?: string, chapter?: string) => void;
}

export const ProgramView: React.FC<ProgramViewProps> = ({ cards, currentTrack, onNavigate }) => {
  const { isFrench } = useI18n();
  const certification = CERTIFICATION_BY_ID[currentTrack];
  const states = useMemo(() => readTrackSrsState(currentTrack), [currentTrack]);
  const totalChapters = certification.syllabus.reduce((count, section) => count + section.chapters.length, 0);
  const studiedChapters = certification.syllabus.reduce((count, section) => {
    const sectionName = `Section ${section.number}`;
    return count + section.chapters.filter((chapter) =>
      cards.some((card) => card.section === sectionName && card.chapter === chapter.id && states[card.id]?.status !== undefined && states[card.id].status !== 'new'),
    ).length;
  }, 0);
  const progress = totalChapters ? Math.round((studiedChapters / totalChapters) * 100) : 0;

  return (
    <PageContainer className="space-y-8">
      <PageHeader
        eyebrow={certification.info.code}
        title={isFrench ? 'Programme détaillé' : 'Detailed syllabus'}
        description={isFrench ? certification.nameFr : certification.info.name}
        actions={
          <button type="button" className="py-button py-button--secondary" onClick={() => onNavigate('dashboard')}>
            <ArrowLeft size={16} className="mr-2 inline" />{isFrench ? 'Tableau de bord' : 'Dashboard'}
          </button>
        }
      />

      <section className="py-surface space-y-4 p-5">
        <SectionHeader
          title={isFrench ? 'Progression du programme' : 'Syllabus progress'}
          description={`${studiedChapters}/${totalChapters} ${isFrench ? 'chapitres étudiés' : 'chapters studied'}`}
        />
        <ProgressBar value={progress} showValue />
      </section>

      {certification.syllabus.map((section) => {
        const sectionName = `Section ${section.number}`;
        const studiedInSection = section.chapters.filter((chapter) =>
          cards.some((card) => card.section === sectionName && card.chapter === chapter.id && states[card.id]?.status !== undefined && states[card.id].status !== 'new'),
        ).length;
        return (
          <section key={section.id} className="py-surface p-5">
            <SectionHeader
              title={`${section.number}. ${section.title}`}
              description={`${section.weight} · ${section.description}`}
              action={<Badge>{studiedInSection}/${section.chapters.length} {isFrench ? 'étudiés' : 'studied'}</Badge>}
            />
            <div className="divide-y divide-[var(--py-color-border)]">
              {section.chapters.map((chapter) => {
                const chapterCards = cards.filter((card) => card.section === sectionName && card.chapter === chapter.id);
                const studiedCards = chapterCards.filter((card) => {
                  const state: CardSRSData | undefined = states[card.id];
                  return state !== undefined && state.status !== 'new';
                }).length;
                const isStudied = studiedCards > 0;
                return (
                  <button
                    key={chapter.id}
                    type="button"
                    className="flex w-full items-center gap-4 py-4 text-left hover:bg-[var(--py-color-surface-raised)]"
                    onClick={() => onNavigate('flashcards', sectionName, chapter.id)}
                  >
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2 font-medium">
                        {isStudied && <CheckCircle2 size={16} className="shrink-0 text-[var(--py-color-success)]" />}
                        {chapter.title}
                      </span>
                      <span className="mt-1 block text-sm text-[var(--py-color-text-muted)]">
                        {chapterCards.length} {isFrench ? 'cartes' : 'cards'} · {studiedCards} {isFrench ? 'étudiées' : 'studied'}
                      </span>
                    </span>
                    <ArrowRight size={16} className="shrink-0 text-[var(--py-color-text-muted)]" />
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}

      {cards.length === 0 && (
        <p className="text-sm text-[var(--py-color-text-muted)]">
          {isFrench ? 'Aucune carte n’est disponible pour ce parcours.' : 'No cards are available for this certification.'}
        </p>
      )}

      <div className="flex justify-end">
        <button type="button" className="py-button py-button--primary" onClick={() => onNavigate('flashcards')}>
          <BookOpen size={16} className="mr-2 inline" />{isFrench ? 'Parcourir les flashcards' : 'Browse flashcards'}
        </button>
      </div>
    </PageContainer>
  );
};
