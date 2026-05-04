export default function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-900 text-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-500 text-xs">
          © 2026 Nazia Malik. Built with Next.js & Gemini AI.
        </p>
        <div className="flex gap-6 text-xs text-zinc-400">
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
          <a href="#" className="hover:text-white transition">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}