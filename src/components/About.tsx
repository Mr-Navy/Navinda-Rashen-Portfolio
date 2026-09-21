import React from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { ShieldCheck, Compass, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-20 border-t border-[#10ef6f]/15">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Narrative (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10ef6f]/10 border border-[#10ef6f]/30 text-[#10ef6f] text-xs font-mono mb-4 uppercase tracking-wider">
            02 / ABOUT ME
          </div>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
            About Me: Passionate about{' '}
            <span className="text-[#10ef6f]">software engineering</span>, data systems, and applied AI.
          </h2>

          <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a Computer Science undergraduate with an unrelenting curiosity for how high-scale software and statistical models interact in production environments. My background bridges traditional systems programming—writing deterministic, decoupled code—with the probabilistic realm of modern artificial intelligence.
            </p>
            <p>
              Whether architecting offline-first desktop systems with Electron and SQLite, building cross-platform campus applications in React Native and Flutter, or training predictive models using Scikit-learn and Pandas, I prioritize algorithmic efficiency, maintainable file architecture, and tactile developer UX.
            </p>
          </div>

          {/* 3 Engineering Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
            <div className="p-4 rounded-2xl bg-[#0e1511] border border-white/5 hover:border-[#10ef6f]/30 transition-colors">
              <div className="font-mono text-xs text-[#10ef6f] mb-1">01 / DISCIPLINE</div>
              <div className="text-sm font-bold text-white mb-1">Architecture First</div>
              <p className="text-xs text-gray-400">Clear component boundaries and testable modularity.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0e1511] border border-white/5 hover:border-[#10ef6f]/30 transition-colors">
              <div className="font-mono text-xs text-[#10ef6f] mb-1">02 / EMPIRICISM</div>
              <div className="text-sm font-bold text-white mb-1">Evidence-Driven ML</div>
              <p className="text-xs text-gray-400">Treating models as statistical experiments validated thoroughly.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0e1511] border border-white/5 hover:border-[#10ef6f]/30 transition-colors">
              <div className="font-mono text-xs text-[#10ef6f] mb-1">03 / VELOCITY</div>
              <div className="text-sm font-bold text-white mb-1">Continuous Craft</div>
              <p className="text-xs text-gray-400">Deep daily commitment to open source and systems literature.</p>
            </div>
          </div>
        </div>

        {/* Right Spec Sheet Card (5 Cols) */}
        <div className="lg:col-span-5">
          <div className="p-6 rounded-3xl bg-[#0e1511] border border-[#10ef6f]/30 shadow-card-glow">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative mb-5 bg-black border border-[#10ef6f]/20 group">
              <img
                src={PORTFOLIO_INFO.aboutImage}
                alt="Navinda Rashen Portrait"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement?.classList.add('bg-[#141f18]');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d0a] via-transparent to-transparent opacity-85" />
            </div>

            {/* Technical Specs Table */}
            <div className="space-y-3 font-mono text-xs border-t border-white/10 pt-4 text-gray-300">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">LOCATION:</span>
                <span className="text-white">{PORTFOLIO_INFO.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">DEGREE:</span>
                <span className="text-white">{PORTFOLIO_INFO.degree}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">CORE FOCUS:</span>
                <span className="text-[#10ef6f] font-semibold">Distributed Systems &amp; Applied AI</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">STATUS:</span>
                <span className="text-[#10ef6f] font-semibold">2026 SWE / SRE Open</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
