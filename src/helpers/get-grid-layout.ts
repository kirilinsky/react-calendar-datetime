import { CSSProperties } from "react";

export const getGridLayout = (p: {
  time?: boolean;
  presets?: boolean;
  months?: boolean;
  years?: boolean;
  compactMonths?: boolean;
}): CSSProperties => {
  const colCount = (p.months ? 1 : 0) + 1 + (p.time ? 1 : 0);

  const cols = [p.months && "2fr", "5fr", p.time && "2fr"]
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

  const rows = [hasHeader && "60px", "auto", p.presets && "50px"]
    .filter(Boolean)
    .join(" ");

  return {
    gridTemplateColumns: cols,
    gridTemplateRows: rows,
    gridTemplateAreas: areas,
  };
};
