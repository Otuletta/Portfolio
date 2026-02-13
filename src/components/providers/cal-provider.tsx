"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useTranslation } from "@/hooks/use-translation";

export function CalProvider({ children }: { children: React.ReactNode }) {
    const { language } = useTranslation();

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
                language: language.toLowerCase(),
            } as any);
        })();
    }, [language]);

    return <>{children}</>;
}
