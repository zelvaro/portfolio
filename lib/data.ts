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

export interface Service {
  id: string;
  title: string;
  eyebrow: string;
  outcome: string;
  description: string;
  iconName: string;
  features: string[];
  deliverables: string[];
}

export interface TechItem {
  name: string;
  category: "Frontend & Mobile" | "Backend & Data" | "AI/ML & DevOps";
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

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const PERSONAL_INFO = {
  name: "Sabir Essaad",
  title: "Full Stack & AI Developer",
  status: "Open to opportunities",
  location: "Marrakech, Morocco",
  tagline: "Computer Science & Networks engineering student. Full stack developer.",
  heroHeadline: "Building AI products that replace manual work.",
  heroSubtext:
    "Computer Science & Networks engineering student at EMSI and full stack developer. I build web, mobile, and AI-powered applications — from database to deployment.",
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
    period: "07/2025",
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

export const SERVICES: Service[] = [
  {
    id: "full-stack",
    title: "Full Stack Web Development",
    eyebrow: "END-TO-END SOFTWARE",
    outcome: "Web applications built from the database schema to the user interface.",
    description:
      "I build web applications with React or Angular on the front end and Spring Boot, Django, FastAPI, or Laravel on the back end, backed by relational or document databases.",
    iconName: "Layers",
    features: [
      "React and Angular front ends",
      "Spring Boot, Django, FastAPI, and Laravel back ends",
      "PostgreSQL, MySQL, and MongoDB data modeling",
      "Authentication, JWT, and role-based access rights",
    ],
    deliverables: [
      "Application Source Code",
      "Database Schema",
      "REST API",
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    eyebrow: "ANDROID & CROSS-PLATFORM",
    outcome: "Mobile applications connected to a solid back end.",
    description:
      "I develop mobile applications with React Native and native Android (Java), connected to REST APIs.",
    iconName: "Smartphone",
    features: [
      "React Native cross-platform apps",
      "Native Android development in Java",
      "REST API integration",
      "Real-time features with WebSockets",
    ],
    deliverables: [
      "Mobile Application Source Code",
      "API Integration Layer",
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning Integration",
    eyebrow: "INTELLIGENT FEATURES",
    outcome: "AI features integrated into real applications, not isolated notebooks.",
    description:
      "I integrate machine learning, computer vision, NLP, and generative AI into web and mobile products — from emotion detection to AI-assisted recruitment and code generation.",
    iconName: "BrainCircuit",
    features: [
      "Computer vision with OpenCV and TensorFlow",
      "NLP and Transformers models",
      "OpenAI API integration",
      "Generative and agentic AI",
    ],
    deliverables: [
      "Model Integration",
      "Python Service (FastAPI / Django)",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Deployment",
    eyebrow: "SHIP IT",
    outcome: "Containerized applications with an automated delivery pipeline.",
    description:
      "I containerize applications with Docker, orchestrate them with Kubernetes, and automate delivery with CI/CD pipelines.",
    iconName: "Server",
    features: [
      "Docker containerization",
      "Kubernetes orchestration",
      "CI/CD pipelines",
      "Git and GitHub workflows",
    ],
    deliverables: [
      "Dockerfiles & Compose Files",
      "CI/CD Pipeline Configuration",
    ],
  },
];

export const TECH_STACK: TechItem[] = [
  // Frontend & Mobile
  { name: "React", category: "Frontend & Mobile", description: "Used on EmotionLearn, the Smart HR Solution, and the clinic management platform." },
  { name: "Angular", category: "Frontend & Mobile", description: "Used on the Smart Real Estate Platform and the banking management system." },
  { name: "React Native", category: "Frontend & Mobile", description: "Cross-platform mobile development, used on MediCare." },
  { name: "Android (Java)", category: "Frontend & Mobile", description: "Native Android development with Android Studio, used on MobiCode." },
  { name: "Three.js", category: "Frontend & Mobile", description: "Interactive 3D models in the browser." },
  { name: "Tailwind CSS / Bootstrap", category: "Frontend & Mobile", description: "HTML, CSS, JavaScript, and responsive UI frameworks." },

  // Backend & Data
  { name: "Java / Spring Boot", category: "Backend & Data", description: "REST APIs and JEE back ends with JWT authentication." },
  { name: "Python / Django / FastAPI", category: "Backend & Data", description: "Web back ends and AI services, including WebSockets." },
  { name: "PHP / Laravel", category: "Backend & Data", description: "Web applications and REST APIs." },
  { name: "C# / .NET", category: "Backend & Data", description: "Also programming in C and C++." },
  { name: "PostgreSQL / MySQL", category: "Backend & Data", description: "Relational databases, plus Oracle and SQL Server." },
  { name: "MongoDB", category: "Backend & Data", description: "Document database and the MERN stack." },
  { name: "Hadoop / Power BI", category: "Backend & Data", description: "Big data processing and data visualization." },

  // AI/ML & DevOps
  { name: "TensorFlow", category: "AI/ML & DevOps", description: "Deep learning models." },
  { name: "OpenCV", category: "AI/ML & DevOps", description: "Computer vision." },
  { name: "NLP / Transformers", category: "AI/ML & DevOps", description: "NLP models and the OpenAI API, used on MobiCode." },
  { name: "Generative & Agentic AI", category: "AI/ML & DevOps", description: "GenAIOT training program and enterprise project at Fusion AI." },
  { name: "Docker / Kubernetes", category: "AI/ML & DevOps", description: "Containerization and orchestration." },
  { name: "Git / CI/CD", category: "AI/ML & DevOps", description: "Git, GitHub, and continuous integration and delivery pipelines." },
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
    description:
      "Smart Real Estate Platform: a web application to visualize and manage real estate properties, integrating interactive 3D models.",
    highlights: [
      "Angular, Three.js, Java, Spring Boot, PostgreSQL, Python, Docker.",
    ],
  },
  {
    id: "norsys",
    period: "07/2025 — 08/2025",
    role: "Full Stack & Machine Learning Developer Intern (PFA)",
    institution: "Norsys",
    type: "experience",
    description:
      "Smart HR Solution: an intelligent human resources platform integrating AI to automate and optimize recruitment processes.",
    highlights: [
      "Python, Django, React, MySQL, Docker, Machine Learning.",
    ],
  },
  {
    id: "rida-anis",
    period: "07/2025",
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

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "demo-to-production-gap-ai",
    title: "Why AI Products Fail in the Demo-to-Production Gap",
    summary:
      "Why 90% of prototype AI agents never reach production — and the 3 technical principles that guarantee reliability in real software.",
    date: "June 2026",
    readTime: "5 min read",
    category: "Software Engineering",
    content: `
# Why AI Products Fail in the Demo-to-Production Gap

Building an impressive 30-second Twitter video with an AI wrapper is easy. Building a system that operates 24/7 without corrupting database state is hard.

## The 3 Pillars of Production AI

1. **Human-in-the-Loop Thresholds**: If confidence is below 85%, route to human review instead of taking autonomous action.
2. **Token & Latency Budgeting**: Set strict timeout boundaries and streaming fallbacks.
3. **Observability**: Log raw prompt inputs, system outputs, and latency per step.
`,
  },
];
