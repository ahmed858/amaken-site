"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];
import { useI18n } from "@/lib/i18n/context";

const footerLinks = {
  quickLinks: [
    { key: "home", href: "/" },
    { key: "about", href: "/about" },
    { key: "news", href: "/news" },
    { key: "contact", href: "/contact" },
  ],
  services: [
    { key: "appraisal", href: "/appraisal" },
    { key: "consulting", href: "/consulting" },
    { key: "realEstate", href: "/real-estate" },
    { key: "auctions", href: "/auctions" },
  ],
};

export function Footer() {
  const { t, locale } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-foreground rounded-sm flex items-center justify-center">
                <span className="text-primary font-bold text-xl">A</span>
              </div>
              <div>
                <span className="font-semibold text-xl tracking-tight">
                  {t("common.brandName")}
                </span>
                <span className="text-xs text-primary-foreground/70 block">
                  {t("common.brandSubtitle")}
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">
              {t("footer.services")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-primary-foreground/70" />
                <div>
                  <p className="text-sm text-primary-foreground/70">
                    {t("common.phoneLabel")}
                  </p>
                  <a
                    href="tel:920003401"
                    className="text-primary-foreground hover:underline"
                  >
                    {t("common.phone")}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-primary-foreground/70" />
                <div>
                  <p className="text-sm text-primary-foreground/70">
                    {t("common.emailLabel")}
                  </p>
                  <a
                    href="mailto:info@amaken.com.sa"
                    className="text-primary-foreground hover:underline"
                  >
                    {t("common.email")}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary-foreground/70" />
                <div>
                  <p className="text-sm text-primary-foreground/70">
                    {t("footer.headquarters")}
                  </p>
                  <p className="text-primary-foreground">
                    {t("footer.address")}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} {t("common.brandName")} {t("common.brandSubtitle")}. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors p-2 bg-primary-foreground/5 rounded-full"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
            >
              {t("common.privacy")}
            </Link>
            <Link
              href="/terms"
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
            >
              {t("common.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
