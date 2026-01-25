"use client"

import { motion } from "framer-motion"
import { Clock, Zap, Calendar as CalendarIcon, CheckCircle2 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n/context"

const processTypes = [
    {
        id: "normal",
        icon: CalendarIcon,
        color: "border-blue-200 bg-blue-50/50",
        iconColor: "text-blue-600",
    },
    {
        id: "urgent",
        icon: Zap,
        color: "border-amber-200 bg-amber-50/50",
        iconColor: "text-amber-600",
    },
    {
        id: "express",
        icon: Clock,
        color: "border-rose-200 bg-rose-50/50",
        iconColor: "text-rose-600",
    },
]

export function StudyProcess() {
    const { t } = useI18n()

    return (
        <section className="py-24 bg-background border-t border-border">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4">{t("studyProcess.badge")}</Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                        {t("studyProcess.title")}
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        {t("studyProcess.subtitle")}
                    </p>
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {processTypes.map((type, index) => (
                        <SectionReveal key={type.id} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -8 }}
                                className={`p-8 rounded-2xl border-2 transition-all ${type.color} h-full flex flex-col`}
                            >
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-white shadow-sm font-bold`}>
                                    <type.icon className={`w-8 h-8 ${type.iconColor}`} />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">{t(`studyProcess.${type.id}.title`)}</h3>
                                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 border-b border-border pb-4">
                                    {t(`studyProcess.${type.id}.timeframe`)}
                                </div>
                                <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                                    {t(`studyProcess.${type.id}.description`)}
                                </p>
                                <ul className="space-y-3 mt-auto">
                                    {[1, 2, 3, 4].map((i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                                            <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${type.iconColor}`} />
                                            {t(`studyProcess.${type.id}.feature${i}`)}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
