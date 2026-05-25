import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "subtle" | "danger" | "white";
type Size = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-deep border border-transparent shadow-soft",
  secondary:
    "bg-surface text-ink border border-border-subtle hover:bg-surface-muted shadow-soft",
  ghost: "bg-transparent text-ink-secondary hover:bg-surface-muted",
  subtle: "bg-surface-muted text-ink hover:bg-border-subtle border border-transparent",
  danger: "bg-accent-red text-white hover:bg-accent-red/90 border border-transparent",
  white: "bg-white text-ink hover:bg-white/90 border border-transparent shadow-soft",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-[13px] gap-1.5 rounded-lg",
  md: "h-10 px-4 text-sm gap-2 rounded-xl",
  lg: "h-12 px-6 text-[15px] gap-2 rounded-xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/15 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
