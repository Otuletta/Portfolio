"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="relative bg-background">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center gap-4 text-center"
                >
                    {/* Terminal-style single line */}
                    <div className="flex items-center gap-3">
                        <Terminal className="h-4 w-4 text-emerald-400" />
                        <p className="font-mono text-sm text-muted-foreground/60">
                            <span className="text-muted-foreground/30">[</span>
                            <span className="text-emerald-400">✓</span>
                            <span className="text-muted-foreground/30">]</span>
                            {" "}© 2026 Oscar Tuletta. {t("footer.copyright")}
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Subtle gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-50" />
        </footer>
    );
}
