"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { useRef } from "react";
import { Magnetic } from "@/components/ui/magnetic";
import { Blobs } from "@/components/ui/blobs";
import { site, stats } from "@/lib/data";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-svh items-center overflow-hidden pb-16 pt-28 md:pt-32"
    >
      <Blobs />

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto grid w-full max-w-[1400px] items-center gap-12 px-6 md:px-10 lg:grid-cols-[1.05fr_minmax(300px,430px)_1.05fr] lg:gap-10"
      >
        {/* Left — intro */}
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-5 flex items-center gap-2 font-general text-xs font-semibold uppercase tracking-[0.25em] text-muted"
          >
            <MapPin size={13} className="text-accent" />
            {site.location}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-4 font-general text-sm font-semibold uppercase tracking-[0.28em] text-accent"
          >
            {site.role}
          </motion.p>

          <h1 className="font-display text-6xl font-bold leading-[0.92] tracking-tighter md:text-7xl lg:text-[4.2rem] xl:text-[4.8rem]">
            Camille
            <br />
            <span className="text-accent">Naraga</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg"
          >
            {site.heroBlurb}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-fg px-7 py-4 font-general text-sm font-semibold text-bg transition-colors hover:bg-accent hover:text-white"
              >
                View Projects
                <ArrowDownRight
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-line px-7 py-4 font-general text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                Contact Me
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Center — cutout portrait with the giant name behind it */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 mx-auto w-[min(78vw,430px)] lg:order-2"
        >
          {/* giant background title filling the space behind the portrait */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-screen -translate-x-1/2 -translate-y-1/2 select-none text-center"
          >
            <span className="text-stroke block whitespace-nowrap font-display text-[clamp(72px,13.5vw,200px)] font-bold uppercase leading-[0.9] tracking-tighter">
              Automation
            </span>
            <span className="text-stroke block whitespace-nowrap font-display text-[clamp(72px,13.5vw,200px)] font-bold uppercase leading-[0.9] tracking-tighter">
              Specialist
            </span>
          </div>

          {/* soft glow */}
          <div className="absolute inset-x-8 bottom-0 top-16 z-0 rounded-full bg-accent/15 blur-3xl" />

          <Image
            src="/portrait-cutout.webp"
            alt="Portrait of Camille Naraga"
            width={880}
            height={1173}
            priority
            className="relative z-10 h-auto w-full [mask-image:linear-gradient(to_bottom,black_92%,transparent)]"
          />
        </motion.div>

        {/* Right — about */}
        <div className="order-3">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mb-5 flex items-center gap-3 font-general text-xs font-semibold uppercase tracking-[0.25em] text-muted"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            About
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[15px] font-medium leading-[1.75] tracking-[-0.005em] md:text-base"
          >
            {site.aboutStatement}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-general text-[13px] text-muted"
          >
            {site.education}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 flex gap-10 border-t border-line pt-6"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl font-bold text-accent md:text-[2.6rem]">
                  {stat.value}
                </p>
                <p className="mt-1 font-general text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="#expertise"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-general text-[10px] uppercase tracking-[0.3em] text-muted lg:flex"
      >
        Scroll
        <span className="block h-10 w-px overflow-hidden bg-line">
          <motion.span
            className="block h-4 w-px bg-accent"
            animate={{ y: [0, 40] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
