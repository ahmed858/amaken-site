"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, MapPin, Bed, Calendar, Building } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { ProjectData } from "@/types/ProjectData"

const categories = [
    { id: "all", label: "All", labelAr: "الكل" },
    { id: "residential_sale", label: "Residential for Sale", labelAr: "وحدات سكنية للبيع" },
    { id: "residential_rent", label: "Residential for Rent", labelAr: "وحدات سكنية للايجار" },
    { id: "commercial", label: "Commercial", labelAr: "وحدات تجارية" },
]

interface ProjectsSectionProps {
    projects?: ProjectData[]
}

export function ProjectsSection({ projects: initialProjects = [] }: ProjectsSectionProps) {
    const { locale, direction } = useI18n()
    const isRTL = direction === "rtl"
    const [activeCategory, setActiveCategory] = React.useState("all")
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        direction: isRTL ? "rtl" : "ltr"
    })

    // Filter projects
    const filteredProjects = React.useMemo(() => {
        if (activeCategory === "all") return initialProjects
        return initialProjects.filter(p => p.type === activeCategory)
    }, [activeCategory, initialProjects])

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    if (!initialProjects || initialProjects.length === 0) {
        return null; // Or show a message
    }

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#636363] mb-8">
                        {locale === "ar" ? "المشاريع" : "Projects"}
                    </h2>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={cn(
                                    "px-6 py-2 rounded-none border transition-all duration-300 text-sm font-medium",
                                    activeCategory === cat.id
                                        ? "bg-[#A28B67] text-white border-[#A28B67]"
                                        : "bg-white text-gray-500 border-gray-200 hover:border-[#A28B67] hover:text-[#A28B67]"
                                )}
                                style={activeCategory === cat.id ? { backgroundColor: "#A28B67", borderColor: "#A28B67" } : {}}
                            >
                                {locale === "ar" ? cat.labelAr : cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative group">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4 touch-pan-y">
                            {filteredProjects.map((project) => (
                                <div key={project.id} className="pl-4 min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                                    <a href={project.id === "ramlia-123" ? "/group/ramlia" : `/group/projects/${project.slug}`} className="block h-full">
                                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full border border-gray-100 group/card">
                                            {/* Image */}
                                            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                                {project.images && project.images[0] ? (
                                                    <img
                                                        src={project.images[0]}
                                                        alt={locale === "ar" ? project.name.ar : project.name.en}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                                                        <Building className="w-12 h-12 opacity-50" />
                                                    </div>
                                                )}

                                                <div className="absolute top-4 right-4 z-10">
                                                    <span className="bg-[#A28B67] text-white text-xs font-bold px-3 py-1 rounded-sm">
                                                        {locale === "ar" ? project.statusAr : project.status}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 text-center">
                                                <h3 className="text-xl font-bold text-[#1e2c3a] mb-2">
                                                    {locale === "ar" ? project.name.ar : project.name.en}
                                                </h3>

                                                <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-6">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{locale === "ar" ? project.location.ar : project.location.en}</span>
                                                </div>

                                                <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-100 text-sm text-gray-500">
                                                    <div className="flex items-center gap-1.5">
                                                        <Building className="w-4 h-4" />
                                                        <span>
                                                            {project.totalUnits} {locale === "ar" ? "الوحدات" : "Units"}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>
                                                            {locale === "ar" ? "سنة التنفيذ" : "Year"}: {project.year}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={scrollPrev}
                        className={`absolute top-1/2 -left-4 lg:-left-12 -translate-y-1/2 w-10 h-10 rounded-full bg-[#A28B67] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 disabled:opacity-50 z-10 ${isRTL ? "right-auto left-auto -right-12" : ""}`}
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className={`absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 w-10 h-10 rounded-full bg-[#A28B67] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 disabled:opacity-50 z-10 ${isRTL ? "left-auto right-auto -left-12" : ""}`}
                    >
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                {/* View More Button */}
                <div className="flex justify-center mt-12">
                    <Button
                        asChild
                        className="bg-[#A28B67] hover:bg-[#8e7a5a] text-white px-8 py-6 h-auto text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        <a href="/group/projects">
                            {locale === "ar" ? "المزيد من المشاريع" : "More Projects"}
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
