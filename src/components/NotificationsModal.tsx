import React from 'react';
import { X, CheckCircle2, Flame, Award, ArrowRight } from 'lucide-react';
import { ViewType } from '../types';

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: ViewType) => void;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 'notif-1',
      icon: Flame,
      iconColor: 'text-[#DFC287]',
      iconBg: 'bg-[#C5A059]/15',
      title: '14-Day Streak Milestone!',
      message: 'Congratulations Alexandre, you unlocked the "Python v3.12 Perseverance" badge.',
      time: '10 min ago',
      actionView: 'dashboard' as ViewType,
      actionText: 'View profile',
    },
    {
      id: 'notif-2',
      icon: Award,
      iconColor: 'text-[#C5A059]',
      iconBg: 'bg-[#C5A059]/15',
      title: 'Diamond League • Top 3 Secured',
      message: 'You are currently 3rd with 2,450 XP. 2 days remaining before tournament close.',
      time: '1h ago',
      actionView: 'dashboard' as ViewType,
      actionText: 'View leaderboard',
    },
    {
      id: 'notif-3',
      icon: CheckCircle2,
      iconColor: 'text-[#DFC287]',
      iconBg: 'bg-[#C5A059]/15',
      title: 'SRS: 8 Cards Due for Review',
      message: 'Your retention rate is 92%. Review now to ensure long-term retention before the PCEP exam.',
      time: '3h ago',
      actionView: 'flashcards-srs' as ViewType,
      actionText: 'Start session',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-end p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm mt-12 bg-[#141414] border border-[#262626] rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#262626] bg-[#0A0A0A]">
          <div className="flex items-center gap-2">
            <h3 className="text-xs font-semibold text-[#F5F5F5] uppercase tracking-[1.5px]">
              Notifications
            </h3>
            <span className="px-2 py-0.5 bg-[#C5A059]/20 text-[#C5A059] text-[10px] font-mono font-semibold rounded-full border border-[#C5A059]/30">
              3 new
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#737373] hover:text-[#F5F5F5] rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Notifications list */}
        <div className="p-3 space-y-2 max-h-96 overflow-y-auto">
          {notifications.map((n) => {
            const Icon = n.icon;
            return (
              <div
                key={n.id}
                className="p-3 bg-[#181818] hover:bg-[#1E1E1E] rounded-lg border border-[#262626] transition-colors flex flex-col gap-1.5"
              >
                <div className="flex items-start gap-2.5">
                  <div className={`p-1.5 rounded-md shrink-0 ${n.iconBg} ${n.iconColor}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-xs font-semibold text-[#F5F5F5] truncate">
                        {n.title}
                      </span>
                      <span className="text-[10px] text-[#737373] font-mono shrink-0">
                        {n.time}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#A0A0A0] mt-0.5 leading-relaxed">
                      {n.message}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    onNavigate(n.actionView);
                    onClose();
                  }}
                  className="self-end text-[11px] font-medium text-[#C5A059] hover:text-[#DFC287] flex items-center gap-1 mt-1 font-mono transition-colors"
                >
                  <span>{n.actionText}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
