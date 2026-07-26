"use client";

import { useI18n } from "@/lib/i18n/context";
import { PageBreadcrumb } from "@/components/layout/BreadcrumbSection";
import { SectionReveal } from "@/components/ui/section-reveal";
import { motion } from "framer-motion";
import {
    Megaphone,
    Gavel,
    Building2,
    ShieldCheck,
    CheckCircle2,
    ArrowRight,
    LucideIcon
} from "lucide-react";
import { CTASection } from "@/components/group/home/cta-section";

interface ServiceItem {
    id: string;
    icon: LucideIcon;
    key: "marketing" | "auctions" | "management" | "tawjeed";
}

const services: ServiceItem[] = [
    {
        id: "marketing",
        icon: Megaphone,
        key: "marketing",
    },
    {
        id: "auctions",
        icon: Gavel,
        key: "auctions",
    },
    {
        id: "management",
        icon: Building2,
        key: "management",
    },
    {
        id: "tawjeed",
        icon: ShieldCheck,
        key: "tawjeed",
    },
];

export default function GroupServicesPage() {
    const { t, locale, direction, dictionary } = useI18n();
    const isRTL = direction === "rtl";
    const groupColor = "#A28B67";

    const breadcrumbItems = [
        { label: locale === "ar" ? "الرئيسية" : "Home", href: "/group" },
        { label: locale === "ar" ? "خدماتنا" : "Our Services" },
    ];

    const tPage = (key: string) => t(`groupServices.${key}`);

    return (
        <div className="min-h-screen bg-[#faf7f2]">
            <PageBreadcrumb
                title={tPage("hero.title")}
                items={breadcrumbItems}
            />

            <main className="py-20 lg:py-32">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Intro Section */}
                    <SectionReveal className="max-w-4xl mb-24">
                        <span
                            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6"
                            style={{ backgroundColor: `${groupColor}20`, color: groupColor }}
                        >
                            {tPage("hero.badge")}
                        </span>
                        <h2 className="text-2xl md:text-4xl   text-zinc-900 mb-8 leading-tight">
                            {tPage("hero.description")}
                        </h2>
                        <div className="w-24 h-1.5 rounded-full" style={{ backgroundColor: groupColor }} />
                    </SectionReveal>

                    {/* Services Detailed Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {services.map((service, index) => (
                            <SectionReveal key={service.id} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-100 hover:shadow-xl transition-all duration-500 h-full flex flex-col"
                                >
                                    <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                                        <div
                                            className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0"
                                            style={{ backgroundColor: `${groupColor}10` }}
                                        >
                                            <service.icon className="w-10 h-10" style={{ color: groupColor }} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
                                                {tPage(`${service.key}.title`)}
                                            </h3>
                                            <p className="text-zinc-600 leading-relaxed text-lg">
                                                {tPage(`${service.key}.description`)}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
                                        {(dictionary.groupServices?.[service.key]?.features as string[] || []).map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: groupColor }} />
                                                <span className="text-zinc-700 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* <div className="mt-12 flex items-center justify-between pt-8 border-t border-zinc-50">
                                        <motion.button
                                            whileHover={{ x: isRTL ? -10 : 10 }}
                                            className="inline-flex items-center gap-2 font-bold transition-colors"
                                            style={{ color: groupColor }}
                                        >
                                            <span>{locale === "ar" ? "اكتشف المزيد" : "Learn More"}</span>
                                            <ArrowRight className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
                                        </motion.button>
                                        <div className="text-zinc-400 text-sm font-medium">0{index + 1}</div>
                                    </div> */}
                                </motion.div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </main>

            <CTASection />
        </div>
    );
}
