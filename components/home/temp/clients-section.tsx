"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"

// Major clients - Saudi banks and government entities
const clients = [
    { name: "Al Rajhi Bank", id: 1 },
    { name: "SNB (AlAhli)", id: 2 },
    { name: "Riyad Bank", id: 3 },
    { name: "SABB", id: 4 },
    { name: "Banque Saudi Fransi", id: 5 },
    { name: "Ministry of Housing", id: 6 },
    { name: "PIF", id: 7 },
    { name: "Aramco", id: 8 },
    { name: "STC", id: 9 },
    { name: "Ma'aden", id: 10 },
    { name: "SADAF", id: 11 },
    { name: "SABIC", id: 12 },
]

export function ClientsSection() {
    const { t } = useI18n()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.21, 0.47, 0.32, 0.98] as any
            }
        }
    }

    return (
        <section className="relative py-24 bg-[#0a0a0a] overflow-hidden border-y border-white/5">
            {/* Dotlogics-inspired blue glowing vignette effect */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container relative mx-auto px-4 lg:px-8 z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-white text-xs md:text-sm font-bold uppercase tracking-[0.3em] opacity-80"
                    >
                        {t("clients.title")}
                    </motion.h2>
                    <div className="w-12 h-[1px] bg-blue-500/50 mx-auto mt-6" />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    {clients.map((client) => (
                        <motion.div
                            key={client.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="group relative flex items-center justify-center h-28 md:h-32 rounded-xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.07] hover:border-white/[0.1] overflow-hidden"
                        >
                            {/* Inner glow on hover */}
                            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/[0.02] transition-colors duration-300" />

                            <div className="relative px-6 py-4 text-center">
                                <span className="text-white/40 group-hover:text-white/90 font-bold text-sm md:text-base tracking-tight transition-colors duration-300">
                                    {client.name.toUpperCase()}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
