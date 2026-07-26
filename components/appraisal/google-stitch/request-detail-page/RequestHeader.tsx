"use client"

import React from 'react'

export const RequestHeader = () => (
    <div className="lg:col-span-12 mb-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <nav className="flex items-center gap-2 text-[#45464e] mb-2 font-inter" dir="rtl">
                    <span className="text-xs uppercase tracking-widest font-bold">التقارير</span>
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                    <span className="text-xs uppercase tracking-widest font-bold text-[#041534]">REQ-8829-2024</span>
                </nav>
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#041534] tracking-tight">تفاصيل الطلب</h1>
            </div>
            <div className="flex gap-3">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-[#f2f4f6] text-[#041534] font-semibold rounded-lg hover:bg-[#edeef0] transition-colors">
                    <span className="material-symbols-outlined align-middle">print</span>
                    طباعة الملخص
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-[#041534] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-sm">
                    <span className="material-symbols-outlined align-middle">share</span>
                    مشاركة الوصول
                </button>
            </div>
        </div>
    </div>
)
