"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

import { useTranslations } from "next-intl";

export function TeamSection() {
  const t = useTranslations("Team");

  const TEAM = [
    {
      name: "Mohamed Hassan",
      role: t("roles.r1"),
      image: "https://i.pravatar.cc/300?u=hassan",
      social: { twitter: "#", linkedin: "#", github: "#" },
    },
    {
      name: "Sarah Ahmed",
      role: t("roles.r2"),
      image: "https://i.pravatar.cc/300?u=sarah",
      social: { twitter: "#", linkedin: "#", github: "#" },
    },
    {
      name: "John Doe",
      role: t("roles.r3"),
      image: "https://i.pravatar.cc/300?u=john",
      social: { twitter: "#", linkedin: "#", github: "#" },
    },
    {
      name: "Amira Omar",
      role: t("roles.r4"),
      image: "https://i.pravatar.cc/300?u=amira",
      social: { twitter: "#", linkedin: "#", github: "#" },
    },
  ];

  return (
    <section id="team" className="py-24 bg-surface relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
      <Container>
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {TEAM.map((member, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="text-center group hover:border-brand/30 transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-text-secondary mb-4">{member.role}</p>
                  <div className="flex items-center justify-center gap-4">
                    <a href={member.social.twitter} className="text-text-muted hover:text-brand transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href={member.social.linkedin} className="text-text-muted hover:text-brand transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={member.social.github} className="text-text-muted hover:text-brand transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
