"use client"

import { SectionReveal } from "@/components/ui/section-reveal"
import { Quote } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function AboutFounder() {
  const { t } = useI18n()

  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <SectionReveal>
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="/professional-saudi-businessman-ceo-portrait.jpg"
                  alt="Khalid bin Abdulkarim Al-Jasser"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/5 rounded-2xl -z-10" />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div>
              <Quote className="w-12 h-12 text-primary/20 mb-6" />
              <blockquote className="text-2xl sm:text-3xl font-serif text-foreground mb-6 leading-relaxed">
                "{t("aboutPage.founder.quote")}"
              </blockquote>
              <div>
                <p className="text-xl font-semibold text-foreground">{t("aboutPage.founder.name")}</p>
                <p className="text-muted-foreground">{t("aboutPage.founder.role")}</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
