"use client"
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";

export default function HeroSection() {
    const { t } = useI18n();

    return (
        <section className="relative min-h-[870px] flex items-center overflow-hidden bg-[#041534]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#041534] to-transparent opacity-60"></div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">

                <div className="text-right space-y-8 order-2 md:order-1">

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                        {t("appraisal.home.hero.title")}
                        <br />
                        <span className="text-[#86f5ee]">{t("appraisal.home.hero.highlight")}</span>
                    </h1>

                    <p className="text-xl text-slate-300 max-w-xl">
                        {t("appraisal.home.hero.description")}
                    </p>

                    <div className="flex flex-wrap gap-4 justify-start">

                        <Link href="/appraisal/request-appraisal-form">
                            <button className="bg-[#006A66] text-white px-10 py-4 rounded-xl text-lg font-bold shadow-xl">
                                {t("appraisal.home.hero.requestBtn")}
                            </button>
                        </Link>
                        <Link href="/appraisal/about-us">
                            <button className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-bold">
                                {t("appraisal.home.hero.aboutBtn")}
                            </button>
                        </Link>

                    </div>

                </div>

                <div className="order-1 md:order-2">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaWmwd4oMnrE1pDw0H5kSq3hXU7rSMIYiLR3evcHfR98L6HYZ1LGpBUOrKrdQovz-uVj-keIMr_gSuWu895E2xk4GjqAp1nxiMqo2pifutINLt0d4ATiE51VJBs9qx70tZpL9em3jH1UpeYBtP2QSbOX0mPl17GpxzCze8UWABfZVTyV70LI8E6M-T_BcCKJdbbNLwgUX_Ev2fFhwVS5AVtiEuFvyDMJNT4Fvn67aD7XrNMr_CWDtmxkdSUHGx79sN3lXrVI7XbTw"
                        className="rounded-3xl shadow-2xl border-4 border-white/5 w-full object-cover"
                        alt="architecture"
                    />
                </div>

            </div>
        </section>
    )
}