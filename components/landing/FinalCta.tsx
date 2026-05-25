import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-card bg-[linear-gradient(135deg,#3b82f6_0%,#2563eb_55%,#1e40af_100%)] px-8 py-14 text-center shadow-float sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-white/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 size-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Put your marketing on autopilot
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-white/70">
              Join small business owners who plan content, win leads, and grow
              revenue with BizPilot — starting today, for free.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/sign-up">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Start free
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="w-full border border-white/20 bg-white/10 text-white hover:bg-white/15 sm:w-auto"
                >
                  View live demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
