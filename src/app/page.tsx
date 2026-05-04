"use client";

import * as React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// Section Imports
// Ensure karein ke in files ke names 'About.tsx', 'Hero.tsx' wagaira hain
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Location from "@/components/sections/Location";
import Contact from "@/components/sections/Contact";

// AI Agent Imports
import AIChatWrapper from "@/components/ai-agent/AIChatWrapper";

export default function Home() {
  // Smooth scroll progress bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative bg-black min-h-screen overflow-x-hidden">
      {/* Scroll Progress Bar (Top) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white z-1000 origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <Projects />
      </section>

      {/* Location Section */}
      <section id="location" className="py-20">
        <Location />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <Contact />
      </section>

      {/* AI Chat Floating UI */}
      <AIChatWrapper isOpen={false} onClose={function (): void {
        throw new Error("Function not implemented.");
      } } />

      {/* Footer (Optional) */}
      <footer className="py-10 border-t border-zinc-900 text-center">
        <p className="text-zinc-600 text-xs tracking-widest uppercase">
          © 2026 Nazia Malik • Crafted with Precision
        </p>
      </footer>
    </main>
  );
}