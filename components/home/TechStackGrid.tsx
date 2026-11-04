import { TECH_STACK, type TechItem } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

const GROUPS: TechItem["category"][] = ["Frontend & Mobile", "Backend & Data", "AI & DevOps"];

export function TechStackGrid() {
  return (
    <div className="grid gap-10 md:grid-cols-3 md:gap-8">
      {GROUPS.map((group, i) => (
        <Reveal key={group} delay={i * 0.08}>
          <h3 className="text-lg font-semibold tracking-tight">{group}</h3>
          <ul className="mt-4 divide-y divide-line border-t border-line">
            {TECH_STACK.filter((t) => t.category === group).map((tech) => (
              <li key={tech.name} className="py-4">
                <p className="font-semibold">{tech.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{tech.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
