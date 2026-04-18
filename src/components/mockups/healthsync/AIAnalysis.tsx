import "./_group.css";
import { MobileFrame, BottomNav } from "./_shared/MobileFrame";

export function AIAnalysis() {
  return (
    <MobileFrame bg="#F4F7FB">
      <div style={{ height: 820, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Header */}
        <div style={{
          background: "linear-gradient(160deg, #0F2A5C 0%, #1A6BCC 100%)",
          padding: "12px 20px 28px",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -30, right: -20, width: 130, height: 130, borderRadius: "50%", background: "rgba(13,201,177,0.2)" }} />
          <div style={{ position: "absolute", bottom: -40, left: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 1 }}>
            <div>
              <h2 style={{ color: "white", fontSize: 20, fontWeight: 800, margin: "0 0 2px", letterSpacing: "-0.01em" }}>AI Health Analysis</h2>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, margin: 0, fontWeight: 500 }}>Personalized · Updated today</p>
            </div>
            <div style={{
              width: 44,
              height: 44,
              borderRadius: 14,
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L13.5 8.5H20L14.5 12.5L16.5 19L12 15.5L7.5 19L9.5 12.5L4 8.5H10.5L12 2Z" fill="white" opacity="0.7"/>
                <circle cx="12" cy="12" r="2.5" fill="white"/>
              </svg>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, overflow: "auto", padding: "0 16px 16px" }}>
          {/* Overall score */}
          <div style={{
            background: "white",
            borderRadius: 20,
            padding: "20px",
            marginTop: -10,
            boxShadow: "0 4px 16px rgba(15,31,61,0.10)",
            marginBottom: 16,
            display: "flex",
            gap: 16,
            alignItems: "center",
          }}>
            <div style={{ position: "relative", width: 88, height: 88, flexShrink: 0 }}>
              <svg width="88" height="88" viewBox="0 0 88 88">
                <circle cx="44" cy="44" r="38" fill="none" stroke="#F4F7FB" strokeWidth="10"/>
                <circle cx="44" cy="44" r="38" fill="none" stroke="#1A6BCC" strokeWidth="10"
                  strokeDasharray={`${0.78 * 2 * Math.PI * 38} ${2 * Math.PI * 38}`}
                  strokeDashoffset={2 * Math.PI * 38 * 0.25}
                  strokeLinecap="round"
                  transform="rotate(-90 44 44)"/>
              </svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 22, fontWeight: 800, color: "#0F1F3D" }}>78</span>
                <span style={{ fontSize: 10, color: "#8BA3C0", fontWeight: 500 }}>/100</span>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0F1F3D", margin: "0 0 6px" }}>Health Score: Good</h3>
              <p style={{ fontSize: 13, color: "#4A6080", margin: "0 0 10px", lineHeight: 1.5 }}>
                Your overall health is trending positively. Blood pressure needs attention.
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ padding: "4px 10px", borderRadius: 8, background: "#FEF3C7", fontSize: 11, fontWeight: 700, color: "#B45309" }}>Needs Attention</div>
                <div style={{ padding: "4px 10px", borderRadius: 8, background: "#DCFCE7", fontSize: 11, fontWeight: 700, color: "#16A34A" }}>Improving</div>
              </div>
            </div>
          </div>

          {/* Analysis cards */}
          <p style={{ fontSize: 13, fontWeight: 700, color: "#8BA3C0", margin: "0 0 10px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            DETAILED ANALYSIS
          </p>

          {[
            {
              title: "Cardiovascular Risk",
              level: "Moderate",
              levelColor: "#F59E0B",
              levelBg: "#FEF3C7",
              icon: (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M5 8C5 5.24 6.5 4 8 4C9.3 4 10.2 4.7 11 5.8C11.8 4.7 12.7 4 14 4C15.5 4 17 5.24 17 8C17 12.5 11 16 11 16C11 16 5 12.5 5 8Z" fill="#F59E0B" opacity="0.8"/>
                  <path d="M3.5 10H6.5L8.5 7L10.5 13L12.5 9L14 10H18.5" stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              pct: 55,
              pctColor: "#F59E0B",
              insights: ["BP readings elevated 40% of this week", "Heart rate variability is good", "Consider daily 20-min walks"],
            },
            {
              title: "Metabolic Health",
              level: "Stable",
              levelColor: "#22C55E",
              levelBg: "#DCFCE7",
              icon: (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="#22C55E" strokeWidth="1.6"/>
                  <path d="M8 11H11V8" stroke="#22C55E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 13.5L11 11" stroke="#22C55E" strokeWidth="1.6" strokeLinecap="round"/>
                  <circle cx="15" cy="5.5" r="2.5" fill="#22C55E" opacity="0.4"/>
                  <path d="M14 4L16 7" stroke="#22C55E" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              ),
              pct: 78,
              pctColor: "#22C55E",
              insights: ["Blood glucose within target range", "HbA1c estimated at 6.8% (good)", "Morning readings most stable"],
            },
            {
              title: "Respiratory Status",
              level: "Excellent",
              levelColor: "#0DC9B1",
              levelBg: "#E6FAF8",
              icon: (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 4V11M11 4C11 4 8 3 6.5 5C5 7 6 10 8 10.5M11 4C11 4 14 3 15.5 5C17 7 16 10 14 10.5" stroke="#0DC9B1" strokeWidth="1.6" strokeLinecap="round"/>
                  <path d="M8 10.5C8 10.5 6 11 5.5 13C5 15 6.5 17 8.5 17C9.5 17 10.5 16.5 11 16M14 10.5C14 10.5 16 11 16.5 13C17 15 15.5 17 13.5 17C12.5 17 11.5 16.5 11 16" stroke="#0DC9B1" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              ),
              pct: 96,
              pctColor: "#0DC9B1",
              insights: ["SpO₂ consistently above 96%", "No concerning patterns detected", "Breathing quality is excellent"],
            },
          ].map((card, i) => (
            <div key={i} style={{
              background: "white",
              borderRadius: 18,
              padding: "16px",
              marginBottom: 12,
              boxShadow: "0 2px 8px rgba(15,31,61,0.06)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: card.levelBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {card.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 700, color: "#0F1F3D", margin: 0 }}>{card.title}</p>
                    <div style={{ display: "inline-block", padding: "2px 8px", borderRadius: 6, background: card.levelBg, marginTop: 4 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: card.levelColor }}>{card.level}</span>
                    </div>
                  </div>
                </div>
                <span style={{ fontSize: 24, fontWeight: 800, color: card.levelColor }}>{card.pct}%</span>
              </div>

              {/* Progress bar */}
              <div style={{ height: 6, background: "#F4F7FB", borderRadius: 3, marginBottom: 12, overflow: "hidden" }}>
                <div style={{ width: `${card.pct}%`, height: "100%", background: card.pctColor, borderRadius: 3 }} />
              </div>

              {/* Insights */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {card.insights.map((insight, ii) => (
                  <div key={ii} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: card.pctColor, marginTop: 5, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "#4A6080", fontWeight: 500, lineHeight: 1.5 }}>{insight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Recommendation */}
          <div style={{
            background: "linear-gradient(135deg, #0F2A5C 0%, #1A6BCC 100%)",
            borderRadius: 18,
            padding: "18px",
            position: "relative",
            overflow: "hidden",
            marginBottom: 8,
          }}>
            <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: "rgba(13,201,177,0.2)" }} />
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, fontWeight: 600, margin: "0 0 8px", letterSpacing: "0.05em", textTransform: "uppercase", position: "relative", zIndex: 1 }}>TODAY'S TOP RECOMMENDATION</p>
            <p style={{ color: "white", fontSize: 15, fontWeight: 700, margin: "0 0 6px", position: "relative", zIndex: 1 }}>Monitor your blood pressure twice today</p>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, margin: 0, lineHeight: 1.5, position: "relative", zIndex: 1 }}>
              Measure once in the morning after waking and once before bed for the most accurate picture.
            </p>
          </div>

          <p style={{ fontSize: 12, color: "#8BA3C0", margin: "12px 0 0", lineHeight: 1.5, textAlign: "center" }}>
            HealthSync AI provides supportive insights, not medical diagnosis. Always consult your doctor.
          </p>
        </div>

        <BottomNav active="home" />
      </div>
    </MobileFrame>
  );
}
