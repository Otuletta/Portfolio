"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                theme: "dark",
                styles: {
                    branding: {
                        brandColor: "#6366f1", // Indigo primary
                    },
                },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);

    return <>{children}</>;
}
