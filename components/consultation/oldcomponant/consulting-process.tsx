"use client"

import { SectionReveal } from "@/components/ui/section-reveal"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"

const steps = [
  {
    number: "01",
    id: "s1",
  },
  {
    number: "02",
    id: "s2",
  },
  {
    number: "03",
    id: "s3",
  },
  {
    number: "04",
    id: "s4",
  },
]

export function ConsultingProcess() {
  const { t } = useI18n()

  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <span className="text-consulting text-sm font-semibold uppercase tracking-wider mb-4 block">{t("consultingPage.process.badge")}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            {t("consultingPage.process.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("consultingPage.process.description")}
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <SectionReveal key={step.number} delay={index * 0.15}>
              <motion.div whileHover={{ y: -4 }} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-consulting/50 to-transparent z-0" />
                )}

                <div className="bg-card border border-border rounded-xl p-8 relative z-10">
                  <div className="text-5xl font-bold text-consulting/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t(`consultingPage.process.steps.${step.id}.title`)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(`consultingPage.process.steps.${step.id}.description`)}</p>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
