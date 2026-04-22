import type { CSSProperties } from "react";

type MIProps = {
  name: string;
  size?: number;
  weight?: number;
  fill?: 0 | 1;
  style?: CSSProperties;
  className?: string;
};

export function MI({ name, size = 18, weight = 400, fill = 0, style, className }: MIProps) {
  return (
    <span
      className={`material-symbols-outlined${className ? " " + className : ""}`}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${fill},'wght' ${weight},'GRAD' 0,'opsz' 24`,
        ...style,
      }}
    >
      {name}
    </span>
  );
}
