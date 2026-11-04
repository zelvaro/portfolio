import Link from "next/link";
import { Reveal } from "./Reveal";

type SectionProps = {
  id?: string;
  title: string;
  intro?: string;
  action?: { href: string; label: string };
  children: React.ReactNode;
};

export function Section({ id, title, intro, action, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
            {intro && <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
          </div>
          {action && (
            <Link href={action.href} className="link shrink-0 text-sm">
              {action.label}
            </Link>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
