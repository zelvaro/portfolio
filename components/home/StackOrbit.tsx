"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrainCircuit, Sparkles, type LucideIcon } from "lucide-react";
import { TECH_STACK, type TechItem } from "@/lib/data";
import { Monogram } from "../ui/Monogram";
import { Reveal } from "../ui/Reveal";

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

type Logo = { name: string; path: string; invert?: boolean };

const OUTER: Logo[] = [
  { name: "React", path: "react/react-original.svg" },
  { name: "Angular", path: "angular/angular-original.svg" },
  { name: "Next.js", path: "nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", path: "tailwindcss/tailwindcss-original.svg" },
  { name: "TypeScript", path: "typescript/typescript-original.svg" },
  { name: "Java", path: "java/java-original.svg" },
  { name: "Spring Boot", path: "spring/spring-original.svg" },
  { name: "Python", path: "python/python-original.svg" },
];

const INNER: Logo[] = [
  { name: "Django", path: "django/django-plain.svg", invert: true },
  { name: "FastAPI", path: "fastapi/fastapi-original.svg" },
  { name: "PostgreSQL", path: "postgresql/postgresql-original.svg" },
  { name: "MongoDB", path: "mongodb/mongodb-original.svg" },
  { name: "Docker", path: "docker/docker-original.svg" },
  { name: "Git", path: "git/git-original.svg" },
];

// Icon shown next to each core technology in the category cards
const STACK_ICONS: Record<string, Logo | LucideIcon> = {
  React: OUTER[0],
  Angular: OUTER[1],
  "React Native": OUTER[0],
  "Tailwind CSS": OUTER[3],
  "Java & Spring Boot": OUTER[6],
  "Python, Django & FastAPI": OUTER[7],
  "PostgreSQL & MySQL": INNER[2],
  MongoDB: INNER[3],
  "Generative & agentic AI": Sparkles,
  "NLP & Transformers": BrainCircuit,
  Docker: INNER[4],
  "Git & CI/CD": INNER[5],
};

const GROUPS: TechItem["category"][] = ["Frontend & Mobile", "Backend & Data", "AI & DevOps"];

function LogoImg({ logo, className = "h-6 w-6" }: { logo: Logo; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${ICON_BASE}/${logo.path}`}
      alt=""
      loading="lazy"
      className={`${className} ${logo.invert ? "brightness-0 invert" : ""}`}
    />
  );
}

function Ring({ logos, radius, duration, reverse, reduce }: { logos: Logo[]; radius: number; duration: number; reverse?: boolean; reduce: boolean }) {
  const turn = reverse ? -360 : 360;
  return (
    <motion.div
      className="absolute inset-0"
      animate={reduce ? undefined : { rotate: turn }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent/30"
        style={{ width: `${radius * 2}%`, height: `${radius * 2}%` }}
      />
      {logos.map((logo, i) => {
        const angle = (i / logos.length) * Math.PI * 2;
        return (
          <div
            key={logo.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${50 + radius * Math.cos(angle)}%`, top: `${50 + radius * Math.sin(angle)}%` }}
          >
            <motion.span
              title={logo.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-[#0B2A5C] shadow-[0_0_18px_rgb(32_146_229/0.45)] sm:h-12 sm:w-12"
              animate={reduce ? undefined : { rotate: -turn }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
            >
              <LogoImg logo={logo} className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.span>
          </div>
        );
      })}
    </motion.div>
  );
}

export function StackOrbit() {
  const reduce = useReducedMotion() ?? false;

  return (
    <div className="flex flex-col items-center">
      <Reveal className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Technologies I <span className="text-gradient">work with</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted sm:text-lg">
          From the database to the interface, and into production. I&apos;m looking to join a team that builds
          AI-powered products.
        </p>
      </Reveal>

      <div
        role="img"
        aria-label="Orbit of the technologies I use: React, Angular, Next.js, Tailwind CSS, TypeScript, Java, Spring Boot, Python, Django, FastAPI, PostgreSQL, MongoDB, Docker and Git"
        className="relative mt-10 aspect-square w-full max-w-[340px] sm:max-w-[520px]"
      >
        <div aria-hidden className="halo absolute inset-[15%]" />
        <Ring logos={OUTER} radius={46} duration={60} reduce={reduce} />
        <Ring logos={INNER} radius={28} duration={45} reverse reduce={reduce} />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Monogram className="h-20 w-20 text-xl shadow-[0_0_70px_rgb(32_146_229/0.9)] sm:h-28 sm:w-28 sm:text-3xl" />
        </motion.div>
      </div>

      <div className="mt-12 grid w-full gap-4 md:grid-cols-3">
        {GROUPS.map((group, gi) => (
          <Reveal key={group} delay={gi * 0.08} className="card-glow p-6">
            <h3 className="text-lg font-semibold">{group}</h3>
            <ul className="mt-5 space-y-4">
              {TECH_STACK.filter((t) => t.category === group).map((tech) => {
                const icon = STACK_ICONS[tech.name];
                return (
                  <li key={tech.name} className="group flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-[#0B2A5C] transition-all group-hover:border-accent group-hover:shadow-[0_0_16px_rgb(32_146_229/0.6)]">
                      {icon && "path" in icon ? (
                        <LogoImg logo={icon as Logo} className="h-5 w-5" />
                      ) : icon ? (
                        (() => {
                          const Icon = icon as LucideIcon;
                          return <Icon className="h-5 w-5 text-accent" aria-hidden />;
                        })()
                      ) : null}
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold leading-tight">{tech.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{tech.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
