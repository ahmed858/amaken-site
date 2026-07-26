"use client";

import React from 'react';
import { useI18n } from '@/lib/i18n/context';

export const ServicesBottomCTA = () => {
  const { t } = useI18n();

  return (
    <section className="py-24 px-8 md:px-24 bg-white">
      <div className="bg-slate-50 rounded-2xl p-12 md:p-24 text-center relative overflow-hidden border border-slate-200">
        <div className="absolute inset-0 z-0 opacity-5">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnXYYsQrIbyppErTel_cjsQoOYgb4Gno_WWd2Ib5L5PBNGqiYSd0d2cmKU-M04H9flbHsejrvmTSt-Qh2rcKnw54_6F7cSElVLHY-oJygI99v-BNbh7N6kqsjwowzfrgJDRfKSpg4bZCkKueZrdE3ntNWmGvfmQUSCJlPWfyw_jNS0Mg2J-NdbnPx7JOz7lZgbKPibeyQWlY57WOxsoZpd3tTqweui8x5yRTkwozYDV0cVLEgGsfJrWCbg3LymDKVRVbsOv1fGd0jv"
            alt="Abstract"
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-8 text-slate-900">{t("consultation.services.cta.title")}</h2>
          <p className="text-lg text-slate-600 mb-12">{t("consultation.services.cta.description")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-900 text-white px-10 py-4 rounded-lg font-headline font-bold hover:scale-95 transition-transform shadow-lg shadow-slate-900/20">
              {t("consultation.services.cta.buttons.request")}
            </button>
            <button className="bg-transparent border-b-2 border-yellow-500 text-slate-900 px-10 py-4 rounded-lg font-headline font-bold hover:bg-slate-100 transition-colors">
              {t("consultation.services.cta.buttons.download")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
