import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const ERPNEXT_URL = process.env.NEXT_PUBLIC_ERPNEXT_URL;
    const API_KEY = process.env.ERP_API_KEY;
    const API_SECRET = process.env.ERP_API_SECRET;

    if (!ERPNEXT_URL || !API_KEY || !API_SECRET) {
        return NextResponse.json(
            { error: "ERPNext configuration missing in environment variables" },
            { status: 500 }
        );
    }

    try {
        const url = new URL(`${ERPNEXT_URL}/api/resource/Auction/${id}`);
        url.searchParams.set("fields", '["*"]');

        const response = await fetch(url.toString(), {
            method: "GET",
            headers: {
                "Authorization": `token ${API_KEY}:${API_SECRET}`,
                "Content-Type": "application/json",
            },
            cache: 'no-store'
        });

        const result = await response.json();

        if (!response.ok) {
            console.error("Frappe API Error:", result);
            return NextResponse.json(
                { error: result.exc || "Failed to fetch auction details from Frappe" },
                { status: response.status }
            );
        }

        // Fetch associated units (Real Estate Sales)
        let units = [];
        try {
            const unitsFilters = JSON.stringify([["custom_auction", "=", id], ["custom_is_published", "=", 1]]);
            const unitsFields = JSON.stringify(["name", "title", "property_type", "city", "plot_number", "auctionprice", "custom_bidding_link", "custom_unit_image", "status"]);
            const unitsUrl = new URL(`${ERPNEXT_URL}/api/resource/Real Estate Sales`);
            unitsUrl.searchParams.set("filters", unitsFilters);
            unitsUrl.searchParams.set("fields", unitsFields);
            unitsUrl.searchParams.set("limit_page_length", "50");

            const unitsResponse = await fetch(unitsUrl.toString(), {
                method: "GET",
                headers: {
                    "Authorization": `token ${API_KEY}:${API_SECRET}`,
                    "Content-Type": "application/json",
                },
                cache: 'no-store'
            });

            if (unitsResponse.ok) {
                const unitsResult = await unitsResponse.json();
                units = unitsResult.data || [];
            } else {
                console.error("Units API Error:", await unitsResponse.text());
            }
        } catch (unitError) {
            console.error("Error fetching units for auction:", unitError);
        }

        return NextResponse.json({
            data: {
                ...(result.data || {}),
                units: units
            }
        });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "An unexpected error occurred" },
            { status: 500 }
        );
    }
}
