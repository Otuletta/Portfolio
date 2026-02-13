"use client";

import { motion, Variants, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useCallback, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import createGlobe from "cobe";
import { useTranslation } from "@/hooks/use-translation";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";
import { ModernAvailabilityBadge } from "@/components/ui/modern-availability-badge";
import { SocialConnectionHub } from "@/components/ui/social-connection-hub";

/* ─── Animation Variants ──────────────────────────────────────────── */

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        y: 20,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.8,
            ease: [0.2, 0.8, 0.2, 1.0] as [number, number, number, number],
            opacity: { duration: 0.6 },
        }
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: 20,
        transition: {
            duration: 0.4,
            ease: [0.4, 0, 1, 1] // Sharp but smooth out
        }
    }
};

/* ─── Parth-Style Globe ───────────────────────────────────────────── */

// Oscar's availability locations
const LOCATIONS = [
    { name: "Latam", code: "LATAM", lat: 18.5, lng: -69.9, color: [0.3, 0.8, 1.0] as [number, number, number], accent: "#4dd0e1" },
    { name: "USA", code: "US", lat: 37.0, lng: -95.7, color: [1.0, 1.0, 1.0] as [number, number, number], accent: "#ffffff" },
    { name: "Europe", code: "EU", lat: 48.8, lng: 2.3, color: [1.0, 0.6, 0.2] as [number, number, number], accent: "#ffab40" },
];

function toRadians(deg: number) { return (deg * Math.PI) / 180; }

function ParthGlobe() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerInteracting = useRef<number | null>(null);
    const thetaRef = useRef(toRadians(20));
    const phiRef = useRef(toRadians(70));
    const velocityRef = useRef(0);

    useEffect(() => {
        if (!canvasRef.current) return;



        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 1000,
            height: 1000,
            phi: phiRef.current,
            theta: thetaRef.current,
            dark: 1,
            diffuse: 1.5,
            mapSamples: 20000,
            mapBrightness: 6,
            baseColor: [0.05, 0.05, 0.08],
            markerColor: [1, 1, 1],
            glowColor: [0.18, 0.18, 0.22],
            markers: LOCATIONS.map(loc => ({
                location: [loc.lat, loc.lng] as [number, number],
                size: 0.06,
            })),
            scale: 1.4,
            offset: [120, 130],
            onRender: (state) => {
                if (pointerInteracting.current === null) {
                    // Slow auto-rotate vertically (like Parth's)
                    phiRef.current += 0.003;
                    velocityRef.current *= 0.95;
                }
                phiRef.current += velocityRef.current;
                state.phi = phiRef.current;
                state.theta = thetaRef.current;
            },
        });

        return () => { globe.destroy(); };
    }, []);

    const handlePointerDown = useCallback((e: React.PointerEvent) => {
        pointerInteracting.current = e.clientX;
        velocityRef.current = 0;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    }, []);

    const handlePointerMove = useCallback((e: React.PointerEvent) => {
        if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteracting.current = e.clientX;
            velocityRef.current = delta * 0.004;
        }
    }, []);

    const handlePointerUp = useCallback(() => {
        pointerInteracting.current = null;
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full touch-none"
            style={{ cursor: 'grab', contain: 'layout paint size' }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
        />
    );
}

/* ─── Concave Card Component ──────────────────────────────────────── */

function ConcaveCard({ children, corner, className = "" }: {
    children: React.ReactNode;
    corner: 'br' | 'bl' | 'tr' | 'tl';
    className?: string;
}) {
    const R = "182.5px"; // Half of 365px (Ring Size)
    const O = "3px";     // Half of gap-1.5 (Correct Alignment)

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 150 };
    const rotateX = useSpring(useMotionValue(0), springConfig);
    const rotateY = useSpring(useMotionValue(0), springConfig);
    const spotlightX = useSpring(mouseX, { damping: 30, stiffness: 200 });
    const spotlightY = useSpring(mouseY, { damping: 30, stiffness: 200 });

    const [isLarge, setIsLarge] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(min-width: 1024px)");
        setIsLarge(media.matches);
        const listener = () => setIsLarge(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        mouseX.set(x);
        mouseY.set(y);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rX = (y - centerY) / 25;
        const rY = (centerX - x) / 25;

        rotateX.set(rX);
        rotateY.set(rY);
    };

    const handleMouseLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    const masks: Record<string, string> = {
        br: `radial-gradient(circle at calc(100% + ${O}) calc(100% + ${O}), transparent ${R}, black ${R})`,
        bl: `radial-gradient(circle at calc(0% - ${O}) calc(100% + ${O}), transparent ${R}, black ${R})`,
        tr: `radial-gradient(circle at calc(100% + ${O}) calc(0% - ${O}), transparent ${R}, black ${R})`,
        tl: `radial-gradient(circle at calc(0% - ${O}) calc(0% - ${O}), transparent ${R}, black ${R})`,
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                borderRadius: '2rem',
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                maskImage: isLarge ? masks[corner] : 'none',
                WebkitMaskImage: isLarge ? masks[corner] : 'none',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                willChange: 'transform, mask-image'
            }}
            whileHover={{ scale: 1.01 }}
            className={`group relative h-full bg-card border border-border overflow-hidden transition-all hover:border-primary/40 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_0_20px_rgba(255,255,255,0.02)] ${className}`}
        >
            <div className="relative z-10 h-full" style={{ transform: "translateZ(20px)" }}>
                {children}
            </div>
        </motion.div>
    );
}

/* ═══════════════════════════════════════════════════════════════════
   BENTO GRID
   ═══════════════════════════════════════════════════════════════════ */

export function BentoGrid() {
    const { t, language } = useTranslation();

    return (
        <section id="about" className="relative py-12 px-6 bg-transparent min-h-[50vh] flex items-center">
            <div className="w-full max-w-[1600px] mx-auto">

                {/* ─── Mobile Photo ─── */}
                <div className="lg:hidden flex justify-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-[300px] h-[300px] flex items-center justify-center"
                    >
                        <Image
                            src="/images/Otuletta_logo.png"
                            alt="Oscar Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                </div>

                {/* ─── Desktop 2×2 Grid ─── */}
                <div className="relative overflow-hidden rounded-[2rem]">

                    {/* ── CENTRAL PHOTO (desktop only) ── */}
                    <div className="hidden lg:flex absolute inset-0 items-center justify-center z-50 pointer-events-none">
                        {/* Outer ring - Match global edge contrast */}
                        <div className="absolute w-[365px] h-[365px] rounded-full border border-foreground/20 dark:border-primary/20" />
                        {/* Dashed spinning ring */}
                        <div className="absolute w-[355px] h-[355px] rounded-full border border-dashed border-foreground/10 dark:border-primary/10 animate-[spin_90s_linear_infinite]" />
                        {/* Photo/Logo - Solid Black Border for crispness */}
                        <div className="relative w-[340px] h-[340px] rounded-full overflow-hidden border-[3px] border-border dark:border-primary/30 shadow-[0_0_80px_rgba(0,0,0,0.5)] bg-background flex items-center justify-center group/logo transition-colors">
                            <div className="relative w-full h-full p-4 flex items-center justify-center">
                                <Image
                                    src="/images/Otuletta_logo.png"
                                    alt="Oscar Tuletta"
                                    fill
                                    className="object-contain drop-shadow-[0_0_20px_rgba(99,102,241,0.3)] opacity-90 group-hover/logo:opacity-100 group-hover/logo:scale-110 group-hover/logo:drop-shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all duration-700 ease-out scale-110"
                                    sizes="(min-width: 1024px) 640px, 320px"
                                    quality={100}
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* ── Grid ── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        exit="exit"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ staggerChildren: 0.15 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-1.5"
                        style={{ perspective: "1000px" }}
                    >

                        {/* ═══ TOP LEFT: About Me ═══ */}
                        <motion.div variants={itemVariants}>
                            <ConcaveCard corner="br" className="p-6 lg:p-12 min-h-[340px] lg:min-h-[460px] flex flex-col justify-between">
                                <div className="w-full lg:w-[80%] text-center lg:text-left">
                                    <span className="inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                                        {t("about.card_title")}
                                    </span>
                                    <h3 className="text-3xl lg:text-4xl font-bold text-foreground leading-snug tracking-tight mb-6">
                                        {t("about.title")}
                                    </h3>
                                    <p className="text-base leading-relaxed text-muted-foreground text-center lg:text-justify">
                                        {t("about.bio")}
                                    </p>
                                </div>
                                <div className="mt-6 pt-4 border-t border-border w-full lg:w-[75%] mx-auto lg:mx-0 transition-colors text-center lg:text-left">
                                    <p className="font-mono text-xs text-primary/70 tracking-wide">
                                        {t("about.experience_note")}
                                    </p>
                                </div>
                            </ConcaveCard>
                        </motion.div>

                        {/* ═══ TOP RIGHT: Tech Stack ═══ */}
                        <motion.div variants={itemVariants}>
                            <ConcaveCard corner="bl" className="p-6 lg:p-10 min-h-[340px] lg:min-h-[460px] flex flex-col group/hub">
                                <div className="w-full flex justify-between items-start mb-6 shrink-0 text-center lg:text-left">
                                    <div className="flex flex-col w-full lg:w-auto">
                                        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                                            {t("bento.social_title")}
                                        </span>
                                        <h3 className="text-xl font-bold text-foreground leading-tight">
                                            {t("bento.social_subtitle")}
                                        </h3>
                                    </div>
                                </div>

                                {/* Social Grid */}
                                <div className="w-full h-full flex-grow pb-4 lg:pb-0">
                                    <SocialConnectionHub />
                                </div>
                            </ConcaveCard>
                        </motion.div>

                        {/* ═══ BOTTOM LEFT: Globe (Parth-style) ═══ */}
                        <motion.div variants={itemVariants}>
                            <ConcaveCard corner="tr" className="min-h-[340px] lg:min-h-[460px] relative">
                                {/* Header */}
                                <div className="absolute top-8 left-8 z-20">
                                    <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
                                        {t("bento.globe_title")}
                                    </span>
                                </div>

                                {/* Location Pills — bottom right */}
                                <div className="hidden lg:flex absolute bottom-8 right-8 z-20 flex-col gap-2.5">
                                    {[
                                        { key: "loc_latam", accent: "#4dd0e1" },
                                        { key: "loc_usa", accent: "#94a3b8" },
                                        { key: "loc_europe", accent: "#ffab40" },
                                    ].map((loc, i) => (
                                        <motion.div
                                            key={loc.key}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1.2 + i * 0.15, duration: 0.5 }}
                                            className="flex items-center gap-3 pl-3 pr-5 py-2.5 rounded-full bg-background/50 border border-border"
                                            style={{
                                                background: `linear-gradient(135deg, ${loc.accent}08 0%, transparent 100%)`,
                                                borderColor: `${loc.accent}20`,
                                            }}
                                        >
                                            {/* Pulsing colored dot */}
                                            <div className="relative flex items-center justify-center">
                                                <div
                                                    className="absolute w-3 h-3 rounded-full animate-ping opacity-40"
                                                    style={{ backgroundColor: loc.accent }}
                                                />
                                                <div
                                                    className="w-2.5 h-2.5 rounded-full"
                                                    style={{ backgroundColor: loc.accent, boxShadow: `0 0 10px ${loc.accent}60` }}
                                                />
                                            </div>
                                            <span className="text-sm font-medium text-foreground/90">{t(`bento.${loc.key}`)}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Globe — emerges from bottom-left corner upward */}
                                <div className="absolute -bottom-[30%] -left-[20%] w-[850px] h-[850px] z-10 pointer-events-auto">
                                    <ParthGlobe />
                                </div>
                            </ConcaveCard>
                        </motion.div>

                        {/* ═══ BOTTOM RIGHT: Contact / CTA ═══ */}
                        <motion.div variants={itemVariants}>
                            <ConcaveCard corner="tl" className="p-6 lg:p-10 min-h-[340px] lg:min-h-[460px] flex flex-col justify-between bg-gradient-to-br from-card to-accent/20 relative group/card transition-colors">
                                {/* Innovative Corner Button - Top Right */}
                                <MagneticWrapper className="absolute top-8 right-8 z-20">
                                    <button
                                        data-cal-link="otuletta/15min"
                                        data-cal-config={`{"layout":"month_view","language":"${(language || "en").toLowerCase()}"}`}
                                        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-foreground text-background hover:w-48 transition-all duration-500 ease-out overflow-hidden group/btn shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(255,255,255,0.15)] cursor-pointer"
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center group-hover/btn:opacity-0 transition-opacity duration-300">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-start px-6 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 min-w-max">
                                            <span className="font-bold text-sm uppercase tracking-wider whitespace-nowrap">{t("bento.cta_button")}</span>
                                        </div>
                                        <div className="absolute right-4 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 delay-100">
                                            <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                    </button>
                                </MagneticWrapper>

                                {/* Bottom Text area - Aligned Left but pushed down */}
                                <div className="mt-auto text-left w-full relative z-10 pt-32 pl-4 max-w-[70%] lg:max-w-[65%]">
                                    <h3 className="text-4xl lg:text-5xl font-bold text-foreground leading-[0.9] tracking-tight">
                                        {t("bento.cta_heading_1")}<br />
                                        <span className="text-muted-foreground/40 italic font-serif relative">
                                            {t("bento.cta_heading_2")}
                                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-500/30 dark:text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                            </svg>
                                        </span><br />
                                        {t("bento.cta_heading_3")}
                                    </h3>
                                </div>

                                {/* Modern "Brilliant" Availability Badge - Bottom Right */}
                                <div className="absolute bottom-10 right-10 z-10 hidden lg:block">
                                    <ModernAvailabilityBadge />
                                </div>
                            </ConcaveCard>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
