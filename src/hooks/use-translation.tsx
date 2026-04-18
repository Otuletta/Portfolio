"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language } from "@/lib/translations";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window !== "undefined") {
            const savedLang = localStorage.getItem("portfolio-lang") as Language;
            if (savedLang && ["EN", "ES", "FR", "DE", "IT"].includes(savedLang)) {
                return savedLang;
            }
        }
        return "EN";
    });

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("portfolio-lang", lang);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const t = (path: string): any => {
        const keys = path.split(".");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let current: any = translations[language];

        for (const key of keys) {
            if (!current || typeof current !== 'object' || current[key] === undefined) {
                return path;
            }
            current = current[key];
        }

        return current;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useTranslation must be used within a LanguageProvider");
    }
    return context;
}
