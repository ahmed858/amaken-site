"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { motion } from "framer-motion"
import { Gavel, Megaphone, Settings, Ruler, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/ui/section-reveal"
import { useI18n } from "@/lib/i18n/context"
import { cn } from "@/lib/utils"

const services = [
    {
        key: "auctions",
        icon: Gavel,
        color: "bg-amber-500",
        image: "/modern-auction-hall-saudi-arabia.jpg",
    },
    {
        key: "reMarketing",
        icon: Megaphone,
        color: "bg-blue-500",
        image: "/real-estate-marketing-digital-billboard.jpg",
    },
    {
        key: "propertyManagement",
        icon: Settings,
        color: "bg-emerald-500",
        image: "/luxury-apartment-complex-riyadh.jpg",
    },
    {
        key: "reValuation",
        icon: Ruler,
        color: "bg-rose-500",
        image: "/professional-appraisal-process-blueprint.jpg",
    },
]

export function ServicesSlider() {
    const { t } = useI18n()
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        loop: true,
        skipSnaps: false,
    })

    const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    return (
        <section className="py-24 lg:py-32 bg-secondary/10 overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
                            {t("servicesSlider.title")}
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            {t("servicesSlider.subtitle")}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={scrollPrev}
                            className="rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={scrollNext}
                            className="rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </div>
                </SectionReveal>

                <div className="overflow-visible" ref={emblaRef}>
                    <div className="flex -ml-4 lg:-ml-8">
                        {services.map((service, index) => (
                            <div key={service.key} className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] pl-4 lg:pl-8">
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="group relative h-[450px] rounded-2xl overflow-hidden shadow-lg border border-border bg-card"
                                >
                                    {/* Background Image */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={service.image}
                                            alt={service.key}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <div className={cn(
                                            "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-6",
                                            service.color
                                        )}>
                                            <service.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3">
                                            {t(`services.${service.key}.title`) || service.key.replace(/([A-Z])/g, ' $1').trim()}
                                        </h3>
                                        <p className="text-white/70 mb-6 line-clamp-2 transform transition-all group-hover:text-white">
                                            {t(`services.${service.key}.description`) || "Expert solutions provided by Amaken International Group professionals."}
                                        </p>
                                        <Button
                                            variant="link"
                                            className="text-white p-0 h-auto w-fit group/btn hover:text-white"
                                        >
                                            <span className="mr-2">{t("common.learnMore")}</span>
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                                        </Button>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
