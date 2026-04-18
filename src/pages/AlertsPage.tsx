import { PageIntro } from "@/components/common/PageIntro";
import { SurfaceCard } from "@/components/common/SurfaceCard";
import { AlertRow } from "@/components/dashboard/AlertRow";
import { alerts } from "@/data/healthData";

export function AlertsPage() {
  const unreadCount = alerts.filter((alert) => alert.unread).length;

  return (
    <div className="space-y-5">
      <SurfaceCard className="space-y-5">
        <PageIntro
          eyebrow="Alerts center"
          title="Smart alerts"
          description="Critical items stay prominent, while supporting notices are easier to filter and review on larger screens."
          actions={
            <>
              {["All", "Critical", "Warning", "Info"].map((label, index) => (
                <button
                  key={label}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    index === 0
                      ? "bg-slate-950 text-white"
                      : "border border-slate-200 bg-white text-slate-600"
                  }`}
                  type="button"
                >
                  {label}
                </button>
              ))}
            </>
          }
        />

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[24px] bg-rose-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-400">
              Unread
            </p>
            <p className="mt-3 text-3xl font-bold tracking-tight text-rose-600">
              {unreadCount}
            </p>
            <p className="mt-1 text-sm text-rose-600/80">Needs review today</p>
          </div>
          <div className="rounded-[24px] bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Critical today
            </p>
            <p className="mt-3 text-3xl font-bold tracking-tight text-slate-950">1</p>
            <p className="mt-1 text-sm text-slate-500">Highest priority follow-up</p>
          </div>
          <div className="rounded-[24px] bg-sky-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-400">
              AI notices
            </p>
            <p className="mt-3 text-3xl font-bold tracking-tight text-sky-700">2</p>
            <p className="mt-1 text-sm text-sky-700/80">Lower urgency pattern updates</p>
          </div>
        </div>
      </SurfaceCard>

      <div className="grid gap-4">
        {alerts.map((alert) => (
          <AlertRow key={alert.id} alert={alert} />
        ))}
      </div>
    </div>
  );
}
