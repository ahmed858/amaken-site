import { NextRequest, NextResponse } from 'next/server';

const ERPNEXT_URL = process.env.NEXT_PUBLIC_ERPNEXT_URL || 'https://amaken.space';
const API_KEY = process.env.ERP_API_KEY;
const API_SECRET = process.env.ERP_API_SECRET;

export async function GET(req: NextRequest) {
    try {


        const { searchParams } = new URL(req.url);


        const limit = searchParams.get('limit') || '9';
        const start = searchParams.get('start_limit') || '0';
        const type = searchParams.get('type');
        const mode = searchParams.get('mode');

        const fields = JSON.stringify([
            "name",
            "title",
            "property_type",
            "marketing",
            "sales",
            "rent",
            "project_name",
            "instrument_size",
            "image11",
            "image22",
            "image33",
            "image44"
        ]);

        const filterArray: any[] = [["marketing", "=", "direct marketing"]];

        if (type && type !== 'all') {
            filterArray.push(["property_type", "=", type]);
        }

        if (mode === 'sale') {
            filterArray.push(["sales", ">", 0]);
        } else if (mode === 'rent') {
            filterArray.push(["rent", ">", 0]);
        }

        const filters = JSON.stringify(filterArray);

        // We use the server-side headers if API keys are available, otherwise public access
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };

        if (API_KEY && API_SECRET) {
            headers['Authorization'] = `token ${API_KEY}:${API_SECRET}`;
        }

        const url = `${ERPNEXT_URL}/api/resource/Real Estate Sales?order_by=creation desc&fields=${fields}&filters=${filters}&limit_start=${start}&limit=${limit}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: headers,
        });

        if (!response.ok) {
            console.error(`ERPNext API Error: ${response.status} ${response.statusText}`);
            return NextResponse.json({ message: 'Failed to fetch properties' }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);

    } catch (error: any) {
        console.error('Real Estate API Error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
