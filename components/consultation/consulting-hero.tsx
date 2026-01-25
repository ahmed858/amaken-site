"use client"

import { motion } from "framer-motion"
import { ArrowRight, Lightbulb, Target, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"

export function ConsultingHero() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=1080&width=1920&query=professional business consulting strategy meeting boardroom)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-consulting/20" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-consulting/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-consulting/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-consulting/20 border border-consulting/30 rounded-full mb-6"
            >
              <Lightbulb className="w-4 h-4 text-consulting" />
              <span className="text-consulting text-sm font-medium">{t("consultingPage.hero.badge")}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6 leading-tight"
            >
              Amaken <span className="text-consulting">{t("consultingPage.hero.title")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-primary-foreground/70 mb-8 max-w-lg leading-relaxed"
            >
              {t("consultingPage.hero.description")}
            </motion.p>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-6 mb-8"
            >
              {[
                { icon: Target, text: t("consultingPage.hero.points.planning") },
                { icon: TrendingUp, text: t("consultingPage.hero.points.growth") },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                  <item.icon className="w-4 h-4 text-consulting" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/portal/consultations/new">
                <Button size="lg" className="bg-consulting hover:bg-consulting/90 text-white gap-2 px-8">
                  {t("consultingPage.hero.cta")}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/consulting/feasibility">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 bg-transparent"
                >
                  {t("consultingPage.hero.secondaryCta")}
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
              { label: t("consultingPage.hero.stats.projects"), value: "500+" },
              { label: t("consultingPage.hero.stats.satisfaction"), value: "98%" },
              { label: t("consultingPage.hero.stats.industries"), value: "20+" },
              { label: t("consultingPage.hero.stats.consultants"), value: "30+" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-consulting mb-2">{stat.value}</div>
                <div className="text-primary-foreground/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
