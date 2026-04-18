import { Mail, Phone, ShieldCheck, UserRound } from "lucide-react";

import { PageIntro } from "@/components/common/PageIntro";
import { SurfaceCard } from "@/components/common/SurfaceCard";
import { careTeam, profile } from "@/data/healthData";

export function ProfilePage() {
  return (
    <div className="space-y-5">
      <SurfaceCard className="overflow-hidden border-none bg-[linear-gradient(135deg,#0f2a5c_0%,#1a6bcc_75%,#0dc9b1_150%)] p-0 text-white">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-5">
            <PageIntro
              eyebrow="Patient profile"
              title={profile.name}
              description="Demographics, conditions, account preferences, and care contacts arranged for web without losing the original tone."
              invert
            />
            <div className="flex flex-wrap gap-3">
              {[
                `Member ID ${profile.memberId}`,
                `Blood type ${profile.bloodType}`,
                `Age ${profile.age}`,
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/10 p-6 backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-white/15">
                <UserRound className="h-10 w-10 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight">{profile.name}</p>
                <p className="text-sm text-white/70">Primary care program active</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { label: "Height", value: profile.height },
                { label: "Weight", value: profile.weight },
                { label: "Adherence", value: profile.adherence },
              ].map((item) => (
                <div key={item.label} className="rounded-[20px] bg-white/10 p-4">
                  <p className="text-sm text-white/60">{item.label}</p>
                  <p className="mt-2 text-xl font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SurfaceCard>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <SurfaceCard className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
              Diagnosed conditions
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              Active conditions
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {profile.conditions.map((condition) => (
              <span
                key={condition}
                className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700"
              >
                {condition}
              </span>
            ))}
          </div>
          <div className="grid gap-3">
            {[
              { label: "Primary doctor", value: profile.doctor, icon: ShieldCheck },
              { label: "Notifications", value: profile.notifications, icon: Mail },
              { label: "Language", value: profile.language, icon: Phone },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-4 rounded-[22px] bg-slate-50 p-4">
                  <div className="rounded-2xl bg-white p-3 shadow-sm">
                    <Icon className="h-5 w-5 text-sky-700" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="text-base font-semibold text-slate-950">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </SurfaceCard>

        <SurfaceCard className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
              Care team
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              Contacts and support
            </h2>
          </div>
          <div className="grid gap-3">
            {careTeam.map((member) => (
              <div key={member.name} className="rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_10px_25px_rgba(15,31,61,0.04)]">
                <p className="text-lg font-semibold text-slate-950">{member.name}</p>
                <p className="text-sm text-slate-500">{member.role}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{member.contact}</p>
              </div>
            ))}
          </div>
        </SurfaceCard>
      </div>
    </div>
  );
}
