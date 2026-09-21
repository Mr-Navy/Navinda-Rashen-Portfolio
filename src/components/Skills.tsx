import React from 'react';
import { SKILL_CATEGORIES, TECH_LOGOS } from '../data/portfolioData';
import {
  Terminal,
  Globe,
  Brain,
  BarChart3,
  Database,
  Wrench,
  CheckCircle2,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'terminal':
        return <Terminal className="w-5 h-5 text-gray-400 group-hover:text-[#10ef6f] transition-colors" />;
      case 'language':
        return <Globe className="w-5 h-5 text-gray-400 group-hover:text-[#10ef6f] transition-colors" />;
      case 'neurology':
        return <Brain className="w-5 h-5 text-gray-400 group-hover:text-[#10ef6f] transition-colors" />;
      case 'bar_chart':
        return <BarChart3 className="w-5 h-5 text-gray-400 group-hover:text-[#10ef6f] transition-colors" />;
      case 'database':
        return <Database className="w-5 h-5 text-gray-400 group-hover:text-[#10ef6f] transition-colors" />;
      case 'settings':
        return <Wrench className="w-5 h-5 text-gray-400 group-hover:text-[#10ef6f] transition-colors" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-gray-400 group-hover:text-[#10ef6f] transition-colors" />;
    }
  };

  return (
    <section id="skills" className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-20 border-t border-[#10ef6f]/15">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10ef6f]/10 border border-[#10ef6f]/30 text-[#10ef6f] text-xs font-mono mb-3 uppercase tracking-wider">
          03 / CAPABILITIES
        </div>
        <h2 className="text-4xl font-extrabold text-white tracking-tight">
          My <span className="text-[#10ef6f]">Skills</span>
        </h2>
        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
          My skills are those I've learned and developed over the years by studying, focusing, and being consistent in what I love most.
        </p>
      </div>

      {/* Skills Bento Grid (6 cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.id}
            className="p-6 rounded-3xl bg-[#0e1511] border border-[#10ef6f]/20 hover:border-[#10ef6f]/60 hover:shadow-card-glow transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase text-[#10ef6f] tracking-wider font-semibold">
                  {category.categoryName}
                </span>
                {getIcon(category.iconName)}
              </div>

              <h3 className="text-lg font-bold text-white mb-4 group-hover:text-[#10ef6f] transition-colors">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#141f18] border border-[#10ef6f]/20 text-gray-200 font-mono text-xs hover:border-[#10ef6f]/60 hover:text-white transition-all group/chip"
                  >
                    {TECH_LOGOS[skill] && (
                      <img
                        src={TECH_LOGOS[skill]}
                        alt={skill}
                        className="w-3.5 h-3.5 object-contain group-hover/chip:scale-110 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 font-mono text-[11px] text-gray-400">
              {category.appliedIn.startsWith('Applied in:') ? (
                category.appliedIn
              ) : (
                <span>{category.appliedIn}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
