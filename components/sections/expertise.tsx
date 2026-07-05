"use client";

import {
  Bot,
  Workflow,
  Database,
  Code,
  Terminal,
  Feather,
  Server,
  Webhook,
  Braces,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { expertise, type ToolTile } from "@/lib/data";

const cardIcons: Record<string, LucideIcon> = { bot: Bot, workflow: Workflow, database: Database, code: Code };
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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#10A37F">
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
      <img src={`https://cdn.simpleicons.org/${tool.slug}`} alt={tool.name} width={24} height={24} loading="lazy" className="block h-6 w-6" />
    );
  } else {
    const Icon = toolIcons[tool.icon];
    content = <Icon size={22} strokeWidth={1.8} className="text-accent" />;
  }

  return (
    <span
      className="group/tool relative flex h-12 w-12 cursor-default items-center justify-center rounded-xl border border-line bg-white transition-all duration-300 hover:-translate-y-[3px] hover:border-accent"
      aria-label={tool.name}
    >
      {content}
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2.5 w-max max-w-[220px] -translate-x-1/2 rounded-[10px] bg-fg px-3 py-2 text-center font-general text-xs font-medium leading-snug text-bg opacity-0 shadow-lg shadow-black/30 transition-all duration-200 translate-y-1 group-hover/tool:translate-y-0 group-hover/tool:opacity-100">
        {tool.desc}
      </span>
    </span>
  );
}

export function Expertise() {
  return (
    <section id="expertise" className="relative bg-soft px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Expertise" lines={["What I do", "best."]} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((area, i) => {
            const Icon = cardIcons[area.icon];
            return (
              <Reveal key={area.title} index={i}>
                <TiltCard className="h-full rounded-3xl">
                  <div className="flex h-full flex-col rounded-3xl border border-line bg-bg p-7 transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-black/5">
                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-soft text-fg">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <h3 className="font-display text-xl font-bold tracking-tight">{area.title}</h3>
                    <p className="mb-6 mt-2 text-sm leading-relaxed text-muted">{area.description}</p>
                    <div className="mt-auto flex flex-wrap gap-2.5 border-t border-line pt-5">
                      {area.tools.map((tool) => (
                        <Tool key={tool.name} tool={tool} />
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
