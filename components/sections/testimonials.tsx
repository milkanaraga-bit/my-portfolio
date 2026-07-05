"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { testimonialColumns, type Testimonial } from "@/lib/data";

function Card({ t, hidden = false }: { t: Testimonial; hidden?: boolean }) {
  return (
    <figure aria-hidden={hidden || undefined} className="glass flex flex-col rounded-3xl p-7">
      <p className="text-[15px] leading-[1.62]">{t.quote}</p>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-accent/[0.16] font-display text-sm font-bold text-accent">
          {t.initials}
        </span>
        <span className="flex flex-col">
          <span className="font-display text-[15px] font-bold tracking-tight">{t.name}</span>
          <span className="font-general text-[13px] text-muted">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

const durations = ["48s", "60s", "54s"];
const directions: ("normal" | "reverse")[] = ["normal", "reverse", "normal"];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 py-28 md:px-10 md:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-96 w-96 animate-float-slower rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-24 bottom-1/4 h-80 w-80 animate-float-slow rounded-full bg-accent/[0.07] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading eyebrow="Testimonials" lines={["Word gets", "around."]} />

        <div
          className="mx-auto flex max-h-[760px] justify-center gap-6 overflow-hidden"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
            maskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
          }}
        >
          {testimonialColumns.map((col, ci) => (
            <div key={ci} className={ci === 0 ? "w-[340px] shrink-0" : "hidden w-[340px] shrink-0 md:block"}>
              <div
                className="marquee-track-v flex flex-col gap-5"
                style={{ animation: `cn-vmarquee ${durations[ci]} linear infinite ${directions[ci]}` }}
              >
                {col.map((t, i) => (
                  <Card key={`a-${i}`} t={t} />
                ))}
                {col.map((t, i) => (
                  <Card key={`b-${i}`} t={t} hidden />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
