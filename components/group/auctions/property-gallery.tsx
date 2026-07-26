"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

interface PropertyGalleryProps {
    images: string[];
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { locale } = useI18n();
    const isRTL = locale === "ar";

    if (!images || images.length === 0) return null;

    const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl bg-gray-100 group">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt="Property Image"
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                    />
                </AnimatePresence>

                {/* Controls */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-white/20 flex items-center justify-center text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                        >
                            <ChevronLeft className={cn("w-6 h-6", isRTL && "rotate-180")} />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-white/20 flex items-center justify-center text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                        >
                            <ChevronRight className={cn("w-6 h-6", isRTL && "rotate-180")} />
                        </button>
                    </>
                )}

                {/* Counter */}
                <div className="absolute bottom-6 right-6 px-4 py-2 rounded-xl bg-black/50 backdrop-blur-md text-white text-sm font-medium">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={cn(
                                "relative flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all",
                                currentIndex === idx ? "border-[#A28B67] scale-105" : "border-transparent opacity-60 hover:opacity-100"
                            )}
                        >
                            <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
