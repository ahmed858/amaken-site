"use client";

import React from 'react';
import { useI18n } from '@/lib/i18n/context';

export const TrustSignals = () => {
  const { t } = useI18n();

  return (
    <section className="bg-white relative py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 bg-slate-50 rounded-xl px-12 -mt-24 relative z-20 shadow-xl border border-slate-200">
          <div className="text-center md:text-left rtl:md:text-right">
            <h3 className="text-4xl font-headline font-extrabold text-yellow-600 mb-1">10+</h3>
            <p className="text-slate-500 font-label text-sm uppercase tracking-widest font-semibold">{t("consultation.home.trustSignals.years")}</p>
          </div>
          <div className="text-center md:text-left rtl:md:text-right">
            <h3 className="text-4xl font-headline font-extrabold text-yellow-600 mb-1">500+</h3>
            <p className="text-slate-500 font-label text-sm uppercase tracking-widest font-semibold">{t("consultation.home.trustSignals.projects")}</p>
          </div>
          <div className="text-center md:text-left rtl:md:text-right">
            <h3 className="text-4xl font-headline font-extrabold text-yellow-600 mb-1">SAR 15B+</h3>
            <p className="text-slate-500 font-label text-sm uppercase tracking-widest font-semibold">{t("consultation.home.trustSignals.valuation")}</p>
          </div>
          <div className="text-center md:text-left rtl:md:text-right">
            <h3 className="text-4xl font-headline font-extrabold text-yellow-600 mb-1">98%</h3>
            <p className="text-slate-500 font-label text-sm uppercase tracking-widest font-semibold">{t("consultation.home.trustSignals.success")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
