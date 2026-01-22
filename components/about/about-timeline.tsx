"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SectionReveal } from "@/components/ui/section-reveal"
import { useI18n } from "@/lib/i18n/context"

const milestones = [
  {
    year: "2010",
  },
  {
    year: "2012",
  },
  {
    year: "2014",
  },
  {
    year: "2016",
  },
  {
    year: "2018",
  },
  {
    year: "2020",
  },
  {
    year: "2024",
  },
]

export function AboutTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  const { t } = useI18n()

  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"])

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">{t("aboutPage.timeline.badge")}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            {t("aboutPage.timeline.title")}
          </h2>
        </SectionReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:transform md:-translate-x-1/2">
            <motion.div style={{ height: lineHeight }} className="w-full bg-primary" />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <SectionReveal key={milestone.year} delay={index * 0.1}>
                <div className={`flex items-start gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div
                      className={`bg-card border border-border rounded-xl p-6 ${index % 2 === 0 ? "md:ml-auto" : ""} max-w-md`}
                    >
                      <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                      <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">{t(`aboutPage.timeline.milestones.${milestone.year}.title`)}</h3>
                      <p className="text-muted-foreground">{t(`aboutPage.timeline.milestones.${milestone.year}.desc`)}</p>
                    </div>
                  </div>

                  {/* Node */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 mt-6" />

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
