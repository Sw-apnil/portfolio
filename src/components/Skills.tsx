"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Layout,
    Server,
    Database,
    Wrench,
} from "lucide-react";

/* ── devicon CDN logos for each skill ── */
const skillIcons: Record<string, string> = {
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    "C": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "Shadcn/UI": "https://avatars.githubusercontent.com/u/139895814?s=48&v=4",
    "Zustand": "",
    "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    "Socket.IO": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
    "REST APIs": "",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "Mongoose": "",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "Prisma": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    "Render": "",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
};

const categories = [
    {
        title: "Languages",
        icon: Code2,
        color: "from-violet-500 to-purple-600",
        skills: ["TypeScript", "JavaScript", "Python", "C++", "C", "SQL", "HTML", "CSS"],
    },
    {
        title: "Frontend",
        icon: Layout,
        color: "from-blue-500 to-cyan-500",
        skills: ["React", "Next.js", "Tailwind CSS", "Shadcn/UI", "Zustand", "Redux"],
    },
    {
        title: "Backend",
        icon: Server,
        color: "from-green-500 to-emerald-500",
        skills: ["Node.js", "Express.js", "Socket.IO", "REST APIs"],
    },
    {
        title: "Databases",
        icon: Database,
        color: "from-orange-500 to-amber-500",
        skills: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma", "Redis"],
    },
    {
        title: "Tools & Cloud",
        icon: Wrench,
        color: "from-rose-500 to-pink-500",
        skills: ["Git", "Postman", "AWS", "Vercel", "Render", "Docker"],
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

function SkillPill({ name, index }: { name: string; index: number }) {
    const icon = skillIcons[name];
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -3 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium 
                       text-text-primary bg-background rounded-full border border-border
                       hover:border-accent/40 hover:bg-accent/5 hover:shadow-md hover:shadow-accent/10
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

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header — left aligned */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
                        Skills & Technologies
                    </h2>
                </motion.div>

                {/* Category Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {categories.map((category) => (
                        <motion.div
                            key={category.title}
                            variants={cardVariant}
                            className="group bg-card rounded-2xl border border-border p-6 hover:border-accent/30 
                                       hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                                    <category.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-text-primary text-lg">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <SkillPill key={skill} name={skill} index={i} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
