import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSummary } from './components/AboutSummary';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDemo = () => {
    const el = document.getElementById('credit-shield-simulator') || document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0c1466] flex flex-col selection:bg-[#0c1466]/15 selection:text-[#0c1466]">
      {/* Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Body */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)}
          onScrollToProjects={scrollToProjects}
          onScrollToDemo={scrollToDemo}
        />

        {/* Professional Summary & Core Pillars */}
        <AboutSummary />

        {/* Technical Skills Hub */}
        <SkillsSection />

        {/* Featured Projects & Interactive ML Simulator */}
        <ProjectsSection />

        {/* Work Experience Timeline */}
        <ExperienceTimeline />

        {/* Education & Certifications */}
        <EducationCertifications />

        {/* Contact & Inquiry Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* ATS-Friendly Printable Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  );
}

