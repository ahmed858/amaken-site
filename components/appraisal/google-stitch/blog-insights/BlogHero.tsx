"use client"

import React from 'react'

export const BlogHero = () => (
    <section className="mb-16">
        <div className="flex flex-col lg:flex-row bg-[#ffffff] rounded-xl overflow-hidden shadow-sm">
            <div className="w-full lg:w-2/3 h-[400px] lg:h-[520px] relative">
                <img
                    className="w-full h-full object-cover"
                    alt="Modern architectural rendering of a Riyadh commercial skyscraper"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC14DXfPRb3EcKoiH53XsJqWpt46ff90T-0StnqkHIW1OqzrcaBeG2N9i2GEbOU0vf_S7Syd6s4WpaVt8SlDimL7Syl9owZJw8n4uTWwxhQCZqycRERlN9hX48AiVGrRlf-zeyFTvyrUf3InFqST9V5GY2OAq6BkOhefp36IpTv3gKtMcj6xXNTgfUJn3tVJGSwIoQ7Pztzkme1vZ8UNcHlSi5ZLv6Kg26dm5QD9t3-VmjOkslYI8mc1pz6zmCcVtabIoiHXKI-iYg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041534]/60 to-transparent"></div>
                <div className="absolute bottom-8 right-8 left-8 text-white">
                    <span className="inline-block px-3 py-1 bg-[#006a66] rounded-full text-[10px] font-bold tracking-wider mb-4">FEATURED INSIGHT</span>
                    <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">The Future of Riyadh 2030: Navigating the Commercial Real Estate Boom</h1>
                    <p className="text-lg text-slate-200 max-w-2xl leading-relaxed mb-6">Expert analysis on how the Saudi Vision 2030 is reshaping the valuation landscape for Grade A office spaces and industrial hubs.</p>
                    <div className="flex items-center gap-4 text-sm font-medium">
                        <span>Admin</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#006a66]"></span>
                        <span>October 24, 2024</span>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/3 p-10 flex flex-col justify-center bg-[#f2f4f6] border-r border-[#c5c6cf]/10">
                <h3 className="text-[#041534] font-bold text-xl mb-6 leading-snug">Inside this Dossier</h3>
                <ul className="space-y-6">
                    <li className="flex gap-4">
                        <span className="text-[#006a66] font-black text-2xl">01</span>
                        <p className="text-[#45464e] font-medium">Impact of New Giga-Projects on Neighborhood Valuations.</p>
                    </li>
                    <li className="flex gap-4">
                        <span className="text-[#006a66] font-black text-2xl">02</span>
                        <p className="text-[#45464e] font-medium">Sustainable Appraisals: The ESG shift in Saudi Real Estate.</p>
                    </li>
                    <li className="flex gap-4">
                        <span className="text-[#006a66] font-black text-2xl">03</span>
                        <p className="text-[#45464e] font-medium">Logistics Hubs: The new gold mine for institutional investors.</p>
                    </li>
                </ul>
                <button className="mt-8 text-[#006a66] font-bold flex items-center gap-2 group">
                    Read Full Article
                    <span className="material-symbols-outlined group-hover:translate-x-[-4px] transition-transform align-middle">arrow_back</span>
                </button>
            </div>
        </div>
    </section>
)
