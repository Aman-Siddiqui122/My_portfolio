import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Clock, 
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('Project Inquiry / Collaboration');
  const [message, setMessage] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Aman,\n\nMy name is ${name} (${senderEmail}).\n\n${message}\n\nBest regards,\n${name}`
    );
    
    window.location.href = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  const cleanPhoneForWhatsApp = profileData.phone.replace(/[^0-9]/g, '');

  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 border-t border-[#0c1466]/15 bg-white text-[#0c1466]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0c1466]/5 border border-[#0c1466]/15 text-xs font-mono font-semibold text-[#0c1466]">
            <Mail className="w-3.5 h-3.5 text-[#0c1466]" />
            GET IN TOUCH
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0c1466] tracking-tight">
            Let's Build Something Impactful
          </h2>
          <p className="text-sm sm:text-base text-[#0c1466]/75 max-w-2xl">
            Whether you have a Python backend project, an AI/ML pipeline to develop, or a full-stack web application, I'm ready to collaborate.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card */}
            <div 
              id="contact-email-card"
              className="p-5 rounded-2xl bg-white border border-[#0c1466]/20 hover:border-[#0c1466]/50 transition-all space-y-2 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0c1466]/10 text-[#0c1466]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#0c1466]/70 font-mono">Direct Email</div>
                    <div className="text-sm font-bold text-[#0c1466]">{profileData.email}</div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(profileData.email, 'email')}
                  type="button"
                  className="p-2 rounded-lg text-[#0c1466]/60 hover:text-[#0c1466] hover:bg-[#0c1466]/10 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-[#0c1466] font-bold" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="pt-2 flex items-center justify-between text-xs">
                <a 
                  href={`mailto:${profileData.email}`}
                  className="text-[#0c1466] hover:underline font-semibold inline-flex items-center gap-1"
                >
                  Open Email Client <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-[#0c1466]/60 text-[11px]">Replies within 24h</span>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div 
              id="contact-phone-card"
              className="p-5 rounded-2xl bg-white border border-[#0c1466]/20 hover:border-[#0c1466]/50 transition-all space-y-2 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0c1466]/10 text-[#0c1466]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#0c1466]/70 font-mono">Phone & WhatsApp</div>
                    <div className="text-sm font-bold text-[#0c1466]">{profileData.phone}</div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(profileData.phone, 'phone')}
                  type="button"
                  className="p-2 rounded-lg text-[#0c1466]/60 hover:text-[#0c1466] hover:bg-[#0c1466]/10 transition-colors cursor-pointer"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-[#0c1466] font-bold" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="pt-2 flex items-center gap-3 text-xs">
                <a 
                  href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                  className="text-[#0c1466] hover:underline font-semibold inline-flex items-center gap-1"
                >
                  Direct Call <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-[#0c1466]/30">•</span>
                <a 
                  href={`https://wa.me/${cleanPhoneForWhatsApp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0c1466] hover:underline font-semibold inline-flex items-center gap-1"
                >
                  WhatsApp Chat <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* GitHub Profile Card */}
            <div 
              id="contact-github-card"
              className="p-5 rounded-2xl bg-white border border-[#0c1466]/20 hover:border-[#0c1466]/50 transition-all space-y-2 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0c1466]/10 text-[#0c1466]">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#0c1466]/70 font-mono">GitHub Repositories</div>
                    <div className="text-sm font-bold text-[#0c1466]">github.com/{profileData.githubUsername}</div>
                  </div>
                </div>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-[#0c1466]/60 hover:text-[#0c1466] hover:bg-[#0c1466]/10 transition-colors"
                  title="Visit GitHub profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="pt-2 text-xs">
                <a 
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0c1466] hover:underline font-semibold inline-flex items-center gap-1"
                >
                  Explore Repos & Codebases <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location & Timezone Card */}
            <div className="p-4 rounded-2xl bg-[#0c1466]/5 border border-[#0c1466]/15 flex items-center justify-between text-xs text-[#0c1466] font-mono">
              <span className="flex items-center gap-2 font-medium">
                <MapPin className="w-4 h-4 text-[#0c1466]" />
                {profileData.location}
              </span>
              <span className="flex items-center gap-1.5 text-[#0c1466] font-semibold">
                <Clock className="w-3.5 h-3.5" />
                PKT (UTC +5)
              </span>
            </div>

          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7 bg-white border border-[#0c1466]/20 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#0c1466]/15">
              <div className="space-y-0.5">
                <h3 className="text-base sm:text-lg font-bold text-[#0c1466] flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#0c1466]" />
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#0c1466]/75">
                  Compose a brief inquiry to launch your email client with Aman's address pre-filled.
                </p>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0c1466] font-mono">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#0c1466]/20 text-xs text-[#0c1466] placeholder-[#0c1466]/40 focus:outline-hidden focus:border-[#0c1466] transition-colors shadow-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0c1466] font-mono">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#0c1466]/20 text-xs text-[#0c1466] placeholder-[#0c1466]/40 focus:outline-hidden focus:border-[#0c1466] transition-colors shadow-xs"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#0c1466] font-mono">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Full-Stack / Python Backend Project"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#0c1466]/20 text-xs text-[#0c1466] placeholder-[#0c1466]/40 focus:outline-hidden focus:border-[#0c1466] transition-colors shadow-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#0c1466] font-mono">
                  Message Details *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your requirements, timeline, or engineering goals..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#0c1466]/20 text-xs text-[#0c1466] placeholder-[#0c1466]/40 focus:outline-hidden focus:border-[#0c1466] transition-colors resize-none shadow-xs"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0c1466] hover:bg-[#0c1466]/90 text-white font-bold text-xs transition-all shadow-md shadow-[#0c1466]/20 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send Message via Email
                </button>

                {submitted && (
                  <span className="text-xs text-[#0c1466] font-mono font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Email client triggered!
                  </span>
                )}
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
