"use client";
import { motion } from "framer-motion";

export const ProjectCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative overflow-hidden rounded-3xl bg-zinc-900/30 border border-zinc-800/50 p-6 backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-linear-to-br from-white/2 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};