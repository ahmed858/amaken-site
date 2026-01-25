"use client"

import { motion } from "framer-motion"
import { ArrowRight, RefreshCw, FileSearch, BarChart3, Compass, Building, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/ui/section-reveal"
import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"

const services = [
  {
    id: "restructuring",
    icon: RefreshCw,
    href: "/consulting",
  },
  {
    id: "feasibility",
    icon: FileSearch,
    href: "/consulting/feasibility",
  },
  {
    id: "market",
    icon: BarChart3,
    href: "/consulting",
  },
  {
    id: "hbu",
    icon: Compass,
    href: "/consulting/highest-best-use",
  },
  {
    id: "administrative",
    icon: Building,
    href: "/consulting",
  },
  {
    id: "strategic",
    icon: Users,
    href: "/consulting",
  },
]

export function ConsultingServices() {
  const { t } = useI18n()

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <span className="text-consulting text-sm font-semibold uppercase tracking-wider mb-4 block">
            {t("consultingServices.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            {t("consultingServices.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("consultingServices.description")}
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <SectionReveal key={service.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group bg-card border border-border rounded-xl p-8 h-full transition-all duration-300 hover:border-consulting/30 hover:shadow-lg hover:shadow-consulting/5"
              >
                <div className="w-14 h-14 bg-consulting/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-consulting/20 transition-colors">
                  <service.icon className="w-7 h-7 text-consulting" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">{t(`consultingServices.services.${service.id}.title`)}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{t(`consultingServices.services.${service.id}.description`)}</p>

                <Link href={service.href}>
                  <Button
                    variant="ghost"
                    className="group/btn p-0 h-auto font-medium text-foreground hover:bg-transparent hover:text-consulting"
                  >
                    {t("common.learnMore")}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
