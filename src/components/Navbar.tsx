import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  ArrowUpRight 
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education & Certs', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-[#0c1466]/15 shadow-sm shadow-[#0c1466]/5 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a 
            href="#" 
            id="nav-brand-logo"
            className="group flex items-center gap-3 text-[#0c1466] transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0c1466] text-white flex items-center justify-center font-bold text-base tracking-wider font-mono shadow-sm group-hover:scale-105 transition-transform">
              AS
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base text-[#0c1466] tracking-tight flex items-center gap-2">
                Aman Siddiqui
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#0c1466]/10 text-[#0c1466] border border-[#0c1466]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0c1466] animate-pulse"></span>
                  Open to Work
                </span>
              </span>
              <span className="text-xs text-[#0c1466]/70 font-mono tracking-tight">
                Backend & AI Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="px-3 py-1.5 rounded-lg text-sm text-[#0c1466]/80 hover:text-[#0c1466] hover:bg-[#0c1466]/5 font-medium transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Resume & Contact */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenResume}
              id="nav-resume-button"
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#0c1466] bg-white hover:bg-[#0c1466]/5 border border-[#0c1466]/20 transition-all hover:border-[#0c1466]/50 cursor-pointer shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-[#0c1466]" />
              View CV / Resume
            </button>

            <a
              href="#contact"
              id="nav-contact-cta"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#0c1466] hover:bg-[#0c1466]/90 transition-colors shadow-xs shadow-[#0c1466]/20 cursor-pointer"
            >
              Hire Me
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResume}
              id="mobile-nav-resume-btn"
              type="button"
              className="p-2 rounded-lg text-xs font-medium text-[#0c1466] bg-white border border-[#0c1466]/20"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4 text-[#0c1466]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              type="button"
              className="p-2 rounded-lg text-[#0c1466] hover:bg-[#0c1466]/10 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="md:hidden bg-white/98 border-b border-[#0c1466]/20 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl shadow-xl"
        >
          <div className="px-3 py-2 mb-2 rounded-lg bg-[#0c1466]/5 border border-[#0c1466]/15 flex items-center justify-between text-xs text-[#0c1466]">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#0c1466] animate-pulse"></span>
              Available for Full-Time & Freelance
            </span>
            <span className="text-[#0c1466]/70">Karachi, PK</span>
          </div>

          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-[#0c1466]/90 hover:bg-[#0c1466]/10 hover:text-[#0c1466] font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}

          <div className="pt-3 mt-2 border-t border-[#0c1466]/15 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-[#0c1466] bg-white border border-[#0c1466]/20 hover:bg-[#0c1466]/5"
            >
              <FileText className="w-4 h-4 text-[#0c1466]" />
              View & Print Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#0c1466] hover:bg-[#0c1466]/90"
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
