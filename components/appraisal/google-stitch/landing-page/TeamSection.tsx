"use client"
import { useI18n } from "@/lib/i18n/context"

export default function TeamSection() {
    const { t } = useI18n();

    const members = [
        { name: t("appraisal.home.team.members.0.name"), role: t("appraisal.home.team.members.0.role") },
        { name: t("appraisal.home.team.members.1.name"), role: t("appraisal.home.team.members.1.role") },
        { name: t("appraisal.home.team.members.2.name"), role: t("appraisal.home.team.members.2.role") },
        { name: t("appraisal.home.team.members.3.name"), role: t("appraisal.home.team.members.3.role") }
    ]

    return (
        <section className="py-24 bg-gray-100">

            <div className="container mx-auto px-6">

                <h2 className="text-4xl font-extrabold text-center text-[#041534] mb-16">
                    {t("appraisal.home.team.title")}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {members.map((m, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-lg p-6 text-center"
                        >
                            <h4 className="text-xl font-bold text-[#041534]">
                                {m.name}
                            </h4>

                            <p className="text-[#006A66] text-sm">
                                {m.role}
                            </p>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}