"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const consultationNavigation = [
    { key: "home", href: "/consultation" },
    { key: "services", href: "/consultation/services" },
    { key: "about", href: "/consultation/about" },
    { key: "contactus", href: "/consultation/contactus" },
];

export default function ConsultationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen division-consulting">
            <Header color="#EFD447" links={consultationNavigation} />
            <main>{children}</main>
            <Footer color="#EFD447" />
        </div>
    )
}
