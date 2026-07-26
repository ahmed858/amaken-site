"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ModernServiceCardProps {
    title: string;
    description: string;
    image: string;
    href?: string;
    className?: string;
}

export function ModernServiceCard({
    title,
    description,
    image,
    href = "#",
    className,
}: ModernServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn("group flex flex-col", className)}
        >
            {/* Image Container */}
            <div className="relative aspect-square w-full mb-6">
                <div className="w-full h-full overflow-hidden rounded-[2.5rem] shadow-sm group-hover:shadow-xl transition-all duration-500">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </div>

                {/* Floating Button */}
                <Link href={href}>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute -right-2 -bottom-2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer z-10 border border-gray-100"
                    >
                        <ArrowUpRight className="w-7 h-7 text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </motion.div>
                </Link>
            </div>

            {/* Content */}
            <div className="space-y-3 px-2">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-black transition-colors leading-tight">
                    {title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-lg">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
