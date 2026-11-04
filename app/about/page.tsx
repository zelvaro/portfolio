import type { Metadata } from "next";
import Link from "next/link";
import { CERTIFICATIONS, LANGUAGES, PERSONAL_INFO, PRINCIPLES } from "@/lib/data";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Timeline } from "@/components/home/TimelineSection";

export const metadata: Metadata = { title: "About — Sabir Essaad" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="I study computer science to build the thing, not describe it."
        intro="Computer Science & Networks engineering student and full stack developer, working across web, mobile and AI."
      />

      <div className="container-page grid gap-12 pb-20 lg:grid-cols-12 lg:gap-16">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-7">
          <p>
            I am a Computer Science &amp; Networks engineering student at EMSI, based in Marrakech. After the
            preparatory cycle (2021 — 2023), I joined the engineering cycle, covering advanced programming, web
            development, databases, network administration, DevOps, cloud computing and artificial intelligence.
          </p>
          <p>
            Through internships at <strong className="font-semibold text-ink">RIDA ANIS</strong>,{" "}
            <strong className="font-semibold text-ink">Norsys</strong> and{" "}
            <strong className="font-semibold text-ink">XAI</strong>, I built a stock management system, an AI-assisted
            HR solution and a real estate platform with interactive 3D models. I then joined the{" "}
            <strong className="font-semibold text-ink">GenAIOT</strong> program: 4 months of theory on generative and
            agentic AI, followed by a 4-month enterprise project at{" "}
            <strong className="font-semibold text-ink">Fusion AI</strong>.
          </p>
          <p>I am open to opportunities in full stack development, mobile, AI/ML and data engineering.</p>
          <div className="flex flex-col gap-3 pt-4 sm:flex-row">
            <a href={PERSONAL_INFO.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Download CV
            </a>
            <Link href="/contact" className="btn-secondary">
              Get in touch
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <h2 className="text-xl font-semibold tracking-tight">How I work</h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {PRINCIPLES.map((principle) => (
              <li key={principle.title} className="py-5">
                <h3 className="font-semibold">{principle.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{principle.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Section id="experience" title="Experience and education">
        <Timeline />
      </Section>

      <Section title="Certifications and languages">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <h3 className="text-lg font-semibold tracking-tight">Certifications</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {CERTIFICATIONS.map((certification) => (
                <li key={certification} className="py-4 text-muted">
                  {certification}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="text-lg font-semibold tracking-tight">Languages</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {LANGUAGES.map((language) => (
                <li key={language.name} className="flex items-center justify-between py-4">
                  <span className="font-medium">{language.name}</span>
                  <span className="text-sm text-muted">{language.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
