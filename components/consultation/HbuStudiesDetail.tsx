"use client";

import React from 'react';
import { useI18n } from '@/lib/i18n/context';

export const HbuStudiesDetail = () => {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-slate-50 px-8 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.1em] text-yellow-600 mb-4">{t("consultation.services.hbuStudies.badge")}</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold text-slate-900">{t("consultation.services.hbuStudies.title")}</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 relative h-[500px] rounded-xl overflow-hidden group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGxe2twJnhtaTXTOHOK9jNL2xrWecNieAG0t0-NVGvVJaObhBKChbpKfac9F276mELdmo3Cie1IEgnml7oprllIg5C_rEmuHXMGnMtlHXweJ9wisKAJmC015GV0CPlSnoQvZygfxX54Q0qjrLK7JjKw91tbdN8gK9YDG348WghLi_w1wE5BH7M0zy-hxmwsraMfDwmt9yWYGKrYXC8tL4OFHKgD0QlYF81o139HuG-O-ql6pTATqFdYjCW-n41FIjJZcpPkHdvlqJ4"
              alt="HBU Analysis"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-10">
              <div className="text-white max-w-md">
                <h4 className="text-2xl font-headline font-bold mb-4">{t("consultation.services.hbuStudies.sitePotential.title")}</h4>
                <p className="text-slate-200 leading-relaxed">
                  {t("consultation.services.hbuStudies.sitePotential.desc")}
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="p-8 bg-slate-100 rounded-xl">
              <span className="material-symbols-outlined text-yellow-600 text-4xl mb-6">gavel</span>
              <h5 className="font-headline font-bold text-lg mb-2 text-slate-900">{t("consultation.services.hbuStudies.compliance.title")}</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t("consultation.services.hbuStudies.compliance.desc")}
              </p>
            </div>
            <div className="p-8 bg-slate-100 rounded-xl">
              <span className="material-symbols-outlined text-yellow-600 text-4xl mb-6">payments</span>
              <h5 className="font-headline font-bold text-lg mb-2 text-slate-900">{t("consultation.services.hbuStudies.viability.title")}</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t("consultation.services.hbuStudies.viability.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
