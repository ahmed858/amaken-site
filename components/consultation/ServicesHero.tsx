"use client";

import React from 'react';
import { useI18n } from '@/lib/i18n/context';

export const ServicesHero = () => {
  const { t } = useI18n();

  return (
    <section className="relative h-[60vh] flex items-center pt-20 px-8 md:px-24 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-20 grayscale scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUgu0yAk24uCzOe1SMxXEfN8f0HlCGX3dFSUID2yrzhBJT4A7unA92oYnxwAf4j1y8ZCzQhi9u2UJKI4s3e-Vlw6xPhDdrTaQWCbvrPCULUBahZaxehAizYQ-LwEfwjEMdyL-ZljeuCTj-DV3xnUtCLVPdz3xOzPJhWdXrkwi175cs4E8cH7XO5TpEoYEZ_eRb7mUgLjB1O39kgT0nj5pi87v40TrlXZraSGd2lphrNAXjVzgxOAVrvJPDX66IGz9Xb1Pb2zBsShwz"
          alt="Services Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-white via-white/60 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-3xl">
        <span className="text-yellow-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
          {t("consultation.services.hero.badge")}
        </span>
        <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-slate-900 leading-tight tracking-tighter">
          {t("consultation.services.hero.titleFront")} <span className="text-yellow-400 bg-slate-900 px-4 py-1">{t("consultation.services.hero.titleHighlight")}</span> {t("consultation.services.hero.titleBack")}
        </h1>
        <p className="mt-8 text-xl text-slate-600 max-w-xl leading-relaxed">
          {t("consultation.services.hero.description")}
        </p>
      </div>
    </section>
  );
};
