import { TIMELINE } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

export function Timeline() {
  return (
    <ol>
      {TIMELINE.map((item) => {
        const isExperience = item.type === "experience";
        return (
          <li key={item.id} className="grid sm:grid-cols-[10rem_1fr] sm:gap-10">
            <p className="hidden pt-0.5 text-sm font-medium text-muted sm:block">{item.period}</p>
            <Reveal className="relative border-l border-line pb-12 pl-7">
              <span
                aria-hidden
                className={`absolute -left-[6px] top-1.5 h-[11px] w-[11px] rounded-full border-2 ${
                  isExperience ? "border-accent bg-accent" : "border-accent bg-bg"
                }`}
              />
              <p className="text-sm text-subtle">
                <span className="sm:hidden">{item.period}, </span>
                {isExperience ? "Experience" : "Education"}
              </p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight">{item.role}</h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {item.institution}
                {item.location ? <span className="font-normal text-muted">, {item.location}</span> : null}
              </p>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{item.description}</p>
              {item.highlights.length > 0 && (
                <ul className="mt-3 max-w-2xl list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted marker:text-subtle">
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
