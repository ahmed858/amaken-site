"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"
import { ArrowUpRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
const color = ""


const services = [
  {
    id: "s1",
    image: "/images/services/marketing.png",
    href: "/real-estate/marketing",
    color: color,
  },
  {
    id: "s2",
    image: "/images/services/auctions.png",
    href: "/auctions",
    color: color,
  },
  {
    id: "s3",
    image: "/images/services/valuation.png",
    href: "/appraisal",
    color: color
  },
  {
    id: "s4",
    image: "/images/services/consulting.png",
    href: "/consulting",
    color: color,
  }
]

export function HighlightedServices() {
  const { t, locale } = useI18n()
  const isRTL = locale === "ar"
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section ref={containerRef} className="relative py-24 lg:py-32 bg-background overflow-hidden font-sans">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[128px] -z-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-24">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6"
          >
            {t("highlightedServices.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            {t("highlightedServices.subtitle")}
          </motion.p>
        </div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white/10 hidden lg:block -translate-x-[50%]">
            <motion.div
              style={{ scaleY }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-blue-500 to-primary origin-top"
            />
          </div>

          <div className="space-y-12 lg:space-y-12">
            {services.map((service, index) => (
              <TimelineItem
                key={service.id}
                service={service}
                index={index}
                isRTL={isRTL}
                t={t}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ service, index, isRTL, t }: { service: any, index: number, isRTL: boolean, t: any }) {
  const isEven = index % 2 === 0
  const ref = useRef(null)

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-col lg:flex-row items-center",
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      {/* Content Side */}
      <div className="w-full lg:w-1/2 p-4 lg:p-6">
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={cn(
            "relative group overflow-hidden rounded-3xl bg-card/10 backdrop-blur-md border border-white/10 p-6 md:p-8 hover:bg-card/20 transition-colors duration-500 shadow-2xl",
            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:-translate-x-full group-hover:before:translate-x-full before:transition-transform before:duration-1000"
          )}
        >
          {/* Animated Glow on Hover */}
          <div className={cn(
            "absolute -inset-[1px] bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-[calc(1.5rem+1px)]",
            service.color
          )} />

          {/* Image */}
          <div className="relative    rounded-2xl overflow-hidden shadow-inner bg-muted/20">
            {/* <Image
              src={service.image}
              alt={t(`highlightedServices.services.${service.id}.title`)}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            /> */}
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" /> */}

            {/* Number Badge */}
            {/* <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              <span className="text-white text-xs font-bold font-mono tracking-tighter">
                SERVICE 0{index + 1}
              </span>
            </div> */}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors font-serif">
              {t(`highlightedServices.services.${service.id}.title`)}
            </h3>
            <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
              {t(`highlightedServices.services.${service.id}.description`)}
            </p>

            <Link
              href={service.href}
              className="group/link inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-bold shadow-[0_5px_20px_-5px_rgba(var(--primary),0.4)]"
            >
              <span className="text-lg">{t(`highlightedServices.services.${service.id}.cta`)}</span>
              {isRTL ?
                <ArrowLeft className="w-5 h-5 transition-transform group-hover/link:-translate-x-1" /> :
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              }
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Center Point */}
      <div className="absolute left-[50%] top-1/2 -translate-y-1/2 -translate-x-[50%] hidden lg:flex items-center justify-center w-12 h-12 z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-4 h-4 bg-background border-4 border-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)] z-20"
        />
        <div className="absolute w-8 h-8 bg-primary/20 rounded-full animate-ping" />
      </div>

      {/* Empty Side (For Layout) */}
      <div className="hidden lg:block w-1/2" />
    </div>
  )
}
