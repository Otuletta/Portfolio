"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar, Github, Linkedin } from "lucide-react";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";
import { useTranslation } from "@/hooks/use-translation";

export function ContactCTA() {
    const { t, language } = useTranslation();

    return (
        <section className="relative overflow-hidden bg-background px-6 py-20 md:py-40 transition-colors">

            <div className="relative mx-auto max-w-4xl text-center">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mt-4 font-sans text-4xl font-bold text-foreground md:text-6xl lg:text-7xl">
                        {t("contact.title")}
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                        {t("contact.description")}
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-8 md:mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 px-4"
                >
                    <MagneticWrapper strength={0.3}>
                        <button
                            data-cal-link="otuletta/15min"
                            data-cal-config={`{"layout":"month_view","language":"${(language || "en").toLowerCase()}"}`}
                            aria-label="Schedule a call with Oscar Tuletta"
                            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-slate-900 border border-border/50 dark:bg-primary dark:border-none px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/40 cursor-pointer"
                        >
                            <Calendar className="h-5 w-5" />
                            <span className="relative z-10">{t("contact.primary_cta")}</span>
                            <motion.span
                                className="relative z-10"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowRight className="h-5 w-5" />
                            </motion.span>

                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                                <motion.div
                                    className="h-full w-full"
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            </div>
                        </button>
                    </MagneticWrapper>

                    {/* Email Group */}
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        {/* Gmail CTA */}
                        <MagneticWrapper strength={0.2}>
                            <a
                                href="mailto:OTuletta@gmail.com"
                                aria-label="Send email to OTuletta@gmail.com"
                                className="group inline-flex flex-1 items-center justify-center gap-3 rounded-full border border-border bg-muted/30 px-6 py-4 text-base font-medium text-foreground transition-all hover:border-blue-500/30 hover:bg-muted"
                            >
                                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-blue-500" />
                                <span>{t("contact.gmail_label")}</span>
                            </a>
                        </MagneticWrapper>

                        {/* Outlook CTA */}
                        <MagneticWrapper strength={0.2}>
                            <a
                                href="mailto:OscarTuletta@outlook.com"
                                aria-label="Send email to OscarTuletta@outlook.com"
                                className="group inline-flex flex-1 items-center justify-center gap-3 rounded-full border border-border bg-muted/30 px-6 py-4 text-base font-medium text-foreground transition-all hover:border-slate-500/30 hover:bg-muted"
                            >
                                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-slate-400 dark:group-hover:text-slate-300" />
                                <span>{t("contact.outlook_label")}</span>
                            </a>
                        </MagneticWrapper>
                    </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16"
                >
                    <p className="mb-6 font-mono text-sm text-muted-foreground/60">
                        {t("contact.or_connect")}
                    </p>
                    <div className="flex items-center justify-center gap-6">
                        <a
                            href="https://github.com/Otuletta"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Oscar Tuletta's GitHub profile"
                            className="group"
                        >
                            <div className="rounded-full border border-border bg-muted/50 p-4 transition-all hover:border-blue-500/30 dark:hover:border-primary/30 hover:bg-blue-500/5 dark:hover:bg-primary/5 hover:scale-110">
                                <Github className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-blue-600 dark:group-hover:text-primary" />
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/otuletta"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Oscar Tuletta's LinkedIn profile"
                            className="group"
                        >
                            <div className="rounded-full border border-border bg-muted/50 p-4 transition-all hover:border-blue-500/30 dark:hover:border-primary/30 hover:bg-blue-500/5 dark:hover:bg-primary/5 hover:scale-110">
                                <Linkedin className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-blue-600 dark:group-hover:text-primary" />
                            </div>
                        </a>
                        <a
                            href="mailto:OTuletta@gmail.com"
                            aria-label="Send email to Oscar Tuletta"
                            className="group"
                        >
                            <div className="rounded-full border border-border bg-muted/50 p-4 transition-all hover:border-blue-500/30 dark:hover:border-primary/30 hover:bg-blue-500/5 dark:hover:bg-primary/5 hover:scale-110">
                                <Mail className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-blue-600 dark:group-hover:text-primary" />
                            </div>
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
