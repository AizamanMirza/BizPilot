import Link from "next/link";
import { Container, SectionLabel } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import { PRICING } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-14">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Simple pricing, <span className="text-brand">no surprises</span>
          </h2>
          <p className="mt-4 text-pretty text-ink-secondary">
            Start free. Upgrade when you’re ready. Cancel anytime.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PRICING.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "flex flex-col rounded-card border p-6 shadow-card",
                tier.highlighted
                  ? "border-transparent bg-[linear-gradient(160deg,#3b82f6_0%,#2563eb_100%)] text-white"
                  : "border-border-subtle bg-surface"
              )}
            >
              <div className="flex items-center justify-between">
                <h3
                  className={cn(
                    "text-base font-semibold",
                    tier.highlighted ? "text-white" : "text-ink"
                  )}
                >
                  {tier.name}
                </h3>
                {tier.highlighted && (
                  <span className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium text-white">
                    Most popular
                  </span>
                )}
              </div>

              <p
                className={cn(
                  "mt-2 text-sm",
                  tier.highlighted ? "text-white/70" : "text-ink-secondary"
                )}
              >
                {tier.blurb}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span
                  className={cn(
                    "text-4xl font-semibold tracking-tight",
                    tier.highlighted ? "text-white" : "text-ink"
                  )}
                >
                  RM{tier.price}
                </span>
                <span
                  className={cn(
                    "text-sm",
                    tier.highlighted ? "text-white/60" : "text-ink-muted"
                  )}
                >
                  {tier.period}
                </span>
              </div>

              <Link href="/sign-up" className="mt-6 block">
                <Button
                  variant={tier.highlighted ? "secondary" : "primary"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </Link>

              <ul className="mt-6 space-y-3">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <span
                      className={cn(
                        "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full",
                        tier.highlighted
                          ? "bg-white/15 text-white"
                          : "bg-accent-green-soft text-accent-green"
                      )}
                    >
                      <Check className="size-3" />
                    </span>
                    <span
                      className={cn(
                        "text-sm",
                        tier.highlighted ? "text-white/80" : "text-ink-secondary"
                      )}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
