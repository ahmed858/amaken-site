"use client"

import { ArrowRight, MessageSquare, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/ui/section-reveal"
import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"

export function ConsultingCTA() {
  const { t } = useI18n()

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal>
          <div className="bg-gradient-to-br from-consulting to-consulting/80 rounded-2xl p-8 lg:p-16 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                {t("consultingPage.cta.title")}
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                {t("consultingPage.cta.description")}
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {[
                  { icon: MessageSquare, id: "free" },
                  { icon: Calendar, id: "flexible" },
                ].map((item) => (
                  <div key={item.id} className="flex items-center gap-2 text-white/90">
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{t(`consultingPage.cta.benefits.${item.id}`)}</span>
                  </div>
                ))}
              </div>

              <Link href="/portal/consultations/new">
                <Button size="lg" className="bg-white text-consulting hover:bg-white/90 gap-2 px-8">
                  {t("consultingPage.cta.button")}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
