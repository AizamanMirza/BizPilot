import type { ContentItem } from "@/lib/mock-data";
import { StatusBadge, leadStatusTone } from "@/components/ui/StatusBadge";
import { Film, Images, FileText, Clapperboard } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const FORMAT_ICON: Record<string, LucideIcon> = {
  Reel: Film,
  Carousel: Images,
  Post: FileText,
  Story: Clapperboard,
};

export function ContentCard({ item }: { item: ContentItem }) {
  const Icon = FORMAT_ICON[item.format] ?? FileText;
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border-subtle bg-surface p-3.5 shadow-soft transition-shadow hover:shadow-card">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-ink-secondary">
        <Icon className="size-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-ink">{item.title}</p>
        <p className="text-xs text-ink-muted">
          {item.format} · {item.channel}
        </p>
      </div>
      <div className="flex flex-col items-end gap-1.5">
        <StatusBadge tone={leadStatusTone(item.status)}>
          {item.status}
        </StatusBadge>
        <span className="text-xs font-medium text-ink-muted">{item.day}</span>
      </div>
    </div>
  );
}
