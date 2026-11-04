"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/data";

const FILTERS = [
  { value: "All", label: "All projects" },
  { value: "Internship", label: "Internships" },
  { value: "Academic", label: "Academic" },
] as const;

type Filter = (typeof FILTERS)[number]["value"];

const ease = [0.22, 1, 0.36, 1] as const;

export function ProjectsGrid({ limit, showFilter = false }: { limit?: number; showFilter?: boolean }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const projects = PROJECTS.filter((p) => filter === "All" || p.category === filter).slice(
    0,
    limit ?? PROJECTS.length
  );

  return (
    <div>
      {showFilter && (
        <div role="group" aria-label="Filter projects" className="mb-8 inline-flex rounded-full border border-line bg-surface p-1">
          {FILTERS.map((f) => {
            const active = filter === f.value;
            return (
              <button
                key={f.value}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setFilter(f.value);
                  setOpenId(null);
                }}
                className={`relative isolate rounded-full px-3.5 py-2 text-sm font-medium transition-colors sm:px-4 ${
                  active ? "text-on-accent" : "text-muted hover:text-ink"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 -z-10 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                {f.label}
              </button>
            );
          })}
        </div>
      )}

      <ul className="border-t border-line">
        <AnimatePresence initial={false} mode="popLayout">
          {projects.map((project) => (
            <motion.li
              layout
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="border-b border-line"
            >
              <ProjectRow
                project={project}
                open={openId === project.id}
                onToggle={() => setOpenId(openId === project.id ? null : project.id)}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}

function ProjectRow({ project, open, onToggle }: { project: Project; open: boolean; onToggle: () => void }) {
  const panelId = `project-${project.id}`;

  return (
    <>
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="group grid w-full grid-cols-[1fr_auto] items-start gap-4 py-6 text-left sm:grid-cols-[1fr_9rem_9rem_auto] sm:items-center"
        >
          <span className="min-w-0">
            <span className="block text-lg font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-xl">
              {project.title}
            </span>
            <span className="mt-1 block text-sm text-muted">{project.subtitle}</span>
            <span className="mt-2 block text-sm text-subtle sm:hidden">
              {project.context}
              {project.period ? `, ${project.period}` : ""}
            </span>
          </span>
          <span className="hidden text-sm font-medium sm:block">{project.context}</span>
          <span className="hidden text-sm text-muted sm:block">{project.period ?? ""}</span>
          <ChevronDown
            aria-hidden
            className={`mt-1 h-5 w-5 shrink-0 transition-transform duration-300 sm:mt-0 ${
              open ? "rotate-180 text-accent" : "text-subtle"
            }`}
          />
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden"
          >
            <div className="max-w-3xl pb-7">
              <p className="leading-relaxed text-muted">{project.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
