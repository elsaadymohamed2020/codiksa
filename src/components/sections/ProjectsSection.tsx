"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import Image from "next/image";

import { useTranslations } from "next-intl";

export function ProjectsSection() {
  const t = useTranslations("Projects");
  
  const CATEGORIES = ["All", "Web", "Mobile", "UI/UX"];

  const PROJECTS = [
    {
      title: t("p1_title"),
      category: "Web",
      description: t("p1_desc"),
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: t("p2_title"),
      category: "Mobile",
      description: t("p2_desc"),
      tech: ["React Native", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: t("p3_title"),
      category: "UI/UX",
      description: t("p3_desc"),
      tech: ["Figma", "React", "D3.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    },
    {
      title: t("p4_title"),
      category: "Web",
      description: t("p4_desc"),
      tech: ["Astro", "Tailwind", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const [filter, setFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section id="projects" className="py-24 bg-surface">
      <Container>
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
        />

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                  ? "bg-brand text-white shadow-lg"
                  : "bg-surface-muted text-text-secondary hover:bg-brand/10 hover:text-brand"
                }`}
            >
              {cat === "All" ? t("filter_all") : t(`categories.${cat}`)}
            </button>
          ))}
        </div>

        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="brand">
                        {t(`categories.${project.category}`)}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="outline" className="text-[10px]">
                        {t}
                      </Badge>
                    ))}
                    <div className="ml-auto">
                      <Button variant="link" size="sm" className="p-0 h-auto">
                        {t("view_project")}
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
