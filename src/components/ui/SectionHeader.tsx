import { motion } from "framer-motion";

export const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => {
  return (
    <div className="mb-16">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-zinc-500 text-[10px] uppercase tracking-[0.4em] font-bold block mb-4"
      >
        {subtitle || "Navigation"}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold tracking-tighter"
      >
        {title}
      </motion.h2>
    </div>
  );
};