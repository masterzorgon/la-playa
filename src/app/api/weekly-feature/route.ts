import { NextRequest, NextResponse } from "next/server";
import { createClient } from 'contentful';

export async function GET(request: NextRequest) {
    const client = createClient({
        space: "h1ksb8e9vuys",
        environment: "master",
        accessToken: "0UxBvfoS52Fks55RCZCA4LvH0oZXuWMF_7m7yVKPHQw",
    });

    try {
        const entry = await client.getEntry("430FkkPhUyIIO1l9VB6esd");
        return NextResponse.json({ entry });
    } catch (error) {
        console.log("error", error);
    }
}