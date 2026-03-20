"use client";

import { motion } from "framer-motion";
import { Github as GithubIcon, ExternalLink, GitFork, Star, Code2 } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";

export default function GitHub() {
    const greenTheme = {
        light: ['#e8f5e9', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
        dark: ['#142e1d', '#0e4429', '#006d32', '#26a641', '#39d353'],
    };

    return (
        <section id="github" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-left"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-text-primary flex items-center gap-3">
                        GitHub <GithubIcon className="w-10 h-10 text-text-primary" />
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative bg-card rounded-2xl border border-border overflow-hidden hover:border-accent/50 
                          transition-all duration-300 hover:shadow-xl hover:shadow-accent/5">
                        {/* Header Gradient */}
                        <div className="h-1.5 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 dark:from-gray-200 dark:via-gray-400 dark:to-gray-600" />

                        <div className="p-8 sm:p-10">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-10">
                                {/* Profile Info */}
                                <div className="text-center md:text-left flex-shrink-0 flex flex-col items-center md:items-start gap-4">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-blue-400 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-accent/20">
                                        SS
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-text-primary mb-1">Sw-apnil</h3>
                                        <p className="text-lg text-text-secondary font-medium">Full-Stack Developer</p>
                                    </div>
                                </div>
                                
                                {/* Contribution Graph (Heatmap) */}
                                <div className="w-full overflow-hidden overflow-x-auto flex flex-col items-center md:items-end justify-center md:justify-end">
                                    <GitHubCalendar 
                                        username="Sw-apnil" 
                                        theme={greenTheme}
                                        colorScheme="dark"
                                        labels={{
                                            totalCount: '{{count}} contributions in the last half year',
                                        }}
                                        blockSize={12}
                                        blockMargin={4}
                                        fontSize={12}
                                    />
                                </div>
                            </div>

                            {/* Quick stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                <div className="text-center p-4 bg-background rounded-xl border border-border">
                                    <Code2 className="w-6 h-6 text-accent mx-auto mb-2" />
                                    <p className="text-2xl font-bold text-text-primary">10+</p>
                                    <p className="text-xs text-text-secondary mt-1">Repositories</p>
                                </div>
                                <div className="text-center p-4 bg-background rounded-xl border border-border">
                                    <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                                    <p className="text-2xl font-bold text-text-primary">20+</p>
                                    <p className="text-xs text-text-secondary mt-1">Stars Earned</p>
                                </div>
                                <div className="text-center p-4 bg-background rounded-xl border border-border">
                                    <GitFork className="w-6 h-6 text-green-500 mx-auto mb-2" />
                                    <p className="text-2xl font-bold text-text-primary">500+</p>
                                    <p className="text-xs text-text-secondary mt-1">Contributions</p>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="text-center md:text-left">
                                <a
                                    href="https://github.com/Sw-apnil"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold 
                                     rounded-xl hover:bg-accent-hover transition-all duration-300 hover:shadow-lg 
                                     hover:shadow-accent/25 hover:-translate-y-0.5"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    View GitHub Profile
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
