import type { ReactNode } from "react";

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="dc-phone-shell">
      <div className="dc-phone-window">{children}</div>
    </div>
  );
}
