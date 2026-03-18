import { CSSProperties } from "react";

export const getGridLayout = (p: {
  time?: boolean;
  presets?: boolean;
  months?: boolean;
  years?: boolean;
  compactYears?: boolean;
  compactMonths?: boolean;
  jellyMode?: boolean;
}): CSSProperties => {
  const isJelly = p.jellyMode !== false;
  const colCount = (p.months ? 1 : 0) + 1 + (p.time ? 1 : 0);
  const isCramped = p.months && p.time;

  const cols = [
    p.months && (isJelly ? (isCramped ? "25cqw" : "28cqw") : "2fr"),
    isJelly ? "1fr" : "5fr",
    p.time && (isJelly ? (isCramped ? "16cqw" : "20cqw") : "2fr"),
  ]
    .filter(Boolean)
    .join(" ");

  const hasHeader = p.years || p.compactMonths || p.compactYears;
  const mainRow = [p.months && "MM", "DD", p.time && "TT"]
    .filter(Boolean)
    .join(" ");
  const fullWidth = (key: string) =>
    `"${new Array(colCount).fill(key).join(" ")}"`;

  const areas = [
    hasHeader && fullWidth("HH"),
    `"${mainRow}"`,
    p.presets && fullWidth("PP"),
  ]
    .filter(Boolean)
    .join(" ");

  const rows = [
    hasHeader && (isJelly ? "auto" : "60px"),
    isJelly ? "1fr" : "auto",
    p.presets && (isJelly ? "auto" : "50px"),
  ]
    .filter(Boolean)
    .join(" ");

  return {
    display: "grid",
    gridTemplateColumns: cols,
    gridTemplateRows: rows,
    gridTemplateAreas: areas,
  };
};