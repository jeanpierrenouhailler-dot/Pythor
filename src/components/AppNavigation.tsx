import React, { useState } from 'react';
import { Menu, PanelLeftClose, PanelLeft } from 'lucide-react';
import { AppView } from '../types';
import { APP_ROUTES } from '../navigation/routes';
import { PythorLogo } from './common/PythorLogo';
import { useI18n } from '../context/I18nContext';

interface AppNavigationProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
  onOpenMore: () => void;
}

export const AppNavigation: React.FC<AppNavigationProps> = ({ currentView, onNavigate, onOpenMore }) => {
  const { isFrench } = useI18n();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const mobileItems = APP_ROUTES.filter(({ view }) =>
    view === 'dashboard' || view === 'flashcards' || view === 'exam'
  );

  const renderRoute = (view: AppView, label: string, Icon: typeof APP_ROUTES[number]['icon']) => {
    const isActive = currentView === view;
    return (
      <button
        key={view}
        type="button"
        onClick={() => onNavigate(view)}
        className={`py-nav-item ${isActive ? 'is-active' : ''}`}
        aria-current={isActive ? 'page' : undefined}
        title={isCollapsed ? label : undefined}
      >
        <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span className="py-nav-label">{label}</span>
      </button>
    );
  };

  return (
    <>
      <aside className={`py-app-sidebar ${isCollapsed ? 'is-collapsed' : ''}`}>
        <div className="py-sidebar-brand">
          <PythorLogo size="sm" showText={!isCollapsed} />
          <button
            type="button"
            className="py-sidebar-toggle"
            onClick={() => setIsCollapsed((collapsed) => !collapsed)}
            aria-label={isCollapsed
              ? (isFrench ? 'Développer la navigation' : 'Expand navigation')
              : (isFrench ? 'Réduire la navigation' : 'Collapse navigation')}
            title={isCollapsed
              ? (isFrench ? 'Développer la navigation' : 'Expand navigation')
              : (isFrench ? 'Réduire la navigation' : 'Collapse navigation')}
          >
            {isCollapsed ? <PanelLeft className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
          </button>
        </div>
        <nav className="py-sidebar-routes" aria-label={isFrench ? 'Navigation principale' : 'Main navigation'}>
          {APP_ROUTES.map(({ view, labelFr, labelEn, icon }) =>
            renderRoute(view, isFrench ? labelFr : labelEn, icon)
          )}
        </nav>
        <button type="button" className="py-nav-item py-sidebar-more" onClick={onOpenMore}
          title={isCollapsed ? (isFrench ? 'Plus' : 'More') : undefined}>
          <Menu className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span className="py-nav-label">{isFrench ? 'Plus' : 'More'}</span>
        </button>
      </aside>

      <nav className="py-bottom-nav" aria-label={isFrench ? 'Navigation principale' : 'Main navigation'}>
        {mobileItems.map(({ view, labelFr, labelEn, icon }) =>
          renderRoute(view, isFrench ? labelFr : labelEn, icon)
        )}
        <button type="button" className="py-nav-item" onClick={onOpenMore}
          aria-label={isFrench ? 'Plus de destinations' : 'More destinations'}>
          <Menu className="h-5 w-5" aria-hidden="true" />
          <span className="py-nav-label">{isFrench ? 'Plus' : 'More'}</span>
        </button>
      </nav>
    </>
  );
};
