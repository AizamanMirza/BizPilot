import { cn } from "@/lib/utils";
import { APP_NAME, APP_TAGLINE } from "@/lib/constants";

export function LogoMark({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "flex size-8 items-center justify-center rounded-[10px]",
        light ? "bg-white/20 text-white ring-1 ring-white/30" : "bg-brand text-white",
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="size-4.5"
        aria-hidden="true"
      >
        <path
          d="M6 6 18 18M18 6 6 18"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function Logo({
  withTagline = false,
  light = false,
  className,
}: {
  withTagline?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark light={light} />
      <div className="leading-none">
        <span
          className={cn(
            "block text-[15px] font-semibold tracking-tight",
            light ? "text-white" : "text-ink"
          )}
        >
          {APP_NAME}
        </span>
        {withTagline && (
          <span
            className={cn(
              "mt-0.5 block text-[11px] font-medium",
              light ? "text-white/70" : "text-ink-muted"
            )}
          >
            {APP_TAGLINE}
          </span>
        )}
      </div>
    </div>
  );
}
