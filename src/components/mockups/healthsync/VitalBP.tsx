import "./_group.css";
import { MobileFrame, BottomNav } from "./_shared/MobileFrame";

export function VitalBP() {
  const readings = [
    { time: "06:00", sys: 122, dia: 78 },
    { time: "08:00", sys: 128, dia: 82 },
    { time: "10:00", sys: 135, dia: 88 },
    { time: "12:00", sys: 130, dia: 84 },
    { time: "14:00", sys: 142, dia: 92 },
    { time: "16:00", sys: 158, dia: 98 },
    { time: "18:00", sys: 136, dia: 86 },
    { time: "Now",   sys: 130, dia: 83 },
  ];

  const sysMin = 100, sysMax = 170;
  const diaMin = 60, diaMax = 110;
  const pts = readings.map((r, i) => ({
    x: i * (310 / (readings.length - 1)),
    sys: 80 - ((r.sys - sysMin) / (sysMax - sysMin)) * 70 + 5,
    dia: 80 - ((r.dia - diaMin) / (diaMax - diaMin)) * 70 + 5,
    r,
  }));

  const sysPath = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.sys}`).join(" ");
  const diaPath = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.dia}`).join(" ");

  const log: { time: string; sys: number; dia: number; status: "normal" | "elevated" | "critical" }[] = [
    { time: "06:00 AM", sys: 122, dia: 78, status: "normal" },
    { time: "08:30 AM", sys: 128, dia: 82, status: "normal" },
    { time: "10:00 AM", sys: 135, dia: 88, status: "elevated" },
    { time: "02:00 PM", sys: 142, dia: 92, status: "elevated" },
    { time: "04:00 PM", sys: 158, dia: 98, status: "critical" },
  ];

  const statusStyle = {
    normal:   { color: "#16A34A", bg: "#DCFCE7", label: "Normal" },
    elevated: { color: "#B45309", bg: "#FEF3C7", label: "Elevated" },
    critical: { color: "#DC2626", bg: "#FEE2E2", label: "High" },
  };

  return (
    <MobileFrame bg="#F4F7FB">
      <div style={{ height: 820, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Header */}
        <div style={{ padding: "16px 20px 12px", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, border: "1.5px solid #E2EAF4", background: "white", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(15,31,61,0.06)" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 6L8 10L12 14" stroke="#0F1F3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#0F1F3D", margin: 0, letterSpacing: "-0.01em" }}>Blood Pressure</h2>
            <p style={{ fontSize: 13, color: "#8BA3C0", margin: 0, fontWeight: 500 }}>mmHg · Today</p>
          </div>
        </div>

        <div style={{ flex: 1, overflow: "auto", padding: "0 16px 16px" }}>

          {/* Main reading card */}
          <div style={{
            background: "white",
            borderRadius: 24,
            padding: "20px",
            marginBottom: 14,
            boxShadow: "0 4px 16px rgba(15,31,61,0.08)",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: -30, right: -30, width: 140, height: 140, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 70%)" }} />

            {/* Icon + reading */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
              <div style={{ width: 60, height: 60, borderRadius: 18, background: "#FEF3C7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M15 4C10.58 4 7 7.58 7 12C7 17 11 20 15 20C19 20 23 17 23 12C23 7.58 19.42 4 15 4Z" fill="#F59E0B" opacity="0.25"/>
                  <path d="M15 8V13.5L18 15.5" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 20L4 26H26L24 20" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 23H26" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                  <span style={{ fontSize: 48, fontWeight: 900, color: "#0F1F3D", letterSpacing: "-0.04em", lineHeight: 1 }}>128</span>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "#F59E0B", lineHeight: 1.1 }}>SYS</span>
                    <div style={{ width: 18, height: 1.5, background: "#B0C4DE", margin: "3px 0" }} />
                    <span style={{ fontSize: 14, fontWeight: 700, color: "#1A6BCC", lineHeight: 1.1 }}>DIA</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <span style={{ fontSize: 22, fontWeight: 800, color: "#F59E0B", lineHeight: 1.1 }}>mmHg</span>
                    <div style={{ height: 8 }} />
                    <span style={{ fontSize: 22, fontWeight: 800, color: "#1A6BCC", lineHeight: 1.1 }}>82</span>
                  </div>
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FEF3C7", borderRadius: 10, padding: "4px 10px" }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#F59E0B" }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#B45309" }}>Stage 1 Elevated</span>
                </div>
              </div>
            </div>

            {/* 3-stat row */}
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { label: "Morning Avg", value: "125/80", color: "#22C55E", bg: "#DCFCE7" },
                { label: "Peak Today",  value: "158/98", color: "#DC2626", bg: "#FEE2E2" },
                { label: "7-Day Avg",   value: "131/84", color: "#F59E0B", bg: "#FEF3C7" },
              ].map((s, i) => (
                <div key={i} style={{ flex: 1, background: s.bg, borderRadius: 12, padding: "10px 8px", textAlign: "center" }}>
                  <p style={{ fontSize: 13, fontWeight: 800, color: s.color, margin: "0 0 2px", letterSpacing: "-0.01em" }}>{s.value}</p>
                  <p style={{ fontSize: 10, color: "#4A6080", margin: 0, fontWeight: 500 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chart */}
          <div style={{ background: "white", borderRadius: 20, padding: "16px", marginBottom: 14, boxShadow: "0 2px 8px rgba(15,31,61,0.06)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#0F1F3D" }}>Today's Trend</span>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                {[{ label: "Systolic", color: "#F59E0B" }, { label: "Diastolic", color: "#1A6BCC" }].map((l, i) => (
                  <div key={i} style={{ display: "flex", gap: 5, alignItems: "center" }}>
                    <div style={{ width: 12, height: 3, borderRadius: 2, background: l.color }} />
                    <span style={{ fontSize: 11, color: "#8BA3C0", fontWeight: 500 }}>{l.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: "0 4px" }}>
              <svg width="100%" height="90" viewBox="0 0 318 90" preserveAspectRatio="none" fill="none">
                <defs>
                  <linearGradient id="sysGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.18"/>
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                {/* Normal zone band */}
                <rect x="0" y="28" width="318" height="35" fill="#DCFCE7" opacity="0.4" rx="2"/>
                {/* Systolic fill */}
                <path d={`${sysPath} L ${pts[pts.length-1].x} 90 L 0 90 Z`} fill="url(#sysGrad)"/>
                {/* Lines */}
                <path d={sysPath} stroke="#F59E0B" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <path d={diaPath} stroke="#1A6BCC" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 3"/>
                {/* Points */}
                {pts.map((p, i) => {
                  const isCritical = p.r.sys >= 155;
                  return (
                    <g key={i}>
                      <circle cx={p.x} cy={p.sys} r={isCritical ? 5 : 3}
                        fill={isCritical ? "#EF4444" : "white"} stroke={isCritical ? "#EF4444" : "#F59E0B"} strokeWidth="2"/>
                      <circle cx={p.x} cy={p.dia} r={3} fill="white" stroke="#1A6BCC" strokeWidth="2"/>
                    </g>
                  );
                })}
                {/* Critical annotation */}
                <line x1={pts[5].x} y1="0" x2={pts[5].x} y2="90" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 3" opacity="0.6"/>
              </svg>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 5 }}>
                {readings.map((r, i) => (
                  <span key={i} style={{ fontSize: 10, color: "#8BA3C0", fontWeight: 500 }}>{r.time}</span>
                ))}
              </div>
            </div>
          </div>

          {/* BP Reference guide */}
          <div style={{ background: "white", borderRadius: 18, padding: "14px 16px", marginBottom: 14, boxShadow: "0 2px 8px rgba(15,31,61,0.06)" }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#0F1F3D", margin: "0 0 10px" }}>BP Classification</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {[
                { label: "Normal",         range: "< 120/80",   color: "#22C55E", bg: "#DCFCE7",  fill: 40  },
                { label: "Elevated",       range: "120–129/80", color: "#F59E0B", bg: "#FEF3C7",  fill: 60  },
                { label: "Stage 1 Hypert.", range: "130–139/80–89", color: "#F97316", bg: "#FFEDD5", fill: 75 },
                { label: "Stage 2 Hypert.", range: "≥ 140/90",  color: "#DC2626", bg: "#FEE2E2",  fill: 90  },
              ].map((row, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 2, background: row.color, flexShrink: 0 }} />
                  <div style={{ width: 100, flexShrink: 0 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#0F1F3D" }}>{row.label}</span>
                  </div>
                  <div style={{ flex: 1, height: 6, background: "#F4F7FB", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ width: `${row.fill}%`, height: "100%", background: row.color, borderRadius: 3, opacity: 0.7 }} />
                  </div>
                  <span style={{ fontSize: 11, color: "#8BA3C0", fontWeight: 500, flexShrink: 0, width: 80, textAlign: "right" }}>{row.range}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reading log */}
          <p style={{ fontSize: 11, fontWeight: 700, color: "#8BA3C0", margin: "0 0 8px", letterSpacing: "0.08em", textTransform: "uppercase" }}>TODAY'S LOG</p>
          <div style={{ background: "white", borderRadius: 18, overflow: "hidden", boxShadow: "0 2px 8px rgba(15,31,61,0.06)" }}>
            {log.map((entry, i) => {
              const s = statusStyle[entry.status];
              return (
                <div key={i} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "12px 16px",
                  borderBottom: i < log.length - 1 ? "1px solid #F4F7FB" : "none",
                  background: entry.status === "critical" ? "#FFFBFB" : "white",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: s.color }} />
                    <span style={{ fontSize: 13, color: "#0F1F3D", fontWeight: 600 }}>{entry.time}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontSize: 16, fontWeight: 800, color: "#F59E0B" }}>{entry.sys}</span>
                      <span style={{ fontSize: 13, color: "#B0C4DE", fontWeight: 500, margin: "0 3px" }}>/</span>
                      <span style={{ fontSize: 16, fontWeight: 800, color: "#1A6BCC" }}>{entry.dia}</span>
                      <span style={{ fontSize: 11, color: "#B0C4DE", marginLeft: 3 }}>mmHg</span>
                    </div>
                    <div style={{ padding: "3px 8px", borderRadius: 6, background: s.bg }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: s.color }}>{s.label}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <BottomNav active="home" />
      </div>
    </MobileFrame>
  );
}
