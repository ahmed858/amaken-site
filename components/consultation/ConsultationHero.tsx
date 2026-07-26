"use client";

import React from 'react';
import { useI18n } from '@/lib/i18n/context';

export const ConsultationHero = () => {
  const { t } = useI18n();

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img
          alt="Riyadh Skyline"
          className="w-full h-full object-cover opacity-60"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjiYJfPL6lbKSyHft5VcA-aSBKzLyXXyu9vc4AOaPAWJee8Al_hB-r8bPdvNVkYjQ4R14-j0THSqHu2hVDU8_jHc5wTcJuvfq1XP4Tjgmv9qYHQLUD1YeXE7BBowbBSChg_s2j4dEkGgf3wDE9LCcSXo7SgcvDaMGhJlHI_N-zhklkeJZZcN8GV0PEl_DFcsSqTtSksjv2p-3kdRX6nRFkCQJkmtE2qBxu3rp9UKFKOYcAeyxfsfSkeAIIbHIMVVyTfkjBGTzXlF9c"
        />
        <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-slate-900 via-slate-900/40 to-transparent"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-32">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-yellow-500/20 border border-yellow-500/30 rounded-sm">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            <span className="text-yellow-500 font-headline text-xs font-bold tracking-[0.2em] uppercase">{t("consultation.home.hero.tagline")}</span>
          </div>
          <h1 className="text-white font-headline font-extrabold text-5xl md:text-7xl leading-[1.1] tracking-tighter">
            {t("consultation.home.hero.titleFront")} <span className="text-yellow-400">{t("consultation.home.hero.titleHighlight")}</span> {t("consultation.home.hero.titleBack")}
          </h1>
          <p className="text-slate-300 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
            {t("consultation.home.hero.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <button className="bg-yellow-500 text-slate-900 px-10 py-5 rounded-md font-headline font-extrabold tracking-wide text-lg flex items-center justify-center gap-3 group transition-all hover:shadow-[0_0_30px_rgba(239,212,71,0.3)]">
              {t("consultation.home.hero.buttons.request")}
              <span className="material-symbols-outlined rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button className="text-white border border-white/20 hover:bg-white/10 px-10 py-5 rounded-md font-headline font-bold text-lg backdrop-blur-sm transition-all">
              {t("consultation.home.hero.buttons.portfolio")}
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 rtl:left-8 ltr:right-8 hidden xl:block">
        <div className="bg-white/10 border border-white/10 p-6 backdrop-blur-md rounded-lg max-w-xs">
          <p className="text-white font-headline font-bold text-lg mb-2">{t("consultation.home.hero.marketReport.title")}</p>
          <p className="text-slate-400 text-sm mb-4">{t("consultation.home.hero.marketReport.description")}</p>
          <a className="text-yellow-400 flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-yellow-300 transition-colors" href="#">
            {t("consultation.home.hero.marketReport.download")} <span className="material-symbols-outlined text-sm">download</span>
          </a>
        </div>
      </div>
    </section>
  );
};
