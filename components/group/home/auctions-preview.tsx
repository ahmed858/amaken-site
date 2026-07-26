"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/ui/section-reveal"
import { useI18n } from "@/lib/i18n/context"
import Link from "next/link"
import { Auction } from "@/types/auction"
import { AuctionCard } from "@/components/group/auctions/auction-card"

export function AuctionsPreview() {
  const { t, direction } = useI18n()
  const isRTL = direction === "rtl"
  const [auctions, setAuctions] = useState<Auction[]>([])
  const [loading, setLoading] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function fetchAuctions() {
      try {
        const response = await fetch("/api/group/auctions")
        const result = await response.json()
        if (response.ok) {
          setAuctions(result.data || [])
        }
      } catch (error) {
        console.error("Failed to fetch auctions:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchAuctions()
  }, [])

  const scroll = (slideDirection: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      // In RTL, scrollLeft is negative or handled differently by browsers
      // A safe way is to determine scroll amount
      const scrollAmount = clientWidth * 0.8
      const scrollTo = slideDirection === (isRTL ? "right" : "left")
        ? scrollLeft - scrollAmount
        : scrollLeft + scrollAmount

      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth"
      })
    }
  }

  if (!loading && auctions.length === 0) return null

  return (
    <section className="py-24 lg:py-32 bg-[#faf7f2]">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-2">
              {t("auctions.previewTitle")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("auctions.previewSubtitle")}
            </p>
          </div>
          <Link href="/group/auctions">
            <Button variant="outline" className="gap-2 bg-transparent border-neutral-300">
              {t("common.viewAll")}
              <ArrowRight className="w-4 h-4 ml-2 rtl:rotate-180" />
            </Button>
          </Link>
        </SectionReveal>

        <div className="relative group">
          <div
            ref={scrollRef}
            className="flex gap-6 lg:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {loading ? (
              // Skeleton loaders
              [...Array(3)].map((_, i) => (
                <div key={i} className="min-w-[300px] md:min-w-[350px] lg:min-w-[400px] h-[500px] bg-neutral-200 animate-pulse rounded-2xl" />
              ))
            ) : (
              auctions.map((auction, index) => (
                <div key={auction.name} className="min-w-[300px] md:min-w-[350px] lg:min-w-[400px] snap-start">
                  <AuctionCard auction={auction} index={index} />
                </div>
              ))
            )}
          </div>

          {/* Navigation Buttons - Adjusted to match Projects Section */}
          <button
            onClick={() => scroll("left")}
            className={`absolute top-[40%] -left-4 lg:-left-6 -translate-y-1/2 w-12 h-12 rounded-full bg-[#A28B67] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 disabled:opacity-50 z-10 ${isRTL ? "right-auto left-auto -right-6" : ""}`}
            aria-label="Previous auctions"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className={`absolute top-[40%] -right-4 lg:-right-6 -translate-y-1/2 w-12 h-12 rounded-full bg-[#A28B67] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 disabled:opacity-50 z-10 ${isRTL ? "left-auto right-auto -left-6" : ""}`}
            aria-label="Next auctions"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
