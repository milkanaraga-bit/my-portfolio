"use client";

import { RevealText } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  lines,
  className,
}: {
  eyebrow: string;
  lines: React.ReactNode[];
  className?: string;
}) {
  return (
    <div className={cn("mb-14 md:mb-20", className)}>
      <p className="mb-4 flex items-center gap-3 font-general text-xs font-semibold uppercase tracking-[0.25em] text-muted">
        <span className="h-2 w-2 rounded-full bg-accent" />
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl md:text-7xl">
        <RevealText lines={lines} />
      </h2>
    </div>
  );
}
