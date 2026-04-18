import "./_group.css";
import { MobileFrame, BottomNav } from "./_shared/MobileFrame";

export function VitalHeartRate() {
  const readings = [
    { time: "06:00", value: 68 },
    { time: "08:00", value: 72 },
    { time: "10:00", value: 88 },
    { time: "12:00", value: 76 },
    { time: "14:00", value: 80 },
    { time: "16:00", value: 72 },
    { time: "18:00", value: 70 },
    { time: "Now", value: 72 },
  ];

  const min = 55, max = 100;
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
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#0F1F3D", margin: 0, letterSpacing: "-0.01em" }}>Heart Rate</h2>
            <p style={{ fontSize: 13, color: "#8BA3C0", margin: 0, fontWeight: 500 }}>BPM · Today</p>
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
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: -30, right: -30, width: 140, height: 140, borderRadius: "50%", background: "radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 70%)" }} />

            {/* ECG animation strip */}
            <div style={{ marginBottom: 20 }}>
              <svg width="100%" height="44" viewBox="0 0 340 44" preserveAspectRatio="none" fill="none">
                <path d="M0 22 H80 L90 5 L100 40 L110 10 L120 35 L130 22 H180 L190 5 L200 40 L210 10 L220 35 L230 22 H340"
                  stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="220" cy="35" r="4" fill="#EF4444"/>
              </svg>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 16 }}>
              <div style={{
                width: 64,
                height: 64,
                borderRadius: 20,
                background: "#FEE2E2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M8 12C8 7.582 10.5 6 13 6C15.1 6 16.4 7 18 8.8C19.6 7 20.9 6 23 6C25.5 6 28 7.582 28 12C28 19 18 24 18 24C18 24 8 19 8 12Z" fill="#EF4444"/>
                  <path d="M5 17H10L13 13L16 22L19 15L21 17H27" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                  <span style={{ fontSize: 56, fontWeight: 900, color: "#0F1F3D", letterSpacing: "-0.04em", lineHeight: 1 }}>72</span>
                  <span style={{ fontSize: 20, color: "#EF4444", fontWeight: 700, alignSelf: "flex-end" }}>bpm</span>
                </div>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "#DCFCE7",
                  borderRadius: 12,
                  padding: "5px 12px",
                  marginTop: 6,
                }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E" }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#16A34A" }}>Normal Range</span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              {[
                { label: "Resting", value: "68 bpm", color: "#22C55E", bg: "#DCFCE7" },
                { label: "Peak Today", value: "88 bpm", color: "#F59E0B", bg: "#FEF3C7" },
                { label: "Avg 7 Days", value: "74 bpm", color: "#1A6BCC", bg: "#EBF3FF" },
              ].map((s, i) => (
                <div key={i} style={{ flex: 1, background: s.bg, borderRadius: 12, padding: "10px 8px", textAlign: "center" }}>
                  <p style={{ fontSize: 15, fontWeight: 800, color: s.color, margin: "0 0 2px" }}>{s.value}</p>
                  <p style={{ fontSize: 11, color: "#4A6080", margin: 0, fontWeight: 500 }}>{s.label}</p>
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
                  <div key={i} style={{ width: 32, height: 26, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: i === 0 ? "#FEE2E2" : "#F4F7FB", border: `1px solid ${i === 0 ? "#FECACA" : "#E2EAF4"}`, fontSize: 12, fontWeight: 700, color: i === 0 ? "#EF4444" : "#8BA3C0", cursor: "pointer" }}>
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", padding: "0 10px" }}>
              <svg width="100%" height="90" viewBox="0 0 310 90" preserveAspectRatio="none" fill="none">
                <defs>
                  <linearGradient id="hrGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#EF4444" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="#EF4444" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                {/* Normal zone */}
                <rect x="0" y="15" width="310" height="50" fill="#FEE2E2" rx="4" opacity="0.3"/>
                <path d={`${pathD} L 300 90 L 0 90 Z`} fill="url(#hrGrad)"/>
                <path d={pathD} stroke="#EF4444" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                {pts.map((p, i) => (
                  <circle key={i} cx={p.x} cy={p.y} r={i === 2 ? 5 : i === pts.length - 1 ? 5 : 3}
                    fill={i === 2 ? "#F59E0B" : i === pts.length - 1 ? "#EF4444" : "white"}
                    stroke={i === 2 ? "#F59E0B" : "#EF4444"} strokeWidth="2"/>
                ))}
              </svg>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                {readings.map((r, i) => (
                  <span key={i} style={{ fontSize: 10, color: "#8BA3C0", fontWeight: 500 }}>{r.time}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Info */}
          <div style={{ background: "#FEE2E2", borderRadius: 16, padding: "14px 16px", border: "1px solid #FECACA", marginBottom: 8 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#DC2626", margin: "0 0 4px" }}>Peak Alert – 10:00 AM</p>
            <p style={{ fontSize: 13, color: "#7F1D1D", margin: 0, lineHeight: 1.5 }}>
              Heart rate reached 88 bpm, slightly above your personal normal. This may be due to activity or stress.
            </p>
          </div>

          <div style={{ background: "#EBF3FF", borderRadius: 16, padding: "14px 16px", border: "1px solid #BFDBFE" }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#1A6BCC", margin: "0 0 4px" }}>About Heart Rate</p>
            <p style={{ fontSize: 13, color: "#4A6080", margin: 0, lineHeight: 1.5 }}>
              Normal resting heart rate is 60–100 bpm. Values above 100 (tachycardia) or below 60 (bradycardia) should be monitored.
            </p>
          </div>
        </div>

        <BottomNav active="home" />
      </div>
    </MobileFrame>
  );
}
