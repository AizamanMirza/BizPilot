import type { Lead } from "@/lib/mock-data";
import { Avatar } from "@/components/shared/Avatar";
import { StatusBadge, leadStatusTone } from "@/components/ui/StatusBadge";
import { formatRM } from "@/lib/utils";
import { MessageSquare } from "lucide-react";

export function LeadCard({
  lead,
  compact = false,
}: {
  lead: Lead;
  compact?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-border-subtle bg-surface p-3.5 shadow-soft transition-shadow hover:shadow-card">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <Avatar name={lead.name} size="sm" />
          <div>
            <p className="text-sm font-medium text-ink">{lead.name}</p>
            <p className="text-xs text-ink-muted">{lead.interest}</p>
          </div>
        </div>
        <span className="text-sm font-semibold text-ink">
          {formatRM(lead.value)}
        </span>
      </div>

      {!compact && (
        <div className="mt-3 flex items-center justify-between">
          <StatusBadge tone={leadStatusTone(lead.status)} dot>
            {lead.status}
          </StatusBadge>
          <span className="inline-flex items-center gap-1 text-xs text-ink-muted">
            <MessageSquare className="size-3" />
            {lead.channel}
          </span>
        </div>
      )}
    </div>
  );
}
