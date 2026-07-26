import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

interface FooterProps {
    color?: string;
}

export function Footer({ color }: FooterProps) {
    const { t } = useI18n();

    return (
        <footer
            id="contact"
            className="border-t border-white/10 pt-10 pb-5 text-white relative overflow-hidden"
            style={{ backgroundColor: color || "black" }}
        >
            {/* Pattern overlay */}
            <div className="absolute inset-0 z-0 opacity-10"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
            ></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-5">

                    {/* Brand */}
                    <div>
                        <Link href="/group" className="text-3xl font-bold tracking-tighter text-white block mb-6">
                            {t("common.brandName")}
                        </Link>
                        <p className="text-white/70 mb-6">
                            {t("footer.description")}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">{t("footer.quickLinks")}</h4>
                        <ul className="space-y-4">
                            <li><Link href="/group" className="text-white/70 hover:text-white transition-colors">{t("nav.home")}</Link></li>
                            <li><Link href="/group/about" className="text-white/70 hover:text-white transition-colors">{t("nav.about")}</Link></li>
                            <li><Link href="/group/services" className="text-white/70 hover:text-white transition-colors">{t("nav.services")}</Link></li>
                            <li><Link href="/group/projects" className="text-white/70 hover:text-white transition-colors">{t("nav.projects")}</Link></li>
                            <li><Link href="/group/miscellaneous-units" className="text-white/70 hover:text-white transition-colors">{t("nav.miscellaneousUnits")}</Link></li>
                            <li><Link href="/group/contact" className="text-white/70 hover:text-white transition-colors">{t("nav.contact")}</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">{t("footer.services")}</h4>
                        <ul className="space-y-4">
                            <li><Link href="/group/services" className="text-white/70 hover:text-white transition-colors">{t("groupServices.management.title")}</Link></li>
                            <li><Link href="/group/services" className="text-white/70 hover:text-white transition-colors">{t("groupServices.marketing.title")}</Link></li>
                            <li><Link href="/group/services" className="text-white/70 hover:text-white transition-colors">{t("nav.consulting")}</Link></li>
                            <li><Link href="/group/services" className="text-white/70 hover:text-white transition-colors">{t("nav.appraisal")}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">{t("footer.contact")}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-white/70">
                                <MapPin className="text-white mt-1 shrink-0" size={20} />
                                <a href="https://maps.app.goo.gl/LNGfUUWbQE4vuXrm7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>{t("footer.address")}</span>
                                </a>
                            </li>

                            <li className="flex items-center gap-4 text-white/70">

                                <Phone className="text-white shrink-0" size={20} />

                                <a href="tel:+966920003401">
                                    <span className="hover:text-white transition-colors">{t("common.phone")}</span></a>
                            </li>

                            <li className="flex items-center gap-4 text-white/70">
                                <Mail className="text-white shrink-0" size={20} />
                                <span className="hover:text-white transition-colors">{t("common.email")}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
                    <p>&copy; {new Date().getFullYear()} {t("common.brandName")} {t("common.brandSubtitle")}. {t("footer.rights")}</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/group/privacy-policy" className="hover:text-white transition-colors">{t("common.privacy")}</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">{t("common.terms")}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
