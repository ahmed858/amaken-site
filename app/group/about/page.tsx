import { AboutHero } from "@/components/about/about-hero";
import { AboutTimeline } from "@/components/about/about-timeline";
import { AboutFounder } from "@/components/about/about-founder";
import { AboutValues } from "@/components/about/about-values";

export default function GroupAboutPage() {
    return (
        <>

            <AboutHero />
            {/* <AboutTimeline /> */}
            <AboutFounder />
            <AboutValues />
        </>
    );
}
