"use client";
import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  message: string | null;
  type: "success" | "error" | null;
}

export const Toast = ({ message, type }: ToastProps) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-100"
        >
          <div className={`px-6 py-3 rounded-full shadow-2xl backdrop-blur-xl border flex items-center gap-3 ${
            type === "success" 
            ? "bg-white/10 border-white/20 text-white" 
            : "bg-red-500/10 border-red-500/20 text-red-400"
          }`}>
            <div className={`w-2 h-2 rounded-full ${type === "success" ? "bg-green-500" : "bg-red-500"}`} />
            <span className="text-sm font-medium tracking-tight">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};