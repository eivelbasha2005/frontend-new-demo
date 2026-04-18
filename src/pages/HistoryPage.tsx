import { Link } from "react-router-dom";

import { healthSyncRoutes } from "@/app/navigation";
import { PageIntro } from "@/components/common/PageIntro";
import { SurfaceCard } from "@/components/common/SurfaceCard";
import { TrendChart } from "@/components/dashboard/TrendChart";
import { historyReadings } from "@/data/healthData";

const statusStyles = {
  Normal: "bg-emerald-50 text-emerald-700",
  Elevated: "bg-amber-50 text-amber-700",
  High: "bg-rose-50 text-rose-600",
} as const;

export function HistoryPage() {
  const grouped = historyReadings.reduce<Record<string, typeof historyReadings>>(
    (accumulator, reading) => {
      if (!accumulator[reading.date]) {
        accumulator[reading.date] = [];
      }

      accumulator[reading.date].push(reading);
      return accumulator;
    },
    {},
  );

  return (
    <div className="space-y-5">
      <SurfaceCard className="space-y-5">
        <PageIntro
          eyebrow="Historical view"
          title="Reading history"
          description="The old narrow log now opens into a richer timeline with summary cards, trend space, and a clearer table layout."
          actions={
            <>
              {["7 days", "30 days", "3 months", "All time"].map((label, index) => (
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
          {[
            { label: "Average BP", value: "130/83", helper: "Last 7 days" },
            { label: "Average HR", value: "76 bpm", helper: "Resting trend" },
            { label: "Average SpO2", value: "97.4%", helper: "Stable" },
          ].map((item) => (
            <div key={item.label} className="rounded-[24px] bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                {item.label}
              </p>
              <p className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-slate-500">{item.helper}</p>
            </div>
          ))}
        </div>
      </SurfaceCard>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <SurfaceCard className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
                Trend chart
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                Blood pressure movement
              </h2>
            </div>
            <div className="flex gap-4 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-6 rounded-full bg-sky-600" />
                Systolic
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-6 rounded-full bg-teal-400" />
                Diastolic
              </span>
            </div>
          </div>
          <TrendChart
            firstColor="#1a6bcc"
            firstSeries={[58, 48, 64, 42, 60, 50, 46]}
            secondColor="#0dc9b1"
            secondSeries={[78, 70, 80, 64, 77, 68, 66]}
          />
          <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
            Shortcuts
          </p>
          <div className="grid gap-3">
            {[
              { label: "Review AI analysis", to: healthSyncRoutes.aiAnalysis },
              { label: "See active alerts", to: healthSyncRoutes.notifications },
              { label: "Back to dashboard", to: healthSyncRoutes.dashboard },
            ].map((item) => (
              <Link
                key={item.to}
                className="rounded-[20px] bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                to={item.to}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </SurfaceCard>
      </div>

      <SurfaceCard className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
            Reading log
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
            Recent measurements
          </h2>
        </div>

        <div className="space-y-5">
          {Object.entries(grouped).map(([day, readings]) => (
            <div key={day} className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-950">{day}</h3>
              <div className="grid gap-3">
                {readings.map((reading) => (
                  <div
                    key={reading.id}
                    className="grid gap-4 rounded-[24px] border border-slate-200/80 bg-white p-4 shadow-[0_8px_24px_rgba(15,31,61,0.04)] sm:grid-cols-[140px_repeat(4,minmax(0,1fr))_120px]"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                        Time
                      </p>
                      <p className="mt-2 text-base font-semibold text-slate-950">{reading.time}</p>
                    </div>
                    <Metric label="Blood pressure" value={`${reading.systolic}/${reading.diastolic}`} suffix="mmHg" />
                    <Metric label="Heart rate" value={String(reading.heartRate)} suffix="bpm" />
                    <Metric label="SpO2" value={String(reading.oxygen)} suffix="%" />
                    <Metric label="Glucose" value={String(reading.glucose)} suffix="mg/dL" />
                    <div className="sm:text-right">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                        Status
                      </p>
                      <span className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[reading.status]}`}>
                        {reading.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SurfaceCard>
    </div>
  );
}

function Metric({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
        {label}
      </p>
      <p className="mt-2 text-base font-semibold text-slate-950">
        {value}
        <span className="ml-1 text-sm font-medium text-slate-500">{suffix}</span>
      </p>
    </div>
  );
}
