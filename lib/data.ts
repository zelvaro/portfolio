export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Internship" | "Academic";
  context: string;
  period?: string;
  tags: string[];
}

export interface TechItem {
  name: string;
  category: "Frontend & Mobile" | "Backend & Data" | "AI & DevOps";
  description: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  role: string;
  institution: string;
  type: "education" | "experience";
  location?: string;
  description: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Sabir Essaad",
  title: "Full Stack & AI Developer",
  status: "Open to opportunities",
  location: "Marrakech, Morocco",
  tagline: "Computer Science & Networks engineering student. Full stack developer.",
  heroHeadline: "Full stack developer building web, mobile and AI-powered applications.",
  heroSubtext:
    "Computer Science & Networks engineering student at EMSI. I've built real applications during internships at XAI, Norsys and RIDA ANIS, and I'm now applying generative and agentic AI in an enterprise project at Fusion AI.",
  email: "sabiressaad24@gmail.com",
  github: "https://github.com/sabiressaad",
  linkedin: "https://linkedin.com/in/sabiressaad/",
  cvUrl: "/cv.pdf",
};

export const PRINCIPLES = [
  {
    number: "01",
    title: "Ship, then refine",
    description:
      "A working v1 beats a theoretical architecture in Figma. Speed of iteration is the ultimate engine of product quality.",
  },
  {
    number: "02",
    title: "Learn fast, adapt faster",
    description:
      "Angular or React, Spring Boot or Django, web or mobile — I pick up the stack the project needs and get productive quickly.",
  },
  {
    number: "03",
    title: "Measure by outcome",
    description:
      "I judge software by the problem it solves for its users — never by the number of lines written.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "smart-real-estate",
    title: "Smart Real Estate Platform",
    subtitle: "Internship project — AI & Full Stack Developer",
    description:
      "Web application to visualize and manage real estate properties, integrating interactive 3D models.",
    category: "Internship",
    context: "XAI",
    period: "08/2025 — 09/2025",
    tags: ["Angular", "Three.js", "Java", "Spring Boot", "PostgreSQL", "Python", "Docker"],
  },
  {
    id: "smart-hr",
    title: "Smart HR Solution",
    subtitle: "PFA internship project — Full Stack & Machine Learning",
    description:
      "Intelligent human resources platform that integrates AI to automate and optimize recruitment processes.",
    category: "Internship",
    context: "Norsys",
    period: "07/2025 — 08/2025",
    tags: ["Python", "Django", "React", "MySQL", "Docker", "Machine Learning"],
  },
  {
    id: "stock-management",
    title: "Stock Management System",
    subtitle: "PFA internship project — Full Stack Developer",
    description:
      "Web application for stock management with authentication and role-based access rights.",
    category: "Internship",
    context: "RIDA ANIS",
    period: "07/2024",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "UML"],
  },
  {
    id: "emotionlearn",
    title: "EmotionLearn",
    subtitle: "Emotion detection for education (PFA)",
    description:
      "Platform that lets teachers adapt their teaching to students' emotions in real time.",
    category: "Academic",
    context: "EMSI",
    tags: ["React", "FastAPI", "Python", "MongoDB", "WebSockets"],
  },
  {
    id: "mobicode",
    title: "MobiCode",
    subtitle: "AI-powered mobile code generation and optimization",
    description:
      "Tool that generates native Android code (Java) from text prompts, with automatic optimization using NLP models.",
    category: "Academic",
    context: "EMSI",
    tags: ["Java", "Android Studio", "Python", "NLP", "Transformers", "OpenAI API"],
  },
  {
    id: "medicare",
    title: "MediCare",
    subtitle: "Teleconsultation application",
    description:
      "Platform for remote medical consultation with appointment booking, secure video conferencing, and medical record follow-up.",
    category: "Academic",
    context: "EMSI",
    tags: ["React Native", "Spring Boot / JEE", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    id: "banking-system",
    title: "Banking Management System",
    subtitle: "Secure banking application",
    description:
      "Secure banking application with account management, transactions, and JWT authentication.",
    category: "Academic",
    context: "EMSI",
    tags: ["Angular", "Spring Boot", "PostgreSQL", "JWT"],
  },
  {
    id: "clinic-management",
    title: "Medical Clinic Management System",
    subtitle: "Patient and appointment management platform",
    description:
      "Web platform for managing patients, appointments, and medical records, with analytics dashboards and real-time notifications.",
    category: "Academic",
    context: "EMSI",
    tags: ["React", "Laravel", "MySQL", "REST API"],
  },
];

export const TECH_STACK: TechItem[] = [
  // Frontend & Mobile
  { name: "React", category: "Frontend & Mobile", description: "EmotionLearn, Smart HR Solution, clinic management platform." },
  { name: "Angular", category: "Frontend & Mobile", description: "Smart Real Estate Platform, banking management system." },
  { name: "React Native", category: "Frontend & Mobile", description: "Cross-platform mobile app for MediCare." },
  { name: "Tailwind CSS", category: "Frontend & Mobile", description: "Responsive interfaces, including this portfolio." },

  // Backend & Data
  { name: "Java & Spring Boot", category: "Backend & Data", description: "REST APIs with JWT authentication." },
  { name: "Python, Django & FastAPI", category: "Backend & Data", description: "Web back ends and AI services with WebSockets." },
  { name: "PostgreSQL & MySQL", category: "Backend & Data", description: "Relational data modeling." },
  { name: "MongoDB", category: "Backend & Data", description: "Document storage for EmotionLearn." },

  // AI & DevOps
  { name: "Generative & agentic AI", category: "AI & DevOps", description: "GenAIOT program and the Fusion AI enterprise project." },
  { name: "NLP & Transformers", category: "AI & DevOps", description: "Code generation with the OpenAI API on MobiCode." },
  { name: "Docker", category: "AI & DevOps", description: "Containerized apps across internship projects." },
  { name: "Git & CI/CD", category: "AI & DevOps", description: "GitHub workflows and delivery pipelines." },
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "fusion-ai",
    period: "4 months",
    role: "AI Engineering Intern — Enterprise Project",
    institution: "Fusion AI",
    type: "experience",
    description:
      "In-company project internship completed as the second half of the GenAIOT training program.",
    highlights: [
      "4-month enterprise project carried out within the Fusion AI team.",
      "Applied the generative and agentic AI curriculum to a real business use case.",
    ],
  },
  {
    id: "genaiot",
    period: "8 months",
    role: "Generative & Agentic AI Training Program",
    institution: "GenAIOT",
    type: "education",
    description:
      "8-month training program: 4 months of theory followed by a 4-month in-company project internship at Fusion AI.",
    highlights: [
      "Theory — 2 months: common core.",
      "Theory — 2 months: agentic AI specialization.",
      "Practice — 4 months: enterprise project internship at Fusion AI.",
    ],
  },
  {
    id: "xai",
    period: "08/2025 — 09/2025",
    role: "AI & Full Stack Developer Intern",
    institution: "XAI",
    type: "experience",
    location: "Remote",
    description:
      "Smart Real Estate Platform: a web application to visualize and manage real estate properties, integrating interactive 3D models.",
    highlights: [
      "Angular, Three.js, Java, Spring Boot, PostgreSQL, Python, Docker.",
      "Carried out remotely, in parallel with the Norsys internship.",
    ],
  },
  {
    id: "norsys",
    period: "07/2025 — 08/2025",
    role: "Full Stack & Machine Learning Developer Intern (PFA)",
    institution: "Norsys",
    type: "experience",
    location: "Hybrid",
    description:
      "Smart HR Solution: an intelligent human resources platform integrating AI to automate and optimize recruitment processes.",
    highlights: [
      "Python, Django, React, MySQL, Docker, Machine Learning.",
    ],
  },
  {
    id: "rida-anis",
    period: "07/2024",
    role: "Full Stack Developer Intern (PFA)",
    institution: "RIDA ANIS",
    type: "experience",
    description:
      "Stock management system: a web application with authentication and role-based access rights.",
    highlights: [
      "PHP, MySQL, HTML, CSS, JavaScript, Bootstrap, XAMPP, UML.",
    ],
  },
  {
    id: "emsi",
    period: "2021 — Present",
    role: "Engineering Degree in Computer Science & Networks",
    institution: "EMSI (École Marocaine des Sciences de l'Ingénieur)",
    type: "education",
    location: "Morocco",
    description:
      "Preparatory cycle (2021 — 2023) followed by the engineering cycle (2023 — present).",
    highlights: [
      "Advanced programming, web development, and databases.",
      "Network administration, DevOps, and cloud computing.",
      "Artificial intelligence.",
    ],
  },
];

export const CERTIFICATIONS = [
  "Meta Developer Certificates (Front-End & Back-End)",
  "Introduction to Docker",
  "PSM I",
  "Google Data Analytics",
];

export const LANGUAGES = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Fluent" },
  { name: "English", level: "Intermediate" },
];
