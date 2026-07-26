"use client"

import React from 'react'

export const AssetSummary = () => (
    <section className="bg-[#ffffff] rounded-xl overflow-hidden shadow-sm border-0">
        <div className="bg-[#041534] px-8 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4" dir="rtl">
            <div className="space-y-1">
                <div className="flex items-center gap-3">
                    <h2 className="text-white text-xl font-bold tracking-tight">طلب رقم #8829-2024</h2>
                    <span className="px-3 py-1 bg-[#86f5ee] text-[#00201f] rounded-full text-[10px] font-bold uppercase tracking-wider">قيد المراجعة</span>
                </div>
                <p className="text-[#8392b7] text-sm">مجمع تجاري متعدد الاستخدامات — مدينة الرياض الرقمية</p>
            </div>
            <div className="text-right text-white/80">
                <div className="text-[10px] uppercase tracking-widest font-semibold opacity-70">التسليم المتوقع</div>
                <div className="text-lg font-bold text-white">٢٨ أكتوبر، ٢٠٢٤</div>
            </div>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8" dir="rtl">
            <div className="space-y-4">
                <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-[#75777f] tracking-wider">نوع الأصل</label>
                    <p className="font-semibold text-[#041534]">عقار تجاري</p>
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-[#75777f] tracking-wider">مساحة الأرض</label>
                    <p className="font-semibold text-[#041534]">١٢,٤٥٠ متر مربع</p>
                </div>
            </div>
            <div className="space-y-4">
                <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-[#75777f] tracking-wider">المقيم المعين</label>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#e7e8ea] flex items-center justify-center">
                            <span className="material-symbols-outlined text-[#041534] text-sm align-middle">person</span>
                        </div>
                        <p className="font-semibold text-[#041534]">م. أحمد السامي</p>
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-[#75777f] tracking-wider">طريقة التقييم</label>
                    <p className="font-semibold text-[#041534]">رأسملة الدخل</p>
                </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-32 md:h-full min-h-[140px]">
                <img
                    className="w-full h-full object-cover"
                    alt="Rendering of a commercial complex in Riyadh"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7wy660POkjKEZLYEc7kG62-2CkzwVguI7cnS_BXMRcDKRYyatRXGWXTuGdvSDEyc7-pZCPW1yvCi0uK3DhdvoS30um6s35Meta-84VyEi6nH70eK5l2bYFkStpbMRArt9flG3xDXDNwcgHVYt4jDdcNPv6eAXjO0y1l_surxjSTt-sV0L_uuUU_M3wAYY9ttQ6YM4MY1Wtav-ILsTigaiF14ijh9r_qnf57R-hOekBUPKaAI88_f9LCM1ozR0sW7tETG5YmFWIBc"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                    <button className="text-white text-xs flex items-center gap-1 font-semibold">
                        <span className="material-symbols-outlined text-sm align-middle">visibility</span> عرض المعرض
                    </button>
                </div>
            </div>
        </div>
    </section>
)
