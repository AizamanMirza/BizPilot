import { PageHeader } from "@/components/shared/PageHeader";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { ContentCard } from "@/components/dashboard/ContentCard";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { CONTENT } from "@/lib/mock-data";
import { Sparkles, Plus, CalendarRange } from "lucide-react";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const STATS = [
  { label: "Scheduled", value: "16" },
  { label: "Drafts", value: "4" },
  { label: "Ideas", value: "9" },
  { label: "Posted this week", value: "11" },
];

export default function ContentPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Content Planner"
        description="Your week of content, planned and ready to schedule."
        actions={
          <>
            <Button variant="secondary">
              <Plus className="size-4" />
              New post
            </Button>
            <Button>
              <Sparkles className="size-4" />
              Generate week
            </Button>
          </>
        }
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-card border border-border-subtle bg-surface p-4 shadow-card"
          >
            <p className="text-[13px] text-ink-secondary">{s.label}</p>
            <p className="mt-1 text-2xl font-semibold text-ink">{s.value}</p>
          </div>
        ))}
      </div>

      <DashboardCard
        title="This week"
        description="Mon 26 May – Sun 1 Jun"
        action={
          <span className="inline-flex items-center gap-1.5 text-sm text-ink-secondary">
            <CalendarRange className="size-4" />
            Week view
          </span>
        }
        bodyClassName="overflow-x-auto"
      >
        <div className="flex gap-3 lg:grid lg:grid-cols-7">
          {DAYS.map((day) => {
            const items = CONTENT.filter((c) => c.day === day);
            return (
              <div
                key={day}
                className="flex w-56 shrink-0 flex-col gap-2.5 lg:w-auto"
              >
                <div className="flex items-center justify-between px-1">
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    {day}
                  </span>
                  {items.length > 0 && (
                    <StatusBadge tone="blue">{items.length}</StatusBadge>
                  )}
                </div>
                <div className="min-h-24 space-y-2 rounded-2xl border border-dashed border-border-subtle bg-canvas/40 p-2">
                  {items.length === 0 ? (
                    <button className="flex h-20 w-full flex-col items-center justify-center gap-1 rounded-xl text-ink-muted transition-colors hover:bg-surface-muted">
                      <Plus className="size-4" />
                      <span className="text-[11px]">Add</span>
                    </button>
                  ) : (
                    items.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-xl border border-border-subtle bg-surface p-2.5 shadow-soft"
                      >
                        <p className="text-xs font-medium leading-snug text-ink">
                          {item.title}
                        </p>
                        <div className="mt-1.5 flex items-center justify-between">
                          <span className="text-[10px] text-ink-muted">
                            {item.format}
                          </span>
                          <StatusBadge tone="neutral">{item.status}</StatusBadge>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </DashboardCard>

      <DashboardCard
        title="All planned content"
        bodyClassName="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {CONTENT.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </DashboardCard>
    </div>
  );
}
