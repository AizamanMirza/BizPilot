"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DASHBOARD_NAV } from "@/lib/constants";
import { USER } from "@/lib/mock-data";
import { Logo } from "@/components/shared/Logo";
import { Avatar } from "@/components/shared/Avatar";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Sparkles, X } from "lucide-react";

function isActive(pathname: string, href: string) {
  if (href === "/dashboard") return pathname === "/dashboard";
  return pathname.startsWith(href);
}

export function Sidebar({
  mobileOpen,
  onClose,
}: {
  mobileOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* mobile backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink/20 transition-opacity lg:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-[260px] flex-col border-r border-border-subtle bg-surface transition-transform lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* top */}
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/dashboard" onClick={onClose}>
            <Logo withTagline />
          </Link>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-ink-muted hover:bg-surface-muted lg:hidden"
          >
            <X className="size-4.5" />
          </button>
        </div>

        {/* nav */}
        <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-2">
          {DASHBOARD_NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-brand text-white"
                    : "text-ink-secondary hover:bg-surface-muted hover:text-ink"
                )}
              >
                <item.icon
                  className={cn(
                    "size-4.5",
                    active ? "text-white" : "text-ink-muted"
                  )}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* bottom */}
        <div className="space-y-3 border-t border-border-subtle p-3">
          <div className="rounded-2xl border border-border-subtle bg-canvas/60 p-3.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-ink">
                {USER.plan}
              </span>
              <span className="flex size-6 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <Sparkles className="size-3.5" />
              </span>
            </div>
            <p className="mt-1 text-[11px] text-ink-muted">
              9 days left in trial
            </p>
            <Button size="sm" className="mt-3 w-full">
              Upgrade plan
            </Button>
          </div>

          <div className="flex items-center gap-2.5 rounded-xl px-2 py-1.5">
            <Avatar name={USER.fullName} size="sm" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">
                {USER.fullName}
              </p>
              <p className="truncate text-xs text-ink-muted">{USER.email}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
