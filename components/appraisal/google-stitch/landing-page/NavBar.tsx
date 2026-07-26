"use client"

import { User, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { useAuth } from "@/lib/appraisal/auth-context"
import { useI18n } from "@/lib/i18n/context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DashboardHeader } from "../client-dashboard/DashboardHeader"
import DropdownNeu from "../ui/dropdownneu"

const links = [
    { key: "home", href: "/appraisal" },
    { key: "services", href: "/appraisal/services" },
    { key: "about", href: "/appraisal/about-us" },
    { key: "reports", href: "/appraisal/sample-reports" },
    { key: "blog", href: "/appraisal/blog-insights" },
    { key: "contactus", href: "/appraisal/contact-us" },
];

export default function Navbar() {

    const pathname = usePathname();
    const router = useRouter();
    const { user, logout } = useAuth();
    const { t, locale, setLocale } = useI18n();

    const toggleLanguage = () => {
        setLocale(locale === "en" ? "ar" : "en");
    };

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase();
    };

    if (pathname === "/appraisal/client-dashboard" || pathname === "/appraisal/me") {
        return <DashboardHeader />
    }

    return (
        <nav className="bg-white/80 backdrop-blur-md text-[#041534] text-sm font-medium tracking-tight sticky top-0 z-50 shadow-sm flex justify-between items-center w-full px-6 py-4">
            <div className="flex items-center gap-8">
                <Link href="/appraisal" className="text-xl font-bold">
                    {t("common.brandName")}
                </Link>

                <div className="hidden md:flex gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.key}
                            href={link.href}
                            className={cn(
                                "transition-all duration-200",
                                pathname === link.href
                                    ? "text-[#006A66] font-bold border-b-2 border-[#006A66]"
                                    : "text-slate-600 hover:text-[#006A66]"
                            )}
                        >
                            {t(`appraisal.navbar.${link.key}`)}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={toggleLanguage}
                    className="text-xs font-bold text-slate-400 cursor-pointer hover:text-[#006A66] transition-colors"
                >
                    {locale === "en" ? "AR" : "EN"}
                </button>

                {!user && (
                    <Link href="/appraisal/request-appraisal-form">
                        <button className="bg-[#041534] text-white px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 active:scale-95 duration-150">
                            {t("appraisal.navbar.requestAppraisal")}
                        </button>
                    </Link>
                )}

                {user ? (
                    <DropdownNeu />
                ) : (
                    <Link href="/appraisal/login-register" className="text-slate-600 hover:text-[#006A66]">
                        <User className="w-6 h-6 cursor-pointer" />
                    </Link>
                )}
            </div>
        </nav>
    )
}
