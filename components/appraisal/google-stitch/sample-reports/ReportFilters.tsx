"use client"

import React from 'react'

export const ReportFilters = () => (
    <div className="sticky top-20 z-40 bg-[#f8f9fb]/80 backdrop-blur-md py-6 mb-12" dir="rtl">
        <div className="flex items-center justify-between border-b border-[#c5c6cf]/30 pb-4">
            <div className="flex items-center gap-2">
                <button className="px-6 py-2 rounded-full bg-[#041534] text-white text-sm font-bold">الكل</button>
                <button className="px-6 py-2 rounded-full hover:bg-[#edeef0] text-[#45464e] text-sm font-medium transition-colors">العقارات</button>
                <button className="px-6 py-2 rounded-full hover:bg-[#edeef0] text-[#45464e] text-sm font-medium transition-colors">الآلات</button>
                <button className="px-6 py-2 rounded-full hover:bg-[#edeef0] text-[#45464e] text-sm font-medium transition-colors">المرافق</button>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-[#45464e] text-xs font-medium">عرض ١٢ تقرير</span>
                <button className="material-symbols-outlined text-[#75777f] align-middle">grid_view</button>
                <button className="material-symbols-outlined text-[#75777f] align-middle">list</button>
            </div>
        </div>
    </div>
)
