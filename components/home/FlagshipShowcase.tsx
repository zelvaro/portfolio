"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles, CheckCircle, Zap, Shield, Brain } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { SpotlightCard } from "../ui/SpotlightCard";
import { SectionHeader } from "../ui/SectionHeader";

export function FlagshipShowcase() {
  const flagship = PROJECTS.find((p) => p.isFlagship) || PROJECTS[0];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="// FLAGSHIP PRODUCT"
        title="Postule.ma — Job hunting, automated."
        description="An AI platform that ingests CVs, matches them against live job postings with 94.8% precision, and executes applications automatically."
      />

      <SpotlightCard className="p-6 sm:p-10 border-border-hairline bg-bg-surface/80 relative overflow-hidden group">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gradient opacity-10 blur-[120px] pointer-events-none rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Copy & Architecture Metrics */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-secondary text-xs font-mono mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SHIPPED & LIVE PRODUCT</span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-semibold text-text-primary tracking-tight mb-4">
                {flagship.title}
              </h3>

              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6 font-normal">
                {flagship.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {flagship.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-bg-surface-2 border border-border-hairline text-text-secondary text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-bg-base/70 border border-border-hairline/80 mb-8">
                {flagship.metrics?.map((metric) => (
                  <div key={metric.label}>
                    <div className="font-mono text-lg sm:text-xl font-bold text-accent-secondary">
                      {metric.value}
                    </div>
                    <div className="text-[11px] text-text-muted mt-0.5">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={flagship.caseStudyUrl || "/work/postule-ma"}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent-gradient text-white text-sm font-medium shadow-lg hover:shadow-accent-primary/30 transition-all"
              >
                <span>Read Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              {flagship.liveUrl && (
                <a
                  href={flagship.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-bg-surface-2 border border-border-hairline text-text-primary text-sm font-medium hover:border-accent-primary/40 transition-colors"
                >
                  <span>Live Platform ↗</span>
                </a>
              )}

              {flagship.githubUrl && (
                <a
                  href={flagship.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-bg-surface-2 border border-border-hairline text-text-secondary hover:text-text-primary hover:border-accent-primary/40 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Mock UI Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl bg-bg-base border border-border-hairline p-4 sm:p-6 shadow-2xl overflow-hidden group-hover:border-accent-primary/40 transition-colors">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-border-hairline">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="px-3 py-1 rounded-md bg-bg-surface border border-border-hairline text-[11px] font-mono text-text-muted">
                  app.postule.ma/dashboard
                </div>
                <div className="w-6" />
              </div>

              {/* Mock App Interface Preview */}
              <div className="space-y-4">
                {/* Status Bar */}
                <div className="p-3 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-accent-secondary">
                    <Brain className="w-4 h-4" />
                    <span>Candidate CV: Sabir_Essaad_FullStack_AI.pdf</span>
                  </div>
                  <span className="text-[10px] font-mono bg-accent-secondary/20 text-accent-secondary px-2 py-0.5 rounded">
                    PARSED
                  </span>
                </div>

                {/* Job Offer Match Item 1 */}
                <div className="p-3.5 rounded-xl bg-bg-surface border border-border-hairline flex items-center justify-between hover:border-accent-secondary/40 transition-colors">
                  <div>
                    <div className="text-xs font-semibold text-text-primary">
                      Senior AI Engineer — Agentic Systems
                    </div>
                    <div className="text-[11px] text-text-muted font-mono mt-0.5">
                      Tech Scaleup · Remote · Next.js / Python / n8n
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-accent-success bg-accent-success/10 px-2 py-1 rounded">
                      98.2% Match
                    </span>
                  </div>
                </div>

                {/* Job Offer Match Item 2 */}
                <div className="p-3.5 rounded-xl bg-bg-surface border border-border-hairline flex items-center justify-between hover:border-accent-secondary/40 transition-colors">
                  <div>
                    <div className="text-xs font-semibold text-text-primary">
                      Full Stack AI Automation Developer
                    </div>
                    <div className="text-[11px] text-text-muted font-mono mt-0.5">
                      SaaS Studio · Paris / Remote · LLMs & LangChain
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-accent-success bg-accent-success/10 px-2 py-1 rounded">
                      94.5% Match
                    </span>
                  </div>
                </div>

                {/* Live Workflow Dispatch Banner */}
                <div className="p-3 rounded-xl bg-bg-surface-2 border border-border-hairline flex items-center justify-between text-xs text-text-secondary">
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-accent-secondary animate-pulse" />
                    <span className="font-mono text-[11px]">n8n Pipeline Dispatch: Active</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-accent-success">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Auto-applied</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
