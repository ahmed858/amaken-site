"use client"

import React from 'react'

export const FeaturedReport = () => (
    <section className="mb-16 bg-[#ffffff] rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row" dir="rtl">
        <div className="md:w-3/5 relative min-h-[400px]">
            <img
                className="absolute inset-0 w-full h-full object-cover"
                alt="Modern skyscraper in Riyadh"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZvqApoEKl6wWf8MP5e9C_6maICbmLmzvFoBSesISNWUHstYvXYEMw6hVFevwKofYL0iBUzxVJ_IvqvKSOwd_ZnJFDVaNRMRIA5w7ULIkeY7-WTOo07Yqy7DFGSMpHvY5t5UDJtX7ZtT9dqtDbPVl83386iZWHTQhA_uweiBLZmE1Cfq2AHTbWilBhHXg6YavCtKswYCM1H8BnH4n3DxAjsxvSP1oC33ZKNHWXOqsw-T3k3KnL6BvEzFvWiLj4c7dt_Kga7pu9Qok"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#041534]/40 to-transparent"></div>
        </div>
        <div className="md:w-2/5 p-12 flex flex-col justify-center bg-[#f2f4f6] text-right">
            <div className="flex items-center gap-2 mb-6 justify-end">
                <span className="px-3 py-1 bg-[#006a66] text-white rounded-full text-xs font-bold uppercase">مميز</span>
                <span className="text-[#45464e] text-xs">مارس ٢٠٢٤</span>
            </div>
            <h2 className="text-3xl font-bold text-[#041534] mb-6 leading-tight">تقييم مجمع المجد التجاري الاحترافي</h2>
            <p className="text-[#45464e] mb-8 leading-relaxed">
                تقييم فني عميق للأصول التجارية من الدرجة الأولى في الحي المالي بالرياض، باستخدام نماذج DCF ومنهجيات مقارنة السوق.
            </p>
            <div className="flex flex-col gap-3">
                <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#041534] text-white rounded-lg font-bold hover:bg-[#1b2a4a] transition-all">
                    <span className="material-symbols-outlined align-middle">download</span>
                    تحميل العينة الكاملة
                </button>
                <button className="w-full text-[#006a66] font-bold hover:underline text-sm text-center">عرض الملخص الفني</button>
            </div>
        </div>
    </section>
)
