import { Bell, CheckCircle2, Info, Siren, TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";

import type { AlertItem } from "@/data/healthData";
import { cn } from "@/lib/utils";

const severityMap = {
  critical: {
    icon: Siren,
    wrap: "bg-rose-50 text-rose-600",
    dot: "bg-rose-500",
  },
  warning: {
    icon: TriangleAlert,
    wrap: "bg-amber-50 text-amber-700",
    dot: "bg-amber-500",
  },
  info: {
    icon: Info,
    wrap: "bg-sky-50 text-sky-700",
    dot: "bg-sky-500",
  },
  resolved: {
    icon: CheckCircle2,
    wrap: "bg-emerald-50 text-emerald-700",
    dot: "bg-emerald-500",
  },
} as const;

export function AlertRow({ alert }: { alert: AlertItem }) {
  const style = severityMap[alert.severity];
  const Icon = style.icon;

  return (
    <div className="rounded-[24px] border border-slate-200/70 bg-white p-4 shadow-[0_10px_24px_rgba(15,31,61,0.05)]">
      <div className="flex items-start gap-4">
        <div className={cn("mt-1 rounded-2xl p-3", style.wrap)}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-slate-950">{alert.title}</h3>
            {alert.unread ? (
              <span className={cn("h-2.5 w-2.5 rounded-full", style.dot)} />
            ) : null}
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-600">{alert.body}</p>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              {alert.source} · {alert.time}
            </p>
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
              to={alert.actionTo}
            >
              <Bell className="h-3.5 w-3.5" />
              {alert.actionLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
