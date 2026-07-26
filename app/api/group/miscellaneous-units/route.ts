import { NextResponse } from "next/server";

const ERP_API_URL = process.env.NEXT_PUBLIC_ERPNEXT_URL;
const API_KEY = process.env.ERP_API_KEY;
const API_SECRET = process.env.ERP_API_SECRET;

export async function GET() {
    if (!ERP_API_URL || !API_KEY || !API_SECRET) {
        return NextResponse.json({ error: "ERPNext credentials missing" }, { status: 500 });
    }

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
        "marketing",
        "city",
        "authorization_number"
    ]);

    const filters = JSON.stringify([
        ["marketing", "in", ["وحدات متفرقة", "direct marketing"]],
        ["custom_is_published", "=", 1],
        ["authorization_number", "!=", ""]
    ]);

    try {
        const url = `${ERP_API_URL}/api/resource/Real Estate Sales?fields=${encodeURIComponent(fields)}&filters=${encodeURIComponent(filters)}&limit_page_length=100`;

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
            const errorText = await response.text();
            return NextResponse.json({ error: "Failed to fetch from ERPNext", details: errorText }, { status: response.status });
        }

        const data = await response.json();
        const erpUnits = data.data || [];

        const transformedUnits = erpUnits.map((u: any) => {
            let pannerUrl = "";
            if (u.panner) {
                pannerUrl = u.panner.startsWith("http") ? u.panner : `${ERP_API_URL}${u.panner}`;
            }

            let imageUrl = "";
            if (u.custom_unit_image) {
                imageUrl = u.custom_unit_image.startsWith("http") ? u.custom_unit_image : `${ERP_API_URL}${u.custom_unit_image}`;
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
                city: u.city || "",
                neighborhood: u.neighborhood || "",
                authorization_number: u.authorization_number
            };
        });

        return NextResponse.json(transformedUnits);
    } catch (error) {
        console.error("Error fetching miscellaneous units:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
