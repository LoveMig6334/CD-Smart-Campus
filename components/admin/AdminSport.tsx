import { MI } from "../shared/MI";
import { AdminSide } from "./AdminSide";
import { AdminTopBar } from "./AdminTopBar";
import { SPORT_COLORS, SPORT_EVENTS, COLOR_MAP } from "@/lib/data";

export function AdminSport() {
  return (
    <div className="cd-admin">
      <AdminSide active="sport" />
      <div className="cd-admin-main">
        <AdminTopBar
          title="จัดการกีฬาสี"
          subtitle="Sport Day · manage results"
          actions={
            <>
              <button className="cd-btn cd-btn-secondary cd-btn-sm">
                <MI name="publish" size={14} />Publish
              </button>
              <button className="cd-btn cd-btn-primary cd-btn-sm">
                <MI name="add" size={14} />บันทึกผล
              </button>
            </>
          }
        />
        <div className="cd-admin-content">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 22 }}>
            {SPORT_COLORS.map((c, i) => (
              <div key={i} className="cd-card" style={{ padding: 18, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: c.hex }}></div>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: 4 }}>
                  <div>
                    <div className="cd-label">#{i + 1}</div>
                    <div style={{ fontSize: 15, fontWeight: 600, marginTop: 2 }}>{c.th}</div>
                    <div style={{ fontSize: 11, color: "var(--cd-ink-4)", fontFamily: "var(--cd-mono)" }}>{c.en} team</div>
                  </div>
                  <div style={{ width: 24, height: 24, borderRadius: 6, background: c.hex }}></div>
                </div>
                <div style={{ marginTop: 16 }}>
                  <div className="cd-label" style={{ fontSize: 10 }}>Total points</div>
                  <input
                    defaultValue={c.score}
                    readOnly
                    style={{
                      width: "100%",
                      fontSize: 26,
                      fontWeight: 600,
                      letterSpacing: -0.6,
                      fontFamily: "var(--cd-mono)",
                      padding: "6px 10px",
                      border: "1px solid var(--cd-line)",
                      borderRadius: 8,
                      background: "var(--cd-surface-2)",
                      marginTop: 4,
                      color: "var(--cd-ink)",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 10,
                    fontSize: 10,
                    color: "var(--cd-ink-4)",
                    fontFamily: "var(--cd-mono)",
                    textTransform: "uppercase",
                  }}
                >
                  <span>{c.wins} wins</span>
                  <span>+{i === 0 ? 12 : i === 1 ? 8 : i === 2 ? 5 : 3} today</span>
                </div>
              </div>
            ))}
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
                <div style={{ fontSize: 14, fontWeight: 600 }}>ผลการแข่งขัน</div>
                <div className="cd-label" style={{ marginTop: 2 }}>Competition results · day 2</div>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <button className="cd-btn cd-btn-secondary cd-btn-sm">All days</button>
                <button className="cd-btn cd-btn-sm" style={{ background: "var(--cd-ink)", color: "#fff" }}>
                  Day 2
                </button>
              </div>
            </div>
            <table className="cd-table">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Category</th>
                  <th>1st</th>
                  <th>2nd</th>
                  <th>3rd</th>
                  <th>4th</th>
                  <th style={{ textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {SPORT_EVENTS.map((ev, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 500, color: "var(--cd-ink)" }}>
                      {ev.sport}
                      <div style={{ fontSize: 10.5, color: "var(--cd-ink-4)", fontFamily: "var(--cd-mono)" }}>{ev.en}</div>
                    </td>
                    <td><span className="cd-chip">{ev.cat}</span></td>
                    {ev.results.map((r, ri) => (
                      <td key={ri}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: COLOR_MAP[r] }}></span>
                          <span style={{ fontSize: 12 }}>{r}</span>
                        </div>
                      </td>
                    ))}
                    <td style={{ textAlign: "right" }}>
                      <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ padding: "4px 6px" }}>
                        <MI name="edit" size={14} />
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
