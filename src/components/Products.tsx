"use client";

import { motion } from "framer-motion";
import { Globe, ArrowUpRight } from "lucide-react";

/* ── tech icon map using devicon CDN & Icons8 ── */
const techIcons: Record<string, string> = {
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "Next.js 15": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "Supabase": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    "Razorpay": "https://img.icons8.com/color/48/razorpay.png",
    "Groq API": "https://img.icons8.com/fluency/48/cpu.png",
    "Buffer API": "https://img.icons8.com/color/48/stack.png",
};

const products = [
    {
        title: "RankWise",
        tagline: "JEE College Counselling Tool",
        description: "Built and launched a live product during JoSAA counselling season. Helps JEE students find the right college using cutoff data and real student insights. Solo built — product, tech, and distribution all handled independently. Currently live with real users and a paying customer.",
        badge: "Live Product",
        tech: ["Next.js", "Razorpay", "Vercel"],
        url: "https://rank-wise-zeta.vercel.app",
    },
    {
        title: "Football Intelligence Platform",
        tagline: "AI-Powered Football Media Automation",
        description: "Built a production-grade automation platform that aggregates football data from multiple sources, scores relevance, removes duplicates, generates AI content using Groq, and auto-publishes via Buffer. Fully self-hosted, currently running in production for real football content pipelines.",
        badge: "Production Deployed",
        tech: ["Next.js 15", "TypeScript", "Supabase", "Groq API", "Buffer API", "Vercel"],
        url: "https://automation-swap-phi.vercel.app",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function TechPill({ name, index }: { name: string; index: number }) {
    const icon = techIcons[name];
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold 
                 text-accent bg-accent/10 rounded-full border border-accent/20
                 hover:bg-accent/20 hover:border-accent/40 hover:shadow-md hover:shadow-accent/10
                 transition-colors duration-200 cursor-default"
        >
            {icon && (
                <img
                    src={icon}
                    alt={name}
                    width={14}
                    height={14}
                    className="flex-shrink-0"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
            )}
            {name}
        </motion.span>
    );
}

export default function Products() {
    return (
        <section id="products" className="py-20 px-4 sm:px-6 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
                        Shipped Products
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
                        Products
                    </h2>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.title}
                            variants={cardVariant}
                            className="group relative flex flex-col justify-between bg-card rounded-2xl border border-border p-6 sm:p-8
                         hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 
                         transition-all duration-300"
                        >
                            <div>
                                {/* Top Badges & Link Row */}
                                <div className="flex items-center justify-between gap-3 mb-6">
                                    {/* Green Status Badge */}
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                        <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                                            {product.badge}
                                        </span>
                                    </div>

                                    {/* Visit Product Button */}
                                    <a
                                        href={product.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 
                                     text-white text-xs font-bold rounded-xl shadow-lg shadow-violet-500/20 hover:shadow-xl 
                                     hover:shadow-violet-500/35 hover:from-violet-500 hover:to-indigo-500 hover:-translate-y-0.5 
                                     active:translate-y-0 active:scale-98 transition-all duration-300 group/link"
                                        aria-label={`Visit ${product.title} live`}
                                    >
                                        <span>check this out</span>
                                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                    </a>
                                </div>

                                {/* Title & Tagline */}
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-sm font-semibold text-accent/80 mt-1">
                                        {product.tagline}
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-8">
                                    {product.description}
                                </p>
                            </div>

                            {/* Tech Stack Footer */}
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                                {product.tech.map((tech, index) => (
                                    <TechPill key={tech} name={tech} index={index} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
