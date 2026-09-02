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
  portfolioUrl: "https://my-portfolio-livid-nu-93.vercel.app",
  github: "https://github.com/Aman-Siddiqui122",
  githubUsername: "Aman-Siddiqui122",
  bio: "Web Developer and Python Backend Developer with 1 year of hands-on experience building responsive websites, backend applications, APIs, and automation solutions. Strong foundation in WordPress, PHP, HTML, CSS, and JavaScript, with backend development experience using Python, FastAPI, Django, and Flask. Also skilled in Data Science, Machine Learning, Deep Learning, and automation, with a practical understanding of AI-driven solutions. Experienced in database management, API integration, deployment, and developing scalable, reliable applications. Passionate about building practical software solutions and continuously learning modern technologies.",
  languages: [
    { language: "Urdu", proficiency: "Native" },
    { language: "English", proficiency: "Conversational" }
  ],
  stats: [
    { label: "Hands-on Experience", value: "1+ Year", subtext: "Web & Python Backend" },
    { label: "AUC-ROC Achieved", value: "0.9756", subtext: "Credit Risk Model" },
    { label: "Cloud & VPS Deploy", value: "AWS & Oracle", subtext: "Docker, EC2 & VPS" },
    { label: "Certifications", value: "5 Verified", subtext: "SMIT, Cisco & HP" }
  ]
};

export const projectsData: Project[] = [
  {
    id: "whatsapp-forwarder",
    title: "WhatsApp Channels Group Message Forwarder",
    subtitle: "Real-Time Automation & Group Message Router",
    tagline: "Automated real-time message forwarding system built with Node.js and whatsapp-web.js running 24/7 on Oracle Cloud VPS.",
    category: "automation",
    period: "2024 – 2025",
    type: "Personal Project",
    featured: true,
    colorScheme: "indigo",
    description: "Engineered a headless automated messaging system using Node.js and whatsapp-web.js to dynamically forward incoming messages from designated source WhatsApp groups to target destination groups with a controlled delay, persistent session management, and continuous 24/7 cloud execution.",
    highlights: [
      "Automated Real-Time Forwarding: Built a Node.js system using whatsapp-web.js to dynamically map source group IDs and forward incoming messages to target groups with a 1-second delay.",
      "Persistent QR Authentication: Integrated initial QR-code authentication with local session caching to ensure automatic reconnects without repeating the login process.",
      "Continuous Cloud Hosting: Configured and deployed the headless script on an Oracle Cloud Ubuntu VPS, utilizing process management for uninterrupted 24/7 execution."
    ],
    technologies: [
      "Node.js",
      "whatsapp-web.js",
      "JavaScript",
      "Oracle Cloud VPS",
      "Ubuntu Linux",
      "Process Management",
      "Automation"
    ],
    metrics: [
      { label: "Execution", value: "24/7 Continuous" },
      { label: "Routing Latency", value: "1s Delay Buffer" },
      { label: "Hosting", value: "Oracle Cloud VPS" }
    ],
    githubUrl: "https://github.com/Aman-Siddiqui122"
  },
  {
    id: "pnp-meat-wholesale",
    title: "P&P Meat Wholesale",
    subtitle: "E-Commerce & Order Management System",
    tagline: "Full-scale PHP meat e-commerce website on Hostinger with product browsing, quantity ordering, and admin management.",
    category: "web-ecommerce",
    period: "2026",
    type: "Client Project",
    featured: true,
    colorScheme: "amber",
    description: "Built and deployed a PHP-based meat e-commerce website for UK client P&P Meat Wholesale on Hostinger. Designed comprehensive product browsing, details, and quantity-based ordering workflows alongside a dedicated Admin Portal for product and order management.",
    highlights: [
      "Built and deployed a PHP-based meat e-commerce website on Hostinger.",
      "Developed product browsing, details, and quantity-based ordering.",
      "Created an Admin Portal for managing products and customer orders.",
      "Implemented responsive mobile-first views and secure ordering workflows"
    ],
    technologies: [
      "PHP",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Hostinger",
      "Admin Portal"
    ],
    metrics: [
      { label: "Client Market", value: "UK Wholesale" },
      { label: "Platform", value: "Store + Admin Portal" },
      { label: "Hosting", value: "Hostinger" }
    ],
    liveUrl: "https://pnpmeats.co.uk/",
    adminUrl: "https://portal.pnpmeats.co.uk/"
  },
  {
    id: "credit-shield",
    title: "CreditShield",
    subtitle: "Loan Credit Risk Prediction",
    tagline: "End-to-end ML pipeline using LightGBM to predict loan default risk, achieving an AUC-ROC of 0.9756.",
    category: "ml-ai",
    period: "2025",
    type: "Personal Project",
    featured: true,
    colorScheme: "teal",
    description: "Built an end-to-end machine learning pipeline using LightGBM to predict loan default risk with an AUC-ROC of 0.9756. Features a multi-step risk assessment UI with real-time probability scoring, credit grading, debt ratio analysis, and a containerized Flask REST backend deployed on AWS EC2.",
    highlights: [
      "Built an end-to-end ML pipeline using LightGBM to predict loan default risk, achieving an AUC-ROC of 0.9756",
      "Developed a multi-step risk assessment UI with real-time probability scoring, credit grading, and debt ratio analysis",
      "Containerized with Docker and deployed to production on AWS EC2 with a Flask REST backend"
    ],
    technologies: [
      "Python",
      "LightGBM",
      "Flask REST API",
      "Scikit-learn",
      "Docker",
      "AWS EC2",
      "Render"
    ],
    metrics: [
      { label: "Model AUC-ROC", value: "0.9756" },
      { label: "Inference Latency", value: "< 45ms" },
      { label: "Deployment", value: "Docker / AWS EC2" }
    ],
    liveUrl: "https://loan-credit-risk-2.onrender.com/",
    githubUrl: "https://github.com/Aman-Siddiqui122/Loan_Credit_Risk"
  },
  {
    id: "meeting-mate",
    title: "Meeting-Mate",
    subtitle: "Audio Transcription & Summarization Web App",
    tagline: "Full-stack app using Express.js backend and Vite frontend for audio/video transcription, captions, and summarization.",
    category: "ml-ai",
    period: "2025",
    type: "Client Project",
    featured: true,
    colorScheme: "indigo",
    description: "Built a full-stack media intelligence application using Express.js backend and Vite frontend for audio/video transcription. Delivers fast automated transcription, timestamped captions, AI-driven summarization, and English translation for MP3, M4A, and various audio/video formats deployed on Vercel.",
    highlights: [
      "Built a full-stack app using Express.js backend and Vite frontend for audio/video transcription.",
      "Added transcription, captions, summarization, and English translation for MP3, M4A, and other formats.",
      "Deployed and managed the application on Vercel."
    ],
    technologies: [
      "Express.js",
      "Vite",
      "React",
      "Node.js",
      "AI Transcription",
      "Vercel",
      "Audio/Video Processing"
    ],
    metrics: [
      { label: "Formats Supported", value: "MP3, M4A & Video" },
      { label: "Stack", value: "Express.js + Vite" },
      { label: "Deployment", value: "Vercel" }
    ],
    liveUrl: "https://frontend-meeting-mate-bz64.vercel.app/"
  },
  {
    id: "quality-cars-parts",
    title: "Quality Cars & Parts",
    subtitle: "Automotive Business Website",
    tagline: "Custom PHP, HTML, CSS & JavaScript website for a UK automotive client showcasing vehicles, parts, and repairs.",
    category: "web-ecommerce",
    period: "2026",
    type: "Client Project",
    featured: true,
    colorScheme: "indigo",
    description: "Built a custom PHP, HTML, CSS & JavaScript website for a UK automotive business. Developed responsive, fast-loading pages showcasing vehicles, auto parts, mechanic repairs, and refurbishment services deployed and managed on Hostinger.",
    highlights: [
      "Built a custom PHP, HTML, CSS & JavaScript website for a UK automotive client.",
      "Developed responsive pages for vehicles, auto parts, repairs, and refurbishment services.",
      "Deployed and managed the website on Hostinger."
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
      { label: "Client Market", value: "UK Automotive" },
      { label: "Stack", value: "Custom PHP & JS" },
      { label: "Hosting", value: "Hostinger" }
    ],
    liveUrl: "https://qualitycarsandparts.com/"
  },
  {
    id: "ma-academy-uk",
    title: "MA Academy UK",
    subtitle: "Education & Tuition Website",
    tagline: "Full-stack educational platform for a UK tuition academy in Walsall showcasing programs and qualifications.",
    category: "web-ecommerce",
    period: "2026",
    type: "Client Project",
    featured: false,
    colorScheme: "indigo",
    description: "Built and deployed a full-stack educational and tuition website for MA Academy UK located in Walsall. Developed responsive, structured pages showcasing comprehensive tuition programs and vocational qualifications on Hostinger.",
    highlights: [
      "Built a full-stack PHP, HTML & CSS website for a UK tuition academy in Walsall",
      "Developed responsive pages showcasing tuition programs and vocational qualifications",
      "Deployed the website on Hostinger, helping the local academy establish an online presence"
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
