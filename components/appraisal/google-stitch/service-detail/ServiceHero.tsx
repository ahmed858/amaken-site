"use client"

import React from 'react'

export const ServiceHero = ({ title, description, icon }: { title: string, description: string, icon: string }) => (
    <section className="relative bg-[#041534] text-white pt-24 pb-32 px-8 overflow-hidden" dir="rtl">
        <div
            className="absolute inset-0 opacity-10"
            style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDixSh2Yo2KFkO5H4_agf6hb0K8wIxUsPf5FxsRN8Wb8A_j0rXcBtlgL-ZNWq97bl1EgiZkKkOj3lRTklkAg2CtIkVpk4i6r5OyqAwK0cbsQjSqu8S0adw_CjASTKloeYw5-7pToIxYK_lD1mCzhE_kf-dMLid4IAc7mOYeCky2mhTsa8A6GWTsu1CGM8iE9hbuBYKxXW9YEfupps2fP7QOlyyqKe8Ck0YCARyDsynUGoXHLPmMtNTy1cQo8QEQpDWjTCDSdncOdxY')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        ></div>
        <div className="max-w-7xl mx-auto relative z-10 text-right">
            <nav className="flex items-center gap-2 text-[#8392b7] mb-6 text-sm justify-start" dir="rtl">
                <span>الرئيسية</span>
                <span className="material-symbols-outlined text-xs">chevron_left</span>
                <span>خدماتنا</span>
                <span className="material-symbols-outlined text-xs">chevron_left</span>
                <span className="text-white">{title}</span>
            </nav>
            <div className="flex items-center gap-4 mb-4 justify-end">
                <div className="w-12 h-12 bg-[#006a66] flex items-center justify-center rounded-xl shadow-lg">
                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{title}</h1>
            </div>
            <p className="text-lg text-[#8392b7] max-w-2xl leading-relaxed mr-0 ml-auto">
                {description}
            </p>
        </div>
    </section>
)
