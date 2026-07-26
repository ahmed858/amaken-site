"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface GatewayCardProps {
    titleEn: string
    titleAr: string
    description: string
    image: string
    icon: string
    href: string
    isFeatured?: boolean
    accentColor: string
}

export const GatewayCard: React.FC<GatewayCardProps> = ({
    titleEn,
    titleAr,
    description,
    image,
    icon,
    href,
    isFeatured = false,
    accentColor = '#efd447'
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -12, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            style={{ '--accent-color': accentColor } as React.CSSProperties}
            className={`group relative flex flex-col bg-white shadow-[0px_40px_80px_rgba(26,28,28,0.08)] transition-all duration-500 border-b-4 border-transparent hover:border-[var(--accent-color)] ${isFeatured ? 'md:scale-105 z-20' : ''}`}
        >
            <div className="aspect-[4/5] relative overflow-hidden">
                <motion.img
                    src={image}
                    alt={titleEn}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1c]/80 via-[#1a1c1c]/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                    <span className="material-symbols-outlined text-[var(--accent-color)] text-4xl mb-4 transition-colors duration-300">{icon}</span>
                    <h2 className="text-2xl font-bold text-white mb-1 font-headline">{titleEn}</h2>
                    <h3 className="text-xl text-[var(--accent-color)]/90 font-medium font-headline transition-colors duration-300">{titleAr}</h3>
                </div>
            </div>
            <div className={`p-8 flex flex-col flex-grow justify-between ${isFeatured ? 'bg-[#e2e2e2]' : 'bg-[#f3f3f3]'}`}>
                <p className="text-[#4b4734] text-sm leading-relaxed mb-8 font-light">
                    {description}
                </p>
                <a
                    href={href}
                    className={`w-full py-4 font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-3 transition-all duration-300 ${isFeatured
                        ? 'bg-[#1a1c1c] text-white hover:bg-[var(--accent-color)]'
                        : 'bg-[#1a1c1c] text-white hover:bg-[var(--accent-color)]'
                        }`}
                >
                    Enter / دخول
                    <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </motion.div>
                </a>
            </div>
        </motion.div>
    )
}
