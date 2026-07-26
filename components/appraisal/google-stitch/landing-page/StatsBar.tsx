"use client"
import { useI18n } from "@/lib/i18n/context"

export default function StatsBar() {
    const { t } = useI18n();

    const stats = [
        { value: "+100k", label: t("appraisal.home.stats.reports") },
        { value: "+10", label: t("appraisal.home.stats.years") },
        { value: "+50k", label: t("appraisal.home.stats.clients") },
        { value: "+3", label: t("appraisal.home.stats.cities") }
    ]

    return (
        <div className="relative z-20 -mt-12 container mx-auto px-6">
            <div className="bg-[#006A66] p-8 rounded-2xl shadow-2xl flex flex-wrap justify-around items-center gap-8">

                {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                        <p className="text-4xl font-extrabold text-white">{stat.value}</p>
                        <p className="text-white/80 text-sm font-medium mt-1">{stat.label}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}