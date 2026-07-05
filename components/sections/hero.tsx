"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Magnetic } from "@/components/ui/magnetic";
import { Blobs } from "@/components/ui/blobs";
import { site } from "@/lib/data";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";
  const portraitSrc = isDark ? "/portrait-dark.png" : "/portrait.jpg";

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-svh items-center overflow-hidden pt-28 md:pt-32"
    >
      <Blobs />

      {/* Giant background typography, parallaxed behind the portrait */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-x-0 top-[16%] z-0 select-none text-center md:top-[14%]"
      >
        <span className="text-stroke font-display text-[24vw] font-bold uppercase leading-none tracking-tighter md:text-[19vw]">
          Automate
        </span>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 md:grid-cols-2 md:gap-8 md:px-10"
      >
        {/* Left — intro */}
        <div className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-6 flex items-center gap-2 font-general text-xs font-semibold uppercase tracking-[0.25em] text-muted"
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

          <h1 className="font-display text-6xl font-bold leading-[0.92] tracking-tighter sm:text-7xl md:text-[6.2rem]">
            Camille
            <br />
            <span className="text-accent">Naraga</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-md text-base leading-relaxed text-muted md:text-lg"
          >
            {site.heroBlurb}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
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

        {/* Right — portrait overlapping the giant type */}
        <motion.div
          style={{ y: portraitY }}
          className="order-1 md:order-2 md:justify-self-end"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-64 animate-float-slower sm:w-80 md:w-[24rem]"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/10 blur-2xl" />
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-soft shadow-2xl shadow-black/10 transition-colors duration-500">
              <Image
                key={portraitSrc}
                src={portraitSrc}
                alt="Portrait of Camille Naraga"
                width={640}
                height={800}
                priority
                className="h-full w-full object-cover object-top"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-general text-[10px] uppercase tracking-[0.3em] text-muted md:flex"
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
