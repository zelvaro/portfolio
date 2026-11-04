import { Reveal } from "./Reveal";

export function PageHeader({ title, intro }: { title: string; intro?: string }) {
  return (
    <header className="container-page pb-12 pt-32 sm:pb-16 sm:pt-40">
      <Reveal>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
      </Reveal>
    </header>
  );
}
