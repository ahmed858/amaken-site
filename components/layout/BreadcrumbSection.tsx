"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface PageBreadcrumbProps {
    title: string;
    items: BreadcrumbItem[];
    className?: string;
}

export function PageBreadcrumb({ title, items, className }: PageBreadcrumbProps) {
    const { locale } = useI18n();
    const isRTL = locale === "ar";

    return (
        <div
            dir={isRTL ? "rtl" : "ltr"}
            className={cn(
                "w-full pt-5 pb-5",
                "bg-gradient-to-br from-[#A28B67]/10 via-[#A28B67]/5 to-transparent",
                "border-b border-[#A28B67]/20",
                className
            )}
        >
            <div className="container mx-auto px-4 lg:px-8">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                    {title}
                </h1>

                {/* Breadcrumb Path */}
                <nav aria-label="Breadcrumb">
                    <ol className="flex items-center gap-2 text-sm">
                        {items.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                {index > 0 && (
                                    <span className="text-[#A28B67]/60">
                                        {isRTL ? (
                                            <ChevronLeft className="w-4 h-4" />
                                        ) : (
                                            <ChevronRight className="w-4 h-4" />
                                        )}
                                    </span>
                                )}

                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        className="text-[#A28B67] hover:text-[#A28B67]/80 transition-colors font-medium"
                                    >
                                        {index === 0 && (
                                            <span className="inline-flex items-center gap-1">
                                                <Home className="w-4 h-4" />
                                                {item.label}
                                            </span>
                                        )}
                                        {index !== 0 && item.label}
                                    </Link>
                                ) : (
                                    <span className="text-zinc-600 dark:text-zinc-400 font-medium">
                                        {item.label}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
    );
}
