"use client";

import { useState } from "react";
import { Search, GitBranch, Wrench, Feather, TrendingUp, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  search: Search,
  gitBranch: GitBranch,
  wrench: Wrench,
  feather: Feather,
  trendingUp: TrendingUp,
};

/** Base and hover translate offsets for each card in the skewed fan, widest apart so hovers never collide. */
const positions: { base: [number, number]; hover: [number, number] }[] = [
  { base: [-232, -136], hover: [-124, -128] },
  { base: [-116, -68], hover: [-62, -86] },
  { base: [0, 0], hover: [0, -44] },
  { base: [116, 68], hover: [62, -2] },
  { base: [232, 136], hover: [124, 40] },
];

export function Process() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="process" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Process" lines={["From chaos", "to clockwork."]} />

        <div
          className="relative mt-2 grid min-h-[460px] place-items-center md:min-h-[600px]"
          style={{ gridTemplateAreas: "'stack'" }}
        >
          {processSteps.map((step, i) => {
            const Icon = icons[step.icon];
            const isLast = i === processSteps.length - 1;
            const isHovered = hovered === i;
            const [bx, by] = positions[i].base;
            const [hx, hy] = positions[i].hover;
            const [x, y] = isHovered ? [hx, hy] : [bx, by];
            const grayscale = !isLast && !isHovered;

            return (
              <Reveal key={step.step} className="[grid-area:stack]">
                <div
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="flex h-[158px] w-[280px] flex-col justify-between overflow-hidden rounded-2xl border-2 bg-bg p-4 transition-[transform,filter,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[380px] sm:p-[18px_22px]"
                  style={{
                    transform: `skewY(-8deg) translate(${x}px, ${y}px)`,
                    filter: grayscale ? "grayscale(1)" : "grayscale(0)",
                    borderColor: isLast || isHovered ? "rgba(255,90,60,0.55)" : "var(--line)",
                    boxShadow: isHovered
                      ? "0 30px 60px -20px rgba(0,0,0,0.34)"
                      : isLast
                        ? "0 22px 44px -18px rgba(0,0,0,0.28)"
                        : "0 14px 34px -16px rgba(0,0,0,0.22)",
                    zIndex: isHovered ? 60 : i + 1,
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-accent text-white">
                      <Icon size={15} />
                    </span>
                    <p className="font-display text-lg font-bold text-accent">{step.title}</p>
                  </div>
                  <p className="text-[15px] leading-snug text-fg">{step.text}</p>
                  <p className="font-general text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                    Step {step.step}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
