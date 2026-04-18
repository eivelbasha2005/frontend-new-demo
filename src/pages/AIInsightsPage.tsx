import { Sparkles } from "lucide-react";

import { HealthScoreRing } from "@/components/common/HealthScoreRing";
import { PageIntro } from "@/components/common/PageIntro";
import { SurfaceCard } from "@/components/common/SurfaceCard";
import { analysisCards } from "@/data/healthData";

const toneStyles = {
  amber: "bg-amber-50 text-amber-700",
  emerald: "bg-emerald-50 text-emerald-700",
  rose: "bg-rose-50 text-rose-600",
  sky: "bg-sky-50 text-sky-700",
} as const;

export function AIInsightsPage() {
  return (
    <div className="space-y-5">
      <SurfaceCard className="grid gap-6 overflow-hidden border-none bg-[linear-gradient(135deg,rgba(15,42,92,0.98),rgba(26,107,204,0.96))] text-white lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-6">
          <PageIntro
            eyebrow="AI Analysis"
            title="Personalized health analysis"
            description="The original mobile AI screen has been expanded into a richer, easier-to-scan desktop report while keeping the same visual mood."
            invert
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "Highest confidence", value: "Respiratory health" },
              { label: "Main watch item", value: "Blood pressure" },
              { label: "Best habit", value: "Post-meal walk" },
            ].map((item) => (
              <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/10 p-4">
                <p className="text-sm text-white/65">{item.label}</p>
                <p className="mt-2 text-lg font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center rounded-[30px] border border-white/10 bg-white/10 p-6">
          <div className="text-center">
            <HealthScoreRing className="mx-auto" inverse label="overall" score={78} />
            <p className="mt-4 text-lg font-semibold">Health score: Good</p>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Supportive insight only. No API calls or diagnostic logic are involved.
            </p>
          </div>
        </div>
      </SurfaceCard>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="grid gap-4">
          {analysisCards.map((card) => (
            <SurfaceCard key={card.title} className="space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <p className="text-xl font-bold tracking-tight text-slate-950">
                    {card.title}
                  </p>
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${toneStyles[card.tone]}`}>
                    {card.level}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold tracking-tight text-slate-950">
                    {card.score}%
                  </p>
                  <p className="text-sm text-slate-500">Confidence</p>
                </div>
              </div>
              <p className="text-sm leading-6 text-slate-600">{card.summary}</p>
              <div className="grid gap-3">
                {card.bullets.map((bullet) => (
                  <div key={bullet} className="flex gap-3 rounded-[20px] bg-slate-50 p-4">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-teal-400" />
                    <p className="text-sm leading-6 text-slate-600">{bullet}</p>
                  </div>
                ))}
              </div>
            </SurfaceCard>
          ))}
        </div>

        <SurfaceCard className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-slate-950 p-3 text-white">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Top recommendation
              </p>
              <h2 className="text-xl font-bold tracking-tight text-slate-950">
                Monitor blood pressure twice today
              </h2>
            </div>
          </div>
          <p className="text-sm leading-6 text-slate-600">
            Check once after lunch and once before sleep to compare how afternoon stress affects your trend.
          </p>
          <div className="rounded-[24px] bg-slate-950 p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
              Clinical note
            </p>
            <p className="mt-3 text-sm leading-6 text-white/75">
              The healthcare tone remains modern and supportive, but the layout now has enough room for richer summaries and side context on larger screens.
            </p>
          </div>
        </SurfaceCard>
      </div>
    </div>
  );
}
