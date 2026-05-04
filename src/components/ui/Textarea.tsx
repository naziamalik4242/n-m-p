import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          // Base styles for luxury aesthetic
          "flex min-h-30 w-full rounded-2xl border border-zinc-800 bg-zinc-950/50 px-4 py-4 text-sm text-zinc-200 ring-offset-background",
          // Focus and Interaction styles
          "placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 focus-visible:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300",
          // Custom scrollbar for the textarea
          "scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };