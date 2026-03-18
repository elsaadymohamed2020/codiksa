"use client";

import { Container } from "@/components/ui/Container";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslations } from "next-intl";
import { useRef, useEffect } from "react";
import {
  Rocket,
  Zap,
  TrendingUp,
  Code2,
  Users,
  Globe,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Animated number counter
───────────────────────────────────────────── */
import { animate, useMotionValue, useTransform } from "framer-motion";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [inView, value, count]);

  return (
    <motion.span ref={ref}>
      {rounded}
    </motion.span>
  );
}

/* ─────────────────────────────────────────────
   Skill bar
───────────────────────────────────────────── */
function SkillBar({ label, pct }: { label: string; pct: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-text-secondary font-medium">{label}</span>
        <span className="text-brand font-bold">{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-surface-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand via-brand-light to-brand/60"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export function AboutSection() {
  const t = useTranslations("About");

  const MILESTONES = [
    {
      year: t("milestones.m1_year"),
      title: t("milestones.m1_title"),
      description: t("milestones.m1_desc"),
      icon: Lightbulb,
      color: "from-amber-500/20 to-amber-600/5",
      accent: "text-amber-400",
      border: "border-amber-500/30",
    },
    {
      year: t("milestones.m2_year"),
      title: t("milestones.m2_title"),
      description: t("milestones.m2_desc"),
      icon: Users,
      color: "from-brand/20 to-brand/5",
      accent: "text-brand-light",
      border: "border-brand/30",
    },
    {
      year: t("milestones.m3_year"),
      title: t("milestones.m3_title"),
      description: t("milestones.m3_desc"),
      icon: Globe,
      color: "from-teal-500/20 to-teal-600/5",
      accent: "text-teal-400",
      border: "border-teal-500/30",
    },
    {
      year: t("milestones.m4_year"),
      title: t("milestones.m4_title"),
      description: t("milestones.m4_desc"),
      icon: Code2,
      color: "from-violet-500/20 to-violet-600/5",
      accent: "text-violet-400",
      border: "border-violet-500/30",
    },
  ];

  const SKILLS = [
    { label: t("skills.web"), pct: 97 },
    { label: t("skills.mobile"), pct: 91 },
    { label: t("skills.design"), pct: 88 },
    { label: t("skills.cloud"), pct: 84 },
    { label: t("skills.ai"), pct: 79 },
  ];

  const STATS = [
    { value: 150, suffix: "+", label: t("stats.projects") ?? "Projects" },
    { value: 80, suffix: "+", label: t("stats.clients") ?? "Clients" },
    { value: 8, suffix: "y", label: t("stats.experience") ?? "Experience" },
    { value: 25, suffix: "", label: t("stats.team") ?? "Experts" },
  ];

  const VALUES = [
    { label: t("values.innovation"), icon: Rocket, color: "bg-amber-500/10  text-amber-400  border-amber-500/20" },
    { label: t("values.performance"), icon: Zap, color: "bg-brand/10      text-brand-light border-brand/20" },
    { label: t("values.scalability"), icon: TrendingUp, color: "bg-teal-500/10   text-teal-400   border-teal-500/20" },
  ];

  return (
    <section id="about" className="py-32 bg-surface relative overflow-hidden">

      {/* ── Decorative top border ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      {/* ── Ambient glow blobs ── */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-brand/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-violet-500/5 blur-3xl pointer-events-none" />

      <Container>

        {/* ════════════════════════════════════
            SECTION HEADER
        ════════════════════════════════════ */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-20 space-y-4"
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand/30 bg-brand/5 text-brand backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              {t("badge") ?? "Who We Are"}
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            <span className="gradient-text">{t("heading")}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            {t("description")}
          </motion.p>
        </motion.div>

        {/* ════════════════════════════════════
            STATS ROW
        ════════════════════════════════════ */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="relative group p-6 rounded-2xl bg-surface-subtle border border-surface-muted hover:border-brand/40 transition-all duration-300 text-center overflow-hidden glass"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-text-muted uppercase tracking-widest font-medium">
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ════════════════════════════════════
            MAIN GRID: Left col + Right col
        ════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* ── LEFT: Values + Skills ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-12"
          >
            {/* Values */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-text-muted">
                {t("values_title") ?? "Our Core Values"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {VALUES.map((v) => {
                  const Icon = v.icon;
                  return (
                    <motion.div
                      key={v.label}
                      whileHover={{ y: -6, scale: 1.02, backgroundColor: "rgba(var(--brand-rgb), 0.05)" }}
                      transition={{ type: "spring", stiffness: 320, damping: 20 }}
                      className={`group p-5 rounded-2xl border ${v.color} flex flex-col items-center gap-3 cursor-pointer transition-all duration-300 hover:shadow-xl glass`}
                    >
                      <div className="p-2.5 rounded-xl bg-white/5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-sm text-center leading-tight">
                        {v.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Skill bars */}
            <motion.div variants={fadeInUp} className="space-y-5">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-text-muted">
                {t("skills_title") ?? "Expertise"}
              </h3>
              <div className="space-y-4">
                {SKILLS.map((s) => (
                  <SkillBar key={s.label} label={s.label} pct={s.pct} />
                ))}
              </div>
            </motion.div>

            {/* CTA snippet */}
            <motion.div variants={fadeInUp}>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 group text-sm font-semibold text-brand-light hover:text-brand transition-colors"
              >
                <span className="w-8 h-px bg-brand group-hover:w-14 transition-all duration-300" />
                {t("cta_learn") ?? "Work with us"}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Timeline ── */}
          <div className="relative">

            {/* Animated vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              viewport={{ once: true, margin: "-80px" }}
              style={{ originY: 0 }}
              className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand/60 via-brand/20 to-transparent"
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-8 pl-16"
            >
              {MILESTONES.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="relative"
                  >
                    {/* Icon dot on the line */}
                    <div className="absolute -left-[2.85rem] top-5 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-surface border-2 border-brand/40 shadow-[0_0_18px_var(--color-brand,#6c63ff)40] z-10">
                      <Icon className={`w-4 h-4 ${m.accent}`} />
                    </div>

                    {/* Card */}
                    <motion.div
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className={`relative p-6 rounded-2xl bg-gradient-to-br ${m.color} border ${m.border} hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group glass`}
                    >
                      {/* Year badge */}
                      <div className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest ${m.accent} mb-3`}>
                        <span className="w-1 h-1 rounded-full bg-current" />
                        {m.year}
                      </div>

                      <h3 className="text-base font-bold mb-2 text-text-primary">
                        {m.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {m.description}
                      </p>

                      {/* Subtle hover shimmer */}
                      <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </Container>

      {/* ── Decorative bottom border ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
    </section>
  );
}