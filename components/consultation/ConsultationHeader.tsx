"use client";

import React from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n/context';

export const ConsultationHeader = () => {
  const { locale, setLocale } = useI18n();

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0_20px_40px_rgba(26,28,28,0.06)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link href="/consultation" className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white font-headline">
          Amaken
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link
            className="font-manrope tracking-[0.02em] uppercase text-sm font-semibold text-yellow-600 dark:text-yellow-400 border-b-2 border-yellow-500 pb-1 hover:text-yellow-500 transition-colors duration-300"
            href="/consultation"
          >
            Home
          </Link>
          <Link
            className="font-manrope tracking-[0.02em] uppercase text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-yellow-500 transition-colors duration-300"
            href="/consultation/services"
          >
            Services
          </Link>
          <Link
            className="font-manrope tracking-[0.02em] uppercase text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-yellow-500 transition-colors duration-300"
            href="/consultation/contact"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300 font-manrope font-semibold text-sm uppercase"
          >
            <span className="material-symbols-outlined text-[18px]">language</span>
            <span className="hidden sm:inline">{locale === 'en' ? 'العربية' : 'English'}</span>
          </button>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-md font-headline text-sm font-bold tracking-tight transition-transform active:scale-95 duration-200 uppercase">
            Request a Consultation
          </button>
        </div>
      </div>
    </nav>
  );
};
