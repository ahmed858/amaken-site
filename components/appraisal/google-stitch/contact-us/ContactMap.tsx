"use client"

import React from 'react'

export const ContactMap = () => (
    <div className="w-full aspect-video rounded-xl border-4 border-[#041534] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 shadow-sm">
        <img
            alt="Map showing Amaken Appraisal office location"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2zzAomPrHzTT6QChEE-wMDj_6y9A3pmMccaQ-1n8t1P_DxWPEvNYxeskIEJuu_gxhEWxLp-vLXtJZD-YmHnxO3uQp-2UrijUbRNAlAjgBMb25CFBdtY7eXVvBJQ4yL8t9hvHXT__F-9Aks6iaSiVCHH79yGsdnIn21zFKHSX-fmGvqcxKXpSlxJvqsf_AcgHXE4oYyYXfOHy8aek-MsDddMvl-cDPlziG4kb4B3ZKcrsFDS35vrOzOUHhw0IGFIiFsOoTuvyCJ1A"
        />
        <div className="absolute inset-0 bg-[#041534]/10 pointer-events-none"></div>
        {/* Map Pin Mock */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#006a66] flex flex-col items-center">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            <div className="bg-white text-[#041534] text-[10px] font-bold px-2 py-1 rounded shadow-md mt-1 whitespace-nowrap">Amaken HQ</div>
        </div>
    </div>
)
