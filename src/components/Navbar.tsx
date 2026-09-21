import React, { useState, useEffect } from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { Code2, Share2, ArrowRight, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060807]/90 backdrop-blur-xl border-b border-[#10ef6f]/15 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-[#060807]/60 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#10ef6f]/50 rounded-full pr-2"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#10ef6f]/10 border border-[#10ef6f]/40 font-mono text-xs font-bold text-[#10ef6f] group-hover:shadow-neon group-hover:scale-105 transition-all">
              {PORTFOLIO_INFO.initials}
            </span>
            <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-[#10ef6f] transition-colors">
              {PORTFOLIO_INFO.shortName}
            </span>
          </a>

          {/* Code & Share Brand Pill */}
          <div className="hidden xl:flex items-center gap-2 pl-2 border-l border-white/10" title="Code & Collaborate">
            <img
              src="/logos/code-share.svg"
              alt="Code and Share"
              className="h-6 w-auto object-contain hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* SRE/SWE Availability Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10ef6f]/10 border border-[#10ef6f]/25 text-xs font-mono text-[#10ef6f]">
            <span className="w-2 h-2 rounded-full bg-[#10ef6f] animate-pulse" />
            <span className="tracking-wide font-medium">{PORTFOLIO_INFO.status}</span>
          </div>
        </div>

        {/* Center Desktop Navigation Pill */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 bg-[#0e1511]/90 p-1.5 rounded-full border border-white/10 shadow-inner"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#10ef6f] text-black shadow-neon font-semibold'
                    : 'text-gray-300 hover:text-[#10ef6f] hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right side controls: GitHub, LinkedIn & CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 border-r border-white/10 pr-3">
            <a
              href={PORTFOLIO_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="group/gh w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-[#2b73b8]/20 border border-white/10 hover:border-[#2b73b8]/50 transition-all"
              title="GitHub: Mr-Navy"
            >
              <img
                src="/logos/github.svg"
                alt="GitHub"
                className="w-5 h-5 object-contain rounded-full transition-transform group-hover/gh:scale-110"
                referrerPolicy="no-referrer"
              />
            </a>
            <a
              href={PORTFOLIO_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="group/li w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-[#0077b5]/20 border border-white/10 hover:border-[#0077b5]/50 transition-all"
              title="LinkedIn: Navinda Rashen"
            >
              <img
                src="/logos/linkedin.svg"
                alt="LinkedIn"
                className="w-4 h-4 object-contain rounded transition-transform group-hover/li:scale-110"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          <a
            href="#contact"
            id="navContactBtn"
            onClick={(e) => {
              e.preventDefault();
              onContactClick();
              const contactEl = document.getElementById('contact');
              if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-between gap-4 px-6 py-2.5 rounded-full bg-[#10ef6f] text-black font-sans shadow-neon hover:shadow-neon-lg hover:scale-[1.03] active:scale-[0.98] transition-all group select-none cursor-pointer"
            title="Contact me"
          >
            <div className="flex flex-col text-left font-sans font-medium text-[13px] sm:text-[14px] leading-tight text-black">
              <span>Contact</span>
              <span>me</span>
            </div>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black stroke-[2.2] group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-gray-300 hover:text-white bg-white/5 border border-white/10 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#10ef6f]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-[#0a0e0c]/95 backdrop-blur-2xl border-b border-[#10ef6f]/20 shadow-2xl mt-2 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 font-mono text-xs text-[#10ef6f]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10ef6f] animate-ping" />
              {PORTFOLIO_INFO.status}
            </span>
            <span className="text-gray-400">{PORTFOLIO_INFO.heroLocation}</span>
          </div>
          <nav className="flex flex-col gap-2">
            {navLinks.filter(l => l.label !== 'Contact').map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-gray-200 hover:text-black hover:bg-[#10ef6f] transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
                const contactEl = document.getElementById('contact');
                if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-2 inline-flex items-center justify-between px-5 py-2.5 rounded-full bg-[#10ef6f] text-black font-sans shadow-neon active:scale-[0.98] transition-all"
            >
              <div className="flex flex-col text-left font-semibold text-sm leading-tight text-black">
                <span>Contact</span>
                <span>me</span>
              </div>
              <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
            </a>
            <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-around">
              <a
                href={PORTFOLIO_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#10ef6f]"
              >
                <img
                  src="/logos/github.svg"
                  alt="GitHub"
                  className="w-4 h-4 object-contain rounded-full"
                  referrerPolicy="no-referrer"
                />
                GitHub
              </a>
              <a
                href={PORTFOLIO_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#10ef6f]"
              >
                <img
                  src="/logos/linkedin.svg"
                  alt="LinkedIn"
                  className="w-4 h-4 object-contain rounded"
                  referrerPolicy="no-referrer"
                />
                LinkedIn
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
