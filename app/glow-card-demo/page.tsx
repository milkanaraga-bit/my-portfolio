import Image from "next/image";
import { GlowCard } from "@/components/ui/spotlight-card";

const cards = [
  {
    glowColor: "blue" as const,
    title: "Mountain Ridge",
    subtitle: "Banff, Canada",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
  },
  {
    glowColor: "purple" as const,
    title: "Night Sky",
    subtitle: "Joshua Tree, USA",
    img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=800&auto=format&fit=crop",
  },
  {
    glowColor: "green" as const,
    title: "Forest Path",
    subtitle: "Redwood, USA",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
  },
];

export default function GlowCardDemo() {
  return (
    <div className="flex min-h-screen flex-wrap items-center justify-center gap-10 bg-bg p-10">
      {cards.map((card) => (
        <GlowCard key={card.title} glowColor={card.glowColor} size="md">
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={card.img}
              alt={card.title}
              width={400}
              height={500}
              className="h-48 w-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-fg">{card.title}</h3>
            <p className="text-sm text-muted">{card.subtitle}</p>
          </div>
        </GlowCard>
      ))}
    </div>
  );
}
