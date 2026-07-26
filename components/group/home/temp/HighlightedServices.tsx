"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"
import { ArrowUpRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Define the services structure
const services = [
  {
    id: "s1",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
    href: "/real-estate/marketing"
  },
  {
    id: "s2",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
    href: "/auctions"
  },
  {
    id: "s3",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-500",
    href: "/appraisal"
  },
  {
    id: "s4",
    color: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-500",
    href: "/consulting"
  }
]

export function HighlightedServices() {
  const { t, locale } = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Smooth out the progress value
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100
  })

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        {/* Background Elements */}
        <div className="absolute inset-0 w-full h-full bg-grid-white/[0.02] -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full h-full flex flex-col justify-center">

          {/* Header */}
          <motion.div
            style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
            className="absolute top-24 left-0 w-full text-center z-20 pointer-events-none"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              {t("common.brandName")}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold font-serif mb-4">
              {t("highlightedServices.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("highlightedServices.subtitle")}
            </p>
          </motion.div>


          {/* Cards Stack */}
          <div className="relative w-full max-w-5xl mx-auto h-[60vh] flex items-center justify-center">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                progress={smoothProgress}
                total={services.length}
                t={t}
                isRTL={locale === 'ar'}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  progress,
  total,
  t,
  isRTL
}: {
  service: typeof services[0],
  index: number,
  progress: MotionValue<number>,
  total: number,
  t: any,
  isRTL: boolean
}) {
  // Calculate range for this card's activation
  // Dividing the total scroll space into segments for each card
  const step = 1 / total
  const start = index * step
  const end = start + step

  // Animations based on scroll progress
  const opacity = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0]
  )

  const scale = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [0.8, 1, 1, 0.8]
  )

  const y = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [100, 0, 0, -100]
  )

  // Z-index trick: currently active card is on top
  const zIndex = useTransform(progress, (v) => {
    if (v >= start && v < end) return 10
    return index
  })

  // Only render if within range (optimization)
  const isVisible = useTransform(progress, (v) => v >= start - 0.1 && v <= end + 0.1)

  return (
    <motion.div
      style={{
        opacity,
        scale,
        y,
        zIndex,
        display: useTransform(isVisible, (v) => (v ? "flex" : "hidden"))
      }}
      className="absolute inset-0 w-full h-full flex items-center justify-center p-4 md:p-8"
    >
      <div className={cn(
        "relative w-full max-w-4xl bg-card/10 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl overflow-hidden shadow-2xl glass-card flex flex-col md:flex-row gap-8 md:gap-16 items-center",
        // Gradient border effect
        "after:absolute after:inset-0 after:rounded-3xl after:p-[1px] after:bg-gradient-to-br after:from-white/20 after:to-transparent after:-z-10 after:content-['']"
      )}>

        {/* Decorative Background Blob */}
        <div className={cn("absolute top-0 right-0 w-64 h-64 bg-gradient-to-br opacity-20 blur-3xl -z-10 rounded-full", service.color)} />

        {/* Number */}
        <div className="hidden md:flex flex-col items-center justify-center shrink-0">
          <span className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent font-serif leading-none">
            0{index + 1}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              {t(`highlightedServices.services.${service.id}.title`)}
            </h3>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              {t(`highlightedServices.services.${service.id}.description`)}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href={service.href}
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-105 group bg-primary text-primary-foreground shadow-lg hover:shadow-primary/25"
              )}
            >
              <span>{t(`highlightedServices.services.${service.id}.cta`)}</span>
              {isRTL ? <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> : <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
