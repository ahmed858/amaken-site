import { NextResponse } from "next/server";

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
    const ERP_API_URL = process.env.NEXT_PUBLIC_ERPNEXT_URL;
    const API_KEY = process.env.ERP_API_KEY;
    const API_SECRET = process.env.ERP_API_SECRET;

    if (!ERP_API_URL || !API_KEY || !API_SECRET) {
        return NextResponse.json({ error: "ERPNext credentials missing" }, { status: 500 });
    }

    const { id: projectId } = await context.params;

    const fields = JSON.stringify(["file_url"]);
    const filters = JSON.stringify([
        ["attached_to_doctype", "=", "Sales Project"],
        ["attached_to_name", "=", projectId]
    ]);

    try {
        const url = `${ERP_API_URL}/api/resource/File?fields=${encodeURIComponent(fields)}&filters=${encodeURIComponent(filters)}`;

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
            console.error("Failed to fetch project images from ERPNext");
            return NextResponse.json({ error: "Failed to fetch images" }, { status: 500 });
        }

        const data = await response.json();
        const files: { file_url: string }[] = data.data;

        if (!files || files.length === 0) {
            return NextResponse.json({ data: [] });
        }

        const imageUrls = files.map((f: any) => {
            if (f.file_url.startsWith("http")) return f.file_url;
            return `${ERP_API_URL}${f.file_url}`;
        });

        return NextResponse.json({ data: imageUrls });
    } catch (error) {
        console.error("Error fetching project images:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
