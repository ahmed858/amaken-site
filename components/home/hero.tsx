"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/context";

export function Hero() {
    const { t } = useI18n();
    return (
        <section id="home" className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-50"
                    poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                >
                    {/* If user provides a video later, they can uncomment valid source */}
                    {/* <source src="/hero-video.mp4" type="video/mp4" /> */}
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            <div className="container relative z-10 px-4 md:px-8  text-start">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        <span className="text-white">{t("hero.tagline")}</span>
                        <br />
                        {t("hero.subtitle")}
                    </h1>
                </motion.div>
                <br />
                {/* <motion.p
                    className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 md:mx-0 mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Premium real estate solutions tailored to your vision.
                    Experience excellence in development, management, and consultancy.
                </motion.p> */}

                <motion.div
                    className="flex flex-col md:flex-row gap-4 items-center md:justify-start justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Button size="lg" className="bg-primary text-white hover:bg-white hover:text-black text-lg px-8">
                        {t("hero.buttons.exploreServices")}
                    </Button>
                    <Button size="lg" variant="outline" className="bg-white text-primary   hover:bg-primary hover:text-white text-lg px-8">
                        {t("hero.buttons.contactUs")}
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-white/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
