import { MI } from "../shared/MI";
import { AdminSide } from "./AdminSide";
import { AdminTopBar } from "./AdminTopBar";
import { LOST_ITEMS } from "@/lib/data";

export function AdminLost() {
  const rows = LOST_ITEMS.map((it, i) => ({
    ...it,
    reporter: i % 2 ? "อ.ประจำชั้น" : `${60000 + i * 37} · นักเรียน`,
    claimed: i % 3 === 0,
  }));

  const stats = [
    { l: "Open", v: "14", c: "var(--cd-danger)" },
    { l: "Found · pending claim", v: "6", c: "#b45309" },
    { l: "Claimed · 7 days", v: "11", c: "var(--cd-success)" },
    { l: "Avg resolve", v: "2.4 d", c: "var(--cd-ink)" },
  ];

  return (
    <div className="cd-admin">
      <AdminSide active="lost" />
      <div className="cd-admin-main">
        <AdminTopBar
          title="ของหาย–ของเจอ"
          subtitle="Lost & Found · moderation"
          actions={
            <>
              <button className="cd-btn cd-btn-secondary cd-btn-sm">
                <MI name="archive" size={14} />Archive old
              </button>
              <button className="cd-btn cd-btn-primary cd-btn-sm">
                <MI name="add" size={14} />New entry
              </button>
            </>
          }
        />
        <div className="cd-admin-content">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 20 }}>
            {stats.map((s, i) => (
              <div key={i} className="cd-kpi" style={{ padding: 14 }}>
                <div
                  className="cd-kpi-label"
                  style={{ fontSize: 10, display: "flex", alignItems: "center", gap: 6 }}
                >
                  <span className="cd-dot" style={{ background: s.c }}></span>
                  {s.l}
                </div>
                <div className="cd-kpi-value" style={{ fontSize: 26 }}>{s.v}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
            {rows.map((r, i) => (
              <div key={i} className="cd-card" style={{ padding: 14, display: "flex", gap: 12 }}>
                <div className="cd-ph" style={{ width: 80, height: 80, borderRadius: 8, flexShrink: 0 }}>
                  <MI name={r.icon} size={22} weight={300} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
                    <div>
                      <div style={{ fontSize: 13.5, fontWeight: 600 }}>{r.title}</div>
                      <div
                        style={{
                          fontSize: 10.5,
                          color: "var(--cd-ink-4)",
                          fontFamily: "var(--cd-mono)",
                        }}
                      >
                        {r.en}
                      </div>
                    </div>
                    <span className={r.status === "lost" ? "cd-chip cd-chip-danger" : "cd-chip cd-chip-success"}>
                      <span
                        className="cd-dot"
                        style={{ background: r.status === "lost" ? "var(--cd-danger)" : "var(--cd-success)" }}
                      ></span>
                      {r.status === "lost" ? "Lost" : "Found"}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--cd-ink-3)",
                      marginTop: 6,
                      display: "flex",
                      gap: 10,
                    }}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
                      <MI name="location_on" size={12} weight={300} />
                      {r.loc}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
                      <MI name="schedule" size={12} weight={300} />
                      {r.date}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 10.5,
                      color: "var(--cd-ink-4)",
                      fontFamily: "var(--cd-mono)",
                      marginTop: 4,
                    }}
                  >
                    by {r.reporter}
                  </div>
                  <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
                    <button className="cd-btn cd-btn-secondary cd-btn-sm">
                      <MI name="check" size={12} />
                      {r.status === "lost" ? "Mark found" : "Mark claimed"}
                    </button>
                    <button className="cd-btn cd-btn-ghost cd-btn-sm">
                      <MI name="edit" size={12} />Edit
                    </button>
                    <button
                      className="cd-btn cd-btn-ghost cd-btn-sm"
                      style={{ marginLeft: "auto", color: "var(--cd-danger)" }}
                    >
                      <MI name="delete" size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
