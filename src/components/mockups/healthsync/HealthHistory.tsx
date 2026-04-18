import "./_group.css";
import { MobileFrame, BottomNav } from "./_shared/MobileFrame";

export function HealthHistory() {
  const readings = [
    { date: "Today", time: "08:30 AM", bp: "128/82", hr: "72", spo2: "98%", glucose: "96", status: "normal" },
    { date: "Today", time: "12:15 PM", bp: "135/88", hr: "78", spo2: "97%", glucose: "112", status: "elevated" },
    { date: "Today", time: "03:45 PM", bp: "158/98", hr: "88", spo2: "96%", glucose: "104", status: "critical" },
    { date: "Yesterday", time: "08:20 AM", bp: "126/80", hr: "70", spo2: "98%", glucose: "94", status: "normal" },
    { date: "Yesterday", time: "08:50 PM", bp: "132/85", hr: "74", spo2: "97%", glucose: "108", status: "elevated" },
  ];

  const statusColors: Record<string, { color: string; bg: string; label: string }> = {
    normal: { color: "#16A34A", bg: "#DCFCE7", label: "Normal" },
    elevated: { color: "#B45309", bg: "#FEF3C7", label: "Elevated" },
    critical: { color: "#DC2626", bg: "#FEE2E2", label: "High" },
  };

  return (
    <MobileFrame bg="#F4F7FB">
      <div style={{ height: 820, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Header */}
        <div style={{ padding: "16px 20px 12px", background: "white", borderBottom: "1px solid #E2EAF4" }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0F1F3D", margin: "0 0 4px", letterSpacing: "-0.02em" }}>Health History</h2>
          <p style={{ fontSize: 13, color: "#8BA3C0", margin: "0 0 12px", fontWeight: 500 }}>All your recorded readings</p>

          {/* Filter row */}
          <div style={{ display: "flex", gap: 8 }}>
            {["7 Days", "30 Days", "3 Months", "All"].map((t, i) => (
              <div key={i} style={{
                padding: "7px 14px",
                borderRadius: 20,
                background: i === 0 ? "#1A6BCC" : "#F4F7FB",
                border: `1px solid ${i === 0 ? "#1A6BCC" : "#E2EAF4"}`,
                fontSize: 12,
                fontWeight: 600,
                color: i === 0 ? "white" : "#4A6080",
                cursor: "pointer",
              }}>
                {t}
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, overflow: "auto", padding: "12px 16px" }}>
          {/* Summary strip */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 10,
            marginBottom: 16,
          }}>
            {[
              { label: "Avg BP", value: "130/83", color: "#F59E0B" },
              { label: "Avg HR", value: "76 bpm", color: "#EF4444" },
              { label: "Avg SpO₂", value: "97.4%", color: "#0DC9B1" },
            ].map((stat, i) => (
              <div key={i} style={{
                background: "white",
                borderRadius: 14,
                padding: "12px 10px",
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(15,31,61,0.06)",
              }}>
                <p style={{ fontSize: 16, fontWeight: 800, color: stat.color, margin: "0 0 3px" }}>{stat.value}</p>
                <p style={{ fontSize: 11, color: "#8BA3C0", margin: 0, fontWeight: 500 }}>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Mini trend */}
          <div style={{
            background: "white",
            borderRadius: 18,
            padding: "16px",
            marginBottom: 16,
            boxShadow: "0 2px 8px rgba(15,31,61,0.06)",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#0F1F3D" }}>Blood Pressure Trend</span>
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  { label: "Systolic", color: "#1A6BCC" },
                  { label: "Diastolic", color: "#0DC9B1" },
                ].map((l, i) => (
                  <div key={i} style={{ display: "flex", gap: 4, alignItems: "center" }}>
                    <div style={{ width: 10, height: 3, borderRadius: 2, background: l.color }} />
                    <span style={{ fontSize: 11, color: "#8BA3C0", fontWeight: 500 }}>{l.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <svg width="100%" height="80" viewBox="0 0 340 80" preserveAspectRatio="none" fill="none">
              {/* Systolic */}
              <path d="M0 40 C40 35 80 45 120 28 C160 20 200 42 240 30 C280 18 320 35 340 25" stroke="#1A6BCC" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              {/* Diastolic */}
              <path d="M0 58 C40 55 80 60 120 50 C160 45 200 58 240 52 C280 46 320 55 340 50" stroke="#0DC9B1" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              {/* Alert zone */}
              <path d="M100 0 H140 V80 H100 Z" fill="#EF4444" opacity="0.05"/>
              <line x1="120" y1="0" x2="120" y2="80" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 3" opacity="0.5"/>
            </svg>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
              {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => (
                <span key={d} style={{ fontSize: 10, color: "#8BA3C0", fontWeight: 500 }}>{d}</span>
              ))}
            </div>
          </div>

          {/* Reading list */}
          <p style={{ fontSize: 13, fontWeight: 700, color: "#8BA3C0", margin: "0 0 10px", letterSpacing: "0.05em", textTransform: "uppercase" }}>READINGS LOG</p>

          {Object.entries(
            readings.reduce((acc: Record<string, typeof readings>, r) => {
              (acc[r.date] = acc[r.date] || []).push(r);
              return acc;
            }, {})
          ).map(([date, dayReadings]) => (
            <div key={date} style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#0F1F3D", margin: "0 0 8px" }}>{date}</p>
              {dayReadings.map((r, i) => {
                const s = statusColors[r.status];
                return (
                  <div key={i} style={{
                    background: "white",
                    borderRadius: 14,
                    padding: "12px 14px",
                    marginBottom: 8,
                    boxShadow: "0 1px 4px rgba(15,31,61,0.06)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: `1px solid ${r.status === "critical" ? "#FECACA" : "#E2EAF4"}`,
                  }}>
                    <div>
                      <div style={{ fontSize: 12, color: "#8BA3C0", fontWeight: 500, marginBottom: 4 }}>{r.time}</div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 20px" }}>
                        <div>
                          <span style={{ fontSize: 11, color: "#8BA3C0", fontWeight: 500 }}>BP </span>
                          <span style={{ fontSize: 14, fontWeight: 700, color: "#0F1F3D" }}>{r.bp}</span>
                          <span style={{ fontSize: 11, color: "#8BA3C0" }}> mmHg</span>
                        </div>
                        <div>
                          <span style={{ fontSize: 11, color: "#8BA3C0", fontWeight: 500 }}>HR </span>
                          <span style={{ fontSize: 14, fontWeight: 700, color: "#0F1F3D" }}>{r.hr}</span>
                          <span style={{ fontSize: 11, color: "#8BA3C0" }}> bpm</span>
                        </div>
                        <div>
                          <span style={{ fontSize: 11, color: "#8BA3C0", fontWeight: 500 }}>SpO₂ </span>
                          <span style={{ fontSize: 14, fontWeight: 700, color: "#0F1F3D" }}>{r.spo2}</span>
                        </div>
                        <div>
                          <span style={{ fontSize: 11, color: "#8BA3C0", fontWeight: 500 }}>Glc </span>
                          <span style={{ fontSize: 14, fontWeight: 700, color: "#0F1F3D" }}>{r.glucose}</span>
                          <span style={{ fontSize: 11, color: "#8BA3C0" }}> mg/dL</span>
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: "5px 10px", borderRadius: 8, background: s.bg }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: s.color }}>{s.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <BottomNav active="history" />
      </div>
    </MobileFrame>
  );
}
