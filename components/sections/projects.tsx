"use client";

import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/spotlight-card";
import { useLightbox } from "@/components/ui/lightbox";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
  const { open } = useLightbox();

  return (
    <section id="projects" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Featured Projects" lines={["Automations", "in the wild."]} />

        <div className="grid grid-cols-2 gap-6 md:grid-cols-6">
          {projects.map((project, i) => {
            const large = i < 2;
            return (
              <Reveal
                key={project.title}
                index={i % 2}
                className={cn("col-span-2", large ? "md:col-span-3" : "md:col-span-2")}
              >
                <GlowCard glowColor="orange" customSize className="group h-full rounded-3xl">
                  <article
                    onClick={() => open(project.img, project.title)}
                    className="flex h-full cursor-zoom-in flex-col overflow-hidden rounded-3xl border border-line bg-bg transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-black/10"
                  >
                    <div
                      className={cn(
                        "relative overflow-hidden bg-soft",
                        large ? "aspect-[16/10]" : "aspect-[4/3]"
                      )}
                    >
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover object-top"
                      />
                      <span className="absolute bottom-4 left-4 rounded-full bg-bg/70 px-3 py-1 font-general text-[10px] font-semibold uppercase tracking-[0.2em] text-muted backdrop-blur">
                        {project.kicker}
                      </span>
                      <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-bg/70 px-3 py-1.5 font-general text-[11px] font-semibold text-fg backdrop-blur">
                        <Maximize2 size={13} />
                        View
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="font-display text-2xl font-bold tracking-tight">{project.title}</h3>
                      <p className="mt-2 text-base leading-relaxed text-muted">{project.desc}</p>
                      <div className="mt-auto flex flex-wrap gap-2 pt-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-line px-3 py-1 font-general text-xs font-medium text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
