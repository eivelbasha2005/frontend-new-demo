import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { VitalSummary } from "@/data/healthData";
import { cn } from "@/lib/utils";

const toneStyles = {
  rose: {
    accent: "from-rose-500/20 via-rose-100 to-white",
    line: "#ef4444",
    badge: "bg-rose-50 text-rose-600",
  },
  amber: {
    accent: "from-amber-500/20 via-amber-100 to-white",
    line: "#f59e0b",
    badge: "bg-amber-50 text-amber-700",
  },
  emerald: {
    accent: "from-emerald-500/20 via-emerald-100 to-white",
    line: "#0dc9b1",
    badge: "bg-emerald-50 text-emerald-700",
  },
  sky: {
    accent: "from-sky-500/20 via-sky-100 to-white",
    line: "#3b82f6",
    badge: "bg-sky-50 text-sky-700",
  },
} as const;

function sparkPath(values: number[]) {
  return values
    .map((value, index) => `${index === 0 ? "M" : "L"} ${index * 22} ${value}`)
    .join(" ");
}

export function VitalStatCard({ vital }: { vital: VitalSummary }) {
  const style = toneStyles[vital.tone];

  return (
    <Link
      className="group block rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-[0_10px_30px_rgba(15,31,61,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,31,61,0.10)]"
      to={vital.route}
    >
      <div
        className={cn(
          "mb-4 rounded-[22px] bg-gradient-to-br p-4",
          style.accent,
        )}
      >
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-slate-500">{vital.label}</p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
              {vital.value}
              <span className="ml-1 text-sm font-semibold text-slate-500">
                {vital.unit}
              </span>
            </p>
          </div>
          <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", style.badge)}>
            {vital.status}
          </span>
        </div>

        <svg className="h-16 w-full" viewBox="0 0 132 80" preserveAspectRatio="none">
          <path
            d={sparkPath(vital.spark)}
            fill="none"
            stroke={style.line}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium leading-6 text-slate-600">{vital.note}</p>
        <div className="flex items-center justify-between gap-3 text-sm">
          <div>
            <p className="font-semibold text-slate-900">{vital.trend}</p>
            <p className="text-slate-500">{vital.lastReading}</p>
          </div>
          <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-700" />
        </div>
      </div>
    </Link>
  );
}
