"use client";

import { ProjectsIndex } from "@/components/group/projects/ProjectsIndex";
import { PageBreadcrumb } from "@/components/layout/BreadcrumbSection";
import { useI18n } from "@/lib/i18n/context";

export default function ProjectsPage() {
    const { locale } = useI18n();
    const breadcrumbItems = [
        { label: locale === "ar" ? "الرئيسية" : "Home", href: "/group" },
        { label: locale === "ar" ? "المشاريع" : "Projects", href: "/group/projects" },
    ];
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
            <PageBreadcrumb
                title={locale === "ar" ? "المشاريع" : "Projects"}
                items={breadcrumbItems}
            />
            <main>

                <ProjectsIndex />
            </main>
        </div>

    );
}
