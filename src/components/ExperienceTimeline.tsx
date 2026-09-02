import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  TrendingUp,
  BarChart3
} from 'lucide-react';
import { workExperienceData } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="py-16 md:py-24 border-t border-[#0c1466]/15 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0c1466]/5 border border-[#0c1466]/15 text-xs font-mono font-semibold text-[#0c1466]">
            <Briefcase className="w-3.5 h-3.5 text-[#0c1466]" />
            PROFESSIONAL HISTORY
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0c1466] tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-[#0c1466]/75 max-w-2xl">
            Hands-on commercial internship and engineering contributions across machine learning workflows and predictive analytics.
          </p>
        </div>

        {/* Experience Cards / Timeline */}
        <div className="space-y-6">
          {workExperienceData.map((exp) => (
            <div
              key={exp.id}
              id={`experience-item-${exp.id}`}
              className="relative rounded-2xl bg-white border border-[#0c1466]/20 hover:border-[#0c1466]/50 p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-md transition-all"
            >
              {/* Top Row: Role, Company & Period */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#0c1466]/15">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-[#0c1466]/10 text-[#0c1466] shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-[#0c1466]">{exp.role}</h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#0c1466]/10 text-[#0c1466] border border-[#0c1466]/20">
                        {exp.duration}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#0c1466]/70 mt-1 font-mono">
                      <span className="text-[#0c1466] font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#0c1466]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0c1466]/5 border border-[#0c1466]/15 text-xs font-mono text-[#0c1466] self-start md:self-auto font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#0c1466]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-sm text-[#0c1466]/80 leading-relaxed">
                {exp.summary}
              </p>

              {/* Responsibilities list */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-[#0c1466] font-semibold flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-[#0c1466]" />
                  Key Responsibilities & Deliverables:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#0c1466]/80">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0c1466] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies strip */}
              <div className="pt-4 border-t border-[#0c1466]/15 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs text-[#0c1466]/70 font-mono mr-1">Stack:</span>
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white text-[#0c1466] text-xs font-mono border border-[#0c1466]/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#0c1466] font-mono font-semibold">
                  <BarChart3 className="w-3.5 h-3.5 text-[#0c1466]" />
                  <span>Validated Predictive ML Pipelines</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
