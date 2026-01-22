"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionReveal } from "@/components/ui/section-reveal"
import { useI18n } from "@/lib/i18n/context"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Mock auction data - will be replaced with ERPNext data
const mockAuctions = [
  {
    id: "1",
    title: "Commercial Building - Al Olaya District",
    location: "Riyadh",
    date: "2026-02-15",
    time: "10:00 AM",
    type: "online",
    status: "upcoming",
    image: "/commercial-building-riyadh-saudi-arabia.jpg",
  },
  {
    id: "2",
    title: "Industrial Equipment Lot",
    location: "Jeddah",
    date: "2026-02-20",
    time: "2:00 PM",
    type: "onsite",
    status: "upcoming",
    image: "/industrial-machinery-equipment-auction.jpg",
  },
  {
    id: "3",
    title: "Residential Villa - Al Rabwah",
    location: "Riyadh",
    date: "2026-02-25",
    time: "11:00 AM",
    type: "hybrid",
    status: "upcoming",
    image: "/luxury-villa-residential-property-saudi-arabia.jpg",
  },
]

export function AuctionsPreview() {
  const { t } = useI18n()

  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
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
          <Link href="/auctions">
            <Button variant="outline" className="gap-2 bg-transparent">
              {t("common.viewAll")}
              <ArrowRight className="w-4 h-4 ml-2 rtl:rotate-180" />
            </Button>
          </Link>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {mockAuctions.map((auction, index) => (
            <SectionReveal key={auction.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group bg-card border border-border rounded-xl overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={auction.image || "/placeholder.svg"}
                    alt={auction.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge
                    className={cn(
                      "absolute top-4 left-4",
                      auction.type === "online" && "bg-appraisal",
                      auction.type === "onsite" && "bg-consulting",
                      auction.type === "hybrid" && "bg-realestate",
                    )}
                  >
                    {t(`auctions.types.${auction.type}`)}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-3 line-clamp-2">{auction.title}</h3>

                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{auction.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(auction.date).toLocaleDateString(t("nav.language") === "English" ? "ar-SA" : "en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{auction.time}</span>
                    </div>
                  </div>

                  <Link href={`/auctions/${auction.id}`}>
                    <Button variant="outline" className="w-full bg-transparent">
                      {t("auctions.viewDetails")}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
