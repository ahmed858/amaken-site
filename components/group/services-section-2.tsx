"use client";

import { motion } from "framer-motion";
import { Megaphone, Gavel, Building2, ShieldCheck, ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { cn } from "@/lib/utils";
import Link from "next/link";

const services = [
    {
        id: "marketing",
        title: "التسويق العقاري",
        description: "نقدم حلول تسويقية مبتكرة لضمان وصول عقارك للشريحة المستهدفة بكفاءة عالية.",
        icon: Megaphone,
    },
    {
        id: "auctions",
        title: "المزادات",
        description: "إدارة وتنظيم المزادات العلنية والإلكترونية باحترافية تضمن أعلى العوائد.",
        icon: Gavel,
    },
    {
        id: "management",
        title: "إدارة الأملاك",
        description: "خدمات شاملة لإدارة وتطوير الأصول العقارية والحفاظ على قيمتها السوقية.",
        icon: Building2,
    },
    {
        id: "tawjeed",
        title: "توجيد",
        description: "منصة متخصصة في توثيق وحوكمة العمليات العقارية لضمان الشفافية والأمان.",
        icon: ShieldCheck,
    },
];

export function ServicesSection2() {
    const groupColor = "#A28B67";

    return (
        <section className="py-24 lg:py-32 bg-[#faf7f2]">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionReveal className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 text-[#636363]">
                        خدماتنا
                    </h2>
                    <div
                        className="w-24 h-1 mx-auto mb-6"
                        style={{ backgroundColor: groupColor }}
                    />
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <SectionReveal key={index} delay={index * 0.1}>
                            <Link href={`/group/services/${service.id}`}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden flex flex-col items-center text-center h-full border border-gray-100"
                                >
                                    {/* Background Hover Effect */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                                        style={{ backgroundColor: groupColor }}
                                    />

                                    <div className="relative z-10 flex flex-col items-center h-full">
                                        {/* Icon Container */}
                                        <div
                                            className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500 group-hover:bg-white/20"
                                            style={{ backgroundColor: "#fdf8ee" }}
                                        >
                                            <service.icon
                                                className="w-8 h-8 transition-colors duration-500 group-hover:text-white"
                                                style={{ color: groupColor }}
                                            />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl font-bold mb-4 transition-colors duration-500 group-hover:text-white text-[#636363]">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-500 mb-6 leading-relaxed transition-colors duration-500 group-hover:text-white/90">
                                            {service.description}
                                        </p>

                                        <div className="mt-auto">
                                            <div className="flex items-center gap-2 font-medium transition-colors duration-500 group-hover:text-white" style={{ color: groupColor }}>
                                                <span className="group-hover:text-white">المزيد عن الخدمة</span>
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover:text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
