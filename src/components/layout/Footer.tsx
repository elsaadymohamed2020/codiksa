import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/routing";
import { NAVIGATION_LINKS } from "@/constants/navigation";
import { siteConfig } from "@/config/site";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");
  const nav = useTranslations("Navigation");

  return (
    <footer className="bg-surface border-t border-surface-muted py-16 mt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-brand">
              Codiksa
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-4 pt-2 text-text-muted">
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-text-primary">{t("company")}</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              {NAVIGATION_LINKS.filter(link => ["About", "Team", "Blog", "Contact"].includes(link.name)).map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand transition-colors">
                    {nav(link.name.toLowerCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-text-primary">{t("services")}</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              {NAVIGATION_LINKS.filter(link => ["Services", "Technologies", "Projects"].includes(link.name)).map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand transition-colors">
                    {nav(link.name.toLowerCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-text-primary">{t("newsletter")}</h4>
            <p className="text-sm text-text-secondary mb-4">
              {t("subscribe")}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t("email_placeholder")}
                className="bg-surface-subtle border border-surface-muted rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-brand text-text-primary placeholder:text-text-muted"
              />
              <button className="bg-brand hover:bg-brand-dark px-4 py-2 rounded-md transition-colors text-sm font-medium text-white">
                {t("join")}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-surface-muted flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
          <p>© {currentYear} {t("rights")}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-brand">{t("privacy")}</Link>
            <Link href="/terms" className="hover:text-brand">{t("terms")}</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
