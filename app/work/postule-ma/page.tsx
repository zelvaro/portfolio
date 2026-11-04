import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Github, Sparkles, Terminal, Cpu, Database, Network } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export default function PostuleMaCaseStudy() {
  const project = PROJECTS.find((p) => p.slug === "postule-ma") || PROJECTS[0];
  const arch = project.architecture;

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-screen">
      {/* Back Link */}
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent-secondary mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to all projects</span>
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-secondary text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>FLAGSHIP CASE STUDY</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-semibold text-text-primary tracking-tight mb-4 leading-tight">
          {project.title}
        </h1>

        <p className="text-xl text-accent-secondary font-medium mb-6">
          {project.subtitle}
        </p>

        <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8">
          {project.fullDescription}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-gradient text-white text-sm font-medium shadow-lg hover:shadow-accent-primary/30 transition-all"
            >
              <span>Launch Live Platform</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-bg-surface border border-border-hairline text-text-primary text-sm font-medium hover:border-accent-primary/40 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
            </a>
          )}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-bg-surface border border-border-hairline">
          {project.metrics?.map((m) => (
            <div key={m.label}>
              <div className="font-mono text-2xl font-bold text-accent-secondary">{m.value}</div>
              <div className="text-xs text-text-muted mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Sections */}
      <div className="space-y-12">
        {/* 1. Problem */}
        <SpotlightCard className="p-8 bg-bg-surface border-border-hairline">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-accent-secondary font-bold uppercase tracking-wider">
              01 // THE PROBLEM
            </span>
          </div>
          <h2 className="font-display text-2xl font-semibold text-text-primary mb-3">
            Application Fatigue & High Manual Overhead
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            {arch?.problem}
          </p>
        </SpotlightCard>

        {/* 2. Approach & Architecture */}
        <SpotlightCard className="p-8 bg-bg-surface border-border-hairline">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-accent-secondary font-bold uppercase tracking-wider">
              02 // SYSTEM ARCHITECTURE
            </span>
          </div>
          <h2 className="font-display text-2xl font-semibold text-text-primary mb-4">
            Dual-Layer Hybrid Architecture (Next.js + n8n + Vector DB)
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-6">
            {arch?.approach}
          </p>

          {/* System Components Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {arch?.systemDesign.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-bg-surface-2 border border-border-hairline flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-bg-base border border-border-hairline shrink-0">
                  {idx === 0 && <Cpu className="w-4 h-4 text-accent-secondary" />}
                  {idx === 1 && <Database className="w-4 h-4 text-accent-primary" />}
                  {idx === 2 && <Network className="w-4 h-4 text-accent-success" />}
                  {idx === 3 && <Terminal className="w-4 h-4 text-accent-warning" />}
                </div>
                <div className="text-xs text-text-secondary leading-relaxed font-mono">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </SpotlightCard>

        {/* 3. Engineering Challenges */}
        <SpotlightCard className="p-8 bg-bg-surface border-border-hairline">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-accent-secondary font-bold uppercase tracking-wider">
              03 // KEY CHALLENGE & SOLUTION
            </span>
          </div>
          <h2 className="font-display text-2xl font-semibold text-text-primary mb-3">
            Handling Unstructured Resume Formats & Preventing LLM Hallucinations
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            {arch?.challenges}
          </p>
        </SpotlightCard>

        {/* 4. Business Impact */}
        <SpotlightCard className="p-8 bg-bg-surface border-border-hairline">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-accent-success font-bold uppercase tracking-wider">
              04 // QUANTIFIABLE IMPACT
            </span>
          </div>
          <h2 className="font-display text-2xl font-semibold text-text-primary mb-3">
            800% Throughput Surge with Sub-Second Latency
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-6">
            {arch?.impact}
          </p>

          <div className="p-4 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-between">
            <span className="text-xs font-mono text-accent-secondary">
              Production Status: 100% Operational
            </span>
            <Link
              href="/contact?service=ai-agents"
              className="text-xs font-mono text-text-primary hover:text-accent-secondary transition-colors underline"
            >
              Request Similar Agent Build →
            </Link>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}
