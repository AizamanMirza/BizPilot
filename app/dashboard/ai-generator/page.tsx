"use client";

import { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Tabs } from "@/components/ui/Tabs";
import { EmptyState } from "@/components/shared/EmptyState";
import { GENERATOR_TYPES, GENERATOR_SAMPLE } from "@/lib/mock-data";
import { Sparkles, Copy, RefreshCw, Wand2 } from "lucide-react";

export default function AiGeneratorPage() {
  const [type, setType] = useState("caption");
  const [generated, setGenerated] = useState(false);

  const active = GENERATOR_TYPES.find((t) => t.id === type)!;
  const outputs = GENERATOR_SAMPLE[type] ?? [];

  return (
    <div className="space-y-6">
      <PageHeader
        title="AI Generator"
        description="Pick what you need, add a little context, and let BizPilot write it."
      />

      <Tabs
        tabs={GENERATOR_TYPES.map((t) => ({ id: t.id, label: t.label }))}
        active={type}
        onChange={(id) => {
          setType(id);
          setGenerated(false);
        }}
        className="flex-wrap"
      />

      <div className="grid gap-6 lg:grid-cols-5">
        {/* input */}
        <DashboardCard
          title={`${active.label} generator`}
          description={active.hint}
          className="lg:col-span-2"
          bodyClassName="space-y-4"
        >
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-ink">
              What’s this about?
            </label>
            <Textarea
              rows={4}
              placeholder="e.g. Weekend promo — RM5 off all fades, limited slots, push bookings before Saturday."
              defaultValue="Weekend promo for fade haircuts, limited slots, RM5 off for new clients."
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-ink">Tone</label>
              <Select defaultValue="Friendly">
                {["Friendly", "Bold", "Premium", "Playful"].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </Select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-ink">Length</label>
              <Select defaultValue="Short">
                {["Short", "Medium", "Long"].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </Select>
            </div>
          </div>

          <Button className="w-full" onClick={() => setGenerated(true)}>
            <Sparkles className="size-4" />
            Generate {active.label.toLowerCase()}
          </Button>
        </DashboardCard>

        {/* output */}
        <DashboardCard
          title="Results"
          description="2 variations · review and copy"
          className="lg:col-span-3"
          action={
            generated && (
              <Button size="sm" variant="ghost" onClick={() => setGenerated(true)}>
                <RefreshCw className="size-3.5" />
                Regenerate
              </Button>
            )
          }
          bodyClassName="space-y-3"
        >
          {!generated ? (
            <EmptyState
              icon={Wand2}
              title="Nothing generated yet"
              description="Add context on the left and hit generate to see AI-written options here."
              className="border-0 shadow-none"
            />
          ) : (
            outputs.map((out, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border-subtle bg-canvas/50 p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-ink-muted">
                    Option {i + 1}
                  </span>
                  <Button size="sm" variant="ghost">
                    <Copy className="size-3.5" />
                    Copy
                  </Button>
                </div>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-ink-secondary">
                  {out}
                </p>
              </div>
            ))
          )}
        </DashboardCard>
      </div>
    </div>
  );
}
