"use client";

import { useState } from "react";
import { Container, SectionLabel } from "@/components/shared/Container";
import { FAQS } from "@/lib/constants";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-14">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Questions, answered
          </h2>
          <p className="mt-4 text-pretty text-ink-secondary">
            Everything you need to know before you start.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border-subtle bg-surface shadow-soft"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-[15px] font-medium text-ink">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      "flex size-7 shrink-0 items-center justify-center rounded-lg border border-border-subtle text-ink-secondary transition-transform",
                      isOpen && "rotate-45 border-transparent bg-brand text-white"
                    )}
                  >
                    <Plus className="size-4" />
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-ink-secondary">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
