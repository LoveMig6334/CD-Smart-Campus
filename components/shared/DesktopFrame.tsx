import type { ReactNode } from "react";

export function DesktopFrame({ children, url = "admin.cds.ac.th/overview" }: { children: ReactNode; url?: string }) {
  return (
    <div className="dc-desktop-shell">
      <div className="dc-desktop-chrome">
        <div className="dc-desktop-dots">
          <div className="dc-desktop-dot" style={{ background: "#ef4444" }} />
          <div className="dc-desktop-dot" style={{ background: "#f59e0b" }} />
          <div className="dc-desktop-dot" style={{ background: "#10b981" }} />
        </div>
        <div className="dc-desktop-url">{url}</div>
      </div>
      <div className="dc-desktop-body">{children}</div>
    </div>
  );
}
