"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/data";
import { Stats } from "./Stats";

const ROLES = ["a Full Stack Developer.", "an AI Engineering Intern.", "an Engineering Student."];
const ease = [0.22, 1, 0.36, 1] as const;

// Types each role, pauses, erases it, then moves to the next one
function useTypewriter(words: string[], enabled: boolean) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(enabled ? "" : words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const word = words[index];
    const done = !deleting && text === word;
    const empty = deleting && text === "";
    const delay = done ? 1800 : empty ? 300 : deleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (done) setDeleting(true);
      else if (empty) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, enabled]);

  return text;
}

export function Hero({ avatarSrc }: { avatarSrc?: string | null }) {
  const reduce = useReducedMotion() ?? false;
  const role = useTypewriter(ROLES, !reduce);
  const enter = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay: 0.1 + i * 0.12 },
  });

  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div aria-hidden className="halo pointer-events-none absolute left-1/2 top-10 h-[520px] w-[520px] -translate-x-1/2 sm:h-[720px] sm:w-[720px]" />

      <div className="container-page relative flex flex-col items-center text-center">
        <motion.div {...enter(0)} className="flex flex-col items-center gap-5 sm:flex-row sm:text-left">
          <div className="relative">
            <span aria-hidden className="absolute inset-0 rounded-full bg-accent-deep blur-2xl" />
            {avatarSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={avatarSrc}
                alt={`Portrait of ${PERSONAL_INFO.name}`}
                className="relative h-24 w-24 rounded-full border-2 border-accent/60 object-cover sm:h-28 sm:w-28"
              />
            ) : (
              <span className="relative flex h-24 w-24 items-center justify-center rounded-full border border-accent/40 bg-gradient-to-br from-[#0A2858] to-[#1466B8] font-display text-3xl font-bold sm:h-28 sm:w-28">
                SE
              </span>
            )}
          </div>
          <div>
            <p className="text-sm text-muted">
              Hello! I&apos;m <span className="font-semibold text-[#ED1F9E]">{PERSONAL_INFO.name}</span>
            </p>
            <h1 className="mt-2 max-w-md text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Building web, mobile and <span className="text-gradient">AI products.</span>
            </h1>
          </div>
        </motion.div>

        <motion.p {...enter(1)} className="mt-12 font-display text-2xl font-medium sm:text-4xl" aria-live="off">
          I&apos;m <span className="sr-only">{ROLES.join(" ")}</span>
          <span aria-hidden>
            {role}
            <span className="ml-0.5 inline-block w-[2px] animate-blink bg-ink align-middle" style={{ height: "1em" }} />
          </span>
        </motion.p>

        <motion.p {...enter(2)} className="mt-3 text-base text-muted sm:text-lg">
          Currently an AI Engineering Intern at <span className="font-semibold text-accent">Fusion AI</span>
        </motion.p>

        <motion.p {...enter(3)} className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {PERSONAL_INFO.heroSubtext}
        </motion.p>

        <motion.div {...enter(4)} className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <Link href="/work" className="btn-primary">
            View projects
          </Link>
          <a href={PERSONAL_INFO.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Download CV
          </a>
        </motion.div>

        <motion.div {...enter(5)} className="mt-14 w-full">
          <Stats />
        </motion.div>

        <motion.p {...enter(6)} className="mt-10 inline-flex items-center gap-2 text-sm text-muted">
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          {PERSONAL_INFO.status}, based in {PERSONAL_INFO.location.split(",")[0]}
        </motion.p>
      </div>
    </section>
  );
}
