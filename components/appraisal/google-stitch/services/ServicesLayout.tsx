"use client"

import React from 'react'
import ServiceCard from '../landing-page/ServiceCard'
import { servicesData } from './serviceData'
import { ServiceProcess } from '../service-detail/ServiceProcess';

export function ServicesLayout() {
    const services = Object.values(servicesData);

    return (
        <div className="bg-[#f8f9fb] text-[#191c1e] min-h-screen" dir="rtl">
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />
            <main>
                <section className="relative bg-[#041534] text-white pt-24 pb-32 px-8 overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDixSh2Yo2KFkO5H4_agf6hb0K8wIxUsPf5FxsRN8Wb8A_j0rXcBtlgL-ZNWq97bl1EgiZkKkOj3lRTklkAg2CtIkVpk4i6r5OyqAwK0cbsQjSqu8S0adw_CjASTKloeYw5-7pToIxYK_lD1mCzhE_kf-dMLid4IAc7mOYeCky2mhTsa8A6GWTsu1CGM8iE9hbuBYKxXW9YEfupps2fP7QOlyyqKe8Ck0YCARyDsynUGoXHLPmMtNTy1cQo8QEQpDWjTCDSdncOdxY')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    ></div>
                    <div className="max-w-7xl mx-auto relative z-10 text-right">
                        <nav className="flex items-center gap-2 text-[#8392b7] mb-6 text-sm justify-start">
                            <span>الرئيسية</span>
                            <span className="material-symbols-outlined text-xs">chevron_left</span>
                            <span className="text-white">الخدمات</span>
                        </nav>
                        <div className="flex items-center gap-4 mb-4 justify-end">
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">خدمات التقييم</h1>
                        </div>
                        <p className="text-lg text-[#8392b7] max-w-2xl leading-relaxed mr-0 ml-auto">
                            نقدم مجموعة متكاملة من خدمات التقييم الاحترافية التي تلبي احتياجات مختلف القطاعات بموثوقية ودقة عالية.
                        </p>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-8 -mt-12 relative z-20 pb-24">
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <ServiceCard
                                key={service.id}
                                icon={<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{service.hero.icon}</span> as any}
                                title={service.hero.title}
                                description={service.hero.description}
                                href={`/appraisal/services/${service.slug}`}
                            />
                        ))}
                    </div>
                </section>
                <ServiceProcess />
            </main>
        </div>
    )
}
