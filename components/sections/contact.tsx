"use client";

import { Mail, Linkedin, FileDown, Facebook, Instagram, Briefcase } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { RevealText, Reveal } from "@/components/ui/reveal";
import { site, socials } from "@/lib/data";

const actions = [
  { label: "Email", href: `mailto:${site.email}`, icon: Mail, primary: true },
  { label: "LinkedIn", href: site.linkedin, icon: Linkedin },
  { label: "Download Resume", href: site.resume, icon: FileDown, download: true },
];

const socialIcons = { facebook: Facebook, instagram: Instagram, upwork: Briefcase };

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32 md:px-10 md:py-48"
    >
      {/* Animated gradient wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 animate-gradient opacity-[0.08] [background:linear-gradient(120deg,#FF5A3C,transparent_35%,#FF5A3C_70%,transparent)] [background-size:220%_220%]"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 animate-float-slower rounded-full bg-accent/[0.06] blur-3xl"
      />

      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <p className="mb-8 flex items-center justify-center gap-3 font-general text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Available for new projects
          </p>
        </Reveal>

        <h2 className="font-display text-6xl font-bold leading-[0.95] tracking-tighter sm:text-7xl md:text-[7.5rem]">
          <RevealText
            lines={[
              <>Let&apos;s Build</>,
              <>
                Something <span className="text-accent">Smart.</span>
              </>,
            ]}
          />
        </h2>

        <Reveal className="mx-auto mt-8 max-w-xl">
          <p className="text-base leading-relaxed text-muted md:text-lg">
            Have a process eating your team&apos;s time? Tell me about it —
            I&apos;ll show you how to hand it to a machine.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {actions.map(({ label, href, icon: Icon, primary, download }) => (
              <Magnetic key={label}>
                <a
                  href={href}
                  {...(download ? { download: "Camille-Naraga-Resume.pdf" } : {})}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={
                    primary
                      ? "inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 font-general text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                      : "inline-flex items-center gap-2.5 rounded-full border border-line px-8 py-4 font-general text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
                  }
                >
                  <Icon size={16} />
                  {label}
                </a>
              </Magnetic>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <div className="flex items-center justify-center gap-3">
            {socials.map(({ label, href, icon }) => {
              const Icon = socialIcons[icon];
              return (
                <Magnetic key={label} strength={0.3}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon size={17} />
                  </a>
                </Magnetic>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-general text-sm text-muted">
            <a
              href={`mailto:${site.email}`}
              className="underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {site.email}
            </a>
            <span aria-hidden className="text-accent">✦</span>
            <a
              href={site.phoneHref}
              className="underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {site.phone}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
