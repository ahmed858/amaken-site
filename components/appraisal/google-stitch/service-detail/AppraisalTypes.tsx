"use client"

import React from 'react'

export const AppraisalTypes = ({ types }: { types: string[] }) => (
    <section className="max-w-7xl mx-auto px-8 -mt-12 relative z-20" dir="rtl">
        <div className="bg-[#ffffff] p-8 rounded-xl shadow-xl shadow-[#041534]/5 text-right">
            <h2 className="text-xs uppercase text-[#45464e] tracking-widest mb-6 font-bold">نطاق التقييم</h2>
            <div className="flex flex-wrap gap-3 justify-start">
                {types.map((type, idx) => (
                    <span
                        key={idx}
                        className="px-5 py-2.5 bg-[#f2f4f6] text-[#041534] rounded-full font-medium hover:bg-[#86f5ee] hover:text-[#00201f] transition-colors cursor-default"
                    >
                        {type}
                    </span>
                ))}
            </div>
        </div>
    </section>
)
