import type { RevenuePoint } from "@/lib/mock-data";
import { formatRM } from "@/lib/utils";

export function RevenueChartMock({
  data,
  height = 220,
}: {
  data: RevenuePoint[];
  height?: number;
}) {
  const width = 640;
  const padX = 8;
  const padTop = 16;
  const padBottom = 28;
  const max = Math.max(...data.map((d) => d.value));
  const min = Math.min(...data.map((d) => d.value));
  const range = max - min || 1;
  const chartH = height - padTop - padBottom;
  const step = (width - padX * 2) / (data.length - 1);

  const coords = data.map((d, i) => {
    const x = padX + i * step;
    const y = padTop + chartH - ((d.value - min) / range) * chartH;
    return [x, y] as const;
  });

  const line = coords
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(" ");
  const area = `${line} L ${coords[coords.length - 1][0]} ${
    padTop + chartH
  } L ${coords[0][0]} ${padTop + chartH} Z`;

  const gridLines = [0, 0.25, 0.5, 0.75, 1].map(
    (t) => padTop + chartH - t * chartH
  );

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        preserveAspectRatio="none"
        style={{ height }}
      >
        <defs>
          <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--color-brand)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {gridLines.map((y, i) => (
          <line
            key={i}
            x1={padX}
            y1={y}
            x2={width - padX}
            y2={y}
            stroke="var(--color-border-subtle)"
            strokeWidth="1"
            strokeDasharray="3 5"
          />
        ))}

        <path d={area} fill="url(#revFill)" />
        <path
          d={line}
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {coords.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="4" fill="var(--color-surface)" />
            <circle
              cx={x}
              cy={y}
              r="4"
              fill="none"
              stroke="var(--color-brand)"
              strokeWidth="2"
            />
          </g>
        ))}
      </svg>

      <div className="mt-2 flex justify-between px-1">
        {data.map((d) => (
          <span key={d.label} className="text-[11px] text-ink-muted">
            {d.label}
          </span>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-4 text-xs text-ink-secondary">
        <span className="inline-flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-brand" />
          Revenue
        </span>
        <span className="text-ink-muted">
          Peak {formatRM(max)} · Low {formatRM(min)}
        </span>
      </div>
    </div>
  );
}
