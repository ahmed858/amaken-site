"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"

interface CallIconProps {
    color?: string;
}

export function CallIcon({ color = "#000000" }: CallIconProps) {
    const phoneNumber = "920003401"


    return (
        <motion.a
            href={`tel:${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-42 right-6 z-50 w-14 h-14 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Contact on WhatsApp"
            style={{ backgroundColor: color }}
        >
            <Phone size={15} fill="currentColor" />

        </motion.a>

    )
} 
