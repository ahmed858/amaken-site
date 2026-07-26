"use client";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { usePathname } from "next/navigation";

export default function GroupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isIsolated = pathname === "/group/ramlia";

    if (isIsolated) {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer color="#A28B67" />
        </div>
    );
}

