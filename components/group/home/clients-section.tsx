"use client"

import { motion } from "framer-motion"
import { SectionReveal } from "@/components/ui/section-reveal"
import { useI18n } from "@/lib/i18n/context"

const clients = [
    { name: "Al Rajhi Bank", logo: "/clients/al-rajhi-bank.svg.png", id: 1 },
    { name: "SNB (AlAhli)", logo: "/clients/snb-bank.svg.png", id: 2 },
    { name: "Aljazira Bank", logo: "/clients/aljazira-bank.svg.png", id: 3 },
    { name: "Alinma Bank", logo: "/clients/alinma-bank.svg.png", id: 4 },
    { name: "real-Estate Box", logo: "/clients/real-state-box.svg.png", id: 5 },
    { name: "alblad Bank", logo: "/clients/alblad-bank.svg.png", id: 6 },
    { name: "amlak-international", logo: "/clients/amlak-internationalar.png", id: 7 },
    { name: "electiric", logo: "/clients/electiric-sa.svg.png", id: 8 },
]

export function ClientsSection() {
    const { t, direction } = useI18n()

    return (
        <section className="py-20 bg-white border-y border-border overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionReveal className="text-center mb-12">
                    <h2 className="text-xl font-medium text-muted-foreground uppercase tracking-[0.2em] mb-4">
                        {t("clients.title")}
                    </h2>
                </SectionReveal>

                <div className="relative w-full overflow-hidden">
                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
                            // Move 25% because we have 4 copies. 
                            // 100% width = 4 * single_list_width.
                            // Moving 25% shifts exactly one list width.
                            animate={{ x: ["0%", (direction === "ltr") ? "-25%" : "25%"] }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                                <div
                                    key={`${client.id}-${index}`}
                                    className="w-32 md:w-40 h-20 flex items-center justify-center flex-shrink-0"
                                >
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="max-h-full max-w-full object-contain transition-all duration-300"
                                        draggable={false}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
