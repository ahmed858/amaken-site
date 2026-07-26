"use client"

import React from 'react'

export const MissionVisionSection = () => (
    <section className="py-24 px-6 md:px-20 bg-[#f2f4f6]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-[#006a66] text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                <h3 className="text-[#041534] text-2xl font-bold mb-4">رؤيتنا</h3>
                <p className="text-[#45464e] text-lg leading-relaxed">أن نكون المرجع الأول والأكثر موثوقية في مجال التقييم العقاري في المملكة العربية السعودية، مساهمين في استدامة وشفافية القطاع العقاري وفق رؤية المملكة 2030.</p>
            </div>
            <div className="bg-white p-12 rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-[#006a66] text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>target</span>
                <h3 className="text-[#041534] text-2xl font-bold mb-4">رسالتنا</h3>
                <p className="text-[#45464e] text-lg leading-relaxed">تقديم تقارير تقييم عقاري مهنية، دقيقة، ومحايدة تعتمد على أفضل الممارسات العالمية والمعايير السعودية (تقييم)، لتمكين عملائنا من اتخاذ قرارات استثمارية مدروسة.</p>
            </div>
        </div>
    </section>
)
