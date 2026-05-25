import type { Metric } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";

const ACCENT_BAR: Record<Metric["accent"], string> = {
  green: "bg-accent-green",
  blue: "bg-brand",
  amber: "bg-accent-amber",
  neutral: "bg-ink-muted",
};

const TREND_COLOR: Record<Metric["trend"], string> = {
  up: "text-accent-green",
  down: "text-accent-red",
  neutral: "text-ink-secondary",
};

export function MetricCard({ metric }: { metric: Metric }) {
  const TrendIcon =
    metric.trend === "up"
      ? ArrowUpRight
      : metric.trend === "down"
        ? ArrowDownRight
        : Minus;

  return (
    <div className="relative overflow-hidden rounded-card border border-border-subtle bg-surface p-4 shadow-card">
      <span
        className={cn(
          "absolute inset-y-0 left-0 w-1 rounded-r-full",
          ACCENT_BAR[metric.accent]
        )}
      />
      <p className="text-[13px] text-ink-secondary">{metric.label}</p>
      <p className="mt-1.5 text-2xl font-semibold tracking-tight text-ink">
        {metric.value}
      </p>
      <span
        className={cn(
          "mt-1.5 inline-flex items-center gap-1 text-xs font-medium",
          TREND_COLOR[metric.trend]
        )}
      >
        <TrendIcon className="size-3.5" />
        {metric.hint}
      </span>
    </div>
  );
}
