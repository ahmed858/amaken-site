"use client"

import { motion } from "framer-motion"
import { Phone, Mail, Clock } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function ContactHero() {
  const { t } = useI18n()

  return (
    <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
              {t("contactPage.hero.title")}
            </h1>
            <p className="text-lg text-primary-foreground/70 mb-8 leading-relaxed">
              {t("contactPage.hero.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                icon: Phone,
                label: t("contactPage.hero.stats.phone"),
                value: "920003401",
                href: "tel:920003401",
              },
              {
                icon: Mail,
                label: t("contactPage.hero.stats.email"),
                value: "info@amaken.com.sa",
                href: "mailto:info@amaken.com.sa",
              },
              {
                icon: Clock,
                label: t("contactPage.hero.stats.hours"),
                value: t("contactPage.hero.stats.hoursValue"),
                href: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-4"
              >
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-primary-foreground font-medium hover:underline transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-primary-foreground font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
