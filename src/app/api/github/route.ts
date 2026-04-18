import { NextResponse } from "next/server";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "Otuletta";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";

const QUERY = `
query ($username: String!) {
  user(login: $username) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`;

export async function GET() {
    // If no token, return mock data so the site still works
    if (!GITHUB_TOKEN) {
        return NextResponse.json(getMockData(), {
            headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=1800" },
        });
    }

    try {
        const res = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: QUERY, variables: { username: GITHUB_USERNAME } }),
        });

        if (!res.ok) {
            console.error("GitHub API error:", res.status);
            return NextResponse.json(getMockData());
        }

        const json = await res.json();
        const calendar = json.data?.user?.contributionsCollection?.contributionCalendar;

        if (!calendar) {
            return NextResponse.json(getMockData());
        }

        // Transform to simple format: { totalContributions, weeks: number[][] }
        const weeks = calendar.weeks.map((w: { contributionDays: { contributionCount: number }[] }) =>
            w.contributionDays.map((d: { contributionCount: number }) => {
                const c = d.contributionCount;
                if (c === 0) return 0;
                if (c <= 3) return 1;
                if (c <= 6) return 2;
                if (c <= 10) return 3;
                return 4;
            })
        );

        return NextResponse.json(
            { totalContributions: calendar.totalContributions, weeks },
            { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=1800" } }
        );
    } catch (error) {
        console.error("GitHub API fetch failed:", error);
        return NextResponse.json(getMockData());
    }
}

// Fallback mock data when no token is configured
function getMockData() {
    let seed = 42;
    const rand = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
    };

    const weeks: number[][] = [];
    for (let w = 0; w < 52; w++) {
        const week: number[] = [];
        for (let d = 0; d < 7; d++) {
            const r = rand();
            if (r < 0.35) week.push(0);
            else if (r < 0.55) week.push(1);
            else if (r < 0.75) week.push(2);
            else if (r < 0.90) week.push(3);
            else week.push(4);
        }
        weeks.push(week);
    }

    return { totalContributions: 1247, weeks };
}
