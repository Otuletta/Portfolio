"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/use-translation";
import { projects } from "@/lib/data";
import { FiArrowLeft, FiLayers, FiCheckCircle, FiActivity, FiCode, FiMonitor, FiArrowRight, FiShield } from "react-icons/fi";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";



export default function ProjectPage() {
    const params = useParams();
    const { t, language } = useTranslation();
    const id = params.id as string;


    const projectKey = `project_${id}`;
    const accent = projects.find(p => p.id === id)?.accent ?? "#6366f1";

    const [gameMode, setGameMode] = useState('spectator');

    // Force scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Valid check
    const projectData = t(projectKey);
    const containerRef = useRef<HTMLDivElement>(null);

    // Dynamic scroll transformations for "Vanish" effect
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const blurAmount = useTransform(scrollYProgress, [0, 0.8], [0, 12]);
    const blurFilter = useMotionTemplate`blur(${blurAmount}px)`;
    const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

    if (!projectData || typeof projectData === 'string') return null;

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 transition-colors">
            {/* Header / Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 backdrop-blur-md bg-background/50 border-b border-border">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center group"
                    >
                        <div className="relative w-16 h-16 overflow-hidden rounded-xl transition-all duration-300">
                            <Image
                                src="/images/Otuletta_logo.png"
                                alt="Oscar Tuletta Logo"
                                fill
                                className="object-contain scale-150 group-hover:scale-[1.65] transition-transform duration-500"
                            />
                        </div>
                    </Link>

                    <div className="flex items-center gap-4 md:gap-6">
                        <Link
                            href="/#portfolio"
                            className="flex items-center gap-2 text-muted-foreground/60 hover:text-foreground transition-colors group px-4 py-2 rounded-full bg-muted/50 border border-border hover:border-border/80"
                        >
                            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                            <span className="font-mono text-[10px] uppercase tracking-widest">{t("project_page.back_to_portfolio")}</span>
                        </Link>
                        <div className="h-4 w-px bg-border hidden md:block" />
                        <div className="flex items-center gap-4">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section ref={containerRef} className="relative pt-48 pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-background pointer-events-none" />

                {['odomto', 'salsealo', 'null'].includes(id) && (
                    <div
                        className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }}
                    />
                )}

                <motion.div
                    style={{ opacity, filter: blurFilter, scale }}
                    className="max-w-7xl mx-auto relative z-10"
                >
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15, delayChildren: 0.2 }
                            }
                        }}
                        className="mb-12"
                    >
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
                                }
                            }}
                            className="text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-[-0.04em] leading-[1.05] mb-8 text-white relative z-20"
                        >
                            {id === 'null' ? 'NULL' : id.toUpperCase()}
                        </motion.h1>
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.8, ease: "easeOut" }
                                }
                            }}
                            className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed relative z-20"
                        >
                            {t(`${projectKey}.description`)}
                        </motion.p>
                    </motion.div>


                    {/* Quick Stats / Tech */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.05, delayChildren: 0.8 }
                            }
                        }}
                        className="flex flex-wrap gap-3"
                    >
                        {(t(`${projectKey}.tech`) as string[]).map((tech: string) => {
                            return (
                                <motion.span
                                    key={tech}
                                    variants={{
                                        hidden: { opacity: 0, x: -10 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                    className="px-4 py-1.5 rounded-full border border-border bg-muted/30 text-[10px] uppercase tracking-widest font-medium text-muted-foreground/80 backdrop-blur-sm transition-all hover:bg-muted/50 hover:text-foreground"
                                >
                                    {tech}
                                </motion.span>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* Aesthetic Gradient for Medical look or High-Energy Gastronomy */}
                {id === 'odomto' && (
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_100%_20%,var(--primary-20)_0%,transparent_70%)] opacity-30 pointer-events-none" />
                )}
                {id === 'salsealo' && (
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_100%_10%,var(--primary)_0%,transparent_50%)] opacity-[0.08] pointer-events-none" />
                )}
                {id === 'null' && (
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_100%_20%,#00BFDF_0%,transparent_50%)] opacity-[0.08] pointer-events-none" />
                )}
            </section>

            {/* Interactive Demo Section - RELOCATED & ENHANCED for ODOMTO Experience */}
            {id === 'odomto' && (
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full py-40 overflow-hidden border-y border-primary/20 bg-[#020202]"
                >
                    {/* Futuristic Medical HUD Decorations */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                        {/* Large Background SVG Grid */}
                        <div className="absolute inset-0 opacity-[0.05]"
                            style={{
                                backgroundImage: `radial-gradient(circle, var(--primary) 1px, transparent 1px)`,
                                backgroundSize: '60px 60px'
                            }}
                        />

                        {/* Animated HUD Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] border border-primary/5 rounded-full border-dashed"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute -bottom-[30%] -right-[10%] w-[1000px] h-[1000px] border border-primary/5 rounded-full"
                        />

                        {/* Scanning Line */}
                        <motion.div
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent z-10"
                        />
                    </div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="flex-1 space-y-12 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] uppercase tracking-[0.4em] font-mono shadow-[0_0_20px_rgba(13,148,136,0.1)]"
                            >
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                                </span>
                                {t("project_page.live_experience")}
                            </motion.div>

                            <motion.h3
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] max-w-2xl"
                            >
                                {t("project_page.view_demo")}
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed max-w-xl font-sans"
                            >
                                {t("project_page.demo_subtext")}
                            </motion.p>

                        </div>

                        <div className="relative flex-shrink-0">
                            {/* Enhanced Portal Button */}
                            <div className="relative z-10">
                                <MagneticWrapper strength={0.4}>
                                    <Link
                                        href={`https://${id}.vercel.app/demo`}
                                        target="_blank"
                                        className="group/demo relative flex h-48 w-48 lg:h-64 lg:w-64 items-center justify-center rounded-full bg-primary text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_80px_rgba(13,148,136,0.3)]"
                                    >
                                        <div className="absolute inset-0 rounded-full border-[8px] border-black/5 animate-spin-slow" />
                                        <div className="absolute inset-4 rounded-full border border-black/10 border-dashed" />

                                        <div className="flex flex-col items-center gap-4 z-10 mt-1">
                                            <motion.div
                                                animate={{ y: [0, -8, 0] }}
                                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                            >
                                                <FiMonitor className="text-5xl" />
                                            </motion.div>
                                            <span className="text-[13px] font-black uppercase tracking-tighter text-center leading-none">
                                                Launch<br />Portal
                                            </span>
                                            <FiArrowRight className="text-2xl group-hover/demo:translate-x-3 transition-transform duration-500" />
                                        </div>

                                        {/* Pulse Ring */}
                                        <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-0 group-hover/demo:opacity-100 transition-opacity" />
                                    </Link>
                                </MagneticWrapper>
                            </div>

                            {/* Decorative Background Elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] border border-primary/5 rounded-full pointer-events-none" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220%] h-[220%] border border-primary/5 rounded-full border-dashed pointer-events-none animate-spin-slow opacity-10" />

                            <motion.div
                                animate={{ y: [20, -20, 20], scale: [1, 1.1, 1] }}
                                transition={{ duration: 8, repeat: Infinity }}
                                className="absolute -top-12 -right-12 p-6 rounded-3xl bg-primary/5 border border-primary/10 backdrop-blur-md hidden md:block"
                            >
                                <FiActivity className="text-primary text-3xl opacity-50" />
                            </motion.div>
                        </div>
                    </div>
                </motion.section>
            )}

            {/* NULL Interactive Demo Section */}
            {id === 'null' && (
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full py-40 overflow-hidden border-y border-primary/20 bg-[#020202]"
                >
                    <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="flex-1 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] uppercase tracking-[0.4em] font-mono shadow-[0_0_20px_rgba(0,191,223,0.1)]"
                            >
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                                </span>
                                {t("project_page.live_experience")}
                            </motion.div>

                            <motion.h3
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1] max-w-2xl"
                            >
                                The Engine Core
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed max-w-xl font-sans"
                            >
                                {t("project_null.demo_subtext")}
                            </motion.p>
                        </div>

                        <div className="relative flex-1 group w-full">
                            <div className="relative rounded-3xl border border-border/50 bg-black shadow-2xl overflow-hidden flex flex-col null-isolated-container h-[700px]">
                                {/* Mode Switcher Toolbar */}
                                <div className="absolute top-4 left-4 z-40 flex items-center gap-2 p-1 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {[
                                        { id: 'spectator', label: 'SPECTATE', icon: '◈' },
                                        { id: 'zen', label: 'ZEN', icon: '❃' },
                                        { id: 'vsbot', label: '1V1 BOT', icon: '⚔' }
                                    ].map((m) => (
                                        <button
                                            key={m.id}
                                            onClick={() => setGameMode(m.id)}
                                            className={`px-3 py-1.5 rounded flex items-center gap-2 text-[10px] font-mono tracking-widest transition-all ${
                                                gameMode === m.id 
                                                ? 'bg-[#00BFDF] text-black shadow-[0_0_15px_rgba(0,191,223,0.4)]' 
                                                : 'text-white/40 hover:text-white/80 hover:bg-white/5'
                                            }`}
                                        >
                                            <span className="text-xs">{m.icon}</span>
                                            {m.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Simple Header */}
                                <div className="h-12 border-b border-border/50 bg-muted/40 px-6 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-primary/20 border border-primary/40" />
                                        <div className="text-[9px] font-mono text-muted-foreground/40 uppercase tracking-widest">
                                            sys_mode: live
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Engine Body - Nuclear Isolation via Iframe */}
                                <div className="p-0 flex bg-black flex-grow relative overflow-hidden w-full">
                                    <iframe 
                                        src={`/projects/null/demo?mode=${gameMode}`} 
                                        className="w-full h-full border-0 shadow-[0_0_100px_rgba(0,0,0,0.8)]"
                                        title="NULL Engine Runtime"
                                        scrolling="no"
                                        loading="lazy"
                                    />

                                    {/* Mobile Overlay Suggestion */}
                                    <div className="md:hidden absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                                        <p className="text-[10px] font-mono text-[#00BFDF]/40 animate-pulse uppercase tracking-[0.2em]">
                                            OPTIMIZED FOR DESKTOP INPUT
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>
            )}

            {/* Salsealo Interactive Demo Section */}
            {id === 'salsealo' && (
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full py-40 overflow-hidden border-y border-primary/20 bg-[#050505]"
                >
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 opacity-[0.02]"
                            style={{
                                backgroundImage: `linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
                                backgroundSize: '100px 100%'
                            }}
                        />
                    </div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="flex-1 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] uppercase tracking-[0.4em] font-mono shadow-[0_0_20px_rgba(249,115,22,0.1)]"
                            >
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                                </span>
                                {t("project_page.live_experience")}
                            </motion.div>

                            <motion.h3
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] max-w-2xl"
                            >
                                {t("project_page.view_demo")}
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed max-w-xl"
                            >
                                {t("project_salsealo.demo_subtext")}
                            </motion.p>
                        </div>

                        <div className="relative">
                            <MagneticWrapper strength={0.4}>
                                <Link
                                    href="https://salsealo-os.vercel.app/demo"
                                    target="_blank"
                                    className="group/demo relative flex h-48 w-48 lg:h-64 lg:w-64 items-center justify-center rounded-3xl bg-primary text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_80px_rgba(249,115,22,0.3)]"
                                >
                                    <div className="flex flex-col items-center gap-4 z-10">
                                        <FiActivity className="text-5xl" />
                                        <span className="text-[13px] font-black uppercase tracking-tighter text-center leading-none">
                                            {t(`${projectKey}.demo_button_label`).split(' ')[0]}<br />{t(`${projectKey}.demo_button_label`).split(' ').slice(1).join(' ')}
                                        </span>
                                        <FiArrowRight className="text-2xl group-hover/demo:translate-x-3 transition-transform duration-500" />
                                    </div>
                                </Link>
                            </MagneticWrapper>
                        </div>
                    </div>
                </motion.section>
            )}

            {/* Content Body */}
            <section className="px-6 py-32 bg-muted/20 border-y border-border">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Key Features / Modules */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                    >
                        <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground/40 mb-12 flex items-center gap-4">
                            <FiLayers className="text-secondary" /> {id === 'odomto' ? t("project_page.core_modules") : t("project_page.key_features")}
                        </h2>
                        
                        {id === 'salsealo' ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {(t(`${projectKey}.highlights`) as string[]).map((feature: string, i: number) => (
                                    <motion.div
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                        className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary transition-colors duration-500">
                                            <FiActivity className="text-primary group-hover:text-black transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{feature}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{t("project_page.feature_subtext")}</p>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-8">
                                {(t(`${projectKey}.highlights`) as string[]).map((feature: string, i: number) => (
                                    <motion.div
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, x: -30 },
                                            visible: { opacity: 1, x: 0 }
                                        }}
                                        className="flex gap-6 items-start group"
                                    >
                                        <div className="mt-1.5 w-6 h-6 rounded-lg bg-card flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors shadow-sm group-hover:shadow-primary/10">
                                            {id === 'odomto' || id === 'null' ?
                                                <FiActivity className="text-primary text-sm group-hover:scale-110 transition-transform" /> :
                                                <FiCheckCircle className="text-primary text-sm group-hover:scale-110 transition-transform" />
                                            }
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-foreground/90 group-hover:text-primary/90 transition-colors">{feature}</h3>
                                            <p className="text-muted-foreground/40 text-sm">{t("project_page.feature_subtext")}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* Challenge & Tech Deep Dive */}
                    <div className="space-y-16 lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-primary/5 border border-primary/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_0_50px_rgba(13,148,136,0.05)] relative group overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-primary transition-all duration-700" />
                            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-primary mb-6">{t("project_page.the_challenge")}</h2>
                            <p className="text-lg text-muted-foreground italic font-serif leading-relaxed">
                                &quot;{t(`${projectKey}.challenge`)}&quot;
                            </p>
                        </motion.div>

                        {/* Implementation Challenges */}
                        {Array.isArray(t(`${projectKey}.challenges_list`)) && (
                            <div className="space-y-8">
                                <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground/40 flex items-center gap-4">
                                    <FiActivity className="text-primary" /> {t("project_page.engineering_challenges")}
                                </h2>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: { staggerChildren: 0.15 }
                                        }
                                    }}
                                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                >
                                    {(t(`${projectKey}.challenges_list`) as {title:string, description:string}[]).map((c, i: number) => (
                                        <motion.div
                                            key={i}
                                            variants={{
                                                hidden: { opacity: 0, y: 20, scale: 0.95 },
                                                visible: { opacity: 1, y: 0, scale: 1 }
                                            }}
                                            whileHover={{ y: -5, borderColor: accent }}
                                            className="bg-card border border-border p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_10px_30px_rgba(13,148,136,0.1)] group/card"
                                        >
                                            <h4 className="font-bold text-foreground/80 mb-2 text-sm uppercase tracking-wider group-hover/card:text-primary transition-colors">{c.title}</h4>
                                            <p className="text-xs text-muted-foreground leading-relaxed">{c.description}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        )}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground/40 mb-8 flex items-center gap-4">
                                <FiCode className="text-primary" /> {t("project_page.architectural_solution")}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed font-sans">
                                {t(`${projectKey}.solution`)}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Specialized NULL Sections */}
            {id === 'null' && (
                <>
                    {/* Compute Isolation Hub */}
                    <section className="py-32 px-6 bg-[#030712] border-b border-white/5 overflow-hidden">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-primary mb-16">Thread Isolation Lab</h2>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                                <div className="space-y-8">
                                    <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                                        Compute<br />Isolation
                                    </h3>
                                    <p className="text-xl text-muted-foreground/80 leading-relaxed max-w-xl">
                                        Decoupling standard React hydration from the high-frequency game loop using dedicated Web Worker instances. Zero main-thread overhead.
                                    </p>

                                    <div className="grid grid-cols-2 gap-8 pt-8">
                                        <div className="space-y-2">
                                            <div className="text-3xl font-bold text-white">16.6ms</div>
                                            <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">Target Frame Time</div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-3xl font-bold text-primary">0%</div>
                                            <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">Main Thread Jitter</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative aspect-square bg-primary/5 rounded-full border border-primary/10 flex items-center justify-center">
                                    <svg viewBox="0 0 400 400" className="w-full h-full">
                                        <motion.defs>
                                            <linearGradient id="worker-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
                                                <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.5" />
                                                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                                            </linearGradient>
                                        </motion.defs>

                                        {/* Main Thread Axis */}
                                        <motion.rect
                                            x="148" y="50" width="2" height="300"
                                            fill="var(--muted-foreground)"
                                            className="opacity-20"
                                        />
                                        {/* Worker Thread Axis */}
                                        <motion.rect
                                            x="248" y="50" width="2" height="300"
                                            fill="url(#worker-gradient)"
                                        />

                                        {/* Activity Nodes */}
                                        {[100, 180, 260].map((y, i) => (
                                            <g key={`node-${i}`}>
                                                <motion.circle
                                                    cx="149" cy={y} r="4"
                                                    fill="var(--background)" stroke="var(--muted-foreground)" strokeWidth="1"
                                                    className="opacity-40"
                                                />
                                                <motion.circle
                                                    cx="249" cy={y} r="6"
                                                    fill="var(--primary)"
                                                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                                                />
                                                <motion.path
                                                    d={`M155 ${y} L243 ${y}`}
                                                    stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 4"
                                                    initial={{ pathLength: 0 }}
                                                    whileInView={{ pathLength: 1 }}
                                                    className="opacity-30"
                                                />
                                            </g>
                                        ))}

                                        <text x="149" y="40" textAnchor="middle" fill="var(--muted-foreground)" className="text-[9px] font-mono tracking-widest uppercase opacity-40">Main</text>
                                        <text x="249" y="40" textAnchor="middle" fill="var(--primary)" className="text-[9px] font-mono tracking-widest uppercase">Worker</text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Multithreaded Architecture Diagram */}
                    <section className="py-32 px-6 bg-[#020202] border-t border-white/5">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-muted-foreground/40 mb-16 text-center">Engine Architecture</h2>

                            <div className="relative w-full aspect-[21/9] bg-card/10 rounded-[3rem] border border-primary/20 overflow-hidden p-8 md:p-16 flex items-center justify-center">
                                <svg viewBox="0 0 1000 400" className="w-full h-full text-foreground/20">
                                    <motion.path
                                        d="M200 200 L400 200 M600 200 L800 200"
                                        fill="none" stroke="var(--primary)" strokeWidth="1" strokeDasharray="5 5" opacity="0.5"
                                    />
                                    <g transform="translate(150, 200)">
                                        <rect x="-80" y="-40" width="160" height="80" rx="15" fill="var(--background)" stroke="var(--border)" strokeWidth="1" />
                                        <text x="0" y="5" textAnchor="middle" fill="white" className="text-xs font-bold font-mono">REACT UI</text>
                                    </g>
                                    <g transform="translate(500, 200)">
                                        <circle r="70" fill="var(--primary)" className="opacity-10" />
                                        <motion.circle r="60" fill="var(--primary)" className="opacity-20" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }} />
                                        <text x="0" y="5" textAnchor="middle" fill="white" className="text-sm font-black font-mono tracking-widest text-primary">CORE</text>
                                    </g>
                                    <g transform="translate(850, 200)">
                                        <rect x="-80" y="-40" width="160" height="80" rx="15" fill="var(--background)" stroke="var(--primary)" strokeWidth="1" />
                                        <text x="0" y="5" textAnchor="middle" fill="white" className="text-xs font-bold font-mono">CANVAS GPU</text>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* Specialized Salsealo Sections */}
            {id === 'salsealo' && (
                <>
                    {/* Recipe Intelligence Hub */}
                    <section className="py-32 px-6 bg-[#080808] border-b border-white/5 overflow-hidden">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-primary mb-16">{t("project_page.recipe_lab")}</h2>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                                <div className="space-y-8">
                                    <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                                        {t(`${projectKey}.recipe_intelligence_title`).split(' ')[0]}<br />{t(`${projectKey}.recipe_intelligence_title`).split(' ').slice(1).join(' ')}
                                    </h3>
                                    <p className="text-xl text-muted-foreground/80 leading-relaxed max-w-xl">
                                        {t(`${projectKey}.recipe_intelligence_desc`)}
                                    </p>

                                    <div className="grid grid-cols-2 gap-8 pt-8">
                                        <div className="space-y-2">
                                            <div className="text-3xl font-bold text-white">{t(`${projectKey}.calc_latency_value`)}</div>
                                            <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">{t(`${projectKey}.calc_latency_label`)}</div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-3xl font-bold text-primary">{t(`${projectKey}.stock_accuracy_value`)}</div>
                                            <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">{t(`${projectKey}.stock_accuracy_label`)}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative aspect-square bg-primary/5 rounded-full border border-primary/10 flex items-center justify-center">
                                    {/* Enhanced Radar Chart / Spider Web Visualization */}
                                    <svg viewBox="0 0 400 400" className="w-full h-full">
                                        <motion.defs>
                                            <radialGradient id="radar-gradient" cx="0.5" cy="0.5" r="0.5">
                                                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
                                                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                                            </radialGradient>
                                        </motion.defs>

                                        {/* Background Circles (Concentric) */}
                                        {[60, 110, 160].map((r, i) => (
                                            <motion.circle
                                                key={`circle-${i}`}
                                                cx="200" cy="200" r={r}
                                                fill="none"
                                                stroke="var(--primary)"
                                                strokeWidth="0.5"
                                                strokeDasharray="4 4"
                                                className="opacity-20"
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 0.2 }}
                                                transition={{ duration: 1, delay: i * 0.2 }}
                                            />
                                        ))}

                                        {/* Axes Lines */}
                                        {[0, 72, 144, 216, 288].map((angle, i) => {
                                            const rad = (angle * Math.PI) / 180;
                                            const x2 = 200 + 160 * Math.cos(rad);
                                            const y2 = 200 + 160 * Math.sin(rad);
                                            return (
                                                <line
                                                    key={`axis-${i}`}
                                                    x1="200" y1="200"
                                                    x2={x2.toFixed(1)}
                                                    y2={y2.toFixed(1)}
                                                    stroke="var(--primary)"
                                                    strokeWidth="0.5"
                                                    className="opacity-30"
                                                />
                                            );
                                        })}

                                        {/* Dynamic Data Polygon */}
                                        <motion.path
                                            d="M200,80 L314,163 L270,296 L130,296 L86,163 Z"
                                            fill="url(#radar-gradient)"
                                            stroke="var(--primary)"
                                            strokeWidth="1.5"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            whileInView={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            animate={{
                                                d: [
                                                    "M200,80 L314,163 L270,296 L130,296 L86,163 Z",
                                                    "M200,60 L330,150 L280,310 L120,310 L70,150 Z",
                                                    "M200,80 L314,163 L270,296 L130,296 L86,163 Z"
                                                ],
                                                transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                            }}
                                        />

                                        {/* Data Points on the Polygon */}
                                        {[
                                            { cx: 200, cy: 80 }, { cx: 314, cy: 163 }, { cx: 270, cy: 296 },
                                            { cx: 130, cy: 296 }, { cx: 86, cy: 163 }
                                        ].map((point, i) => (
                                            <motion.circle
                                                key={`point-${i}`}
                                                cx={point.cx} cy={point.cy} r="4"
                                                fill="var(--background)"
                                                stroke="var(--primary)"
                                                strokeWidth="2"
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                            />
                                        ))}

                                        {/* Central Core */}
                                        <circle cx="200" cy="200" r="20" fill="var(--primary)" className="animate-pulse opacity-50" />
                                        <circle cx="200" cy="200" r="10" fill="white" />
                                        <text x="200" y="240" textAnchor="middle" fill="var(--primary)" className="text-[10px] font-mono font-bold tracking-widest uppercase">{t(`${projectKey}.engine_label`)}</text>
                                    </svg>

                                    {/* Orbital Labels */}
                                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-12">
                                        <div className="px-4 py-2 bg-card border border-border rounded-xl text-[10px] font-mono text-primary shadow-xl">{t(`${projectKey}.real_time_costing`)}</div>
                                    </div>
                                    <div className="absolute top-1/2 right-0 translate-x-12 -translate-y-1/2">
                                        <div className="px-4 py-2 bg-card border border-border rounded-xl text-[10px] font-mono text-muted-foreground shadow-xl">{t(`${projectKey}.purchase_link`)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Demo Isolation Section */}
                    <section className="py-32 px-6 bg-black">
                        <div className="max-w-7xl mx-auto">
                            <div className="p-12 md:p-24 rounded-[3rem] bg-gradient-to-br from-card to-background border border-border relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

                                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                    <div className="space-y-8">
                                        <div className="w-16 h-1 bg-primary" />
                                        <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                                            {t(`${projectKey}.demo_isolation_title`).split(' ').slice(0, 2).join(' ')}<br />{t(`${projectKey}.demo_isolation_title`).split(' ').slice(2).join(' ')}
                                        </h3>
                                        <p className="text-xl text-muted-foreground leading-relaxed">
                                            {t(`${projectKey}.demo_isolation_desc`)}
                                        </p>

                                        <div className="space-y-4 pt-4">
                                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">01</div>
                                                <div className="text-sm font-mono text-foreground/80">{t(`${projectKey}.isolation_step_01`)}</div>
                                            </div>
                                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">02</div>
                                                <div className="text-sm font-mono text-foreground/80">{t(`${projectKey}.isolation_step_02`)}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative p-1 bg-border rounded-3xl overflow-hidden shadow-2xl">
                                        {/* Specialized "Shielded Grid" Visual */}
                                        <div className="bg-background rounded-[1.4rem] p-8 aspect-video flex flex-col justify-center gap-4 relative">
                                            <div className="h-2 w-1/2 bg-muted/20 rounded-full" />
                                            <div className="h-2 w-2/3 bg-muted/20 rounded-full" />
                                            <div className="h-2 w-1/3 bg-muted/20 rounded-full" />

                                            <motion.div
                                                className="absolute inset-0 bg-primary/5 backdrop-blur-[2px] border-2 border-primary/20 flex items-center justify-center"
                                                animate={{ opacity: [0.5, 0.8, 0.5] }}
                                                transition={{ duration: 4, repeat: Infinity }}
                                            >
                                                <div className="flex flex-col items-center gap-2">
                                                    <FiCheckCircle className="text-primary text-4xl" />
                                                    <span className="text-[10px] font-mono text-primary tracking-[0.3em] font-bold">{t(`${projectKey}.isolation_active`)}</span>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* System Architecture Diagram */}
                    <section className="py-32 px-6 bg-[#020202] border-t border-white/5">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-muted-foreground/40 mb-16 text-center">{t("project_page.system_architecture")}</h2>

                            <div className="relative w-full aspect-[21/9] bg-card/30 rounded-[3rem] border border-border overflow-hidden p-8 md:p-16 flex items-center justify-center">
                                <div className="absolute inset-0 opacity-[0.03]"
                                    style={{
                                        backgroundImage: `radial-gradient(var(--primary) 1px, transparent 1px)`,
                                        backgroundSize: '40px 40px'
                                    }}
                                />

                                <svg viewBox="0 0 1000 400" className="w-full h-full text-foreground/20">
                                    {/* Connection Lines */}
                                    <motion.path
                                        d="M250 200 L450 200 M550 200 L750 200 M500 150 L500 100 L250 100 M500 250 L500 300 L750 300"
                                        fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5"
                                    />

                                    {/* POS Engine */}
                                    <g>
                                        <rect x="50" y="150" width="200" height="100" rx="20" fill="var(--card)" stroke="var(--primary)" strokeWidth="1" />
                                        <text x="150" y="205" textAnchor="middle" fill="white" className="text-sm font-bold font-mono">{t(`${projectKey}.pos_engine`)}</text>
                                        <circle cx="250" cy="200" r="4" fill="var(--primary)" />
                                    </g>

                                    {/* Orchestrator */}
                                    <g>
                                        <circle cx="500" cy="200" r="60" fill="var(--primary)" className="opacity-10" />
                                        <circle cx="500" cy="200" r="40" fill="var(--primary)" className="opacity-20" />
                                        <text x="500" y="205" textAnchor="middle" fill="var(--primary)" className="text-xs font-black font-mono tracking-widest">{t(`${projectKey}.core_label`)}</text>
                                    </g>

                                    {/* Inventory Hub */}
                                    <g>
                                        <rect x="750" y="150" width="200" height="100" rx="20" fill="var(--card)" stroke="var(--primary)" strokeWidth="1" />
                                        <text x="850" y="205" textAnchor="middle" fill="white" className="text-sm font-bold font-mono">{t(`${projectKey}.inventory_hub`)}</text>
                                        <circle cx="750" cy="200" r="4" fill="var(--primary)" />
                                    </g>

                                    {/* Analytics */}
                                    <g>
                                        <rect x="750" y="250" width="200" height="100" rx="20" fill="var(--card)" stroke="white" strokeWidth="0.2" className="opacity-50" />
                                        <text x="850" y="305" textAnchor="middle" fill="white" className="text-[10px] font-mono opacity-50 uppercase tracking-widest">{t(`${projectKey}.analytics_label`)}</text>
                                    </g>

                                    {/* Recipe Lab */}
                                    <g>
                                        <rect x="50" y="50" width="200" height="100" rx="20" fill="var(--card)" stroke="white" strokeWidth="0.2" className="opacity-50" />
                                        <text x="150" y="105" textAnchor="middle" fill="white" className="text-[10px] font-mono opacity-50 uppercase tracking-widest">{t(`${projectKey}.recipe_lab_label`)}</text>
                                    </g>

                                    {/* Flow Animation Dots */}
                                    <motion.circle r="3" fill="var(--primary)" animate={{ offsetDistance: ["0%", "100%"] }} style={{ offsetPath: "path('M250 200 L450 200')" }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
                                    <motion.circle r="3" fill="var(--primary)" animate={{ offsetDistance: ["0%", "100%"] }} style={{ offsetPath: "path('M550 200 L750 200')" }} transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }} />
                                </svg>

                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center space-y-2">
                                    <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.5em]">{t(`${projectKey}.arch_footer_sub`)}</div>
                                    <div className="text-xs font-bold text-white uppercase tracking-wider italic">{t(`${projectKey}.arch_footer_main`)}</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* Specialized ODOMTO Sections */}
            {id === 'odomto' && (
                <>
                    {/* Clinical Intelligence Hub (Equivalent to Recipe Lab) */}
                    <section className="py-32 px-6 bg-[#030712] border-b border-white/5 overflow-hidden">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-primary mb-16">{t(`${projectKey}.dental_intelligence_title`)}</h2>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                                <div className="space-y-8">
                                    <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                                        {t(`${projectKey}.dental_intelligence_title`).split(' ')[0]}<br />{t(`${projectKey}.dental_intelligence_title`).split(' ').slice(1).join(' ')}
                                    </h3>
                                    <p className="text-xl text-muted-foreground/80 leading-relaxed max-w-xl">
                                        {t(`${projectKey}.dental_intelligence_desc`)}
                                    </p>

                                    <div className="grid grid-cols-2 gap-8 pt-8">
                                        <div className="space-y-2">
                                            <div className="text-3xl font-bold text-white">{t(`${projectKey}.patient_engagement_value`)}</div>
                                            <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">{t(`${projectKey}.patient_engagement_label`)}</div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-3xl font-bold text-primary">{t(`${projectKey}.uptime_value`)}</div>
                                            <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">{t(`${projectKey}.uptime_label`)}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative aspect-square bg-primary/5 rounded-full border border-primary/10 flex items-center justify-center">
                                    {/* Neural Spine Visualization - Vertical Stability */}
                                    <svg viewBox="0 0 400 400" className="w-full h-full">
                                        <motion.defs>
                                            <linearGradient id="spine-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
                                                <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.5" />
                                                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                                            </linearGradient>
                                        </motion.defs>

                                        {/* Central Spinal Column */}
                                        <motion.rect
                                            x="198" y="50" width="4" height="300"
                                            fill="url(#spine-gradient)"
                                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        />

                                        {/* Vertebrae / Nodes */}
                                        {[80, 160, 240, 320].map((y, i) => (
                                            <g key={`vertebra-${i}`}>
                                                {/* Horizontal Connections */}
                                                <motion.line
                                                    x1="140" y1={y} x2="260" y2={y}
                                                    stroke="var(--primary)" strokeWidth="1"
                                                    initial={{ pathLength: 0 }}
                                                    whileInView={{ pathLength: 1 }}
                                                    transition={{ duration: 1, delay: i * 0.2 }}
                                                />
                                                {/* Left Node */}
                                                <motion.rect
                                                    x="130" y={y - 10} width="20" height="20" rx="4"
                                                    fill="var(--background)" stroke="var(--primary)" strokeWidth="1.5"
                                                    animate={{ scale: [1, 1.1, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                                />
                                                {/* Right Node */}
                                                <motion.rect
                                                    x="250" y={y - 10} width="20" height="20" rx="4"
                                                    fill="var(--background)" stroke="var(--primary)" strokeWidth="1.5"
                                                    animate={{ scale: [1, 1.1, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 + 0.5 }}
                                                />
                                                {/* Center Node */}
                                                <motion.circle
                                                    cx="200" cy={y} r="6"
                                                    fill="var(--primary)"
                                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                                                />
                                            </g>
                                        ))}

                                        {/* Pulse Signal Moving Down */}
                                        <motion.circle
                                            r="4" fill="white"
                                            animate={{ cy: [60, 340], opacity: [0, 1, 0] }}
                                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                            cx="200"
                                        />

                                        <text x="320" y="200" textAnchor="middle" dominantBaseline="middle" fill="white" className="text-[10px] font-mono font-bold tracking-widest uppercase rotate-90">{t(`${projectKey}.engine_label`)}</text>
                                    </svg>

                                    {/* Tech Labels Re-positioned */}
                                    <div className="absolute top-4 right-4">
                                        <div className="px-3 py-1.5 bg-background border border-primary/30 rounded-lg text-[9px] font-mono text-primary uppercase tracking-wider backdrop-blur-md shadow-sm">{t(`${projectKey}.real_time_sync`)}</div>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <div className="px-3 py-1.5 bg-background border border-primary/30 rounded-lg text-[9px] font-mono text-muted-foreground uppercase tracking-wider backdrop-blur-md shadow-sm">{t(`${projectKey}.encrypted_vault`)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Security Hub (Equivalent to Demo Isolation) */}
                    <section className="py-32 px-6 bg-black">
                        <div className="max-w-7xl mx-auto">
                            <div className="p-12 md:p-24 rounded-[3rem] bg-gradient-to-br from-[#0f172a] to-background border border-primary/20 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 -translate-x-1/2" />

                                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                    <div className="relative p-1 bg-border rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
                                        {/* Interactive Lock/Shield Visualization */}
                                        <div className="bg-background rounded-[1.4rem] p-8 aspect-square flex flex-col items-center justify-center gap-4 relative">
                                            <motion.div
                                                className="absolute inset-0 border-[4px] border-primary/20 rounded-full m-12"
                                                animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
                                                transition={{ duration: 3, repeat: Infinity }}
                                            />
                                            <motion.div
                                                className="text-8xl text-primary"
                                                animate={{ opacity: [0.8, 1, 0.8] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >
                                                <FiShield />
                                            </motion.div>

                                            <motion.div
                                                className="absolute inset-x-0 h-1 bg-primary/50 top-1/2"
                                                animate={{ top: ["0%", "100%", "0%"], opacity: [0, 1, 0] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                            />

                                            <div className="absolute bottom-8 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
                                                <span className="text-[10px] font-mono text-primary font-bold tracking-[0.2em]">{t(`${projectKey}.security_active`)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-8 order-1 lg:order-2">
                                        <div className="w-16 h-1 bg-primary" />
                                        <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                                            {t(`${projectKey}.security_hub_title`)}
                                        </h3>
                                        <p className="text-xl text-muted-foreground leading-relaxed">
                                            {t(`${projectKey}.security_hub_desc`)}
                                        </p>

                                        <div className="space-y-4 pt-4">
                                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">01</div>
                                                <div className="text-sm font-mono text-foreground/80">{t(`${projectKey}.security_step_01`)}</div>
                                            </div>
                                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">02</div>
                                                <div className="text-sm font-mono text-foreground/80">{t(`${projectKey}.security_step_02`)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Multi-Tenant Architecture Diagram */}
                    <section className="py-32 px-6 bg-[#020202] border-t border-white/5">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-muted-foreground/40 mb-16 text-center">{t("project_page.system_architecture")}</h2>

                            <div className="relative w-full aspect-[21/9] bg-card/10 rounded-[3rem] border border-primary/20 overflow-hidden p-8 md:p-16 flex items-center justify-center">
                                <div className="absolute inset-0 opacity-[0.05]"
                                    style={{
                                        backgroundImage: `linear-gradient(45deg, var(--primary) 1px, transparent 1px)`,
                                        backgroundSize: '30px 30px'
                                    }}
                                />

                                <svg viewBox="0 0 1000 400" className="w-full h-full text-foreground/20">
                                    {/* Data Flow Lines */}
                                    <motion.path
                                        d="M200 200 L400 200 M600 200 L800 200 M500 100 L500 300"
                                        fill="none" stroke="var(--primary)" strokeWidth="1" strokeDasharray="5 5" opacity="0.5"
                                    />

                                    {/* Patient Portal Node */}
                                    <g transform="translate(100, 200)">
                                        <rect x="-80" y="-40" width="160" height="80" rx="10" fill="var(--card)" stroke="var(--primary)" strokeWidth="1" />
                                        <text x="0" y="5" textAnchor="middle" fill="white" className="text-xs font-bold font-mono">{t(`${projectKey}.patient_portal`)}</text>
                                    </g>

                                    {/* Central Cloud Core */}
                                    <g transform="translate(500, 200)">
                                        <circle r="70" fill="var(--primary)" className="opacity-10" />
                                        <circle r="50" fill="var(--primary)" className="opacity-20" />
                                        <text x="0" y="5" textAnchor="middle" fill="white" className="text-sm font-black font-mono tracking-widest">{t(`${projectKey}.engine_label`)}</text>
                                    </g>

                                    {/* Provider Portal Node */}
                                    <g transform="translate(900, 200)">
                                        <rect x="-80" y="-40" width="160" height="80" rx="10" fill="var(--card)" stroke="var(--primary)" strokeWidth="1" />
                                        <text x="0" y="5" textAnchor="middle" fill="white" className="text-xs font-bold font-mono">{t(`${projectKey}.provider_portal`)}</text>
                                    </g>

                                    {/* Moving Packets */}
                                    <motion.circle r="4" fill="var(--primary)" animate={{ cx: [200, 430] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} cy="200" />
                                    <motion.circle r="4" fill="var(--primary)" animate={{ cx: [820, 570] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} cy="200" />
                                </svg>

                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center space-y-2">
                                    <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.5em]">{t(`${projectKey}.arch_footer_sub`)}</div>
                                    <div className="text-xs font-bold text-white uppercase tracking-wider italic">{t(`${projectKey}.arch_footer_main`)}</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* Final CTA Area */}
            <section className="py-48 px-6 text-center">
                <motion.div
                    whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12">{t("project_page.similar_solution")}</h2>
                    <button
                        data-cal-link="otuletta/15min"
                        data-cal-config={`{"layout":"month_view","language":"${(language || "en").toLowerCase()}"}`}
                        className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-foreground text-background font-black hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-foreground/10 cursor-pointer"
                    >
                        {t("project_page.start_project")}
                        <FiArrowLeft className="rotate-180" />
                    </button>
                </motion.div>
            </section>
        </main>
    );
}
