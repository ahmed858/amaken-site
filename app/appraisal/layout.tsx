"use client"
import Footer from "@/components/appraisal/google-stitch/landing-page/Footer";
import Navbar from "@/components/appraisal/google-stitch/landing-page/NavBar";
import { AuthProvider } from "@/lib/appraisal/auth-context";
import { useI18n } from "@/lib/i18n/context";
import { usePathname } from "next/navigation";

export default function AppraisalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { locale } = useI18n();
    const pathname = usePathname();
    const isDashboard = pathname?.includes("/client-dashboard");

    return (
        <AuthProvider>
            <div dir={locale === "ar" ? "rtl" : "ltr"} className={locale === "ar" ? "font-arabic" : ""}>
                {!isDashboard && <Navbar />}
                <main>{children}</main>
                {!isDashboard && <Footer />}
            </div>
        </AuthProvider>
    )
}
