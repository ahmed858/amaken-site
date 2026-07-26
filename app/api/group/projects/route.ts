import { ProjectData } from "@/types/ProjectData";
import { NextResponse } from "next/server";

export async function GET() {
    const ERP_API_URL = process.env.NEXT_PUBLIC_ERPNEXT_URL;
    const API_KEY = process.env.ERP_API_KEY;
    const API_SECRET = process.env.ERP_API_SECRET;

    if (!ERP_API_URL || !API_KEY || !API_SECRET) {
        console.error("ERPNext credentials missing");
        return NextResponse.json({ error: "ERPNext credentials missing" }, { status: 500 });
    }

    const fields = JSON.stringify([
        "name",
        "project_name",
        "project_type",
        "project_image",
        "city",
        "neighborhood",
        "no_of_units",
        "no_of_buildings",
        "status",
        "implementation_year",
        "description"
    ]);

    const filters = JSON.stringify([
        ["is_published", "=", 1]
    ]);

    try {
        const url = `${ERP_API_URL}/api/resource/Sales Project?order_by=creation desc&fields=${encodeURIComponent(fields)}&filters=${encodeURIComponent(filters)}`;

        const response = await fetch(
            url,
            {
                headers: {
                    Authorization: `token ${API_KEY}:${API_SECRET}`,
                    "Content-Type": "application/json",
                },
                next: { revalidate: 60 },
            }
        );

        if (!response.ok) {
            console.error("Failed to fetch projects from ERPNext:", await response.text());
            return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
        }

        const data = await response.json();
        const erpProjects = data.data;

        if (!erpProjects) {
            return NextResponse.json({ data: [] });
        }

        // Transform to ProjectData
        const projects: ProjectData[] = erpProjects.map((erpProject: any) => {
            let imageUrl = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop";
            if (erpProject.project_image) {
                if (erpProject.project_image.startsWith("http")) {
                    imageUrl = erpProject.project_image;
                } else {
                    imageUrl = `${ERP_API_URL}${erpProject.project_image}`;
                }
            }

            let mappedType = "residential_sale";
            if (erpProject.project_type?.toLowerCase().includes("commercial")) {
                mappedType = "commercial";
            } else if (erpProject.project_type?.toLowerCase().includes("rent")) {
                mappedType = "residential_rent";
            }

            return {
                id: erpProject.name,
                slug: erpProject.name.toLowerCase().replace(/\s+/g, "-"),
                name: {
                    en: erpProject.project_name,
                    ar: erpProject.project_name,
                },
                description: {
                    en: erpProject.description,
                    ar: erpProject.description,
                },
                location: {
                    en: `${erpProject.city || ''} ${erpProject.neighborhood ? ', ' + erpProject.neighborhood : ''}`,
                    ar: `${erpProject.city || ''} ${erpProject.neighborhood ? ', ' + erpProject.neighborhood : ''}`,
                },
                type: mappedType,
                status: erpProject.status || "For Sale",
                statusAr: erpProject.status === "Leased" ? "مؤجر" : (erpProject.status === "For Lease" ? "للإيجار" : "للبيع"),
                year: parseInt(erpProject.creation?.split('-')[0]) || new Date().getFullYear(),
                images: [imageUrl],
                developer: {
                    en: "Amaken Development",
                    ar: "أماكن للتطوير",
                },
                units: [],
                totalUnits: erpProject.no_of_units || 0,
            };
        });

        return NextResponse.json({ data: projects });

    } catch (error) {
        console.error("Error fetching projects:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
