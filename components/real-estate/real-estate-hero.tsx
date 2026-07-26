"use client";

import { motion } from "framer-motion";

interface RealEstateHeroProps {
    t: any;
}

export function RealEstateHero({ t }: RealEstateHeroProps) {
    return (
        <div className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background with overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-background to-transparent" />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 to-transparent" />

            {/* Content */}
            <div className="relative z-20 container px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium mb-4 backdrop-blur-md">
                        {t.filters.marketing_direct}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        {t.hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        {t.hero.subtitle}
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
