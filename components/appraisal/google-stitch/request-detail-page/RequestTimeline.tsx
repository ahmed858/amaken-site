"use client"

import React from 'react'

export const RequestTimeline = () => (
    <div className="mt-10 relative">
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-[#edeef0] z-0"></div>
        <div className="flex justify-between relative z-10 px-2" dir="rtl">
            {/* Step 1: Submitted */}
            <div className="flex flex-col items-center group">
                <div className="w-10 h-10 rounded-full bg-[#006a66] text-white flex items-center justify-center shadow-lg mb-3">
                    <span className="material-symbols-outlined text-xl align-middle">check</span>
                </div>
                <span className="text-sm font-bold text-[#041534]">تم الإرسال</span>
                <span className="text-[10px] text-[#45464e]">١٢ أكتوبر، ٢٠٢٤</span>
            </div>
            {/* Step 2: In Review */}
            <div className="flex flex-col items-center group">
                <div className="w-10 h-10 rounded-full bg-[#006a66] text-white flex items-center justify-center shadow-lg mb-3 ring-4 ring-[#86f5ee]">
                    <span className="material-symbols-outlined text-xl align-middle">pending</span>
                </div>
                <span className="text-sm font-bold text-[#006a66]">قيد المراجعة</span>
                <span className="text-[10px] text-[#45464e]">جاري العمل</span>
            </div>
            {/* Step 3: Field Inspection */}
            <div className="flex flex-col items-center group opacity-50">
                <div className="w-10 h-10 rounded-full bg-[#e1e2e4] text-[#75777f] flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-xl align-middle">location_on</span>
                </div>
                <span className="text-sm font-medium text-[#45464e]">المعاينة الميدانية</span>
            </div>
            {/* Step 4: Drafting */}
            <div className="flex flex-col items-center group opacity-50">
                <div className="w-10 h-10 rounded-full bg-[#e1e2e4] text-[#75777f] flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-xl align-middle">edit_note</span>
                </div>
                <span className="text-sm font-medium text-[#45464e]">إعداد المسودة</span>
            </div>
            {/* Step 5: Delivery */}
            <div className="flex flex-col items-center group opacity-50">
                <div className="w-10 h-10 rounded-full bg-[#e1e2e4] text-[#75777f] flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-xl align-middle">task_alt</span>
                </div>
                <span className="text-sm font-medium text-[#45464e]">التسليم</span>
            </div>
        </div>
    </div>
)
