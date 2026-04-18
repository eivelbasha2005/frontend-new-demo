import { cn } from "@/lib/utils";

export function HealthScoreRing({
  score,
  label = "Health score",
  size = 120,
  strokeWidth = 12,
  className,
  inverse = false,
}: {
  score: number;
  label?: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
  inverse?: boolean;
}) {
  const radius = size / 2 - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const dash = `${(score / 100) * circumference} ${circumference}`;

  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={inverse ? "rgba(255,255,255,0.18)" : "rgba(15,31,61,0.08)"}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#health-score-gradient)"
          strokeDasharray={dash}
          strokeDashoffset={circumference * 0.25}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <defs>
          <linearGradient id="health-score-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#1A6BCC" />
            <stop offset="100%" stopColor="#0DC9B1" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className={`text-3xl font-bold tracking-tight ${
            inverse ? "text-white" : "text-slate-950"
          }`}
        >
          {score}
        </span>
        <span
          className={`text-[11px] font-medium uppercase tracking-[0.2em] ${
            inverse ? "text-white/60" : "text-slate-500"
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
