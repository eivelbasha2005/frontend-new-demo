import "./_group.css";
import { MobileFrame } from "./_shared/MobileFrame";

function SelectBox({
  label,
  value,
  icon,
}: {
  label: string;
  value?: string;
  icon: React.ReactNode;
  options?: string[];
}) {
  return (
    <div style={{
      background: "white",
      border: "1.5px solid #E4EBF5",
      borderRadius: 13,
      padding: "0 14px",
      height: 50,
      display: "flex",
      alignItems: "center",
      gap: 10,
      boxShadow: "0 1px 3px rgba(15,31,61,0.04)",
      cursor: "pointer",
    }}>
      {icon}
      <span style={{ flex: 1, fontSize: 15, color: value ? "#0F1F3D" : "#B0C4DE", fontWeight: value ? 500 : 400, fontFamily: "inherit" }}>
        {value || label}
      </span>
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M3.5 5.5L7.5 9.5L11.5 5.5" stroke="#C4D4E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function DropdownOpen({ options, selected }: { options: string[]; selected: string }) {
  return (
    <div style={{
      background: "white",
      border: "1.5px solid #C3DAFE",
      borderTop: "none",
      borderRadius: "0 0 13px 13px",
      overflow: "hidden",
      boxShadow: "0 8px 18px rgba(15,31,61,0.10)",
    }}>
      {options.map((opt, i) => {
        const isSel = opt === selected;
        return (
          <div key={i} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "11px 14px",
            background: isSel ? "#EBF3FF" : "white",
            borderBottom: i < options.length - 1 ? "1px solid #F2F6FC" : "none",
            cursor: "pointer",
          }}>
            <span style={{ fontSize: 14, color: isSel ? "#1A6BCC" : "#0F1F3D", fontWeight: isSel ? 700 : 500 }}>{opt}</span>
            {isSel && (
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#1A6BCC", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5L4.5 8L9 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function DropdownTriggerOpen({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div style={{
      background: "#EBF3FF",
      border: "1.5px solid #C3DAFE",
      borderRadius: "13px 13px 0 0",
      padding: "0 14px",
      height: 50,
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer",
    }}>
      {icon}
      <span style={{ flex: 1, fontSize: 15, color: "#1A6BCC", fontWeight: 600, fontFamily: "inherit" }}>{value}</span>
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M11.5 9.5L7.5 5.5L3.5 9.5" stroke="#1A6BCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

export function SignupStep2() {
  return (
    <MobileFrame bg="#FAFBFE">
      <div style={{ height: 820, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Nav */}
        <div style={{ padding: "16px 24px 0", display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ width: 38, height: 38, borderRadius: 11, border: "1.5px solid #E4EBF5", background: "white", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 4px rgba(15,31,61,0.05)" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 5L7 9L11 13" stroke="#0F1F3D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ fontSize: 15, fontWeight: 700, color: "#0F1F3D" }}>Create Account</span>
        </div>

        {/* Step bar */}
        <div style={{ padding: "0 24px", marginBottom: 20 }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 6 }}>
            {[1, 2].map(s => (
              <div key={s} style={{ flex: 1, height: 3.5, borderRadius: 2, overflow: "hidden", background: "#E4EBF5" }}>
                <div style={{ height: "100%", background: "linear-gradient(90deg, #1A6BCC, #0DC9B1)", width: "100%" }} />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: 12, color: "#22C55E", fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="6" fill="#22C55E"/><path d="M3.5 6.5L5.5 8.5L9.5 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Step 1 done
            </span>
            <span style={{ fontSize: 12, color: "#1A6BCC", fontWeight: 700 }}>Step 2 — Health Info</span>
          </div>
        </div>

        <div style={{ flex: 1, overflow: "auto", padding: "0 24px 24px" }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0F1F3D", margin: "0 0 4px", letterSpacing: "-0.03em" }}>Health information</h2>
          <p style={{ fontSize: 13, color: "#8BA3C0", margin: "0 0 22px", fontWeight: 400 }}>Helps us personalize your monitoring and alerts</p>

          {/* Gender */}
          <div style={{ marginBottom: 14 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#8BA3C0", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 8px" }}>Gender</p>
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { label: "Male", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="6" cy="9" r="4" stroke="currentColor" strokeWidth="1.4"/><path d="M9 5L13 1M13 1H10M13 1V4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>, sel: true },
                { label: "Female", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="6" r="4" stroke="currentColor" strokeWidth="1.4"/><path d="M8 10V15M5.5 13H10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>, sel: false },
                { label: "Other", icon: null, sel: false },
              ].map((g, i) => (
                <button key={i} style={{
                  flex: 1, height: 50, borderRadius: 13, cursor: "pointer", fontFamily: "inherit",
                  border: `1.5px solid ${g.sel ? "#1A6BCC" : "#E4EBF5"}`,
                  background: g.sel ? "#EBF3FF" : "white",
                  color: g.sel ? "#1A6BCC" : "#4A6080",
                  fontSize: 13, fontWeight: g.sel ? 700 : 500,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                  boxShadow: "0 1px 3px rgba(15,31,61,0.04)",
                }}>
                  {g.icon}
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {/* Date of birth */}
          <div style={{ marginBottom: 14 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#8BA3C0", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 7px" }}>Date of Birth</p>
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { label: "Day", value: "15", flex: 0.8 },
                { label: "Month", value: "April", flex: 1.2 },
                { label: "Year", value: "1958", flex: 1 },
              ].map((f, i) => (
                <div key={i} style={{
                  flex: f.flex, height: 50,
                  background: "white",
                  border: "1.5px solid #E4EBF5",
                  borderRadius: 13,
                  padding: "0 12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 1px 3px rgba(15,31,61,0.04)",
                  cursor: "pointer",
                }}>
                  <span style={{ fontSize: 14, color: "#0F1F3D", fontWeight: 600, fontFamily: "inherit" }}>{f.value}</span>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M3 5L6.5 8.5L10 5" stroke="#C4D4E8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              ))}
            </div>
          </div>

          {/* Blood type */}
          <div style={{ marginBottom: 14 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#8BA3C0", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 7px" }}>Blood Type</p>
            <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
              {["A+", "A−", "B+", "B−", "O+", "O−", "AB+", "AB−"].map((bt, i) => (
                <div key={i} style={{
                  width: 54, height: 40, borderRadius: 10,
                  border: `1.5px solid ${bt === "O+" ? "#EF4444" : "#E4EBF5"}`,
                  background: bt === "O+" ? "#FEE2E2" : "white",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: bt === "O+" ? 700 : 500,
                  color: bt === "O+" ? "#DC2626" : "#4A6080",
                  cursor: "pointer",
                  boxShadow: "0 1px 3px rgba(15,31,61,0.04)",
                }}>
                  {bt}
                </div>
              ))}
            </div>
          </div>

          {/* Height & Weight */}
          <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
            {[
              { label: "Height", value: "175", unit: "cm" },
              { label: "Weight", value: "82", unit: "kg" },
            ].map((m, i) => (
              <div key={i} style={{ flex: 1 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: "#8BA3C0", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 7px" }}>{m.label}</p>
                <div style={{
                  background: "white",
                  border: "1.5px solid #E4EBF5",
                  borderRadius: 13,
                  padding: "0 12px",
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  boxShadow: "0 1px 3px rgba(15,31,61,0.04)",
                }}>
                  <input defaultValue={m.value} type="number"
                    style={{ border: "none", background: "transparent", fontSize: 18, color: "#0F1F3D", outline: "none", flex: 1, fontFamily: "inherit", fontWeight: 700, width: 0 }} />
                  <span style={{ fontSize: 13, color: "#B0C4DE", fontWeight: 600, flexShrink: 0 }}>{m.unit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Primary chronic disease — dropdown open */}
          <div style={{ marginBottom: 14 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#8BA3C0", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 7px" }}>
              Primary Condition
              <span style={{ fontSize: 10, color: "#B0C4DE", fontWeight: 500, textTransform: "none", letterSpacing: 0, marginLeft: 6 }}>required</span>
            </p>
            <DropdownTriggerOpen
              label="Primary Condition"
              value="Hypertension"
              icon={<svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M8.5 2C5.19 2 2.5 4.69 2.5 8C2.5 11.31 5.19 14 8.5 14C11.81 14 14.5 11.31 14.5 8C14.5 4.69 11.81 2 8.5 2Z" stroke="#1A6BCC" strokeWidth="1.4"/><path d="M8.5 5V8.5L10.5 10" stroke="#1A6BCC" strokeWidth="1.4" strokeLinecap="round"/></svg>}
            />
            <DropdownOpen
              selected="Hypertension"
              options={["No Known Condition", "Hypertension", "Diabetes Type 2", "Heart Disease", "Respiratory Condition", "Kidney Disease", "Other"]}
            />
          </div>

          {/* Secondary condition */}
          <div style={{ marginBottom: 22 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#8BA3C0", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 7px" }}>
              Secondary Condition
              <span style={{ fontSize: 10, color: "#B0C4DE", fontWeight: 500, textTransform: "none", letterSpacing: 0, marginLeft: 6 }}>optional</span>
            </p>
            <SelectBox
              label="Select if applicable"
              value=""
              icon={<svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M8.5 2C5.19 2 2.5 4.69 2.5 8C2.5 11.31 5.19 14 8.5 14C11.81 14 14.5 11.31 14.5 8C14.5 4.69 11.81 2 8.5 2Z" stroke="#B0C4DE" strokeWidth="1.4"/><path d="M8.5 5.5V8.5M7 7H10" stroke="#B0C4DE" strokeWidth="1.4" strokeLinecap="round"/></svg>}
              options={[]}
            />
          </div>

          {/* CTA */}
          <button style={{
            width: "100%", height: 54, borderRadius: 16, border: "none",
            background: "#0F2A5C", color: "white", fontSize: 16, fontWeight: 700,
            cursor: "pointer", letterSpacing: "-0.01em", position: "relative", overflow: "hidden", marginBottom: 8,
          }}>
            <span style={{ position: "relative", zIndex: 1 }}>Create My Account</span>
            <div style={{ position: "absolute", right: -10, top: -10, width: 80, height: 80, borderRadius: "50%", background: "rgba(13,201,177,0.15)" }} />
          </button>
          <p style={{ textAlign: "center", fontSize: 11, color: "#B0C4DE", margin: "6px 0 0", fontWeight: 500, lineHeight: 1.5 }}>
            Your data is encrypted and never shared without your consent
          </p>
        </div>
      </div>
    </MobileFrame>
  );
}
