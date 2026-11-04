"use client";

import Link from "next/link";
import { ArrowRight, Bot, Layers, Server, Smartphone, Zap, BrainCircuit } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { SpotlightCard } from "../ui/SpotlightCard";
import { SectionHeader } from "../ui/SectionHeader";

const ICON_MAP: Record<string, any> = {
  Bot,
  Layers,
  Server,
  Smartphone,
  Zap,
  BrainCircuit,
};

export function ServicesGrid() {
  const standardServices = SERVICES.filter((s) => s.id !== "consulting");
  const consultingService = SERVICES.find((s) => s.id === "consulting");

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-hairline/60">
      <SectionHeader
        eyebrow="// WHAT I BUILD"
        title="What I Can Build"
        description="Web, mobile, and AI-powered software — built end to end."
      />

      {/* 4-card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {standardServices.map((service) => {
          const IconComponent = ICON_MAP[service.iconName] || Bot;
          return (
            <SpotlightCard
              key={service.id}
              className="p-8 flex flex-col justify-between h-full group bg-bg-surface border-border-hairline"
            >
              <div>
                {/* Header icon & Eyebrow */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-bg-surface-2 border border-border-hairline flex items-center justify-center group-hover:border-accent-primary group-hover:bg-accent-primary/10 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-accent-secondary" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted px-2.5 py-1 rounded bg-bg-surface-2 border border-border-hairline">
                    {service.eyebrow}
                  </span>
                </div>

                {/* Title & Outcome */}
                <h3 className="font-display text-2xl font-semibold text-text-primary tracking-tight mb-3">
                  {service.title}
                </h3>

                <p className="text-accent-secondary font-medium text-base leading-snug mb-4">
                  "{service.outcome}"
                </p>

                <p className="text-text-secondary text-sm leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/60 mt-1.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-border-hairline/60">
                <Link
                  href={`/contact?service=${service.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary group-hover:text-accent-secondary transition-colors"
                >
                  <span>Inquire for {service.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      {/* 5th Wide Card: Consulting */}
      {consultingService && (
        <SpotlightCard className="p-8 sm:p-10 bg-bg-surface border-border-hairline relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-gradient opacity-10 blur-[100px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-bg-surface-2 border border-border-hairline flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-accent-secondary" />
                </div>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-secondary">
                  // {consultingService.eyebrow}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-text-primary mb-3">
                {consultingService.title}
              </h3>

              <p className="text-accent-secondary font-medium text-lg mb-3">
                "{consultingService.outcome}"
              </p>

              <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-normal">
                {consultingService.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <Link
                href={`/contact?service=${consultingService.id}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent-gradient text-white font-medium text-sm shadow-lg hover:shadow-accent-primary/30 transition-all"
              >
                <span>Book Technical Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </SpotlightCard>
      )}
    </section>
  );
}
