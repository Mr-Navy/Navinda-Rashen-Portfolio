import React, { useState } from 'react';
import { Terminal, BrainCircuit, Sparkles, Send } from 'lucide-react';

export const InteractiveTerminal: React.FC = () => {
  const [activeQuery, setActiveQuery] = useState<string>('default');
  const [customInput, setCustomInput] = useState<string>('');
  const [execTime, setExecTime] = useState<number>(14);

  const queryResponses: Record<string, { time: number; html: React.ReactNode }> = {
    default: {
      time: 14,
      html: (
        <span>
          <span className="text-[#10ef6f] font-semibold">&gt; System indexed:</span> 3 primary capstone architectures, 4 research systems, 14+ public repositories across Full-Stack (React/Node/Go), Predictive ML (Scikit-learn/Pandas), and Distributed Tools. Select a query pill above or inspect the curated catalog below.
        </span>
      ),
    },
    ai: {
      time: 18,
      html: (
        <span>
          <span className="text-[#10ef6f] font-semibold">&gt; Match found [2 AI Architectures]:</span> <b>Quiz Manager using AI</b> (integrated with Gemini API pipelines for automated competition question-bank generation and real-time validation) and <b>Social Media Addiction Predictor</b> (supervised behavioral classification scoring strain thresholds with 89.4% cross-validation accuracy).
        </span>
      ),
    },
    python: {
      time: 12,
      html: (
        <span>
          <span className="text-[#10ef6f] font-semibold">&gt; Match found [3 Python Repositories]:</span> <b>Social-Media-Addiction-Predictor</b> (Scikit-learn, Pandas, NumPy, Flask microservice), <b>Greenhouse Conditions Optimization</b> (SciPy, Statsmodels parametric inference), and statistical computational notebooks in open-source research.
        </span>
      ),
    },
    fullstack: {
      time: 16,
      html: (
        <span>
          <span className="text-[#10ef6f] font-semibold">&gt; Match found [3 Full-Stack Systems]:</span> <b>UniGO App</b> (Mobile Full-Stack, React Native/Flutter &amp; REST APIs with Firebase Auth), <b>Ecommerce_Web</b> (React.js, Spring Boot / Node, PostgreSQL inventory concurrency ledger), and <b>smart-hotel-frontend</b> (React.js, Tailwind CSS, Axios state sync).
        </span>
      ),
    },
    ml: {
      time: 15,
      html: (
        <span>
          <span className="text-[#10ef6f] font-semibold">&gt; Key Machine Learning Asset:</span> <b>Social Media Addiction Predictor</b> features an end-to-end data pipeline from raw survey log normalization to Random Forest &amp; Logistic Regression multi-class risk scoring and live parameter adjustments in Flask.
        </span>
      ),
    },
  };

  const handlePillClick = (key: string) => {
    setActiveQuery(key);
    setExecTime(Math.floor(Math.random() * 8) + 11);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const lower = customInput.toLowerCase();
    if (lower.includes('ai') || lower.includes('gemini') || lower.includes('llm') || lower.includes('gpt')) {
      setActiveQuery('ai');
    } else if (lower.includes('python') || lower.includes('pandas') || lower.includes('scikit') || lower.includes('data')) {
      setActiveQuery('python');
    } else if (lower.includes('full') || lower.includes('react') || lower.includes('web') || lower.includes('node') || lower.includes('unigo')) {
      setActiveQuery('fullstack');
    } else if (lower.includes('ml') || lower.includes('machine') || lower.includes('learn') || lower.includes('model') || lower.includes('predict')) {
      setActiveQuery('ml');
    } else {
      setActiveQuery('default');
    }
    setExecTime(Math.floor(Math.random() * 10) + 10);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-6">
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1511] border border-[#10ef6f]/25 shadow-card-glow relative overflow-hidden">
        {/* Ambient glow accent */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#10ef6f]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#10ef6f]/15 border border-[#10ef6f]/40 flex items-center justify-center text-[#10ef6f] flex-shrink-0">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#10ef6f]">
                Interactive Command Interface
              </span>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Query Navinda's Engineering Portfolio
              </h2>
            </div>
          </div>

          <div className="font-mono text-xs text-gray-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10ef6f] animate-pulse" />
            <span>SEMANTIC INDEX ACTIVE</span>
          </div>
        </div>

        {/* Quick prompt pills */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-mono text-gray-400 mr-1">Sample Queries:</span>
          <button
            type="button"
            onClick={() => handlePillClick('ai')}
            className={`px-3 py-1.5 rounded-full border text-xs font-mono transition-all ${
              activeQuery === 'ai'
                ? 'bg-[#10ef6f]/20 border-[#10ef6f] text-[#10ef6f]'
                : 'bg-[#141f18] hover:bg-[#1a281f] border-[#10ef6f]/30 text-gray-300 hover:text-[#10ef6f]'
            }`}
          >
            &gt; What AI projects have I built?
          </button>
          <button
            type="button"
            onClick={() => handlePillClick('python')}
            className={`px-3 py-1.5 rounded-full border text-xs font-mono transition-all ${
              activeQuery === 'python'
                ? 'bg-[#10ef6f]/20 border-[#10ef6f] text-[#10ef6f]'
                : 'bg-[#141f18] hover:bg-[#1a281f] border-[#10ef6f]/30 text-gray-300 hover:text-[#10ef6f]'
            }`}
          >
            &gt; Which projects use Python?
          </button>
          <button
            type="button"
            onClick={() => handlePillClick('fullstack')}
            className={`px-3 py-1.5 rounded-full border text-xs font-mono transition-all ${
              activeQuery === 'fullstack'
                ? 'bg-[#10ef6f]/20 border-[#10ef6f] text-[#10ef6f]'
                : 'bg-[#141f18] hover:bg-[#1a281f] border-[#10ef6f]/30 text-gray-300 hover:text-[#10ef6f]'
            }`}
          >
            &gt; Show me my full-stack projects
          </button>
          <button
            type="button"
            onClick={() => handlePillClick('ml')}
            className={`px-3 py-1.5 rounded-full border text-xs font-mono transition-all ${
              activeQuery === 'ml'
                ? 'bg-[#10ef6f]/20 border-[#10ef6f] text-[#10ef6f]'
                : 'bg-[#141f18] hover:bg-[#1a281f] border-[#10ef6f]/30 text-gray-300 hover:text-[#10ef6f]'
            }`}
          >
            &gt; Demonstrates machine learning
          </button>
        </div>

        {/* Optional custom search input */}
        <form onSubmit={handleCustomSubmit} className="mb-4">
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#060a08] border border-[#10ef6f]/20 focus-within:border-[#10ef6f]/60 transition-colors">
            <span className="font-mono text-xs text-[#10ef6f] pl-3">&gt;</span>
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Search tech stack, e.g., 'gemini', 'react', 'sqlite', 'scikit-learn'..."
              className="w-full bg-transparent text-sm text-gray-200 placeholder-gray-600 focus:outline-none font-mono py-1 px-2"
            />
            <button
              type="submit"
              className="px-3 py-1 rounded-lg bg-[#10ef6f]/15 hover:bg-[#10ef6f]/30 text-[#10ef6f] text-xs font-mono transition-colors flex items-center gap-1"
            >
              <span>Query</span>
              <Send className="w-3 h-3" />
            </button>
          </div>
        </form>

        {/* Console output display */}
        <div className="rounded-2xl bg-[#060a08] p-4 sm:p-5 border border-[#10ef6f]/20 font-mono text-xs sm:text-sm shadow-inner">
          <div className="flex items-center justify-between text-gray-500 text-xs border-b border-white/5 pb-2 mb-3">
            <span>TERMINAL RESPONSE :: KERNEL_QUERY</span>
            <span className="text-[#10ef6f]">EXEC_TIME: {execTime}ms</span>
          </div>
          <p className="text-gray-300 leading-relaxed">
            {queryResponses[activeQuery]?.html || queryResponses.default.html}
          </p>
        </div>
      </div>
    </section>
  );
};
