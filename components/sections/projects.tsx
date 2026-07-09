"use client";

import Image from "next/image";
import { ArrowUpRight, FolderOpen, Maximize2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/spotlight-card";
import { useLightbox } from "@/components/ui/lightbox";
import { projects, site } from "@/lib/data";
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

        <Reveal className="mt-6">
          <GlowCard glowColor="orange" customSize className="group rounded-3xl">
            <a
              href={site.driveProjects}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-6 rounded-3xl border border-line bg-bg p-8 transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/10"
            >
              <div className="flex items-center gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-soft text-accent">
                  <FolderOpen size={24} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    See every project
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    Browse the full archive on Google Drive.
                  </p>
                </div>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-accent group-hover:text-accent">
                <ArrowUpRight size={18} />
              </span>
            </a>
          </GlowCard>
        </Reveal>
      </div>
    </section>
  );
}
