"use client"

import React from 'react'

export const ReportSamplePreview = ({ title, description, features }: { title: string, description: string, features: string[] }) => (
    <section className="max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center gap-16" dir="rtl">
        <div className="flex-1 space-y-6 text-right">
            <h2 className="text-3xl font-bold text-[#041534] leading-tight">{title}</h2>
            <p className="text-[#45464e] text-lg">{description}</p>
            <ul className="space-y-4">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 justify-start">
                        <span className="material-symbols-outlined text-[#006a66] align-middle">check_circle</span>
                        <span className="font-medium">{feature}</span>
                    </li>
                ))}
            </ul>
            <button className="flex items-center gap-2 px-8 py-4 bg-[#041534] text-white rounded-lg font-bold hover:bg-[#1b2a4a] transition-all shadow-lg">
                <span>تحميل عينة من التقرير</span>
                <span className="material-symbols-outlined align-middle">download</span>
            </button>
        </div>
        <div className="flex-1 relative group w-full">
            <div className="absolute inset-0 bg-[#006a66]/5 -rotate-2 rounded-xl scale-105"></div>
            <div className="relative bg-white p-4 rounded-xl shadow-2xl border border-[#edeef0] overflow-hidden">
                <div
                    className="aspect-[3/4] bg-slate-100 rounded-lg blur-sm overflow-hidden"
                    style={{
                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOb_i7PccWjcA2-3OrXFl-JhzMBVnk45n0eJ86lic3ttZVv1dYuiay6ZLUJwXRIB6FwgONp6KXgaQ4-KABPIHiwUTkfseLq3IeAdtpODPjOZRpVvSp9nauvKSzkwrJxB6EQDW6hjDXCFdkKO4OjqRFsG4H-hAOHKG1dMKUtdUY4OnxG9YlA8tndg4374nbJeclPR-eOof3gaVy0YtpGlI5qy_IU-VLjILSn8_0i3gkDVClNKdZRZ12CvOUIHwh_wc5mlFjm-Csu34')",
                        backgroundSize: 'cover'
                    }}
                >
                    <div className="absolute inset-0 bg-white/20"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#041534]/40 backdrop-blur-[2px]">
                    <span className="bg-white text-[#041534] px-6 py-2 rounded-full font-bold shadow-lg">معاينة التقرير</span>
                </div>
            </div>
        </div>
    </section>
)
