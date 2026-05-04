import { cn } from "@/lib/utils";

export const Badge = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span className={cn(
      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-zinc-800 bg-zinc-950 text-zinc-500 hover:text-white hover:border-zinc-600 transition-colors cursor-default",
      className
    )}>
      {text}
    </span>
  );
};