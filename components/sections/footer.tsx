"use client";

import { ArrowUp, Linkedin, Mail } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { site } from "@/lib/data";

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-line px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-general text-sm text-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-2">
          {[
            { href: `mailto:${site.email}`, icon: Mail, label: "Email" },
            { href: site.linkedin, icon: Linkedin, label: "LinkedIn" },
          ].map(({ href, icon: Icon, label }) => (
            <Magnetic key={label} strength={0.3}>
              <a
                href={href}
                aria-label={label}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={16} />
              </a>
            </Magnetic>
          ))}
        </div>

        <Magnetic>
          <button
            onClick={scrollTop}
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-general text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </Magnetic>
      </div>
    </footer>
  );
}
