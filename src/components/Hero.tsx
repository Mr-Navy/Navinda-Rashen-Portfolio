import React, { useState } from 'react';
import { PORTFOLIO_INFO, FEATURED_TECH_LOGOS } from '../data/portfolioData';
import { ArrowDown, Download, CheckCircle2, Sparkles, Terminal, Eye, Check } from 'lucide-react';
import { downloadCV } from '../utils/downloadCV';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadCV = async (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloading(true);
    await downloadCV();
    setDownloading(false);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };
  return (
    <section id="home" className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 pt-8 pb-16 lg:pt-14 lg:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Hero Narrative (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Pill status badge */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#10ef6f]/10 border border-[#10ef6f]/30 text-[#10ef6f] text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-[#10ef6f] animate-ping" />
            <span className="font-medium">Hi, I'm Navinda — Based in Sri Lanka</span>
          </div>

          {/* Monumental Hero Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-white tracking-tight leading-[1.08] mb-5">
            Full-Stack Developer &amp; <br />
            <span className="text-[#10ef6f] drop-shadow-[0_0_25px_rgba(16,239,111,0.45)]">
              AI/ML Enthusiast
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-[#22c55e] font-medium mb-4">
            {PORTFOLIO_INFO.subHeading}
          </p>

          {/* Descriptive narrative */}
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-8">
            {PORTFOLIO_INFO.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#10ef6f] text-black font-semibold text-sm sm:text-base shadow-neon hover:shadow-neon-lg hover:scale-105 active:scale-95 transition-all"
            >
              <span>View My Work</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </a>

            <button
              type="button"
              id="heroDownloadCvBtn"
              onClick={handleDownloadCV}
              disabled={downloading}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0e1511] border border-[#10ef6f]/40 text-white hover:text-[#10ef6f] hover:border-[#10ef6f] font-semibold text-sm sm:text-base transition-all hover:bg-[#141f18] group shadow-sm active:scale-95 disabled:opacity-60"
              title="Download Navinda's CV as PDF file"
            >
              {downloading ? (
                <>
                  <Download className="w-5 h-5 text-[#10ef6f] animate-bounce" />
                  <span>Downloading...</span>
                </>
              ) : downloaded ? (
                <>
                  <Check className="w-5 h-5 text-[#10ef6f]" />
                  <span className="text-[#10ef6f]">Downloaded ✓</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 text-[#10ef6f] group-hover:translate-y-0.5 transition-transform" />
                  <span>Download CV</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onOpenCV}
              className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-full text-xs font-mono text-gray-400 hover:text-white hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
              title="Preview CV document on screen"
            >
              <Eye className="w-3.5 h-3.5 text-[#10ef6f]" />
              <span>Preview</span>
            </button>
          </div>

          {/* Tech Stack Logo Showcase */}
          <div className="w-full pt-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#10ef6f] font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10ef6f]" />
                Core Technologies &amp; Tooling
              </span>
              <span className="text-[10px] font-mono text-gray-400">Production &amp; Research</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {FEATURED_TECH_LOGOS.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0e1511] border border-[#10ef6f]/20 hover:border-[#10ef6f]/60 hover:bg-[#142119] transition-all cursor-default shadow-sm"
                  title={`${tech.name} • ${tech.badge}`}
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-4 h-4 object-contain group-hover:scale-110 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-xs font-mono font-medium text-gray-200 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Capabilities Footnote */}
          <div className="w-full pt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-400">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="text-white hover:text-[#10ef6f] transition-colors">FULL-STACK</span>
              <span className="text-[#10ef6f]">/</span>
              <span className="text-white hover:text-[#10ef6f] transition-colors">AI &amp; ML</span>
              <span className="text-[#10ef6f]">/</span>
              <span className="text-white hover:text-[#10ef6f] transition-colors">SYSTEMS ARCHITECTURE</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:text-[#10ef6f] transition-colors flex items-center gap-1.5"
              >
                <img
                  src="/logos/github.svg"
                  alt="GitHub"
                  className="w-4 h-4 object-contain rounded-full group-hover:scale-110 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <span>{PORTFOLIO_INFO.githubUsername}</span>
              </a>
              <span className="text-white/20">|</span>
              <a
                href={PORTFOLIO_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:text-[#10ef6f] transition-colors flex items-center gap-1.5"
              >
                <img
                  src="/logos/linkedin.svg"
                  alt="LinkedIn"
                  className="w-4 h-4 object-contain rounded group-hover:scale-110 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Hero Visual (5 Cols) - Floating Emerald Card Frame */}
        <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0">
          {/* Ambient blur sphere behind card */}
          <div className="absolute inset-0 bg-[#10ef6f]/20 rounded-3xl filter blur-3xl transform -rotate-3 scale-95 pointer-events-none" />

          <div className="relative w-full max-w-md bg-[#0e1511] border border-[#10ef6f]/30 rounded-3xl p-4 sm:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl">
            {/* Top frame bar */}
            <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10 font-mono text-xs text-gray-400">
              <span className="flex items-center gap-2 text-[#10ef6f] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#10ef6f] animate-ping" />
                PORTRAIT.SYS
              </span>
              <div className="flex items-center gap-3">
                <img
                  src="/logos/code-share.svg"
                  alt="Code & Share"
                  className="h-4.5 w-auto object-contain opacity-80"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xs text-gray-500 font-mono">{PORTFOLIO_INFO.heroLocation}</span>
              </div>
            </div>

            {/* Portrait Container with Neon Rim */}
            <div className="relative mt-3.5 rounded-2xl overflow-hidden aspect-[3/4] bg-black border border-[#10ef6f]/25 group">
              <img
                src={PORTFOLIO_INFO.heroImage}
                alt={PORTFOLIO_INFO.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  // Fallback if image fails
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement?.classList.add('bg-gradient-to-br', 'from-[#0e1511]', 'to-[#141f18]');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060807] via-transparent to-transparent opacity-80" />

              {/* Bottom Float Badge on Avatar */}
              <div className="absolute bottom-4 left-3 right-3 sm:left-4 sm:right-4 p-3.5 rounded-xl bg-[#080d0a]/90 border border-[#10ef6f]/30 backdrop-blur-md flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#10ef6f] font-semibold">
                    Undergraduate
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    {PORTFOLIO_INFO.degree}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#10ef6f]/20 border border-[#10ef6f]/40 flex items-center justify-center text-[#10ef6f] flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Technical Specs strip */}
            <div className="mt-3.5 pt-2 px-2 flex items-center justify-between font-mono text-[11px] text-gray-400">
              <span>UPTIME: {PORTFOLIO_INFO.uptime}</span>
              <span className="text-[#10ef6f] font-medium tracking-wide">SRE / SWE READY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
