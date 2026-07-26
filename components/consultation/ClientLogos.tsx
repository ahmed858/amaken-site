"use client";

import React from 'react';
import { useI18n } from '@/lib/i18n/context';

export const ClientLogos = () => {
  const { t } = useI18n();
  const clients = ['PIF GROUP', 'ROSHN', 'NEOM STRAT', 'REDI CO.', 'DIRIYAH AUTH.'];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center text-slate-500 font-headline text-xs font-bold tracking-[0.4em] uppercase mb-12">
          {t("consultation.home.clientLogos.title")}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
          {clients.map((client) => (
            <div key={client} className="text-2xl font-black text-slate-400">
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
