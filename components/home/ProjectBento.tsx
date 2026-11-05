import { PROJECTS } from "@/lib/data";
import { findPublicImage } from "@/lib/assets";
import { Reveal } from "../ui/Reveal";
import { ProjectMockup } from "./ProjectMockups";

// Card sizes in the bento grid, keyed by project id
const LAYOUT: Record<string, string> = {
  "smart-real-estate": "md:col-span-2 lg:col-span-4 lg:row-span-2",
  "smart-hr": "lg:col-span-2 lg:row-span-2",
};

export function ProjectBento() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[300px]">
      {PROJECTS.map((project, i) => {
        const big = project.id === "smart-real-estate";
        const image = findPublicImage(`projects/${project.id}`);
        return (
          <Reveal key={project.id} delay={(i % 3) * 0.06} className={`${LAYOUT[project.id] ?? "lg:col-span-2"}`}>
            <article className="card-glow group flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:border-accent/70 hover:shadow-[0_20px_60px_-20px_rgb(32_146_229/0.6)]">
              <div className={`relative overflow-hidden p-4 ${big ? "h-72 sm:h-80 lg:h-auto" : "h-56"} lg:min-h-0 lg:flex-1`}>
                <div aria-hidden className="halo absolute inset-0 opacity-60" />
                <div className="relative h-full transition-transform duration-500 group-hover:scale-[1.03]">
                  {image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={image} alt={`Screenshot of ${project.title}`} loading="lazy" className="h-full w-full rounded-xl object-cover object-top" />
                  ) : (
                    <ProjectMockup id={project.id} />
                  )}
                </div>
                {!image && (
                  <span className="absolute right-6 top-6 rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-medium text-white/70 backdrop-blur">
                    Illustration
                  </span>
                )}
              </div>
              <div className="border-t border-line p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className={`font-semibold leading-snug ${big ? "text-2xl" : "text-lg"}`}>{project.title}</h3>
                    <p className="mt-0.5 text-sm text-subtle">
                      {project.context}
                      {project.period ? `, ${project.period}` : ""}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                      project.category === "Internship" ? "bg-[#2092E5]/20 text-white" : "bg-accent-soft text-accent"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
                {big && <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted">{project.description}</p>}
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies">
                  {project.tags.slice(0, big ? 6 : 3).map((tag) => (
                    <li key={tag} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
