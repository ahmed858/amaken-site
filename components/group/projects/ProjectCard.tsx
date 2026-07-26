"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight, ArrowLeft } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { ProjectData } from "@/types/ProjectData";

interface ProjectCardProps {
    project: ProjectData;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    const { dictionary, locale, direction } = useI18n();
    const t = (dictionary as any).projectsPage;

    const isRTL = direction === "rtl";
    const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-zinc-100 dark:border-zinc-800"
        >
            <Link
                href={`/group/projects/${project.slug}`}
                className=" "
            >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={project.images[0]}
                        alt={project.name[locale]}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />


                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center gap-2 mb-2 text-sm font-medium text-white/90">
                            <MapPin className="w-4 h-4 text-brand-gold/300" />
                            <span>{project.location[locale]}</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <h2 className="text-3xl font-bold">{project.name[locale]}</h2>

                    <p className="text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-6">
                        {project.description[locale]}
                    </p>

                    <div className="flex items-center justify-between">
                        <div className="flex gap-4 text-sm text-zinc-500">
                            {/* Could add stats here like "Year" or "Units" if available directly on card */}
                            <div className="flex flex-col">
                                <span className="text-xs text-zinc-400 uppercase tracking-wider">{t.details.year}</span>
                                <span className="font-semibold text-zinc-700 dark:text-zinc-300">{project.year}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-zinc-400 uppercase tracking-wider">{t.details.units}</span>
                                <span className="font-semibold text-zinc-700 dark:text-zinc-300">{project.totalUnits || project.units?.length || 0}</span>
                            </div>
                        </div>



                    </div>
                </div>
            </Link>
        </motion.div >
    );
}
