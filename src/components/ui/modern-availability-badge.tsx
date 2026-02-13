"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";

export function ModernAvailabilityBadge() {
    const { t } = useTranslation();

    return (
        <div className="relative group overflow-hidden rounded-full p-[1px]">
            {/* Animated Gradient Border - The "Green Line" */}
            <div className="absolute inset-0 z-0 scale-[4] bg-[conic-gradient(from_0deg,transparent_0_340deg,#10b981_360deg)] animate-[spin_3s_linear_infinite]" />

            {/* Inner Content - Background masking the center */}
            <div className="relative z-10 flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-background border border-border transition-colors">

                {/* Pulsing Dot "Jewel" */}
                <div className="relative">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
                    <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-75" />
                </div>

                {/* Text with subtle shimmer */}
                <span className="text-xs font-semibold tracking-wide text-foreground">
                    {t("bento.available_work")}
                </span>
            </div>
        </div>
    );
}
