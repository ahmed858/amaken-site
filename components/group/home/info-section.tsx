"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ProjectData } from "@/types/ProjectData";

interface InfoSectionProps {
    className?: string;
    project?: ProjectData;
}

export function InfoSection({ className, project }: InfoSectionProps) {
    const { dictionary, locale } = useI18n();
    const t = (dictionary as any).projectsPage;
    const [submitted, setSubmitted] = useState(false);

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;

        try {
            const res = await fetch('/api/common/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    first_name: name,
                    email_id: email,
                    mobile_no: phone,
                    custom_project: project?.id || "Projects",
                }),
            });

            if (res.ok) {
                console.log("Lead created successfully");
                setSubmitted(true);
            } else {
                const err = await res.json();
                console.error("Error creating lead:", err);
            }
        } catch (error) {
            console.error("API Error:", error);
        } finally {
            setLoading(false);
        }
    };

    // Default values if no project is provided
    const title = project?.name[locale] || (locale === "ar" ? "إرشاد الخبراء في كل خطوة تخطوها" : "Expert Guidance at Every Step");
    const description = project?.description[locale] || (locale === "ar"
        ? "من أول بحث لك وحتى العرض النهائي، نحن هنا لنجعل العملية بسيطة وسلسة للغاية. فريقنا يضع خبرته بين يديك لتحقيق أهدافك بأفضل صورة ممكنة."
        : "From your first search to the final offer, we're here to make the process simple and seamless. Our team puts its expertise at your fingertips.");
    const images = project?.images && project.images.length > 0 ? project.images : ["/morning.jpg"];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <section className={cn("py-20 bg-white dark:bg-zinc-950 transition-colors duration-300", className)}>
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">

                    {/* Left Side: Image Gallery */}
                    <div className="relative w-full lg:w-1/2 order-2 lg:order-1 flex flex-col gap-4">
                        <motion.div
                            initial={{ opacity: 0, x: locale === "ar" ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[500px]"
                        >
                            {/* Main Image */}
                            <div className="w-full h-full overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-black/5 dark:ring-white/10 relative group bg-zinc-100 dark:bg-zinc-900">
                                <Image
                                    src={images[currentImageIndex]}
                                    alt={`${title} - Image ${currentImageIndex + 1}`}
                                    fill
                                    className="object-cover transition-all duration-700"
                                    priority
                                />

                                {/* Overlay Dots */}
                                {images.length > 1 && (
                                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10 flex-wrap px-4">
                                        {images.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentImageIndex(idx)}
                                                className={cn(
                                                    "h-2.5 rounded-full transition-all duration-300 shadow-sm",
                                                    currentImageIndex === idx
                                                        ? "w-6 bg-[#003B5C] dark:bg-white"
                                                        : "w-2.5 bg-white/70 hover:bg-white"
                                                )}
                                                aria-label={`Go to slide ${idx + 1}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* Thumbnails Grid */}
                        {images.length > 1 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="grid grid-cols-5 gap-2 lg:gap-3"
                            >
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={cn(
                                            "relative aspect-square overflow-hidden rounded-xl ring-1 ring-black/5 flex-shrink-0 transition-all duration-300 bg-zinc-100 dark:bg-zinc-900",
                                            currentImageIndex === idx
                                                ? "ring-2 ring-offset-2 ring-[#003B5C] dark:ring-white opacity-100"
                                                : "opacity-50 hover:opacity-100 grayscale-[30%] hover:grayscale-0"
                                        )}
                                        aria-label={`Thumbnail ${idx + 1}`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Thumbnail ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </div>

                    {/* Right Side: Text Content & Form */}
                    <div className="w-full lg:w-1/2 text-right">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6"
                        >
                            {/* {project && (
                                <span className="inline-block px-4 py-1.5 rounded-full bg-group-primary/10 text-group-primary text-sm font-bold">
                                    {locale === "ar" ? "مشروع مميز" : "Featured Project"}
                                </span>
                            )} */}
                            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
                                {title}
                            </h2>
                            <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-md ml-auto">
                                {description}
                            </p>

                        </motion.div>

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-zinc-50 dark:bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 border border-zinc-200 dark:border-white/10 mt-8 shadow-xl"
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{t.form.title}</h3>
                                <p className="text-zinc-500 dark:text-zinc-400">{t.form.subtitle}</p>
                            </div>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-[#A28B67]/10 text-[#A28B67] p-10 rounded-[2rem] text-center border border-[#A28B67]/20 backdrop-blur-sm"
                                >
                                    <div className="w-20 h-20 bg-[#A28B67]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h4 className="text-2xl font-bold mb-2">{t.form.success}</h4>
                                    <p className="opacity-80">{locale === "ar" ? "سنتواصل معك في أقرب وقت ممكن." : "We will contact you as soon as possible."}</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6 text-right" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                                    <div className="space-y-2">
                                        <Label htmlFor="info-name" className="text-zinc-900 dark:text-zinc-100 font-bold mr-2 text-sm">
                                            {t.form.name}
                                        </Label>
                                        <div className="relative">
                                            <input
                                                id="info-name"
                                                name="name"
                                                required
                                                className="w-full pr-12 pl-4 py-4 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-2xl text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#A28B67] focus:border-transparent transition-all shadow-sm"
                                                placeholder={t.form.name}
                                            />
                                            <div className="absolute top-1/2 -translate-y-1/2 right-4 text-zinc-400">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="info-email" className="text-zinc-900 dark:text-zinc-100 font-bold mr-2 text-sm">
                                                {t.form.email}
                                            </Label>
                                            <div className="relative">
                                                <input
                                                    id="info-email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    className="w-full pr-12 pl-4 py-4 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-2xl text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#A28B67] focus:border-transparent transition-all shadow-sm"
                                                    placeholder={t.form.email}
                                                />
                                                <div className="absolute top-1/2 -translate-y-1/2 right-4 text-zinc-400">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="info-phone" className="text-zinc-900 dark:text-zinc-100 font-bold mr-2 text-sm">
                                                {t.form.phone}
                                            </Label>
                                            <div className="relative">
                                                <input
                                                    id="info-phone"
                                                    name="phone"
                                                    type="tel"
                                                    required
                                                    className="w-full pr-12 pl-4 py-4 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-2xl text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#A28B67] focus:border-transparent transition-all shadow-sm"
                                                    placeholder={t.form.phone}
                                                />
                                                <div className="absolute top-1/2 -translate-y-1/2 right-4 text-zinc-400">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            style={{ backgroundColor: '#A28B67' }}
                                            className="w-full text-white h-16 text-lg font-bold rounded-2xl transition-all active:scale-[0.98] shadow-[0_10px_30px_-10px_rgba(162,139,103,0.5)] flex items-center justify-center gap-3 hover:opacity-90 disabled:opacity-50"
                                        >
                                            <span>{loading ? '...' : t.form.submit}</span>
                                            <ArrowRight className={cn("w-5 h-5 transition-transform", locale === 'ar' ? "rotate-180" : "")} />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

