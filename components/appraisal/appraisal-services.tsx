"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionReveal } from "@/components/ui/section-reveal"
import { useI18n } from "@/lib/i18n/context"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const servicesKeys = [
  {
    key: "residential",
    image: "/images/appraisal/residential.png",
  },
  {
    key: "commercial",
    image: "/images/appraisal/commercial.png",
  },
  {
    key: "underConstruction",
    image: "/images/appraisal/construction.png",
  },
  {
    key: "dataAndInfo",
    image: "/images/appraisal/data.png",
  },
] as const

export function AppraisalServices() {
  const { t } = useI18n()

  return (
    <section className="py-24 lg:py-32 bg-appraisal overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="text-center mb-8">
          <span className="text-appraisal text-sm font-semibold uppercase tracking-wider mb-4 block">
            {t("appraisalServices.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            {t("appraisalServices.title")}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t("appraisalServices.description")}
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 max-w-6xl mx-auto">
          {servicesKeys.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-appraisal/10 transition-all duration-300"
            >
              <div className="aspect-[16/9] relative overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={t(`appraisalServices.services.${service.key}.title`)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-8 text-right">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-appraisal transition-colors">
                  {t(`appraisalServices.services.${service.key}.title`)}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t(`appraisalServices.services.${service.key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-8">
          {t("appraisalServices.ctaHelper.title")}
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="https://wa.me/966920003401" target="_blank">
            <Button size="lg" className="bg-[#C5A265] hover:bg-[#B08D55] text-white min-w-[240px] h-12 text-lg">
              {t("appraisalServices.ctaHelper.whatsapp")}
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg" className="bg-white hover:bg-slate-100 text-slate-900 border-none min-w-[240px] h-12 text-lg">
              {t("appraisalServices.ctaHelper.viewAll")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
