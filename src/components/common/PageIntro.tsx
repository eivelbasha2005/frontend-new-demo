import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  description,
  actions,
  invert = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  invert?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="space-y-2">
        <p
          className={`text-xs font-semibold uppercase tracking-[0.28em] ${
            invert ? "text-teal-200" : "text-sky-600"
          }`}
        >
          {eyebrow}
        </p>
        <div className="space-y-2">
          <h2
            className={`text-2xl font-bold tracking-tight sm:text-3xl ${
              invert ? "text-white" : "text-slate-950"
            }`}
          >
            {title}
          </h2>
          <p
            className={`max-w-2xl text-sm leading-6 sm:text-base ${
              invert ? "text-white/75" : "text-slate-600"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </div>
  );
}
