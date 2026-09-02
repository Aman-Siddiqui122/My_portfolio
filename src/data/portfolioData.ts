import { ProfileData, Project, WorkExperience, Education, Certification, SkillGroup } from '../types';

export const profileData: ProfileData = {
  name: "Muhammad Aman Siddiqui",
  title: "Web Dev & Backend Dev · AI & Data Scientist",
  roles: [
    "Python Backend Developer",
    "AI & Data Scientist",
    "Full-Stack Web Developer",
    "ML Pipeline Engineer"
  ],
  location: "Karachi, Pakistan",
  phone: "+92-319-4989590",
  email: "m.amansiddiqui.122@gmail.com",
  github: "https://github.com/Aman-Siddiqui122",
  githubUsername: "Aman-Siddiqui122",
  bio: "Web Developer and Python Backend Developer with 1 year of hands-on experience building responsive websites, backend applications, APIs, and automation solutions. Strong foundation in WordPress, PHP, HTML, CSS, and JavaScript, with backend development experience using Python, FastAPI, Django, and Flask. Also skilled in Data Science, Machine Learning, Deep Learning, and automation, with a practical understanding of AI-driven solutions. Experienced in database management, API integration, deployment, and developing scalable, reliable applications. Passionate about building practical software solutions and continuously learning modern technologies.",
  languages: [
    { language: "Urdu", proficiency: "Native" },
    { language: "English", proficiency: "Conversational" }
  ],
  stats: [
    { label: "Hands-on Experience", value: "1+ Year", subtext: "Web & Python Backend" },
    { label: "AUC-ROC Achieved", value: "0.9756", subtext: "Credit Default Model" },
    { label: "Production Deployments", value: "AWS & VPS", subtext: "Docker & Cloud Hosting" },
    { label: "Certifications", value: "5 Verified", subtext: "SMIT, Cisco & HP" }
  ]
};

export const projectsData: Project[] = [
  {
    id: "credit-shield",
    title: "CreditShield",
    subtitle: "Loan Credit Risk Prediction Platform",
    tagline: "End-to-end Machine Learning pipeline predicting loan default probabilities with real-time scoring.",
    category: "ml-ai",
    period: "2024 – 2025",
    type: "Personal Project",
    featured: true,
    colorScheme: "teal",
    description: "Architected and engineered a comprehensive credit default risk prediction system powered by a tuned LightGBM algorithm. The platform features an interactive risk assessment dashboard providing credit grading, debt-to-income analysis, and real-time probability estimates for financial institutions.",
    highlights: [
      "Trained an end-to-end ML pipeline using LightGBM achieving an outstanding AUC-ROC score of 0.9756 on validation datasets",
      "Developed a responsive multi-step assessment UI with instant probability scoring, debt ratio calculations, and risk categorization",
      "Built a robust Flask RESTful API backend handling feature scaling, imputations, and real-time inference",
      "Containerized the entire solution with Docker and deployed to production on AWS EC2 & Render"
    ],
    technologies: [
      "Python",
      "LightGBM",
      "Flask REST API",
      "Scikit-learn",
      "Pandas & NumPy",
      "Docker",
      "AWS EC2",
      "Render"
    ],
    metrics: [
      { label: "Model AUC-ROC", value: "0.9756" },
      { label: "Inference Latency", value: "< 45ms" },
      { label: "Deployment", value: "Docker / AWS" }
    ],
    liveUrl: "https://loan-credit-risk-2.onrender.com/",
    githubUrl: "https://github.com/Aman-Siddiqui122/Loan_Credit_Risk"
  },
  {
    id: "pnp-meat-wholesale",
    title: "P&P Meat Wholesale",
    subtitle: "E-Commerce & Order Management System",
    tagline: "Commercial wholesale food procurement platform with custom inventory and administrative portal.",
    category: "web-ecommerce",
    period: "2026",
    type: "Client Project",
    featured: true,
    colorScheme: "amber",
    description: "Built and deployed a production-grade commercial wholesale e-commerce platform for UK-based meat supplier P&P Meat Wholesale. Designed a frictionless bulk ordering workflow alongside a dedicated administrative portal for product catalogs, pricing tiers, and client order fulfillment.",
    highlights: [
      "Engineered dynamic product catalog with categorical browsing, item detail sheets, and quantity-based tier ordering",
      "Architected a custom admin management dashboard allowing staff to manage inventory items, update stock, and track customer orders",
      "Implemented secure database architecture with optimized PHP endpoints and responsive mobile-first frontend",
      "Configured production hosting, DNS records, and SSL deployment on Hostinger infrastructure"
    ],
    technologies: [
      "PHP",
      "MySQL",
      "HTML5 / CSS3",
      "JavaScript",
      "REST APIs",
      "Hostinger Cloud",
      "Admin Dashboard"
    ],
    metrics: [
      { label: "Client Market", value: "UK Wholesale" },
      { label: "Platform", value: "Store + Admin" },
      { label: "Uptime", value: "99.9%" }
    ],
    liveUrl: "https://pnpmeats.co.uk/",
    adminUrl: "https://portal.pnpmeats.co.uk/"
  },
  {
    id: "ma-academy-uk",
    title: "MA Academy UK",
    subtitle: "Education & Tuition Website",
    tagline: "Full-stack educational platform for a UK tuition academy showcasing programs and vocational qualifications.",
    category: "web-ecommerce",
    period: "2026",
    type: "Client Project",
    featured: true,
    colorScheme: "indigo",
    description: "Built and deployed a full-stack educational and tuition website for MA Academy UK located in Walsall. Developed responsive, structured pages showcasing comprehensive tuition programs and vocational qualifications, helping the local academy establish a modern online presence.",
    highlights: [
      "Built a full-stack PHP, HTML & CSS website for a UK tuition academy in Walsall",
      "Developed responsive pages showcasing tuition programs and vocational qualifications",
      "Deployed the website on Hostinger, helping the local academy establish an online presence",
      "Engineered mobile-friendly layouts, course inquiry touchpoints, and clear course pathways"
    ],
    technologies: [
      "PHP",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Hostinger",
      "Responsive Web Design"
    ],
    metrics: [
      { label: "Client Market", value: "UK (Walsall)" },
      { label: "Platform", value: "Full-Stack PHP" },
      { label: "Hosting", value: "Hostinger" }
    ],
    liveUrl: "https://staging.maconsultancy.co.uk/"
  },
  {
    id: "quality-cars-vinyl",
    title: "Quality Cars & Parts / Vinyl ML",
    subtitle: "Automotive & Chemical Quality Predictive Pipeline",
    tagline: "Modular machine learning pipeline predicting quality metrics with containerized cloud deployment.",
    category: "ml-ai",
    period: "2026",
    type: "Client Project",
    featured: false,
    colorScheme: "indigo",
    description: "Engineered an end-to-end machine learning system utilizing the UCI Chemical Quality dataset for industrial quality assurance. Features modular data ingestion, automated feature preprocessing, YAML configuration management, and Amazon EC2 Docker deployment.",
    highlights: [
      "Built a modular ML pipeline using Scikit-learn with automated data cleaning, cross-validation, and hyperparameter tuning",
      "Designed clean project architecture governed by structured YAML configuration files for frictionless pipeline experimentation",
      "Created containerized application images with Docker and automated testing scripts",
      "Deployed and validated the inference service on Amazon Web Services (AWS) EC2 instances"
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "YAML Pipeline Config",
      "Docker",
      "Amazon EC2",
      "Data Pipelines"
    ],
    metrics: [
      { label: "Dataset", value: "UCI Chemical" },
      { label: "Architecture", value: "Modular YAML" },
      { label: "Cloud", value: "AWS EC2" }
    ],
    githubUrl: "https://github.com/Aman-Siddiqui122/Vinfyl_ML-Project"
  }
];

export const workExperienceData: WorkExperience[] = [
  {
    id: "software-island",
    role: "Data Science Intern",
    company: "Software Island",
    location: "Remote",
    period: "Jan 28, 2026 – Apr 28, 2026",
    duration: "3-Month Remote Internship",
    type: "Internship",
    badge: "Active / Completed",
    summary: "Conducted end-to-end data science workflows on enterprise datasets, ranging from data sanitation and exploratory analysis to training high-performing predictive models and designing stakeholder dashboards.",
    responsibilities: [
      "Analyzed real-world commercial datasets end-to-end — from rigorous data cleaning and exploratory data analysis (EDA) to extracting high-impact business insights",
      "Built, tuned, and validated predictive machine learning models employing advanced feature engineering, cross-validation, and performance metrics evaluation",
      "Created interactive dashboards and comprehensive data visualizations to present actionable statistical findings clearly to technical leads and stakeholders"
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "EDA",
      "Machine Learning"
    ]
  }
];

export const educationData: Education[] = [
  {
    id: "islamia-college",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Computer Science",
    institution: "Government Islamia Science College",
    location: "Karachi, Pakistan",
    period: "June 2026 – Aug 2027",
    status: "Expected"
  },
  {
    id: "bodmas-school",
    degree: "Secondary School Certificate (SSC)",
    field: "Computer Science",
    institution: "Bodmas School System",
    location: "Karachi, Pakistan",
    period: "Graduated: Apr 2025",
    status: "Graduated"
  }
];

export const certificationsData: Certification[] = [
  {
    id: "smit-ai-ds",
    title: "AI & Data Science Specialization",
    issuer: "Saylani Mass IT Training (SMIT)",
    issuedYear: "2026",
    category: "AI & Data Science"
  },
  {
    id: "smit-hackathon",
    title: "SMIT Hackathon Certification",
    issuer: "Saylani Mass IT Training (SMIT)",
    issuedYear: "2026",
    category: "Hackathon"
  },
  {
    id: "cisco-python",
    title: "Python Essentials",
    issuer: "Cisco Networking Academy",
    issuedYear: "2026",
    category: "Programming"
  },
  {
    id: "cisco-ds",
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    issuedYear: "2026",
    category: "AI & Data Science"
  },
  {
    id: "hp-life-analytics",
    title: "Data Analytics",
    issuer: "HP Life",
    issuedYear: "2026",
    category: "Analytics"
  }
];

export const skillGroupsData: SkillGroup[] = [
  {
    category: "Programming & Web",
    iconName: "Code2",
    description: "Core languages and web development technologies",
    skills: [
      { name: "Python", level: "Proficient", isPrimary: true },
      { name: "PHP", level: "Intermediate", isPrimary: true },
      { name: "JavaScript", level: "Intermediate", isPrimary: true },
      { name: "HTML5", level: "Advanced", isPrimary: true },
      { name: "CSS3", level: "Advanced", isPrimary: true },
      { name: "REST APIs", level: "Proficient", isPrimary: true },
      { name: "WordPress", level: "Proficient", isPrimary: true },
      { name: "Elementor & Theme Customization", level: "Advanced", isPrimary: false }
    ]
  },
  {
    category: "Frameworks & Backend",
    iconName: "Server",
    description: "Backend architectures, REST APIs, and automation engines",
    skills: [
      { name: "FastAPI", level: "Proficient", isPrimary: true },
      { name: "Django", level: "Intermediate", isPrimary: true },
      { name: "Flask", level: "Proficient", isPrimary: true },
      { name: "MySQL", level: "Proficient", isPrimary: true },
      { name: "PostgreSQL", level: "Proficient", isPrimary: true },
      { name: "API Integration", level: "Proficient", isPrimary: true }
    ]
  },
  {
    category: "AI, ML & Data Science",
    iconName: "BrainCircuit",
    description: "Machine Learning models, deep learning, data analysis and visual insights",
    skills: [
      { name: "Scikit-learn", level: "Proficient", isPrimary: true },
      { name: "LightGBM", level: "Proficient", isPrimary: true },
      { name: "TensorFlow (Deep Learning)", level: "Intermediate", isPrimary: true },
      { name: "Pandas & NumPy", level: "Advanced", isPrimary: true },
      { name: "Exploratory Data Analysis (EDA)", level: "Advanced", isPrimary: true },
      { name: "Matplotlib & Seaborn", level: "Proficient", isPrimary: true },
      { name: "Feature Engineering", level: "Proficient", isPrimary: false }
    ]
  },
  {
    category: "DevOps, Cloud & Tools",
    iconName: "Cloud",
    description: "Containerization, cloud infrastructure, and developer toolchain",
    skills: [
      { name: "Docker & Docker Compose", level: "Proficient", isPrimary: true },
      { name: "AWS EC2", level: "Proficient", isPrimary: true },
      { name: "Hostinger Cloud", level: "Proficient", isPrimary: true },
      { name: "Oracle VPS", level: "Intermediate", isPrimary: false },
      { name: "Git & GitHub", level: "Advanced", isPrimary: true },
      { name: "Linux (Kali & Ubuntu)", level: "Proficient", isPrimary: true },
      { name: "Windows", level: "Advanced", isPrimary: false },
      { name: "MS Excel (Advanced) & Sheets", level: "Advanced", isPrimary: false }
    ]
  },
  {
    category: "Soft Skills & Mindset",
    iconName: "Sparkles",
    description: "Core professional capabilities and problem-solving abilities",
    skills: [
      { name: "Analytical Thinking", level: "Core Strength", isPrimary: true },
      { name: "Problem Solving", level: "Core Strength", isPrimary: true },
      { name: "Continuous Learning", level: "Core Strength", isPrimary: true },
      { name: "Stakeholder Communication", level: "Active", isPrimary: false },
      { name: "Agile Execution", level: "Active", isPrimary: false }
    ]
  }
];
