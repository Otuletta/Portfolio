"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

interface ExperienceItem {
    company: string;
    role: string;
    location: string;
    period: string;
    status?: "current" | "past";
    description?: string[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // expoOut
        },
    },
};

export function Experience() {
    const { t, language } = useTranslation();

    const experiences = useMemo(() => {
        const data = t("experience.milestones");
        return Array.isArray(data) ? (data as ExperienceItem[]) : [];
    }, [t]);

    return (
        <section id="experience" className="relative bg-background px-6 py-16 md:py-24 transition-colors">

            <div className="relative mx-auto max-w-6xl">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Left - Title & Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                        className="lg:sticky lg:top-32 lg:self-start"
                    >
                        <motion.h2
                            initial={{ letterSpacing: "-0.05em", opacity: 0 }}
                            whileInView={{ letterSpacing: "0.02em", opacity: 1 }}
                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                            className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight text-foreground selection:bg-primary/30 mb-6"
                        >
                            {t("experience.title")}
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: "80px", opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="h-1 bg-primary mb-10"
                        />
                        <p className="mb-10 text-lg text-muted-foreground leading-relaxed font-sans max-w-sm">
                            {t("experience.description")}
                        </p>
                        <a
                            href="mailto:Otuletta@gmail.com"
                            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground/60 transition-colors hover:text-primary"
                        >
                            {t("experience.work_with_me")}
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </motion.div>

                    {/* Right - Vertical Timeline */}
                    <motion.div
                        key={language}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        className="relative"
                    >
                        {/* Vertical Line - Drawing Animation */}
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                            style={{ originY: 0 }}
                            className="absolute left-0 top-0 bottom-0 w-px bg-primary/20"
                        />

                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.company}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative pl-6 md:pl-8"
                                >
                                    {/* Timeline Dot & Pulse */}
                                    <div className="absolute left-0 top-2 -translate-x-1/2">
                                        <div className="relative">
                                            {/* Static Dot */}
                                            <div className="h-3 w-3 rounded-full border-2 border-primary bg-background relative z-10" />

                                            {/* Current state (Solid, no ping) */}
                                            {exp.status === "current" && (
                                                <div className="absolute inset-0 rounded-full bg-primary/20 ring-4 ring-primary/10" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="rounded-xl border border-border bg-card/40 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-muted/10">
                                        {/* Header */}
                                        <div className="mb-4 flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="mb-1 flex items-center gap-3">
                                                    <h3 className="text-lg font-semibold text-foreground">
                                                        {exp.company}
                                                    </h3>
                                                    {exp.status === "current" && (
                                                        <span className="rounded-full border border-primary/30 bg-primary/20 px-2 py-0.5 text-xs text-primary">
                                                            {t("experience.current")}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-sm text-muted-foreground">{exp.role}</p>
                                                <p className="mt-1 text-sm text-muted-foreground/60">{exp.location}</p>
                                            </div>
                                            <span className="whitespace-nowrap font-mono text-sm text-muted-foreground/60">
                                                {exp.period}
                                            </span>
                                        </div>

                                        {/* Description */}
                                        {exp.description && (
                                            <ul className="space-y-2">
                                                {exp.description.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60 transition-colors" />
                                                        <span className="text-sm text-muted-foreground/80">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
