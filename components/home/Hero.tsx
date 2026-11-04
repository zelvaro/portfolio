"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Terminal, Sparkles, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";
import { ParticleBackground } from "../ui/ParticleBackground";

export function Hero() {
  const [terminalStep, setTerminalStep] = useState(0);

  const logs = [
    { text: "> system init: Sabir Essaad AI Engine v2.4", color: "text-text-muted" },
    { text: "> loading agent pipeline: [Plan -> Tool Call -> Validate]", color: "text-accent-secondary" },
    { text: "> executing multi-agent task graph...", color: "text-text-secondary" },
    { text: "> output: schema validated, guardrails passed", color: "text-accent-success" },
    { text: "> status: agent run complete", color: "text-accent-primary font-bold" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalStep((prev) => (prev < 4 ? prev + 1 : 0));
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <ParticleBackground />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-gradient opacity-10 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-bg-surface border border-border-hairline text-xs text-text-secondary shadow-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-secondary"></span>
            </span>
            <span className="font-mono tracking-wide">{PERSONAL_INFO.status}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-text-primary leading-[1.04] mb-6"
          >
            Building AI products <br className="hidden sm:inline" />
            that <span className="bg-gradient-to-r from-accent-primary via-white to-accent-secondary bg-clip-text text-transparent">replace manual work.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed mb-8 font-normal"
          >
            Computer Science &amp; Networks engineering student at EMSI and full stack developer. I build web, mobile, and AI-powered applications — from database to deployment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/work"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent-gradient text-white font-medium text-sm shadow-xl shadow-accent-primary/20 hover:shadow-accent-primary/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>View my work</span>
              <ArrowUpRight className="w-4 h-4 text-accent-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-bg-surface border border-border-hairline text-text-primary font-medium text-sm hover:border-accent-primary/40 hover:bg-bg-surface-2 transition-all duration-200"
            >
              <span>Let&apos;s talk</span>
              <ArrowRight className="w-4 h-4 text-text-muted group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="relative rounded-2xl bg-bg-surface border border-border-hairline p-1 shadow-2xl shadow-black/80 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-bg-surface-2 border-b border-border-hairline rounded-t-xl">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <div className="flex items-center gap-1.5 font-mono text-xs text-text-muted">
                <Terminal className="w-3.5 h-3.5 text-accent-secondary" />
                <span>agent-orchestrator.ts</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-accent-success bg-accent-success/10 px-2 py-0.5 rounded">
                <CheckCircle2 className="w-3 h-3" />
                <span>ACTIVE</span>
              </div>
            </div>

            <div className="p-5 font-mono text-xs leading-relaxed space-y-3 bg-[#0D0D0F] min-h-[260px] flex flex-col justify-between rounded-b-xl">
              <div className="space-y-2">
                {logs.slice(0, terminalStep + 1).map((log, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`${log.color} flex items-start gap-2`}
                  >
                    <span>{log.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-3 border-t border-border-hairline/40 flex items-center justify-between text-text-muted text-[11px]">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-accent-secondary animate-pulse" />
                  <span>agent run: #829-agent-exec</span>
                </div>
                <span className="text-text-muted">Node v22.20</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-text-muted text-xs font-mono opacity-60 hover:opacity-100 transition-opacity">
        <span>scroll down</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-accent-secondary" />
      </div>
    </section>
  );
}
