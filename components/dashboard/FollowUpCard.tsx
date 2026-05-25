import type { FollowUp } from "@/lib/mock-data";
import { Avatar } from "@/components/shared/Avatar";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Sparkles, Check } from "lucide-react";

const PRIORITY_TONE = {
  high: "red",
  medium: "amber",
  low: "neutral",
} as const;

export function FollowUpCard({ followUp }: { followUp: FollowUp }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-surface p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <Avatar name={followUp.name} size="md" />
        <div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-ink">{followUp.name}</p>
            <StatusBadge tone={PRIORITY_TONE[followUp.priority]}>
              {followUp.priority}
            </StatusBadge>
          </div>
          <p className="mt-0.5 text-sm text-ink-secondary">{followUp.reason}</p>
          <p className="mt-1 text-xs text-ink-muted">
            {followUp.due} · {followUp.channel}
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <Button size="sm" variant="secondary">
          <Sparkles className="size-3.5" />
          Draft reply
        </Button>
        <Button size="sm" variant="ghost">
          <Check className="size-3.5" />
          Done
        </Button>
      </div>
    </div>
  );
}
