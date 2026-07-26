"use client"

import React from 'react'

export const RequestActivity = () => (
    <section className="bg-[#ffffff] rounded-xl flex flex-col h-[500px] shadow-sm overflow-hidden" dir="rtl">
        <div className="p-4 border-b border-[#e7e8ea] bg-[#f2f4f6] flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#041534] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#006a66] align-middle">chat_bubble</span>
                النشاط والملاحظات
            </h3>
            <span className="w-2 h-2 rounded-full bg-[#006a66]"></span>
        </div>
        {/* Chat Feed */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-right">
            {/* Appraiser Message */}
            <div className="flex flex-col items-start max-w-[85%]">
                <div className="bg-[#e1e2e4] text-[#041534] p-3 rounded-2xl rounded-tr-none text-sm">
                    تحياتي. لقد استلمنا صكوك الأرض. سنقوم بجدولة الزيارة الميدانية غداً صباحاً في تمام الساعة ٩:٠٠ صباحاً.
                </div>
                <span className="text-[10px] text-[#75777f] mt-1 mr-1">المقيم • ١٠:٢٤ صباحاً</span>
            </div>
            {/* System Notification */}
            <div className="flex justify-center">
                <span className="bg-[#edeef0] text-[#45464e] text-[10px] px-3 py-1 rounded-full font-semibold">بدء مرحلة المعاينة الميدانية</span>
            </div>
            {/* User Message */}
            <div className="flex flex-col items-end self-end max-w-[85%] text-left">
                <div className="bg-[#041534] text-white p-3 rounded-2xl rounded-tl-none text-sm text-right">
                    شكراً لك. سيكون مدير الموقع متواجداً لتسهيل الوصول إلى غرف الخدمات الرئيسية.
                </div>
                <span className="text-[10px] text-[#75777f] mt-1 ml-1 text-right block w-full">أنت • ١١:٠٥ صباحاً</span>
            </div>
        </div>
        {/* Chat Input */}
        <div className="p-4 bg-white border-t border-[#e7e8ea]">
            <div className="flex items-center gap-2 bg-[#f2f4f6] p-2 rounded-lg">
                <input
                    className="bg-transparent border-0 flex-1 text-sm focus:ring-0 placeholder:text-[#75777f] text-right"
                    placeholder="اكتب رسالة..."
                    type="text"
                />
                <button className="w-8 h-8 rounded-lg bg-[#041534] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm align-middle">send</span>
                </button>
            </div>
        </div>
    </section>
)
