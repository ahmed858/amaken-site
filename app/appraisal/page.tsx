import Navbar from "@/components/appraisal/google-stitch/landing-page/NavBar"
import HeroSection from "@/components/appraisal/google-stitch/landing-page/HeroSection"
import StatsBar from "@/components/appraisal/google-stitch/landing-page/StatsBar"
import ServicesSection from "@/components/appraisal/google-stitch/landing-page/ServicesSection"

import ReportsSection from "@/components/appraisal/google-stitch/landing-page/ReportsSection"
import TeamSection from "@/components/appraisal/google-stitch/landing-page/TeamSection"
import Partners from "@/components/appraisal/google-stitch/landing-page/Partners"
import Footer from "@/components/appraisal/google-stitch/landing-page/Footer"
import WhyUsSection from "@/components/appraisal/google-stitch/landing-page/WhyUsSection"
import Achievements from "@/components/appraisal/google-stitch/landing-page/Achievements"

export default function Page() {
    return (
        <>
            <HeroSection />
            <StatsBar />
            <ServicesSection />
            <WhyUsSection />
            <Achievements />
            <ReportsSection />
            {/* <TeamSection /> */}
            <Partners />
        </>
    )
}
