"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  // Aapka WhatsApp Number (Country code ke sath, bina '+' sign ke)
  const phoneNumber = "+923217690158"; // Yahan apna sahi number likhein
  const message = "Hi Nazia, I saw your portfolio and I'm interested in your services!";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 right-6 z-45 p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-[#25D366]/50 transition-shadow duration-300 flex items-center justify-center group"
    >
      {/* Tooltip jo hover par nazar aaye ga */}
      <span className="absolute right-16 bg-zinc-900 text-white text-[10px] px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-zinc-800">
        Chat on WhatsApp
      </span>
      <MessageCircle size={24} fill="currentColor" />
    </motion.a>
  );
}
