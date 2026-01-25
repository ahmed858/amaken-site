"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"

export function CallIcon() {
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
            className="fixed bottom-45 left-6 z-50 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Contact on WhatsApp"
        >
            <Phone size={15} fill="currentColor" />

        </motion.a>

    )
} 
