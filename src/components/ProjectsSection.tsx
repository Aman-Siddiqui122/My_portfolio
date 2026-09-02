import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  ShieldCheck, 
  ShoppingCart, 
  Car,
  GraduationCap
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { CreditShieldDemo } from './CreditShieldDemo';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showSimulator, setShowSimulator] = useState<boolean>(true);

  const categories = [
    { id: 'all', label: 'All Projects', count: projectsData.length },
    { id: 'ml-ai', label: 'AI & Data Science', count: projectsData.filter(p => p.category === 'ml-ai').length },
    { id: 'web-ecommerce', label: 'Web & E-Commerce', count: projectsData.filter(p => p.category === 'web-ecommerce').length }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'credit-shield':
        return <ShieldCheck className="w-5 h-5 text-[#0c1466]" />;
      case 'pnp-meat-wholesale':
        return <ShoppingCart className="w-5 h-5 text-[#0c1466]" />;
      case 'ma-academy-uk':
        return <GraduationCap className="w-5 h-5 text-[#0c1466]" />;
      case 'quality-cars-vinyl':
        return <Car className="w-5 h-5 text-[#0c1466]" />;
      default:
        return <FolderGit2 className="w-5 h-5 text-[#0c1466]" />;
    }
  };

  return (
    <section 
      id="projects" 
      className="py-16 md:py-24 border-t border-[#0c1466]/15 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0c1466]/5 border border-[#0c1466]/15 text-xs font-mono font-semibold text-[#0c1466]">
              <FolderGit2 className="w-3.5 h-3.5 text-[#0c1466]" />
              FEATURED WORK & CLIENT SYSTEMS
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0c1466] tracking-tight">
              Featured Projects & Systems
            </h2>
            <p className="text-sm sm:text-base text-[#0c1466]/75 max-w-2xl">
              Production e-commerce applications, automated machine learning pipelines, and cloud-deployed client solutions.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#0c1466]/5 border border-[#0c1466]/15">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0c1466] text-white shadow-xs'
                    : 'text-[#0c1466]/70 hover:text-[#0c1466] hover:bg-white'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="rounded-2xl bg-white border border-[#0c1466]/20 hover:border-[#0c1466]/50 transition-all flex flex-col justify-between p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                
                {/* Top Badge Strip */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-[#0c1466]/10 text-[#0c1466]">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#0c1466] uppercase tracking-wider font-semibold">
                        {project.type}
                      </span>
                      <h3 className="text-xl font-bold text-[#0c1466]">{project.title}</h3>
                    </div>
                  </div>
                  
                  <span className="px-2.5 py-1 rounded-md bg-[#0c1466]/5 text-[#0c1466] text-xs font-mono border border-[#0c1466]/15 font-medium">
                    {project.period}
                  </span>
                </div>

                {/* Subtitle / Tagline */}
                <p className="text-xs font-medium text-[#0c1466] font-mono bg-[#0c1466]/5 px-3 py-1.5 rounded-lg border border-[#0c1466]/10">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-[#0c1466]/80 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-mono text-[#0c1466] uppercase font-semibold">
                    Key Technical Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#0c1466]/80">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0c1466] shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics Badges if applicable */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-[#0c1466]/5 border border-[#0c1466]/15 text-center">
                        <div className="text-[10px] text-[#0c1466]/70 uppercase font-medium">{m.label}</div>
                        <div className="text-xs font-bold text-[#0c1466] font-mono mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies Pills */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white text-[#0c1466] text-[11px] font-mono border border-[#0c1466]/20 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Links Bottom Bar */}
              <div className="pt-5 border-t border-[#0c1466]/15 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      id={`project-live-${project.id}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0c1466] hover:bg-[#0c1466]/90 text-white text-xs font-bold transition-all shadow-xs shadow-[#0c1466]/20"
                    >
                      <span>Live Website Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.adminUrl && (
                    <a
                      href={project.adminUrl}
                      target="_blank"
                      rel="noreferrer"
                      id={`project-admin-${project.id}`}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white hover:bg-[#0c1466]/5 text-[#0c1466] border border-[#0c1466]/30 text-xs font-semibold transition-all shadow-xs"
                    >
                      <span>Admin Portal</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      id={`project-github-${project.id}`}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white hover:bg-[#0c1466]/5 text-[#0c1466] border border-[#0c1466]/20 text-xs font-semibold transition-all shadow-xs"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>

                {project.id === 'credit-shield' && (
                  <button
                    onClick={() => setShowSimulator(!showSimulator)}
                    type="button"
                    className="text-xs text-[#0c1466] hover:underline font-mono font-semibold cursor-pointer"
                  >
                    {showSimulator ? 'Hide Simulator' : 'Test Model In-Page'}
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Embedded Interactive Credit Risk Assessment Simulator */}
        {showSimulator && (
          <div className="pt-6" id="ml-demo-section">
            <CreditShieldDemo />
          </div>
        )}

      </div>
    </section>
  );
};
