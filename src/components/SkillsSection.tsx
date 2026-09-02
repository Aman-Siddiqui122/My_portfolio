import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  Server, 
  BrainCircuit, 
  Cloud, 
  Sparkles, 
  Search, 
  Cpu, 
  Database
} from 'lucide-react';
import { skillGroupsData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming & Web':
        return <Code2 className="w-5 h-5 text-[#0c1466]" />;
      case 'Frameworks & Backend':
        return <Server className="w-5 h-5 text-[#0c1466]" />;
      case 'AI, ML & Data Science':
        return <BrainCircuit className="w-5 h-5 text-[#0c1466]" />;
      case 'DevOps, Cloud & Tools':
        return <Cloud className="w-5 h-5 text-[#0c1466]" />;
      case 'Soft Skills & Mindset':
        return <Sparkles className="w-5 h-5 text-[#0c1466]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#0c1466]" />;
    }
  };

  const filteredGroups = useMemo(() => {
    return skillGroupsData
      .filter(group => {
        if (selectedCategory !== 'all' && group.category !== selectedCategory) {
          return false;
        }
        return true;
      })
      .map(group => {
        if (!searchTerm.trim()) return group;
        const matchingSkills = group.skills.filter(s => 
          s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (s.level && s.level.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        return {
          ...group,
          skills: matchingSkills
        };
      })
      .filter(group => group.skills.length > 0);
  }, [searchTerm, selectedCategory]);

  const allCategories = ['all', ...skillGroupsData.map(g => g.category)];

  return (
    <section 
      id="skills" 
      className="py-16 md:py-24 border-t border-[#0c1466]/15 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0c1466]/5 border border-[#0c1466]/15 text-xs font-mono font-semibold text-[#0c1466]">
              <Code2 className="w-3.5 h-3.5 text-[#0c1466]" />
              TECHNICAL ARSENAL
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0c1466] tracking-tight">
              Technical Skills & Proficiencies
            </h2>
            <p className="text-sm sm:text-base text-[#0c1466]/75 max-w-2xl">
              Comprehensive expertise spanning programming languages, backend frameworks, data science pipelines, database modeling, and DevOps deployment.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#0c1466]/50 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, Docker, ML)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-[#0c1466]/20 text-xs text-[#0c1466] placeholder-[#0c1466]/40 focus:outline-hidden focus:border-[#0c1466] transition-colors shadow-xs"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {allCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0c1466] text-white font-bold shadow-xs'
                  : 'bg-white text-[#0c1466]/80 hover:text-[#0c1466] border border-[#0c1466]/20 hover:bg-[#0c1466]/5'
              }`}
            >
              {cat === 'all' ? 'All Domains' : cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, idx) => (
            <div
              key={idx}
              id={`skill-group-${idx}`}
              className="rounded-2xl bg-white border border-[#0c1466]/20 hover:border-[#0c1466]/50 transition-all p-6 space-y-4 flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-3 pb-3 border-b border-[#0c1466]/15">
                  <div className="p-2 rounded-xl bg-[#0c1466]/10 border border-[#0c1466]/15 text-[#0c1466]">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0c1466]">{group.category}</h3>
                    <p className="text-[11px] text-[#0c1466]/70">{group.description}</p>
                  </div>
                </div>

                {/* Skill Chips List */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                        skill.isPrimary
                          ? 'bg-[#0c1466]/10 border border-[#0c1466]/35 text-[#0c1466] font-semibold'
                          : 'bg-white border border-[#0c1466]/15 text-[#0c1466]/85 hover:border-[#0c1466]/40'
                      }`}
                    >
                      <span className="font-semibold">{skill.name}</span>
                      {skill.level && (
                        <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                          skill.level === 'Proficient' || skill.level === 'Advanced' || skill.level === 'Core Strength'
                            ? 'bg-[#0c1466] text-white font-medium'
                            : 'bg-[#0c1466]/10 text-[#0c1466]'
                        }`}>
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer badge */}
              <div className="pt-3 border-t border-[#0c1466]/15 text-[11px] text-[#0c1466]/70 font-mono flex items-center justify-between">
                <span>{group.skills.length} competencies</span>
                <span className="text-[#0c1466] font-semibold">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stack Bar */}
        <div className="p-6 rounded-2xl bg-[#0c1466]/5 border border-[#0c1466]/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0c1466] text-white flex items-center justify-center shadow-xs">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0c1466]">Database & Deployment Ready</h4>
              <p className="text-xs text-[#0c1466]/75">Relational databases (MySQL, PostgreSQL) & Cloud infrastructure (AWS EC2, Docker, VPS, Linux).</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-white text-xs font-mono text-[#0c1466] border border-[#0c1466]/20 font-medium">
              Kali Linux & Ubuntu
            </span>
            <span className="px-3 py-1 rounded-lg bg-[#0c1466] text-xs font-mono text-white font-medium">
              Docker Compose
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
