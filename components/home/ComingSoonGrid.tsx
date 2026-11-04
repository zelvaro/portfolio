"use client";

import { motion } from "framer-motion";
import { Lock, Clock, Sparkles, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { SpotlightCard } from "../ui/SpotlightCard";
import { SectionHeader } from "../ui/SectionHeader";

export function ComingSoonGrid() {
  const comingSoonProjects = PROJECTS.filter((p) => p.status === "coming_soon");

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-hairline/60">
      <SectionHeader
        eyebrow="// R&D PIPELINE"
        title="Upcoming Agentic Builds"
        description="Coming Soon is a credibility device — real software in active development, engineered with the same rigor."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {comingSoonProjects.map((project, idx) => (
          <SpotlightCard
            key={project.id}
            className="p-6 flex flex-col justify-between h-full relative group border-border-hairline bg-bg-surface"
          >
            {/* Locked Glass Overlay Badge */}
            <div className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-base/90 border border-border-hairline text-[11px] font-mono text-text-muted backdrop-blur-md">
              <Lock className="w-3 h-3 text-accent-secondary" />
              <span>In Development</span>
            </div>

            <div>
              {/* Category Tag */}
              <span className="text-[11px] font-mono uppercase tracking-wider text-accent-secondary mb-3 inline-block">
                {project.category}
              </span>

              <h3 className="font-display text-xl font-semibold text-text-primary tracking-tight mb-2">
                {project.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed mb-6 font-normal">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md bg-bg-surface-2 border border-border-hairline text-text-muted text-[11px] font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Status footer */}
              <div className="pt-4 border-t border-border-hairline/60 flex items-center justify-between text-xs text-text-muted">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-accent-secondary" />
                  <span>Target: Q3 2026</span>
                </div>
                <span className="group-hover:text-accent-secondary transition-colors font-mono">
                  View Specs →
                </span>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
