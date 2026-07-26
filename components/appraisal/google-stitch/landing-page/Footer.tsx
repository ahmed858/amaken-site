"use client"

import { useI18n } from "@/lib/i18n/context"
import Link from "next/link"

export default function Footer() {
    const { t, locale } = useI18n();

    const links = [
        { key: "home", href: "/appraisal" },
        { key: "services", href: "/appraisal/services" },
        { key: "about", href: "/appraisal/about-us" },
        { key: "contactus", href: "/appraisal/contact-us" },
    ];

    return (
        <footer className="bg-[#041534] text-white py-12 px-8">
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-4">
                        {t("appraisal.home.services.realEstate.title")}
                    </h3>

                    <p className="text-slate-300 text-sm">
                        {t("appraisal.footer.description")}
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-4">{t("appraisal.footer.quickLinks")}</h4>

                    <ul className="space-y-2 text-sm">
                        {links.map((link) => (
                            <li key={link.key}>
                                <Link href={link.href} className="hover:text-[#FBD164] transition-colors">
                                    {t(`appraisal.navbar.${link.key}`)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4">
                        {t("appraisal.footer.stayConnected")}
                    </h4>

                    <div className="flex gap-2">
                        <input
                            className="px-4 py-2 rounded-lg text-black w-full"
                            placeholder={t("projectsPage.form.email")}
                        />
                        <button className="bg-[#006A66] px-4 py-2 rounded-lg whitespace-nowrap">
                            {t("appraisal.footer.subscribe")}
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-slate-400">
                <p>© {new Date().getFullYear()} {t("common.brandName")} {t("footer.rights")}</p>
            </div>
        </footer>
    )
}