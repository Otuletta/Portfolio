"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/use-translation";
import { FiChevronRight } from "react-icons/fi";

import { projects, ProjectData } from "@/lib/data";

// No local Project interface or projects array needed anymore


export function ProjectShowcase() {
    const { t } = useTranslation();

    return (
        <section id="portfolio" className="relative bg-background py-24 md:py-32 transition-colors">
            {/* Background elements */}
            <div className="absolute inset-0 bg-background" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24 max-w-4xl mx-auto text-center"
                >
                    <motion.h2
                        initial={{ letterSpacing: "-0.05em", opacity: 0 }}
                        whileInView={{ letterSpacing: "0.02em", opacity: 1 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none text-foreground selection:bg-primary/30"
                    >
                        {t("projects.title")}
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "80px", opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6"
                    />
                </motion.div>

                {/* Projects Grid */}
                <div className="space-y-16 md:space-y-36">
                    {projects.map((project, index) => (
                        <ProjectItem key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectItem({ project, index }: { project: ProjectData; index: number }) {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse tracking for 3D Tilt
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring physics for transitions
    const springConfig = { damping: 25, stiffness: 150 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

    // Interactive glow tracking
    const glowX = useSpring(useMotionValue(0), springConfig);
    const glowY = useSpring(useMotionValue(0), springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();

        // Tilt values (-0.5 to 0.5)
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);

        // Glow center relative to container
        glowX.set(e.clientX - rect.left);
        glowY.set(e.clientY - rect.top);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    // Container variants for vertical "apparition"
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 80,
            transition: { duration: 0.8, ease: "linear" as const }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1] as any,
            }
        }
    };

    // Stagger variants for internal content elements
    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2 + (0.1 * i),
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1] as any
            }
        })
    };



    return (
        <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            className="group relative grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-24 items-center"
        >
            {/* Brand Logo / Identity Space - 3D Interactivity */}
            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={cn(
                    "xl:col-span-7 relative aspect-video flex items-center justify-center [perspective:2000px]",
                    index % 2 === 1 && "xl:order-2"
                )}
            >
                <Link
                    href={`/projects/${project.id}`}
                    className="w-full h-full relative block"
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                >
                    <motion.div
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        className="w-full h-full relative transition-colors"
                    >
                        {/* Removed Interactive Radial Glow by user request */}

                        {/* Logo Container - Floating Effect */}
                        <motion.div
                            style={{ transform: "translateZ(80px)" }}
                            className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-8"
                        >
                            <div className="relative w-full h-full p-6 md:p-10 flex items-center justify-center">
                                <Image
                                    src={project.logo}
                                    alt={`${project.name} Logo`}
                                    fill
                                    className="object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </Link>
            </div>

            {/* Content Space */}
            <div className={cn(
                "xl:col-span-5",
                index % 2 === 1 && "xl:order-1"
            )}>
                <div className="flex items-center gap-4 mb-2">
                    <div className="h-px w-full bg-border" />
                </div>

                <Link href={`/projects/${project.id}`} className="block group/title">
                    <h3 className="text-3xl md:text-6xl font-bold text-foreground mb-6 tracking-tight group-hover/title:text-primary transition-colors">
                        {project.name}
                    </h3>
                </Link>

                <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-sans">
                    {t(project.descriptionKey)}
                </p>

                <div className="grid grid-cols-1 gap-6 mb-12">
                    {Array.isArray(t(project.highlightsKey)) && (t(project.highlightsKey) as string[]).map((item: string, i: number) => (
                        <div key={i} className="flex items-start gap-4">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span className="text-muted-foreground text-sm leading-snug">{item}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                    {Array.isArray(t(project.techKey)) && (t(project.techKey) as string[]).map((techItem: string) => (
                        <span key={techItem} className="px-3 py-1 bg-muted/50 rounded-md text-[11px] font-mono text-muted-foreground border border-border">
                            {techItem}
                        </span>
                    ))}
                </div>

                <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 group/link text-[11px] uppercase tracking-widest text-muted-foreground/60 hover:text-primary transition-colors"
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                >
                    <span>{t("projects.view_project")}</span>
                    <FiChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
            </div>
        </motion.div>
    );
}
