"use client";
import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"], color: "bg-white" },
  { category: "Backend", items: ["Node.js", "Prisma v6", "PostgreSQL", "APIs"], color: "bg-zinc-500" },
  { category: "Tools", items: ["Git", "Vercel", "n8n Automation", "Figma"], color: "bg-zinc-700" },
];

export default function Skills() {
  return (
    <section className="py-24 border-t border-zinc-900">
      <h2 className="text-3xl font-bold mb-12 italic">Technical Expertise</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {skills.map((skill, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            key={index}
            className="space-y-6"
          >
            <h3 className="text-zinc-500 text-sm tracking-widest uppercase">{skill.category}</h3>
            <div className="space-y-4">
              {skill.items.map((item) => (
                <div key={item} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                  <div className="h-px w-full bg-zinc-800">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5 }}
                      className={`h-full ${skill.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}