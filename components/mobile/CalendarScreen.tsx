import { MI } from "../shared/MI";
import { StatusBar } from "../shared/StatusBar";
import { BottomNav } from "../shared/BottomNav";
import { EVENTS } from "@/lib/data";

export function CalendarScreen() {
  const days = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];
  const firstDay = 3;
  const daysIn = 30;
  const today = 22;
  const eventDays = EVENTS.map((e) => e.day);
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysIn; d++) cells.push(d);

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
            <div className="cd-appbar-title">ปฏิทินกิจกรรม</div>
            <div className="cd-appbar-sub">Calendar · april 2569</div>
          </div>
          <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width: 32, height: 32, padding: 0 }}>
            <MI name="filter_list" size={18} />
          </button>
        </div>

        <div style={{ padding: "4px 20px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: -0.5 }}>เมษายน</div>
            <div className="cd-label">April · 2569 B.E.</div>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            <button className="cd-btn cd-btn-secondary cd-btn-sm" style={{ width: 32, height: 32, padding: 0 }}>
              <MI name="chevron_left" size={18} />
            </button>
            <button className="cd-btn cd-btn-secondary cd-btn-sm" style={{ width: 32, height: 32, padding: 0 }}>
              <MI name="chevron_right" size={18} />
            </button>
          </div>
        </div>

        <div style={{ padding: "0 20px 20px" }}>
          <div className="cd-card" style={{ padding: 12 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2, marginBottom: 4 }}>
              {days.map((d, i) => (
                <div
                  key={i}
                  style={{
                    textAlign: "center",
                    fontSize: 10,
                    fontWeight: 500,
                    color: "var(--cd-ink-4)",
                    fontFamily: "var(--cd-mono)",
                    padding: 4,
                  }}
                >
                  {d}
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 }}>
              {cells.map((d, i) => {
                if (d === null) return <div key={i} />;
                const hasEv = eventDays.includes(d);
                const isToday = d === today;
                return (
                  <div
                    key={i}
                    style={{
                      aspectRatio: "1",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 8,
                      fontSize: 12,
                      fontWeight: isToday ? 600 : 400,
                      background: isToday ? "var(--cd-ink)" : hasEv ? "var(--cd-primary-soft)" : "transparent",
                      color: isToday ? "#fff" : hasEv ? "var(--cd-primary-2)" : "var(--cd-ink-2)",
                      fontFamily: "var(--cd-mono)",
                      position: "relative",
                      cursor: "pointer",
                    }}
                  >
                    {d}
                    {hasEv && !isToday && (
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--cd-primary)", marginTop: 2 }}></div>
                    )}
                    {isToday && hasEv && (
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#fff", marginTop: 2 }}></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div style={{ padding: "0 20px 20px" }}>
          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 10 }}>
            เดือนเมษายน <span className="cd-label" style={{ marginLeft: 6 }}>{EVENTS.length} events</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {EVENTS.map((e, i) => (
              <div key={i} className="cd-card" style={{ display: "flex", alignItems: "stretch", overflow: "hidden" }}>
                <div
                  style={{
                    width: 56,
                    padding: "12px 0",
                    textAlign: "center",
                    background: "var(--cd-surface-2)",
                    borderRight: "1px solid var(--cd-line)",
                  }}
                >
                  <div className="cd-label" style={{ fontSize: 9 }}>APR</div>
                  <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: -0.6, fontFamily: "var(--cd-mono)", lineHeight: 1 }}>
                    {e.day}
                  </div>
                </div>
                <div style={{ flex: 1, padding: "11px 14px", display: "flex", alignItems: "center", gap: 10 }}>
                  <MI name={e.icon} size={18} weight={300} style={{ color: "var(--cd-ink-2)" }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "var(--cd-ink)" }}>{e.title}</div>
                    <div style={{ fontSize: 11, color: "var(--cd-ink-4)", fontFamily: "var(--cd-mono)", marginTop: 1 }}>{e.en}</div>
                  </div>
                  <span className="cd-chip" style={{ fontSize: 10 }}>{e.cat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav active="calendar" />
    </div>
  );
}
