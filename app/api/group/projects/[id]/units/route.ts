import { UnitData } from "@/types/UnitData";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
    const ERP_API_URL = process.env.NEXT_PUBLIC_ERPNEXT_URL;
    const API_KEY = process.env.ERP_API_KEY;
    const API_SECRET = process.env.ERP_API_SECRET;

    if (!ERP_API_URL || !API_KEY || !API_SECRET) {
        return NextResponse.json({ error: "ERPNext credentials missing" }, { status: 500 });
    }

    const { id: projectId } = await context.params;

    const fields = JSON.stringify([
        "name",
        "property_type",
        "instrument_size",
        "number_of_bedrooms",
        "price",
        "panner",
        "status",
        "custom_name_on_website",
        "custom_description",
        "custom_unit_image",
        "custom_project",
        "authorization_number"
    ]);

    const filters = JSON.stringify([
        ["custom_project", "=", projectId],
        ["marketing", "=", "direct marketing"],
        ["custom_is_published", "=", 1],
        ["authorization_number", "!=", ""]
    ]);

    try {
        const url = `${ERP_API_URL}/api/resource/Real Estate Sales?fields=${encodeURIComponent(fields)}&filters=${encodeURIComponent(filters)}`;

        const response = await fetch(
            url,
            {
                headers: {
                    Authorization: `token ${API_KEY}:${API_SECRET}`,
                    "Content-Type": "application/json",
                },
                cache: "no-store",
            }
        );

        if (!response.ok) {
            console.error("Failed to fetch project units from ERPNext");
            return NextResponse.json({ error: "Failed to fetch project units" }, { status: 500 });
        }

        const data = await response.json();
        const erpUnits = data.data;

        if (!erpUnits || erpUnits.length === 0) {
            return NextResponse.json({ data: [] });
        }

        const mappedUnits: UnitData[] = erpUnits.map((u: any) => {
            let pannerUrl = "..";
            if (u.panner) {
                if (u.panner.startsWith("http")) {
                    pannerUrl = u.panner;
                } else {
                    pannerUrl = `${ERP_API_URL}${u.panner}`;
                }
            }

            let imageUrl = "";
            if (u.custom_unit_image) {
                if (u.custom_unit_image.startsWith("http")) {
                    imageUrl = u.custom_unit_image;
                } else {
                    imageUrl = `${ERP_API_URL}${u.custom_unit_image}`;
                }
            }

            return {
                id: u.name,
                name: {
                    en: u.custom_name_on_website || u.name,
                    ar: u.custom_name_on_website || u.name
                },
                type: {
                    en: u.property_type || "Unit",
                    ar: u.property_type || "وحدة"
                },
                area: u.instrument_size || 0,
                rooms: u.number_of_bedrooms || 0,
                price: u.price,
                image: imageUrl,
                planner_image: pannerUrl,
                description: {
                    en: u.custom_description || "",
                    ar: u.custom_description || ""
                },
                status: u.status || "غير متاح",
                project_id: u.custom_project,
                authorization_number: u.authorization_number
            };
        });

        return NextResponse.json({ data: mappedUnits });
    } catch (error) {
        console.error("Error fetching project units:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
