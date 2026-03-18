"use client";

import { useState, useEffect, useCallback } from "react";
import { Link } from "@/i18n/routing";
import { usePathname } from "@/i18n/routing";
import { NAVIGATION_LINKS } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLenis } from "@studio-freight/react-lenis";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Index");
  const tNav = useTranslations("Navigation");
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHash = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const hash = href.split("#")[1];
      if (!hash) return;

      const target = document.getElementById(hash);
      if (!target) return; // Let standard navigation happen if on a different page

      e.preventDefault();

      if (lenis) {
        lenis.scrollTo(target, { offset: -80 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    [lenis]
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass border-b border-white/5 py-3 shadow-lg"
          : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-brand tracking-tighter">
          Codiksa
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => {
            const isHash = link.href.includes("#");
            const isActive = isHash
              ? false
              : pathname === link.href;

            if (isHash) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToHash(e, link.href)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand",
                    "text-text-secondary"
                  )}
                >
                  {tNav(link.name.toLowerCase())}
                </a>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand",
                  isActive ? "text-brand" : "text-text-secondary"
                )}
              >
                {tNav(link.name.toLowerCase())}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button className="hidden md:inline-flex" asChild>
            <Link href="/#contact" onClick={(e) => scrollToHash(e, "/#contact")}>
              {t("cta_start")}
            </Link>
          </Button>
          <button
            className="md:hidden text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-surface-muted overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              {NAVIGATION_LINKS.map((link) => {
                const isHash = link.href.includes("#");

                if (isHash) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        scrollToHash(e, link.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-lg font-medium py-2 text-text-secondary hover:text-brand transition-colors"
                    >
                      {tNav(link.name.toLowerCase())}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-lg font-medium py-2",
                      pathname === link.href ? "text-brand" : "text-text-secondary"
                    )}
                  >
                    {tNav(link.name.toLowerCase())}
                  </Link>
                );
              })}
              <Button className="w-full mt-2" asChild>
                <Link href="/#contact" onClick={(e) => {
                  scrollToHash(e, "/#contact");
                  setIsMobileMenuOpen(false);
                }}>
                  {t("cta_start")}
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
