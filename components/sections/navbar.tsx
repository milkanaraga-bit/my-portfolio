"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "glass border-b border-line py-3"
          : "border-b border-transparent bg-transparent py-5"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className="font-display text-lg font-bold uppercase tracking-tight"
          aria-label="Camille Naraga — back to top"
        >
          Camille Naraga<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Magnetic key={link.href} strength={0.25}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 font-general text-sm font-medium text-muted transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            </Magnetic>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Magnetic className="hidden md:block">
            <a
              href="mailto:milkanaraga@gmail.com"
              className="rounded-full bg-fg px-5 py-2.5 font-general text-sm font-semibold text-bg transition-colors hover:bg-accent hover:text-white"
            >
              Let&apos;s talk
            </a>
          </Magnetic>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="glass overflow-hidden border-b border-line md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                  className="rounded-xl px-3 py-3 font-display text-2xl font-bold"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="mailto:milkanaraga@gmail.com"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-full bg-fg px-5 py-3.5 text-center font-general font-semibold text-bg"
              >
                Let&apos;s talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
