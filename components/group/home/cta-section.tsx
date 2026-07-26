"use client"

import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/ui/section-reveal"
import { useI18n } from "@/lib/i18n/context"
import Link from "next/link"
import { useState } from "react"
import { InterestModal } from "@/components/group/InterestModal"

export function CTASection() {
  const { t } = useI18n()
  const groupColor = "#A28B67"
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="py-24 lg:py-32 bg-[#faf7f2]">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal>
          <div
            className="rounded-2xl p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl border border-gray-100 bg-white"
            style={{
              backgroundColor: '#ffffff',
              // backgroundImage: 'linear-gradient(45deg, #fafafa 25%, transparent 25%), linear-gradient(-45deg, #fafafa 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #fafafa 75%), linear-gradient(-45deg, transparent 75%, #fafafa 75%)',
              backgroundSize: '40px 40px',
              backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
            }}
          >
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#333] mb-6">
                {t("groupCTA.title")}
              </h2>

              <h3 className="text-xl font-semibold mb-8 text-gray-700">
                {t("groupCTA.subtitle")}
              </h3>

              <p className="text-gray-500 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
                {t("groupCTA.description")}
              </p>

              <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 max-w-5xl mx-auto">
                <Link href="/group/services" className="flex-1">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full text-[#A28B67] border-[#A28B67] hover:bg-[#A28B67] hover:text-white transition-all font-bold text-lg py-8 rounded-lg"
                  >
                    {t("nav.services")}
                  </Button>
                </Link>
                <Link href="/group/contact" className="flex-1">
                  <Button
                    size="lg"
                    className="w-full text-white hover:opacity-90 transition-all font-bold text-lg py-8 rounded-lg"
                    style={{ backgroundColor: groupColor }}
                  >
                    {t("common.contactUs")}
                  </Button>
                </Link>
                <div className="flex-1">
                  <Button
                    onClick={() => setModalOpen(true)}
                    size="lg"
                    className="w-full bg-[#333] text-white hover:bg-black transition-all font-bold text-lg py-8 rounded-lg"
                  >
                    {t("groupCTA.title")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>

      <InterestModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  )
}

