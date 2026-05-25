"use client";

import { cn } from "@/lib/utils";

export type TabOption = {
  id: string;
  label: string;
};

export function Tabs({
  tabs,
  active,
  onChange,
  className,
}: {
  tabs: TabOption[];
  active: string;
  onChange: (id: string) => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-xl border border-border-subtle bg-surface-muted p-1",
        className
      )}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            "rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors",
            active === tab.id
              ? "bg-surface text-ink shadow-soft"
              : "text-ink-secondary hover:text-ink"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
