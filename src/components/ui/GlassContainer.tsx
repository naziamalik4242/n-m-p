import { cn } from "@/lib/utils";

export const GlassContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn(
      "bg-zinc-950/20 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 shadow-2xl",
      className
    )}>
      {children}
    </div>
  );
};