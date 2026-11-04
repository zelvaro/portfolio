"use client";

import { useState } from "react";
import { Briefcase, Filter, GraduationCap } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const CATEGORIES = ["All", "Internship", "Academic"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter((p) =>
    activeCategory === "All" ? true : p.category === activeCategory
  );

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <SectionHeader
        eyebrow="// SELECTED WORK"
        title="Internship & Academic Projects"
        description="Web, mobile, and AI applications built during internships and at EMSI."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-12">
        <div className="flex items-center gap-2 mr-2 text-xs font-mono text-text-muted">
          <Filter className="w-3.5 h-3.5 text-accent-secondary" />
          <span>Filter:</span>
        </div>
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-all duration-200 ${
                isActive
                  ? "bg-accent-gradient text-white shadow-md shadow-accent-primary/20 font-semibold"
                  : "bg-bg-surface border border-border-hairline text-text-secondary hover:text-text-primary"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => {
          const isInternship = project.category === "Internship";
          return (
            <SpotlightCard
              key={project.id}
              className="p-8 bg-bg-surface border-border-hairline flex flex-col justify-between h-full group relative"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs text-accent-secondary uppercase tracking-wider">
                    {project.category}
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-mono border bg-bg-base border-border-hairline text-text-muted">
                    {isInternship ? (
                      <Briefcase className="w-3 h-3 text-accent-secondary" />
                    ) : (
                      <GraduationCap className="w-3 h-3 text-accent-primary" />
                    )}
                    <span>{project.context}</span>
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold text-text-primary group-hover:text-accent-secondary transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-text-muted mb-4">{project.subtitle}</p>

                <p className="text-text-secondary text-sm leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-bg-surface-2 border border-border-hairline text-text-secondary text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {project.period && (
                <div className="mt-8 pt-6 border-t border-border-hairline/60 text-xs font-mono text-text-muted">
                  {project.period}
                </div>
              )}
            </SpotlightCard>
          );
        })}
      </div>
    </div>
  );
}
