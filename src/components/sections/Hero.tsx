"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  // Smooth Scroll Function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-zinc-500/10 blur-[120px] rounded-full -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {/* Subtle Sub-heading */}
        <span className="text-zinc-500 text-xs md:text-sm uppercase tracking-[0.4em] font-medium mb-6 block">
          Full Stack Web Developer
        </span>

        {/* Main Name Heading */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
          Nazia Malik<span className="text-zinc-600">.</span>
        </h1>

        {/* Description (Professional English) */}
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          Crafting high-end digital experiences with precision, 
          minimalist design, and advanced AI integration.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={() => scrollToSection("contact")}
            className="group relative px-8 py-4 bg-white text-black rounded-full font-bold transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            Hire Me
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 bg-transparent border border-zinc-800 text-white rounded-full font-bold hover:bg-zinc-900 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            View Work
          </button>
        </div>
      </motion.div>

      {/* Floating Logo/Icon at bottom (Optional based on your image) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-10 hidden md:block"
      >
        <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 font-bold text-xl">
          N
        </div>
      </motion.div>
    </section>
  );
}