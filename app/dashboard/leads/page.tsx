"use client";

import { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { KanbanColumn } from "@/components/dashboard/KanbanColumn";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Tabs } from "@/components/ui/Tabs";
import { Avatar } from "@/components/shared/Avatar";
import { StatusBadge, leadStatusTone } from "@/components/ui/StatusBadge";
import { Table, THead, TH, TBody, TR, TD } from "@/components/ui/Table";
import { LEADS, LEAD_STATUSES } from "@/lib/mock-data";
import { formatRM } from "@/lib/utils";
import { Plus, Search, Sparkles } from "lucide-react";

const PIPELINE_VALUE = LEADS.reduce((s, l) => s + l.value, 0);
const STATS = [
  { label: "Total leads", value: String(LEADS.length) },
  { label: "Pipeline value", value: formatRM(PIPELINE_VALUE) },
  {
    label: "Closed",
    value: String(LEADS.filter((l) => l.status === "Closed").length),
  },
  { label: "Conversion", value: "32%" },
];

export default function LeadsPage() {
  const [view, setView] = useState("pipeline");

  return (
    <div className="space-y-6">
      <PageHeader
        title="Leads"
        description="Every enquiry, from first message to closed sale."
        actions={
          <>
            <Button variant="secondary">
              <Sparkles className="size-4" />
              Bulk reply
            </Button>
            <Button>
              <Plus className="size-4" />
              Add lead
            </Button>
          </>
        }
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-card border border-border-subtle bg-surface p-4 shadow-card"
          >
            <p className="text-[13px] text-ink-secondary">{s.label}</p>
            <p className="mt-1 text-2xl font-semibold text-ink">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Tabs
          tabs={[
            { id: "pipeline", label: "Pipeline" },
            { id: "table", label: "List" },
          ]}
          active={view}
          onChange={setView}
        />
        <div className="relative w-full sm:w-64">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink-muted" />
          <Input placeholder="Search leads..." className="pl-9" />
        </div>
      </div>

      {view === "pipeline" ? (
        <div className="overflow-x-auto">
          <div className="flex gap-4 lg:grid lg:grid-cols-5">
            {LEAD_STATUSES.map((status) => (
              <KanbanColumn
                key={status}
                title={status}
                leads={LEADS.filter((l) => l.status === status)}
              />
            ))}
          </div>
        </div>
      ) : (
        <DashboardCard bodyClassName="p-0">
          <Table>
            <THead>
              <TH className="text-left">Lead</TH>
              <TH className="text-left">Interest</TH>
              <TH className="text-left">Channel</TH>
              <TH className="text-left">Status</TH>
              <TH className="text-left">Last contact</TH>
              <TH className="text-right">Value</TH>
            </THead>
            <TBody>
              {LEADS.map((lead) => (
                <TR key={lead.id}>
                  <TD>
                    <div className="flex items-center gap-2.5">
                      <Avatar name={lead.name} size="sm" />
                      <span className="font-medium text-ink">{lead.name}</span>
                    </div>
                  </TD>
                  <TD>{lead.interest}</TD>
                  <TD>{lead.channel}</TD>
                  <TD>
                    <StatusBadge tone={leadStatusTone(lead.status)} dot>
                      {lead.status}
                    </StatusBadge>
                  </TD>
                  <TD>{lead.lastContact}</TD>
                  <TD className="text-right font-semibold text-ink">
                    {formatRM(lead.value)}
                  </TD>
                </TR>
              ))}
            </TBody>
          </Table>
        </DashboardCard>
      )}
    </div>
  );
}
