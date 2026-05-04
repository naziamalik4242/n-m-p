"use client";
import { motion } from 'framer-motion';
import { ExternalLink, } from 'lucide-react';

const projects = [
  {
    title: "Elite Nursing College",
    description: "A high-end educational portal with student management and cinematic UI.",
    tech: ["Next.js", "Tailwind", "Prisma"],
    link: "#",
    github: "#"
  },
  {
    title: "Stellar Clothing",
    description: "Premium e-commerce experience for a luxury fashion brand.",
    tech: ["Next.js", "Stripe", "Neon DB"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section className="py-24 border-t border-zinc-900">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl font-bold italic">Selected Work</h2>
        <p className="text-zinc-500 text-sm italic">2025 — 2026</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="group relative bg-zinc-900/30 border border-zinc-800 p-8 rounded-3xl hover:bg-zinc-900/50 transition-all"
          >
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{project.description}</p>
            <div className="flex gap-3 mb-8 flex-wrap">
              {project.tech.map(t => (
                <span key={t} className="text-[10px] uppercase tracking-widest border border-zinc-700 px-3 py-1 rounded-full text-zinc-500">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-6">
              <a href={project.link} className="flex items-center gap-2 text-xs font-bold hover:text-zinc-400 transition">
                <ExternalLink size={14} /> LIVE DEMO
              </a>
              <a href={project.github} className="flex items-center gap-2 text-xs font-bold hover:text-zinc-400 transition">
                <ExternalLink size={14} /> SOURCE
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}