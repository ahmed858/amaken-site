"use client"
import { useI18n } from "@/lib/i18n/context"

export default function WhyUsSection() {
    const { t } = useI18n();

    const items = [
        {
            title: t("appraisal.home.whyUs.items.0.title"),
            desc: t("appraisal.home.whyUs.items.0.desc")
        },
        {
            title: t("appraisal.home.whyUs.items.1.title"),
            desc: t("appraisal.home.whyUs.items.1.desc")
        },
        {
            title: t("appraisal.home.whyUs.items.2.title"),
            desc: t("appraisal.home.whyUs.items.2.desc")
        },
        {
            title: t("appraisal.home.whyUs.items.3.title"),
            desc: t("appraisal.home.whyUs.items.3.desc")
        }
    ]

    return (
        <section className="bg-[#041534] py-24">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                <div className="space-y-8">

                    <h2 className="text-4xl font-extrabold text-white">
                        {t("appraisal.home.whyUs.title")}
                    </h2>

                    <p className="text-slate-300 text-lg">
                        {t("appraisal.home.whyUs.description")}
                    </p>

                    <div className="grid grid-cols-2 gap-6">

                        {items.map((item, i) => (
                            <div
                                key={i}
                                className="p-6 bg-[#1b2a4a] rounded-2xl border border-white/10"
                            >
                                <h4 className="text-white font-bold mb-2">
                                    {item.title}
                                </h4>

                                <p className="text-slate-300 text-xs">
                                    {item.desc}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>

                <div style={{ color: "white" }}>
                    <img
                        src="#"
                        className="rounded-3xl shadow-2xl"
                        alt="why us photo"
                    />
                </div>

            </div>
        </section>
    )
}