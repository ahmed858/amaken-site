import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string, propId: string }> }
) {
    const { id, propId } = await params;
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
        // Fetch property details from Real Estate Sales
        const fields = JSON.stringify([
            "name",
            "title",
            "property_type",
            "city",
            "plot_number",
            "auctionprice",
            "sales",
            "rent",
            "instrument_size",
            "project_name",
            "marketing",
            "image11",
            "image22",
            "image33",
            "image44",
            "custom_unit_image",
            "custom_bidding_link",
            "custom_auction",
            "status",
            "description",
            "area",
            "rooms",
            "bathrooms",
            "floors",
            "year_built",
            "orientation"
        ]);

        const url = new URL(`${ERPNEXT_URL}/api/resource/Real Estate Sales/${propId}`);
        url.searchParams.set("fields", fields);

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
                { error: result.exc || "Failed to fetch property details from Frappe" },
                { status: response.status }
            );
        }

        // Fetch auction details for breadcrumb
        let auctionDetails = null;
        try {
            const auctionUrl = new URL(`${ERPNEXT_URL}/api/resource/Auction/${id}`);
            auctionUrl.searchParams.set("fields", JSON.stringify(["auction_name", "city"]));
            
            const auctionResponse = await fetch(auctionUrl.toString(), {
                method: "GET",
                headers: {
                    "Authorization": `token ${API_KEY}:${API_SECRET}`,
                    "Content-Type": "application/json",
                },
                cache: 'no-store'
            });

            if (auctionResponse.ok) {
                const auctionResult = await auctionResponse.json();
                auctionDetails = auctionResult.data;
            }
        } catch (auctionError) {
            console.error("Error fetching auction details:", auctionError);
        }

        return NextResponse.json({
            data: {
                ...result.data,
                auctionDetails: auctionDetails
            }
        });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "An unexpected error occurred" },
            { status: 500 }
        );
    }
}
