"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";

// Brand SVG Icons
const Icons = {
    LinkedIn: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
        </svg>
    ),
    Instagram: (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
    ),
    WhatsApp: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    ),
    Gmail: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
    ),
    Outlook: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
        </svg>
    ),
    Discord: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.5328-9.748-3.5164-14.16a.061.061 0 00-.032-.0277zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
        </svg>
    ),
    GitHub: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    ),
    Resume: (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
    )
};

export function SocialConnectionHub() {
    const { t } = useTranslation();

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: Icons.LinkedIn,
            href: "https://www.linkedin.com/in/otuletta",
            color: "group-hover:text-[#0a66c2]",
            glow: "rgba(10,102,194,0.3)",
            bg: "bg-[#0a66c2]/10"
        },
        {
            name: "Instagram",
            icon: Icons.Instagram,
            href: "https://www.instagram.com/otuletta?igsh=MWV0bzVjamNpaG4yZA==",
            color: "group-hover:text-[#E1306C]",
            glow: "rgba(225,48,108,0.3)",
            bg: "bg-[#E1306C]/10"
        },
        {
            name: "WhatsApp",
            icon: Icons.WhatsApp,
            href: "https://wa.me/18093830664",
            color: "group-hover:text-[#25D366]",
            glow: "rgba(37,211,102,0.3)",
            bg: "bg-[#25D366]/10"
        },
        {
            name: "Gmail",
            icon: Icons.Gmail,
            href: "mailto:Otuletta@gmail.com",
            color: "group-hover:text-[#EA4335]",
            glow: "rgba(234,67,53,0.3)",
            bg: "bg-[#EA4335]/10"
        },
        {
            name: "Hotmail",
            icon: Icons.Outlook,
            href: "mailto:Otuletta@outlook.com",
            color: "group-hover:text-[#0078D4]",
            glow: "rgba(0,120,212,0.3)",
            bg: "bg-[#0078D4]/10"
        },
        {
            name: "Discord",
            icon: Icons.Discord,
            href: "https://discordapp.com/users/612406393252610130",
            color: "group-hover:text-[#5865F2]",
            glow: "rgba(88,101,242,0.3)",
            bg: "bg-[#5865F2]/10"
        },
        {
            name: "GitHub",
            icon: Icons.GitHub,
            href: "https://github.com/Otuletta",
            color: "group-hover:text-foreground",
            glow: "rgba(255,255,255,0.2)",
            bg: "bg-foreground/10"
        },
        {
            name: "CV",
            icon: Icons.Resume,
            href: (t("bento.cv_path") as string) || "/resumes/CV Otuletta EN.pdf",
            color: "group-hover:text-[#10B981]",
            glow: "rgba(16,185,129,0.3)",
            bg: "bg-[#10B981]/10"
        }
    ];

    return (
        <div className="w-full h-full flex items-center justify-center lg:px-4">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                    }
                }}
                className="grid grid-cols-4 gap-6 lg:gap-10"
            >
                {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20, scale: 0.8 },
                                visible: { opacity: 1, y: 0, scale: 1 }
                            }}
                            whileHover={{
                                y: -5,
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                            }}
                        >
                            <Link
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center justify-center p-1"
                                title={social.name}
                            >
                                {/* Sharp Border Highlight (Replaces Glow) */}
                                <div className={`
                                    absolute -inset-1 rounded-[1.8rem] lg:rounded-[2.3rem] 
                                    opacity-0 group-hover:opacity-100 transition-all duration-300
                                    blur-[2px] bg-gradient-to-br from-white/20 to-transparent
                                    group-hover:scale-105 pointer-events-none
                                `} />

                                {/* Main Container */}
                                <div className={`
                                    relative w-16 h-16 lg:w-20 lg:h-20 rounded-[1.5rem] lg:rounded-[2rem] flex items-center justify-center
                                    bg-card/60 border border-border/80 backdrop-blur-xl
                                    transition-[border-color,background-color,box-shadow,transform] duration-300 ease-out
                                    group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]
                                    overflow-hidden will-change-transform
                                `}
                                    style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                                >
                                    {/* Glass Highlight - Sharper */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent opacity-50" />

                                    {/* Brand Color Background - Solid/Sharper */}
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${social.bg}`} />

                                    {/* Icon */}
                                    <Icon className={`
                                        w-7 h-7 lg:w-9 lg:h-9 z-10 
                                        text-muted-foreground transition-all duration-300
                                        group-hover:scale-110 ${social.color}
                                    `} />

                                    {/* Shimmer Effect on Hover */}
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.7, ease: "easeInOut" }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] pointer-events-none"
                                    />
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
