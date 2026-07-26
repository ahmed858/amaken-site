"use client";

import React from 'react';
import { useI18n } from '@/lib/i18n/context';

export const ConsultationCTA = () => {
  const { t } = useI18n();

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-slate-900 p-12 md:p-24 rounded-sm relative overflow-hidden">
          <div className="absolute right-0 rtl:left-0 rtl:right-auto top-0 w-1/2 h-full opacity-10">
            <img
              alt="Abstract Riyadh"
              className="w-full h-full object-cover rtl:-scale-x-100"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3wF2_SPzQ4jHHJIYoTuTMjtAk3cgogrQLUnVCrIk8QtdRQciH7nueTwUgwlBBbykFePLxk0tKxE_8ud5P3Gi782tkRQd84KdK1T7PlU8m8yhOBmMFncXM4au8h_tnvWqcuU-4hYKsz-bk76f0ZltUxF2_dW3GPKivMx8YQCN7ybYd3APMYCP7YCZILqPUJosmxoJh8c3x1BSEvU7BfgJkKZCaIAIylsSBiT2kjLXA8t2PkCzi1t43mlzXffgQtneG6wBYpCwpzjAc"
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-white font-headline font-extrabold text-4xl md:text-6xl mb-8 leading-tight">
              {t("consultation.home.cta.title")}
            </h2>
            <p className="text-slate-400 text-xl mb-12">
              {t("consultation.home.cta.description")}
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-yellow-500 text-slate-900 px-10 py-5 rounded-md font-headline font-extrabold text-lg transition-transform hover:scale-105">
                {t("consultation.home.cta.buttons.expert")}
              </button>
              <button className="text-white flex items-center gap-3 font-headline font-bold text-lg group">
                {t("consultation.home.cta.buttons.methodology")}
                <span className="material-symbols-outlined rtl:rotate-180 group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform">east</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
