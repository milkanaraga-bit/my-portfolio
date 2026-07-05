"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { site, stats } from "@/lib/data";

/** Word-by-word scroll-scrubbed editorial statement. */
function ScrubWords({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={ref}
      className="font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-6xl"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />;
      })}
    </p>
  );
}

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.28em] inline-block">
      {word}
    </motion.span>
  );
}

export function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-10 flex items-center gap-3 font-general text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            About
          </p>
        </Reveal>

        <ScrubWords text={site.aboutStatement} />

        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <Reveal>
            <p className="max-w-xl font-general text-sm text-muted">{site.education}</p>
          </Reveal>
          <Reveal index={1}>
            <div className="flex gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl font-bold text-accent md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-general text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
