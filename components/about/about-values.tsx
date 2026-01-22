"use client"

import { motion } from "framer-motion"
import { SectionReveal } from "@/components/ui/section-reveal"
import { Shield, Users, Target, Award, Lightbulb, Heart } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

const values = [
  {
    id: "integrity",
    icon: Shield,
  },
  {
    id: "excellence",
    icon: Award,
  },
  {
    id: "clientFocus",
    icon: Users,
  },
  {
    id: "precision",
    icon: Target,
  },
  {
    id: "innovation",
    icon: Lightbulb,
  },
  {
    id: "commitment",
    icon: Heart,
  },
]

export function AboutValues() {
  const { t } = useI18n()

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">{t("aboutPage.values.badge")}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            {t("aboutPage.values.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("aboutPage.values.description")}
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <SectionReveal key={value.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-xl p-8 h-full hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t(`aboutPage.values.${value.id}.title`)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(`aboutPage.values.${value.id}.desc`)}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
