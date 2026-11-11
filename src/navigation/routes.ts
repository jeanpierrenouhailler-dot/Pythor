import {
  BookMarked,
  Code2,
  GraduationCap,
  LayoutDashboard,
  Layers,
  LucideIcon,
  RotateCcw,
  BookOpen,
  Library,
  Sparkles,
  ChartNoAxesColumnIncreasing,
} from 'lucide-react';
import { AppView } from '../types';

export interface AppRouteDefinition {
  view: AppView;
  path: string;
  aliases: string[];
  labelFr: string;
  labelEn: string;
  icon: LucideIcon;
}

export const LANDING_ROUTE: AppRouteDefinition = {
  view: 'landing',
  path: '/',
  aliases: ['/landing'],
  labelFr: 'Présentation',
  labelEn: 'Overview',
  icon: Sparkles,
};

export const APP_ROUTES: AppRouteDefinition[] = [
  { view: 'dashboard', path: '/?view=dashboard', aliases: ['/dashboard', '/app'], labelFr: 'Tableau de bord', labelEn: 'Dashboard', icon: LayoutDashboard },
  { view: 'flashcards', path: '/?view=flashcards', aliases: ['/flashcards'], labelFr: 'Flashcards', labelEn: 'Flashcards', icon: Layers },
  { view: 'review', path: '/?view=review', aliases: ['/review'], labelFr: 'Révisions', labelEn: 'Review', icon: RotateCcw },
  { view: 'custom-cards', path: '/?view=custom-cards', aliases: ['/my-cards'], labelFr: 'Mes cartes', labelEn: 'My cards', icon: Library },
  { view: 'syllabus', path: '/?view=syllabus', aliases: ['/syllabus'], labelFr: 'Programme', labelEn: 'Syllabus', icon: BookOpen },
  { view: 'statistics', path: '/?view=statistics', aliases: ['/statistics'], labelFr: 'Statistiques', labelEn: 'Statistics', icon: ChartNoAxesColumnIncreasing },
  { view: 'exam', path: '/?view=exam', aliases: ['/exam'], labelFr: 'Examens', labelEn: 'Exams', icon: GraduationCap },
  { view: 'codelab', path: '/?view=codelab', aliases: ['/codelab'], labelFr: 'Code Lab', labelEn: 'Code Lab', icon: Code2 },
  { view: 'cheatsheet', path: '/?view=cheatsheet', aliases: ['/cheatsheet'], labelFr: 'Cheatsheet', labelEn: 'Cheatsheet', icon: BookMarked },
];

export const MENU_ROUTES = [LANDING_ROUTE, ...APP_ROUTES];
const APP_VIEWS: AppView[] = MENU_ROUTES.map(({ view }) => view);

export function getAppViewFromLocation(location: Pick<Location, 'pathname' | 'search' | 'hash'>): AppView {
  const searchView = new URLSearchParams(location.search).get('view');
  if (searchView && APP_VIEWS.includes(searchView as AppView)) {
    return searchView as AppView;
  }

  const hashView = location.hash.slice(1).toLowerCase();
  if (hashView && APP_VIEWS.includes(hashView as AppView)) {
    return hashView as AppView;
  }

  const path = location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  return MENU_ROUTES.find(({ path: routePath, aliases }) => routePath === path || aliases.includes(path))?.view ?? 'landing';
}

export function getAppViewUrl(view: AppView): string {
  return MENU_ROUTES.find((route) => route.view === view)?.path ?? '/';
}
