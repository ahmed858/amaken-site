"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"

export function AppraisalHero() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=1080&width=1920&query=professional property valuation appraisal modern office)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-appraisal/20" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-appraisal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-appraisal/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-appraisal/20 border border-appraisal/30 rounded-full mb-6"
            >
              <Shield className="w-4 h-4 text-appraisal" />
              <span className="text-appraisal text-sm font-medium">{t("appraisalPage.hero.badge")}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6 leading-tight"
            >
              Amaken <span className="text-appraisal">{t("appraisalPage.hero.title")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-primary-foreground/70 mb-8 max-w-lg leading-relaxed"
            >
              {t("appraisalPage.hero.description")}
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {[
                t("appraisalPage.hero.badges.taqeem"),
                t("appraisalPage.hero.badges.rics"),
                t("appraisalPage.hero.badges.ivs")
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                  <CheckCircle className="w-4 h-4 text-appraisal" />
                  <span>{badge}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/portal/appraisals/new">
                <Button size="lg" className="bg-appraisal hover:bg-appraisal/90 text-white gap-2 px-8">
                  {t("appraisalPage.hero.cta")}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/appraisal/methods">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 bg-transparent"
                >
                  {t("appraisalPage.hero.secondaryCta")}
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { label: t("appraisalPage.hero.stats.appraisers"), value: "10+", icon: Award },
              { label: t("appraisalPage.hero.stats.reports"), value: "40,000+" },
              { label: t("appraisalPage.hero.stats.banks"), value: "6+" },
              { label: t("appraisalPage.hero.stats.years"), value: "15" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-appraisal mb-2">{stat.value}</div>
                <div className="text-primary-foreground/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
