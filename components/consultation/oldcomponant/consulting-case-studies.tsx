"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"

const caseStudies = [
  {
    id: "retail",
    image: "/retail-store-restructuring-consultation.jpg",
  },
  {
    id: "industrial",
    image: "/industrial-complex-feasibility-study.jpg",
  },
  {
    id: "hotel",
    image: "/hotel-development-market-analysis.jpg",
  },
]

export function ConsultingCaseStudies() {
  const { t } = useI18n()

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-consulting text-sm font-semibold uppercase tracking-wider mb-4 block">
              {t("consultingPage.caseStudies.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">{t("consultingPage.caseStudies.title")}</h2>
          </div>
          <Link
            href="/consulting"
            className="text-consulting hover:text-consulting/80 flex items-center gap-2 font-medium"
          >
            {t("consultingPage.caseStudies.viewAll")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <SectionReveal key={study.id} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group bg-card border border-border rounded-xl overflow-hidden h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={t(`consultingPage.caseStudies.items.${study.id}.title`)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-consulting text-white">{t(`consultingPage.caseStudies.items.${study.id}.industry`)}</Badge>
                </div>

                <div className="p-6">
                  <div className="text-2xl font-bold text-consulting mb-2">{t(`consultingPage.caseStudies.items.${study.id}.result`)}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{t(`consultingPage.caseStudies.items.${study.id}.title`)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(`consultingPage.caseStudies.items.${study.id}.description`)}</p>
                </div>
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
