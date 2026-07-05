"use client";

import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-track flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={cn(
          "flex shrink-0 items-center gap-8 pr-8",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {doubled.map((skill, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-display text-4xl font-bold tracking-tight text-muted transition-colors hover:text-fg md:text-6xl">
              {skill}
            </span>
            <span className="text-2xl text-accent md:text-3xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const half = Math.ceil(skills.length / 2);
  return (
    <section aria-label="Skills and tools" className="overflow-hidden border-y border-line py-16 md:py-24">
      <div className="space-y-8 md:space-y-12">
        <Row items={skills.slice(0, half)} />
        <Row items={skills.slice(half)} reverse />
      </div>
    </section>
  );
}
