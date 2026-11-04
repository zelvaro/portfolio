"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { PERSONAL_INFO, TIMELINE } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

// Eight-point zellige star, drawn once on load
function ZelligeStar({ reduce }: { reduce: boolean }) {
  const draw = (delay: number) => ({
    initial: reduce ? false : { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { duration: 1.6, ease, delay },
  });

  return (
    <svg viewBox="0 0 400 400" className="h-auto w-full" fill="none" strokeLinejoin="round">
      <motion.g
        style={{ originX: "50%", originY: "50%" }}
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
      >
        <motion.circle cx="200" cy="200" r="190" className="text-line" stroke="currentColor" strokeWidth="1.5" {...draw(0.1)} />
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          className="text-line"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          {...draw(0.25)}
        />
        <motion.path d="M80 80 H320 V320 H80 Z" className="text-ink/70" stroke="currentColor" strokeWidth="1.5" {...draw(0.4)} />
        <motion.path
          d="M200 30.3 L369.7 200 L200 369.7 L30.3 200 Z"
          className="text-ink/70"
          stroke="currentColor"
          strokeWidth="1.5"
          {...draw(0.55)}
        />
      </motion.g>
      <motion.path
        d="M154.4 154.4 H245.6 V245.6 H154.4 Z M200 135.5 L264.5 200 L200 264.5 L135.5 200 Z"
        className="fill-accent/15 text-accent"
        stroke="currentColor"
        strokeWidth="2"
        {...draw(0.9)}
      />
      <motion.circle cx="200" cy="200" r="6" className="fill-accent" {...draw(1.3)} />
    </svg>
  );
}

export function Hero() {
  const reduce = useReducedMotion() ?? false;
  const enter = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay: 0.1 + i * 0.12 },
  });
  const recent = TIMELINE.filter((item) => item.type === "experience").slice(0, 3);

  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36 lg:pt-40">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p
            {...enter(0)}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-muted"
          >
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            {PERSONAL_INFO.status}, based in {PERSONAL_INFO.location}
          </motion.p>

          <motion.h1 {...enter(1)} className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {PERSONAL_INFO.name}
          </motion.h1>

          <motion.p
            {...enter(2)}
            className="mt-5 max-w-xl text-2xl font-medium leading-snug tracking-tight sm:text-3xl"
          >
            {PERSONAL_INFO.heroHeadline}
          </motion.p>

          <motion.p {...enter(3)} className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {PERSONAL_INFO.heroSubtext}
          </motion.p>

          <motion.div {...enter(4)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/work" className="btn-primary">
              View projects
            </Link>
            <a href={PERSONAL_INFO.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Download CV
            </a>
          </motion.div>

          <motion.div {...enter(5)} className="mt-12 border-t border-line pt-6">
            <p className="text-sm text-subtle">Recent experience</p>
            <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-sm">
              {recent.map((item) => (
                <li key={item.id}>
                  <span className="font-semibold">{item.institution}</span>{" "}
                  <span className="text-muted">{item.period}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-[260px] sm:max-w-sm lg:col-span-5 lg:max-w-none" aria-hidden>
          <ZelligeStar reduce={reduce} />
        </div>
      </div>
    </section>
  );
}
