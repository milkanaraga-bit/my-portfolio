"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { X } from "lucide-react";

type LightboxImage = { src: string; alt: string } | null;

const LightboxContext = createContext<{ open: (src: string, alt: string) => void } | null>(null);

/** Access from any card to open the shared full-screen image lightbox. */
export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [image, setImage] = useState<LightboxImage>(null);

  const open = useCallback((src: string, alt: string) => {
    document.body.style.overflow = "hidden";
    setImage({ src, alt });
  }, []);

  const close = useCallback(() => {
    document.body.style.overflow = "";
    setImage(null);
  }, []);

  useEffect(() => {
    if (!image) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [image, close]);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {image && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={close}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-auto bg-black/[0.82] p-6 backdrop-blur-md md:p-12"
          style={{ cursor: "zoom-out" }}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="fixed right-6 top-6 z-[2] flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/[0.08] text-white transition-colors hover:bg-white/20"
          >
            <X size={20} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            onClick={(e) => e.stopPropagation()}
            className="block h-auto w-full max-w-5xl cursor-default rounded-2xl shadow-2xl shadow-black/60"
          />
        </div>
      )}
    </LightboxContext.Provider>
  );
}
