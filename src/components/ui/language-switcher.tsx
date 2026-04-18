"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Language } from "@/lib/translations";

export function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage } = useTranslation();

    const languages = [
        { code: "EN", label: "EN" },
        { code: "ES", label: "ES" },
        { code: "FR", label: "FR" },
        { code: "DE", label: "DE" },
        { code: "IT", label: "IT" },
    ];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-xs font-mono text-muted-foreground/60 hover:text-foreground transition-colors"
            >
                <Globe className="h-3.5 w-3.5" />
                <span>{language}</span>
                <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full right-0 mt-2 w-16 rounded-xl border border-border bg-card p-1 shadow-xl z-50 text-foreground"
                    >
                        {languages.map((l) => (
                            <button
                                key={l.code}
                                onClick={() => {
                                    setLanguage(l.code as Language);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-center px-2 py-2 text-xs font-mono rounded-lg transition-colors ${language === l.code
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground/40 hover:bg-muted hover:text-foreground"
                                    }`}
                            >
                                {l.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
