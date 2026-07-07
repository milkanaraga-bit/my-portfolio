"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { useLightbox } from "@/components/ui/lightbox";
import { websites } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Websites() {
  const { open } = useLightbox();
  const [active, setActive] = useState(0);

  return (
    <section id="websites" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Websites" lines={["Built for", "the web."]} />

        {/* Desktop: expanding panels — hover a site and it opens while the others fold into labeled slivers */}
        <Reveal>
          <div className="hidden h-[560px] gap-4 md:flex">
            {websites.map((site, i) => {
              const isActive = active === i;
              return (
                <div
                  key={site.name}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => open(site.img, site.name)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${site.name}`}
                  className="group relative cursor-zoom-in overflow-hidden rounded-3xl border border-line transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ flexGrow: isActive ? 5 : 1, flexBasis: 0 }}
                >
                  <Image
                    src={site.img}
                    alt={site.name}
                    fill
                    sizes="(min-width: 768px) 70vw, 100vw"
                    className="object-cover object-top"
                  />
                  {/* readability gradient */}
                  <div
                    className={cn(
                      "absolute inset-0 transition-opacity duration-700",
                      isActive
                        ? "bg-gradient-to-t from-black/75 via-black/10 to-transparent"
                        : "bg-black/55"
                    )}
                  />

                  {/* collapsed: vertical name */}
                  <div
                    className={cn(
                      "absolute inset-0 flex items-end justify-center pb-8 transition-opacity duration-500",
                      isActive ? "opacity-0" : "opacity-100"
                    )}
                  >
                    <p className="whitespace-nowrap font-display text-lg font-bold tracking-tight text-white [writing-mode:vertical-rl] [transform:rotate(180deg)]">
                      {site.name}
                    </p>
                  </div>

                  {/* expanded: details */}
                  <div
                    className={cn(
                      "absolute inset-x-0 bottom-0 p-8 transition-all delay-150 duration-500",
                      isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                    )}
                  >
                    <p className="mb-3 font-general text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                      {site.tag}
                    </p>
                    <h3 className="font-display text-3xl font-bold tracking-tight text-white">
                      {site.name}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
                      {site.desc}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-general text-[13px] font-semibold text-black transition-colors hover:bg-accent hover:text-white"
                      >
                        Visit live site
                        <ArrowUpRight size={14} />
                      </a>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-4 py-2 font-general text-[12px] font-medium text-white/80">
                        <Maximize2 size={12} />
                        Click to preview
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Mobile: stacked cards */}
        <div className="flex flex-col gap-6 md:hidden">
          {websites.map((site, i) => (
            <Reveal key={site.name} index={i}>
              <div
                onClick={() => open(site.img, site.name)}
                className="cursor-zoom-in overflow-hidden rounded-3xl border border-line bg-bg"
              >
                <div className="relative aspect-[16/10] bg-soft">
                  <Image
                    src={site.img}
                    alt={site.name}
                    fill
                    sizes="100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-2 font-general text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                    {site.tag}
                  </p>
                  <h3 className="font-display text-xl font-bold tracking-tight">{site.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{site.desc}</p>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-general text-[13px] font-semibold transition-colors hover:border-accent hover:text-accent"
                  >
                    Visit live site
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
