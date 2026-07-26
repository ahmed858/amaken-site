import { ServicesSection2 } from "@/components/group/services-section-2";
import { ProjectsSection } from "@/components/group/projects-section";
import { ClientsSection } from "@/components/group/home/clients-section";
import { AuctionsPreview } from "@/components/group/home/auctions-preview";
import { CTASection } from "@/components/group/home/cta-section";
import { Hero } from "@/components/group/home/hero";
async function getProjects() {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const res = await fetch(`${baseUrl}/api/group/projects`, { next: { revalidate: 60 } });
        if (!res.ok) return [];
        const json = await res.json();
        return json.data || [];
    } catch (error) {
        console.error("Failed to fetch projects via API:", error);
        return [];
    }
}

export default async function HomePage() {
    let projects = await getProjects();
    // add static project in list 
    const staticProject = {
        id: "ramlia-123",
        slug: "ramlia",
        type: "residential_sale",
        name: {
            ar: "رملية",
            en: "Ramlia"
        },
        location: {
            ar: "الرياض, حي النرجس", // اكتب اسم المنطقة بالعربي
            en: "Riyadh, Al-Narjis District" // اكتب اسم المنطقة بالإنجليزي
        },
        images: ["/group/landing0.jpeg"], // ضع مسار الصورة الخاص بك هنا
        status: "Featured",
        statusAr: "مميز",
        totalUnits: 108,
        year: "2026"
    };

    projects = [staticProject, ...projects];

    return (
        <>

            <Hero
                images={["/group/landing0.jpeg", "/group/landing1.jpg", "/group/landing2.jpg", "/group/landing3.png"]}
                interval={15000}
            />
            <ServicesSection2 />
            <ProjectsSection projects={projects} />
            <AuctionsPreview />
            <ClientsSection />
            <CTASection />
        </>
    );
}