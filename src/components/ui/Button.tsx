import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
}

export const Button = ({ className, variant = "primary", ...props }: ButtonProps) => {
  const variants = {
    primary: "bg-white text-black hover:bg-zinc-200",
    outline: "border border-zinc-800 text-white hover:bg-zinc-900",
    ghost: "text-zinc-400 hover:text-white bg-transparent",
  };

  return (
    <button
      className={cn(
        "px-6 py-2.5 rounded-full font-medium transition-all active:scale-95 text-sm",
        variants[variant],
        className
      )}
      {...props}
    />
  );
};