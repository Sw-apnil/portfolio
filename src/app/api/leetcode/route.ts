import { NextResponse } from "next/server";

export async function GET() {
    try {
        const [userRes, contestRes, calRes] = await Promise.all([
            fetch("https://alfa-leetcode-api.onrender.com/codehunter19/solved", { next: { revalidate: 3600 } }),
            fetch("https://alfa-leetcode-api.onrender.com/codehunter19/contest", { next: { revalidate: 3600 } }),
            fetch("https://alfa-leetcode-api.onrender.com/codehunter19/calendar", { next: { revalidate: 3600 } })
        ]);

        if (!userRes.ok || !contestRes.ok || !calRes.ok) {
            console.error("LeetCode API returned an error:", userRes.status, contestRes.status, calRes.status);
            return NextResponse.json({ error: "Failed to fetch from external API" }, { status: 502 });
        }

        const userData = await userRes.json();
        const contestData = await contestRes.json();
        const calData = await calRes.json();

        return NextResponse.json({
            userData,
            contestData,
            calData
        });
    } catch (error) {
        console.error("Internal Server Error in LeetCode API route:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
