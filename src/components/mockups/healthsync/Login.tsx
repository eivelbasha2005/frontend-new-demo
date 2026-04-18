import "./_group.css";
import { MobileFrame } from "./_shared/MobileFrame";

export function Login() {
  return (
    <MobileFrame bg="#FAFBFE">
      <div style={{ height: 820, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>

        {/* Top decorative block — asymmetric, not a generic gradient header */}
        <div style={{ position: "relative", height: 280, flexShrink: 0 }}>
          {/* Large offset circle */}
          <div style={{
            position: "absolute",
            top: -90,
            left: -80,
            width: 340,
            height: 340,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #1A6BCC 0%, #0D4FA8 100%)",
          }} />
          {/* Small accent circle */}
          <div style={{
            position: "absolute",
            top: 30,
            right: -20,
            width: 130,
            height: 130,
            borderRadius: "50%",
            background: "#0DC9B1",
            opacity: 0.18,
          }} />
          {/* Brand mark */}
          <div style={{
            position: "absolute",
            top: 56,
            left: 32,
            zIndex: 2,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10H9V6H11V10H15" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 3C6.134 3 3 6.134 3 10C3 13.866 6.134 17 10 17" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M14 14L17 17M14 17L17 14" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
                </svg>
              </div>
              <span style={{ color: "white", fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em" }}>HealthSync</span>
            </div>
            <h1 style={{
              color: "white",
              fontSize: 32,
              fontWeight: 800,
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}>
              Good to<br />see you again.
            </h1>
          </div>
        </div>

        {/* Form area */}
        <div style={{ flex: 1, padding: "0 24px 24px", display: "flex", flexDirection: "column" }}>

          {/* Email */}
          <div style={{ marginBottom: 14 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#8BA3C0", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 8px" }}>Email</p>
            <div style={{
              background: "white",
              border: "1.5px solid #E4EBF5",
              borderRadius: 14,
              padding: "0 16px",
              height: 52,
              display: "flex",
              alignItems: "center",
              gap: 10,
              boxShadow: "0 1px 4px rgba(15,31,61,0.04)",
            }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2.5 4.5H15.5C15.78 4.5 16 4.72 16 5V13C16 13.28 15.78 13.5 15.5 13.5H2.5C2.22 13.5 2 13.28 2 13V5C2 4.72 2.22 4.5 2.5 4.5Z" stroke="#B0C4DE" strokeWidth="1.4"/>
                <path d="M2 5.5L9 10L16 5.5" stroke="#B0C4DE" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              <input placeholder="your@email.com" style={{ border: "none", background: "transparent", fontSize: 15, color: "#0F1F3D", outline: "none", flex: 1, fontFamily: "inherit", fontWeight: 500 }} />
            </div>
          </div>

          {/* Password */}
          <div style={{ marginBottom: 10 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#8BA3C0", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 8px" }}>Password</p>
            <div style={{
              background: "#EBF3FF",
              border: "1.5px solid #C3DAFE",
              borderRadius: 14,
              padding: "0 16px",
              height: 52,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="3.5" y="8.5" width="11" height="8" rx="1.5" stroke="#1A6BCC" strokeWidth="1.4"/>
                <path d="M6 8.5V5.5C6 3.84 7.34 2.5 9 2.5C10.66 2.5 12 3.84 12 5.5V8.5" stroke="#1A6BCC" strokeWidth="1.4" strokeLinecap="round"/>
                <circle cx="9" cy="13" r="1.2" fill="#1A6BCC"/>
              </svg>
              <input type="password" placeholder="••••••••••" style={{ border: "none", background: "transparent", fontSize: 15, color: "#0F1F3D", outline: "none", flex: 1, fontFamily: "inherit", fontWeight: 500, letterSpacing: "0.12em" }} />
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <ellipse cx="9" cy="9" rx="7" ry="4.5" stroke="#B0C4DE" strokeWidth="1.4"/>
                <circle cx="9" cy="9" r="2.5" stroke="#B0C4DE" strokeWidth="1.4"/>
              </svg>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 28 }}>
            <span style={{ fontSize: 13, color: "#1A6BCC", fontWeight: 600, cursor: "pointer" }}>Forgot password?</span>
          </div>

          {/* Sign in button */}
          <button style={{
            width: "100%",
            height: 54,
            borderRadius: 16,
            border: "none",
            background: "#0F2A5C",
            color: "white",
            fontSize: 16,
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "-0.01em",
            marginBottom: 16,
            position: "relative",
            overflow: "hidden",
          }}>
            <span style={{ position: "relative", zIndex: 1 }}>Sign In</span>
            <div style={{
              position: "absolute",
              right: -10,
              top: -10,
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "rgba(13,201,177,0.15)",
            }} />
          </button>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ flex: 1, height: 1, background: "#E4EBF5" }} />
            <span style={{ fontSize: 12, color: "#B0C4DE", fontWeight: 600, letterSpacing: "0.04em" }}>OR</span>
            <div style={{ flex: 1, height: 1, background: "#E4EBF5" }} />
          </div>

          {/* Social row */}
          <div style={{ display: "flex", gap: 12, marginBottom: 28 }}>
            {[
              {
                label: "Google",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M16.5 9.18c0-.6-.05-1.17-.15-1.73H9v3.28h4.19a3.58 3.58 0 01-1.56 2.35v1.95h2.52c1.48-1.36 2.35-3.37 2.35-5.85z" fill="#4285F4"/>
                    <path d="M9 17c2.1 0 3.86-.7 5.14-1.88l-2.52-1.95c-.7.47-1.59.74-2.62.74-2.02 0-3.73-1.36-4.34-3.2H2.07v2.01A8 8 0 009 17z" fill="#34A853"/>
                    <path d="M4.66 10.71A4.83 4.83 0 014.39 9c0-.59.1-1.17.27-1.71V5.28H2.07A8.01 8.01 0 001 9c0 1.3.31 2.52.86 3.6l2.8-1.89z" fill="#FBBC05"/>
                    <path d="M9 3.75c1.14 0 2.16.39 2.97 1.16l2.22-2.22A7.96 7.96 0 009 1a8 8 0 00-6.93 4.01l2.8 2.19C5.27 5.11 6.98 3.75 9 3.75z" fill="#EA4335"/>
                  </svg>
                )
              },
              {
                label: "Apple ID",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M13 1.2C12.3 1.9 11.5 3.2 11.5 4.8c1.7.1 2.9-1.1 3.4-2.5C14.3 1.9 13.6 1.2 13 1.2z" fill="#0F1F3D"/>
                    <path d="M14.5 5.5c-1.5 0-2.3.9-3.3.9-1.1 0-2-.9-3.3-.9C5.7 5.5 3 7.5 3 11.5c0 3.5 2.5 6 4.2 6 1.1 0 1.9-.8 3-.8 1.2 0 2 .8 3.2.8C15 17.5 17 14.8 17 11.5c0-4-2.3-6-2.5-6z" fill="#0F1F3D"/>
                  </svg>
                )
              },
            ].map((s, i) => (
              <button key={i} style={{
                flex: 1,
                height: 48,
                borderRadius: 12,
                border: "1.5px solid #E4EBF5",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 600,
                color: "#0F1F3D",
                boxShadow: "0 1px 4px rgba(15,31,61,0.04)",
              }}>
                {s.icon}
                {s.label}
              </button>
            ))}
          </div>

          <p style={{ textAlign: "center", fontSize: 14, color: "#8BA3C0", margin: 0, fontWeight: 500 }}>
            New to HealthSync?{" "}
            <span style={{ color: "#1A6BCC", fontWeight: 700, cursor: "pointer" }}>Create account</span>
          </p>
        </div>
      </div>
    </MobileFrame>
  );
}
