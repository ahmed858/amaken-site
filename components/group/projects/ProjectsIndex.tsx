"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";
import { ProjectCard } from "./ProjectCard";
import { ProjectData } from "@/types/ProjectData";
import { Loader2 } from "lucide-react";

export function ProjectsIndex() {
    const { dictionary } = useI18n();
    const t = (dictionary as any).projectsPage;

    const [projects, setProjects] = useState<ProjectData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Fetch from our new internal API Route
                const res = await fetch("/api/group/projects");
                const json = await res.json();
                const erpProjects = json.data || [];

                // If ERP projects detailed, use them. Otherwise fallback or combine as needed
                // Instructions say: "Wipe static projects and units keep them static"
                // So we replace static projects with ERP projects.
                if (erpProjects && erpProjects.length > 0) {
                    setProjects(erpProjects);
                } else {
                    // Fallback to static if fetch fails or returns empty? 
                    // User said "wipe static projects", so maybe we should show empty or just static if fetch fails.
                    // Let's fallback to static for safety if fetch completely fails, or empty.
                    // Given "wipe static projects", let's assume we want ERP only.
                    // But if ERP fails, better to show something than nothing?
                    // Let's set empty if successful fetch but 0 results, 
                    // and maybe keep static if error? Or just log error.
                    // I will prioritize ERP data.
                    setProjects([]);
                }
            } catch (error) {
                console.error("Failed to load projects", error);
                // Fallback to static data in dev/error case if needed, or just empty
                // setProjects(projectsData); 
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Filter logic (simple client side for now)
    // The filter buttons in the UI are static: All, Residential, Commercial
    // We should implement filtering if we want them to work.

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-4 font-heading"
                >
                    {t?.title || "Projects"}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-zinc-600 dark:text-zinc-400"
                >
                    {t?.subtitle || "Discover our latest developments"}
                </motion.p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
                <div className="hidden lg:block flex-1" />

                <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                    <button className="px-4 py-2 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                        {t?.filter?.all || "All"}
                    </button>
                    <button className="px-4 py-2 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                        {t?.filter?.residential || "Residential"}
                    </button>
                    <button className="px-4 py-2 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                        {t?.filter?.commercial || "Commercial"}
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.length > 0 ? (
                        projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10 text-gray-500">
                            No projects found.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
