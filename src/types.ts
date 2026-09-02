export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'ml-ai' | 'web-ecommerce' | 'backend' | 'automation';
  period: string;
  type: 'Personal Project' | 'Client Project' | 'Internship';
  description: string;
  highlights: string[];
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  liveUrl?: string;
  adminUrl?: string;
  githubUrl?: string;
  featured: boolean;
  colorScheme: 'teal' | 'indigo' | 'amber';
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  type: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  badge?: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  status: 'Expected' | 'Graduated' | 'In Progress';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuedYear: string;
  category: 'AI & Data Science' | 'Programming' | 'Analytics' | 'Hackathon';
  badgeIconName?: string;
}

export interface SkillGroup {
  category: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    isPrimary?: boolean;
  }[];
}

export interface ProfileData {
  name: string;
  title: string;
  roles: string[];
  location: string;
  phone: string;
  email: string;
  portfolioUrl?: string;
  github: string;
  githubUsername: string;
  bio: string;
  languages: {
    language: string;
    proficiency: string;
  }[];
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
}
