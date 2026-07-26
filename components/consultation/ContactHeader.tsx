"use client";

import React from 'react';
import { useI18n } from '@/lib/i18n/context';

export const ContactHeader = () => {
  const { t } = useI18n();

  return (
    <header className="max-w-4xl mb-20 px-8">
      <span className="text-yellow-600 font-headline font-bold text-sm uppercase tracking-[0.2em] mb-4 block">{t("consultation.contact.header.badge")}</span>
      <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-slate-900 tracking-tighter leading-tight mb-8">
        {t("consultation.contact.header.titleFront")} <br />
        <span className="text-yellow-600 italic rtl:not-italic">{t("consultation.contact.header.titleHighlight")}</span>
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
        {t("consultation.contact.header.description")}
      </p>
    </header>
  );
};
