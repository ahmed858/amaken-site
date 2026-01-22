"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, BarChart3, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/ui/section-reveal";
import { useI18n } from "@/lib/i18n/context";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    key: "realEstate",
    icon: Home,
    href: "/real-estate",
    color: "bg-realestate",
    hoverBorder: "hover:border-realestate/50",
  },
  {
    key: "appraisal",
    icon: Building2,
    href: "/appraisal",
    color: "bg-appraisal",
    hoverBorder: "hover:border-appraisal/50",
  },
  {
    key: "consulting",
    icon: BarChart3,
    href: "/consulting",
    color: "bg-consulting",
    hoverBorder: "hover:border-consulting/50",
  },
];

export function ServicesSection() {
  const { t } = useI18n();

  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <SectionReveal key={service.key} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "group relative bg-card border border-border rounded-xl p-8 h-full transition-all duration-300",
                  service.hoverBorder,
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "w-14 h-14 rounded-lg flex items-center justify-center mb-6",
                    service.color,
                  )}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t(`services.${service.key}.description`)}
                </p>

                {/* CTA */}
                <Link href={service.href}>
                  <Button
                    variant="ghost"
                    className="group/btn p-0 h-auto font-medium text-foreground hover:bg-transparent"
                  >
                    {t(`services.${service.key}.cta`)}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>

                {/* Decorative Corner */}
                <div
                  className={cn(
                    "absolute top-0 right-0 w-20 h-20 opacity-5 transition-opacity group-hover:opacity-10",
                    service.color,
                  )}
                  style={{
                    clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                    borderRadius: "0 0.75rem 0 0",
                  }}
                />
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
