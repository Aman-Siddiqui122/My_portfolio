import React from 'react';
import { ArrowUp, Github, Mail, MapPin, Globe } from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#0c1466]/15 bg-white py-12 text-[#0c1466]/75 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#0c1466]/15">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0c1466] text-white flex items-center justify-center font-bold font-mono text-xs shadow-xs">
              AS
            </div>
            <div>
              <div className="font-bold text-[#0c1466] text-sm">
                Muhammad Aman Siddiqui
              </div>
              <div className="text-[11px] text-[#0c1466]/70 font-mono">
                Web Dev & Backend Dev · AI & Data Scientist
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a href="#about" className="hover:text-[#0c1466] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#0c1466] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#0c1466] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#0c1466] transition-colors">Experience</a>
            <a href="#education" className="hover:text-[#0c1466] transition-colors">Education & Certs</a>
            <button 
              onClick={onOpenResume} 
              className="hover:text-[#0c1466] transition-colors cursor-pointer"
            >
              Resume CV
            </button>
            <a href="#contact" className="hover:text-[#0c1466] transition-colors">Contact</a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            id="footer-back-to-top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#0c1466]/5 text-[#0c1466] border border-[#0c1466]/20 transition-all cursor-pointer text-xs font-medium shadow-xs"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#0c1466]" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#0c1466]/70">
          <div>
            © {new Date().getFullYear()} Muhammad Aman Siddiqui. All rights reserved.
          </div>

          <div className="flex items-center gap-4 font-mono font-medium">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#0c1466]" />
              Karachi, Pakistan
            </span>
            <span>•</span>
            {profileData.portfolioUrl && (
              <>
                <a 
                  href={profileData.portfolioUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-[#0c1466] transition-colors flex items-center gap-1"
                >
                  <Globe className="w-3 h-3 text-[#0c1466]" />
                  Portfolio
                </a>
                <span>•</span>
              </>
            )}
            <a 
              href={profileData.github} 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-[#0c1466] transition-colors flex items-center gap-1"
            >
              <Github className="w-3 h-3 text-[#0c1466]" />
              GitHub
            </a>
            <span>•</span>
            <a 
              href={`mailto:${profileData.email}`}
              className="hover:text-[#0c1466] transition-colors flex items-center gap-1"
            >
              <Mail className="w-3 h-3 text-[#0c1466]" />
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
