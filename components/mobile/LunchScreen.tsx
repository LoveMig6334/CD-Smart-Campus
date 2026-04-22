import { MI } from "../shared/MI";
import { StatusBar } from "../shared/StatusBar";
import { BottomNav } from "../shared/BottomNav";
import { LUNCH_MENU } from "@/lib/data";

export function LunchScreen() {
  const todayIdx = 2;
  return (
    <div className="cd-phone">
      <div className="cd-phone-bg" />
      <StatusBar />
      <div className="cd-phone-inner">
        <div className="cd-appbar" style={{ paddingTop: 12, paddingBottom: 12 }}>
          <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width: 32, height: 32, padding: 0 }}>
            <MI name="arrow_back" size={18} />
          </button>
          <div style={{ flex: 1 }}>
            <div className="cd-appbar-title">เมนูอาหารกลางวัน</div>
            <div className="cd-appbar-sub">Lunch menu · this week</div>
          </div>
        </div>

        <div style={{ padding: "4px 20px 18px" }}>
          <div className="cd-card" style={{ overflow: "hidden" }}>
            <div className="cd-ph" style={{ height: 140, borderRadius: 0, border: "none", borderBottom: "1px solid var(--cd-line)" }}>
              <MI name="image" size={28} weight={300} />
              <span>today&apos;s meal · photo</span>
            </div>
            <div style={{ padding: "14px 16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span className="cd-chip cd-chip-ink">วันนี้ · TODAY</span>
                <span className="cd-label">พุธ · wed</span>
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: -0.3 }}>{LUNCH_MENU[todayIdx].menu}</div>
              <div style={{ fontSize: 12, color: "var(--cd-ink-4)", fontFamily: "var(--cd-mono)", marginTop: 2 }}>
                {LUNCH_MENU[todayIdx].menuEn}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginTop: 12,
                  paddingTop: 12,
                  borderTop: "1px dashed var(--cd-line)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <MI name="icecream" size={15} weight={300} style={{ color: "var(--cd-ink-4)" }} />
                  <span style={{ fontSize: 12, color: "var(--cd-ink-2)" }}>{LUNCH_MENU[todayIdx].dessert}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <MI name="schedule" size={15} weight={300} style={{ color: "var(--cd-ink-4)" }} />
                  <span style={{ fontSize: 12, color: "var(--cd-ink-2)", fontFamily: "var(--cd-mono)" }}>11:30–12:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: "0 20px 20px" }}>
          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 10 }}>
            ทั้งสัปดาห์ <span className="cd-label" style={{ marginLeft: 6 }}>Week</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {LUNCH_MENU.map((m, i) => (
              <div
                key={i}
                className="cd-card"
                style={{ padding: 12, display: "flex", alignItems: "center", gap: 12, opacity: i < todayIdx ? 0.55 : 1 }}
              >
                <div style={{ width: 44, textAlign: "center" }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: i === todayIdx ? "var(--cd-primary)" : "var(--cd-ink)" }}>
                    {m.day}
                  </div>
                  <div className="cd-label" style={{ fontSize: 9, color: i === todayIdx ? "var(--cd-primary)" : "var(--cd-ink-4)" }}>
                    {m.en}
                  </div>
                </div>
                <div style={{ width: 1, height: 32, background: "var(--cd-line)" }}></div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12.5, color: "var(--cd-ink)", fontWeight: i === todayIdx ? 500 : 400 }}>{m.menu}</div>
                  <div style={{ fontSize: 10.5, color: "var(--cd-ink-4)", fontFamily: "var(--cd-mono)", marginTop: 1 }}>
                    {m.menuEn} · {m.dessert}
                  </div>
                </div>
                {i < todayIdx && <MI name="check" size={16} weight={300} style={{ color: "var(--cd-ink-4)" }} />}
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav active="home" />
    </div>
  );
}
