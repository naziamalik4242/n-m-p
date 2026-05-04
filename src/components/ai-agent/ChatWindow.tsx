"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, Loader2 } from "lucide-react";

// Simple message type definition
type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function AIChatWindow({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // Library-independent States
  const [messages, setMessages] = React.useState<Message[]>([
    { id: "1", role: "assistant", content: "Salam! Main Nazia Malik ka AI assistant hoon. Main aapki kaise madad kar sakti hoon?" }
  ]);
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Auto-scroll logic
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.content || data.text || "Sorry, main abhi jawab nahi de pa rahi.",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Chat Error:", error);
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
        className="fixed bottom-24 right-6 w-[90vw] md:w-95 h-125 bg-zinc-950 border border-zinc-800 rounded-4xl shadow-2xl z-999 flex flex-col overflow-hidden backdrop-blur-xl"
      >
        {/* Header */}
        <div className="p-5 border-b border-zinc-800 bg-zinc-900/50 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
              <Bot size={18} className="text-white" />
            </div>
            <span className="text-xs font-bold text-white uppercase tracking-widest">Nazia AI</span>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition">
            <X size={20} />
          </button>
        </div>

        {/* Messages Body */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] p-3.5 rounded-[1.2rem] text-sm ${
                m.role === "user" ? "bg-white text-black rounded-tr-none" : "bg-zinc-900 text-zinc-300 border border-zinc-800 rounded-tl-none"
              }`}>
                {m.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-zinc-900 p-3 rounded-2xl animate-pulse">
                <Loader2 size={16} className="animate-spin text-zinc-500" />
              </div>
            </div>
          )}
        </div>

        {/* Input Form */}
        <form onSubmit={handleFormSubmit} className="p-4 border-t border-zinc-800">
          <div className="relative flex items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Sawal puchiye..."
              className="w-full h-11 pl-5 pr-12 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-zinc-500"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="absolute right-1.5 p-2 text-zinc-400 hover:text-white disabled:opacity-30"
            >
              <Send size={18} />
            </button>
          </div>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}