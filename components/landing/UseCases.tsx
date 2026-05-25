import { Container, SectionLabel } from "@/components/shared/Container";
import { USE_CASES } from "@/lib/constants";
import {
  Scissors,
  Sparkles,
  Coffee,
  GraduationCap,
  Briefcase,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const ICONS: LucideIcon[] = [
  Sparkles,
  Scissors,
  Coffee,
  GraduationCap,
  Briefcase,
  Wrench,
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-14">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Who it’s for</SectionLabel>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Made for local, service-based businesses
          </h2>
          <p className="mt-4 text-pretty text-ink-secondary">
            If you win customers through messages and bookings, BizPilot fits
            right into your day.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((useCase, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={useCase.title}
                className="flex items-start gap-4 rounded-card border border-border-subtle bg-surface p-5 shadow-card"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-ink">
                    {useCase.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-secondary">
                    {useCase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
