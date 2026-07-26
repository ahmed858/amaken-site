"use client"

import React from 'react'

export const TeamSection = () => (
    <section className="py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
            <div className="mb-16">
                <h2 className="text-[#041534] text-3xl font-bold mb-4">قادتنا وخبراؤنا</h2>
                <p className="text-[#45464e]">نخبة من الكفاءات الوطنية والخبرات العالمية</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* Member 1 */}
                <div className="group">
                    <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/5]">
                        <img
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            alt="Professional portrait of a middle-eastern male executive"
                            src="/placeholder-user.jpg"
                        />
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-2 rounded shadow-lg">
                            <a className="text-[#041534] hover:text-[#006a66]" href="#"><span className="material-symbols-outlined align-middle">link</span> LinkedIn</a>
                        </div>
                    </div>
                    <h3 className="text-[#041534] text-xl font-bold">عبد الله الزغيبي</h3>
                    <p className="text-[#006a66] font-medium text-sm mb-2">الرئيس التنفيذي</p>
                    <p className="text-[#45464e] text-sm leading-relaxed">زميل الهيئة السعودية للمقيمين المعتمدين وخبير في تقييم المشاريع العقارية.</p>
                </div>
                {/* Member 2 */}
                <div className="group">
                    <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/5]">
                        <img
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            alt="Portrait of a professional middle-eastern female executive"
                            src="/placeholder-user.jpg"
                        />
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-2 rounded shadow-lg">
                            <a className="text-[#041534] hover:text-[#006a66]" href="#"><span className="material-symbols-outlined align-middle">link</span> LinkedIn</a>
                        </div>
                    </div>
                    <h3 className="text-[#041534] text-xl font-bold">أ. نهى الوهيبي</h3>
                    <p className="text-[#006a66] font-medium text-sm mb-2">مديرة قسم العلاقات العامة</p>
                    {/* <p className="text-[#45464e] text-sm leading-relaxed">متخصصة في تحليل البيانات العقارية والتنبؤ باتجاهات السوق السكني والتجاري.</p> */}
                </div>
                {/* Member 3 */}
                <div className="group">
                    <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/5]">
                        <img
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            alt="Portrait of a senior male professional"
                            src="/placeholder-user.jpg"
                        />
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-2 rounded shadow-lg">
                            <a className="text-[#041534] hover:text-[#006a66]" href="#"><span className="material-symbols-outlined align-middle">link</span> LinkedIn</a>
                        </div>
                    </div>
                    <h3 className="text-[#041534] text-xl font-bold">أ. عبد العزيز الصنيتان</h3>
                    <p className="text-[#006a66] font-medium text-sm mb-2">مدير قسم التقييم</p>
                    <p className="text-[#45464e] text-sm leading-relaxed">خبرة تزيد عن 10 أعوام في التقييم العقاري في السوق السعودي.</p>
                </div>
            </div>
        </div>
    </section>
)
