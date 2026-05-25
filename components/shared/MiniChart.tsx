import { cn } from "@/lib/utils";

function buildPath(points: number[], width: number, height: number) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const step = width / (points.length - 1);
  const coords = points.map((p, i) => {
    const x = i * step;
    const y = height - ((p - min) / range) * (height - 8) - 4;
    return [x, y] as const;
  });

  // smooth-ish line using line segments
  const line = coords
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(" ");
  const area = `${line} L ${width} ${height} L 0 ${height} Z`;
  return { line, area, coords };
}

export function MiniAreaChart({
  data = [24, 31, 28, 40, 36, 48, 52],
  className,
  stroke = "var(--color-brand)",
}: {
  data?: number[];
  className?: string;
  stroke?: string;
}) {
  const width = 280;
  const height = 64;
  const { line, area } = buildPath(data, width, height);
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={cn("overflow-visible", className)}
    >
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.16" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#areaFill)" />
      <path
        d={line}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MiniBarChart({
  data,
  className,
  color = "var(--color-brand)",
}: {
  data: { label: string; value: number }[];
  className?: string;
  color?: string;
}) {
  const max = Math.max(...data.map((d) => d.value)) || 1;
  return (
    <div className={cn("flex items-end gap-3", className)}>
      {data.map((d) => (
        <div key={d.label} className="flex flex-1 flex-col items-center gap-2">
          <div className="flex w-full flex-1 items-end">
            <div
              className="w-full rounded-t-md"
              style={{
                height: `${(d.value / max) * 100}%`,
                background: color,
                opacity: 0.85,
              }}
            />
          </div>
          <span className="text-[11px] text-ink-muted">{d.label}</span>
        </div>
      ))}
    </div>
  );
}
