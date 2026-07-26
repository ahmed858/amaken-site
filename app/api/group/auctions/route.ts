import { Auction } from "@/types/auction";



import { NextResponse } from "next/server";

export async function GET() {
    const ERPNEXT_URL = process.env.NEXT_PUBLIC_ERPNEXT_URL;
    const API_KEY = process.env.ERP_API_KEY;
    const API_SECRET = process.env.ERP_API_SECRET;

    if (!ERPNEXT_URL || !API_KEY || !API_SECRET) {
        throw new Error("ERPNext configuration missing in environment variables");
    }

    const filters = JSON.stringify([["Auction", "is_published", "=", 1]]);
    const fields = JSON.stringify(["*"]);

    const url = new URL(`${ERPNEXT_URL}/api/resource/Auction`);
    url.searchParams.append("filters", filters);
    url.searchParams.append("fields", fields);
    url.searchParams.append("limit_page_length", "50");
    url.searchParams.append("order_by", "creation desc");

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
            { error: result.exc || "Failed to fetch auctions from Frappe" },
            { status: response.status }
        );
    }

    return NextResponse.json({
        data: result.data || [],
        total: (result.data || []).length
    });
}


