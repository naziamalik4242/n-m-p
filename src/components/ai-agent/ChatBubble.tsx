"use client";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

interface ChatBubbleProps {
  onClick: () => void;
}

export default function ChatBubble({ onClick }: ChatBubbleProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 p-4 bg-white text-black rounded-full shadow-2xl z-50 flex items-center justify-center border border-zinc-200"
    >
      <MessageSquare size={24} />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />
    </motion.button>
  );
}