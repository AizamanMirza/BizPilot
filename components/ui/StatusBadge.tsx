import { cn } from "@/lib/utils";

type Tone = "green" | "blue" | "amber" | "red" | "neutral";

const tones: Record<Tone, string> = {
  green: "bg-accent-green-soft text-accent-green",
  blue: "bg-brand-soft text-brand",
  amber: "bg-accent-amber-soft text-accent-amber",
  red: "bg-accent-red-soft text-accent-red",
  neutral: "bg-surface-muted text-ink-secondary",
};

export function StatusBadge({
  children,
  tone = "neutral",
  className,
  dot = false,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {dot && (
        <span className="size-1.5 rounded-full bg-current opacity-80" />
      )}
      {children}
    </span>
  );
}

const STATUS_TONE: Record<string, Tone> = {
  "New Lead": "blue",
  Contacted: "neutral",
  Interested: "green",
  "Follow-up Needed": "amber",
  Closed: "green",
  Scheduled: "blue",
  Draft: "neutral",
  Posted: "green",
  Idea: "amber",
  Paid: "green",
  Pending: "amber",
};

export function leadStatusTone(status: string): Tone {
  return STATUS_TONE[status] ?? "neutral";
}
