"use client";
import { MapPin } from "lucide-react";

export default function Location() {
  return (
    <section className="py-12 border-t border-zinc-900 flex justify-center">
      <div className="group relative bg-zinc-900/50 border border-zinc-800 px-8 py-4 rounded-full flex items-center gap-3 hover:border-zinc-500 transition-all cursor-default">
        <div className="relative">
          <MapPin size={16} className="text-white" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping" />
        </div>
        <span className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-400 group-hover:text-white transition">
          Based in Punjab, Pakistan
        </span>
      </div>
    </section>
  );
}