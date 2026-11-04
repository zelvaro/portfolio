"use client";

import Link from "next/link";
import { ArrowUpRight, Briefcase, GraduationCap } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { SpotlightCard } from "../ui/SpotlightCard";
import { SectionHeader } from "../ui/SectionHeader";

export function ProjectsGrid() {
  const featuredProjects = PROJECTS.slice(0, 6);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-hairline/60">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
        <SectionHeader
          eyebrow="// SELECTED WORK"
          title="Internship & Academic Projects"
          description="Web, mobile, and AI applications built during internships and at EMSI."
          className="mb-0"
        />

        <Link
          href="/work"
          className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-accent-secondary hover:underline self-start sm:self-auto"
        >
          <span>View all projects</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => {
          const isInternship = project.category === "Internship";
          return (
            <SpotlightCard
              key={project.id}
              className="p-6 flex flex-col justify-between h-full group border-border-hairline bg-bg-surface"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-accent-secondary">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-bg-base border border-border-hairline text-[11px] font-mono text-text-muted">
                    {isInternship ? (
                      <Briefcase className="w-3 h-3 text-accent-secondary" />
                    ) : (
                      <GraduationCap className="w-3 h-3 text-accent-primary" />
                    )}
                    <span>{project.context}</span>
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-text-primary tracking-tight mb-1 group-hover:text-accent-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-text-muted mb-3">{project.subtitle}</p>

                <p className="text-text-secondary text-sm leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md bg-bg-surface-2 border border-border-hairline text-text-muted text-[11px] font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
