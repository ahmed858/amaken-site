"use client"

import { ParallaxSection } from "@/components/ui/parallax-section"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { SectionReveal } from "@/components/ui/section-reveal"
import { useI18n } from "@/lib/i18n/context"

const stats = [
  { key: "years", value: 15, suffix: "+" },
  { key: "clients", value: 2500, suffix: "+" },
  { key: "projects", value: 10000, suffix: "+" },
  { key: "coverage", value: 13, suffix: "" },
]

export function StatsSection() {
  const { t } = useI18n()

  return (
    <ParallaxSection className="py-24 lg:py-32" backgroundImage="/modern-office-building-exterior-saudi-arabia.jpg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <SectionReveal key={stat.key} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2.5} />
                </div>
                <p className="text-primary-foreground/70 text-sm sm:text-base uppercase tracking-wider">
                  {t(`stats.${stat.key}`)}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </ParallaxSection>
  )
}
