import React, { useState } from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { Send, Check, Copy, ExternalLink, Mail, ArrowUpRight, RotateCcw } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSentData, setLastSentData] = useState<{
    name: string;
    email: string;
    message: string;
    gmailUrl: string;
    mailtoUrl: string;
  } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedMessageSummary, setCopiedMessageSummary] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);

    const clientName = formData.name.trim();
    const clientEmail = formData.email.trim();
    const clientMessage = formData.message.trim();

    const subject = `[Portfolio Inquiry] Message from ${clientName}`;
    const body = `Hi Navinda,\n\nYou have received a new message from your portfolio contact terminal:\n\n` +
      `========================================\n` +
      `CLIENT DETAILS\n` +
      `========================================\n` +
      `Name:  ${clientName}\n` +
      `Email: ${clientEmail}\n` +
      `Date:  ${new Date().toLocaleString()}\n\n` +
      `========================================\n` +
      `MESSAGE\n` +
      `========================================\n` +
      `${clientMessage}\n\n` +
      `========================================\n` +
      `Sent via Navinda Rashen's Portfolio Contact Form`;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    const mailtoUrl = `mailto:${PORTFOLIO_INFO.email}?subject=${encodedSubject}&body=${encodedBody}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PORTFOLIO_INFO.email)}&su=${encodedSubject}&body=${encodedBody}`;

    // Store details for confirmation actions
    setLastSentData({
      name: clientName,
      email: clientEmail,
      message: clientMessage,
      gmailUrl,
      mailtoUrl,
    });

    // Trigger mailto directly to launch email client with client details
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PORTFOLIO_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText(PORTFOLIO_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const copySummaryToClipboard = () => {
    if (!lastSentData) return;
    const summary = `Client: ${lastSentData.name} <${lastSentData.email}>\nMessage:\n${lastSentData.message}`;
    navigator.clipboard.writeText(summary);
    setCopiedMessageSummary(true);
    setTimeout(() => setCopiedMessageSummary(false), 2000);
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitted(false);
    setLastSentData(null);
  };

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-20 border-t border-[#10ef6f]/15 mb-12">
      <div className="p-6 sm:p-10 lg:p-14 rounded-3xl bg-[#0e1511] border border-[#10ef6f]/30 shadow-[0_0_50px_rgba(16,239,111,0.12)] relative overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#10ef6f]/15 blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Narrative Column (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10ef6f]/10 border border-[#10ef6f]/30 font-mono text-xs text-[#10ef6f] uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-[#10ef6f]" />
                <span>05 / GET IN TOUCH</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Let's build something <span className="text-[#10ef6f]">useful together.</span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                Interested in software engineering, applied AI, or looking for a dedicated full-stack developer who understands both clean systems architecture and data modeling? My inbox is always open.
              </p>
            </div>

            {/* Direct Channels with Authentic Logos */}
            <div className="space-y-4 font-mono text-sm border-t border-white/10 pt-6">
              {/* Email Channel */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#090e0b] border border-white/5 hover:border-[#10ef6f]/30 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#ea580c]/15 border border-[#ea580c]/30 flex items-center justify-center flex-shrink-0">
                    <img
                      src="/logos/email.svg"
                      alt="Email"
                      className="w-5 h-5 object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Direct Email</span>
                    <a
                      href={`mailto:${PORTFOLIO_INFO.email}`}
                      className="text-gray-200 hover:text-[#10ef6f] transition-colors break-all text-xs sm:text-sm"
                    >
                      {PORTFOLIO_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="text-xs text-gray-400 hover:text-[#10ef6f] transition-colors p-2 rounded-lg hover:bg-white/5"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#10ef6f]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Telephone Channel */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#090e0b] border border-white/5 hover:border-[#10ef6f]/30 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#3b82f6]/15 border border-[#3b82f6]/30 flex items-center justify-center flex-shrink-0">
                    <img
                      src="/logos/telephone.svg"
                      alt="Telephone"
                      className="w-5 h-5 object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Telephone Line</span>
                    <a
                      href={`tel:${PORTFOLIO_INFO.phone}`}
                      className="text-gray-200 hover:text-[#10ef6f] transition-colors text-xs sm:text-sm"
                    >
                      {PORTFOLIO_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyPhoneToClipboard}
                  className="text-xs text-gray-400 hover:text-[#10ef6f] transition-colors p-2 rounded-lg hover:bg-white/5"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-[#10ef6f]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Channel */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#090e0b] border border-white/5 hover:border-[#10ef6f]/30 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0077b5]/15 border border-[#0077b5]/30 flex items-center justify-center flex-shrink-0">
                    <img
                      src="/logos/linkedin.svg"
                      alt="LinkedIn"
                      className="w-5 h-5 object-contain rounded"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Professional Profile</span>
                    <a
                      href={PORTFOLIO_INFO.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-200 hover:text-[#10ef6f] transition-colors text-xs sm:text-sm truncate block"
                    >
                      linkedin.com/in/navinda-rashen-97066826b
                    </a>
                  </div>
                </div>
              </div>

              {/* GitHub Channel */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#090e0b] border border-white/5 hover:border-[#10ef6f]/30 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#2b73b8]/15 border border-[#2b73b8]/30 flex items-center justify-center flex-shrink-0">
                    <img
                      src="/logos/github.svg"
                      alt="GitHub"
                      className="w-5 h-5 object-contain rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Open Source Codebase</span>
                    <a
                      href={PORTFOLIO_INFO.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-200 hover:text-[#10ef6f] transition-colors text-xs sm:text-sm"
                    >
                      github.com/{PORTFOLIO_INFO.githubUsername}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form (6 Cols) */}
          <div className="lg:col-span-6 bg-[#070b09] p-6 lg:p-8 rounded-2xl border border-[#10ef6f]/20 flex flex-col justify-center">
            {isSubmitted && lastSentData ? (
              <div className="space-y-5 animate-in fade-in zoom-in-95 duration-200">
                <div className="p-4 rounded-xl bg-[#10ef6f]/10 border border-[#10ef6f]/30">
                  <div className="flex items-center gap-2.5 text-[#10ef6f] font-mono text-sm font-semibold mb-1">
                    <Check className="w-5 h-5 text-[#10ef6f]" />
                    <span>Email Ready &amp; Transmitted</span>
                  </div>
                  <p className="text-xs text-gray-300">
                    A direct email draft to <strong className="text-white font-mono">{PORTFOLIO_INFO.email}</strong> was prepared containing all your client information.
                  </p>
                </div>

                {/* Summary of what was sent */}
                <div className="p-4 rounded-xl bg-[#0e1410] border border-white/10 font-mono text-xs space-y-2">
                  <div className="text-gray-400 uppercase tracking-wider text-[10px] font-semibold border-b border-white/5 pb-1">
                    Transmitted Client Details
                  </div>
                  <div className="flex justify-between items-center text-gray-300">
                    <span className="text-gray-500">From Name:</span>
                    <span className="text-white font-semibold">{lastSentData.name}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300">
                    <span className="text-gray-500">From Email:</span>
                    <span className="text-[#10ef6f]">{lastSentData.email}</span>
                  </div>
                  <div className="pt-2 border-t border-white/5 text-gray-400">
                    <span className="block text-[10px] text-gray-500 mb-1">Message Preview:</span>
                    <p className="line-clamp-3 text-gray-300 italic font-sans text-xs bg-black/30 p-2 rounded">
                      "{lastSentData.message}"
                    </p>
                  </div>
                </div>

                {/* Quick 1-click action buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 font-mono text-xs">
                  <a
                    href={lastSentData.gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#ea4335] hover:bg-[#d93025] text-white font-semibold transition-all hover:scale-[1.02] shadow-sm"
                  >
                    <img
                      src="/logos/email.svg"
                      alt="Gmail"
                      className="w-4 h-4 object-contain brightness-0 invert"
                      referrerPolicy="no-referrer"
                    />
                    <span>Open in Gmail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={lastSentData.mailtoUrl}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#141f18] border border-[#10ef6f]/40 hover:border-[#10ef6f] text-white hover:text-[#10ef6f] transition-all hover:scale-[1.02]"
                  >
                    <Mail className="w-4 h-4 text-[#10ef6f]" />
                    <span>Default Mail App</span>
                  </a>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/10 font-mono text-xs">
                  <button
                    type="button"
                    onClick={copySummaryToClipboard}
                    className="inline-flex items-center gap-1.5 text-gray-400 hover:text-[#10ef6f] transition-colors"
                  >
                    {copiedMessageSummary ? <Check className="w-3.5 h-3.5 text-[#10ef6f]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedMessageSummary ? 'Copied Details' : 'Copy Message'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Send Another</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="contactName"
                    className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-2"
                  >
                    Your Name / Organization
                  </label>
                  <input
                    id="contactName"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Elena Rostova / Acme Systems"
                    className="w-full px-4 py-3 rounded-xl bg-[#0e1410] border border-white/10 text-white placeholder-gray-600 focus:border-[#10ef6f] focus:ring-1 focus:ring-[#10ef6f] focus:outline-none transition-colors text-sm font-sans"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactEmail"
                    className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="contactEmail"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0e1410] border border-white/10 text-white placeholder-gray-600 focus:border-[#10ef6f] focus:ring-1 focus:ring-[#10ef6f] focus:outline-none transition-colors text-sm font-sans"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactMessage"
                    className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-2"
                  >
                    Project Scope / Message
                  </label>
                  <textarea
                    id="contactMessage"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the problem you are solving, role parameters, or research idea..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0e1410] border border-white/10 text-white placeholder-gray-600 focus:border-[#10ef6f] focus:ring-1 focus:ring-[#10ef6f] focus:outline-none transition-colors text-sm resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  id="submitBtn"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#10ef6f] text-black font-bold text-sm shadow-neon hover:shadow-neon-lg hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Transmitting details...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] font-mono text-gray-500 text-center pt-1">
                  Transmits your name, email, and message directly to <span className="text-[#10ef6f]">{PORTFOLIO_INFO.email}</span>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
