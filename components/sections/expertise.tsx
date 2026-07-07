"use client";

import {
  ArrowUpRight,
  Bot,
  Terminal,
  Code,
  Feather,
  Server,
  Webhook,
  Braces,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { expertise, type ToolTile } from "@/lib/data";

const toolIcons: Record<string, LucideIcon> = {
  bot: Bot,
  terminal: Terminal,
  code: Code,
  feather: Feather,
  server: Server,
  webhook: Webhook,
  braces: Braces,
  fileText: FileText,
};

function OpenAIMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#10A37F">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  );
}

function Tool({ tool }: { tool: ToolTile }) {
  let content: React.ReactNode;
  if (tool.type === "openai") {
    content = <OpenAIMark />;
  } else if (tool.type === "logo") {
    // eslint-disable-next-line @next/next/no-img-element
    content = (
      <img
        src={`https://cdn.simpleicons.org/${tool.slug}`}
        alt={tool.name}
        width={22}
        height={22}
        loading="lazy"
        className="block h-[22px] w-[22px]"
      />
    );
  } else {
    const Icon = toolIcons[tool.icon];
    content = <Icon size={20} strokeWidth={1.8} className="text-accent" />;
  }

  return (
    <span
      className="group/tool relative flex h-11 w-11 cursor-default items-center justify-center rounded-xl border border-line bg-bg transition-all duration-300 hover:-translate-y-[3px] hover:border-accent hover:shadow-lg hover:shadow-accent/10"
      aria-label={tool.name}
    >
      {content}
      <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2.5 w-max max-w-[220px] -translate-x-1/2 translate-y-1 rounded-[10px] bg-fg px-3 py-2 text-center font-general text-xs font-medium leading-snug text-bg opacity-0 shadow-lg shadow-black/30 transition-all duration-200 group-hover/tool:translate-y-0 group-hover/tool:opacity-100">
        {tool.desc}
      </span>
    </span>
  );
}

export function Expertise() {
  return (
    <section id="expertise" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        {/* header with a side caption */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-8 md:mb-14">
          <SectionHeading eyebrow="Expertise" lines={["What I do", "best."]} className="mb-0 md:mb-0" />
          <p className="mb-3 max-w-xs font-general text-sm leading-relaxed text-muted">
            Four disciplines, one goal — take the repetitive work off your plate and hand it to a
            system that never clocks out.
          </p>
        </div>

        {/* services index */}
        <div>
          {expertise.map((area, i) => (
            <Reveal key={area.title} index={i % 2}>
              <div className="group relative grid gap-5 border-t border-line px-2 py-9 transition-colors duration-500 last:border-b hover:bg-soft md:grid-cols-[64px_1.15fr_auto] md:items-center md:gap-8 md:px-6 md:py-12">
                {/* accent spine */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
                />
                {/* ghost index watermark, clipped in its own layer so tooltips stay visible */}
                <span aria-hidden className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
                  <span className="text-stroke absolute -right-4 top-1/2 -translate-y-1/2 select-none font-display text-[9rem] font-bold leading-none opacity-0 transition-all duration-700 group-hover:-right-2 group-hover:opacity-60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>

                <span className="font-display text-sm font-bold tracking-widest text-muted transition-colors duration-300 group-hover:text-accent">
                  ({String(i + 1).padStart(2, "0")})
                </span>

                <div>
                  <h3 className="flex items-center gap-3 font-display text-[1.7rem] font-bold leading-tight tracking-tight transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 group-hover:text-accent md:text-4xl">
                    {area.title}
                    <ArrowUpRight
                      size={26}
                      className="shrink-0 -translate-x-1 translate-y-1 text-accent opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                    />
                  </h3>
                  <p className="mt-2.5 max-w-md text-[15px] leading-relaxed text-muted">
                    {area.description}
                  </p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2.5 md:justify-end">
                  {area.tools.map((tool) => (
                    <Tool key={tool.name} tool={tool} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
