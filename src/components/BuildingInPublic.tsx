import React from 'react';
import { PORTFOLIO_INFO, TELEMETRY_COMMITS } from '../data/portfolioData';
import { ArrowRight, GitCommit as GitIcon, Activity, Sparkles } from 'lucide-react';

export const BuildingInPublic: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-16 border-t border-[#10ef6f]/15">
      <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0e1511] border border-[#10ef6f]/25 shadow-card-glow relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#10ef6f]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#10ef6f] mb-1 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5" />
              <span>LIVE TELEMETRY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Building in Public
            </h3>
          </div>

          <a
            href={PORTFOLIO_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#141f18] border border-[#10ef6f]/30 hover:border-[#10ef6f] text-white font-mono text-xs hover:text-[#10ef6f] transition-all self-start sm:self-auto group"
          >
            <span>View GitHub Profile</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 4 Proof Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-b border-white/10">
          <div>
            <div className="text-3xl lg:text-4xl font-extrabold text-white">14+</div>
            <div className="font-mono text-xs text-gray-400 uppercase tracking-wider mt-1">
              Public Repositories
            </div>
          </div>

          <div>
            <div className="text-3xl lg:text-4xl font-extrabold text-[#10ef6f]">Active</div>
            <div className="font-mono text-xs text-gray-400 uppercase tracking-wider mt-1">
              Weekly Commits
            </div>
          </div>

          <div>
            <div className="text-3xl lg:text-4xl font-extrabold text-white">UniGO</div>
            <div className="font-mono text-xs text-gray-400 uppercase tracking-wider mt-1">
              Latest Core Push
            </div>
          </div>

          <div>
            <div className="text-3xl lg:text-4xl font-extrabold text-[#22c55e]">Py · TS</div>
            <div className="font-mono text-xs text-gray-400 uppercase tracking-wider mt-1">
              Top Language Footprint
            </div>
          </div>
        </div>

        {/* Activity Feed Terminal */}
        <div className="pt-6">
          <div className="font-mono text-xs text-gray-400 flex items-center justify-between mb-3.5">
            <span>RECENT_TRANSACTIONS :: GITHUB_STREAM</span>
            <span className="text-[#10ef6f] font-medium">BRANCH: main</span>
          </div>

          <div className="space-y-2.5 font-mono text-xs text-gray-300">
            {TELEMETRY_COMMITS.map((commit) => (
              <div
                key={commit.id}
                className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 font-medium">{commit.action}</span>
                  <span className="text-[#10ef6f] font-semibold">{commit.repo}</span>
                </div>
                <span className="text-gray-400 truncate sm:border-l sm:border-white/10 sm:pl-2.5">
                  {commit.message}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
