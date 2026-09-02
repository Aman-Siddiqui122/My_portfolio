import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Github, 
  Copy, 
  Check, 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Server, 
  Cpu, 
  ExternalLink,
  FileDown
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onScrollToProjects: () => void;
  onScrollToDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenResume, 
  onScrollToProjects,
  onScrollToDemo 
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <section 
      id="hero" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#0c1466]/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-[#0c1466]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Location & Status Tag */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-[#0c1466]/5 border border-[#0c1466]/15 text-xs text-[#0c1466] shadow-xs">
              <span className="flex items-center gap-1.5 text-[#0c1466] font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#0c1466]" />
                {profileData.location}
              </span>
              <span className="text-[#0c1466]/40">•</span>
              <span className="text-[#0c1466]/80 font-medium">Available for Remote & Onsite</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0c1466] font-mono">
                Software Engineer & ML Practitioner
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0c1466] tracking-tight leading-[1.1]">
                {profileData.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#0c1466]/85">
                {profileData.title}
              </p>
            </div>

            {/* Pitch / Bio Snippet */}
            <p className="text-[#0c1466]/80 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Passionate developer specializing in <strong className="text-[#0c1466] font-semibold">Python Backend (FastAPI, Flask, Django)</strong>, 
              scalable REST APIs, and responsive web platforms (PHP & WordPress), combined with hands-on expertise in 
              <strong className="text-[#0c1466] font-semibold"> Machine Learning & Data Science</strong> (LightGBM, Scikit-learn, Deep Learning, and Docker cloud deployments).
            </p>

            {/* Quick Contact & Action Chips */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              
              {/* Email Chip */}
              <div 
                id="hero-email-chip"
                className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-[#0c1466]/20 hover:border-[#0c1466] transition-all text-xs font-mono text-[#0c1466] shadow-xs"
              >
                <Mail className="w-3.5 h-3.5 text-[#0c1466] shrink-0" />
                <a 
                  href={`mailto:${profileData.email}`} 
                  className="hover:underline transition-colors font-medium"
                  title="Send email"
                >
                  {profileData.email}
                </a>
                <button
                  onClick={() => copyToClipboard(profileData.email, 'email')}
                  className="p-1 text-[#0c1466]/60 hover:text-[#0c1466] rounded hover:bg-[#0c1466]/10 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  type="button"
                >
                  {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-[#0c1466] font-bold" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone / WhatsApp Chip */}
              <div 
                id="hero-phone-chip"
                className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-[#0c1466]/20 hover:border-[#0c1466] transition-all text-xs font-mono text-[#0c1466] shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#0c1466] shrink-0" />
                <a 
                  href={`tel:${profileData.phone.replace(/\s+/g, '')}`} 
                  className="hover:underline transition-colors font-medium"
                >
                  {profileData.phone}
                </a>
                <button
                  onClick={() => copyToClipboard(profileData.phone, 'phone')}
                  className="p-1 text-[#0c1466]/60 hover:text-[#0c1466] rounded hover:bg-[#0c1466]/10 transition-colors cursor-pointer"
                  title="Copy phone"
                  type="button"
                >
                  {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-[#0c1466] font-bold" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* GitHub Link */}
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                id="hero-github-link"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-[#0c1466]/20 hover:border-[#0c1466] transition-all text-xs font-mono text-[#0c1466] hover:bg-[#0c1466]/5 shadow-xs"
              >
                <Github className="w-3.5 h-3.5 text-[#0c1466] shrink-0" />
                <span className="font-medium">github/{profileData.githubUsername}</span>
                <ExternalLink className="w-3 h-3 text-[#0c1466]/70" />
              </a>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onScrollToProjects}
                id="hero-btn-view-projects"
                type="button"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0c1466] hover:bg-[#0c1466]/90 text-white font-semibold text-sm transition-all shadow-md shadow-[#0c1466]/20 hover:shadow-[#0c1466]/30 cursor-pointer"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToDemo}
                id="hero-btn-test-ml"
                type="button"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#0c1466]/5 text-[#0c1466] border border-[#0c1466]/30 hover:border-[#0c1466] font-semibold text-sm transition-all cursor-pointer shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-[#0c1466]" />
                Test Live ML Simulator
              </button>

              <button
                onClick={onOpenResume}
                id="hero-btn-resume"
                type="button"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-[#0c1466]/5 text-[#0c1466] border border-[#0c1466]/20 hover:border-[#0c1466]/40 font-medium text-sm transition-all cursor-pointer shadow-xs"
              >
                <FileDown className="w-4 h-4 text-[#0c1466]" />
                Resume / CV
              </button>
            </div>

          </div>

          {/* Right Column: Code Terminal & Architecture Card */}
          <div className="lg:col-span-5">
            <div 
              id="hero-tech-card"
              className="relative rounded-2xl bg-white border border-[#0c1466]/20 p-5 sm:p-6 shadow-xl shadow-[#0c1466]/5 overflow-hidden"
            >
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#0c1466]/15">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#0c1466]/20" />
                  <div className="w-3 h-3 rounded-full bg-[#0c1466]/40" />
                  <div className="w-3 h-3 rounded-full bg-[#0c1466]" />
                  <span className="ml-2 text-xs font-mono text-[#0c1466] font-semibold flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#0c1466]" />
                    aman_siddiqui_stack.py
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0c1466]/10 text-[#0c1466] font-semibold border border-[#0c1466]/20">
                  Python 3.11 · ML
                </span>
              </div>

              {/* Code Snippet Display */}
              <div className="font-mono text-xs text-[#0c1466] space-y-2.5 overflow-x-auto leading-relaxed bg-[#0c1466]/5 p-4 rounded-xl border border-[#0c1466]/10">
                <div>
                  <span className="font-bold text-[#0c1466]">class</span> <span className="underline decoration-[#0c1466]/40">AmanSiddiqui</span>:
                </div>
                <div className="pl-4 space-y-1 text-[#0c1466]/90">
                  <div>
                    <span className="font-semibold text-[#0c1466]">expertise</span> = [
                    <span className="text-[#0c1466]">"Web Dev"</span>, 
                    <span className="text-[#0c1466]">"Python Backend"</span>, 
                    <span className="text-[#0c1466]">"AI & Data Science"</span>]
                  </div>
                  <div>
                    <span className="font-semibold text-[#0c1466]">backend_frameworks</span> = [
                    <span className="text-[#0c1466]">"FastAPI"</span>, 
                    <span className="text-[#0c1466]">"Flask"</span>, 
                    <span className="text-[#0c1466]">"Django"</span>, 
                    <span className="text-[#0c1466]">"PHP"</span>]
                  </div>
                  <div>
                    <span className="font-semibold text-[#0c1466]">ai_stack</span> = [
                    <span className="text-[#0c1466]">"LightGBM"</span>, 
                    <span className="text-[#0c1466]">"Scikit-learn"</span>, 
                    <span className="text-[#0c1466]">"TensorFlow"</span>]
                  </div>
                  <div>
                    <span className="font-semibold text-[#0c1466]">deployment</span> = [
                    <span className="text-[#0c1466]">"Docker"</span>, 
                    <span className="text-[#0c1466]">"AWS EC2"</span>, 
                    <span className="text-[#0c1466]">"VPS"</span>]
                  </div>
                </div>

                <div className="pt-2">
                  <span className="font-bold text-[#0c1466]">def</span> <span className="font-semibold text-[#0c1466]">build_solution</span>(self, problem):
                </div>
                <div className="pl-4 text-[#0c1466]">
                  <span className="font-bold text-[#0c1466]">return</span> MLPipeline(problem).deploy_cloud(target=<span className="font-semibold">"AWS"</span>)
                </div>
              </div>

              {/* Micro Performance Badges */}
              <div className="grid grid-cols-2 gap-2.5 pt-5 mt-5 border-t border-[#0c1466]/15">
                <div className="p-2.5 rounded-xl bg-white border border-[#0c1466]/20 flex items-center gap-2.5 shadow-xs">
                  <div className="p-2 rounded-lg bg-[#0c1466]/10 text-[#0c1466]">
                    <Cpu className="w-4 h-4 text-[#0c1466]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#0c1466]/70">LightGBM Model</div>
                    <div className="text-sm font-bold text-[#0c1466] font-mono">0.9756 AUC</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-[#0c1466]/20 flex items-center gap-2.5 shadow-xs">
                  <div className="p-2 rounded-lg bg-[#0c1466]/10 text-[#0c1466]">
                    <Server className="w-4 h-4 text-[#0c1466]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#0c1466]/70">Production Deploy</div>
                    <div className="text-sm font-bold text-[#0c1466] font-mono">Docker + AWS</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Highlight Stats Strip */}
        <div 
          id="hero-stats-strip"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#0c1466]/15"
        >
          {profileData.stats.map((stat, idx) => (
            <div 
              key={idx} 
              id={`stat-card-${idx}`}
              className="p-4 rounded-xl bg-white border border-[#0c1466]/20 hover:border-[#0c1466]/50 transition-all text-left shadow-xs"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0c1466] font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#0c1466] mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#0c1466]/70 mt-0.5">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
