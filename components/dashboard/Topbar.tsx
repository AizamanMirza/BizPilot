"use client";

import { usePathname } from "next/navigation";
import { BUSINESS } from "@/lib/mock-data";
import { Avatar } from "@/components/shared/Avatar";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Bell, Menu, Sparkles, ChevronDown } from "lucide-react";

const PAGE_META: Record<string, { title: string; description: string }> = {
  "/dashboard": {
    title: "Dashboard",
    description: "Your marketing at a glance.",
  },
  "/dashboard/setup": {
    title: "Business Setup",
    description: "Tell BizPilot about your business so the AI can tailor everything.",
  },
  "/dashboard/ai-generator": {
    title: "AI Generator",
    description: "Generate captions, ad copy, replies, and visual prompts.",
  },
  "/dashboard/content": {
    title: "Content Planner",
    description: "Plan and schedule your week of content.",
  },
  "/dashboard/leads": {
    title: "Leads",
    description: "Track every enquiry from first contact to closed sale.",
  },
  "/dashboard/follow-ups": {
    title: "Follow-ups",
    description: "Stay on top of customers who need a nudge.",
  },
  "/dashboard/ads-coach": {
    title: "Ads Coach",
    description: "Run better Meta Ads with step-by-step guidance.",
  },
  "/dashboard/revenue": {
    title: "Revenue",
    description: "Track sales, conversion, and campaign performance.",
  },
  "/dashboard/settings": {
    title: "Settings",
    description: "Manage your workspace, plan, and preferences.",
  },
};

export function Topbar({ onMenu }: { onMenu: () => void }) {
  const pathname = usePathname();
  const meta = PAGE_META[pathname] ?? PAGE_META["/dashboard"];

  return (
    <header className="sticky top-0 z-30 border-b border-border-subtle bg-canvas/85 backdrop-blur-md">
      <div className="flex min-h-[72px] items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenu}
            className="rounded-lg p-2 text-ink-secondary hover:bg-surface-muted lg:hidden"
          >
            <Menu className="size-5" />
          </button>
          <div>
            <h1 className="text-base font-semibold tracking-tight text-ink sm:text-lg">
              {meta.title}
            </h1>
            <p className="hidden text-sm text-ink-secondary sm:block">
              {meta.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* business selector */}
          <button
            className={cn(
              "hidden items-center gap-2.5 rounded-xl border border-border-subtle bg-surface px-3 py-2 text-left shadow-soft transition-colors hover:bg-surface-muted md:flex"
            )}
          >
            <Avatar name={BUSINESS.name} size="sm" />
            <span className="leading-tight">
              <span className="block text-[13px] font-medium text-ink">
                {BUSINESS.name}
              </span>
              <span className="block text-[11px] text-ink-muted">
                {BUSINESS.type} · {BUSINESS.location}
              </span>
            </span>
            <ChevronDown className="size-4 text-ink-muted" />
          </button>

          <Button size="sm" className="hidden sm:inline-flex">
            <Sparkles className="size-4" />
            Generate with AI
          </Button>

          <button className="relative rounded-xl border border-border-subtle bg-surface p-2 text-ink-secondary shadow-soft hover:bg-surface-muted">
            <Bell className="size-4.5" />
            <span className="absolute right-2 top-2 size-1.5 rounded-full bg-accent-red" />
          </button>

          <Avatar name="Mirza Aizaman" size="md" className="hidden sm:flex" />
        </div>
      </div>
    </header>
  );
}
