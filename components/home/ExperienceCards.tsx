import Link from "next/link";
import { Boxes, Building2, Sparkles, Users, type LucideIcon } from "lucide-react";
import { TIMELINE } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

const ICONS: Record<string, LucideIcon> = {
  "fusion-ai": Sparkles,
  xai: Building2,
  norsys: Users,
  "rida-anis": Boxes,
};

export function ExperienceCards() {
  const experiences = TIMELINE.filter((item) => item.type === "experience");

  return (
    <div className="relative">
      <div aria-hidden className="halo pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2" />
      <div className="relative grid gap-4 sm:grid-cols-2">
        {experiences.map((item, i) => {
          const Icon = ICONS[item.id] ?? Sparkles;
          return (
            <Reveal key={item.id} delay={(i % 2) * 0.08} className="card-glow group flex gap-5 p-6 transition-colors hover:border-accent/60 sm:p-7">
              <div className="relative shrink-0">
                <span aria-hidden className="absolute inset-0 rounded-2xl bg-accent-deep/70 blur-xl transition-opacity group-hover:opacity-100 sm:opacity-70" />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1466B8] to-[#2092E5] shadow-lg shadow-accent-deep/40 sm:h-20 sm:w-20">
                  <Icon className="h-8 w-8 text-white sm:h-9 sm:w-9" aria-hidden />
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold leading-snug sm:text-xl">{item.role}</h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {item.institution}
                  <span className="font-normal text-subtle">, {item.period}</span>
                </p>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{item.description}</p>
                <Link
                  href="/about#experience"
                  className="mt-4 inline-flex rounded-lg border border-accent/50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-accent-soft"
                >
                  Learn more
                </Link>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
