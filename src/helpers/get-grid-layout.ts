import { CSSProperties } from "react";

export const getGridLayout = (p: {
  time?: boolean;
  presets?: boolean;
  months?: boolean;
  years?: boolean;
  compactMonths?: boolean;
}): CSSProperties => {
  const colCount = (p.months ? 1 : 0) + 1 + (p.time ? 1 : 0);
  const isCramped = p.months && p.time;

  const cols = [
    p.months && (isCramped ? "24cqw" : "28cqw"),
    "1fr",
    p.time && (isCramped ? "15cqw" : "21cqw"),
  ]
    .filter(Boolean)
    .join(" ");

  const hasHeader = p.years || p.compactMonths;
  const mainRow = [p.months && "MM", "DD", p.time && "TT"]
    .filter(Boolean)
    .join(" ");
  const fullWidthRow = (key: string) =>
    `"${new Array(colCount).fill(key).join(" ")}"`;

  const areas = [
    hasHeader && fullWidthRow("HH"),
    `"${mainRow}"`,
    p.presets && fullWidthRow("PP"),
  ]
    .filter(Boolean)
    .join(" ");

  const rows = [hasHeader && "auto", "1fr", p.presets && "auto"]
    .filter(Boolean)
    .join(" ");

  return {
    display: "grid",
    gridTemplateColumns: cols,
    gridTemplateRows: rows,
    gridTemplateAreas: areas,
  };
};
