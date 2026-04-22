import { MI } from "../shared/MI";
import { AdminSide } from "./AdminSide";
import { AdminTopBar } from "./AdminTopBar";

export function AdminBooking() {
  const times = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17"];
  const rooms = [
    { name: "Practice Room 1", en: "M1", blocks: [[1, 3], [6, 8]] },
    { name: "Practice Room 2", en: "M2", blocks: [[2, 4]] },
    { name: "Vocal Booth", en: "M3", blocks: [[0, 2], [5, 7]] },
    { name: "Studio A", en: "M4", blocks: [[3, 6]] },
    { name: "ห้องประชุม A", en: "A1", blocks: [[1, 2], [7, 9]] },
    { name: "ห้องประชุม B", en: "A2", blocks: [[4, 8]] },
    { name: "หอประชุมใหญ่", en: "A3", blocks: [[5, 9]] },
  ];
  const summaries = [
    { l: "Total bookings", t: "การจองทั้งหมด", v: "24", d: "today" },
    { l: "Pending approval", t: "รอยืนยัน", v: "3", d: "action needed" },
    { l: "Utilization", t: "อัตราการใช้", v: "68%", d: "of 10hr window" },
  ];

  return (
    <div className="cd-admin">
      <AdminSide active="booking" />
      <div className="cd-admin-main">
        <AdminTopBar
          title="จัดการการจองห้อง"
          subtitle="Room bookings · timeline view"
          actions={
            <>
              <button className="cd-btn cd-btn-secondary cd-btn-sm">วันนี้ · Today</button>
              <button className="cd-btn cd-btn-primary cd-btn-sm">
                <MI name="add" size={14} />จองใหม่
              </button>
            </>
          }
        />
        <div className="cd-admin-content">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 18 }}>
            {summaries.map((x, i) => (
              <div key={i} className="cd-kpi">
                <div className="cd-kpi-label">{x.l}</div>
                <div className="cd-kpi-value">{x.v}</div>
                <div style={{ fontSize: 11, color: "var(--cd-ink-3)", marginTop: 2 }}>
                  {x.t}{" "}
                  <span className="cd-label" style={{ marginLeft: 4, fontSize: 9 }}>
                    {x.d}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="cd-card" style={{ overflow: "hidden" }}>
            <div style={{ padding: "14px 20px", borderBottom: "1px solid var(--cd-line-2)" }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>ตารางการจอง · 22 Apr 2026</div>
              <div className="cd-label" style={{ marginTop: 2 }}>Timeline · wed</div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "180px 1fr",
                borderBottom: "1px solid var(--cd-line-2)",
              }}
            >
              <div style={{ padding: "10px 14px", background: "var(--cd-surface-2)", borderRight: "1px solid var(--cd-line)" }}>
                <span className="cd-label" style={{ fontSize: 10 }}>Room</span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${times.length}, 1fr)`,
                  background: "var(--cd-surface-2)",
                }}
              >
                {times.map((t, i) => (
                  <div
                    key={i}
                    className="cd-label"
                    style={{
                      padding: "10px 0",
                      textAlign: "center",
                      borderLeft: i > 0 ? "1px solid var(--cd-line-2)" : "none",
                      fontSize: 10,
                    }}
                  >
                    {t}:00
                  </div>
                ))}
              </div>
            </div>
            {rooms.map((r, ri) => (
              <div
                key={ri}
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  borderBottom: ri < rooms.length - 1 ? "1px solid var(--cd-line-2)" : "none",
                }}
              >
                <div
                  style={{
                    padding: "14px",
                    borderRight: "1px solid var(--cd-line)",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 6,
                      background: "var(--cd-surface-3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 600,
                      fontFamily: "var(--cd-mono)",
                    }}
                  >
                    {r.en}
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 500 }}>{r.name}</div>
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${times.length}, 1fr)`,
                    position: "relative",
                    height: 54,
                  }}
                >
                  {times.map((_, i) => (
                    <div key={i} style={{ borderLeft: i > 0 ? "1px solid var(--cd-line-2)" : "none" }}></div>
                  ))}
                  {r.blocks.map((b, bi) => (
                    <div
                      key={bi}
                      style={{
                        position: "absolute",
                        left: `${(b[0] / times.length) * 100}%`,
                        width: `${((b[1] - b[0]) / times.length) * 100}%`,
                        top: 10,
                        bottom: 10,
                        background: bi % 2 ? "var(--cd-primary-soft)" : "var(--cd-ink)",
                        color: bi % 2 ? "var(--cd-primary-2)" : "#fff",
                        borderRadius: 5,
                        fontSize: 10.5,
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        padding: "0 8px",
                        borderLeft: bi % 2 ? "2px solid var(--cd-primary)" : "none",
                        fontFamily: "var(--cd-mono)",
                      }}
                    >
                      {times[b[0]]}:00–{times[b[1]]}:00
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
