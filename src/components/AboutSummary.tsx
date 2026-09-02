import React from 'react';
import { 
  UserCheck, 
  Brain, 
  Server, 
  Layers, 
  Globe2, 
  CheckCircle2, 
  Cpu
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const AboutSummary: React.FC = () => {
  const pillars = [
    {
      icon: <Brain className="w-5 h-5 text-[#0c1466]" />,
      title: "AI & Machine Learning",
      description: "Building predictive ML pipelines (LightGBM, Scikit-learn, TensorFlow), feature engineering, exploratory data analysis, and model performance evaluation."
    },
    {
      icon: <Server className="w-5 h-5 text-[#0c1466]" />,
      title: "Python Backend & APIs",
      description: "Developing robust APIs and microservices with FastAPI, Flask, and Django, coupled with relational database modeling in MySQL and PostgreSQL."
    },
    {
      icon: <Layers className="w-5 h-5 text-[#0c1466]" />,
      title: "Web & E-Commerce Systems",
      description: "Creating responsive web applications, custom PHP platforms, e-commerce order management portals, and custom WordPress/Elementor solutions."
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#0c1466]" />,
      title: "DevOps & Cloud Deploy",
      description: "Containerizing services with Docker and Docker Compose, provisioning cloud servers on AWS EC2, Hostinger, and Oracle VPS with Linux administration."
    }
  ];

  return (
    <section 
      id="about" 
      className="py-16 md:py-20 border-t border-[#0c1466]/15 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0c1466]/5 border border-[#0c1466]/15 text-xs font-mono font-semibold text-[#0c1466]">
            <UserCheck className="w-3.5 h-3.5 text-[#0c1466]" />
            PROFESSIONAL BACKGROUND
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c1466] tracking-tight">
            About Muhammad Aman Siddiqui
          </h2>
          <p className="text-sm sm:text-base text-[#0c1466]/75 max-w-2xl">
            Passionate developer with hands-on experience bridging responsive web interfaces, robust Python backend services, and machine learning intelligence.
          </p>
        </div>

        {/* Grid layout: Professional Summary & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Summary Box */}
          <div className="lg:col-span-7 bg-white border border-[#0c1466]/20 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-3 pb-4 border-b border-[#0c1466]/15">
              <div className="w-9 h-9 rounded-xl bg-[#0c1466] text-white flex items-center justify-center font-bold font-mono">
                AS
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0c1466]">Professional Summary</h3>
                <p className="text-xs text-[#0c1466]/70 font-medium">Web Developer & Python Backend Engineer · AI Specialist</p>
              </div>
            </div>

            <p className="text-[#0c1466]/80 text-sm sm:text-base leading-relaxed">
              {profileData.bio}
            </p>

            {/* Quick Strengths Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-[#0c1466]/85">
                <CheckCircle2 className="w-4 h-4 text-[#0c1466] shrink-0 mt-0.5" />
                <span><strong className="text-[#0c1466]">API Architecture:</strong> FastAPI, Django, Flask & REST</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#0c1466]/85">
                <CheckCircle2 className="w-4 h-4 text-[#0c1466] shrink-0 mt-0.5" />
                <span><strong className="text-[#0c1466]">Machine Learning:</strong> LightGBM, Scikit-learn, TensorFlow</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#0c1466]/85">
                <CheckCircle2 className="w-4 h-4 text-[#0c1466] shrink-0 mt-0.5" />
                <span><strong className="text-[#0c1466]">Deployment:</strong> Docker, AWS EC2, Hostinger & VPS</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#0c1466]/85">
                <CheckCircle2 className="w-4 h-4 text-[#0c1466] shrink-0 mt-0.5" />
                <span><strong className="text-[#0c1466]">Data Analysis:</strong> Pandas, EDA, Seaborn & Dashboards</span>
              </div>
            </div>

            {/* Languages and Soft Skills bar */}
            <div className="pt-4 border-t border-[#0c1466]/15 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[#0c1466]/70 font-mono font-medium">Languages:</span>
                {profileData.languages.map((lang, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-[#0c1466]/5 border border-[#0c1466]/15 text-[#0c1466] font-medium">
                    {lang.language} <span className="font-semibold">({lang.proficiency})</span>
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-[#0c1466]/80 font-medium">
                <Globe2 className="w-3.5 h-3.5 text-[#0c1466]" />
                <span>Based in Karachi, Pakistan</span>
              </div>
            </div>
          </div>

          {/* 4 Pillars Matrix */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                id={`about-pillar-${idx}`}
                className="p-5 rounded-2xl bg-white border border-[#0c1466]/20 hover:border-[#0c1466]/50 transition-all hover:bg-[#0c1466]/5 space-y-2 shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#0c1466]/10 border border-[#0c1466]/15 text-[#0c1466]">
                    {pillar.icon}
                  </div>
                  <h4 className="text-sm font-bold text-[#0c1466]">{pillar.title}</h4>
                </div>
                <p className="text-xs text-[#0c1466]/75 leading-relaxed pl-1">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
