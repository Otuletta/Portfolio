"use client";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiFramer,
    SiNodedotjs,
    SiPython,
    SiPostgresql,
    SiPrisma,
    SiDocker,
    SiGit,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiKotlin,
    SiSwift,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { useTranslation } from "@/hooks/use-translation";

interface Skill {
    name: string;
    category: string;
    icon: React.ReactNode;
    color: string;
    x: number;
    y: number;
}

const categories = [
    { name: "Frontend", x: -450, y: 0, color: "#818cf8" },
    { name: "Backend", x: 450, y: 0, color: "#34d399" },
    { name: "DevOps", x: 0, y: -450, color: "#fb923c" },
    { name: "Ecosystem", x: 0, y: 450, color: "#f472b6" },
];

function NeuralPath({ start, end, color, isActive }: { start: { x: number, y: number }, end: { x: number, y: number }, color: string, isActive: boolean }) {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Perpendicular offset for organic bowing
    const nx = -dy / dist;
    const ny = dx / dist;
    const bow = dist * 0.15;

    const cp1x = start.x + dx * 0.3 + nx * bow;
    const cp1y = start.y + dy * 0.3 + ny * bow;
    const cp2x = start.x + dx * 0.7 - nx * bow;
    const cp2y = start.y + dy * 0.7 - ny * bow;

    const pathD = `M ${start.x} ${start.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${end.x} ${end.y}`;

    return (
        <g>
            <motion.path
                d={pathD}
                stroke={color}
                strokeWidth="2"
                fill="none"
                variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: {
                        pathLength: 1,
                        opacity: isActive ? 0.9 : 0.25,
                        strokeWidth: isActive ? 4 : 2,
                        transition: { duration: 1.5, ease: "easeInOut" }
                    }
                }}
            />
            {isActive && (
                <motion.circle
                    r="3.5"
                    fill={color}
                >
                    <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        path={pathD}
                    />
                </motion.circle>
            )}
        </g>
    );
}

function SkillNode({ skill, isActive, onHover }: { skill: Skill, isActive: boolean, onHover: (v: boolean) => void }) {
    return (
        <motion.g
            variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
            }}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
            style={{ cursor: 'pointer', willChange: 'transform, opacity' }}
        >
            <motion.circle
                cx={skill.x}
                cy={skill.y}
                r="60"
                fill="transparent"
                animate={{
                    scale: isActive ? 1.2 : 1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />
            <foreignObject x={skill.x - 32} y={skill.y - 32} width="64" height="64">
                <div className="flex items-center justify-center w-full h-full" style={{ color: skill.color, fontSize: '52px' }}>
                    {skill.icon}
                </div>
            </foreignObject>
        </motion.g>
    );
}

export function SkillsShowcase() {
    const { t } = useTranslation();
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);



    // Dynamic color for Next.js based on theme
    const skills = [
        // Frontend (Spreadead in the Left Quadrant)
        { name: "Next.js", category: "Frontend", icon: <SiNextdotjs />, color: "#FFFFFF", x: -950, y: 0 },
        { name: "React", category: "Frontend", icon: <SiReact />, color: "#61DAFB", x: -850, y: -200 },
        { name: "TypeScript", category: "Frontend", icon: <SiTypescript />, color: "#3178C6", x: -850, y: 200 },
        { name: "HTML5", category: "Frontend", icon: <SiHtml5 />, color: "#E34F26", x: -750, y: -450 },
        { name: "JavaScript", category: "Frontend", icon: <SiJavascript />, color: "#F7DF1E", x: -750, y: 450 },
        { name: "CSS3", category: "Frontend", icon: <SiCss3 />, color: "#1572B6", x: -600, y: -650 },
        { name: "Tailwind", category: "Frontend", icon: <SiTailwindcss />, color: "#38B2AC", x: -600, y: 650 },
        { name: "Framer", category: "Frontend", icon: <SiFramer />, color: "#0055FF", x: -450, y: 800 },

        // Backend (Spread in the Right Quadrant)
        { name: "Python", category: "Backend", icon: <SiPython />, color: "#3776AB", x: 950, y: 0 },
        { name: "Node.js", category: "Backend", icon: <SiNodedotjs />, color: "#339933", x: 850, y: -200 },
        { name: "PostgreSQL", category: "Backend", icon: <SiPostgresql />, color: "#4169E1", x: 850, y: 200 },
        { name: "Prisma", category: "Backend", icon: <SiPrisma />, color: "#5A67D8", x: 750, y: -450 },
        { name: "Java", category: "Backend", icon: <FaJava />, color: "#ED8B00", x: 750, y: 450 },
        { name: "C#", category: "Backend", icon: <TbBrandCSharp />, color: "#239120", x: 500, y: 750 },

        // DevOps (Spread in the Top Quadrant)
        { name: "AWS", category: "DevOps", icon: <FaAws />, color: "#FF9900", x: 0, y: -850 },
        { name: "Docker", category: "DevOps", icon: <SiDocker />, color: "#2496ED", x: -350, y: -750 },
        { name: "Git", category: "DevOps", icon: <SiGit />, color: "#F05032", x: 350, y: -750 },

        // Ecosystem / Mobile (Spread in the Bottom Quadrant)
        { name: "Kotlin", category: "Ecosystem", icon: <SiKotlin />, color: "#7F52FF", x: -280, y: 780 },
        { name: "Swift", category: "Ecosystem", icon: <SiSwift />, color: "#F05138", x: 280, y: 780 },
    ];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Mobile Optimization: Condense the tree and zoom in
    const scaleFactor = isMobile ? 0.55 : 1;
    const mobileViewBox = isMobile ? "-600 -550 1200 1100" : "-1150 -1000 2300 2000";

    // Dynamic animation variants - High Performance Focus
    const sectionVariants: Variants = {
        hidden: { opacity: 0, scale: 0.98 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                staggerChildren: 0.03
            }
        }
    };

    return (
        <motion.section
            className="relative bg-background px-6 py-16 md:py-48 overflow-hidden min-h-[800px] lg:min-h-[1400px] flex flex-col items-center transition-colors"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Re-enable animations on scroll
            variants={sectionVariants}
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-28 z-10 max-w-4xl mx-auto"
            >
                <motion.h2
                    initial={{ letterSpacing: "-0.05em", opacity: 0 }}
                    whileInView={{ letterSpacing: "0.02em", opacity: 1 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none text-foreground selection:bg-primary/30"
                >
                    {t("skills.title")}
                </motion.h2>
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "100px", opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8"
                />
            </motion.div>

            {/* The Nexus Tree - Ultra Scaled */}
            <div className="relative w-full max-w-[1400px] aspect-square lg:aspect-[1.1/1] flex items-center justify-center will-change-transform">
                <svg viewBox={mobileViewBox} className="w-full h-full transition-[viewBox] duration-500 ease-in-out">
                    {/* Definitions for Glows */}
                    <defs>

                    </defs>

                    {/* All connections rendered with pathLength: 1 to avoid animation overhead on large trees */}
                    {skills.map((skill) => {
                        const cat = categories.find(c => c.name === skill.category || (c.name === "DevOps" && skill.category === "DevOps") || (c.name === "Ecosystem" && skill.category === "Ecosystem"));
                        if (!cat) return null;

                        // Apply Scale Factor
                        const sX = skill.x * scaleFactor;
                        const sY = skill.y * scaleFactor;
                        const cX = cat.x * scaleFactor;
                        const cY = cat.y * scaleFactor;

                        return (
                            <NeuralPath
                                key={`path-${skill.name}`}
                                start={{ x: cX, y: cY }}
                                end={{ x: sX, y: sY }}
                                color={skill.color}
                                isActive={hoveredSkill === skill.name || hoveredCategory === cat.name}
                            />
                        );
                    })}

                    {categories.map((cat) => (
                        <NeuralPath
                            key={`core-${cat.name}`}
                            start={{ x: 0, y: 0 }}
                            end={{ x: cat.x * scaleFactor, y: cat.y * scaleFactor }}
                            color={cat.color}
                            isActive={hoveredCategory === cat.name}
                        />
                    ))}

                    {/* Core Hub - Redesigned for High Contrast */}
                    <motion.g
                        variants={{
                            hidden: { scale: 0.8, opacity: 0 },
                            visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
                        }}
                        className="cursor-default"
                    >
                        {/* Octagon-like shape for a more 'tech' feel */}
                        <path
                            d="M-70,-30 L-30,-70 L30,-70 L70,-30 L70,30 L30,70 L-30,70 L-70,30 Z"
                            className="fill-card stroke-border"
                            strokeWidth="3"
                        />
                        <text y="10" textAnchor="middle" className="fill-foreground tracking-tighter uppercase font-sans" fontSize="24" fontWeight="900" >TECH</text>
                    </motion.g>

                    {/* Category Hubs - Redesigned for High Contrast */}
                    {categories.map((cat, idx) => (
                        <motion.g
                            key={`cat-${cat.name}`}
                            onMouseEnter={() => setHoveredCategory(cat.name)}
                            onMouseLeave={() => setHoveredCategory(null)}
                            variants={{
                                hidden: { scale: 0.8, opacity: 0 },
                                visible: { scale: 1, opacity: 1, transition: { delay: 0.2 + idx * 0.05 } }
                            }}
                            className="cursor-pointer"
                        >
                            {/* Sharp double-border look */}
                            <rect
                                x={(cat.x * scaleFactor) - 70}
                                y={(cat.y * scaleFactor) - 35}
                                width="140"
                                height="70"
                                rx="12"
                                className="fill-card stroke-border"
                                strokeWidth="2"
                            />
                            <rect
                                x={(cat.x * scaleFactor) - 64}
                                y={(cat.y * scaleFactor) - 29}
                                width="128"
                                height="58"
                                rx="8"
                                fill="none"
                                stroke={cat.color}
                                strokeWidth="1"
                                className="opacity-40"
                            />
                            <text x={cat.x * scaleFactor} y={(cat.y * scaleFactor) + 6} textAnchor="middle" className="fill-foreground tracking-[0.1em] uppercase font-mono" fontSize="12" fontWeight="700">
                                {cat.name}
                            </text>
                        </motion.g>
                    ))}

                    {/* Skill Nodes */}
                    {skills.map((skill) => (
                        <SkillNode
                            key={skill.name}
                            skill={{ ...skill, x: skill.x * scaleFactor, y: skill.y * scaleFactor }}
                            isActive={hoveredSkill === skill.name}
                            onHover={(v) => setHoveredSkill(v ? skill.name : null)}
                        />
                    ))}
                </svg>
            </div>

            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/5 to-transparent" />
                <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/5 to-transparent" />
            </div>
        </motion.section>
    );
}
