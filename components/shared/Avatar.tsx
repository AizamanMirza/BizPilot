import { cn } from "@/lib/utils";
import { initials } from "@/lib/utils";

const PALETTE = [
  "bg-[#e0ecff] text-[#1d4ed8]",
  "bg-[#dcfce7] text-[#15803d]",
  "bg-[#fef3c7] text-[#b45309]",
  "bg-[#ede9fe] text-[#6d28d9]",
  "bg-[#fee2e2] text-[#b91c1c]",
  "bg-[#e4e4e7] text-[#3f3f46]",
];

function colorFor(name: string) {
  const sum = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  return PALETTE[sum % PALETTE.length];
}

export function Avatar({
  name,
  size = "md",
  className,
}: {
  name: string;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    xs: "size-6 text-[10px]",
    sm: "size-8 text-xs",
    md: "size-9 text-[13px]",
    lg: "size-11 text-sm",
  };
  return (
    <span
      className={cn(
        "flex items-center justify-center rounded-full font-semibold",
        colorFor(name),
        sizes[size],
        className
      )}
    >
      {initials(name)}
    </span>
  );
}
