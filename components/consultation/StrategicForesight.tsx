"use client";

import React from 'react';
import { useI18n } from '@/lib/i18n/context';

export const StrategicForesight = () => {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-20">
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl"></div>
          <img
            alt="Architectural Masterplan"
            className="w-full aspect-square object-cover rounded-sm shadow-2xl relative z-10"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABg7CbHKEAJIz0f0vwTe_t-24sfJTKerJ60U8xksmFV6Jeuu5N2y1PxWUFnO9aKsZAgW1THFDpD417qVy1blutMlBZD4V_cb5Pix0UXcq1pvJ2_dl3m008Ch0u8pOnJXAGlT9rF-KXzEeg5e1hGYz0G-TGlVfwMRXCjgZYQd7Puxk6bycIpVYz-ZaMs8wbhpPuDqPwteW7ehnH-satSX8PkObNX2_glVLXSxr_QpwXkJorCihIXRXzFH7GLqwn0MdD0MUidLnJ9pVJ"
          />
          <div className="absolute -bottom-6 rtl:-left-6 rtl:-right-auto -right-6 w-full h-full border-2 border-yellow-500 z-0"></div>
        </div>
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-slate-900 font-headline font-extrabold text-4xl leading-tight">
            {t("consultation.home.strategicForesight.titleFront")} <br />
            <span className="text-yellow-600 italic rtl:not-italic">{t("consultation.home.strategicForesight.titleHighlight")}</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            {t("consultation.home.strategicForesight.description")}
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-yellow-600 mt-1">verified_user</span>
              <div>
                <strong className="text-slate-900 block font-bold">{t("consultation.home.strategicForesight.points.p1.title")}</strong>
                <span className="text-slate-500 text-sm">
                  {t("consultation.home.strategicForesight.points.p1.description")}
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-yellow-600 mt-1">hub</span>
              <div>
                <strong className="text-slate-900 block font-bold">{t("consultation.home.strategicForesight.points.p2.title")}</strong>
                <span className="text-slate-500 text-sm">
                  {t("consultation.home.strategicForesight.points.p2.description")}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
