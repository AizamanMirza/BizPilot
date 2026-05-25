"use client";

import { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { Drawer } from "@/components/ui/Drawer";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Textarea";
import { Avatar } from "@/components/shared/Avatar";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { FOLLOW_UPS, type FollowUp } from "@/lib/mock-data";
import { Sparkles, Check, Send, MessageSquare } from "lucide-react";

const PRIORITY_TONE = { high: "red", medium: "amber", low: "neutral" } as const;

const DRAFTS: Record<string, string> = {
  Sarah:
    "Hi Sarah! Just following up on the hair treatment you asked about 😊 It’s RM120 and takes about 45 minutes. I have Thu 3pm or Sat 11am open — want me to hold one for you?",
  Nisha:
    "Hi Nisha! Thanks for your interest in our beauty package. It’s RM180 and includes a full session. We’re running a small loyalty perk this month too — shall I share the details and book you in?",
  Faris:
    "Hey Faris! It’s been about a month since your last cut — you’re probably due for a clean-up ✂️ Want me to slot you in this weekend before we fill up?",
  Hakim:
    "Hi Hakim! Thank you so much for the 5-star review 🙏 As a regular, your next visit comes with a small loyalty perk on us. Drop by anytime — just show this message.",
};

export default function FollowUpsPage() {
  const [selected, setSelected] = useState<FollowUp | null>(null);

  const dueToday = FOLLOW_UPS.filter((f) => f.due === "Due today");
  const later = FOLLOW_UPS.filter((f) => f.due !== "Due today");

  function Row({ followUp }: { followUp: FollowUp }) {
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
            <p className="mt-0.5 text-sm text-ink-secondary">
              {followUp.reason}
            </p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-ink-muted">
              <MessageSquare className="size-3" />
              {followUp.due} · {followUp.channel}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Button size="sm" variant="secondary" onClick={() => setSelected(followUp)}>
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

  return (
    <div className="space-y-6">
      <PageHeader
        title="Follow-ups"
        description="Customers who need a nudge — with replies drafted for you."
        actions={
          <Button>
            <Sparkles className="size-4" />
            Draft all
          </Button>
        }
      />

      <DashboardCard
        title="Due today"
        description={`${dueToday.length} need a reply now`}
        bodyClassName="space-y-3"
      >
        {dueToday.map((f) => (
          <Row key={f.id} followUp={f} />
        ))}
      </DashboardCard>

      <DashboardCard
        title="Coming up"
        description="Stay ahead of these"
        bodyClassName="space-y-3"
      >
        {later.map((f) => (
          <Row key={f.id} followUp={f} />
        ))}
      </DashboardCard>

      <Drawer
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected ? `Reply to ${selected.name}` : "Reply"}
        description={selected?.channel}
        footer={
          <div className="flex items-center justify-between gap-3">
            <Button variant="ghost" onClick={() => setSelected(null)}>
              Cancel
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="secondary">
                <Sparkles className="size-4" />
                Regenerate
              </Button>
              <Button>
                <Send className="size-4" />
                Send
              </Button>
            </div>
          </div>
        }
      >
        {selected && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-border-subtle bg-canvas/50 p-4">
              <p className="text-xs font-medium text-ink-muted">Context</p>
              <p className="mt-1 text-sm text-ink-secondary">
                {selected.reason}
              </p>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-medium text-brand">
                <Sparkles className="size-3.5" />
                AI-drafted reply
              </div>
              <Textarea
                rows={7}
                defaultValue={DRAFTS[selected.name] ?? ""}
              />
              <p className="text-xs text-ink-muted">
                Edit anything before sending. BizPilot keeps your tone
                consistent.
              </p>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
}
