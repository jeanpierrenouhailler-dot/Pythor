import React from 'react';
import { ViewType, UserProfile, TrackId } from '../types';
import { PythorLogo } from './PythorLogo';
import { Flame, Zap, Search, Bell, Award, Check, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  onNavigateBack?: () => void;
  previousViewTitle?: string;
  user: UserProfile;
  activeTrack?: TrackId;
  onSelectTrack?: (track: TrackId) => void;
  onOpenSearch: () => void;
  onOpenNotifications: () => void;
  hasUnreadNotifications?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onNavigateBack,
  previousViewTitle,
  user,
  activeTrack = 'pcap-31-03',
  onSelectTrack,
  onOpenSearch,
  onOpenNotifications,
  hasUnreadNotifications = true,
}) => {
  const isPcap = activeTrack === 'pcap-31-03';

  const navItems: { id: ViewType; label: string; badge?: string }[] = [
    { id: 'parcours', label: 'Learning Path' },
    {
      id: 'pcep-exam',
      label: isPcap ? 'PCAP™ Certification' : 'PCEP™ Certification',
      badge: isPcap ? 'PCAP-31-03' : 'PCEP-30-02',
    },
    { id: 'ide-studio', label: 'IDE Studio' },
    { id: 'flashcards-srs', label: 'Flashcards & SRS' },
    { id: 'dashboard', label: 'Dashboard' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#262626] select-none">
      <div className="h-16 w-full px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand & Navigation */}
        <div className="flex items-center gap-3 sm:gap-6 lg:gap-8">
          <button
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-2.5 focus:outline-none group text-left shrink-0"
            title="Pythor Home"
          >
            <PythorLogo size={34} showText={true} versionBadge="v3.12 PRO" />
          </button>

          {/* Global Return Button */}
          {onNavigateBack && (
            <button
              onClick={onNavigateBack}
              id="navbar-return-button"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#141414] hover:bg-[#202020] border border-[#2D2D2D] hover:border-[#454545] text-xs font-medium text-[#E5E5E5] hover:text-white transition-all shadow-sm group shrink-0"
              title={previousViewTitle ? `Return to ${previousViewTitle} (Alt+←)` : 'Return to previous screen (Alt+←)'}
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#A0A0A0] group-hover:text-white transition-transform group-hover:-translate-x-0.5" />
              <span className="font-semibold text-[11px] uppercase tracking-wider text-neutral-300 group-hover:text-white">Return</span>
              {previousViewTitle && (
                <span className="hidden xl:inline text-neutral-400 font-normal text-[11px]">
                  • {previousViewTitle}
                </span>
              )}
            </button>
          )}

          <nav className="hidden md:flex items-center gap-3 lg:gap-5 h-16">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`h-full flex items-center gap-1.5 text-xs lg:text-[13px] tracking-wide font-medium px-1 border-b-2 transition-colors relative ${
                    isActive
                      ? 'text-[#C5A059] border-[#C5A059] font-semibold'
                      : 'text-[#A0A0A0] hover:text-[#F5F5F5] border-transparent'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`px-1.5 py-0.5 rounded font-mono text-[9px] uppercase tracking-wider ${
                        isActive
                          ? 'bg-[#C5A059]/20 text-[#DFC287] border border-[#C5A059]/50'
                          : 'bg-[#1C1C1C] text-[#888888] border border-[#262626]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059] shadow-[0_0_8px_rgba(197,160,89,0.5)]" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Status Metrics & User Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Active Track Switcher Pill */}
          {onSelectTrack && (
            <div className="hidden xl:flex items-center p-0.5 bg-[#141414] rounded-lg border border-[#262626]">
              <button
                onClick={() => onSelectTrack('pcap-31-03')}
                className={`px-2 py-0.5 rounded text-[11px] font-mono transition-all flex items-center gap-1 ${
                  isPcap
                    ? 'bg-blue-600 text-white font-bold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {isPcap && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                <span>PCAP-31-0x</span>
              </button>
              <button
                onClick={() => onSelectTrack('pcep-30-02')}
                className={`px-2 py-0.5 rounded text-[11px] font-mono transition-all flex items-center gap-1 ${
                  !isPcap
                    ? 'bg-[#C5A059] text-black font-bold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {!isPcap && <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />}
                <span>PCEP-30-02</span>
              </button>
            </div>
          )}

          {/* Streak & XP Badges */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Streak */}
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 bg-[#141414] rounded-md border border-[#262626] font-mono text-xs text-[#DFC287]"
              title="Active daily streak"
            >
              <Flame className="w-4 h-4 text-[#C5A059] fill-[#C5A059]/20" />
              <span className="font-semibold">{user.streakDays} days</span>
            </div>

            {/* XP */}
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 bg-[#141414] rounded-md border border-[#262626] font-mono text-xs text-[#C5A059]"
              title="Total Experience Points"
            >
              <Zap className="w-4 h-4 text-[#C5A059] fill-[#C5A059]/20" />
              <span className="font-semibold">{user.totalXp.toLocaleString()} XP</span>
            </div>
          </div>

          {/* Quick Search ⌘K Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-2.5 py-1.5 bg-[#141414] hover:bg-[#1C1C1C] border border-[#262626] rounded-md transition-colors text-[#A0A0A0] hover:text-[#F5F5F5]"
            title="Global Search (⌘K)"
          >
            <Search className="w-4 h-4 text-[#A0A0A0]" />
            <span className="hidden lg:inline text-xs">Quick search...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 bg-[#262626] rounded font-mono text-[10px] text-[#A0A0A0]">
              ⌘K
            </kbd>
          </button>

          {/* Notifications */}
          <button
            onClick={onOpenNotifications}
            aria-label="Notifications"
            className="relative p-1.5 text-[#A0A0A0] hover:text-[#F5F5F5] hover:bg-[#1C1C1C] rounded-md transition-colors"
            title="Notifications and alerts"
          >
            <Bell className="w-5 h-5" />
            {hasUnreadNotifications && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#C5A059] rounded-full ring-2 ring-[#0A0A0A]" />
            )}
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-2.5 pl-2 border-l border-[#262626]">
            <div className="hidden md:flex flex-col text-right">
              <span className="text-xs text-[#F5F5F5] leading-tight font-semibold">
                {user.name}
              </span>
              <span className="font-mono text-[10px] text-[#A0A0A0] leading-tight">
                {user.levelTitle}
              </span>
            </div>
            <div className="relative group">
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover border border-[#262626] ring-2 ring-transparent group-hover:ring-[#C5A059]/40 transition-all"
                src={user.avatarUrl}
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#C5A059] rounded-full ring-2 ring-[#0A0A0A]" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav Strip */}
      <div className="flex md:hidden items-center justify-around bg-[#0A0A0A] border-t border-[#262626] px-2 py-1 gap-1">
        {onNavigateBack && (
          <button
            onClick={onNavigateBack}
            className="py-1 px-2 text-[11px] font-semibold rounded bg-[#1C1C1C] border border-[#2E2E2E] text-white flex items-center gap-1 shrink-0"
            title="Return to previous view"
          >
            <ArrowLeft className="w-3 h-3 text-neutral-400" />
            <span>Return</span>
          </button>
        )}
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`py-1.5 px-1.5 text-[11px] font-medium rounded transition-colors whitespace-nowrap ${
                isActive
                  ? 'text-[#C5A059] bg-[#141414] font-semibold'
                  : 'text-[#A0A0A0]'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
