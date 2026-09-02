import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  Languages, 
  BadgeCheck,
  ShieldCheck
} from 'lucide-react';
import { educationData, certificationsData, profileData } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section 
      id="education" 
      className="py-16 md:py-24 border-t border-[#0c1466]/15 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0c1466]/5 border border-[#0c1466]/15 text-xs font-mono font-semibold text-[#0c1466]">
            <GraduationCap className="w-3.5 h-3.5 text-[#0c1466]" />
            ACADEMIC & PROFESSIONAL CREDENTIALS
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0c1466] tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-sm sm:text-base text-[#0c1466]/75 max-w-2xl">
            Formal computer science academic foundation paired with rigorous specialized credentials in Data Science, Machine Learning, and Python.
          </p>
        </div>

        {/* Dual Grid: Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Academic Education */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 pb-2">
              <GraduationCap className="w-5 h-5 text-[#0c1466]" />
              <h3 className="text-lg font-bold text-[#0c1466]">Academic Background</h3>
            </div>

            <div className="space-y-4">
              {educationData.map((edu) => (
                <div
                  key={edu.id}
                  id={`education-card-${edu.id}`}
                  className="rounded-2xl bg-white border border-[#0c1466]/20 hover:border-[#0c1466]/50 p-6 space-y-3 transition-all shadow-xs"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-mono text-[#0c1466] font-semibold uppercase">
                        {edu.field}
                      </span>
                      <h4 className="text-base font-bold text-[#0c1466]">{edu.degree}</h4>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#0c1466]/10 text-[#0c1466] border border-[#0c1466]/20">
                      {edu.status}
                    </span>
                  </div>

                  <div className="text-sm font-medium text-[#0c1466]/80">
                    {edu.institution}
                  </div>

                  <div className="pt-2 border-t border-[#0c1466]/15 flex flex-wrap items-center justify-between text-xs text-[#0c1466]/70 font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#0c1466]" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#0c1466]" />
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Language Proficiency Card */}
            <div className="rounded-2xl bg-[#0c1466]/5 border border-[#0c1466]/15 p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#0c1466] text-sm font-bold">
                <Languages className="w-4 h-4 text-[#0c1466]" />
                <span>Languages & Communication</span>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-1">
                {profileData.languages.map((lang, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-[#0c1466]/15 flex items-center justify-between shadow-xs">
                    <span className="text-xs font-semibold text-[#0c1466]">{lang.language}</span>
                    <span className="text-xs font-mono font-bold text-[#0c1466]">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#0c1466]" />
                <h3 className="text-lg font-bold text-[#0c1466]">Specialized Certifications</h3>
              </div>
              <span className="text-xs font-mono text-[#0c1466] font-semibold">5 Verified Credentials</span>
            </div>

            <div className="space-y-3">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  id={`cert-item-${cert.id}`}
                  className="rounded-xl bg-white border border-[#0c1466]/20 hover:border-[#0c1466]/50 p-4 transition-all flex items-center justify-between gap-4 group shadow-xs hover:shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#0c1466]/10 text-[#0c1466] shrink-0">
                      <BadgeCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0c1466]">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[#0c1466]/70 font-mono mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#0c1466]/5 text-[#0c1466] border border-[#0c1466]/15 font-medium">
                      {cert.issuedYear}
                    </span>
                    <span className="text-[10px] text-[#0c1466]/70 font-mono font-semibold">
                      {cert.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Credential summary banner */}
            <div className="p-4 rounded-xl bg-[#0c1466]/5 border border-[#0c1466]/15 flex items-center gap-3 text-xs text-[#0c1466]">
              <ShieldCheck className="w-5 h-5 text-[#0c1466] shrink-0" />
              <span>
                Accredited in Data Science and Python essentials by SMIT, Cisco Networking Academy, and HP Life.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
