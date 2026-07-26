"use client"
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { useI18n } from "@/lib/i18n/context";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from 'next/link';

export function Gate() {
    const { t, locale, setLocale, direction } = useI18n();

    const companies = [
        {
            id: 1,
            nameKey: 'group',
            logo: '/group-logo.png',
            arabicLink: '/group/',
            englishLink: '/group',
            color: 'from-gray-100/10 to-gray-100/10',
            url: "/group",
            services: [
                { name: t("gate.services.group.marketing"), url: "/real-estate" },
                { name: t("gate.services.group.auctions"), url: "/news" },
                { name: t("gate.services.group.management"), url: "/real-estate" }
            ]
        },
        {
            id: 2,
            nameKey: 'appraisal',
            logo: '/appriasal-logo.png',
            arabicLink: '/appraisal/',
            englishLink: '/appraisal/',
            color: 'from-gray-100/10 to-gray-100/10',
            url: "/appraisal",
            services: [
                { name: t("gate.services.appraisal.realEstate"), url: "/appraisal" },
                { name: t("gate.services.appraisal.economic"), url: "/appraisal" },
                { name: t("gate.services.appraisal.machinery"), url: "/appraisal" }
            ]
        },
        {
            id: 3,
            nameKey: 'consulting',
            logo: '/consulting-logo.png',
            arabicLink: '/consultation/',
            englishLink: '/consultation',
            color: 'from-gray-100/10 to-gray-100/10',
            url: "/consultation",
            services: [
                { name: t("gate.services.consulting.feasibility"), url: "/consultation/feasibility" },
                { name: t("gate.services.consulting.market"), url: "/consultation" },
                { name: t("gate.services.consulting.hbu"), url: "/consultation/highest-best-use" },

            ]
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const titleVariants: Variants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: 'easeOut'
            }
        }
    };

    const toggleLanguage = () => {
        setLocale(locale === "en" ? "ar" : "en");
    };
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Header links={[]} />



            <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[url('/appraisal/hero.webp')] bg-cover bg-center flex items-center justify-center py-12">
                {/* <div className="absolute inset-0 bg-gradient-to-t from-white/100 via-white/30 to-white/5" /> */}

                {/* Content Container */}
                <div className="relative z-10 container mx-auto px-4 max-w-6xl mt-50">
                    {/* Main Title */}
                    <motion.div
                        variants={titleVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center mb-20 flex flex-col items-center"
                    >
                        {/* <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-gray-900 mb-4 font-serif">
                            {t("gate.title")}
                        </h1> */}
                        <img src="/amaken-logo.png" alt="" className="w-100" />
                        {/* <div className="w-32 h-1.5 bg-gray-900 rounded-full" /> */}
                    </motion.div>

                    {/* Companies Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16"
                    >
                        {companies.map((company) => (
                            <motion.div
                                key={company.id}
                                variants={cardVariants}
                                whileHover={{ y: -10 }}
                                className={`relative flex flex-col items-center bg-gradient-to-br ${company.color} backdrop-blur-xl rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 overflow-hidden group min-h-[320px]`}
                            >
                                {/* Card Background Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="relative z-10 flex flex-col items-center w-full h-full">
                                    {/* Logo Container */}
                                    <div className="w-full h-24 flex items-center justify-center mb-4 relative">
                                        <motion.a href={company.url}>
                                            <motion.img
                                                src={company.logo}
                                                alt={t(`gate.companies.${company.nameKey}`)}
                                                className="max-w-full max-h-full object-contain drop-shadow-md"
                                                width="160"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </motion.a>
                                    </div>

                                    {/* Services List */}
                                    <div className="w-full flex-1 mt-0 space-y-3">
                                        <div className="flex flex-col gap-1">
                                            {company.services.map((service, index) => (
                                                <Link
                                                    key={index}
                                                    href={service.url}
                                                    className="flex items-center justify-between py-2 px-1 transition-all duration-300 group/item border-b border-gray-900/5 hover:border-gray-900/20 last:border-0"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-900/10 group-hover/item:bg-gray-900 transition-colors" />
                                                        <span className="text-right text-md font-bold text-black group-hover/item:text-black">
                                                            {service.name}
                                                        </span>
                                                    </div>
                                                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 group-hover/item:text-gray-900 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gray-400/20" />
                                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gray-400/20" />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Bottom Decorative Text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="text-center mt-20"
                    >
                        <p className="text-gray-400 text-sm font-light tracking-wider">
                            {t("gate.choose")}
                        </p>
                    </motion.div>
                </div>

                {/* Animated Gradient Orbs */}
                {/* <motion.div
                className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            /> */}
                {/* <motion.div
                className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
                animate={{
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            /> */}
            </section>
        </>
    );
}