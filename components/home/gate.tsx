"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { useI18n } from "@/lib/i18n/context";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

export function Gate() {
    const companies = [
        {
            id: 1,
            name: 'شركة مجموعة أماكن الدولية',
            nameEn: 'AMAKEN INTERNATIONAL GROUP',
            logo: '/group-logo.png',
            arabicLink: '/group/',
            englishLink: '/amaken-group/en',
            color: 'from-gray-100/10 to-gray-100/10',
            url: "/group"
        },
        {
            id: 2,
            name: 'شركة أماكن للتقييم',
            nameEn: 'AMAKEN VALUATION COMPANY',
            logo: '/appriasal-logo.png',
            arabicLink: '/appraisal/',
            englishLink: '/appraisal/',
            color: 'from-gray-100/10 to-gray-100/10'
            ,
            url: "/appraisal"

        },
        {
            id: 3,
            name: 'شركة أماكن للاستشارات',
            nameEn: 'AMAKEN MANAGEMENT CONSULTING COMPANY',
            logo: '/consulting-logo.png',
            arabicLink: '/consultation/',
            englishLink: '/consultation',
            color: 'from-gray-100/10 to-gray-100/10'
            ,
            url: "/consultation"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const cardVariants = {
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

    const titleVariants = {
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
    const { t, locale, setLocale, direction } = useI18n();
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
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-black/80 backdrop-blur-md shadow-sm "
                        : "text-white bg-transparent py-6",
                )}
            >
                <nav className="container mx-auto px-4 lg:px-8">

                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleLanguage}
                        className={cn(
                            "gap-2 transition-colors",
                            "  text-black"

                        )}
                    >
                        <Globe className="w-4 h-4" />
                        <span className="hidden sm:inline">{t("nav.language")}</span>
                    </Button>



                </nav>
            </motion.header >



            <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-t relative h-screen w-full       flex items-center justify-center py-12">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    {/* Main Geometric Pattern SVG with Draw Animation */}
                    <motion.svg
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
                        width="1000"
                        height="1000"
                        viewBox="0 0 1000 1000"
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Complex geometric paths that create the pattern */}
                        <motion.path
                            d="M200 150 L280 230 L280 350 L380 350 L380 450 L480 450 L480 550 L580 550 L580 650 L680 750"
                            stroke="#000000"
                            strokeWidth="3"
                            fill="none"
                            variants={{
                                hidden: { pathLength: 0, opacity: 0 },
                                visible: {
                                    pathLength: 1,
                                    opacity: 1,
                                    transition: { duration: 3, ease: "easeInOut" }
                                }
                            }}
                        />
                        <motion.path
                            d="M800 150 L720 230 L620 230 L520 330 L520 430 L420 530 L420 630 L320 730"
                            stroke="#000000"
                            strokeWidth="3"
                            fill="none"
                            variants={{
                                hidden: { pathLength: 0, opacity: 0 },
                                visible: {
                                    pathLength: 1,
                                    opacity: 1,
                                    transition: { duration: 3, delay: 0.4, ease: "easeInOut" }
                                }
                            }}
                        />
                        <motion.path
                            d="M150 500 L250 600 L350 600 L450 700 L550 700 L650 800"
                            stroke="#000000"
                            strokeWidth="3"
                            fill="none"
                            variants={{
                                hidden: { pathLength: 0, opacity: 0 },
                                visible: {
                                    pathLength: 1,
                                    opacity: 1,
                                    transition: { duration: 3, delay: 0.8, ease: "easeInOut" }
                                }
                            }}
                        />
                        <motion.path
                            d="M500 100 L400 200 L400 300 L300 400 L200 400"
                            stroke="#000000"
                            strokeWidth="3"
                            fill="none"
                            variants={{
                                hidden: { pathLength: 0, opacity: 0 },
                                visible: {
                                    pathLength: 1,
                                    opacity: 1,
                                    transition: { duration: 3, delay: 1.2, ease: "easeInOut" }
                                }
                            }}
                        />
                        <motion.path
                            d="M700 300 L800 400 L800 500 L900 600"
                            stroke="#000000"
                            strokeWidth="3"
                            fill="none"
                            variants={{
                                hidden: { pathLength: 0, opacity: 0 },
                                visible: {
                                    pathLength: 1,
                                    opacity: 1,
                                    transition: { duration: 3, delay: 1.6, ease: "easeInOut" }
                                }
                            }}
                        />
                    </motion.svg>

                    {/* Floating Geometric Shapes - Top Left */}
                    <motion.div
                        className="absolute top-20 left-20 w-40 h-40 border-2 border-gray-400/20"
                        animate={{
                            y: [0, -25, 0],
                            rotate: [0, 8, 0],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Bottom Right Diamond */}
                    <motion.div
                        className="absolute bottom-32 right-40 w-28 h-28 border-2 border-gray-400/20 rotate-45"
                        animate={{
                            y: [0, 25, 0],
                            rotate: [45, 52, 45],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Top Right Circle */}
                    <motion.div
                        className="absolute top-1/4 right-32 w-20 h-20 bg-gray-400/15 rounded-full"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.15, 0.25, 0.15],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Bottom Left Small Square */}
                    <motion.div
                        className="absolute bottom-1/4 left-32 w-16 h-16 border-2 border-gray-400/20"
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />

                    {/* Center Large Circle */}
                    <motion.div
                        className="absolute top-1/2 left-1/3 w-32 h-32 bg-gray-300/10 rounded-full"
                        animate={{
                            scale: [1, 1.2, 1],
                            x: [0, 20, 0],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}

                    />
                </div>

                {/* Content Container */}
                <div className="relative z-10 container mx-auto px-4 max-w-7xl">
                    {/* Main Title */}
                    <motion.div
                        variants={titleVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">

                            {t("gate.title")}
                        </h1>

                    </motion.div>

                    {/* Companies Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-70"
                    >
                        {companies.map((company) => (
                            <motion.div
                                key={company.id}
                                variants={cardVariants}
                                whileHover={{ y: -15, scale: 1.02 }}
                                className={`relative flex flex-col items-center justify-between text-center bg-gradient-to-br ${company.color} backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 overflow-hidden group`}
                            >
                                {/* Card Background Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="relative z-10 flex flex-col items-center w-full">
                                    {/* Logo Container */}
                                    <div className="w-full h-48 flex items-center justify-center mb-8 relative">
                                        <motion.a href={company.url}>
                                            <motion.img
                                                src={company.logo}
                                                alt={company.name}
                                                className="max-w-full max-h-full object-contain drop-shadow-lg"
                                                width="280"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.3 }}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                        </motion.a>
                                        {/* Fallback */}
                                        <div className="hidden w-40 h-40 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 items-center justify-center shadow-xl">
                                            <span className="text-white text-5xl font-bold">
                                                {company.name.charAt(6)}
                                            </span>
                                        </div>
                                    </div>



                                    {/* services select  */}
                                    <div className="flex gap-4 w-full justify-center">
                                        <motion.a
                                            href={company.arabicLink}
                                            whileHover={{ scale: 1.08, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="px-10 py-4 bg-gradient-to-r from-gray-900 to-black text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-lg relative overflow-hidden group/btn"
                                        >
                                            <span className="relative z-10">خدماتنا</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Decorative Corner Elements */}
                                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gray-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gray-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                            اختر الشركة المناسبة لاحتياجاتك
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