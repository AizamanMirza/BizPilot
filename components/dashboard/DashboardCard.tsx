import { cn } from "@/lib/utils";

export function DashboardCard({
  title,
  description,
  action,
  children,
  className,
  bodyClassName,
}: {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-card border border-border-subtle bg-surface shadow-card",
        className
      )}
    >
      {(title || action) && (
        <header className="flex items-start justify-between gap-4 border-b border-border-subtle px-5 py-4">
          <div>
            {title && (
              <h2 className="text-[15px] font-semibold text-ink">{title}</h2>
            )}
            {description && (
              <p className="mt-0.5 text-sm text-ink-secondary">{description}</p>
            )}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </header>
      )}
      <div className={cn("p-5", bodyClassName)}>{children}</div>
    </section>
  );
}
