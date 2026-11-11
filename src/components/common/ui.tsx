import React, { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

type ClassNameProps = {
  className?: string;
};

interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children, className = '', ...props }) => (
  <div className={`py-page-container ${className}`} {...props}>
    {children}
  </div>
);

interface PageHeaderProps extends ClassNameProps {
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  actions?: ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description, eyebrow, actions, className = '' }) => (
  <header className={`py-page-header ${className}`}>
    <div>
      {eyebrow && <div className="py-badge py-badge--primary">{eyebrow}</div>}
      <h1 className="py-page-title">{title}</h1>
      {description && <p className="py-page-description">{description}</p>}
    </div>
    {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
  </header>
);

interface SectionHeaderProps extends ClassNameProps {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, action, className = '' }) => (
  <div className={`py-section-header ${className}`}>
    <div>
      <h2 className="py-section-title">{title}</h2>
      {description && <p className="py-section-description">{description}</p>}
    </div>
    {action}
  </div>
);

interface StatCardProps extends ClassNameProps {
  label: ReactNode;
  value: ReactNode;
  icon?: ReactNode;
  detail?: ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, icon, detail, className = '' }) => (
  <article className={`py-surface py-stat-card ${className}`}>
    <div className="flex items-start justify-between gap-3">
      <div>
        <div className="py-stat-card__label">{label}</div>
        <div className="py-stat-card__value">{value}</div>
      </div>
      {icon && <div className="text-[var(--py-color-primary)]" aria-hidden="true">{icon}</div>}
    </div>
    {detail && <div className="mt-2 text-sm text-[var(--py-color-text-muted)]">{detail}</div>}
  </article>
);

interface ActionCardProps extends ClassNameProps {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  trailing?: ReactNode;
  onClick: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  'aria-label'?: string;
}

export const ActionCard: React.FC<ActionCardProps> = ({
  title,
  description,
  icon,
  trailing,
  onClick,
  className = '',
  ...props
}) => (
  <button type="button" className={`py-action-card ${className}`} onClick={onClick} {...props}>
    {icon && <span className="shrink-0 text-[var(--py-color-primary)]" aria-hidden="true">{icon}</span>}
    <span className="min-w-0 flex-1">
      <span className="py-action-card__title">{title}</span>
      {description && <span className="py-action-card__description">{description}</span>}
    </span>
    {trailing && <span className="shrink-0">{trailing}</span>}
  </button>
);

interface ProgressBarProps extends ClassNameProps {
  value: number;
  label?: string;
  showValue?: boolean;
}

function clampProgress(value: number): number {
  return Number.isFinite(value) ? Math.min(100, Math.max(0, value)) : 0;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, label, showValue = false, className = '' }) => {
  const progress = clampProgress(value);
  return (
    <div className={className}>
      {(label || showValue) && (
        <div className="mb-2 flex items-center justify-between gap-3 text-sm">
          {label && <span className="text-[var(--py-color-text-muted)]">{label}</span>}
          {showValue && <span className="font-semibold tabular-nums">{progress}%</span>}
        </div>
      )}
      <div
        className="py-progress"
        role="progressbar"
        aria-label={label || 'Progression'}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        <div className="py-progress__value" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

interface ProgressRingProps extends ClassNameProps {
  value: number;
  label?: string;
  size?: number;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({ value, label = 'Progression', size = 56, className = '' }) => {
  const progress = clampProgress(value);
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  return (
    <div
      className={`relative inline-grid shrink-0 place-items-center ${className}`}
      style={{ width: size, height: size }}
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
    >
      <svg className="py-progress-ring h-full w-full" viewBox="0 0 48 48" aria-hidden="true">
        <circle className="py-progress-ring__track" cx="24" cy="24" r={radius} />
        <circle
          className="py-progress-ring__value"
          cx="24"
          cy="24"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress / 100)}
        />
      </svg>
      <span className="absolute text-xs font-semibold tabular-nums">{progress}%</span>
    </div>
  );
};

interface BadgeProps extends ClassNameProps {
  children: ReactNode;
  tone?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger';
}

export const Badge: React.FC<BadgeProps> = ({ children, tone = 'neutral', className = '' }) => (
  <span className={`py-badge ${tone === 'neutral' ? '' : `py-badge--${tone}`} ${className}`}>{children}</span>
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const PrimaryButton: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <button className={`py-button py-button--primary ${className}`} {...props}>{children}</button>
);

export const SecondaryButton: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <button className={`py-button py-button--secondary ${className}`} {...props}>{children}</button>
);

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  children: ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({ label, children, className = '', ...props }) => (
  <button
    type="button"
    className={`py-icon-button ${className}`}
    aria-label={label}
    title={label}
    {...props}
  >
    {children}
  </button>
);

interface StateProps extends ClassNameProps {
  title: ReactNode;
  message?: ReactNode;
  action?: ReactNode;
}

export const EmptyState: React.FC<StateProps> = ({ title, message, action, className = '' }) => (
  <div className={`py-state ${className}`}>
    <h3 className="py-state__title">{title}</h3>
    {message && <p className="py-state__message">{message}</p>}
    {action}
  </div>
);

export const LoadingState: React.FC<Omit<StateProps, 'action'>> = ({ title, message, className = '' }) => (
  <div className={`py-state ${className}`} role="status" aria-live="polite">
    <span className="py-spinner" aria-hidden="true" />
    <h3 className="py-state__title">{title}</h3>
    {message && <p className="py-state__message">{message}</p>}
  </div>
);

interface ErrorStateProps extends StateProps {
  onRetry?: () => void;
  retryLabel?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title,
  message,
  action,
  onRetry,
  retryLabel = 'Réessayer',
  className = '',
}) => (
  <div className={`py-state ${className}`} role="alert">
    <h3 className="py-state__title">{title}</h3>
    {message && <p className="py-state__message">{message}</p>}
    {action || (onRetry && <SecondaryButton onClick={onRetry}>{retryLabel}</SecondaryButton>)}
  </div>
);
