"use client"
import { useI18n } from "@/lib/i18n/context"

export default function Achievements() {
    const { t } = useI18n();

    const items = [
        { label: t("appraisal.home.achievements.items.0.label"), value: "500B+ SAR" },
        { label: t("appraisal.home.achievements.items.1.label"), value: "98%" },
        { label: t("appraisal.home.achievements.items.2.label"), value: "100%" },
        { label: t("appraisal.home.achievements.items.3.label"), value: "12" }
    ]

    return (
        <section className="py-24 bg-[#f8f9fb]">

            <div className="container mx-auto px-6">

                <h2 className="text-3xl font-extrabold text-[#041534] text-center mb-16">
                    {t("appraisal.home.achievements.title")}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-xl border-t-4 border-[#006A66] shadow-sm text-center"
                        >
                            <span className="text-sm font-bold text-gray-400 block mb-2">
                                {item.label}
                            </span>

                            <span className="text-3xl font-black text-[#041534]">
                                {item.value}
                            </span>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}