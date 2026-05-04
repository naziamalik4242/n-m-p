"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // npm install lucide-react agar error de

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-100 transition-all duration-500 ${
      scrolled ? "bg-black/60 backdrop-blur-xl py-4 border-b border-white/5" : "bg-transparent py-8"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white group">
          NM<span className="text-zinc-500 group-hover:text-white transition-colors">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Resume Button */}
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-7 py-2.5 rounded-full text-[11px] font-bold tracking-widest hover:bg-zinc-200 transition-transform active:scale-95"
          >
            RESUME
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-110 flex flex-col items-center justify-center gap-8 md:hidden">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white">
            <X size={30} />
          </button>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold tracking-widest text-zinc-500 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="mt-4 bg-white text-black px-10 py-4 rounded-full font-bold"
          >
            RESUME
          </a>
        </div>
      )}
    </nav>
  );
}