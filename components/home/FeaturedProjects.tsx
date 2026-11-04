import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

// Stylized app window standing in for a project screenshot
function ProjectVisual({ title, tags }: { title: string; tags: string[] }) {
  const initials = title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div className="relative">
      <div aria-hidden className="halo absolute -inset-10" />
      <div className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-[#1C0B36] to-[#3A1670] shadow-2xl shadow-accent-deep/30">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex aspect-[16/10] flex-col items-center justify-center gap-4 p-6">
          <span className="font-display text-6xl font-bold text-white/90 sm:text-7xl">{initials}</span>
          <ul className="flex flex-wrap justify-center gap-2" aria-hidden>
            {tags.slice(0, 3).map((tag) => (
              <li key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function FeaturedProjects() {
  const featured = PROJECTS.slice(0, 4);

  return (
    <div className="space-y-20 sm:space-y-28">
      {featured.map((project, i) => {
        const flip = i % 2 === 1;
        return (
          <article key={project.id} className="grid items-center gap-8 lg:grid-cols-12">
            <Reveal className={`lg:col-span-7 lg:row-start-1 ${flip ? "lg:col-start-6" : "lg:col-start-1"}`}>
              <ProjectVisual title={project.title} tags={project.tags} />
            </Reveal>
            <Reveal
              delay={0.1}
              className={`relative z-10 lg:col-span-6 lg:row-start-1 ${
                flip ? "lg:col-start-1 lg:text-left" : "lg:col-start-7 lg:text-right"
              }`}
            >
              <p className="text-sm font-semibold text-accent">Featured project</p>
              <h3 className="mt-1 text-2xl font-semibold sm:text-3xl">{project.title}</h3>
              <p className="mt-1 text-sm text-subtle">
                {project.context}
                {project.period ? `, ${project.period}` : ""}
              </p>
              <div className="mt-5 rounded-2xl border border-line bg-surface/80 p-5 text-left shadow-xl backdrop-blur-md sm:p-6">
                <p className="leading-relaxed text-muted">{project.description}</p>
              </div>
              <ul
                className={`mt-4 flex flex-wrap gap-2 ${flip ? "" : "lg:justify-end"}`}
                aria-label="Technologies"
              >
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium">
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
          </article>
        );
      })}
      <div className="text-center">
        <Link href="/work" className="btn-secondary">
          See all projects
        </Link>
      </div>
    </div>
  );
}
