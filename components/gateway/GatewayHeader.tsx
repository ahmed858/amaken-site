"use client"

import React from 'react'
import { motion } from 'framer-motion'

export const GatewayHeader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 mb-16 text-center"
        >

            <div className="flex items-center justify-center gap-4">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 48 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-[2px] bg-[#cec6ae]/30"
                />
                <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-[0.2em] text-[#1a1c1c] uppercase mb-2">
                    مجموعة أماكن |Amaken Group
                </h1>
                {/* <span className="font-headline text-sm tracking-[0.3em] text-[#6d5e00] uppercase">Vision 2030 Partner</span> */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 48 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-[2px] bg-[#cec6ae]/30"
                />
            </div>
        </motion.div>
    )
}
