import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, FileText, Sparkles } from "lucide-react";
import { PERSONAL_INFO, PRINCIPLES, TIMELINE } from "@/lib/data";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Page Header */}
      <SectionHeader
        eyebrow="// ENGINEERING PROFILE"
        title="I studied computer science and AI to build the thing, not describe it."
        description="Software engineer specializing in autonomous agent architectures, multi-step LLM orchestration, and high-performance full-stack web applications."
      />

      {/* Story & Mindset Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
        {/* Story Paragraphs */}
        <SpotlightCard className="lg:col-span-7 p-8 sm:p-10 bg-bg-surface border-border-hairline flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-secondary mb-4 block">
              // BACKGROUND & ORIGINS
            </span>

            <h3 className="font-display text-2xl font-semibold text-text-primary mb-6">
              From State Engineering Honors to Production AI Agents
            </h3>

            <div className="space-y-4 text-text-secondary text-base leading-relaxed font-normal">
              <p>
                My journey began with a State Engineering degree in Computer Science at EMSI, followed by a Master&apos;s in Artificial Intelligence at Université Côte d&apos;Azur in France. Rather than staying in academic theory, I spent my energy building real software systems that reduce friction.
              </p>
              <p>
                At GenAIOT, I engineered generative AI pipelines and vector search engines for enterprise clients. Later, I founded <strong className="text-text-primary">Postule.ma</strong> — an AI job application platform that automates resume matching and job dispatches across candidate databases.
              </p>
              <p>
                Today, I partner with forward-thinking teams to design agentic systems, n8n workflow automations, and Next.js applications that eliminate manual work.
              </p>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-border-hairline flex items-center gap-4">
            <a
              href={PERSONAL_INFO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-gradient text-white text-xs font-mono font-semibold shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>

            <Link
              href="/contact"
              className="text-xs font-mono text-text-secondary hover:text-text-primary transition-colors inline-flex items-center gap-1"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </SpotlightCard>

        {/* 3 Principles Cards */}
        <div className="lg:col-span-5 space-y-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-secondary mb-2 block">
            // 3 CORE PRINCIPLES
          </span>

          {PRINCIPLES.map((principle) => (
            <SpotlightCard key={principle.number} className="p-6 bg-bg-surface border-border-hairline">
              <div className="flex items-start gap-4">
                <span className="font-mono text-lg font-bold text-accent-secondary shrink-0">
                  {principle.number}
                </span>
                <div>
                  <h4 className="font-display font-semibold text-lg text-text-primary mb-1">
                    {principle.title}
                  </h4>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="border-t border-border-hairline pt-16">
        <SectionHeader
          eyebrow="// ACADEMIC & CAREER MILESTONES"
          title="Timeline & Progression"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TIMELINE.map((item) => (
            <SpotlightCard key={item.id} className="p-6 bg-bg-surface border-border-hairline flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-accent-secondary px-2 py-0.5 rounded bg-bg-surface-2 border border-border-hairline inline-block mb-3">
                  {item.period}
                </span>
                <h4 className="font-display font-semibold text-lg text-text-primary mb-1">
                  {item.role}
                </h4>
                <div className="text-xs text-accent-primary font-medium mb-3">
                  {item.institution}
                </div>
                <p className="text-text-secondary text-xs leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-border-hairline/60 text-[11px] font-mono text-text-muted">
                📍 {item.location}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </div>
  );
}
