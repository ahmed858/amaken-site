"use client"

import React from 'react'

export const HeroSection = () => (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#041534]/60 z-10"></div>
        <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="Panoramic view of modern Riyadh skyline architecture"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA8MamYw0MThC8sHAfmBZFksIlPdln0l6UC3UHEtmpj2pYmj0wZGJo1lMZt5BWx13EIAMH-GMy95WMufmj2U4VTr03Se_8yYlod_LRHxYbQan7AO4zHw-0FB7fbErGktFeNFZgIAzUVIr15X6vZlw2RB5AtNYpra50BWcCmfBPWT-01v5nzbjB4Vv2yBliZV5ZgiLY3CfMmvoOQBCtTFifh-Ql-Ig9yKYzc4_TCo8FodSR4v9nC8xv-HEWvqm7qLDS5dKZTAeDsIg"
        />
        <div className="relative z-20 text-center px-4">
            <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight mb-6">الريادة في التقييم العقاري</h1>
            <p className="text-slate-200 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">نرسخ معايير الثقة والاحترافية في صميم سوق العقار السعودي من خلال الدقة السيادية.</p>
        </div>
    </section>
)
