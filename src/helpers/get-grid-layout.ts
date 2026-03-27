import { CSSProperties } from "react";

export const getGridLayout = (p: {
  time?: boolean;
  presets?: boolean;
  monthsGrid?: boolean;
  years?: boolean;
  months?: boolean;
  compactYears?: boolean;
  compactMonths?: boolean;
  jellyMode?: boolean;
}): CSSProperties => {
  const isJelly = p.jellyMode !== false;
  const colCount = (p.monthsGrid ? 1 : 0) + 1 + (p.time ? 1 : 0);
  const isCramped = p.monthsGrid && p.time;

  const cols = [
    p.monthsGrid && (isJelly ? (isCramped ? "25cqw" : "28cqw") : "2fr"),
    isJelly ? "1fr" : "5fr",
    p.time && (isJelly ? (isCramped ? "15cqw" : "20cqw") : "2fr"),
  ]
    .filter(Boolean)
    .join(" ");
  console.log(p.months, "months");

  const hasHeader = p.years || p.compactMonths || p.compactYears || p.months;
  const mainRow = [p.monthsGrid && "MM", "DD", p.time && "TT"]
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
    p.presets && (isJelly ? "auto" : "minmax(50px, auto)"),
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
