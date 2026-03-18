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
            className="flex items-center gap-4 px-8 md:px-12 shrink-0 group relative py-4"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center p-3 rounded-2xl border border-surface-muted/50 shadow-sm group-hover:scale-110 group-hover:shadow-brand/20 group-hover:border-brand/30 transition-all duration-500 glass relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={`https://cdn.simpleicons.org/${tech.slug}/${iconColor}`}
                alt={tech.name}
                width={28}
                height={28}
                className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 drop-shadow-sm"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://cdn.simpleicons.org/${tech.slug}`;
                }}
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-text-secondary whitespace-nowrap group-hover:text-text-primary group-hover:translate-x-1 transition-all duration-300">
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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  const iconColor = isDark ? "white" : "0f172a";

  // Split techs into two different rows for visual variety
  const row1 = TECHS;
  const row2 = [...TECHS].reverse();

  return (
    <section id="technologies" className="py-20 bg-surface overflow-hidden relative transition-colors duration-500">
      {/* Ambient background glow blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-500/5 blur-[100px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2" />

      {/* Top/Bottom gradient lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      {/* Header */}
      <div className="relative z-10 text-center mb-16 px-4">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] border border-brand/30 bg-brand/5 text-brand backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            {t("badge")}
          </span>
        </div>
        <h2 className="text-3xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1]">
          <span className="gradient-text">{t("title")}</span>
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto text-lg md:text-xl leading-relaxed opacity-80">
          {t("subtitle")}
        </p>
      </div>

      {/* Marquee area */}
      <div className="relative z-10">
        {/* Fade masks on both sides */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-52 bg-gradient-to-r from-surface to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-52 bg-gradient-to-l from-surface to-transparent z-20 pointer-events-none" />

        <div className="flex flex-col gap-8">
          <MarqueeRow items={row1} iconColor={iconColor} speed={50} />
          <MarqueeRow items={row2} iconColor={iconColor} speed={60} reverse />
        </div>
      </div>
    </section>
  );
}