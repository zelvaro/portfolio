import { NextResponse } from "next/server";

export async function GET() {
  const resumeText = `
SABIR ESSAAD
AI Engineer & Full Stack Developer
Email: sabir.essaad@gmail.com | Portfolio: https://essaad.ai
GitHub: https://github.com/sabiresaad | LinkedIn: https://linkedin.com/in/sabir-essaad

SUMMARY
AI Engineer and Full Stack Developer with specialized expertise in autonomous agent architectures, multi-step LLM pipelines, n8n workflow automation, and high-performance Next.js web applications. Founder of Postule.ma.

EXPERIENCE
Founder & Lead AI Engineer | Postule.ma (2024 - Present)
- Architected and deployed an AI job application platform with 94.8% candidate-to-offer precision.
- Engineered resume parsing algorithms handling unstructured PDF layouts with zero hallucination rate.
- Built n8n autonomous workflow pipelines executing job dispatches at scale.

AI Systems Engineer | GenAIOT (2023 - 2024)
- Developed generative AI solutions and RAG document search engines for enterprise clients.
- Reduced API latency by 40% using Redis caching and vector embedding optimizations.

EDUCATION
Master's Degree in Artificial Intelligence (2022 - 2024)
- Université Côte d'Azur, Nice, France

State Engineering Degree in Computer Science (2019 - 2024)
- EMSI (École Marocaine des Sciences de l'Ingénieur)
- Top Honors in Software Engineering

TECHNICAL SKILLS
- Languages & AI: Python, TypeScript, Node.js, LangChain, LlamaIndex, OpenAI API, Claude 3.5 Sonnet, Whisper, n8n.
- Frontend & Full Stack: Next.js 14 (App Router), React 18, Tailwind CSS, Framer Motion, GraphQL, REST APIs.
- Databases & Cloud: PostgreSQL, Supabase, Qdrant, Pinecone, Redis, Docker, Vercel, Git CI/CD.
`;

  return new NextResponse(resumeText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'inline; filename="Sabir_Essaad_CV.txt"',
    },
  });
}
