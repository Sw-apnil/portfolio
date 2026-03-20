"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const educationData = [
    {
        degree: "Bachelor of Technology in Electronics Engineering",
        institution: "Indian Institute of Information Technology Ranchi",
        period: "2023 - 2027",
        location: "Ranchi, Jharkhand, India",
        description: "Pursuing B.Tech in Electronics Engineering with focus on software development, data structures, and system-level fundamentals.",
        achievements: [
            "CGPA: 8.26/10",
            "College Hackathon Winner",
            "9 SGPA in 3rd Semester"
        ],
        subjects: [
            { name: "DSA", icon: "💻" },
            { name: "OS", icon: "⚙️" },
            { name: "DBMS", icon: "🗄️" },
            { name: "CN", icon: "🌐" },
            { name: "OOPs", icon: "🧩" },
            { name: "System Design Basics", icon: "📐" },
            { name: "Digital Electronics", icon: "🔌" },
            { name: "Signals & Systems", icon: "📡" },
            { name: "Microprocessors", icon: "🖲️" },
        ]
    },
    {
        degree: "Higher Secondary Education (12th)",
        institution: "Oxford Public School, Ranchi",
        period: "2020 - 2022",
        location: "Ranchi, Jharkhand, India",
        description: "Completed higher secondary education with strong academic performance in science and competitive exams.",
        achievements: [
            "97% in 12th Boards — School Topper (PCM)",
            "92% in 10th Boards — School Topper",
            "JEE Mains: 95 Percentile",
            "Physics: 99 Marks"
        ],
        subjects: [
            { name: "Physics", icon: "⚛️" },
            { name: "Chemistry", icon: "🧪" },
            { name: "Mathematics", icon: "📐" },
            { name: "Computer Science", icon: "💻" },
        ]
    }
];

export default function Education() {
    return (
        <section id="education" className="py-24 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    className="mb-12 text-left"
                >
                    <p className="text-xs font-bold tracking-widest text-text-secondary uppercase mb-3 ml-1">Learning Journey</p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-8">Education</h2>
                    <div className="inline-flex items-center gap-3">
                        <GraduationCap className="w-6 h-6 text-text-primary" />
                        <span className="text-xl font-bold text-text-primary">Academic Background</span>
                    </div>
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-8">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.degree}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            className="group bg-card rounded-3xl border border-border p-6 sm:p-10 hover:border-accent/40 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors">{edu.degree}</h3>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-text-secondary whitespace-nowrap px-4 py-1.5 bg-background rounded-full border border-border shadow-sm">
                                    <Calendar className="w-4 h-4" />
                                    {edu.period}
                                </div>
                            </div>
                            
                            <p className="text-lg font-medium text-text-primary mb-1">{edu.institution}</p>
                            <p className="text-sm text-text-secondary mb-6">{edu.location}</p>
                            
                            <p className="text-sm text-text-secondary leading-relaxed mb-8 max-w-3xl">
                                {edu.description}
                            </p>

                            <div className="mb-8">
                                <p className="text-[15px] font-semibold text-text-primary mb-4">Key Achievements:</p>
                                <ul className="space-y-3">
                                    {edu.achievements.map((ach, i) => (
                                        <motion.li 
                                            key={i} 
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-3 text-sm font-medium text-text-secondary group-hover:text-text-primary/90 transition-colors"
                                        >
                                            <Award className="w-4 h-4 text-text-secondary/70 group-hover:text-accent transition-colors" />
                                            {ach}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 pt-6 border-t border-border/50">
                                <div className="flex flex-wrap items-center gap-3">
                                    {edu.subjects.map((sub, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: 0.2 + (i * 0.05) }}
                                            viewport={{ once: true }}
                                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-background rounded-lg border border-border 
                                             text-xs font-semibold text-text-primary hover:border-accent/40 shadow-sm transition-all duration-300 cursor-default"
                                        >
                                            <span className="text-base leading-none">{sub.icon}</span>
                                            {sub.name}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
