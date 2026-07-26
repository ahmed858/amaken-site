"use client"

import React from 'react'

export const RequestInvoice = () => (
    <section className="bg-[#86f5ee]/10 rounded-xl p-6 border-0 relative overflow-hidden" dir="rtl">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#006a66]/5 -mr-12 -mt-12 rounded-full"></div>
        <h3 className="text-xs uppercase font-bold text-[#006a66] tracking-widest mb-4">فاتورة معلقة</h3>
        <div className="flex justify-between items-center mb-6 text-right">
            <div>
                <div className="text-3xl font-extrabold text-[#041534]">١٤,٢٥٠ <span className="text-sm font-medium">ريال</span></div>
                <p className="text-xs text-[#00504d] mt-1 italic font-inter">يستحق في ٢٠ أكتوبر، ٢٠٢٤</p>
            </div>
            <div className="p-3 bg-white rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-[#006a66] text-3xl align-middle">receipt_long</span>
            </div>
        </div>
        <button className="w-full bg-[#006a66] text-white py-3.5 rounded-lg font-bold shadow-md hover:shadow-lg transition-all active:scale-[0.98]">
            ادفع الآن
        </button>
        <button className="w-full mt-3 text-[#006a66] text-xs font-bold py-2 hover:bg-white/50 rounded transition-colors">
            تحميل الفاتورة PDF
        </button>
    </section>
)
