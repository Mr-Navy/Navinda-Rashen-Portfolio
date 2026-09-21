import React, { useState } from 'react';
import { FEATURED_PROJECTS, TECH_LOGOS } from '../data/portfolioData';
import {
  Code2,
  ArrowUpRight,
  Search,
  Calendar,
  ShieldCheck,
  Bell,
  LineChart,
  Binary,
  Gauge,
  Sliders,
  Bot,
  Trophy,
  Database,
  RefreshCw,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';

export const ProjectShowcase: React.FC = () => {
  // State for interactive features
  // 1. Social Media Addiction Predictor interactive slider
  const [screenTimeHours, setScreenTimeHours] = useState<number>(5.5);
  const [notifCount, setNotifCount] = useState<number>(120);
  const [activePreviewTab, setActivePreviewTab] = useState<'images' | 'calculator'>('images');

  // 2. Quiz Manager active round
  const [activeRound, setActiveRound] = useState<number>(3);

  // Calculate simulated addiction risk score
  const calculateRisk = () => {
    const rawScore = screenTimeHours * 10 + notifCount * 0.35;
    if (rawScore > 75) return { label: 'High Strain Risk', level: 'HIGH', color: 'text-red-400', pct: 88 };
    if (rawScore > 45) return { label: 'Moderate Fatigue', level: 'MODERATE', color: 'text-yellow-400', pct: 64 };
    return { label: 'Low Usage Stress', level: 'OPTIMAL', color: 'text-[#10ef6f]', pct: 32 };
  };

  const currentRisk = calculateRisk();

  const getFeatureIcon = (name: string) => {
    switch (name) {
      case 'find_in_page':
        return <Search className="w-4 h-4 text-[#10ef6f]" />;
      case 'event_available':
        return <Calendar className="w-4 h-4 text-[#10ef6f]" />;
      case 'verified_user':
        return <ShieldCheck className="w-4 h-4 text-[#10ef6f]" />;
      case 'notifications_active':
        return <Bell className="w-4 h-4 text-[#10ef6f]" />;
      case 'query_stats':
        return <LineChart className="w-4 h-4 text-[#10ef6f]" />;
      case 'model_training':
        return <Binary className="w-4 h-4 text-[#10ef6f]" />;
      case 'analytics':
        return <Gauge className="w-4 h-4 text-[#10ef6f]" />;
      case 'speed':
        return <Sliders className="w-4 h-4 text-[#10ef6f]" />;
      case 'smart_toy':
        return <Bot className="w-4 h-4 text-[#10ef6f]" />;
      case 'leaderboard':
        return <Trophy className="w-4 h-4 text-[#10ef6f]" />;
      case 'storage':
        return <Database className="w-4 h-4 text-[#10ef6f]" />;
      case 'sync':
        return <RefreshCw className="w-4 h-4 text-[#10ef6f]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#10ef6f]" />;
    }
  };

  return (
    <section id="work" className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-20">
      {/* Section Headline */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10ef6f]/10 border border-[#10ef6f]/30 text-[#10ef6f] text-xs font-mono mb-3 uppercase tracking-wider">
          01 / SELECTED WORK
        </div>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          View <span className="text-[#10ef6f]">My Work</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
          Software, data, and AI systems built through rigorous academic research, active open-source contribution, and practical systems engineering.
        </p>
      </div>

      {/* Featured Project Cards Container */}
      <div className="space-y-12 lg:space-y-16">
        {/* ========================================================================= */}
        {/* PROJECT 01: UniGO */}
        {/* ========================================================================= */}
        {FEATURED_PROJECTS[0] && (
          <article className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0e1511] border border-[#10ef6f]/25 hover:border-[#10ef6f]/60 transition-all duration-300 shadow-card-glow group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-gray-400 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#10ef6f]/15 text-[#10ef6f] font-semibold">
                      {FEATURED_PROJECTS[0].number}
                    </span>
                    <span>/</span>
                    <span>{FEATURED_PROJECTS[0].category}</span>
                    <span>/</span>
                    <span className="text-[#22c55e]">{FEATURED_PROJECTS[0].subCategory}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[#10ef6f] transition-colors">
                    {FEATURED_PROJECTS[0].title}{' '}
                    <span className="text-gray-400 text-base sm:text-lg font-normal block sm:inline">
                      — {FEATURED_PROJECTS[0].subtitle}
                    </span>
                  </h3>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    {FEATURED_PROJECTS[0].description}
                  </p>

                  {/* 4 Feature Subcards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {FEATURED_PROJECTS[0].features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#141f18] border border-white/5 hover:border-[#10ef6f]/30 transition-colors"
                      >
                        <div className="flex items-center gap-2 text-sm font-semibold text-white mb-1">
                          {getFeatureIcon(feature.iconName)}
                          <span>{feature.title}</span>
                        </div>
                        <p className="text-xs text-gray-400 leading-normal">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills & Links */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    {FEATURED_PROJECTS[0].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16221a] border border-[#10ef6f]/20 text-gray-300"
                      >
                        {TECH_LOGOS[tech] && (
                          <img
                            src={TECH_LOGOS[tech]}
                            alt={tech}
                            className="w-3.5 h-3.5 object-contain"
                            referrerPolicy="no-referrer"
                          />
                        )}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={FEATURED_PROJECTS[0].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141f18] border border-[#10ef6f]/30 hover:border-[#10ef6f] text-white font-mono text-xs hover:text-[#10ef6f] transition-all"
                    >
                      <img
                        src="/logos/github.svg"
                        alt="GitHub"
                        className="w-4 h-4 object-contain rounded-full group-hover:scale-110 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                      <span>{FEATURED_PROJECTS[0].githubRepoName}</span>
                    </a>
                    <a
                      href={FEATURED_PROJECTS[0].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#10ef6f] text-black flex items-center justify-center hover:shadow-neon hover:scale-105 transition-all"
                      title="View Repository"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Code / Terminal Visual (5 Cols) */}
              <div className="lg:col-span-5 rounded-2xl bg-[#060a08] border border-[#10ef6f]/25 p-5 font-mono text-xs overflow-hidden shadow-inner w-full">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10ef6f]" />
                    <span className="ml-2 text-gray-300 font-mono">
                      {FEATURED_PROJECTS[0].codeSnippet?.filename}
                    </span>
                  </div>
                  <span className="text-[#10ef6f] font-semibold">
                    {FEATURED_PROJECTS[0].codeSnippet?.status}
                  </span>
                </div>

                <pre className="leading-relaxed text-gray-300 overflow-x-auto text-[11px] sm:text-xs py-1">
                  <code>{FEATURED_PROJECTS[0].codeSnippet?.code}</code>
                </pre>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-gray-400 text-[11px]">
                  <span>LATENCY: &lt;42ms</span>
                  <span className="text-[#10ef6f]">TEST COVERAGE: 94.2%</span>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* ========================================================================= */}
        {/* PROJECT 02: Social Media Addiction Predictor */}
        {/* ========================================================================= */}
        {FEATURED_PROJECTS[1] && (
          <article className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0e1511] border border-[#10ef6f]/25 hover:border-[#10ef6f]/60 transition-all duration-300 shadow-card-glow group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-gray-400 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#10ef6f]/15 text-[#10ef6f] font-semibold">
                      {FEATURED_PROJECTS[1].number}
                    </span>
                    <span>/</span>
                    <span>{FEATURED_PROJECTS[1].category}</span>
                    <span>/</span>
                    <span className="text-[#22c55e]">{FEATURED_PROJECTS[1].subCategory}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[#10ef6f] transition-colors">
                    {FEATURED_PROJECTS[1].title}{' '}
                    <span className="text-gray-400 text-base sm:text-lg font-normal block sm:inline">
                      — {FEATURED_PROJECTS[1].subtitle}
                    </span>
                  </h3>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    {FEATURED_PROJECTS[1].description}
                  </p>

                  {/* 4 Feature Subcards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {FEATURED_PROJECTS[1].features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#141f18] border border-white/5 hover:border-[#10ef6f]/30 transition-colors"
                      >
                        <div className="flex items-center gap-2 text-sm font-semibold text-white mb-1">
                          {getFeatureIcon(feature.iconName)}
                          <span>{feature.title}</span>
                        </div>
                        <p className="text-xs text-gray-400 leading-normal">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills & Links */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    {FEATURED_PROJECTS[1].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16221a] border border-[#10ef6f]/20 text-gray-300"
                      >
                        {TECH_LOGOS[tech] && (
                          <img
                            src={TECH_LOGOS[tech]}
                            alt={tech}
                            className="w-3.5 h-3.5 object-contain"
                            referrerPolicy="no-referrer"
                          />
                        )}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={FEATURED_PROJECTS[1].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141f18] border border-[#10ef6f]/30 hover:border-[#10ef6f] text-white font-mono text-xs hover:text-[#10ef6f] transition-all"
                    >
                      <img
                        src="/logos/github.svg"
                        alt="GitHub"
                        className="w-4 h-4 object-contain rounded-full group-hover:scale-110 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                      <span>{FEATURED_PROJECTS[1].githubRepoName}</span>
                    </a>
                    <a
                      href={FEATURED_PROJECTS[1].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#10ef6f] text-black flex items-center justify-center hover:shadow-neon hover:scale-105 transition-all"
                      title="View Repository"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right ML Visual Interface (5 Cols) */}
              <div className="lg:col-span-5 rounded-2xl bg-[#080d0a] border border-[#10ef6f]/25 p-4 sm:p-5 shadow-card-glow relative overflow-hidden flex flex-col justify-between w-full">
                <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10 text-gray-400 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10ef6f] animate-pulse" />
                    <span className="text-white font-semibold">SYSTEM_UI_INTERFACE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#10ef6f] font-bold text-[11px]">
                      MODEL_ACC: {FEATURED_PROJECTS[1].mlData?.accuracy}
                    </span>
                  </div>
                </div>

                {/* Subnav for Preview Mode: UI Screenshots vs Interactive Predictor */}
                <div className="flex items-center gap-1 bg-[#121c15] p-1 rounded-xl mb-3 font-mono text-[11px]">
                  <button
                    type="button"
                    onClick={() => setActivePreviewTab('images')}
                    className={`flex-1 py-1 px-2 rounded-lg transition-colors ${
                      activePreviewTab === 'images'
                        ? 'bg-[#10ef6f] text-black font-semibold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    UI SCREENSHOTS
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePreviewTab('calculator')}
                    className={`flex-1 py-1 px-2 rounded-lg transition-colors ${
                      activePreviewTab === 'calculator'
                        ? 'bg-[#10ef6f] text-black font-semibold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    LIVE PREDICTOR SLIDERS
                  </button>
                </div>

                {activePreviewTab === 'images' ? (
                  /* Dual Screenshots matching screen.png */
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-start">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#22c55e] px-1">
                        <span>DASHBOARD UI</span>
                        <span className="text-gray-500 text-[9px]">ANALYSIS</span>
                      </div>
                      <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/40 group/dash relative">
                        <img
                          src={FEATURED_PROJECTS[1].mlData?.dashboardImage}
                          alt="SocialSense Prediction Result UI"
                          className="w-full h-auto object-cover block group-hover/dash:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#22c55e] px-1">
                        <span>AI COUNSELOR</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10ef6f] animate-ping" />
                      </div>
                      <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/40 group/chat relative">
                        <img
                          src={FEATURED_PROJECTS[1].mlData?.chatImage}
                          alt="Wellness Counselor Gemini AI Chat"
                          className="w-full h-auto object-cover block group-hover/chat:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Interactive Parameter Simulator */
                  <div className="space-y-3.5 bg-[#0e1611] p-4 rounded-xl border border-white/10 font-mono text-xs">
                    <div>
                      <div className="flex justify-between text-gray-300 mb-1">
                        <span>Daily Screen Time:</span>
                        <span className="text-[#10ef6f] font-bold">{screenTimeHours} hrs</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="14"
                        step="0.5"
                        value={screenTimeHours}
                        onChange={(e) => setScreenTimeHours(parseFloat(e.target.value))}
                        className="w-full accent-[#10ef6f] cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-gray-300 mb-1">
                        <span>Daily Notifications:</span>
                        <span className="text-[#10ef6f] font-bold">{notifCount} alerts</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="300"
                        step="10"
                        value={notifCount}
                        onChange={(e) => setNotifCount(parseInt(e.target.value))}
                        className="w-full accent-[#10ef6f] cursor-pointer"
                      />
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                      <span className="text-gray-400">Scored Classifier:</span>
                      <span className={`font-bold ${currentRisk.color}`}>{currentRisk.label}</span>
                    </div>

                    {/* Gauge bar */}
                    <div className="w-full bg-[#060a08] h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#10ef6f] transition-all duration-300"
                        style={{ width: `${currentRisk.pct}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span className="flex items-center gap-1.5 text-[#10ef6f]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10ef6f]" />
                    {FEATURED_PROJECTS[1].mlData?.statusBadge}
                  </span>
                  <span className="text-gray-400 text-[10px]">FLASK + GEMINI AI</span>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* ========================================================================= */}
        {/* PROJECT 03: Quiz Manager using AI */}
        {/* ========================================================================= */}
        {FEATURED_PROJECTS[2] && (
          <article className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0e1511] border border-[#10ef6f]/25 hover:border-[#10ef6f]/60 transition-all duration-300 shadow-card-glow group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-gray-400 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#10ef6f]/15 text-[#10ef6f] font-semibold">
                      {FEATURED_PROJECTS[2].number}
                    </span>
                    <span>/</span>
                    <span>{FEATURED_PROJECTS[2].category}</span>
                    <span>/</span>
                    <span className="text-[#22c55e]">{FEATURED_PROJECTS[2].subCategory}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[#10ef6f] transition-colors">
                    {FEATURED_PROJECTS[2].title}{' '}
                    <span className="text-gray-400 text-base sm:text-lg font-normal block sm:inline">
                      — {FEATURED_PROJECTS[2].subtitle}
                    </span>
                  </h3>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    {FEATURED_PROJECTS[2].description}
                  </p>

                  {/* 4 Feature Subcards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {FEATURED_PROJECTS[2].features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#141f18] border border-white/5 hover:border-[#10ef6f]/30 transition-colors"
                      >
                        <div className="flex items-center gap-2 text-sm font-semibold text-white mb-1">
                          {getFeatureIcon(feature.iconName)}
                          <span>{feature.title}</span>
                        </div>
                        <p className="text-xs text-gray-400 leading-normal">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills & Links */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    {FEATURED_PROJECTS[2].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16221a] border border-[#10ef6f]/20 text-gray-300"
                      >
                        {TECH_LOGOS[tech] && (
                          <img
                            src={TECH_LOGOS[tech]}
                            alt={tech}
                            className="w-3.5 h-3.5 object-contain"
                            referrerPolicy="no-referrer"
                          />
                        )}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={FEATURED_PROJECTS[2].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141f18] border border-[#10ef6f]/30 hover:border-[#10ef6f] text-white font-mono text-xs hover:text-[#10ef6f] transition-all"
                    >
                      <img
                        src="/logos/github.svg"
                        alt="GitHub"
                        className="w-4 h-4 object-contain rounded-full group-hover:scale-110 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                      <span>{FEATURED_PROJECTS[2].githubRepoName}</span>
                    </a>
                    <a
                      href={FEATURED_PROJECTS[2].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#10ef6f] text-black flex items-center justify-center hover:shadow-neon hover:scale-105 transition-all"
                      title="View Repository"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Leaderboard State Visual (5 Cols) */}
              <div className="lg:col-span-5 rounded-2xl bg-[#060a08] border border-[#10ef6f]/25 p-5 font-mono text-xs shadow-inner w-full">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-gray-400">
                  <span className="text-white font-semibold">ELECTRON_IPC_ORCHESTRATOR</span>
                  <div className="flex items-center gap-1 text-[11px]">
                    <span className="text-[#10ef6f] font-semibold">ROUND {activeRound}</span>
                    <button
                      type="button"
                      onClick={() => setActiveRound((prev) => (prev % 3) + 1)}
                      className="text-gray-400 hover:text-white px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] ml-1"
                      title="Toggle Round"
                    >
                      Cycle
                    </button>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-[#121c15] border border-[#10ef6f]/25 flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Team Alfa (CS Dept)</div>
                      <div className="text-[10px] text-gray-400">Round {activeRound} Buzzer: 120ms</div>
                    </div>
                    <span className="text-[#10ef6f] font-bold text-sm">
                      {1420 + (activeRound - 3) * 150} PTS
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#121c15] border border-[#10ef6f]/20 flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Team Beta (Data Sci)</div>
                      <div className="text-[10px] text-gray-400">Round {activeRound} Buzzer: 145ms</div>
                    </div>
                    <span className="text-[#10ef6f] font-bold text-sm">
                      {1380 + (activeRound - 3) * 120} PTS
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#121c15] border border-[#10ef6f]/20 flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Team Gamma (Software Eng)</div>
                      <div className="text-[10px] text-gray-400">Round {activeRound} Buzzer: 180ms</div>
                    </div>
                    <span className="text-[#10ef6f] font-bold text-sm">
                      {1210 + (activeRound - 3) * 180} PTS
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-gray-400">
                  <span>LLM Latency: 420ms</span>
                  <span className="text-[#10ef6f]">SQLITE: PERSISTED</span>
                </div>
              </div>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};
