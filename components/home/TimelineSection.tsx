"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, CheckCircle2 } from "lucide-react";
import { TIMELINE } from "@/lib/data";
import { SectionHeader } from "../ui/SectionHeader";
import { SpotlightCard } from "../ui/SpotlightCard";

export function TimelineSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-hairline/60">
      <SectionHeader
        eyebrow="// TRACK RECORD"
        title="Experience & Education"
        description="From engineering school to internships and generative AI training."
      />

      <div className="relative pl-6 sm:pl-8 border-l border-border-hairline/80 space-y-10 ml-2 sm:ml-4">
        {TIMELINE.map((item, index) => {
          const isExp = item.type === "experience";
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-bg-base border border-accent-primary/60 flex items-center justify-center group-hover:border-accent-secondary group-hover:scale-110 transition-all duration-300 shadow-md">
                {isExp ? (
                  <Briefcase className="w-3 h-3 text-accent-secondary" />
                ) : (
                  <GraduationCap className="w-3 h-3 text-accent-primary" />
                )}
              </div>

              {/* Timeline Card */}
              <SpotlightCard className="p-6 sm:p-8 bg-bg-surface border-border-hairline">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-text-primary group-hover:text-accent-secondary transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-accent-primary font-medium mt-0.5">
                      <span>{item.institution}</span>
                      {item.location && (
                        <>
                          <span className="text-text-muted">•</span>
                          <span className="flex items-center gap-1 text-xs text-text-muted font-mono">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <span className="font-mono text-xs text-text-muted px-3 py-1 rounded-full bg-bg-surface-2 border border-border-hairline self-start sm:self-auto">
                    {item.period}
                  </span>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-4 font-normal">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-3 border-t border-border-hairline/50">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-text-muted font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-success shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
