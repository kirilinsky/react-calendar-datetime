import { CSSProperties } from "react";

type GridLayoutProps = {
  time?: boolean;
  timeGrid?: boolean;
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
  const isCramped = !!(p.monthsGrid && p.timeGrid);
  const colCount = (p.monthsGrid ? 1 : 0) + 1 + (p.timeGrid ? 1 : 0);

  const cols = [
    p.monthsGrid && jelly("20cqw", "24cqw", "1.7fr", isJelly, isCramped),
    isJelly ? "1fr" : "5fr",
    p.timeGrid && jelly("16cqw", "22cqw", "1.3fr", isJelly, isCramped),
  ]
    .filter(Boolean)
    .join(" ");

  const hasHeader = !!(
    p.years ||
    p.compactMonths ||
    p.compactYears ||
    p.months ||
    p.time
  );

  const mainRow = [p.monthsGrid && "MM", "DD", p.timeGrid && "TT"]
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
    hasHeader && (isJelly ? "auto" : "minmax(50px, auto)"),
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
