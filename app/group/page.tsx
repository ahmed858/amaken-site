"use client";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ServicesSection } from "@/components/home/services-section";

import { ClientsSection } from "@/components/home/clients-section";
import { StatsSection } from "@/components/home/stats-section";
import { AuctionsPreview } from "@/components/home/auctions-preview";
import { NewsPreview } from "@/components/home/news-preview";
import { CTASection } from "@/components/home/cta-section";

import { Hero } from "@/components/home/hero";
import { Gate } from "@/components/home/gate";
import { HighlightedServices } from "@/components/home/HighlightedServices";
import { Support } from "@/components/UI/support-chat";
import SupportChat from "@/components/ui/support-chat";

export default function HomePage() {
    return (
        <div className="min-h-screen">
            {/* <Header /> */}
            <main>

                <Header />
                <Hero />
                <ServicesSection />
                <HighlightedServices />
                <ClientsSection />
                <AuctionsPreview />
                <CTASection />
                <Footer />
                <support-chat />
            </main>

        </div>
    );
}
