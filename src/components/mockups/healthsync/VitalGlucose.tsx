import "./_group.css";
import { MobileFrame, BottomNav } from "./_shared/MobileFrame";

export function VitalGlucose() {
  const readings = [
    { time: "06:00", value: 94, label: "Fasting" },
    { time: "07:30", value: 96, label: "Pre-meal" },
    { time: "09:30", value: 142, label: "Post-meal" },
    { time: "12:00", value: 104, label: "Pre-meal" },
    { time: "14:00", value: 156, label: "Post-meal" },
    { time: "17:00", value: 98, label: "Pre-meal" },
    { time: "19:00", value: 132, label: "Post-meal" },
    { time: "Now",   value: 96, label: "Bedtime" },
  ];

  const min = 70, max = 180;
  const pts = readings.map((r, i) => ({
    x: i * (310 / (readings.length - 1)),
    y: 80 - ((r.value - min) / (max - min)) * 70 + 5,
    r,
  }));
  const pathD = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

  // Target zone y positions (70–140 mg/dL)
  const targetTop = 80 - ((140 - min) / (max - min)) * 70 + 5;
  const targetBot = 80 - ((70 - min) / (max - min)) * 70 + 5;

  const log = readings.slice().reverse();

  function getStatus(v: number): { color: string; bg: string; label: string } {
    if (v < 70)  return { color: "#DC2626", bg: "#FEE2E2", label: "Low" };
    if (v <= 99)  return { color: "#16A34A", bg: "#DCFCE7", label: "Normal" };
    if (v <= 140) return { color: "#B45309", bg: "#FEF3C7", label: "Elevated" };
    return { color: "#DC2626", bg: "#FEE2E2", label: "High" };
  }

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
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#0F1F3D", margin: 0, letterSpacing: "-0.01em" }}>Blood Glucose</h2>
            <p style={{ fontSize: 13, color: "#8BA3C0", margin: 0, fontWeight: 500 }}>mg/dL · Today</p>
          </div>
        </div>

        <div style={{ flex: 1, overflow: "auto", padding: "0 16px 16px" }}>

          {/* Main card */}
          <div style={{
            background: "white",
            borderRadius: 24,
            padding: "20px",
            marginBottom: 14,
            boxShadow: "0 4px 16px rgba(15,31,61,0.08)",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: -30, right: -30, width: 140, height: 140, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" }} />

            <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
              {/* Glucose drop icon */}
              <div style={{ width: 60, height: 60, borderRadius: 18, background: "#DBEAFE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M15 5C15 5 7 14 7 19C7 23.42 10.58 27 15 27C19.42 27 23 23.42 23 19C23 14 15 5 15 5Z" fill="#3B82F6" opacity="0.25" stroke="#3B82F6" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M10 20C10.5 22.5 12.5 24 15 24" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M18 12H22M20 10V14" stroke="#3B82F6" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 6 }}>
                  <span style={{ fontSize: 52, fontWeight: 900, color: "#0F1F3D", letterSpacing: "-0.04em", lineHeight: 1 }}>96</span>
                  <span style={{ fontSize: 16, color: "#3B82F6", fontWeight: 700, alignSelf: "flex-end", marginBottom: 4 }}>mg/dL</span>
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#DCFCE7", borderRadius: 10, padding: "4px 10px" }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E" }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#16A34A" }}>Within Target</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { label: "Fasting",    value: "94",  color: "#22C55E", bg: "#DCFCE7" },
                { label: "Peak Today", value: "156", color: "#DC2626", bg: "#FEE2E2" },
                { label: "Daily Avg",  value: "115", color: "#3B82F6", bg: "#DBEAFE" },
              ].map((s, i) => (
                <div key={i} style={{ flex: 1, background: s.bg, borderRadius: 12, padding: "10px 8px", textAlign: "center" }}>
                  <p style={{ fontSize: 16, fontWeight: 800, color: s.color, margin: "0 0 2px", letterSpacing: "-0.02em" }}>{s.value}</p>
                  <p style={{ fontSize: 10, color: "#4A6080", margin: 0, fontWeight: 500 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trend chart */}
          <div style={{ background: "white", borderRadius: 20, padding: "16px", marginBottom: 14, boxShadow: "0 2px 8px rgba(15,31,61,0.06)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#0F1F3D" }}>Today's Pattern</span>
              <div style={{ display: "flex", gap: 6 }}>
                {["D","W","M"].map((p, i) => (
                  <div key={i} style={{ width: 30, height: 24, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", background: i === 0 ? "#DBEAFE" : "#F4F7FB", border: `1px solid ${i === 0 ? "#BFDBFE" : "#E2EAF4"}`, fontSize: 11, fontWeight: 700, color: i === 0 ? "#3B82F6" : "#8BA3C0", cursor: "pointer" }}>
                    {p}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: "0 4px", position: "relative" }}>
              <svg width="100%" height="90" viewBox="0 0 318 90" preserveAspectRatio="none" fill="none">
                <defs>
                  <linearGradient id="glcGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.18"/>
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                {/* Target zone */}
                <rect x="0" y={targetTop} width="318" height={targetBot - targetTop} fill="#DCFCE7" opacity="0.5" rx="2"/>
                <line x1="0" y1={targetTop} x2="318" y2={targetTop} stroke="#22C55E" strokeWidth="1" strokeDasharray="5 3" opacity="0.5"/>
                <line x1="0" y1={targetBot} x2="318" y2={targetBot} stroke="#22C55E" strokeWidth="1" strokeDasharray="5 3" opacity="0.5"/>
                {/* Fill */}
                <path d={`${pathD} L ${pts[pts.length-1].x} 90 L 0 90 Z`} fill="url(#glcGrad)"/>
                {/* Line */}
                <path d={pathD} stroke="#3B82F6" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Points */}
                {pts.map((p, i) => {
                  const s = getStatus(p.r.value);
                  const isHigh = p.r.value > 140;
                  return (
                    <circle key={i} cx={p.x} cy={p.y} r={isHigh ? 5 : 3}
                      fill={isHigh ? s.color : "white"} stroke={isHigh ? s.color : "#3B82F6"} strokeWidth="2"/>
                  );
                })}
              </svg>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 5 }}>
                {readings.map((r, i) => (
                  <span key={i} style={{ fontSize: 10, color: "#8BA3C0", fontWeight: 500 }}>{r.time}</span>
                ))}
              </div>
            </div>

            {/* Target range label */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8 }}>
              <div style={{ width: 16, height: 3, borderRadius: 2, background: "#22C55E", opacity: 0.5 }} />
              <span style={{ fontSize: 11, color: "#8BA3C0", fontWeight: 500 }}>Target range: 70–140 mg/dL</span>
            </div>
          </div>

          {/* Reference table */}
          <div style={{ background: "white", borderRadius: 18, padding: "14px 16px", marginBottom: 14, boxShadow: "0 2px 8px rgba(15,31,61,0.06)" }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#0F1F3D", margin: "0 0 10px" }}>Glucose Reference Ranges</p>
            {[
              { label: "Low",            range: "< 70",       color: "#DC2626", bg: "#FEE2E2", note: "Hypoglycemia" },
              { label: "Fasting Normal", range: "70–99",      color: "#22C55E", bg: "#DCFCE7", note: "Target" },
              { label: "Pre-Diabetes",   range: "100–125",    color: "#F59E0B", bg: "#FEF3C7", note: "Monitor" },
              { label: "Diabetic",       range: "≥ 126",      color: "#DC2626", bg: "#FEE2E2", note: "Consult Doctor" },
              { label: "Post-meal OK",   range: "< 140",      color: "#3B82F6", bg: "#DBEAFE", note: "2 hrs after eating" },
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: i < 4 ? 8 : 0, marginBottom: i < 4 ? 8 : 0, borderBottom: i < 4 ? "1px solid #F4F7FB" : "none" }}>
                <div style={{ width: 40, padding: "3px 6px", borderRadius: 6, background: row.bg, textAlign: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: row.color }}>{row.label}</span>
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#0F1F3D", flex: 1 }}>{row.range} <span style={{ fontWeight: 400, color: "#8BA3C0" }}>mg/dL</span></span>
                <span style={{ fontSize: 11, color: "#8BA3C0", fontWeight: 500 }}>{row.note}</span>
              </div>
            ))}
          </div>

          {/* Log */}
          <p style={{ fontSize: 11, fontWeight: 700, color: "#8BA3C0", margin: "0 0 8px", letterSpacing: "0.08em", textTransform: "uppercase" }}>TODAY'S LOG</p>
          <div style={{ background: "white", borderRadius: 18, overflow: "hidden", boxShadow: "0 2px 8px rgba(15,31,61,0.06)" }}>
            {log.map((entry, i) => {
              const s = getStatus(entry.value);
              return (
                <div key={i} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "11px 16px",
                  borderBottom: i < log.length - 1 ? "1px solid #F4F7FB" : "none",
                  background: entry.value > 140 ? "#FFFBFB" : "white",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: s.color }} />
                    <div>
                      <span style={{ fontSize: 13, color: "#0F1F3D", fontWeight: 600 }}>{entry.time}</span>
                      <span style={{ fontSize: 11, color: "#B0C4DE", fontWeight: 500, marginLeft: 6 }}>{entry.label}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 17, fontWeight: 800, color: "#0F1F3D" }}>{entry.value}<span style={{ fontSize: 11, color: "#B0C4DE", fontWeight: 500, marginLeft: 2 }}>mg/dL</span></span>
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
