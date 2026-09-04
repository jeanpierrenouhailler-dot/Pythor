import React from 'react';
import {
  UserProfile,
  DailyQuest,
  RealProject,
  RecentSubmission,
  LeaderboardUser,
  TrackId,
} from '../../types';
import {
  Flame,
  Zap,
  CheckCircle2,
  Brain,
  ArrowRight,
  Code,
  Lock,
  Trophy,
  Terminal,
  Clock,
  Play,
  Calendar,
  Sparkles,
  Award,
  ArrowLeft,
} from 'lucide-react';

interface DashboardViewProps {
  user: UserProfile;
  quests: DailyQuest[];
  projects: RealProject[];
  submissions: RecentSubmission[];
  leaderboard: LeaderboardUser[];
  activeTrack?: TrackId;
  onSelectTrack?: (track: TrackId) => void;
  onOpenChallenge: (challengeId?: string) => void;
  onOpenParcours: () => void;
  onOpenSrs: () => void;
  onOpenPcepExam?: () => void;
  onNavigateBack?: () => void;
  previousViewTitle?: string;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  user,
  quests,
  projects,
  submissions,
  leaderboard,
  activeTrack = 'pcap-31-03',
  onSelectTrack,
  onOpenChallenge,
  onOpenParcours,
  onOpenSrs,
  onOpenPcepExam,
  onNavigateBack,
  previousViewTitle,
}) => {
  const isPcap = activeTrack === 'pcap-31-03';

  // Generate a mock 30-day GitHub-style commit heatmap for Python practice
  const heatmapDays = Array.from({ length: 35 }, (_, i) => {
    // vary intensity: 0, 1, 2, 3, 4
    const intensity = [3, 2, 4, 1, 3, 4, 2, 0, 2, 3, 4, 3, 1, 4, 2, 3, 4, 3, 2, 4, 1, 3, 2, 4, 3, 4, 2, 3, 4, 4, 3, 2, 4, 3, 4][i % 35];
    return { day: i + 1, intensity };
  });

  const domainMastery = isPcap
    ? [
        { name: '1. Modules & Packages (1.1 - 1.5)', percent: 85, color: 'bg-blue-500', status: 'Advanced' },
        { name: '2. Exceptions & Hierarchy (2.1 - 2.4)', percent: 78, color: 'bg-blue-500', status: 'Advanced' },
        { name: '3. Strings & Encodings (3.1 - 3.6)', percent: 92, color: 'bg-sky-400', status: 'Mastered' },
        { name: '4. OOP & Inheritance (4.1 - 4.7)', percent: 65, color: 'bg-blue-600', status: 'In Progress' },
        { name: '5. Miscellaneous & File I/O (5.1 - 5.5)', percent: 52, color: 'bg-indigo-400', status: 'In Progress' },
      ]
    : [
        { name: '1. Computer Fundamentals (1.1 - 1.4)', percent: 100, color: 'bg-[#C5A059]', status: 'Mastered' },
        { name: '2. Control Flow & Loops (2.1 - 2.4)', percent: 92, color: 'bg-[#C5A059]', status: 'Advanced' },
        { name: '3. Data Collections & Slices (3.1 - 3.4)', percent: 68, color: 'bg-[#DFC287]', status: 'In Progress' },
        { name: '4. Functions & Exceptions (4.1 - 4.4)', percent: 40, color: 'bg-[#DFC287]', status: 'Novice' },
      ];

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] bg-[#0A0A0A] text-[#F5F5F5] pb-16">
      {/* Top Greeting & User Overview Banner */}
      <section className="w-full bg-[#0A0A0A]/90 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-6 border-b border-[#262626]">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
          <div>
            {onNavigateBack && previousViewTitle && (
              <div className="mb-3">
                <button
                  onClick={onNavigateBack}
                  id="dashboard-return-button"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-[#1E1E1E] border border-[#2D2D2D] hover:border-[#454545] text-xs text-[#E5E5E5] hover:text-white font-medium transition-all group shadow-sm"
                  title={`Return to ${previousViewTitle} (Alt+←)`}
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-[#A0A0A0] group-hover:text-white transition-transform group-hover:-translate-x-0.5" />
                  <span className="font-semibold text-[11px] uppercase tracking-wider text-neutral-300 group-hover:text-white">Return</span>
                  <span className="text-neutral-400 font-normal">• {previousViewTitle}</span>
                </button>
              </div>
            )}
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className={`px-2 py-0.5 border rounded font-mono text-xs font-semibold ${
                isPcap ? 'bg-blue-950/50 border-blue-800/40 text-blue-300' : 'bg-[#181818] border-[#262626] text-[#C5A059]'
              }`}>
                Python 3.12 Engine
              </span>
              <span className="text-xs text-[#737373]">•</span>
              <span className="text-xs text-[#A0A0A0]">Active session ongoing</span>

              {/* Track Switcher */}
              {onSelectTrack && (
                <div className="flex items-center p-0.5 bg-[#141414] rounded-lg border border-[#262626] ml-2">
                  <button
                    onClick={() => onSelectTrack('pcap-31-03')}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition-all ${
                      isPcap
                        ? 'bg-blue-600 text-white font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    PCAP-31-03 Track
                  </button>
                  <button
                    onClick={() => onSelectTrack('pcep-30-02')}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition-all ${
                      !isPcap
                        ? 'bg-[#C5A059] text-black font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    PCEP-30-02 Track
                  </button>
                </div>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-light tracking-wide text-[#F5F5F5]">
              Hello {user.name.split(' ')[0]}, ready to code?
            </h1>
            <p className="text-sm text-[#A0A0A0] mt-1">
              {isPcap
                ? 'Targeting PCAP-31-03 Associate: 5 official sections (1.1 → 5.5), 24 modules, 40-question exam simulation.'
                : 'Targeting PCEP-30-02 Certified Entry-Level: 4 official sections (1.1 → 4.4), 16 modules, 30-question exam simulation.'}
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full xl:w-auto">
            {/* Stat 1: Streak */}
            <div className="p-3 bg-[#141414] rounded-lg border border-[#262626] flex flex-col">
              <span className="font-mono text-[10px] text-[#737373] uppercase flex items-center gap-1">
                <Flame className={`w-3.5 h-3.5 ${isPcap ? 'text-blue-400' : 'text-[#DFC287]'}`} />
                <span>Streak</span>
              </span>
              <span className={`text-lg font-bold mt-0.5 ${isPcap ? 'text-blue-400' : 'text-[#DFC287]'}`}>
                {user.streakDays} days
              </span>
              <span className="text-[10px] text-[#737373]">Max consistency</span>
            </div>

            {/* Stat 2: Total XP */}
            <div className="p-3 bg-[#141414] rounded-lg border border-[#262626] flex flex-col">
              <span className="font-mono text-[10px] text-[#737373] uppercase flex items-center gap-1">
                <Zap className={`w-3.5 h-3.5 ${isPcap ? 'text-blue-400' : 'text-[#C5A059]'}`} />
                <span>Experience</span>
              </span>
              <span className={`text-lg font-bold mt-0.5 ${isPcap ? 'text-blue-400' : 'text-[#C5A059]'}`}>
                {user.totalXp.toLocaleString()} XP
              </span>
              <span className={`text-[10px] ${isPcap ? 'text-blue-400' : 'text-[#C5A059]'}`}>+{user.weeklyXp} this week</span>
            </div>

            {/* Stat 3: Challenges */}
            <div className="p-3 bg-[#141414] rounded-lg border border-[#262626] flex flex-col">
              <span className="font-mono text-[10px] text-[#737373] uppercase flex items-center gap-1">
                <CheckCircle2 className={`w-3.5 h-3.5 ${isPcap ? 'text-blue-400' : 'text-[#C5A059]'}`} />
                <span>Challenges</span>
              </span>
              <span className="text-lg font-bold text-[#F5F5F5] mt-0.5">
                {user.completedChallenges} solved
              </span>
              <span className="text-[10px] text-[#737373]">{user.firstTryPassRate}% on 1st try</span>
            </div>

            {/* Stat 4: Track Progress */}
            <div className="p-3 bg-[#141414] rounded-lg border border-[#262626] flex flex-col">
              <span className="font-mono text-[10px] text-[#737373] uppercase flex items-center gap-1">
                <Brain className={`w-3.5 h-3.5 ${isPcap ? 'text-blue-400' : 'text-[#DFC287]'}`} />
                <span>{isPcap ? 'PCAP Track' : 'PCEP Track'}</span>
              </span>
              <span className="text-lg font-bold text-[#F5F5F5] mt-0.5">
                {isPcap ? '18/24' : '12/16'}
              </span>
              <span className={`text-[10px] ${isPcap ? 'text-blue-400' : 'text-[#DFC287]'}`}>
                {isPcap ? '75% completed' : '75% completed'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Workspace Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT 8 COLUMNS: Certification Hub, Heatmap, Domain Mastery, Recent Submissions, Real Projects */}
          <div className="lg:col-span-8 space-y-8">
            {/* Certification Training Banner */}
            {isPcap ? (
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141414] via-[#0b1424] to-[#141414] border border-blue-500/50 shadow-2xl relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="space-y-1.5 z-10">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-blue-950/60 text-blue-300 font-mono text-[11px] font-bold rounded-full border border-blue-700/40 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-blue-400" />
                      OFFICIAL PCAP-31-03 SYLLABUS
                    </span>
                    <span className="text-xs font-mono text-neutral-400">24 Chapters (1.1 → 5.5)</span>
                  </div>
                  <h2 className="text-xl font-serif font-medium text-[#F5F5F5]">
                    PCAP™ Associate Training – Python Institute
                  </h2>
                  <p className="text-xs text-[#A0A0A0] max-w-xl leading-relaxed">
                    Practice across all 5 official sections: Modules (1.1-1.5), Exceptions (2.1-2.4), Strings (3.1-3.6), OOP (4.1-4.7), and Miscellaneous / File I/O (5.1-5.5) with the timed 40-question mock exam.
                  </p>
                  <div className="flex items-center gap-4 pt-1 text-xs font-mono">
                    <span className="text-blue-400 font-semibold">18/24 chapters completed</span>
                    <span className="text-[#737373]">•</span>
                    <span className="text-blue-300">Estimated score: 85% (Passing score: 70%)</span>
                  </div>
                </div>

                {onOpenPcepExam && (
                  <button
                    onClick={onOpenPcepExam}
                    className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-xl flex items-center gap-2 transition-all shrink-0 z-10"
                  >
                    <Award className="w-4 h-4 text-white" />
                    <span>PCAP Simulator</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141414] via-[#1A1812] to-[#141414] border border-[#C5A059]/50 shadow-2xl relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="space-y-1.5 z-10">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-[#C5A059]/20 text-[#DFC287] font-mono text-[11px] font-bold rounded-full border border-[#C5A059]/40 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                      OFFICIAL PCEP-30-02 SYLLABUS
                    </span>
                    <span className="text-xs font-mono text-[#737373]">16 Chapters (1.1 → 4.4)</span>
                  </div>
                  <h2 className="text-xl font-serif font-medium text-[#F5F5F5]">
                    PCEP™ Certification Training – Python Institute
                  </h2>
                  <p className="text-xs text-[#A0A0A0] max-w-xl leading-relaxed">
                    Practice across all 4 official sections (Fundamentals 18%, Control Flow 29%, Collections 25%, Functions & Exceptions 28%) and take the timed 30-question mock exam.
                  </p>
                  <div className="flex items-center gap-4 pt-1 text-xs font-mono">
                    <span className="text-[#C5A059] font-semibold">12/16 chapters completed</span>
                    <span className="text-[#737373]">•</span>
                    <span className="text-[#DFC287]">Estimated score: 82% (Passing score: 70%)</span>
                  </div>
                </div>

                {onOpenPcepExam && (
                  <button
                    onClick={onOpenPcepExam}
                    className="px-5 py-3 rounded-xl bg-[#C5A059] hover:bg-[#D6B574] text-[#0A0A0A] font-bold text-xs uppercase tracking-wider shadow-xl flex items-center gap-2 transition-all shrink-0 z-10"
                  >
                    <Award className="w-4 h-4 text-[#0A0A0A]" />
                    <span>Exam Simulator</span>
                  </button>
                )}
              </div>
            )}

            {/* Quick Resume Challenge Card */}
            {isPcap ? (
              <div className="p-5 rounded-xl bg-gradient-to-r from-[#141414] via-[#0c1626] to-[#141414] border border-blue-900/50 hover:border-blue-500/50 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-blue-950/60 text-blue-400 font-mono text-[10px] font-bold rounded border border-blue-800/40">
                      PCAP-31-03 4.2 • ACTIVE CHALLENGE
                    </span>
                    <span className="text-xs text-[#A0A0A0]">Object-Oriented Programming</span>
                  </div>
                  <h2 className="text-lg font-serif font-medium text-[#F5F5F5]">
                    Challenge: Implement Encapsulation and Private Name Mangling
                  </h2>
                  <p className="text-xs text-[#A0A0A0]">
                    Handle double leading underscore attributes, instance variables, and private methods.
                  </p>
                </div>
                <button
                  onClick={() => onOpenChallenge('pcap-challenge-4-2')}
                  className="px-5 py-2.5 rounded-lg bg-blue-950/60 hover:bg-blue-900/60 border border-blue-600/40 text-blue-200 font-semibold text-xs uppercase tracking-wider shadow-md flex items-center gap-2 transition-all shrink-0"
                >
                  <Play className="w-4 h-4 fill-blue-300" />
                  <span>Open in IDE</span>
                </button>
              </div>
            ) : (
              <div className="p-5 rounded-xl bg-gradient-to-r from-[#141414] via-[#1A1A1A] to-[#202020] border border-[#262626] hover:border-[#C5A059]/40 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#C5A059]/20 text-[#C5A059] font-mono text-[10px] font-bold rounded border border-[#C5A059]/30">
                      PCEP-30-02 2.3 • ACTIVE CHALLENGE
                    </span>
                    <span className="text-xs text-[#A0A0A0]">Control Flow & Loops</span>
                  </div>
                  <h2 className="text-lg font-serif font-medium text-[#F5F5F5]">
                    Challenge: Nested loops and break / continue statements
                  </h2>
                  <p className="text-xs text-[#A0A0A0]">
                    Handle nested loops and conditional jump instructions.
                  </p>
                </div>
                <button
                  onClick={() => onOpenChallenge('challenge-pcep-2-3')}
                  className="px-5 py-2.5 rounded-lg bg-[#1C1C1C] hover:bg-[#262626] border border-[#C5A059]/40 text-[#DFC287] font-semibold text-xs uppercase tracking-wider shadow-md flex items-center gap-2 transition-all shrink-0"
                >
                  <Play className="w-4 h-4 fill-[#DFC287]" />
                  <span>Open in IDE</span>
                </button>
              </div>
            )}

            {/* Heatmap & Domain Mastery */}
            <div className="p-6 bg-[#141414] rounded-xl border border-[#262626] space-y-6">
              {/* Activity Heatmap Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#C5A059]" />
                  <h3 className="text-xs font-semibold text-[#F5F5F5] uppercase tracking-[1.5px]">
                    Past 30 Days Activity
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#C5A059]">
                  Active streak: {user.streakDays} consecutive days
                </span>
              </div>

              {/* Heatmap Squares Grid */}
              <div className="flex flex-wrap gap-2 pt-1">
                {heatmapDays.map((d, i) => (
                  <div
                    key={i}
                    title={`Day ${d.day}: ${d.intensity * 2 + 1} exercises completed`}
                    className={`w-6 h-6 rounded-sm border border-[#262626] transition-all hover:scale-110 cursor-pointer ${
                      d.intensity === 4
                        ? 'bg-[#C5A059] shadow-[0_0_8px_rgba(197,160,89,0.5)]'
                        : d.intensity === 3
                        ? 'bg-[#DFC287]'
                        : d.intensity === 2
                        ? 'bg-[#2A2A2A]'
                        : d.intensity === 1
                        ? 'bg-[#1C1C1C]'
                        : 'bg-[#0F0F0F]'
                    }`}
                  />
                ))}
              </div>

              {/* Domain Mastery Bars */}
              <div className="pt-4 border-t border-[#262626] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#F5F5F5] uppercase tracking-[1.5px]">
                    Key Domain Mastery
                  </span>
                  <button
                    onClick={onOpenParcours}
                    className="text-xs text-[#C5A059] hover:underline font-mono"
                  >
                    View full skill tree &rarr;
                  </button>
                </div>

                <div className="space-y-2.5">
                  {domainMastery.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[#A0A0A0]">{item.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[#737373] text-[11px]">{item.status}</span>
                          <span className="text-[#F5F5F5] font-semibold">{item.percent}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-[#1C1C1C] h-1.5 rounded-full overflow-hidden border border-[#262626]">
                        <div
                          className={`h-full ${item.color} rounded-full`}
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Submissions */}
            <div className="p-6 bg-[#141414] rounded-xl border border-[#262626] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-[#C5A059]" />
                  <h3 className="text-xs font-semibold text-[#F5F5F5] uppercase tracking-[1.5px]">
                    Recent Challenges &amp; Submissions
                  </h3>
                </div>
                <span className="text-xs text-[#737373] font-mono">
                  {submissions.length} recent
                </span>
              </div>

              <div className="space-y-2.5">
                {submissions.map((sub) => (
                  <div
                    key={sub.id}
                    onClick={() => onOpenChallenge(sub.challengeId)}
                    className="p-3.5 bg-[#181818] hover:bg-[#1E1E1E] rounded-lg border border-[#262626] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 cursor-pointer transition-all group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-md bg-[#1C1C1C] flex items-center justify-center text-[#C5A059] shrink-0 border border-[#262626] group-hover:border-[#C5A059]/40">
                        <Code className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-[#C5A059] truncate">
                          {sub.title}
                        </h4>
                        <div className="flex items-center gap-2 font-mono text-[11px] text-[#737373]">
                          <span>{sub.filename}</span>
                          <span>•</span>
                          <span>{sub.timeAgo}</span>
                          <span>•</span>
                          <span className="text-[#C5A059]">{sub.assertionsPassed}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      {sub.xpEarned > 0 && (
                        <span className="px-2 py-0.5 bg-[#1C1C1C] text-[#C5A059] font-mono text-xs rounded border border-[#C5A059]/30">
                          +{sub.xpEarned} XP
                        </span>
                      )}
                      <ArrowRight className="w-4 h-4 text-[#737373] group-hover:text-[#F5F5F5] group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Projects (Portfolio) */}
            <div className="p-6 bg-[#141414] rounded-xl border border-[#262626] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#DFC287]" />
                  <h3 className="text-xs font-semibold text-[#F5F5F5] uppercase tracking-[1.5px]">
                    Real-World Projects (Portfolio)
                  </h3>
                </div>
                <span className="text-xs text-[#737373] font-mono">3 Integrated Projects</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className={`p-4 rounded-lg border flex flex-col justify-between transition-all ${
                      proj.locked
                        ? 'bg-[#181818]/40 border-[#262626] opacity-60'
                        : 'bg-[#181818] border-[#262626] hover:border-[#C5A059]/40'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-mono text-[10px] px-2 py-0.5 rounded ${
                            proj.locked
                              ? 'bg-[#1C1C1C] text-[#737373]'
                              : 'bg-[#1C1C1C] text-[#C5A059] border border-[#C5A059]/30'
                          }`}
                        >
                          {proj.badge}
                        </span>
                        {proj.locked && <Lock className="w-3.5 h-3.5 text-[#737373]" />}
                      </div>
                      <h4 className="text-xs font-semibold text-[#F5F5F5] leading-snug">
                        {proj.title}
                      </h4>
                      <p className="text-[11px] text-[#A0A0A0] leading-relaxed line-clamp-3">
                        {proj.description}
                      </p>
                    </div>

                    {!proj.locked && (
                      <div className="pt-3 mt-3 border-t border-[#262626]">
                        <button
                          onClick={() => onOpenChallenge('challenge-42')}
                          className="w-full py-1.5 rounded bg-[#1C1C1C] hover:bg-[#222222] text-[#C5A059] hover:text-[#F5F5F5] text-xs font-semibold flex items-center justify-center gap-1 transition-colors border border-[#C5A059]/30"
                        >
                          <span>Continue</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT 4 COLUMNS: Daily Quests, Diamond League Leaderboard, SRS Quick Launch */}
          <div className="lg:col-span-4 space-y-6">
            {/* Daily Quests Card */}
            <div className="p-5 bg-[#141414] rounded-xl border border-[#262626] space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#DFC287]" />
                  <h3 className="text-xs font-semibold text-[#F5F5F5] uppercase tracking-[1.5px]">
                    Daily Quests
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-[#C5A059]">
                  2/3 completed
                </span>
              </div>

              <div className="space-y-2">
                {quests.map((q) => (
                  <div
                    key={q.id}
                    className={`p-3 rounded-lg border transition-all ${
                      q.completed
                        ? 'bg-[#181818]/60 border-[#262626]'
                        : 'bg-[#181818] border-[#C5A059]/40 shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2">
                        {q.completed ? (
                          <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                        ) : (
                          <Clock className="w-4 h-4 text-[#DFC287] shrink-0 mt-0.5" />
                        )}
                        <div>
                          <div className="text-xs font-semibold text-[#F5F5F5]">
                            {q.title}
                          </div>
                          <div className="text-[10px] text-[#737373] font-mono mt-0.5">
                            {q.statusText}
                          </div>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-[#DFC287] font-bold shrink-0">
                        +{q.xpReward} XP
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Diamond League Leaderboard */}
            <div className="p-5 bg-[#141414] rounded-xl border border-[#262626] space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#C5A059]" />
                  <h3 className="text-xs font-semibold text-[#F5F5F5] uppercase tracking-[1.5px]">
                    Diamond League (Top 5)
                  </h3>
                </div>
                <span className="font-mono text-[10px] text-[#DFC287] px-2 py-0.5 bg-[#1C1C1C] rounded border border-[#262626]">
                  Ends in: 2d
                </span>
              </div>

              <div className="space-y-1.5">
                {leaderboard.map((item) => (
                  <div
                    key={item.rank}
                    className={`p-2.5 rounded-lg flex items-center justify-between transition-colors ${
                      item.isCurrentUser
                        ? 'bg-[#1E1E1E] border border-[#C5A059]/50 ring-1 ring-[#C5A059]/30'
                        : 'bg-[#181818]/60 hover:bg-[#181818]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`w-5 font-mono text-xs font-bold text-center ${
                          item.rank === 1
                            ? 'text-[#DFC287]'
                            : item.rank === 2
                            ? 'text-[#F5F5F5]'
                            : item.rank === 3
                            ? 'text-[#C5A059]'
                            : 'text-[#737373]'
                        }`}
                      >
                        {item.rank}
                      </span>
                      <img
                        src={item.avatarUrl}
                        alt={item.name}
                        className="w-7 h-7 rounded-full object-cover border border-[#262626]"
                        referrerPolicy="no-referrer"
                      />
                      <span
                        className={`text-xs truncate ${
                          item.isCurrentUser
                            ? 'font-bold text-[#C5A059]'
                            : 'text-[#F5F5F5]'
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>

                    <span className="font-mono text-xs font-semibold text-[#C5A059] shrink-0">
                      {item.xp.toLocaleString()} XP
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SRS Quick Launch Banner */}
            <div className="p-5 bg-gradient-to-br from-[#181818] to-[#141414] rounded-xl border border-[#262626] space-y-3">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-[#C5A059]" />
                <h3 className="text-xs font-semibold text-[#F5F5F5] uppercase tracking-[1.5px]">
                  Flashcards &amp; SRS
                </h3>
              </div>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                8 cards scheduled for today based on the SM-2 spaced repetition algorithm.
              </p>
              <button
                onClick={onOpenSrs}
                className="w-full py-2 bg-[#1C1C1C] hover:bg-[#222222] text-[#C5A059] hover:text-[#F5F5F5] border border-[#C5A059]/40 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <span>Start session (8 cards)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
