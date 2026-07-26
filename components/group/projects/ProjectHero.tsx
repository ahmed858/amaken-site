"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Building, Calendar, User } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Assuming these exist
import { Label } from "@/components/ui/label"; // Assuming these exist
import { ProjectData } from "@/types/ProjectData";

interface ProjectHeroProps {
    project: ProjectData;
}

export function ProjectHero({ project }: ProjectHeroProps) {
    const { dictionary, locale } = useI18n();
    const t = (dictionary as any).projectsPage;
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Handle form submission logic here
    };

    return (
        <div className="relative min-h-[80vh] flex items-center pt-20">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src={project.images[0]}
                    alt={project.name[locale]}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="container mx-auto px-4 z-10 relative py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-white"
                    >
                        <div className="flex items-center gap-2 mb-4 text-brand-gold font-medium">
                            <MapPin className="w-5 h-5" />
                            <span>{project.location[locale]}</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading leading-tight italic">
                            {project.name[locale]}
                        </h1>

                        <p className="text-lg text-zinc-200 mb-8 leading-relaxed max-w-xl">
                            {project.description[locale]}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/20 pt-8">
                            <div>
                                <span className="block text-sm text-zinc-400 mb-1">{t.details.year}</span>
                                <span className="text-lg font-semibold flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-brand-gold" />
                                    {project.year}
                                </span>
                            </div>
                            <div>
                                <span className="block text-sm text-zinc-400 mb-1">{t.details.units}</span>
                                <span className="text-lg font-semibold flex items-center gap-2">
                                    <Building className="w-4 h-4 text-brand-gold" />
                                    {project.units.length}
                                </span>
                            </div>
                            <div>
                                <span className="block text-sm text-zinc-400 mb-1">{t.details.developer}</span>
                                <span className="text-lg font-semibold flex items-center gap-2">
                                    <User className="w-4 h-4 text-brand-gold" />
                                    {project.developer[locale]}
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl"
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-white mb-2">{t.form.title}</h3>
                            <p className="text-zinc-300">{t.form.subtitle}</p>
                        </div>

                        {submitted ? (
                            <div className="bg-group-primary/20 text-group-primary p-6 rounded-xl text-center border border-group-primary/30 italic font-bold">
                                <p className="text-lg">{t.form.success}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="hero-name" className="text-zinc-200">{t.form.name}</Label>
                                    <input
                                        id="hero-name"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-group-primary transition-all"
                                        placeholder={t.form.name}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="hero-email" className="text-zinc-200">{t.form.email}</Label>
                                    <input
                                        id="hero-email"
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-group-primary transition-all"
                                        placeholder={t.form.email}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="hero-phone" className="text-zinc-200">{t.form.phone}</Label>
                                    <input
                                        id="hero-phone"
                                        type="tel"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-group-primary transition-all"
                                        placeholder={t.form.phone}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-group-primary hover:bg-group-primary/90 text-white h-12 text-lg mt-2 font-bold shadow-lg shadow-group-primary/20"
                                >
                                    {t.form.submit}
                                </Button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
