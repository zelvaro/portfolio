import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, FileText, Sparkles } from "lucide-react";
import { CERTIFICATIONS, LANGUAGES, PERSONAL_INFO, PRINCIPLES, TIMELINE } from "@/lib/data";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Page Header */}
      <SectionHeader
        eyebrow="// ENGINEERING PROFILE"
        title="I study computer science to build the thing, not describe it."
        description="Computer Science & Networks engineering student and full stack developer, working across web, mobile, and AI."
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
              From Engineering School to Real-World Projects
            </h3>

            <div className="space-y-4 text-text-secondary text-base leading-relaxed font-normal">
              <p>
                I am a Computer Science &amp; Networks engineering student at EMSI, based in Marrakech. After the preparatory cycle (2021 — 2023), I joined the engineering cycle, covering advanced programming, web development, databases, network administration, DevOps, cloud computing, and artificial intelligence.
              </p>
              <p>
                Through internships at <strong className="text-text-primary">XAI</strong>, <strong className="text-text-primary">Norsys</strong>, and <strong className="text-text-primary">RIDA ANIS</strong>, I built a smart real estate platform with interactive 3D models, an AI-assisted HR solution, and a stock management system. I also completed the <strong className="text-text-primary">GenAIOT</strong> training program: 4 months of theory — 2 months of common core and 2 months of agentic AI — followed by a 4-month in-company project internship at <strong className="text-text-primary">Fusion AI</strong>.
              </p>
              <p>
                I am open to opportunities in full stack development, mobile, AI/ML, and data engineering.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

              {item.location && (
                <div className="pt-3 border-t border-border-hairline/60 text-[11px] font-mono text-text-muted">
                  📍 {item.location}
                </div>
              )}
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Certifications & Languages */}
      <div className="border-t border-border-hairline pt-16 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SpotlightCard className="p-8 bg-bg-surface border-border-hairline">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-secondary mb-4 block">
            // CERTIFICATIONS
          </span>
          <ul className="space-y-3">
            {CERTIFICATIONS.map((certification) => (
              <li key={certification} className="flex items-start gap-2 text-sm text-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-accent-success shrink-0 mt-0.5" />
                <span>{certification}</span>
              </li>
            ))}
          </ul>
        </SpotlightCard>

        <SpotlightCard className="p-8 bg-bg-surface border-border-hairline">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-secondary mb-4 block">
            // LANGUAGES
          </span>
          <ul className="space-y-3">
            {LANGUAGES.map((language) => (
              <li key={language.name} className="flex items-center justify-between text-sm">
                <span className="text-text-primary font-medium">{language.name}</span>
                <span className="font-mono text-xs text-text-muted">{language.level}</span>
              </li>
            ))}
          </ul>
        </SpotlightCard>
      </div>
    </div>
  );
}
