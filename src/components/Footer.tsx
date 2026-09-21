import React from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#050706] border-t border-[#10ef6f]/15">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-gray-500">
        <div className="flex items-center gap-3">
          <img
            src="/logos/code-share.svg"
            alt="Code and Share"
            className="h-6 w-auto object-contain opacity-80"
            referrerPolicy="no-referrer"
          />
          <span>© 2026 {PORTFOLIO_INFO.name}. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PORTFOLIO_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 hover:text-[#10ef6f] transition-colors"
          >
            <img
              src="/logos/github.svg"
              alt="GitHub"
              className="w-4 h-4 object-contain rounded-full group-hover:scale-110 transition-transform"
              referrerPolicy="no-referrer"
            />
            <span>GitHub</span>
          </a>

          <a
            href={PORTFOLIO_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 hover:text-[#10ef6f] transition-colors"
          >
            <img
              src="/logos/linkedin.svg"
              alt="LinkedIn"
              className="w-4 h-4 object-contain rounded group-hover:scale-110 transition-transform"
              referrerPolicy="no-referrer"
            />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${PORTFOLIO_INFO.email}`}
            className="group flex items-center gap-2 hover:text-[#10ef6f] transition-colors"
          >
            <img
              src="/logos/email.svg"
              alt="Email"
              className="w-4 h-4 object-contain group-hover:scale-110 transition-transform"
              referrerPolicy="no-referrer"
            />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

