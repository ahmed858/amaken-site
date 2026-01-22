"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function AboutHero() {
  const { t } = useI18n()

  return (
    <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=800&width=1920&query=modern corporate office building Saudi Arabia)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6">
            <Calendar className="w-4 h-4 text-primary-foreground" />
            <span className="text-primary-foreground/80 text-sm font-medium">{t("aboutPage.hero.badge")}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
            {t("aboutPage.hero.title")}
          </h1>

          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            {t("aboutPage.hero.description")}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
