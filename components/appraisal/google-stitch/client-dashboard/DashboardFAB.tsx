"use client"

import React from 'react'
import Link from 'next/link'

export const DashboardFAB = () => (
    <Link href="/appraisal/request-appraisal-form" className="fixed bottom-8 left-8 bg-[#006a66] text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 z-50">
        <span className="material-symbols-outlined align-middle" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
        <span className="font-bold tracking-tight">طلب تقييم جديد</span>
    </Link>
)
