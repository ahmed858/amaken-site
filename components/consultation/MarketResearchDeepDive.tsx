"use client";

import React from 'react';
import { useI18n } from '@/lib/i18n/context';

export const MarketResearchDeepDive = () => {
  const { t } = useI18n();

  return (
    <section className="py-24 px-8 md:px-24 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.1em] text-yellow-600 mb-6">{t("consultation.services.marketResearch.badge")}</h2>
          <h3 className="text-4xl font-headline font-bold mb-8">{t("consultation.services.marketResearch.title")}</h3>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p className="font-bold text-slate-900">{t("consultation.services.marketResearch.descBold")}</p>
            <p>{t("consultation.services.marketResearch.desc")}</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div className="p-6 bg-slate-50 rounded-lg border-l-4 rtl:border-l-0 rtl:border-r-4 border-yellow-500">
              <span className="material-symbols-outlined text-yellow-600 mb-4">analytics</span>
              <h4 className="font-headline font-bold mb-2">{t("consultation.services.marketResearch.features.f1.title")}</h4>
              <p className="text-sm text-slate-500">{t("consultation.services.marketResearch.features.f1.desc")}</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg border-l-4 rtl:border-l-0 rtl:border-r-4 border-yellow-500">
              <span className="material-symbols-outlined text-yellow-600 mb-4">group</span>
              <h4 className="font-headline font-bold mb-2">{t("consultation.services.marketResearch.features.f2.title")}</h4>
              <p className="text-sm text-slate-500">{t("consultation.services.marketResearch.features.f2.desc")}</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 p-10 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 rtl:left-0 rtl:right-auto w-32 h-32 bg-yellow-500/10 rounded-full rtl:-ml-16 -mr-16 -mt-16"></div>
          <h4 className="font-headline font-bold text-xl mb-10 flex items-center gap-2">
            <span className="material-symbols-outlined text-yellow-600">insights</span>
            {t("consultation.services.marketResearch.methodology.title")}
          </h4>
          <div className="space-y-8">
            {[
              { num: '01', title: t("consultation.services.marketResearch.methodology.steps.s1.title"), desc: t("consultation.services.marketResearch.methodology.steps.s1.desc") },
              { num: '02', title: t("consultation.services.marketResearch.methodology.steps.s2.title"), desc: t("consultation.services.marketResearch.methodology.steps.s2.desc") },
              { num: '03', title: t("consultation.services.marketResearch.methodology.steps.s3.title"), desc: t("consultation.services.marketResearch.methodology.steps.s3.desc") }
            ].map((step) => (
              <div key={step.num} className="flex gap-6">
                <div className="w-12 h-12 shrink-0 rounded bg-white flex items-center justify-center font-bold text-yellow-600 shadow-sm">{step.num}</div>
                <div>
                  <h5 className="font-bold mb-1 text-slate-900">{step.title}</h5>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 h-48 w-full bg-white/50 backdrop-blur-sm rounded-lg flex items-end justify-around p-4 gap-2">
            <div className="w-full bg-yellow-500/20 h-[30%] rounded-t-sm"></div>
            <div className="w-full bg-yellow-500/40 h-[55%] rounded-t-sm"></div>
            <div className="w-full bg-yellow-500/70 h-[85%] rounded-t-sm"></div>
            <div className="w-full bg-yellow-500 h-[65%] rounded-t-sm"></div>
            <div className="w-full bg-yellow-500/50 h-[95%] rounded-t-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
