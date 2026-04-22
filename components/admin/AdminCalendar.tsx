import { MI } from "../shared/MI";
import { AdminSide } from "./AdminSide";
import { AdminTopBar } from "./AdminTopBar";
import { EVENTS } from "@/lib/data";

export function AdminCalendar() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const firstDay = 3;
  const daysIn = 30;
  const today = 22;
  const eventMap: Record<number, (typeof EVENTS)[number]> = {};
  EVENTS.forEach((e) => (eventMap[e.day] = e));

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysIn; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="cd-admin">
      <AdminSide active="calendar" />
      <div className="cd-admin-main">
        <AdminTopBar
          title="ปฏิทินกิจกรรม"
          subtitle="Calendar management"
          actions={
            <button className="cd-btn cd-btn-primary cd-btn-sm">
              <MI name="add" size={14} />เพิ่มกิจกรรม
            </button>
          }
        />
        <div className="cd-admin-content">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button className="cd-btn cd-btn-secondary cd-btn-sm" style={{ width: 32, height: 32, padding: 0 }}>
                <MI name="chevron_left" size={16} />
              </button>
              <div>
                <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: -0.3 }}>เมษายน 2569</div>
                <div className="cd-label" style={{ marginTop: 2 }}>April 2026</div>
              </div>
              <button className="cd-btn cd-btn-secondary cd-btn-sm" style={{ width: 32, height: 32, padding: 0 }}>
                <MI name="chevron_right" size={16} />
              </button>
              <button className="cd-btn cd-btn-ghost cd-btn-sm">Today</button>
            </div>
            <div
              style={{
                display: "flex",
                gap: 4,
                background: "var(--cd-surface-2)",
                padding: 3,
                borderRadius: 8,
                border: "1px solid var(--cd-line)",
              }}
            >
              <button className="cd-btn cd-btn-sm" style={{ background: "#fff", color: "var(--cd-ink)", boxShadow: "var(--cd-shadow-xs)" }}>
                Month
              </button>
              <button className="cd-btn cd-btn-sm" style={{ background: "transparent", color: "var(--cd-ink-4)" }}>
                Week
              </button>
              <button className="cd-btn cd-btn-sm" style={{ background: "transparent", color: "var(--cd-ink-4)" }}>
                List
              </button>
            </div>
          </div>

          <div className="cd-card" style={{ padding: 0, overflow: "hidden", marginBottom: 18 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                borderBottom: "1px solid var(--cd-line)",
              }}
            >
              {days.map((d, i) => (
                <div
                  key={i}
                  className="cd-label"
                  style={{
                    padding: "10px 14px",
                    textAlign: "left",
                    borderRight: i < 6 ? "1px solid var(--cd-line-2)" : "none",
                    fontSize: 10,
                  }}
                >
                  {d}
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
              {cells.map((d, i) => {
                const ev = d != null ? eventMap[d] : undefined;
                const isToday = d === today;
                const col = i % 7;
                const row = Math.floor(i / 7);
                return (
                  <div
                    key={i}
                    style={{
                      minHeight: 96,
                      padding: "8px 10px",
                      borderRight: col < 6 ? "1px solid var(--cd-line-2)" : "none",
                      borderBottom: row < Math.floor((cells.length - 1) / 7) ? "1px solid var(--cd-line-2)" : "none",
                      background: d === null ? "var(--cd-surface-2)" : "#fff",
                      position: "relative",
                    }}
                  >
                    {d && (
                      <>
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: isToday ? 22 : "auto",
                            height: isToday ? 22 : "auto",
                            borderRadius: isToday ? "50%" : 0,
                            background: isToday ? "var(--cd-ink)" : "transparent",
                            color: isToday ? "#fff" : "var(--cd-ink)",
                            fontSize: 12,
                            fontWeight: isToday ? 600 : 500,
                            fontFamily: "var(--cd-mono)",
                            padding: isToday ? 0 : "0 4px",
                          }}
                        >
                          {d}
                        </div>
                        {ev && (
                          <div
                            style={{
                              marginTop: 6,
                              padding: "4px 6px",
                              borderRadius: 5,
                              background: "var(--cd-primary-soft)",
                              borderLeft: "2px solid var(--cd-primary)",
                            }}
                          >
                            <div
                              style={{
                                fontSize: 10.5,
                                fontWeight: 500,
                                color: "var(--cd-primary-2)",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {ev.title}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="cd-card" style={{ overflow: "hidden" }}>
            <div
              style={{
                padding: "14px 20px",
                borderBottom: "1px solid var(--cd-line-2)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>รายการกิจกรรม</div>
                <div className="cd-label" style={{ marginTop: 2 }}>All events · {EVENTS.length}</div>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <button className="cd-btn cd-btn-secondary cd-btn-sm">
                  <MI name="filter_list" size={14} />Filter
                </button>
                <button className="cd-btn cd-btn-secondary cd-btn-sm">
                  <MI name="download" size={14} />Export
                </button>
              </div>
            </div>
            <table className="cd-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Event</th>
                  <th>Category</th>
                  <th>Attendees</th>
                  <th style={{ textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {EVENTS.map((e, i) => (
                  <tr key={i}>
                    <td style={{ fontFamily: "var(--cd-mono)", fontSize: 11.5 }}>{e.date}</td>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <MI name={e.icon} size={14} weight={300} style={{ color: "var(--cd-ink-3)" }} />
                        <div>
                          <div style={{ fontWeight: 500, color: "var(--cd-ink)" }}>{e.title}</div>
                          <div style={{ fontSize: 11, color: "var(--cd-ink-4)", fontFamily: "var(--cd-mono)" }}>{e.en}</div>
                        </div>
                      </div>
                    </td>
                    <td><span className="cd-chip">{e.cat}</span></td>
                    <td style={{ fontFamily: "var(--cd-mono)" }}>{(120 + i * 37) % 300}</td>
                    <td style={{ textAlign: "right" }}>
                      <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ padding: "4px 6px" }}>
                        <MI name="edit" size={14} />
                      </button>
                      <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ padding: "4px 6px" }}>
                        <MI name="delete" size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
