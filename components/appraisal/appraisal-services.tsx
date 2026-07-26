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

import { ModernServiceCard } from "@/components/ui/modern-service-card"

export function AppraisalServices() {
  const { t, locale } = useI18n()

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <SectionReveal className="mb-16 text-right">
          <div className="flex flex-col gap-4">
            <span className="text-appraisal text-lg font-bold uppercase tracking-widest">
              {t("appraisalServices.badge")}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t("appraisalServices.title")}
            </h2>
            <p className="text-gray-500 text-xl max-w-3xl">
              {t("appraisalServices.description")}
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {servicesKeys.map((service, index) => (
            <ModernServiceCard
              key={service.key}
              title={t(`appraisalServices.services.${service.key}.title`)}
              description={t(`appraisalServices.services.${service.key}.description`)}
              image={service.image}
              className={index % 2 !== 0 ? "lg:mt-12" : ""}
            />
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">


        <div className="mt-24 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            {t("appraisalServices.ctaHelper.title")}
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="https://wa.me/966920003401" target="_blank">
              <Button size="lg" className="bg-appraisal hover:bg-appraisal/80 text-white min-w-[260px] h-14 text-lg rounded-2xl shadow-xl  transition-all hover:scale-105">
                {t("appraisalServices.ctaHelper.whatsapp")}
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-100 min-w-[260px] h-14 text-lg rounded-2xl shadow-sm transition-all hover:scale-105">
                {t("appraisalServices.ctaHelper.viewAll")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
