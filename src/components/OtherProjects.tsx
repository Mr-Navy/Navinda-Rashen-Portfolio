import React from 'react';
import { OTHER_PROJECTS, PORTFOLIO_INFO } from '../data/portfolioData';
import {
  ArrowRight,
  Sprout,
  Hotel,
  ShoppingCart,
  GitFork,
  ExternalLink,
  Code2,
} from 'lucide-react';

export const OtherProjects: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'psychiatry':
        return <Sprout className="w-5 h-5 text-gray-400 group-hover:text-[#10ef6f] transition-colors" />;
      case 'hotel':
        return <Hotel className="w-5 h-5 text-gray-400 group-hover:text-[#10ef6f] transition-colors" />;
      case 'shopping_cart':
        return <ShoppingCart className="w-5 h-5 text-gray-400 group-hover:text-[#10ef6f] transition-colors" />;
      case 'hub':
        return <GitFork className="w-5 h-5 text-gray-400 group-hover:text-[#10ef6f] transition-colors" />;
      default:
        return <Code2 className="w-5 h-5 text-gray-400 group-hover:text-[#10ef6f] transition-colors" />;
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-16 border-t border-[#10ef6f]/15">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-10 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#10ef6f]">
            RESEARCH &amp; OPEN SOURCE ARCHIVES
          </span>
          <h3 className="text-2xl lg:text-3xl font-bold text-white mt-1">
            Other Projects &amp; Systems Exploration
          </h3>
        </div>

        <a
          href={PORTFOLIO_INFO.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-[#10ef6f] hover:underline flex items-center gap-1.5 self-start sm:self-auto group"
        >
          <span>View all 14+ repositories</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* 4-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {OTHER_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="p-6 rounded-2xl bg-[#0e1511] border border-[#10ef6f]/20 hover:border-[#10ef6f] hover:shadow-card-glow transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                {getIcon(project.iconName)}
                <span className="font-mono text-[11px] text-[#10ef6f] font-medium tracking-wide">
                  {project.categoryTag}
                </span>
              </div>

              <h4 className="font-bold text-white text-base group-hover:text-[#10ef6f] transition-colors mb-2 leading-snug">
                {project.title}
              </h4>

              <p className="text-xs text-gray-400 leading-relaxed line-clamp-3 mb-4">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1 font-mono text-[10px] text-gray-500 mb-3.5">
                {project.technologies.join(' · ')}
              </div>

              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-gray-400 hover:text-[#10ef6f] flex items-center gap-1.5 truncate transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">{project.repoName}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
