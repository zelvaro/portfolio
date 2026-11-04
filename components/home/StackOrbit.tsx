"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Monogram } from "../ui/Monogram";

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const TECH: { name: string; path: string; invert?: boolean }[] = [
  { name: "React", path: "react/react-original.svg" },
  { name: "Angular", path: "angular/angular-original.svg" },
  { name: "Next.js", path: "nextjs/nextjs-original.svg", invert: true },
  { name: "Tailwind CSS", path: "tailwindcss/tailwindcss-original.svg" },
  { name: "TypeScript", path: "typescript/typescript-original.svg" },
  { name: "Java", path: "java/java-original.svg" },
  { name: "Spring Boot", path: "spring/spring-original.svg" },
  { name: "Python", path: "python/python-original.svg" },
  { name: "Django", path: "django/django-plain.svg", invert: true },
  { name: "FastAPI", path: "fastapi/fastapi-original.svg" },
  { name: "PostgreSQL", path: "postgresql/postgresql-original.svg" },
  { name: "MySQL", path: "mysql/mysql-original.svg", invert: true },
  { name: "MongoDB", path: "mongodb/mongodb-original.svg" },
  { name: "Docker", path: "docker/docker-original.svg" },
  { name: "Git", path: "git/git-original.svg" },
];

const ORBIT_DOTS = [
  { x: "8%", y: "62%", d: 0 },
  { x: "18%", y: "30%", d: 0.6 },
  { x: "30%", y: "78%", d: 1.2 },
  { x: "70%", y: "78%", d: 0.3 },
  { x: "82%", y: "30%", d: 0.9 },
  { x: "92%", y: "62%", d: 1.5 },
];

export function StackOrbit() {
  const reduce = useReducedMotion() ?? false;

  return (
    <div className="flex flex-col items-center text-center">
      <p className="max-w-xl font-display text-xl font-medium sm:text-2xl">
        I&apos;m looking to join a team that builds <span className="text-gradient">AI-powered products</span>
      </p>
      <p className="mt-2 text-sm text-muted sm:text-base">from the database to the interface, and into production.</p>

      <ul className="mt-8 flex max-w-xl flex-wrap justify-center gap-3" aria-label="Technologies I use">
        {TECH.map((tech, i) => (
          <motion.li
            key={tech.name}
            initial={reduce ? false : { opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, type: "spring", stiffness: 260, damping: 18 }}
            className="group relative"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-[#26124A] transition-colors group-hover:border-accent sm:h-12 sm:w-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${ICON_BASE}/${tech.path}`} alt={tech.name} loading="lazy" className={`h-6 w-6 ${tech.invert ? "brightness-0 invert" : ""}`} />
            </span>
            <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-surface px-2 py-0.5 text-xs opacity-0 transition-opacity group-hover:opacity-100">
              {tech.name}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* Lines converging into the orbit */}
      <svg aria-hidden viewBox="0 0 600 180" preserveAspectRatio="none" className="mt-4 h-28 w-full max-w-xl sm:h-40">
        {[40, 120, 200, 260, 340, 400, 480, 560].map((x, i) => (
          <motion.path
            key={x}
            d={`M${x} 0 C ${x} 90, 300 90, 300 180`}
            stroke="rgb(var(--accent) / 0.35)"
            strokeWidth="1"
            fill="none"
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2 + i * 0.05, ease: "easeOut" }}
          />
        ))}
      </svg>

      <div aria-hidden className="relative -mt-2 h-56 w-full max-w-3xl sm:h-64">
        <div className="halo absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2" />
        {[100, 78, 56].map((w, i) => (
          <span
            key={w}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-accent/25"
            style={{ width: `${w}%`, height: `${30 + i * 8}%` }}
          />
        ))}
        {ORBIT_DOTS.map((dot) => (
          <motion.span
            key={dot.x + dot.y}
            className="absolute h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgb(var(--accent))]"
            style={{ left: dot.x, top: dot.y }}
            animate={reduce ? undefined : { y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: dot.d, ease: "easeInOut" }}
          />
        ))}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={reduce ? undefined : { scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Monogram className="h-24 w-24 text-2xl shadow-[0_0_60px_rgb(124_58_237/0.8)] sm:h-28 sm:w-28 sm:text-3xl" />
        </motion.div>
      </div>
    </div>
  );
}
