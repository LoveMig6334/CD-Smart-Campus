import { MI } from "../shared/MI";
import { StatusBar } from "../shared/StatusBar";
import { BottomNav } from "../shared/BottomNav";
import { Wordmark } from "../shared/Wordmark";
import { EVENTS, SPORT_COLORS } from "@/lib/data";

export function HomeScreen() {
  const grid = [
    { id: "calendar", th: "ปฏิทิน", en: "Calendar", icon: "calendar_month" },
    { id: "sport", th: "กีฬาสี", en: "Sport Day", icon: "emoji_events" },
    { id: "ports", th: "Portfolio", en: "Seniors", icon: "work" },
    { id: "lost", th: "ของหาย", en: "Lost&Found", icon: "search" },
    { id: "book", th: "จองห้อง", en: "Booking", icon: "meeting_room" },
    { id: "lunch", th: "เมนูอาหาร", en: "Lunch", icon: "restaurant" },
    { id: "music", th: "Music Day", en: "Concert", icon: "graphic_eq" },
    { id: "more", th: "ทั้งหมด", en: "More", icon: "apps" },
  ];
  const up = EVENTS.slice(0, 3);

  return (
    <div className="cd-phone">
      <div className="cd-phone-bg" />
      <StatusBar />
      <div className="cd-phone-inner">
        <div style={{ padding: "6px 20px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Wordmark size={13} />
          <div style={{ display: "flex", gap: 6 }}>
            <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width: 34, height: 34, padding: 0 }}>
              <MI name="notifications" size={18} weight={300} />
            </button>
            <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width: 34, height: 34, padding: 0, position: "relative" }}>
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "var(--cd-surface-3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  fontWeight: 600,
                  color: "var(--cd-ink)",
                  fontFamily: "var(--cd-mono)",
                }}
              >
                น
              </div>
            </button>
          </div>
        </div>

        <div style={{ padding: "0 20px 22px" }}>
          <div className="cd-label" style={{ marginBottom: 8 }}>พุธ · 22 เมษายน 2569</div>
          <h1 style={{ fontSize: 26, fontWeight: 600, color: "var(--cd-ink)", letterSpacing: -0.8, lineHeight: 1.2 }}>
            สวัสดีตอนเช้า, <span style={{ color: "var(--cd-primary)" }}>ณภัทร</span>
          </h1>
          <p style={{ fontSize: 12, color: "var(--cd-ink-4)", marginTop: 4, fontFamily: "var(--cd-mono)", textTransform: "uppercase", letterSpacing: 0.8 }}>
            Good morning · term 1 / 2569
          </p>
        </div>

        <div style={{ padding: "0 20px 22px" }}>
          <div className="cd-card" style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "stretch" }}>
              <div style={{ flex: 1, padding: "16px 16px 16px 18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                  <span className="cd-dot" style={{ background: "var(--cd-danger)" }}></span>
                  <span className="cd-label" style={{ color: "var(--cd-danger)" }}>วันนี้ · Today</span>
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: -0.3, color: "var(--cd-ink)" }}>Earth Day Activity</div>
                <div style={{ fontSize: 12, color: "var(--cd-ink-4)", marginTop: 2 }}>08:30 · สวนหย่อมตึก 4</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 14 }}>
                  <button className="cd-btn cd-btn-primary cd-btn-sm">ดูรายละเอียด</button>
                  <span style={{ fontSize: 11, color: "var(--cd-ink-4)", fontFamily: "var(--cd-mono)" }}>124 เข้าร่วม</span>
                </div>
              </div>
              <div className="cd-ph" style={{ width: 92, borderRadius: 0, border: "none", borderLeft: "1px solid var(--cd-line)" }}>
                <MI name="eco" size={28} weight={300} style={{ color: "var(--cd-success)" }} />
                <span>poster</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: "0 20px 20px" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--cd-ink)" }}>เมนูลัด</div>
              <div className="cd-label" style={{ marginTop: 2 }}>Quick access</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
            {grid.map((g) => (
              <button
                key={g.id}
                className="cd-card cd-card-hov"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  padding: "14px 4px",
                  cursor: "pointer",
                  background: "#fff",
                  border: "1px solid var(--cd-line)",
                }}
              >
                <MI name={g.icon} size={20} weight={300} style={{ color: "var(--cd-ink-2)" }} />
                <span style={{ fontSize: 10, color: "var(--cd-ink)", fontWeight: 500 }}>{g.th}</span>
                <span
                  style={{
                    fontSize: 8,
                    color: "var(--cd-ink-4)",
                    fontFamily: "var(--cd-mono)",
                    textTransform: "uppercase",
                    letterSpacing: 0.4,
                    marginTop: -4,
                  }}
                >
                  {g.en}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div style={{ padding: "0 20px 20px" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--cd-ink)" }}>กิจกรรมที่จะมาถึง</div>
              <div className="cd-label" style={{ marginTop: 2 }}>Upcoming events</div>
            </div>
            <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ padding: 0, color: "var(--cd-primary)" }}>ดูทั้งหมด →</button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {up.map((e, i) => (
              <div key={i} className="cd-card" style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px" }}>
                <div style={{ width: 40, textAlign: "center", borderRight: "1px solid var(--cd-line)", paddingRight: 10 }}>
                  <div className="cd-label" style={{ fontSize: 9 }}>APR</div>
                  <div style={{ fontSize: 18, fontWeight: 600, color: "var(--cd-ink)", letterSpacing: -0.5, fontFamily: "var(--cd-mono)" }}>{e.day}</div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "var(--cd-ink)" }}>{e.title}</div>
                  <div style={{ fontSize: 11, color: "var(--cd-ink-4)", fontFamily: "var(--cd-mono)", marginTop: 1 }}>{e.en}</div>
                </div>
                <MI name="chevron_right" size={18} weight={300} style={{ color: "var(--cd-ink-4)" }} />
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: "0 20px 20px" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--cd-ink)" }}>คะแนนกีฬาสี</div>
              <div className="cd-label" style={{ marginTop: 2 }}>Sport Day · live</div>
            </div>
            <span className="cd-chip cd-chip-danger">
              <span className="cd-dot" style={{ background: "var(--cd-danger)" }}></span>LIVE
            </span>
          </div>
          <div className="cd-card" style={{ padding: 14 }}>
            {SPORT_COLORS.map((c, i) => {
              const max = SPORT_COLORS[0].score;
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: i < 3 ? 10 : 0 }}>
                  <div style={{ width: 14, textAlign: "center", fontSize: 10, color: "var(--cd-ink-4)", fontFamily: "var(--cd-mono)" }}>{i + 1}</div>
                  <div style={{ width: 8, height: 24, borderRadius: 2, background: c.hex }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                      <span style={{ fontSize: 12, fontWeight: 500 }}>{c.th}</span>
                      <span style={{ fontSize: 12, fontWeight: 600, fontFamily: "var(--cd-mono)", color: "var(--cd-ink)" }}>{c.score}</span>
                    </div>
                    <div className="cd-score-bar">
                      <div className="cd-score-bar-fill" style={{ background: c.hex, width: `${(c.score / max) * 100}%` }}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <BottomNav active="home" />
    </div>
  );
}
