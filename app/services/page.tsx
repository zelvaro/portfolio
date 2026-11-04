import Link from "next/link";
import { ArrowRight, Bot, BrainCircuit, Check, Layers, Workflow, Zap } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ICON_MAP: Record<string, any> = {
  Bot,
  Workflow,
  Layers,
  Zap,
  BrainCircuit,
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <SectionHeader
        eyebrow="// ENGINEERING OFFERINGS"
        title="AI Agents, Automation & Software Engineering"
        description="I design, build, and deploy production software solutions tailored for measurable efficiency."
      />

      <div className="space-y-12">
        {SERVICES.map((service, idx) => {
          const IconComponent = ICON_MAP[service.iconName] || Bot;
          return (
            <SpotlightCard key={service.id} className="p-8 sm:p-12 bg-bg-surface border-border-hairline">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left overview */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-bg-surface-2 border border-border-hairline flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-accent-secondary" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-secondary block">
                        // {service.eyebrow}
                      </span>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-text-primary">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-accent-secondary font-medium text-lg mb-4">
                    "{service.outcome}"
                  </p>

                  <p className="text-text-secondary text-base leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">
                      Key Technical Capabilities:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-text-secondary">
                          <Check className="w-4 h-4 text-accent-success shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right deliverables & CTA */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-bg-base border border-border-hairline flex flex-col justify-between h-full">
                  <div>
                    <span className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-3">
                      Expected Deliverables:
                    </span>
                    <ul className="space-y-2 mb-6">
                      {service.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-xs font-mono text-text-primary">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/contact?service=${service.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent-gradient text-white text-sm font-semibold shadow-lg hover:shadow-accent-primary/25 transition-all"
                  >
                    <span>Inquire for {service.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </div>
  );
}
