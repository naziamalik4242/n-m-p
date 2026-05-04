"use client";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (res.ok) {
      setStatus("Message Sent Successfully!");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("Error sending message.");
    }
    setLoading(false);
  };

  return (
    <section className="py-24 border-t border-zinc-900 grid md:grid-cols-2 gap-16">
      <div>
        <h2 className="text-4xl font-bold mb-6">Let's Build Something <br /> Great Together.</h2>
        <p className="text-zinc-400 mb-8">Available for new projects and collaborations.</p>
        <div className="space-y-4 text-sm text-zinc-300">
          <p>Email: naziamalik4242@gmail.com</p>
          <p>Location: Chiniot, Pakistan</p>
          <div className="flex gap-4 pt-4">
            <span className="hover:text-white cursor-pointer">LinkedIn</span>
            <span className="hover:text-white cursor-pointer">GitHub</span>
            <span className="hover:text-white cursor-pointer">Instagram</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" required className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-xl focus:outline-none focus:border-white transition" />
        <input name="email" type="email" placeholder="Email" required className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-xl focus:outline-none focus:border-white transition" />
        <textarea name="message" placeholder="Project Details" rows={5} required className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-xl focus:outline-none focus:border-white transition" />
        <button disabled={loading} className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition">
          {loading ? "Sending..." : "Send Message"}
        </button>
        {status && <p className="text-center text-sm mt-4 text-zinc-400">{status}</p>}
      </form>
    </section>
  );
}