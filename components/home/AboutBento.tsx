import Link from "next/link";
import { Award, Languages, MapPin, Sparkles } from "lucide-react";
import { CERTIFICATIONS, LANGUAGES, PERSONAL_INFO, PROJECTS, TIMELINE } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { CountUp } from "./Stats";
import { LocalTime } from "./LocalTime";

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const MARQUEE = [
  "react/react-original.svg",
  "angular/angular-original.svg",
  "nextjs/nextjs-original.svg",
  "tailwindcss/tailwindcss-original.svg",
  "typescript/typescript-original.svg",
  "java/java-original.svg",
  "spring/spring-original.svg",
  "python/python-original.svg",
  "fastapi/fastapi-original.svg",
  "postgresql/postgresql-original.svg",
  "mongodb/mongodb-original.svg",
  "docker/docker-original.svg",
  "git/git-original.svg",
];

const tile = "card-glow h-full p-6 transition-colors hover:border-accent/60";

export function AboutBento({ avatarSrc }: { avatarSrc?: string | null }) {
  const experiences = TIMELINE.filter((t) => t.type === "experience");
  const current = experiences[0];

  return (
    <div className="space-y-4">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(170px,auto)]">
      {/* Intro */}
      <Reveal className="md:col-span-2 lg:row-span-2">
        <div className={`${tile} flex flex-col`}>
          {avatarSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatarSrc} alt={`Portrait of ${PERSONAL_INFO.name}`} className="h-20 w-20 rounded-2xl border border-accent/50 object-cover" />
          ) : (
            <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F3570] to-[#2092E5] font-display text-2xl font-bold">
              SE
            </span>
          )}
          <h3 className="mt-6 text-2xl font-semibold sm:text-3xl">{PERSONAL_INFO.name}</h3>
          <p className="mt-1 font-medium text-accent">{PERSONAL_INFO.title}</p>
          <p className="mt-4 leading-relaxed text-muted">
            Computer Science &amp; Networks engineering student at EMSI. I like turning ideas into complete products,
            from the database and API to the interface, and increasingly with AI at the core.
          </p>
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <a href={PERSONAL_INFO.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Download CV
            </a>
            <Link href="/about" className="btn-secondary">
              More about me
            </Link>
          </div>
        </div>
      </Reveal>

      {/* Currently */}
      <Reveal delay={0.05} className="md:col-span-2">
        <div className={`${tile} relative overflow-hidden`}>
          <span aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#2092E5]/25 blur-3xl" />
          <p className="flex items-center gap-2 text-sm font-semibold text-accent">
            <Sparkles className="h-4 w-4" aria-hidden /> Currently
          </p>
          <h3 className="mt-3 text-xl font-semibold sm:text-2xl">{current.role}</h3>
          <p className="mt-1 text-muted">
            {current.institution}, {current.period}
          </p>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted">{current.description}</p>
        </div>
      </Reveal>

      {/* Stats */}
      {[
        { value: experiences.length, label: "Internships" },
        { value: PROJECTS.length, label: "Projects built" },
      ].map((stat, i) => (
        <Reveal key={stat.label} delay={0.1 + i * 0.05}>
          <div className={`${tile} flex flex-col justify-between`}>
            <p className="text-sm text-muted">{stat.label}</p>
            <p className="font-display text-5xl font-semibold text-gradient">
              <CountUp to={stat.value} />
            </p>
          </div>
        </Reveal>
      ))}

      {/* Experience */}
      <Reveal className="md:col-span-2 lg:row-span-2">
        <div className={tile}>
          <h3 className="text-lg font-semibold">Experience</h3>
          <ol className="mt-5 space-y-5 border-l border-line pl-5">
            {experiences.map((item, i) => (
              <li key={item.id} className="relative">
                <span
                  aria-hidden
                  className={`absolute -left-[26px] top-1 h-3 w-3 rounded-full border-2 border-accent ${i === 0 ? "bg-accent" : "bg-bg"}`}
                />
                <p className="text-xs text-subtle">{item.period}</p>
                <p className="font-semibold leading-snug">{item.role}</p>
                <p className="text-sm text-accent">
                  {item.institution}
                  {item.location ? <span className="text-muted">, {item.location}</span> : null}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      {/* Location and time */}
      <Reveal delay={0.05}>
        <div className={`${tile} flex flex-col justify-between`}>
          <p className="flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-accent" aria-hidden /> {PERSONAL_INFO.location}
          </p>
          <p className="mt-4 font-display text-4xl font-semibold">
            <LocalTime />
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-signal" aria-hidden /> {PERSONAL_INFO.status}
          </p>
        </div>
      </Reveal>

      {/* Languages */}
      <Reveal delay={0.1}>
        <div className={tile}>
          <p className="flex items-center gap-2 text-sm text-muted">
            <Languages className="h-4 w-4 text-accent" aria-hidden /> Languages
          </p>
          <ul className="mt-4 space-y-2">
            {LANGUAGES.map((l) => (
              <li key={l.name} className="flex items-center justify-between">
                <span className="font-semibold">{l.name}</span>
                <span className="text-xs text-muted">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Certifications */}
      <Reveal delay={0.05} className="md:col-span-2">
        <div className={tile}>
          <p className="flex items-center gap-2 text-sm text-muted">
            <Award className="h-4 w-4 text-accent" aria-hidden /> Certifications
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {CERTIFICATIONS.map((c) => (
              <li key={c} className="rounded-full border border-line bg-accent-soft px-3 py-1.5 text-sm">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

    </div>

      {/* Stack marquee */}
      <Reveal>
        <div className={`${tile} overflow-hidden px-0 py-5`}>
          <div className="relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <ul className="tech-marquee flex w-max gap-10" aria-hidden>
              {[...MARQUEE, ...MARQUEE].map((path, i) => (
                <li key={i}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${ICON_BASE}/${path}`}
                    alt=""
                    loading="lazy"
                    className={`h-9 w-9 transition-transform hover:scale-110 ${path.startsWith("nextjs") ? "rounded-full bg-white" : ""}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
