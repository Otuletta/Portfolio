"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { translations, Language } from "@/lib/translations";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("EN");

    // Optional: Persist language preference
    useEffect(() => {
        const savedLang = localStorage.getItem("portfolio-lang") as Language;
        if (savedLang && ["EN", "ES", "FR", "DE", "IT"].includes(savedLang)) {
            setLanguage(savedLang);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("portfolio-lang", lang);
    };

    const t = (path: string): any => {
        const keys = path.split(".");
        let current: any = translations[language];

        for (const key of keys) {
            if (!current || current[key] === undefined) {
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
