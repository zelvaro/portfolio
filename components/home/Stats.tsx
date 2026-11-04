"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { PROJECTS, TECH_STACK, TIMELINE } from "@/lib/data";

// Figures counted from the portfolio data itself, so they stay true when the content changes
const STATS = [
  { value: TIMELINE.filter((t) => t.type === "experience").length, label: "Internships" },
  { value: PROJECTS.length, label: "Projects built" },
  { value: TECH_STACK.length, label: "Core technologies" },
  { value: 8, label: "Months of GenAIOT training" },
];

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) {
      if (reduce) setValue(to);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / 1200, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, to]);

  return <span ref={ref}>{value}</span>;
}

export function Stats() {
  return (
    <dl className="mx-auto grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
      {STATS.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse items-center gap-1 bg-surface/90 px-4 py-5">
          <dt className="text-xs text-muted sm:text-sm">{stat.label}</dt>
          <dd className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
            <CountUp to={stat.value} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
