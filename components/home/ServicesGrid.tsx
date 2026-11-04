import Link from "next/link";
import { BrainCircuit, Layers, Server, Smartphone, type LucideIcon } from "lucide-react";
import { SERVICES } from "@/lib/data";

export const SERVICE_ICONS: Record<string, LucideIcon> = { Layers, Smartphone, BrainCircuit, Server };

export function ServicesGrid() {
  return (
    <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
      {SERVICES.map((service) => {
        const Icon = SERVICE_ICONS[service.iconName] ?? Layers;
        return (
          <Link
            key={service.id}
            href={`/services#${service.id}`}
            className="group flex flex-col bg-surface p-6 transition-colors hover:bg-accent-soft/50 sm:p-8"
          >
            <Icon className="h-6 w-6 text-accent" aria-hidden />
            <h3 className="mt-5 text-xl font-semibold tracking-tight">{service.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{service.outcome}</p>
            <span className="mt-6 text-sm font-semibold text-accent group-hover:underline group-hover:underline-offset-4">
              See details
            </span>
          </Link>
        );
      })}
    </div>
  );
}
