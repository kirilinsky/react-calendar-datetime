import { CSSProperties } from "react";

type GridLayoutProps = {
  time?: boolean;
  presets?: boolean;
  monthsGrid?: boolean;
  years?: boolean;
  months?: boolean;
  compactYears?: boolean;
  compactMonths?: boolean;
  jellyMode?: boolean;
};

const jelly = (
  cramped: string,
  normal: string,
  fallback: string,
  isJelly: boolean,
  isCramped: boolean,
) => (isJelly ? (isCramped ? cramped : normal) : fallback);

export const getGridLayout = (p: GridLayoutProps): CSSProperties => {
  const isJelly = p.jellyMode !== false;
  const isCramped = !!(p.monthsGrid && p.time);
  const colCount = (p.monthsGrid ? 1 : 0) + 1 + (p.time ? 1 : 0);

  const cols = [
    p.monthsGrid && jelly("25cqw", "28cqw", "2fr", isJelly, isCramped),
    isJelly ? "1fr" : "5fr",
    p.time && jelly("15cqw", "20cqw", "2fr", isJelly, isCramped),
  ]
    .filter(Boolean)
    .join(" ");

  const hasHeader = !!(
    p.years ||
    p.compactMonths ||
    p.compactYears ||
    p.months
  );

  const mainRow = [p.monthsGrid && "MM", "DD", p.time && "TT"]
    .filter(Boolean)
    .join(" ");

  const fullWidth = (key: string) => `"${Array(colCount).fill(key).join(" ")}"`;

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
