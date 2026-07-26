"use client";

import { use, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { ProjectHero } from "@/components/group/projects/ProjectHero";
import { UnitList } from "@/components/group/projects/UnitList";
// Fetches removed in favor of API Routes
import { ProjectData } from "@/types/ProjectData";
import { InfoSection } from "@/components/group/home/info-section";
import { PageBreadcrumb } from "@/components/layout/BreadcrumbSection";
import { useI18n } from "@/lib/i18n/context";

export default function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const [project, setProject] = useState<ProjectData | null>(null);
    const [loading, setLoading] = useState(true);
    const { locale } = useI18n();

    useEffect(() => {
        if (!slug) return;

        const fetchProject = async () => {
            try {
                // Fetch projects from our API
                const resProjects = await fetch('/api/group/projects');
                const jsonProjects = await resProjects.json();
                const erpProjects: ProjectData[] = jsonProjects.data || [];

                // Find the project that matches the dynamically generated slug
                const found = erpProjects.find((p) => p.slug === slug);
                if (found) {
                    // Fetch images
                    const resImages = await fetch(`/api/group/projects/${found.id}/images`);
                    const jsonImages = await resImages.json();
                    if (jsonImages.data && jsonImages.data.length > 0) {
                        found.images = jsonImages.data;
                    }

                    // Fetch units
                    const resUnits = await fetch(`/api/group/projects/${found.id}/units`);
                    const jsonUnits = await resUnits.json();
                    found.units = jsonUnits.data || [];

                    setProject(found);
                } else {
                    setProject(null);
                }
            } catch (error) {
                console.error("Error fetching project for slug:", slug, error);
                setProject(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-900 dark:border-white"></div>
            </div>
        );
    }

    if (!project) {
        notFound();
        return null;
    }

    const breadcrumbItems = [
        { label: locale === "ar" ? "الرئيسية" : "Home", href: "/group" },
        { label: locale === "ar" ? "المشاريع" : "Projects", href: "/group/projects" },
        { label: project.name[locale] },
    ];

    return (
        <div className=" min-h-screen bg-zinc-50 dark:bg-zinc-950">
            <PageBreadcrumb
                title={locale === "ar" ? "المشاريع" : "Projects"}
                items={breadcrumbItems}
            />
            <main>
                <InfoSection project={project} />
                {/* <ProjectHero project={project} /> */}
                <UnitList units={project.units} />
            </main>
        </div>

    );
}