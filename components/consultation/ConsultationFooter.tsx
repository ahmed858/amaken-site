"use client";

import React from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n/context';

export const ConsultationFooter = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 w-full py-12 px-8 border-t border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
        <div>
          <div className="text-xl font-black text-slate-800 dark:text-slate-100 font-headline mb-6">Amaken</div>
          <p className="font-public-sans text-sm leading-relaxed text-slate-500 dark:text-slate-400 max-w-xs">
            {t("consultation.footer.brand.desc")}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <p className="text-slate-900 font-bold text-sm font-headline">{t("consultation.footer.nav.title")}</p>
            <nav className="flex flex-col gap-2">
              <Link className="text-slate-500 dark:text-slate-400 text-sm hover:underline decoration-yellow-500 underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="/consultation">{t("consultation.footer.nav.home")}</Link>
              <Link className="text-slate-500 dark:text-slate-400 text-sm hover:underline decoration-yellow-500 underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="/consultation/services">{t("consultation.footer.nav.services")}</Link>
              <Link className="text-slate-500 dark:text-slate-400 text-sm hover:underline decoration-yellow-500 underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="/consultation/contact">{t("consultation.footer.nav.contact")}</Link>
            </nav>
          </div>
          {/* 
          <div className="space-y-4">
            <p className="text-slate-900 font-bold text-sm font-headline">Corporate</p>
            <nav className="flex flex-col gap-2">
              <Link className="text-slate-500 dark:text-slate-400 text-sm hover:underline decoration-yellow-500 underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Privacy Policy</Link>
              <Link className="text-slate-500 dark:text-slate-400 text-sm hover:underline decoration-yellow-500 underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Terms of Service</Link>
              <Link className="text-slate-500 dark:text-slate-400 text-sm hover:underline decoration-yellow-500 underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Careers</Link>
            </nav>
          </div> */}
        </div>

        <div className="space-y-6">
          <p className="text-slate-900 font-bold text-sm font-headline">{t("consultation.footer.contact.title")}</p>
          <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <p className="flex items-center gap-2"><span className="material-symbols-outlined text-yellow-600 text-lg">location_on</span> {t("consultation.footer.contact.address")}</p>
            <p className="flex items-center gap-2" dir="ltr"><span className="material-symbols-outlined text-yellow-600 text-lg">mail</span> strategy@amaken.sa</p>
            <p className="flex items-center gap-2" dir="ltr"><span className="material-symbols-outlined text-yellow-600 text-lg">call</span> +966 11 000 0000</p>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
        <p className="font-public-sans text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          {t("consultation.footer.bottom.copyright")}
        </p>
        <div className="flex gap-4">
          <Link className="text-slate-400 hover:text-yellow-600 transition-colors" href="#"><span className="material-symbols-outlined">share</span></Link>
          <Link className="text-slate-400 hover:text-yellow-600 transition-colors" href="#"><span className="material-symbols-outlined">public</span></Link>
        </div>
      </div>
    </footer>
  );
};
