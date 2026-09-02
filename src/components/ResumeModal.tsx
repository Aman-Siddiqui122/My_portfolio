import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  MapPin, 
  Phone, 
  Mail, 
  Github, 
  Award,
  GraduationCap,
  Briefcase,
  Code2,
  FolderGit2
} from 'lucide-react';
import { profileData, projectsData, workExperienceData, educationData, certificationsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyResumeAsText = () => {
    const textContent = `
MUHAMMAD AMAN SIDDIQUI
Web Dev & Backend Dev · AI & Data Scientist
Location: ${profileData.location} | Phone: ${profileData.phone} | Email: ${profileData.email} | GitHub: ${profileData.github}

PROFESSIONAL SUMMARY:
${profileData.bio}

TECHNICAL SKILLS:
- Programming & Web: Python (Proficient), PHP, JavaScript, HTML, CSS, WordPress, Elementor, REST APIs
- Frameworks & Backend: FastAPI, Django, Flask, MySQL, PostgreSQL
- AI / ML & Data Science: LightGBM, Scikit-learn, TensorFlow, Pandas, NumPy, EDA, Matplotlib, Seaborn
- Deployment & DevOps: AWS EC2, Hostinger, Oracle VPS, Docker, Docker Compose, Linux (Kali, Ubuntu), Git

WORK EXPERIENCE:
Data Science Intern | Software Island (Remote) | Jan 28, 2026 – Apr 28, 2026
- Analyzed real-world datasets end-to-end — from data cleaning and EDA to extracting actionable business insights
- Built and validated predictive ML models using feature engineering, model training, and performance evaluation techniques
- Created interactive dashboards and visualizations to present data findings clearly to stakeholders

PROJECTS:
1. CreditShield — Loan Credit Risk Prediction (2024–2025)
   - Built end-to-end ML pipeline with LightGBM (AUC-ROC: 0.9756)
   - Multi-step risk assessment UI with real-time scoring and debt ratio analysis
   - Containerized with Docker and deployed on AWS EC2 & Render with Flask REST backend
   - Live: https://loan-credit-risk-2.onrender.com/ | GitHub: https://github.com/Aman-Siddiqui122/Loan_Credit_Risk

2. P&P Meat Wholesale — E-Commerce & Order Management System (2026)
   - Built and deployed PHP-based meat e-commerce website on Hostinger
   - Product browsing, details, and quantity-based ordering
   - Admin portal for managing products and customer orders
   - Live: https://pnpmeats.co.uk/ | Admin: https://portal.pnpmeats.co.uk/

3. MA Academy UK — Education & Tuition Website (2026)
   - Built a full-stack PHP, HTML & CSS website for a UK tuition academy in Walsall
   - Developed responsive pages showcasing tuition programs and vocational qualifications
   - Deployed the website on Hostinger, helping the local academy establish an online presence
   - Live: https://staging.maconsultancy.co.uk/

4. Quality Cars & Parts / Vinyl ML Project (2026)
   - End-to-end ML pipeline to predict chemical quality using UCI chemical Quality Dataset
   - Modular architecture, YAML configuration, and Scikit-learn data pipelines
   - Containerized with Docker and deployed on Amazon EC2
   - GitHub: https://github.com/Aman-Siddiqui122/Vinfyl_ML-Project

EDUCATION:
- Higher Secondary Certificate (HSC) — Computer Science | Government Islamia Science College, Karachi (June 2026 – Aug 2027, Expected)
- Secondary School Certificate (SSC) — Computer Science | Bodmas School System, Karachi (Graduated: Apr 2025)

CERTIFICATIONS:
- AI & Data Science Specialization — Saylani Mass IT Training (SMIT) (2026)
- SMIT Hackathon Certification — Saylani Mass IT Training (SMIT) (2026)
- Python Essentials — Cisco Networking Academy (2026)
- Introduction to Data Science — Cisco Networking Academy (2026)
- Data Analytics — HP Life (2026)

LANGUAGES:
- Urdu (Native) | English (Conversational)
    `.trim();

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0c1466]/40 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
    >
      <div 
        id="resume-modal-container"
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white border-2 border-[#0c1466]/20 rounded-2xl shadow-2xl overflow-hidden my-auto text-[#0c1466]"
      >
        {/* Modal Action Header (Excluded from Print) */}
        <div className="no-print flex items-center justify-between px-6 py-4 bg-white border-b border-[#0c1466]/15">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#0c1466] text-sm sm:text-base">
              Resume / Curriculum Vitae
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-xs font-mono bg-[#0c1466]/5 text-[#0c1466] border border-[#0c1466]/15 font-semibold">
              ATS-Optimized & Printable
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyResumeAsText}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#0c1466]/5 text-[#0c1466] text-xs font-semibold transition-colors border border-[#0c1466]/20 cursor-pointer shadow-xs"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#0c1466] font-bold" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0c1466] hover:bg-[#0c1466]/90 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-lg text-[#0c1466] hover:bg-[#0c1466]/10 transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Body */}
        <div 
          id="printable-resume-body"
          className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white text-[#0c1466] print:p-0 print:space-y-6"
        >
          {/* Header */}
          <div className="border-b border-[#0c1466]/15 pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0c1466] tracking-tight">
              {profileData.name}
            </h1>
            <p className="text-sm sm:text-base font-bold text-[#0c1466]/85">
              {profileData.title}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#0c1466]/70 font-mono pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#0c1466]" />
                {profileData.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#0c1466]" />
                {profileData.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#0c1466]" />
                {profileData.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Github className="w-3 h-3 text-[#0c1466]" />
                github.com/{profileData.githubUsername}
              </span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0c1466] flex items-center gap-1.5">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#0c1466]/80 leading-relaxed">
              {profileData.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0c1466] flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-[#0c1466]" />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#0c1466]/85">
              <div>
                <strong className="text-[#0c1466]">Programming:</strong> Python (Proficient), PHP, JavaScript, HTML, CSS
              </div>
              <div>
                <strong className="text-[#0c1466]">Web & CMS:</strong> WordPress, Elementor, Customization, REST APIs
              </div>
              <div>
                <strong className="text-[#0c1466]">Frameworks:</strong> FastAPI, Django, Flask, Scikit-learn, TensorFlow
              </div>
              <div>
                <strong className="text-[#0c1466]">Data Science & Viz:</strong> LightGBM, Pandas, NumPy, Matplotlib, Seaborn, EDA
              </div>
              <div>
                <strong className="text-[#0c1466]">Databases:</strong> MySQL, PostgreSQL
              </div>
              <div>
                <strong className="text-[#0c1466]">DevOps & Cloud:</strong> AWS EC2, Hostinger, Oracle VPS, Docker, Docker Compose
              </div>
              <div>
                <strong className="text-[#0c1466]">Tools & OS:</strong> Git / GitHub, MS Excel (Adv), Linux (Kali, Ubuntu), Windows
              </div>
              <div>
                <strong className="text-[#0c1466]">Soft Skills:</strong> Analytical Thinking, Problem Solving, Continuous Learning
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0c1466] flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-[#0c1466]" />
              Work Experience
            </h2>
            {workExperienceData.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-between text-xs">
                  <div className="font-bold text-[#0c1466] text-sm">
                    {exp.role} <span className="font-normal text-[#0c1466]/70">| {exp.company} ({exp.location})</span>
                  </div>
                  <div className="font-mono text-[#0c1466]/70 text-xs">
                    {exp.period}
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#0c1466]/80">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0c1466] flex items-center gap-1.5">
              <FolderGit2 className="w-3.5 h-3.5 text-[#0c1466]" />
              Featured Projects
            </h2>
            <div className="space-y-4">
              {projectsData.map((p) => (
                <div key={p.id} className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between text-xs">
                    <div className="font-bold text-[#0c1466] text-sm">
                      {p.title} — <span className="font-normal text-[#0c1466]/80">{p.subtitle}</span>
                      <span className="text-[11px] font-mono text-[#0c1466] font-semibold ml-2">({p.type})</span>
                    </div>
                    <div className="font-mono text-[#0c1466]/70">
                      {p.period}
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-xs text-[#0c1466]/80">
                    {p.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="leading-relaxed">
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="text-[11px] font-mono text-[#0c1466]/70 pt-0.5">
                    Stack: {p.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#0c1466]/15">
            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0c1466] flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#0c1466]" />
                Education
              </h2>
              {educationData.map((edu) => (
                <div key={edu.id} className="text-xs space-y-0.5">
                  <div className="font-bold text-[#0c1466]">{edu.degree} ({edu.field})</div>
                  <div className="text-[#0c1466]/70">{edu.institution}, {edu.location}</div>
                  <div className="text-[11px] font-mono text-[#0c1466] font-semibold">{edu.period} ({edu.status})</div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0c1466] flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#0c1466]" />
                Certifications
              </h2>
              <ul className="space-y-1 text-xs text-[#0c1466]/80">
                {certificationsData.map((c) => (
                  <li key={c.id}>
                    <strong className="text-[#0c1466]">{c.title}</strong> — {c.issuer} ({c.issuedYear})
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
