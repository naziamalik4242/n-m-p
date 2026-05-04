"use client";
import React from "react";

export default function About() {
  return (
    <div className="space-y-6">
      {/* Heading */}
      <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
        Crafting Digital Excellence <br /> through Code & Design.
      </h2>

  {/* Main Paragraph */}
  <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
    I am a Full Stack Developer and AI student dedicated to building complex 
    web applications with a minimalist aesthetic. My focus lies in scalability 
    and user experience, ensuring every project delivers a premium and high-end feel.
  </p>

  {/* Secondary Paragraph */}
  <p className="text-zinc-500 text-base">
    When I’m not coding, I explore new AI workflows or design creative 
    social media content.
  </p>

  {/* Badges Section */}
  <div className="flex gap-4 mt-8">
    <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm">
      Frontend Expert
    </div>
    <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm">
      Backend Logic
    </div>
    <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm">
      AI Automation
    </div>
  </div>
</div>
  );
}