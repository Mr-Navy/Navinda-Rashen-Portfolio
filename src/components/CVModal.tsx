import React, { useState } from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { downloadCV } from '../utils/downloadCV';
import {
  X,
  Download,
  Printer,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  BookOpen,
  Check,
  FileText,
} from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    setDownloading(true);
    await downloadCV();
    setDownloading(false);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c120e] border border-[#10ef6f]/30 rounded-3xl p-5 sm:p-8 overflow-y-auto shadow-[0_0_60px_rgba(16,239,111,0.2)]">
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 sticky top-0 bg-[#0c120e]/95 backdrop-blur-sm z-20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10ef6f] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#10ef6f]">
              CURRICULUM VITAE :: NAVINDA RASHEN PIMBURAGE
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#10ef6f]/10 border border-[#10ef6f]/30 hover:border-[#10ef6f] text-xs font-mono text-[#10ef6f] hover:bg-[#10ef6f] hover:text-black transition-all"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloaded ? 'Downloaded ✓' : 'Download PDF'}</span>
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="p-2 rounded-full bg-white/5 hover:bg-[#10ef6f]/20 text-gray-300 hover:text-[#10ef6f] transition-colors"
              title="Print CV"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-red-500/20 text-gray-300 hover:text-red-400 transition-colors"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* High-Fidelity Document Presentation Frame */}
        <div className="bg-[#111713] border border-white/10 rounded-2xl p-6 sm:p-10 font-sans text-gray-200 shadow-inner">
          {/* Header */}
          <div className="text-center pb-6 border-b border-white/10">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Navinda Rashen Pimburage
            </h1>
            <div className="text-xs sm:text-sm text-gray-300 font-mono mt-2 flex flex-wrap items-center justify-center gap-3">
              <span className="flex items-center gap-1.5 text-gray-300">
                <img
                  src="/logos/telephone.svg"
                  alt="Phone"
                  className="w-3.5 h-3.5 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span>0762071252</span>
              </span>
              <span className="text-[#10ef6f]">|</span>
              <a
                href="mailto:rashenpimburage@gmail.com"
                className="hover:text-[#10ef6f] transition-colors flex items-center gap-1.5"
              >
                <img
                  src="/logos/email.svg"
                  alt="Email"
                  className="w-3.5 h-3.5 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span>rashenpimburage@gmail.com</span>
              </a>
              <span className="text-[#10ef6f]">|</span>
              <span>Kaluthara District, Sri Lanka</span>
            </div>
            <div className="text-xs text-gray-400 font-mono mt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/navinda-rashen-97066826b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#10ef6f] hover:underline flex items-center gap-1.5"
              >
                <img
                  src="/logos/linkedin.svg"
                  alt="LinkedIn"
                  className="w-3.5 h-3.5 object-contain rounded"
                  referrerPolicy="no-referrer"
                />
                <span>linkedin.com/in/navinda-rashen-97066826b</span>
                <ExternalLink className="w-3 h-3 text-gray-400" />
              </a>
              <span className="text-white/20">|</span>
              <a
                href="https://github.com/Mr-Navy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#10ef6f] hover:underline flex items-center gap-1.5"
              >
                <img
                  src="/logos/github.svg"
                  alt="GitHub"
                  className="w-3.5 h-3.5 object-contain rounded-full"
                  referrerPolicy="no-referrer"
                />
                <span>github.com/Mr-Navy</span>
                <ExternalLink className="w-3 h-3 text-gray-400" />
              </a>
            </div>
          </div>

          <div className="mt-6 space-y-6 text-sm">
            {/* 1. Professional Summary */}
            <section>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#10ef6f] pb-1 border-b border-white/10 mb-2">
                Professional Summary
              </h2>
              <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                Detail-oriented 3rd-year Computer Science Undergraduate at the University of Sri Jayewardenepura, part of the inaugural cohort. Co-author of research in data-driven financial modeling for large-scale events. Proficient in full-stack development, system analysis, and software quality assurance. Active IEEE member with a focus on leveraging emerging technologies to drive business sustainability and operational efficiency.
              </p>
            </section>

            {/* 2. Education */}
            <section>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#10ef6f] pb-1 border-b border-white/10 mb-2.5">
                Education
              </h2>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-medium text-white">
                  <span className="font-bold text-sm">BSc (Hons) in Computer Science</span>
                  <span className="text-xs font-mono text-gray-400">
                    2022/2023 Intake (Inaugural Cohort) – Present
                  </span>
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  University of Sri Jayewardenepura
                </div>
                <ul className="mt-2 space-y-1 text-xs text-gray-300 list-disc list-inside">
                  <li>
                    Maintained an 80% mandatory attendance rate, demonstrating strict academic discipline.
                  </li>
                  <li>
                    <strong className="text-white">Relevant Coursework:</strong> Software Architecture and Design Patterns, Artificial Intelligence, Database Management Systems, Data Structures and Algorithms, Software Quality Assurance.
                  </li>
                </ul>
              </div>
            </section>

            {/* 3. Technical Skills */}
            <section>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#10ef6f] pb-1 border-b border-white/10 mb-2.5">
                Technical Skills
              </h2>
              <ul className="space-y-1.5 text-xs text-gray-300">
                <li className="flex flex-wrap items-center gap-1.5 pt-1">
                  <strong className="text-white mr-1">Programming Languages:</strong>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] text-gray-200">
                    <img src="/logos/java.svg" alt="Java" className="w-3 h-3 object-contain" referrerPolicy="no-referrer" />
                    Java
                  </span>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] text-gray-200">
                    <img src="/logos/python.svg" alt="Python" className="w-3 h-3 object-contain" referrerPolicy="no-referrer" />
                    Python
                  </span>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] text-gray-200">
                    <img src="/logos/javascript.svg" alt="JavaScript" className="w-3 h-3 object-contain" referrerPolicy="no-referrer" />
                    JavaScript
                  </span>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] text-gray-200">
                    <img src="/logos/cpp-iso.svg" alt="C++" className="w-3 h-3 object-contain" referrerPolicy="no-referrer" />
                    C++
                  </span>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] text-gray-200">
                    <img src="/logos/c.svg" alt="C" className="w-3 h-3 object-contain" referrerPolicy="no-referrer" />
                    C
                  </span>
                  <span className="text-gray-400 text-[11px]">, SQL</span>
                </li>
                <li className="flex flex-wrap items-center gap-1.5 pt-1">
                  <strong className="text-white mr-1">Frameworks &amp; Web:</strong>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] text-gray-200">
                    <img src="/logos/react.svg" alt="React" className="w-3 h-3 object-contain" referrerPolicy="no-referrer" />
                    React
                  </span>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] text-gray-200">
                    <img src="/logos/html5.svg" alt="HTML5" className="w-3 h-3 object-contain" referrerPolicy="no-referrer" />
                    HTML5
                  </span>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] text-gray-200">
                    <img src="/logos/css3.svg" alt="CSS3" className="w-3 h-3 object-contain" referrerPolicy="no-referrer" />
                    CSS3
                  </span>
                  <span className="text-gray-300 text-[11px]">, Spring Boot, Node.js</span>
                </li>
                <li>
                  <strong className="text-white">Tools &amp; Software:</strong> MS Project, Primavera, Git, LaTeX.
                </li>
                <li>
                  <strong className="text-white">Theoretical Proficiencies:</strong> Software Architecture, Artificial Intelligence, Statistical Inference, Database Systems.
                </li>
              </ul>
            </section>

            {/* 4. Project Experience */}
            <section>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#10ef6f] pb-1 border-b border-white/10 mb-2.5">
                Project Experience
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white">
                    Course Registration System (Educational Sector)
                  </h3>
                  <ul className="mt-1 space-y-1 text-xs text-gray-300 list-disc list-inside">
                    <li>
                      Designed an educational platform for real-time course enrollment and academic progress tracking.
                    </li>
                    <li>
                      Implemented prerequisite verification logic and automated scheduling features to optimize administrative efficiency.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white">
                    Online Pizza Ordering Platform (E-commerce Sector)
                  </h3>
                  <ul className="mt-1 space-y-1 text-xs text-gray-300 list-disc list-inside">
                    <li>
                      Developed a full-stack minimum viable product (MVP) utilizing React for the frontend and Spring Boot for the backend.
                    </li>
                    <li>
                      Engineered transaction management features to handle orders, customizable product attributes, and secure checkout processes.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. Research & Quantitative Modeling */}
            <section>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#10ef6f] pb-1 border-b border-white/10 mb-2.5">
                Research &amp; Quantitative Modeling
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white">
                    Profit Analysis of an Annual University Talent Show: A Data-Driven Analysis
                  </h3>
                  <ul className="mt-1 space-y-1 text-xs text-gray-300 list-disc list-inside">
                    <li>
                      Co-authored research submitted to the 1st Jayewardenepura Computing Symposium 2026.
                    </li>
                    <li>
                      Developed a quantitative framework and sensitivity testing using MS Project to evaluate financial risks.
                    </li>
                    <li>
                      Analyzed fiscal dependencies and revenue streams to present actionable profitability strategies.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white">
                    Optimizing Greenhouse Conditions for Maximum Crop Yield (Statistical Research)
                  </h3>
                  <ul className="mt-1 space-y-1 text-xs text-gray-300 list-disc list-inside">
                    <li>
                      Analyzed environmental impacts on Sri Lankan tomato yields using Python (Pandas, NumPy, SciPy).
                    </li>
                    <li>
                      Applied hypothesis testing and linear regression to identify statistically significant climate drivers.
                    </li>
                    <li>
                      Developed quantitative models for precision agriculture to optimize crop resource allocation.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 6. Professional Development & Certifications */}
            <section>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#10ef6f] pb-1 border-b border-white/10 mb-2.5">
                Professional Development &amp; Certifications
              </h2>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#10ef6f] mt-0.5">•</span>
                  <div>
                    <strong className="text-white">AI/ML Engineer - Stage 1 | SLIIT Faculty of Computing (Dec 2025):</strong> Comprehensive program covering the theoretical foundations of AI &amp; ML with practical, hands-on application in TensorFlow, PyTorch, and Artificial Neural Networks. <span className="font-mono text-[11px] text-gray-400">(Credential ID: wz4emxfzv4)</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10ef6f] mt-0.5">•</span>
                  <div>
                    <strong className="text-white">Web Design for Beginners | University of Moratuwa (Faculty of IT) (Jan 2024):</strong> Foundational certification in front-end web development, covering HTML, CSS, and JavaScript via the Centre for Open and Distance Education. <span className="font-mono text-[11px] text-gray-400">(Credential ID: REbnOKYGg7)</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10ef6f] mt-0.5">•</span>
                  <div>
                    <strong className="text-white">IEEE Student Branch (USJ) (2025):</strong> Active member; participated in inter-university problem-solving competitions like AlgoArena 2025 and engaged in high-level tech seminars, including TechXplore on Quantum Computing.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10ef6f] mt-0.5">•</span>
                  <div>
                    <strong className="text-white">Artificial Intelligence &amp; Machine Learning Certification | SKYREK (Dec 2025):</strong> Advanced training focused on Large Language Models (LLM), Reinforcement Learning, and Unsupervised Learning. Recognized with a Certificate of Excellence for the final AI/ML project. <span className="font-mono text-[11px] text-gray-400">(Credential ID: SKML25940)</span>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
            <FileText className="w-4 h-4 text-[#10ef6f]" />
            <span>Navinda_Rashen_Pimburage_CV.pdf (A4 Format)</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-white font-mono text-xs transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              type="button"
              id="modalDownloadCvBtn"
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#10ef6f] text-black font-semibold text-xs sm:text-sm hover:shadow-neon transition-all active:scale-95 disabled:opacity-60"
            >
              {downloading ? (
                <>
                  <span className="animate-spin">⏳</span>
                  <span>Generating PDF...</span>
                </>
              ) : downloaded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download PDF Document</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
