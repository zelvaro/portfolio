export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription?: string;
  status: "shipped" | "coming_soon";
  isFlagship?: boolean;
  category: "AI Agent" | "Full Stack" | "Automation" | "LLM App";
  tags: string[];
  metrics?: { label: string; value: string }[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  architecture?: {
    problem: string;
    approach: string;
    systemDesign: string[];
    challenges: string;
    impact: string;
  };
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
  category: "AI & Agents" | "Frontend" | "Backend & Infra";
  level: string;
  description: string;
  icon?: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  role: string;
  institution: string;
  type: "education" | "experience";
  location: string;
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
  title: "AI Engineer & Full Stack Developer",
  status: "Available for select projects",
  tagline: "I don't build websites. I build intelligent software.",
  heroHeadline: "Building AI products that replace manual work.",
  heroSubtext:
    "AI Engineer & Full Stack Developer. I design and ship agentic systems, automation pipelines, and production software — end to end. Not just demos.",
  email: "sabir.essaad@gmail.com",
  github: "https://github.com/sabiresaad",
  linkedin: "https://linkedin.com/in/sabir-essaad",
  cvUrl: "/cv.pdf",
};

export const PRINCIPLES = [
  {
    number: "01",
    title: "Ship, then refine",
    description:
      "A working v1 in production beats a theoretical architecture in Figma. Speed of iteration is the ultimate engine of product quality.",
  },
  {
    number: "02",
    title: "Architect for autonomy",
    description:
      "Intelligent software should reduce decision fatigue, not increase it. Build deterministic fallbacks around stochastic LLMs.",
  },
  {
    number: "03",
    title: "Measure by outcome",
    description:
      "Code volume is liability. I judge software by hours saved, manual tasks eliminated, and latency cut — never lines written.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "postule-ma",
    slug: "postule-ma",
    title: "Postule.ma",
    subtitle: "AI-Powered Autonomous Job Application Platform",
    description:
      "An end-to-end AI platform that ingests CVs, intelligently matches candidates against live job offers across regional boards, auto-tailors applications, and executes applications via n8n automation pipelines.",
    fullDescription:
      "Postule.ma addresses the repetitive friction of modern job applications. Candidates upload their raw CV once; our proprietary matching engine extracts granular structured skills using custom LLM parsers, ranks real-time job listings, generates hyper-tailored motivation letters, and pushes applications directly to hiring portals through autonomous n8n workflows.",
    status: "shipped",
    isFlagship: true,
    category: "AI Agent",
    tags: ["Next.js 14", "n8n Workflows", "AI Matching Engine", "CV Parsing", "Python", "Vector DB"],
    metrics: [
      { label: "Match Precision", value: "94.8%" },
      { label: "Time Saved / User", value: "14 hrs/wk" },
      { label: "Applications Processed", value: "12,000+" },
      { label: "Avg Latency", value: "< 1.2s" },
    ],
    liveUrl: "https://postule.ma",
    githubUrl: "https://github.com/sabiresaad/postule-ma",
    caseStudyUrl: "/work/postule-ma",
    architecture: {
      problem:
        "Job applicants spend 15–20 hours per week tailoring resumes and manually filling application forms with repetitive data, leading to low response rates and burnout.",
      approach:
        "Built a dual-layer architecture: a crisp, high-speed Next.js user interface paired with a robust Python/n8n backend orchestration engine. Uses semantic embeddings to match applicant profiles against parsed job specifications.",
      systemDesign: [
        "PDF/DOCX Resume Extraction: Custom PyMuPDF + OpenAI JSON schema structured output parser.",
        "Semantic Vector Search: Qdrant vector database indexing candidate achievements against job requirements.",
        "n8n Workflow Execution: Autonomous web scraping, form filling, and email payload dispatch.",
        "Resilient Fallbacks: Human-in-the-loop validation queue for low-confidence match scores.",
      ],
      challenges:
        "Handling unstructured PDF resume formats with non-standard column layouts, and preventing LLM hallucination during candidate experience summarization. Solved via strict Zod schema validation and deterministic prompt guardrails.",
      impact:
        "Streamlined candidate application throughput by 800%, reducing average application time from 18 minutes to 45 seconds while maintaining high interview conversion rates.",
    },
  },
  {
    id: "ai-meeting-assistant",
    slug: "ai-meeting-assistant",
    title: "AI Meeting & Action Dispatcher",
    subtitle: "Autonomous Meeting Intelligence & Jira/Linear Dispatcher",
    description:
      "Autonomous bot that joins audio sessions, transcribes technical conversations, identifies action items, and directly creates detailed technical specs on Linear or Jira.",
    status: "coming_soon",
    category: "AI Agent",
    tags: ["Whisper AI", "Claude 3.5 Sonnet", "Linear API", "n8n", "Node.js"],
  },
  {
    id: "ai-crm-agent",
    slug: "ai-crm-agent",
    title: "Autonomous Lead Enrichment CRM Agent",
    subtitle: "Self-Operating Sales Intelligence Pipeline",
    description:
      "Monitors inbound lead forms, enriches company metadata via public APIs, scores buyer intent using LLMs, and drafts personalized outreach sequences.",
    status: "coming_soon",
    category: "Automation",
    tags: ["Python", "LangChain", "n8n", "PostgreSQL", "HubSpot API"],
  },
  {
    id: "ai-website-generator",
    slug: "ai-website-generator",
    title: "Deterministic Web Spec Generator",
    subtitle: "Natural Language to Production Next.js Codebase",
    description:
      "Transforms client design briefs into structured JSON component trees, rendering fully responsive production-ready Tailwind/Next.js pages in real time.",
    status: "coming_soon",
    category: "LLM App",
    tags: ["Next.js", "AST Parser", "Tailwind CSS", "OpenAI API"],
  },
];

export const SERVICES: Service[] = [
  {
    id: "ai-agents",
    title: "Agentic AI Systems",
    eyebrow: "REPLACE MANUAL DECISIONS",
    outcome: "Autonomous systems that take on complex multi-step tasks, not simple chatbots.",
    description:
      "I design and deploy multi-agent systems using LangChain, CrewAI, and n8n that operate autonomously with tool access, structured memory, and human-in-the-loop safety features.",
    iconName: "Bot",
    features: [
      "Multi-agent task orchestration & tool calling",
      "RAG pipelines over complex enterprise document stores",
      "Deterministic guardrails against LLM hallucinations",
      "Structured output generation via Zod/Pydantic",
    ],
    deliverables: [
      "Production Agent Architecture",
      "Custom Vector Search Index",
      "Observability Dashboard",
    ],
  },
  {
    id: "automation",
    title: "Workflow Automation & n8n",
    eyebrow: "ELIMINATE REPETITIVE WORK",
    outcome: "n8n automation pipelines that quietly remove hundreds of hours of manual labor.",
    description:
      "Custom, fault-tolerant webhook integrations, data synchronization pipelines, and document processing automation connecting your software stack seamlessly.",
    iconName: "Workflow",
    features: [
      "Self-hosted n8n instance setup & enterprise security",
      "Custom JavaScript & Python nodes for complex payloads",
      "Webhook trigger listeners with retry logic & dead-letter queues",
      "ERP, CRM, and DB bi-directional sync",
    ],
    deliverables: [
      "Automated Workflow Blueprint",
      "Error Handling & Alert System",
      "Complete Source & Deployment Scripts",
    ],
  },
  {
    id: "full-stack",
    title: "Full Stack Product Development",
    eyebrow: "END-TO-END SOFTWARE",
    outcome: "Production web applications built for speed, scale, and high-converting UX.",
    description:
      "From database schema design to high-performance frontend interfaces in Next.js. Clean architecture, high speed, and technical restraint.",
    iconName: "Layers",
    features: [
      "Next.js App Router & Server Actions architecture",
      "TypeScript type-safety across API layers",
      "PostgreSQL, Supabase, Redis, and Prisma ORM",
      "Stripe payment gateway & subscription billing",
    ],
    deliverables: [
      "Production Next.js Codebase",
      "Database Schema & Migrations",
      "CI/CD Pipeline & Vercel/Docker Deployment",
    ],
  },
  {
    id: "api-integration",
    title: "API Integration & Infrastructure",
    eyebrow: "UNIFY YOUR TOOLS",
    outcome: "Connecting legacy systems with modern AI and cloud APIs with zero downtime.",
    description:
      "Designing robust RESTful and GraphQL APIs, microservice adapters, and real-time streaming endpoints tailored for mission-critical operations.",
    iconName: "Zap",
    features: [
      "Custom RESTful & GraphQL API gateway development",
      "Authentication (OAuth2, JWT, Clerk, NextAuth)",
      "Rate-limiting, caching, and edge performance optimization",
      "Third-party vendor API wrapper construction",
    ],
    deliverables: [
      "OpenAPI / Swagger Documentation",
      "SDK Integration Modules",
      "Load Test & Security Report",
    ],
  },
  {
    id: "consulting",
    title: "AI Strategy & Technical Consulting",
    eyebrow: "ENGINEERING RESTRAINT",
    outcome: "An honest engineering read on whether AI actually solves your business problem.",
    description:
      "Architecture reviews, feasibility audits, and cost estimation before you invest in expensive AI development. I help founders filter hype from high-ROI implementation.",
    iconName: "BrainCircuit",
    features: [
      "LLM latency & token cost optimization audits",
      "Tech stack evaluation (OpenAI vs Anthropic vs Open Source)",
      "Build vs Buy software strategy assessment",
      "Security & data privacy compliance roadmap",
    ],
    deliverables: [
      "Technical Architecture Specification",
      "Cost & Latency Projection Model",
      "Actionable 60-Day Roadmap",
    ],
  },
];

export const TECH_STACK: TechItem[] = [
  // AI & Agents
  { name: "Python", category: "AI & Agents", level: "Expert", description: "Primary language for AI pipelines, Data & Agentic logic." },
  { name: "LangChain / LlamaIndex", category: "AI & Agents", level: "Advanced", description: "RAG frameworks, vector store connectors, and agent tools." },
  { name: "OpenAI / Claude API", category: "AI & Agents", level: "Expert", description: "Function calling, vision models, and prompt engineering." },
  { name: "n8n Automation", category: "AI & Agents", level: "Expert", description: "Self-hosted workflow orchestration and webhook automation." },
  { name: "Qdrant / Pinecone", category: "AI & Agents", level: "Advanced", description: "Vector databases for semantic search and memory." },
  { name: "Whisper & Local LLMs", category: "AI & Agents", level: "Intermediate", description: "Speech recognition and Ollama self-hosted inference." },
  
  // Frontend
  { name: "Next.js 14", category: "Frontend", level: "Expert", description: "App Router, SSR, Server Components, and Edge Functions." },
  { name: "TypeScript", category: "Frontend", level: "Expert", description: "Strict type-safe interfaces across client and server." },
  { name: "React 18", category: "Frontend", level: "Expert", description: "Custom hooks, state management, and modern component architecture." },
  { name: "Tailwind CSS", category: "Frontend", level: "Expert", description: "Utility-first responsive design systems and dark mode." },
  { name: "Framer Motion", category: "Frontend", level: "Advanced", description: "Micro-interactions, magnetic buttons, and page transitions." },

  // Backend & Infra
  { name: "Node.js / Express", category: "Backend & Infra", level: "Expert", description: "High-concurrency async APIs and backend services." },
  { name: "PostgreSQL / Supabase", category: "Backend & Infra", level: "Expert", description: "Relational database modeling, row-level security, vector extensions." },
  { name: "Redis", category: "Backend & Infra", level: "Advanced", description: "Caching layer, rate limiting, and pub/sub queues." },
  { name: "Docker / Vercel", category: "Backend & Infra", level: "Advanced", description: "Containerized deployment and serverless edge hosting." },
  { name: "Git / CI/CD", category: "Backend & Infra", level: "Expert", description: "GitHub Actions, automated testing, and release management." },
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "postule",
    period: "2024 — Present",
    role: "Founder & Lead AI Engineer",
    institution: "Postule.ma",
    type: "experience",
    location: "Morocco / Remote",
    description:
      "Architected and shipped an AI job matching platform handling resume parsing, semantic embedding matching, and autonomous n8n application workflows.",
    highlights: [
      "Built custom parsing pipeline processing structured CV data with 94.8% accuracy.",
      "Engineered automated n8n workflows eliminating manual candidate application steps.",
      "Grew platform to serve thousands of automated job matches.",
    ],
  },
  {
    id: "genaiot",
    period: "2023 — 2024",
    role: "AI Systems Engineer",
    institution: "GenAIOT",
    type: "experience",
    location: "France / Remote",
    description:
      "Developed generative AI solutions, agentic workflows, and IoT data ingestion platforms for enterprise clients.",
    highlights: [
      "Integrated LLM function-calling workflows into production IoT dashboards.",
      "Designed RAG document search engines for internal technical knowledge bases.",
      "Optimized API query latency by 40% through Redis caching layer.",
    ],
  },
  {
    id: "master-ia",
    period: "2022 — 2024",
    role: "Master’s Degree in Artificial Intelligence",
    institution: "Université Côte d'Azur",
    type: "education",
    location: "Nice, France",
    description:
      "Advanced studies in Machine Learning, Deep Neural Networks, Natural Language Processing, and Computer Vision.",
    highlights: [
      "Specialized in NLP transformer architectures and LLM fine-tuning.",
      "Published research benchmarks on document parsing accuracy.",
    ],
  },
  {
    id: "emsi",
    period: "2019 — 2024",
    role: "State Engineering Degree in Computer Science",
    institution: "EMSI (École Marocaine des Sciences de l'Ingénieur)",
    type: "education",
    location: "Morocco",
    description:
      "Comprehensive computer engineering program covering Software Architecture, Algorithms, Data Structures, and Systems Engineering.",
    highlights: [
      "Graduated with Top Honors in Software Engineering.",
      "Led university developer collective for open-source AI projects.",
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "building-agentic-workflows-n8n-langchain",
    title: "Building Production Agentic Workflows with n8n and LangChain",
    summary:
      "How to combine self-hosted n8n automation with deterministic Python LLM guardrails to build autonomous business systems that never fail silently.",
    date: "August 2026",
    readTime: "6 min read",
    category: "AI Engineering",
    content: `
# Building Production Agentic Workflows with n8n and LangChain

Most AI agent demos break down when faced with real-world enterprise edge cases: rate limits, unhandled API schemas, and stochastic LLM outputs. In this deep dive, we explore how pairing **self-hosted n8n** with **LangChain structured output parsers** creates a resilient production architecture.

## The Core Philosophy: Deterministic Outer Loop, Stochastic Inner Engine

When designing an autonomous agent:
1. **Never let an LLM control critical control flow without validation.**
2. **Use Zod or Pydantic schemas** to enforce strict JSON signatures.
3. **Offload retries, authentication, and state management** to n8n.

\`\`\`python
from langchain_core.pydantic_v1 import BaseModel, Field

class AgentAction(BaseModel):
    action_type: str = Field(description="One of: 'SEARCH', 'DISPATCH', 'ESCALATE'")
    payload: dict = Field(description="Arguments for the selected tool")
    confidence_score: float = Field(description="Model confidence between 0 and 1")
\`\`\`

## System Architecture

Our setup routes inbound webhook events into n8n. n8n calls a microservice running Python/LangChain which evaluates the decision matrix, returns a validated schema, and executes the payload.

### Key Results
- Zero unhandled crash rate across 50,000+ executions.
- Average processing latency under 900ms.
`,
  },
  {
    slug: "parsing-resumes-at-scale-postule-ma",
    title: "Parsing Resumes at Scale: Lessons Learned from Postule.ma",
    summary:
      "PDF columnar layouts, arbitrary typography, and multi-language CVs pose massive challenges. Here is how we achieved 94.8% parse accuracy without burning thousands in token costs.",
    date: "July 2026",
    readTime: "8 min read",
    category: "Case Study",
    content: `
# Parsing Resumes at Scale: Lessons Learned from Postule.ma

When building **Postule.ma**, one of our primary technical hurdles was digesting arbitrary candidate CV formats. Candidates upload everything from 3-column Figma exports to scanned JPEGs.

## Step 1: Layout Extraction over Raw Text Dump

Passing raw PDF text to an LLM destroys spatial context. A multi-column CV often merges text across columns horizontally.

We solved this using **PyMuPDF font bounding box extraction** combined with a visual block ordering pass before LLM prompt submission.

\`\`\`typescript
interface ParsedCandidateProfile {
  fullName: string;
  contact: { email: string; phone?: string; linkedin?: string };
  skills: { hardSkills: string[]; softSkills: string[] };
  workExperience: Array<{ company: string; role: string; duration: string; impactPoints: string[] }>;
  education: Array<{ degree: string; institution: string; year: string }>;
}
\`\`\`

## Step 2: Semantic Vector Embedding

Once extracted, candidate profiles are converted into dense vector embeddings using OpenAI \`text-embedding-3-small\` and stored in Qdrant, enabling sub-second matching against job descriptions.
`,
  },
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
