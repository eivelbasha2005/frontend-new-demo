import { ArrowRight, BrainCircuit, Clock3, History, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

import { healthSyncRoutes } from "@/app/navigation";
import { HealthScoreRing } from "@/components/common/HealthScoreRing";
import { PageIntro } from "@/components/common/PageIntro";
import { SurfaceCard } from "@/components/common/SurfaceCard";
import { AlertRow } from "@/components/dashboard/AlertRow";
import { VitalStatCard } from "@/components/dashboard/VitalStatCard";
import { alerts, overviewStats, vitals } from "@/data/healthData";

export function DashboardPage() {
  return (
    <div className="space-y-5">
      <SurfaceCard className="overflow-hidden border-none bg-[linear-gradient(135deg,#0f2a5c_0%,#123f85_50%,#1a6bcc_100%)] p-0 text-white">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="space-y-6">
            <PageIntro
              eyebrow="Morning overview"
              title="Health looks steady today"
              description="Your oxygen and glucose trends are strong, while blood pressure deserves a little extra attention later this afternoon."
              invert
              actions={
                <>
                  <Link
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                    to={healthSyncRoutes.aiAnalysis}
                  >
                    Open AI analysis
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                    to={healthSyncRoutes.notifications}
                  >
                    Review alerts
                  </Link>
                </>
              }
            />

            <div className="grid gap-3 sm:grid-cols-3">
              {overviewStats.map((stat) => (
                <div key={stat.label} className="rounded-[24px] border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <p className="text-sm text-white/70">{stat.label}</p>
                  <div className="mt-3 flex items-end justify-between gap-3">
                    <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
                    <p className="text-sm font-medium text-white/75">{stat.helper}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center rounded-[30px] border border-white/10 bg-white/10 p-6 backdrop-blur">
            <div className="text-center">
              <HealthScoreRing className="mx-auto" inverse label="today" score={78} />
              <p className="mt-4 text-lg font-semibold">Overall status: Good</p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                The mobile card has been expanded into a more informative desktop summary panel.
              </p>
            </div>
          </div>
        </div>
      </SurfaceCard>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
        <SurfaceCard className="space-y-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
                Vital signs
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                Live snapshot
              </h2>
            </div>
            <Link
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700"
              to={healthSyncRoutes.healthHistory}
            >
              View full history
              <History className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {vitals.map((vital) => (
              <VitalStatCard key={vital.slug} vital={vital} />
            ))}
          </div>
        </SurfaceCard>

        <div className="grid gap-5">
          <SurfaceCard className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-sky-50 p-3 text-sky-700">
                <BrainCircuit className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  AI insight
                </p>
                <h2 className="text-xl font-bold tracking-tight text-slate-950">
                  Recommendation for today
                </h2>
              </div>
            </div>
            <p className="text-sm leading-6 text-slate-600">
              Blood pressure trends suggest a short walk after lunch and a quieter sodium intake for dinner. These are mock recommendations only.
            </p>
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              to={healthSyncRoutes.aiAnalysis}
            >
              See full explanation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </SurfaceCard>

          <SurfaceCard className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-amber-50 p-3 text-amber-700">
                <Clock3 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Next check-ins
                </p>
                <h2 className="text-xl font-bold tracking-tight text-slate-950">
                  Care plan cadence
                </h2>
              </div>
            </div>
            <div className="space-y-3">
              {[
                "8:30 PM blood pressure retake",
                "Tomorrow 8:00 AM fasting glucose",
                "Monday 10:00 AM doctor follow-up",
              ].map((item) => (
                <div key={item} className="rounded-[20px] bg-slate-50 p-4 text-sm font-medium text-slate-600">
                  {item}
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </div>

      <SurfaceCard className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
              Alert feed
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              Prioritized for review
            </h2>
          </div>
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700"
            to={healthSyncRoutes.notifications}
          >
            Open alerts center
            <Stethoscope className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4">
          {alerts.slice(0, 2).map((alert) => (
            <AlertRow key={alert.id} alert={alert} />
          ))}
        </div>
      </SurfaceCard>
    </div>
  );
}
