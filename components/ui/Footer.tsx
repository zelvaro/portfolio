import { PERSONAL_INFO } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col gap-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {PERSONAL_INFO.name}. Built with Next.js and Tailwind CSS.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-ink">
              Email
            </a>
          </li>
          <li>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              GitHub
            </a>
          </li>
          <li>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
