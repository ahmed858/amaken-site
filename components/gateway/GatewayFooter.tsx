"use client"

import React from 'react'
import { motion } from 'framer-motion'

export const GatewayFooter = () => {
    const currentYear = new Date().getFullYear()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20 flex flex-col items-center gap-6 text-[#4b4734]/60 font-headline text-[10px] tracking-[0.4em] uppercase w-full"
        >
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 w-full">
                <div className="flex items-center gap-8">
                    <button className="hover:text-[#6d5e00] transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">language</span>
                        English
                    </button>
                    <div className="h-4 w-[1px] bg-[#cec6ae]/30"></div>
                    <button className="hover:text-[#6d5e00] transition-colors">
                        العربية
                    </button>
                </div>

                <div className="hidden md:block h-4 w-[1px] bg-[#cec6ae]/30"></div>

                <div className="flex items-center gap-4">
                    <p className="whitespace-nowrap">
                        © {currentYear} Amaken International Group
                    </p>
                    <div className="h-3 w-[1px] bg-[#cec6ae]/30 opacity-50"></div>
                    <p className="font-tajawal tracking-normal text-[11px] opacity-80 whitespace-nowrap">
                        جميع الحقوق محفوظة لمجموعة أماكن الدولية
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
