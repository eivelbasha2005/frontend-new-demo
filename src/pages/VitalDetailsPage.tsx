import { Navigate, useParams } from "react-router-dom";

import { healthSyncRoutes } from "@/app/navigation";
import { PageIntro } from "@/components/common/PageIntro";
import { SurfaceCard } from "@/components/common/SurfaceCard";
import { TrendChart } from "@/components/dashboard/TrendChart";
import { vitals } from "@/data/healthData";

const companionSeries: Record<string, number[]> = {
  "heart-rate": [76, 72, 74, 70, 71, 73, 72],
  "blood-pressure": [84, 82, 86, 81, 89, 84, 82],
  "blood-oxygen": [98, 98, 97, 98, 99, 98, 98],
  "blood-glucose": [104, 100, 107, 102, 99, 97, 96],
};

export function VitalDetailsPage() {
  const { vitalId } = useParams();
  const vital = vitals.find((item) => item.slug === vitalId);

  if (!vital) {
    return <Navigate replace to={healthSyncRoutes.dashboard} />;
  }

  return (
    <div className="space-y-5">
      <SurfaceCard className="space-y-5">
        <PageIntro
          eyebrow="Vital details"
          title={vital.label}
          description="Each vital now gets a desktop-friendly detail page instead of staying trapped inside a mobile-only card."
        />

        <div className="grid gap-4 md:grid-cols-4">
          {[
            { label: "Current reading", value: vital.value, helper: vital.unit },
            { label: "Target range", value: vital.range, helper: "Reference" },
            { label: "Status", value: vital.status, helper: "Current state" },
            { label: "Latest update", value: vital.lastReading, helper: "Mock timestamp" },
          ].map((item) => (
            <div key={item.label} className="rounded-[24px] bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                {item.label}
              </p>
              <p className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-slate-500">{item.helper}</p>
            </div>
          ))}
        </div>
      </SurfaceCard>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <SurfaceCard className="space-y-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
              Weekly movement
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              Seven-day trend
            </h2>
          </div>
          <TrendChart
            firstColor="#1a6bcc"
            firstSeries={vital.weekly.map((value) => 120 - value * 0.75)}
            secondColor="#0dc9b1"
            secondSeries={companionSeries[vital.slug].map((value) => 120 - value * 0.75)}
          />
          <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
              Guidance
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              Quick interpretation
            </h2>
          </div>
          <div className="grid gap-3">
            {[vital.note, vital.trend, "Use these values as static UI examples only."].map((item) => (
              <div key={item} className="rounded-[22px] bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </SurfaceCard>
      </div>
    </div>
  );
}
