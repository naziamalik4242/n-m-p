"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, Loader2 } from "lucide-react";

export default function AIChatWindow({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // Manual States taaky useChat wala koi error na aaye
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "assistant", content: "Salam! Main Nazia ka AI assistant hoon. Main aapki kaise madad kar sakti hoon?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto Scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();
      // Yahan hum result set karein gy (Assuming API returns { role, content })
      setMessages((prev) => [...prev, { role: "assistant", content: data.content || "Sorry, I couldn't process that." }]);
    } catch (err) {
      console.error("Chat Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-24 right-6 w-87.5 h-125 bg-zinc-950 border border-zinc-800 rounded-3xl z-999 flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/50">
          <div className="flex items-center gap-2 text-white">
            <Bot size={20} />
            <span className="font-bold text-sm">Nazia AI</span>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white"><X size={20} /></button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                m.role === 'user' ? 'bg-white text-black' : 'bg-zinc-900 text-zinc-300'
              }`}>
                {m.content}
              </div>
            </div>
          ))}
          {isLoading && <Loader2 className="animate-spin text-zinc-500 mx-auto" size={20} />}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-zinc-800">
          <div className="relative">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-full px-4 py-2 text-sm focus:outline-none"
            />
            <button type="submit" disabled={isLoading} className="absolute right-2 top-1.5 text-zinc-400">
              <Send size={18} />
            </button>
          </div>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}