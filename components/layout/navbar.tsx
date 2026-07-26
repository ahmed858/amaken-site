"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavItem {
    key: string;
    href: string;
}

const navLinks: NavItem[] = [
    { key: "home", href: "/group" },
    { key: "services", href: "/group/services" },
    { key: "projects", href: "/group/projects" },
    { key: "miscellaneousUnits", href: "/group/miscellaneous-units" },
    { key: "auctions", href: "/group/auctions" },
    { key: "about", href: "/group/about" },
    { key: "contactus", href: "/group/contact" },
];

export function Navbar() {
    const { t, locale, setLocale, direction } = useI18n();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const groupColor = "#A28B67";
    const isRTL = direction === "rtl";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLocale(locale === "en" ? "ar" : "en");
    };

    return (
        <header
            className={cn(
                "relative z-50 transition-all duration-300 bg-white py-4"
            )}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo and Desktop Navigation */}
                    <div className="flex items-center gap-10">
                        <Link href="/group" className="flex items-center">
                            <span className="text-5xl font-bold tracking-tighter text-black uppercase">
                                AMAKEN
                            </span>
                        </Link>

                        {/* Desktop Navigation - Middle */}
                        <nav className="hidden lg:flex items-center gap-4">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href || (link.href !== "/group" && pathname.startsWith(link.href));
                                return (
                                    <div key={link.key} className="relative group px-1">
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "px-3 py-2  text-l font-bold transition-all inline-flex items-center whitespace-nowrap",
                                                isActive ? "text-[#A28B67]" : "text-black hover:text-[#A28B67]"
                                            )}
                                            style={isActive ? { color: groupColor } : {}}
                                        >
                                            {t(`nav.${link.key}`) || link.key}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeTabUnderline"
                                                    className="absolute bottom-[-1px] left-3 right-3 h-[3px] rounded-full text-xl"
                                                    style={{ backgroundColor: groupColor }}
                                                />
                                            )}
                                        </Link>
                                    </div>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-8">
                        <button
                            onClick={toggleLanguage}
                            className="text-l font-bold text-[#A28B67] hover:opacity-80 transition-opacity"
                        >
                            {locale === "en" ? "العربية" : "English"}
                        </button>

                        {/* <Button
                            className="bg-[#1e2c3a] text-[#ebebeb] hover:bg-[#1e2c3a]/90 rounded-none px-10 h-12 font-bold hidden md:flex text-xl"
                            asChild
                        >
                            <Link href="/portal/login">Login</Link>
                        </Button> */}

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden text-neutral-800 p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-neutral-100 shadow-xl p-6"
                >
                    <div className="flex flex-col gap-5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.key}
                                href={link.href}
                                className={cn(
                                    "text-lg font-bold border-b border-neutral-50 pb-2",
                                    pathname === link.href ? "text-[#A28B67]" : "text-neutral-600"
                                )}
                                style={pathname === link.href ? { color: groupColor } : {}}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t(`nav.${link.key}`) || link.key}
                            </Link>
                        ))}
                        {/* <Button
                            className="bg-[#1e2c3a] text-white w-full rounded-none h-12 font-bold text-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <Link href="/portal/login" className="w-full text-center">Login</Link>
                        </Button> */}
                    </div>
                </motion.div>
            )}
        </header>
    );
}
