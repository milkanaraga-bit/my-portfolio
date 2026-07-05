"use client";

import { cn } from "@/lib/utils";

/** Soft floating gradient blobs used as ambient section backgrounds. */
export function Blobs({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute -left-32 top-1/4 h-96 w-96 animate-float-slower rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -right-24 bottom-1/4 h-80 w-80 animate-float-slow rounded-full bg-accent/[0.07] blur-3xl" />
    </div>
  );
}
