"use client";

import Image from "next/image";
import { Award, Maximize2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { useLightbox } from "@/components/ui/lightbox";
import { certifications } from "@/lib/data";

export function Certifications() {
  const { open } = useLightbox();

  return (
    <section id="certifications" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Certifications" lines={["Trained &", "certified."]} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} index={i % 3}>
              <TiltCard className="h-full rounded-3xl">
                <article
                  onClick={() => open(cert.img, cert.title)}
                  className="flex h-full cursor-zoom-in flex-col overflow-hidden rounded-3xl border border-line bg-bg transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-black/10"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-soft">
                    <Image
                      src={cert.img}
                      alt={cert.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                    <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-bg/70 px-3 py-1.5 font-general text-[11px] font-semibold text-fg backdrop-blur">
                      <Maximize2 size={13} />
                      View
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <span className="flex items-center gap-2 font-general text-xs font-semibold text-accent">
                      <Award size={15} />
                      Certified
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold leading-tight tracking-tight">
                      {cert.title}
                    </h3>
                    <p className="mt-auto pt-4 font-general text-[13px] text-muted">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
