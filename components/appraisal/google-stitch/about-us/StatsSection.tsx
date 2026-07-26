"use client"

import React from 'react'

export const StatsSection = () => (
    <section className="py-12 bg-[#1b2a4a] relative -mt-16 z-30 mx-6 md:mx-20 rounded-xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10">
            <div className="text-center">
                <div className="text-4xl font-bold text-[#86f5ee] mb-1">+10k</div>
                <div className="text-[#8392b7] text-sm font-medium">أصول تم تقييمها</div>
            </div>
            <div className="text-center">
                <div className="text-4xl font-bold text-[#86f5ee] mb-1">25</div>
                <div className="text-[#8392b7] text-sm font-medium">خبير معتمد</div>
            </div>
            <div className="text-center">
                <div className="text-4xl font-bold text-[#86f5ee] mb-1">+15</div>
                <div className="text-[#8392b7] text-sm font-medium">مدينة مغطاة</div>
            </div>
            <div className="text-center">
                <div className="text-4xl font-bold text-[#86f5ee] mb-1"> مليار ريال 200</div>
                <div className="text-[#8392b7] text-sm font-medium">إجمالي القيم المقدرة</div>
            </div>
        </div>
    </section>
)
