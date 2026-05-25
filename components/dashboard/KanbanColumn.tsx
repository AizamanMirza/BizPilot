import type { Lead } from "@/lib/mock-data";
import { LeadCard } from "@/components/dashboard/LeadCard";
import { formatRM } from "@/lib/utils";

export function KanbanColumn({
  title,
  leads,
}: {
  title: string;
  leads: Lead[];
}) {
  const total = leads.reduce((sum, l) => sum + l.value, 0);
  return (
    <div className="flex w-72 shrink-0 flex-col rounded-card border border-border-subtle bg-canvas/50 lg:w-auto">
      <header className="flex items-center justify-between px-3.5 py-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-ink">{title}</span>
          <span className="flex size-5 items-center justify-center rounded-md bg-surface text-[11px] font-medium text-ink-secondary">
            {leads.length}
          </span>
        </div>
        {total > 0 && (
          <span className="text-xs text-ink-muted">{formatRM(total)}</span>
        )}
      </header>
      <div className="flex-1 space-y-2.5 px-2.5 pb-3">
        {leads.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border-subtle px-3 py-6 text-center text-xs text-ink-muted">
            No leads
          </div>
        ) : (
          leads.map((lead) => (
            <LeadCard key={lead.id} lead={lead} compact />
          ))
        )}
      </div>
    </div>
  );
}
