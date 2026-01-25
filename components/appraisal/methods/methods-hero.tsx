"use client"

import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function MethodsHero() {
  const { t } = useI18n()

  return (
    <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-appraisal/20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-appraisal/20 border border-appraisal/30 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-appraisal" />
            <span className="text-appraisal text-sm font-medium">{t("methodsPage.hero.badge")}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
            {t("methodsPage.hero.title")}
          </h1>

          <p className="text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
            {t("methodsPage.hero.description")}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
