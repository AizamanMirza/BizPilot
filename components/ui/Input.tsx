import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-10 w-full rounded-xl border border-border-subtle bg-surface px-3.5 text-sm text-ink placeholder:text-ink-muted shadow-soft transition-colors focus:border-border-strong focus:outline-none focus:ring-2 focus:ring-ink/10",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
