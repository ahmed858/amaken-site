"use client";

import React from 'react';
import { useI18n } from '@/lib/i18n/context';

export const ContactForm = () => {
  const { t } = useI18n();

  return (
    <section className="lg:col-span-7 bg-slate-50 p-8 md:p-12 rounded-xl relative overflow-hidden border border-slate-200">
      <div className="absolute top-0 right-0 rtl:left-0 rtl:right-auto w-32 h-32 bg-yellow-500/5 rounded-bl-full rtl:rounded-br-full rtl:rounded-bl-none"></div>
      <h2 className="text-2xl font-headline font-bold text-slate-900 mb-2">{t("consultation.contact.form.title")}</h2>
      <p className="text-slate-500 mb-10 text-sm">{t("consultation.contact.form.description")}</p>
      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group">
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{t("consultation.contact.form.fullName")}</label>
            <input
              className="w-full bg-transparent border-0 border-b border-slate-300 py-3 focus:ring-0 focus:border-yellow-600 transition-all duration-300 placeholder:text-slate-400"
              placeholder="John Doe"
              type="text"
            />
          </div>
          <div className="relative group">
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{t("consultation.contact.form.phoneNumber")}</label>
            <input
              className="w-full bg-transparent border-0 border-b border-slate-300 py-3 focus:ring-0 focus:border-yellow-600 transition-all duration-300 placeholder:text-slate-400"
              placeholder="+966 50 000 0000"
              type="tel"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group">
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{t("consultation.contact.form.email")}</label>
            <input
              className="w-full bg-transparent border-0 border-b border-slate-300 py-3 focus:ring-0 focus:border-yellow-600 transition-all duration-300 placeholder:text-slate-400"
              placeholder="email@company.sa"
              type="email"
            />
          </div>
          <div className="relative group">
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{t("consultation.contact.form.serviceType.label")}</label>
            <select className="w-full bg-transparent border-0 border-b border-slate-300 py-3 focus:ring-0 focus:border-yellow-600 transition-all duration-300 appearance-none">
              <option>{t("consultation.contact.form.serviceType.options.marketResearch")}</option>
              <option>{t("consultation.contact.form.serviceType.options.feasibilityStudy")}</option>
              <option>{t("consultation.contact.form.serviceType.options.hbu")}</option>
              <option>{t("consultation.contact.form.serviceType.options.other")}</option>
            </select>
          </div>
        </div>
        <div className="relative group">
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{t("consultation.contact.form.projectDetails.label")}</label>
          <textarea
            className="w-full bg-transparent border-0 border-b border-slate-300 py-3 focus:ring-0 focus:border-yellow-600 transition-all duration-300 placeholder:text-slate-400 resize-none"
            placeholder={t("consultation.contact.form.projectDetails.placeholder")}
            rows={4}
          ></textarea>
        </div>
        <button
          className="w-full md:w-auto bg-slate-900 text-white px-12 py-5 font-headline font-extrabold rounded shadow-lg hover:shadow-slate-900/20 transition-all active:scale-95 group flex items-center justify-center gap-3"
          type="submit"
        >
          {t("consultation.contact.form.submit")}
          <span className="material-symbols-outlined text-sm rtl:rotate-180">arrow_forward</span>
        </button>
      </form>
    </section>
  );
};
