import type { Metadata } from "next";
import Link from "next/link";
import { Check, Layers } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICE_ICONS } from "@/components/home/ServicesGrid";

export const metadata: Metadata = { title: "Services — Sabir Essaad" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Web, mobile and AI development"
        intro="What I can build, based on the stacks I have used in internships and academic projects."
      />
      <div className="container-page pb-24">
        {SERVICES.map((service) => {
          const Icon = SERVICE_ICONS[service.iconName] ?? Layers;
          return (
            <article
              key={service.id}
              id={service.id}
              className="grid scroll-mt-24 gap-8 border-t border-line py-12 lg:grid-cols-12 lg:gap-12"
            >
              <Reveal className="lg:col-span-5">
                <Icon className="h-7 w-7 text-accent" aria-hidden />
                <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{service.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-muted">{service.outcome}</p>
              </Reveal>
              <Reveal delay={0.08} className="lg:col-span-7">
                <p className="leading-relaxed text-muted">{service.description}</p>
                <div className="mt-6 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold">Capabilities</h3>
                    <ul className="mt-3 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex gap-2 text-sm text-muted">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Deliverables</h3>
                    <ul className="mt-3 space-y-2">
                      {service.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex gap-2 text-sm text-muted">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link href={`/contact?service=${service.id}`} className="btn-secondary mt-8">
                  Discuss a project
                </Link>
              </Reveal>
            </article>
          );
        })}
      </div>
    </>
  );
}
