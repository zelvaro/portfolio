import React from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
      } ${className}`}
    >
      <div className="inline-flex items-center gap-2 mb-3">
        <span className="h-px w-4 bg-accent-primary/60" />
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-secondary">
          {eyebrow.startsWith("//") ? eyebrow : `// ${eyebrow}`}
        </span>
      </div>

      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-text-primary leading-[1.1]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
