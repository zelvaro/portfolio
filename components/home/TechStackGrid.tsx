"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/data";
import { SpotlightCard } from "../ui/SpotlightCard";
import { SectionHeader } from "../ui/SectionHeader";

const CATEGORIES = ["Frontend & Mobile", "Backend & Data", "AI/ML & DevOps"] as const;

export function TechStackGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend & Mobile");

  const filteredItems = TECH_STACK.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-hairline/60">
      <SectionHeader
        eyebrow="// TECHNICAL STACK"
        title="Skills & Tools"
        description="The languages, frameworks, and tools I have worked with across internships and projects."
      />

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full font-mono text-xs transition-all duration-200 ${
                isActive
                  ? "bg-accent-gradient text-white shadow-lg shadow-accent-primary/20 font-semibold"
                  : "bg-bg-surface border border-border-hairline text-text-secondary hover:text-text-primary hover:bg-bg-surface-2"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((tech, idx) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
          >
            <SpotlightCard className="p-6 bg-bg-surface border-border-hairline h-full flex flex-col justify-between group">
              <div>
                <h4 className="font-display font-semibold text-lg text-text-primary group-hover:text-accent-secondary transition-colors mb-3">
                  {tech.name}
                </h4>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border-hairline/50 text-[11px] font-mono text-text-muted">
                <span>{tech.category}</span>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
