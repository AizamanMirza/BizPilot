import { Container, SectionLabel } from "@/components/shared/Container";
import { FEATURES } from "@/lib/constants";

export function Features() {
  return (
    <section id="features" className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Features</SectionLabel>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Everything you need to grow,{" "}
            <span className="text-brand">powered by AI</span>
          </h2>
          <p className="mt-4 text-pretty text-ink-secondary">
            Six tools that work together so you spend less time on marketing and
            more time on customers.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-card border border-border-subtle bg-surface p-6 shadow-card transition-shadow hover:shadow-float"
            >
              <span className="flex size-10 items-center justify-center rounded-xl border border-border-subtle bg-canvas text-ink transition-colors group-hover:border-brand/30 group-hover:bg-brand-soft group-hover:text-brand">
                <feature.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-ink">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
