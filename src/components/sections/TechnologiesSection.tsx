"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const TECHS = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Framer Motion", slug: "framer" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Prisma", slug: "prisma" },
  { name: "Docker", slug: "docker" },
  { name: "Figma", slug: "figma" },
  { name: "Sanity", slug: "sanity" },
  { name: "Vercel", slug: "vercel" },
  { name: "Git", slug: "git" },
];

function MarqueeRow({
  items,
  reverse = false,
  speed = 40,
  iconColor,
}: {
  items: typeof TECHS;
  reverse?: boolean;
  speed?: number;
  iconColor: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [animDuration, setAnimDuration] = useState(speed);

  // Measure one set's width to calculate a proper duration
  useEffect(() => {
    if (!trackRef.current) return;
    // Each "set" is half the track
    const halfWidth = trackRef.current.scrollWidth / 2;
    // ~60px per second scrolling speed
    setAnimDuration(halfWidth / 60);
  }, []);

  return (
    <div className="flex overflow-hidden">
      <div
        ref={trackRef}
        className="flex shrink-0"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${animDuration}s linear infinite`,
        }}
      >
        {/* Render the set TWICE so it always fills the screen and loops seamlessly */}
        {[...items, ...items].map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-8 md:px-12 shrink-0 group"
          >
            <div className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center bg-surface-card/60 backdrop-blur-sm p-2 rounded-xl border border-surface-muted/50 shadow-sm group-hover:scale-110 group-hover:shadow-lg group-hover:border-brand/30 transition-all duration-300">
              <img
                src={`https://cdn.simpleicons.org/${tech.slug}/${iconColor}`}
                alt={tech.name}
                width={24}
                height={24}
                className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://cdn.simpleicons.org/${tech.slug}`;
                }}
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-text-secondary whitespace-nowrap group-hover:text-text-primary transition-colors duration-300">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechnologiesSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("Technologies");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  const iconColor = isDark ? "white" : "0f172a";

  // Split techs into two different rows for visual variety
  const row1 = TECHS;
  const row2 = [...TECHS].reverse();

  return (
    <section id="technologies" className="py-20 bg-surface-subtle overflow-hidden border-y border-surface-muted relative transition-colors duration-500">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-brand blur-[100px] rounded-full" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-14 px-4">
        <span className="text-sm font-bold uppercase tracking-[0.4em] text-brand mb-4 block">
          {t("badge")}
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary mb-4 tracking-tight">
          {t("title")}
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
          {t("subtitle")}
        </p>
      </div>

      {/* Marquee area */}
      <div className="relative z-10">
        {/* Fade masks on both sides */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-52 bg-gradient-to-r from-surface-subtle to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-52 bg-gradient-to-l from-surface-subtle to-transparent z-20 pointer-events-none" />

        <div className="flex flex-col gap-8">
          <MarqueeRow items={row1} iconColor={iconColor} speed={50} />
          <MarqueeRow items={row2} iconColor={iconColor} speed={60} reverse />
        </div>
      </div>
    </section>
  );
}