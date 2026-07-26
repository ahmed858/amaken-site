"use client"

import React from 'react'

const steps = [
    { id: 1, title: "التقديم", icon: "edit_note", desc: "تعبئة نموذج الطلب ورفع المستندات المطلوبة", active: true },
    { id: 2, title: "المعاينة", icon: "visibility", desc: "زيارة الموقع وفحص الحالة الفنية للعقار", active: false },
    { id: 3, title: "التحليل", icon: "query_stats", desc: "دراسة العقارات المماثلة وتحليل البيانات", active: false },
    // { id: 4, title: "الصياغة", icon: "history_edu", desc: "كتابة التقرير النهائي وفق المعايير المعتمدة", active: false },
    { id: 4, title: "التسليم", icon: "task_alt", desc: "إرسال التقرير المعتمد إلكترونياً للعميل", active: false }
]

export const ServiceProcess = () => (
    <section className="max-w-7xl mx-auto px-8 py-24" dir="rtl">
        <h2 className="text-3xl font-bold text-[#041534] mb-12 text-center">رحلة التقييم </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {steps.map((step) => (
                <div key={step.id} className="flex flex-col items-center text-center group">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 relative z-10 transition-all ${step.active ? 'bg-[#006a66] text-white ring-8 ring-[#86f5ee] shadow-lg' : 'bg-[#e1e2e4] text-[#45464e] hover:bg-[#006a66] hover:text-white'}`}>
                        <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                    </div>
                    <h3 className={`font-bold mb-1 ${step.active ? 'text-[#006a66]' : 'text-[#041534]'}`}>{step.id}. {step.title}</h3>
                    <p className="text-xs text-[#45464e] px-2">{step.desc}</p>
                </div>
            ))}
            {/* Line */}
            <div className="hidden md:block absolute top-8 right-[10%] w-[80%] h-[2px] bg-[#e7e8ea] -z-0"></div>
        </div>
    </section>
)
