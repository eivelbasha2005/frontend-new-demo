import "./_group.css";
import { MobileFrame, BottomNav } from "./_shared/MobileFrame";

function VitalCard({ label, value, unit, trend, trendDir, status, statusColor, statusBg, accentColor, spark }: {
  label: string; value: string; unit: string; trend: string; trendDir: "up"|"down"|"flat";
  status: string; statusColor: string; statusBg: string; accentColor: string;
  spark: { x: number; y: number }[];
}) {
  const pts = spark.map(p => `${p.x},${p.y}`).join(" ");
  const fillPts = `${spark[0].x},52 ${pts} ${spark[spark.length-1].x},52`;

  const trendArrow = trendDir === "up"
    ? <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 9V3M3 6L6 3L9 6" stroke={statusColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
    : trendDir === "down"
    ? <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 3V9M3 6L6 9L9 6" stroke={statusColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
    : <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 6H9" stroke={statusColor} strokeWidth="1.8" strokeLinecap="round"/></svg>;

  return (
    <div style={{
      background: "white",
      borderRadius: 20,
      padding: "16px",
      boxShadow: "0 2px 12px rgba(15,31,61,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Accent bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: accentColor, borderRadius: "20px 20px 0 0" }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: "#8BA3C0", margin: 0, letterSpacing: "0.03em" }}>{label}</p>
        <div style={{ display: "flex", alignItems: "center", gap: 3, padding: "3px 7px", borderRadius: 6, background: statusBg }}>
          {trendArrow}
          <span style={{ fontSize: 10, fontWeight: 700, color: statusColor }}>{status}</span>
        </div>
      </div>

      {/* Sparkline */}
      <svg width="100%" height="36" viewBox="0 0 120 36" preserveAspectRatio="none" style={{ margin: "-4px 0" }}>
        <defs>
          <linearGradient id={`sg-${label}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.18"/>
            <stop offset="100%" stopColor={accentColor} stopOpacity="0"/>
          </linearGradient>
        </defs>
        <polygon points={fillPts} fill={`url(#sg-${label})`}/>
        <polyline points={pts} stroke={accentColor} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx={spark[spark.length-1].x} cy={spark[spark.length-1].y} r="3" fill={accentColor}/>
      </svg>

      <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
        <span style={{ fontSize: 26, fontWeight: 800, color: "#0F1F3D", letterSpacing: "-0.04em", lineHeight: 1 }}>{value}</span>
        <span style={{ fontSize: 12, color: "#8BA3C0", fontWeight: 500 }}>{unit}</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <span style={{ fontSize: 11, color: "#B0C4DE", fontWeight: 500 }}>{trend}</span>
      </div>
    </div>
  );
}

export function Dashboard() {
  return (
    <MobileFrame bg="#F2F6FC">
      <div style={{ height: 820, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Header */}
        <div style={{ padding: "12px 20px 16px", background: "#F2F6FC" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p style={{ margin: 0, fontSize: 13, color: "#8BA3C0", fontWeight: 500 }}>Sunday, April 13</p>
              <h2 style={{ margin: "3px 0 0", fontSize: 22, fontWeight: 800, color: "#0F1F3D", letterSpacing: "-0.03em" }}>
                Morning, Ahmad
              </h2>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              {/* Notif bell */}
              <div style={{ position: "relative", width: 40, height: 40, borderRadius: 12, background: "white", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(15,31,61,0.08)" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2C7.24 2 5 4.24 5 7V12L3.5 14H16.5L15 12V7C15 4.24 12.76 2 10 2Z" stroke="#0F1F3D" strokeWidth="1.6"/>
                  <path d="M8.5 15.5C8.5 16.33 9.17 17 10 17C10.83 17 11.5 16.33 11.5 15.5" stroke="#0F1F3D" strokeWidth="1.6"/>
                </svg>
                <div style={{ position: "absolute", top: 8, right: 8, width: 8, height: 8, borderRadius: "50%", background: "#EF4444", border: "1.5px solid #F2F6FC" }} />
              </div>
              {/* Avatar */}
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg, #1A6BCC, #0DC9B1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="7" r="3.5" stroke="white" strokeWidth="1.6"/>
                  <path d="M3.5 17C3.5 13.96 6.46 11.5 10 11.5C13.54 11.5 16.5 13.96 16.5 17" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, overflow: "auto", padding: "0 16px" }}>

          {/* Health status banner */}
          <div style={{
            background: "#0F2A5C",
            borderRadius: 20,
            padding: "16px 18px",
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            gap: 14,
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", right: -20, top: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(13,201,177,0.12)" }} />
            <div style={{ position: "absolute", right: 30, bottom: -30, width: 80, height: 80, borderRadius: "50%", background: "rgba(26,107,204,0.3)" }} />

            {/* ECG */}
            <div style={{ flex: 1, position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E" }} />
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Overall Status</span>
              </div>
              <p style={{ color: "white", fontSize: 18, fontWeight: 800, margin: "0 0 8px", letterSpacing: "-0.02em" }}>Health looks good today</p>
              <svg width="160" height="24" viewBox="0 0 160 24" fill="none">
                <path d="M0 12 H40 L48 3 L54 21 L60 6 L66 18 L72 12 H110 L118 3 L124 21 L130 6 L136 18 L142 12 H160"
                  stroke="#0DC9B1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{ textAlign: "right", position: "relative", zIndex: 1, flexShrink: 0 }}>
              <div style={{ fontSize: 34, fontWeight: 900, color: "white", letterSpacing: "-0.04em", lineHeight: 1 }}>78</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>health score</div>
              <div style={{ width: 48, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.15)", marginTop: 6, overflow: "hidden" }}>
                <div style={{ width: "78%", height: "100%", background: "#0DC9B1", borderRadius: 2 }} />
              </div>
            </div>
          </div>

          {/* Vitals grid */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#0F1F3D", letterSpacing: "-0.01em" }}>Vital Signs</span>
            <span style={{ fontSize: 12, color: "#8BA3C0", fontWeight: 500 }}>Updated 2m ago</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
            <VitalCard
              label="Heart Rate"
              value="72"
              unit="bpm"
              trend="vs. 74 yesterday"
              trendDir="down"
              status="Normal"
              statusColor="#16A34A"
              statusBg="#DCFCE7"
              accentColor="#EF4444"
              spark={[{x:0,y:28},{x:20,y:22},{x:40,y:30},{x:60,y:18},{x:80,y:26},{x:100,y:16},{x:120,y:20}]}
            />
            <VitalCard
              label="SpO₂"
              value="98"
              unit="%"
              trend="stable all day"
              trendDir="flat"
              status="Excellent"
              statusColor="#0DC9B1"
              statusBg="#E6FAF8"
              accentColor="#0DC9B1"
              spark={[{x:0,y:22},{x:20,y:20},{x:40,y:18},{x:60,y:22},{x:80,y:16},{x:100,y:18},{x:120,y:16}]}
            />
            <VitalCard
              label="Blood Pressure"
              value="128/82"
              unit="mmHg"
              trend="slightly elevated"
              trendDir="up"
              status="Watch"
              statusColor="#B45309"
              statusBg="#FEF3C7"
              accentColor="#F59E0B"
              spark={[{x:0,y:26},{x:20,y:28},{x:40,y:22},{x:60,y:30},{x:80,y:18},{x:100,y:28},{x:120,y:24}]}
            />
            <VitalCard
              label="Blood Glucose"
              value="96"
              unit="mg/dL"
              trend="within target"
              trendDir="flat"
              status="Normal"
              statusColor="#16A34A"
              statusBg="#DCFCE7"
              accentColor="#3B82F6"
              spark={[{x:0,y:28},{x:20,y:24},{x:40,y:26},{x:60,y:20},{x:80,y:24},{x:100,y:22},{x:120,y:24}]}
            />
          </div>

          {/* AI insight — subtle, not a banner */}
          <div style={{
            background: "white",
            borderRadius: 18,
            padding: "14px 16px",
            marginBottom: 16,
            display: "flex",
            gap: 12,
            alignItems: "flex-start",
            border: "1.5px solid #E4EBF5",
          }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "#EBF3FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1.5L10.5 7H16L11.5 10.5L13.5 16L9 12.5L4.5 16L6.5 10.5L2 7H7.5L9 1.5Z" stroke="#1A6BCC" strokeWidth="1.4" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 3 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#0F1F3D" }}>AI Insight</span>
                <span style={{ fontSize: 11, color: "#B0C4DE", fontWeight: 500 }}>just now</span>
              </div>
              <p style={{ fontSize: 13, color: "#4A6080", margin: 0, lineHeight: 1.55, fontWeight: 400 }}>
                BP trending up this week. Try reducing sodium and taking a short walk after meals.
              </p>
            </div>
          </div>

          {/* Quick actions */}
          <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
            {[
              { label: "Log Reading", color: "#1A6BCC", bg: "#EBF3FF" },
              { label: "View History", color: "#0DC9B1", bg: "#E6FAF8" },
              { label: "Ask AI", color: "#8B5CF6", bg: "#EDE9FE" },
            ].map((a, i) => (
              <button key={i} style={{
                flex: 1,
                padding: "12px 6px",
                borderRadius: 14,
                border: "none",
                background: a.bg,
                color: a.color,
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "-0.01em",
              }}>
                {a.label}
              </button>
            ))}
          </div>
        </div>

        <BottomNav active="home" />
      </div>
    </MobileFrame>
  );
}
