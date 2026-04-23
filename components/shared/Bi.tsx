import type { CSSProperties } from "react";

type BiProps = {
  th: string;
  en?: string;
  size?: number;
  weight?: number;
  color?: string;
  enSize?: number;
  style?: CSSProperties;
};

export function Bi({
  th,
  en,
  size = 14,
  weight = 500,
  color = "var(--cd-ink)",
  enSize,
  style,
}: BiProps) {
  return (
    <div className="cd-bi" style={style}>
      <span
        style={{
          fontSize: size,
          fontWeight: weight,
          color,
          letterSpacing: -0.2,
          display: "block",
        }}
      >
        {th}
      </span>
      {en && (
        <span
          className="cd-bi-en"
          style={{ fontSize: enSize || Math.round(size * 0.68) }}
        >
          {en}
        </span>
      )}
    </div>
  );
}
