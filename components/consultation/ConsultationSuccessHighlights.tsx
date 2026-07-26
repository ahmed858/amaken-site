"use client";

import React from 'react';
import { useI18n } from '@/lib/i18n/context';

export const ConsultationSuccessHighlights = () => {
  const { t } = useI18n();

  return (
    <section className="py-24 px-8 md:px-24 bg-white">
      <h2 className="text-3xl font-headline font-bold mb-12 text-slate-900">{t("consultation.services.successHighlights.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
        <div className="md:col-span-2 md:row-span-2 bg-slate-900 text-white p-12 rounded-xl flex flex-col justify-between overflow-hidden relative">
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-yellow-500 text-slate-900 text-xs font-bold uppercase tracking-widest mb-6">{t("consultation.services.successHighlights.mixedUse.badge")}</span>
            <h4 className="text-4xl font-headline font-bold leading-tight">{t("consultation.services.successHighlights.mixedUse.title")}</h4>
          </div>
          <div className="relative z-10 mt-8 md:mt-0">
            <p className="text-slate-400 mb-8 max-w-sm">{t("consultation.services.successHighlights.mixedUse.desc")}</p>
            <a className="inline-flex items-center gap-2 text-yellow-400 font-bold hover:gap-4 transition-all" href="#">
              {t("consultation.services.successHighlights.mixedUse.link")} <span className="material-symbols-outlined rtl:-scale-x-100">arrow_forward</span>
            </a>
          </div>
          <div className="absolute rtl:left-0 ltr:right-0 bottom-0 opacity-10 transform rtl:-translate-x-1/4 ltr:translate-x-1/4 translate-y-1/4">
            <span className="material-symbols-outlined text-[300px]">location_city</span>
          </div>
        </div>
        <div className="md:col-span-2 bg-slate-50 p-8 rounded-xl flex flex-col md:flex-row items-center md:items-start text-center md:text-start rtl:md:text-right gap-8 group">
          <div className="w-24 h-24 shrink-0 rounded-full bg-white flex items-center justify-center text-yellow-600 font-bold text-2xl shadow-md group-hover:scale-110 transition-transform">95%</div>
          <div>
            <h5 className="font-headline font-bold mb-1 text-slate-900">{t("consultation.services.successHighlights.accuracy.title")}</h5>
            <p className="text-sm text-slate-500">{t("consultation.services.successHighlights.accuracy.desc")}</p>
          </div>
        </div>
        <div className="bg-yellow-500/10 p-8 rounded-xl flex flex-col justify-center border border-yellow-500/20">
          <span className="text-yellow-700 font-black text-4xl mb-2">150+</span>
          <p className="text-yellow-800 font-bold text-sm uppercase tracking-tighter">{t("consultation.services.successHighlights.delivered")}</p>
        </div>
        <div className="bg-slate-100 p-8 rounded-xl flex flex-col justify-center">
          <span className="text-slate-900 font-black text-4xl mb-2">SAR 4B+</span>
          <p className="text-slate-500 font-bold text-sm uppercase tracking-tighter">{t("consultation.services.successHighlights.analyzed")}</p>
        </div>
      </div>
    </section>
  );
};
