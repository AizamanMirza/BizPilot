import { Container, SectionLabel } from "@/components/shared/Container";
import { PROCESS_STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            From setup to sales in four steps
          </h2>
          <p className="mt-4 text-pretty text-ink-secondary">
            No marketing degree required. Answer a few questions and let
            BizPilot do the heavy lifting.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative rounded-card border border-border-subtle bg-surface p-6 shadow-card"
            >
              <span className="text-sm font-semibold tabular-nums text-ink-muted">
                {step.step}
              </span>
              <div className="mt-4 h-px w-full bg-border-subtle" />
              <h3 className="mt-4 text-base font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
