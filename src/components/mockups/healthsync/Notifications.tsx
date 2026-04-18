import "./_group.css";
import { MobileFrame, BottomNav } from "./_shared/MobileFrame";

type Severity = "critical" | "elevated" | "normal" | "info";

interface Alert {
  severity: Severity;
  title: string;
  body: string;
  meta: string;
  time: string;
  unread: boolean;
  action?: string;
}

const SEVERITY_STYLES: Record<Severity, { dot: string; left: string; bg: string; border: string; tag: string; tagText: string; tagLabel: string }> = {
  critical:  { dot: "#EF4444", left: "#EF4444", bg: "#FFFBFB", border: "#FECACA", tag: "#FEE2E2", tagText: "#DC2626", tagLabel: "Critical" },
  elevated:  { dot: "#F59E0B", left: "#F59E0B", bg: "#FFFDF5", border: "#FDE68A", tag: "#FEF3C7", tagText: "#B45309", tagLabel: "Elevated" },
  normal:    { dot: "#22C55E", left: "#22C55E", bg: "#FAFFFE", border: "#BBF7D0", tag: "#DCFCE7", tagText: "#16A34A", tagLabel: "Resolved" },
  info:      { dot: "#1A6BCC", left: "#1A6BCC", bg: "#FAFBFE", border: "#BFDBFE", tag: "#EBF3FF", tagText: "#1A6BCC", tagLabel: "Info" },
};

function AlertCard({ alert }: { alert: Alert }) {
  const s = SEVERITY_STYLES[alert.severity];
  return (
    <div style={{
      background: alert.unread ? s.bg : "white",
      border: `1.5px solid ${alert.unread ? s.border : "#E4EBF5"}`,
      borderRadius: 16,
      marginBottom: 10,
      position: "relative",
      overflow: "hidden",
      boxShadow: alert.unread ? "0 2px 12px rgba(15,31,61,0.07)" : "0 1px 4px rgba(15,31,61,0.04)",
    }}>
      {/* Severity bar */}
      {alert.unread && (
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3.5, background: s.left }} />
      )}

      <div style={{ padding: "13px 14px 13px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, flex: 1, marginRight: 8 }}>
            {alert.unread && (
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: s.dot, flexShrink: 0 }} />
            )}
            <span style={{ fontSize: 14, fontWeight: 700, color: "#0F1F3D", lineHeight: 1.3 }}>{alert.title}</span>
          </div>
          <div style={{ padding: "3px 8px", borderRadius: 6, background: s.tag, flexShrink: 0 }}>
            <span style={{ fontSize: 10, fontWeight: 800, color: s.tagText, letterSpacing: "0.03em" }}>{s.tagLabel}</span>
          </div>
        </div>

        <p style={{ fontSize: 13, color: "#4A6080", margin: "0 0 8px", lineHeight: 1.55, fontWeight: 400 }}>{alert.body}</p>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "#B0C4DE", fontWeight: 500 }}>{alert.meta} · {alert.time}</span>
          {alert.action && (
            <span style={{ fontSize: 12, color: "#1A6BCC", fontWeight: 700, cursor: "pointer" }}>{alert.action} →</span>
          )}
        </div>
      </div>
    </div>
  );
}

export function Notifications() {
  const alerts: Alert[] = [
    {
      severity: "critical",
      title: "High Blood Pressure Detected",
      body: "Reading of 158/98 mmHg exceeds your critical threshold. Please rest and remeasure in 10 minutes.",
      meta: "3:45 PM",
      time: "2 min ago",
      unread: true,
      action: "Log note",
    },
    {
      severity: "elevated",
      title: "BP Readings Trending Up",
      body: "3 consecutive readings above 140/90 this afternoon. Consider contacting your doctor.",
      meta: "Multiple readings",
      time: "1 hr ago",
      unread: true,
      action: "View history",
    },
    {
      severity: "normal",
      title: "Heart Rate Back to Normal",
      body: "Your resting heart rate returned to 72 bpm after the elevated reading this morning.",
      meta: "72 bpm",
      time: "3 hr ago",
      unread: false,
    },
    {
      severity: "info",
      title: "AI Recommendation Ready",
      body: "Based on today's data: reduce sodium, hydrate well, and consider a short evening walk.",
      meta: "AI Analysis",
      time: "5 hr ago",
      unread: false,
      action: "Read more",
    },
    {
      severity: "info",
      title: "Weekly Health Report",
      body: "Your summary for this week is ready. Overall trend: stable with minor BP concerns.",
      meta: "Weekly report",
      time: "Yesterday",
      unread: false,
      action: "View report",
    },
  ];

  return (
    <MobileFrame bg="#F2F6FC">
      <div style={{ height: 820, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Header */}
        <div style={{ padding: "16px 20px 0", background: "#F2F6FC" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0F1F3D", margin: "0 0 2px", letterSpacing: "-0.03em" }}>Alerts</h2>
              <p style={{ fontSize: 13, color: "#8BA3C0", margin: 0, fontWeight: 500 }}>
                <span style={{ color: "#EF4444", fontWeight: 700 }}>2 unread</span> · updated now
              </p>
            </div>
            <button style={{ background: "none", border: "none", fontSize: 13, color: "#8BA3C0", fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
              Mark all read
            </button>
          </div>

          {/* Filter pills */}
          <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 14 }}>
            {["All", "Critical", "Elevated", "Info"].map((t, i) => (
              <div key={i} style={{
                padding: "7px 16px",
                borderRadius: 24,
                background: i === 0 ? "#0F2A5C" : "white",
                border: `1.5px solid ${i === 0 ? "#0F2A5C" : "#E4EBF5"}`,
                fontSize: 12,
                fontWeight: 700,
                color: i === 0 ? "white" : "#4A6080",
                cursor: "pointer",
                flexShrink: 0,
                boxShadow: i !== 0 ? "0 1px 3px rgba(15,31,61,0.04)" : "none",
              }}>
                {t}
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, overflow: "auto", padding: "6px 16px 8px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "#B0C4DE", margin: "0 0 10px", letterSpacing: "0.08em", textTransform: "uppercase" }}>TODAY</p>
          {alerts.slice(0, 4).map((a, i) => <AlertCard key={i} alert={a} />)}

          <p style={{ fontSize: 11, fontWeight: 700, color: "#B0C4DE", margin: "16px 0 10px", letterSpacing: "0.08em", textTransform: "uppercase" }}>YESTERDAY</p>
          {alerts.slice(4).map((a, i) => <AlertCard key={i} alert={a} />)}
        </div>

        <BottomNav active="notifs" />
      </div>
    </MobileFrame>
  );
}
