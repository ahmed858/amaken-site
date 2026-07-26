"use client";

import React from 'react';
import { useI18n } from '@/lib/i18n/context';

export const ContactSidebar = () => {
  const { t } = useI18n();

  return (
    <aside className="lg:col-span-5 space-y-12">
      <div className="bg-slate-100 p-8 rounded-xl">
        <h3 className="text-xl font-headline font-bold text-slate-900 mb-6 flex items-center gap-3">
          <span className="material-symbols-outlined text-yellow-600">location_on</span>
          {t("consultation.contact.sidebar.hq.title")}
        </h3>
        <div className="space-y-6 text-slate-600">
          <div className="flex items-start gap-4">
            <div className="text-slate-900 font-semibold shrink-0 w-24 text-xs uppercase tracking-tighter pt-1">{t("consultation.contact.sidebar.hq.addressLabel")}</div>
            <p className="text-sm leading-relaxed text-slate-500" dangerouslySetInnerHTML={{ __html: t("consultation.contact.sidebar.hq.address") }}></p>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-slate-900 font-semibold shrink-0 w-24 text-xs uppercase tracking-tighter pt-1">{t("consultation.contact.sidebar.hq.contactLabel")}</div>
            <div className="text-sm text-slate-500">
              <p className="mb-1" dir="ltr">+966 11 234 5678</p>
              <p>contact@amaken.sa</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-slate-900 font-semibold shrink-0 w-24 text-xs uppercase tracking-tighter pt-1">{t("consultation.contact.sidebar.hq.hoursLabel")}</div>
            <p className="text-sm text-slate-500" dir="ltr">{t("consultation.contact.sidebar.hq.hours")}</p>
          </div>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden aspect-video bg-slate-200 shadow-inner group cursor-crosshair">
        <div className="relative w-full h-full">
          <img
            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlJZF6BsygYmRGe29h9oRPeYc8i2Euxg-W79x_YD89nLX0h0k7_E0gBpapPr6tP_UfO4cHx2yt-mubp4OGwWhJRdqFdqKmdTOW-mfu0mgxd3ZdyAWP-pR_sJavopFCMv4rMmh_Qeuq-wKzf2pTv13kRxiBz-Gj7_c4WOr1wdhUnHc2eticYamxnFwLykzQ_MJu9dHGBkYuqcqV3QipK_7GhHv8hJmShsLh2bpAnQCkZizA6p-j-3Xp6Kf0S9trogctk5TdFq_4O7t1"
            alt="HQ Location"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-yellow-500 rounded-full animate-ping"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full absolute"></div>
          </div>
          <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4 bg-slate-900/90 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 backdrop-blur-sm">
            {t("consultation.contact.sidebar.mapBadge")}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 p-6 border border-slate-200 rounded-lg">
        <div className="bg-yellow-100 p-3 rounded">
          <span className="material-symbols-outlined text-yellow-700">verified</span>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">{t("consultation.contact.sidebar.trustBadge.title")}</h4>
          <p className="text-xs text-slate-500">{t("consultation.contact.sidebar.trustBadge.desc")}</p>
        </div>
      </div>
    </aside>
  );
};
