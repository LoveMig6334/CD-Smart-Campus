import { MI } from "../shared/MI";
import { StatusBar } from "../shared/StatusBar";
import { BottomNav } from "../shared/BottomNav";
import { PORTFOLIOS } from "@/lib/data";

export function PortfolioScreen() {
  const stats = [
    { n: "48", l: "Projects" },
    { n: "12", l: "Awards" },
    { n: "6", l: "Published" },
  ];
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
            <div className="cd-appbar-title">Portfolio รุ่นพี่</div>
            <div className="cd-appbar-sub">Senior projects · class of 2569</div>
          </div>
          <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width: 32, height: 32, padding: 0 }}>
            <MI name="tune" size={18} />
          </button>
        </div>

        <div style={{ padding: "0 20px 16px", display: "flex", gap: 8 }}>
          {stats.map((s, i) => (
            <div key={i} className="cd-card" style={{ flex: 1, padding: "10px 12px", textAlign: "center" }}>
              <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: -0.5, fontFamily: "var(--cd-mono)" }}>{s.n}</div>
              <div className="cd-label" style={{ fontSize: 9 }}>{s.l}</div>
            </div>
          ))}
        </div>

        <div style={{ padding: "0 20px 20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {PORTFOLIOS.slice(0, 5).map((p, i) => (
              <div key={i} className="cd-card" style={{ overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "stretch" }}>
                  <div
                    className="cd-ph"
                    style={{ width: 88, borderRadius: 0, border: "none", borderRight: "1px solid var(--cd-line)" }}
                  >
                    <MI name="image" size={20} weight={300} />
                  </div>
                  <div style={{ flex: 1, padding: "11px 12px" }}>
                    <div style={{ fontSize: 12.5, fontWeight: 600 }}>{p.title}</div>
                    <div style={{ fontSize: 10, color: "var(--cd-ink-4)", fontFamily: "var(--cd-mono)", marginTop: 1 }}>
                      {p.th}
                    </div>
                    <div
                      style={{
                        fontSize: 10.5,
                        color: "var(--cd-ink-3)",
                        marginTop: 6,
                        lineHeight: 1.35,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {p.desc}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 8 }}>
                      <div style={{ fontSize: 10, color: "var(--cd-ink-4)" }}>
                        {p.name} · {p.year}
                      </div>
                      <div style={{ display: "flex", gap: 3 }}>
                        {p.tags.slice(0, 2).map((t, ti) => (
                          <span key={ti} className="cd-chip" style={{ fontSize: 9, padding: "2px 6px" }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
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
