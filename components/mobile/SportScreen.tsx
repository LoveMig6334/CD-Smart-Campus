import { MI } from "../shared/MI";
import { StatusBar } from "../shared/StatusBar";
import { BottomNav } from "../shared/BottomNav";
import { SPORT_COLORS, SPORT_EVENTS, COLOR_MAP } from "@/lib/data";

export function SportScreen() {
  const max = SPORT_COLORS[0].score;
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
            <div className="cd-appbar-title">กีฬาสี 2569</div>
            <div className="cd-appbar-sub">Sport Day · day 2 of 3</div>
          </div>
          <span className="cd-chip cd-chip-danger">
            <span className="cd-dot" style={{ background: "var(--cd-danger)" }}></span>LIVE
          </span>
        </div>

        <div style={{ padding: "4px 20px 20px" }}>
          <div className="cd-card" style={{ padding: 18, background: "var(--cd-ink)", border: "none" }}>
            <div className="cd-label" style={{ color: "rgba(255,255,255,.5)", marginBottom: 14 }}>Total points · standings</div>
            {SPORT_COLORS.map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: i < 3 ? 14 : 0 }}>
                <div style={{ width: 22, fontSize: 11, color: "rgba(255,255,255,.5)", fontFamily: "var(--cd-mono)" }}>#{i + 1}</div>
                <div style={{ width: 4, height: 32, borderRadius: 2, background: c.hex, flexShrink: 0 }}></div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                    <div>
                      <span style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>{c.th}</span>
                      <span
                        style={{
                          fontSize: 10,
                          color: "rgba(255,255,255,.45)",
                          fontFamily: "var(--cd-mono)",
                          marginLeft: 6,
                          textTransform: "uppercase",
                        }}
                      >
                        {c.en}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: 20,
                        fontWeight: 600,
                        fontFamily: "var(--cd-mono)",
                        color: "#fff",
                        letterSpacing: -0.5,
                      }}
                    >
                      {c.score}
                    </span>
                  </div>
                  <div style={{ height: 3, background: "rgba(255,255,255,.1)", borderRadius: 2, overflow: "hidden" }}>
                    <div
                      style={{ height: "100%", width: `${(c.score / max) * 100}%`, background: c.hex, borderRadius: 2 }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: "0 20px 20px" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>ผลการแข่งขัน</div>
              <div className="cd-label" style={{ marginTop: 2 }}>Results · today</div>
            </div>
            <div style={{ display: "flex", gap: 4 }}>
              <button className="cd-btn cd-btn-sm" style={{ background: "var(--cd-ink)", color: "#fff" }}>All</button>
              <button className="cd-btn cd-btn-secondary cd-btn-sm">Track</button>
              <button className="cd-btn cd-btn-secondary cd-btn-sm">Team</button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {SPORT_EVENTS.map((ev, i) => (
              <div key={i} className="cd-card" style={{ padding: 14 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{ev.sport}</div>
                    <div style={{ fontSize: 11, color: "var(--cd-ink-4)", fontFamily: "var(--cd-mono)", marginTop: 1 }}>
                      {ev.en}
                    </div>
                  </div>
                  <span className="cd-chip">{ev.cat}</span>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  {ev.results.map((r, ri) => (
                    <div
                      key={ri}
                      style={{
                        flex: 1,
                        padding: "6px 4px",
                        borderRadius: 8,
                        background: "var(--cd-surface-2)",
                        border: "1px solid var(--cd-line)",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 9,
                          color: "var(--cd-ink-4)",
                          fontFamily: "var(--cd-mono)",
                          fontWeight: 600,
                        }}
                      >
                        {ri + 1}
                      </div>
                      <div
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: "50%",
                          background: COLOR_MAP[r],
                          margin: "4px auto 2px",
                        }}
                      ></div>
                      <div style={{ fontSize: 9, color: "var(--cd-ink-2)" }}>{r}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav active="home" />
    </div>
  );
}
