"use client";

import React from 'react';
import { useI18n } from '@/lib/i18n/context';

export const CoreServices = () => {
  const { t } = useI18n();

  const services = [
    {
      title: t("consultation.home.coreServices.services.s1.title"),
      description: t("consultation.home.coreServices.services.s1.description"),
      icon: 'analytics',
    },
    {
      title: t("consultation.home.coreServices.services.s2.title"),
      description: t("consultation.home.coreServices.services.s2.description"),
      icon: 'finance',
    },
    {
      title: t("consultation.home.coreServices.services.s3.title"),
      description: t("consultation.home.coreServices.services.s3.description"),
      icon: 'landscape',
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-yellow-600 font-headline text-sm font-bold tracking-[0.3em] uppercase block mb-4">{t("consultation.home.coreServices.badge")}</span>
            <h2 className="text-slate-900 font-headline font-extrabold text-4xl md:text-6xl leading-tight tracking-tighter">
              {t("consultation.home.coreServices.titleFront")} <br />{t("consultation.home.coreServices.titleBack")}
            </h2>
          </div>
          <p className="text-slate-600 text-lg max-w-sm mb-2">
            {t("consultation.home.coreServices.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200 overflow-hidden rounded-2xl">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-12 hover:bg-yellow-500 transition-all duration-500 ${
                index !== services.length - 1 ? 'border-r border-slate-200 rtl:border-r-0 rtl:border-l' : ''
              } ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
            >
              <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-10 group-hover:bg-white/20 transition-colors">
                <span className="material-symbols-outlined text-yellow-600 text-3xl group-hover:text-white">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-slate-900 mb-6 group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-8 group-hover:text-white/80 leading-relaxed">
                {service.description}
              </p>
              <a
                className="inline-flex items-center gap-2 text-yellow-600 group-hover:text-white font-bold text-sm uppercase tracking-widest transition-all"
                href="#"
              >
                {t("consultation.home.coreServices.learnMore")} <span className="material-symbols-outlined text-sm rtl:-scale-x-100">chevron_right</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
