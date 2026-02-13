"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "@/hooks/use-translation";

import { LanguageSwitcher } from "@/components/ui/language-switcher";



// Hero AI Command component
function HeroAICommand({ isThinking, setIsThinking }: { isThinking: boolean; setIsThinking: (v: boolean) => void }) {
    const { t } = useTranslation();
    const [inputValue, setInputValue] = useState("");
    const [response, setResponse] = useState("");
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const suggestions = useMemo(() => [
        t("hero.ai_suggestion_1"),
        t("hero.ai_suggestion_2"),
        t("hero.ai_suggestion_3"),
    ], [t]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        const currentSuggestion = suggestions[suggestionIndex];

        const type = () => {
            if (!isDeleting) {
                setDisplayText(currentSuggestion.substring(0, displayText.length + 1));
                if (displayText === currentSuggestion) {
                    timer = setTimeout(() => setIsDeleting(true), 2000);
                } else {
                    timer = setTimeout(type, 100);
                }
            } else {
                setDisplayText(currentSuggestion.substring(0, displayText.length - 1));
                if (displayText === "") {
                    setIsDeleting(false);
                    setSuggestionIndex((prev) => (prev + 1) % suggestions.length);
                } else {
                    timer = setTimeout(type, 50);
                }
            }
        };

        timer = setTimeout(type, 100);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, suggestionIndex, suggestions]);

    const handleAskAI = async () => {
        if (!inputValue.trim() || isThinking) return;

        setIsThinking(true);
        setResponse(""); // Clear previous response

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: inputValue }),
            });

            const data = await res.json();
            if (data.response) {
                setResponse(data.response);
            } else {
                setResponse("System offline. Please try again later.");
            }
        } catch {
            setResponse("Connection error. Please check your network.");
        } finally {
            setIsThinking(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleAskAI();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 relative max-w-lg w-full"
        >
            <div className="relative group">

                <div className="relative flex items-center bg-card border border-border rounded-2xl px-6 py-4 shadow-2xl overflow-hidden transition-colors">
                    <div className="flex-shrink-0 mr-3">
                        <div className={`w-2 h-2 rounded-full ${isThinking ? 'bg-primary' : 'bg-primary/50'}`} />
                    </div>

                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={isThinking}
                        placeholder={displayText || (t("hero.ai_placeholder") as string)}
                        className="bg-transparent border-none outline-none text-base text-foreground/90 w-full placeholder:text-muted-foreground/40 transition-all focus:placeholder:opacity-0 disabled:opacity-50"
                    />

                    <div className="flex items-center gap-2">
                        <div className="h-4 w-px bg-border mx-1" />
                        <button
                            onClick={handleAskAI}
                            disabled={isThinking}
                            className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-border bg-muted/5 px-2 font-mono text-[10px] font-medium text-foreground/40 hover:bg-muted/10 hover:text-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="text-xs">↵</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Response Area */}
            <div className="mt-4 min-h-[20px] ml-1">
                <AnimatePresence mode="wait">
                    {isThinking ? (
                        <motion.p
                            key="thinking"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-[10px] font-mono text-primary uppercase tracking-widest flex items-center gap-2"
                        >
                            <span>Processing Intelligence</span>
                            <span className="flex gap-0.5">
                                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} className="w-1 h-1 bg-primary rounded-full" />
                                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="w-1 h-1 bg-primary rounded-full" />
                                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className="w-1 h-1 bg-primary rounded-full" />
                            </span>
                        </motion.p>
                    ) : response ? (
                        <motion.div
                            key="response"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-foreground/80 leading-relaxed font-light border-l-2 border-primary/50 pl-4 py-1"
                        >
                            {response}
                        </motion.div>
                    ) : (
                        <motion.p
                            key="default"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest"
                        >
                            Powered by Otuletta Intelligence
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export function Hero() {
    const { t } = useTranslation();
    const [isThinking, setIsThinking] = useState(false);

    return (
        <section className="relative min-h-screen bg-background overflow-hidden transition-colors">
            {/* Modern Premium Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Dark Mode Grid / Glows */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(129,140,248,0.03),transparent_100%)] opacity-30" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
                <div className="bg-background border-b border-border">
                    <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="group flex items-center">
                            <div className="relative w-16 h-16 overflow-hidden rounded-xl transition-all duration-300">
                                <Image
                                    src="/images/Otuletta_logo.png"
                                    alt="Oscar Tuletta Logo"
                                    fill
                                    className="object-contain scale-150 group-hover:scale-[1.65] transition-transform duration-500 rounded-xl"
                                />
                            </div>
                        </Link>

                        {/* Right Side */}
                        <div className="flex items-center gap-6">
                            <LanguageSwitcher />
                            <div className="hidden sm:block h-4 w-px bg-border" />
                            <button
                                data-cal-link="otuletta/15min"
                                data-cal-config='{"layout":"month_view"}'
                                className="group relative sm:inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary cursor-pointer"
                            >
                                <span>{t("nav.contact")}</span>
                                <span className="block h-px w-full max-w-0 bg-primary transition-all group-hover:max-w-full absolute bottom-0 left-0" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Content */}
            <div className="relative min-h-screen flex items-center pt-20">
                <div className="mx-auto max-w-7xl px-6 w-full">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">

                        <div className="lg:col-span-5 z-20 relative flex flex-col items-center text-center lg:items-start lg:text-left">
                            {/* Name with Neural Pulse Animation */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: [1, 1.015, 1],
                                }}
                                transition={{
                                    opacity: { duration: 0.8, delay: 0.2 },
                                    y: { duration: 0.8, delay: 0.2 },
                                    scale: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text leading-[1.05] relative z-20 whitespace-nowrap"
                                style={{
                                    backgroundImage: "linear-gradient(135deg, var(--foreground) 0%, var(--foreground) 40%, var(--primary) 50%, var(--foreground) 60%, var(--foreground) 100%)",
                                    backgroundSize: "200% 100%",
                                    animation: "hero-name-sweep 8s linear infinite",
                                    opacity: 0.9,
                                }}
                            >
                                Oscar Tuletta


                            </motion.h1>

                            {/* AI Command Center */}
                            <HeroAICommand isThinking={isThinking} setIsThinking={setIsThinking} />
                        </div>

                        {/* ===== RIGHT — Memoji bleeding to edge, fused with background ===== */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{
                                duration: 1.2,
                                type: "spring",
                                bounce: 0.4,
                                damping: 15,
                                stiffness: 80,
                                delay: 0.2
                            }}
                            className="lg:col-span-7 relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[55%] order-first lg:order-none mb-8 lg:mb-0"
                        >
                            <div className="relative h-[50vh] lg:h-full w-full flex items-end lg:items-center justify-center overflow-hidden">
                                {/* Pulsing glow removed to eliminate "white stains" */}

                                {/* Removed AI Aura Ring - user requested zero blur/glow */}

                                {/* Floating Memoji — full quality with CSS mask for smooth blend */}
                                <motion.div
                                    animate={{
                                        y: isThinking ? [0, -25, 0] : [0, -12, 0],
                                        scale: isThinking ? 1.02 : 1,
                                    }}
                                    transition={{
                                        duration: isThinking ? 2 : 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="relative w-full h-full py-16 lg:py-24 px-8 z-10 dark:opacity-100 opacity-90 transition-opacity"
                                >
                                    <div className="relative w-full h-full"
                                        style={{
                                            maskImage: 'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.1) 10%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0.7) 45%, black 75%), linear-gradient(to right, transparent 0%, black 40%)',
                                            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.1) 10%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0.7) 45%, black 75%), linear-gradient(to right, transparent 0%, black 40%)',
                                            WebkitMaskComposite: 'source-in',
                                            maskComposite: 'intersect'
                                        }}>
                                        <Image
                                            src="/Memoji.png"
                                            alt="Oscar Tuletta Memoji Avatar"
                                            fill
                                            className="object-contain object-center"
                                            priority
                                            quality={85}
                                            sizes="(max-width: 1024px) 100vw, 55vw"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
