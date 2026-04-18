import "./_group.css";
import { MobileFrame, BottomNav } from "./_shared/MobileFrame";

export function VitalOxygen() {
  const readings = [
    { time: "06:00", value: 97 },
    { time: "08:00", value: 98 },
    { time: "10:00", value: 98 },
    { time: "12:00", value: 97 },
    { time: "14:00", value: 96 },
    { time: "16:00", value: 97 },
    { time: "18:00", value: 98 },
    { time: "Now", value: 98 },
  ];

  const min = 94, max = 100;
  const pts = readings.map((r, i) => ({
    x: i * (300 / (readings.length - 1)),
    y: 80 - ((r.value - min) / (max - min)) * 70 + 5,
    r,
  }));
  const pathD = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

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
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#0F1F3D", margin: 0, letterSpacing: "-0.01em" }}>Blood Oxygen</h2>
            <p style={{ fontSize: 13, color: "#8BA3C0", margin: 0, fontWeight: 500 }}>SpO₂ · Today</p>
          </div>
        </div>

        <div style={{ flex: 1, overflow: "auto", padding: "0 16px 16px" }}>
          {/* Main reading */}
          <div style={{
            background: "white",
            borderRadius: 24,
            padding: "24px",
            marginBottom: 16,
            boxShadow: "0 4px 16px rgba(15,31,61,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Background radial */}
            <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle, rgba(13,201,177,0.12) 0%, transparent 70%)" }} />

            {/* Circular gauge */}
            <div style={{ position: "relative", width: 160, height: 160, marginBottom: 16 }}>
              <svg width="160" height="160" viewBox="0 0 160 160">
                <circle cx="80" cy="80" r="68" fill="none" stroke="#F4F7FB" strokeWidth="14"/>
                <circle cx="80" cy="80" r="68" fill="none" stroke="#E6FAF8" strokeWidth="14"
                  strokeDasharray={`${2 * Math.PI * 68}`}
                  transform="rotate(-90 80 80)"/>
                <circle cx="80" cy="80" r="68" fill="none" stroke="#0DC9B1" strokeWidth="14"
                  strokeDasharray={`${(0.98) * 2 * Math.PI * 68} ${2 * Math.PI * 68}`}
                  strokeDashoffset={2 * Math.PI * 68 * 0}
                  strokeLinecap="round"
                  transform="rotate(-90 80 80)"/>
              </svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 44, fontWeight: 900, color: "#0F1F3D", letterSpacing: "-0.03em", lineHeight: 1 }}>98</span>
                <span style={{ fontSize: 18, color: "#0DC9B1", fontWeight: 700 }}>%</span>
                <span style={{ fontSize: 12, color: "#8BA3C0", fontWeight: 500, marginTop: 4 }}>SpO₂</span>
              </div>
            </div>

            {/* Status badge */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#DCFCE7",
              borderRadius: 20,
              padding: "8px 16px",
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E" }} />
              <span style={{ fontSize: 15, fontWeight: 700, color: "#16A34A" }}>Excellent · Normal Range</span>
            </div>

            {/* Stats row */}
            <div style={{ display: "flex", gap: 24, marginTop: 16 }}>
              {[{ label: "Min Today", value: "96%" }, { label: "Max Today", value: "99%" }, { label: "Avg 7 Days", value: "97.4%" }].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <p style={{ fontSize: 16, fontWeight: 800, color: "#0F1F3D", margin: "0 0 2px" }}>{s.value}</p>
                  <p style={{ fontSize: 11, color: "#8BA3C0", margin: 0, fontWeight: 500 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chart */}
          <div style={{ background: "white", borderRadius: 20, padding: "16px", marginBottom: 16, boxShadow: "0 2px 8px rgba(15,31,61,0.06)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#0F1F3D" }}>Today's Readings</span>
              <div style={{ display: "flex", gap: 6 }}>
                {["D","W","M"].map((p, i) => (
                  <div key={i} style={{ width: 32, height: 26, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: i === 0 ? "#EBF3FF" : "#F4F7FB", border: `1px solid ${i === 0 ? "#BFDBFE" : "#E2EAF4"}`, fontSize: 12, fontWeight: 700, color: i === 0 ? "#1A6BCC" : "#8BA3C0", cursor: "pointer" }}>
                    {p}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative", padding: "0 10px" }}>
              <svg width="100%" height="90" viewBox="0 0 310 90" preserveAspectRatio="none" fill="none">
                <defs>
                  <linearGradient id="o2Grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0DC9B1" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="#0DC9B1" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                {/* Normal range zone */}
                <rect x="0" y="8" width="310" height="55" fill="#E6FAF8" rx="4" opacity="0.5"/>
                <line x1="0" y1="8" x2="310" y2="8" stroke="#0DC9B1" strokeWidth="1" strokeDasharray="5 3" opacity="0.5"/>
                {/* Fill */}
                <path d={`${pathD} L 300 90 L 0 90 Z`} fill="url(#o2Grad)"/>
                {/* Line */}
                <path d={pathD} stroke="#0DC9B1" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Points */}
                {pts.map((p, i) => (
                  <circle key={i} cx={p.x} cy={p.y} r={i === pts.length - 1 ? 5 : 3} fill={i === pts.length - 1 ? "#0DC9B1" : "white"} stroke="#0DC9B1" strokeWidth="2"/>
                ))}
              </svg>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                {readings.map((r, i) => (
                  <span key={i} style={{ fontSize: 10, color: "#8BA3C0", fontWeight: 500 }}>{r.time}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Reading table */}
          <div style={{ background: "white", borderRadius: 18, overflow: "hidden", boxShadow: "0 2px 8px rgba(15,31,61,0.06)", marginBottom: 16 }}>
            <div style={{ padding: "14px 16px", borderBottom: "1px solid #F4F7FB" }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#0F1F3D" }}>Reading History</span>
            </div>
            {readings.slice(-5).reverse().map((r, i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 16px",
                borderBottom: i < 4 ? "1px solid #F4F7FB" : "none",
              }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: r.value >= 97 ? "#22C55E" : r.value >= 95 ? "#F59E0B" : "#EF4444" }} />
                  <span style={{ fontSize: 14, color: "#0F1F3D", fontWeight: 600 }}>{r.time}</span>
                </div>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ fontSize: 18, fontWeight: 800, color: "#0F1F3D" }}>{r.value}%</span>
                  <div style={{ padding: "3px 8px", borderRadius: 6, background: r.value >= 97 ? "#DCFCE7" : "#FEF3C7" }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: r.value >= 97 ? "#16A34A" : "#B45309" }}>
                      {r.value >= 97 ? "Normal" : "Low"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info card */}
          <div style={{ background: "#EBF3FF", borderRadius: 16, padding: "14px 16px", border: "1px solid #BFDBFE" }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#1A6BCC", margin: "0 0 4px" }}>About SpO₂</p>
            <p style={{ fontSize: 13, color: "#4A6080", margin: 0, lineHeight: 1.5 }}>
              Normal SpO₂ is 95–100%. Below 90% requires immediate medical attention. Readings can vary with movement or cold hands.
            </p>
          </div>
        </div>

        <BottomNav active="home" />
      </div>
    </MobileFrame>
  );
}
