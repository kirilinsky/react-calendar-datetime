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
};

export type LayoutMode = "wide" | "medium" | "stacked";

export const getLayoutMode = (
  containerWidth: number,
  props: Pick<GridLayoutProps, "monthsGrid" | "timeGrid">,
): LayoutMode => {
  const hasSidePanel = !!(props.monthsGrid || props.timeGrid);
  const hasBothPanels = !!(props.monthsGrid && props.timeGrid);

  if (hasSidePanel && containerWidth > 0 && containerWidth < 300)
    return "stacked";
  if (hasBothPanels && containerWidth >= 300 && containerWidth < 460)
    return "medium";
  return "wide";
};

export const getGridLayout = (
  p: GridLayoutProps,
  containerWidth = 0,
): CSSProperties => {
  const mode = getLayoutMode(containerWidth, p);

  const hasHeader = !!(
    p.years ||
    p.compactMonths ||
    p.compactYears ||
    p.months ||
    p.time
  );

  if (mode === "stacked") {
    const areaRows = [
      hasHeader && '"HH"',
      p.monthsGrid && '"MM"',
      '"DD"',
      p.timeGrid && '"TT"',
      p.presets && '"PP"',
    ].filter(Boolean) as string[];

    return {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: areaRows.map(() => "auto").join(" "),
      gridTemplateAreas: areaRows.join(" "),
    };
  }

  if (mode === "medium") {
    const areaRows = [
      hasHeader && '"HH HH"',
      '"DD DD"',
      '"MM TT"',
      p.presets && '"PP PP"',
    ].filter(Boolean) as string[];

    return {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: areaRows.map(() => "auto").join(" "),
      gridTemplateAreas: areaRows.join(" "),
    };
  }

  const isCramped = !!(p.monthsGrid && p.timeGrid);
  const colCount = (p.monthsGrid ? 1 : 0) + 1 + (p.timeGrid ? 1 : 0);

  const cols = [
    p.monthsGrid && (isCramped ? "1.6fr" : "1.8fr"),
    "5fr",
    p.timeGrid && (isCramped ? "1.3fr" : "1.4fr"),
  ]
    .filter(Boolean)
    .join(" ");

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

  const rows = [hasHeader && "auto", "auto", p.presets && "auto"]
    .filter(Boolean)
    .join(" ");

  return {
    display: "grid",
    gridTemplateColumns: cols,
    gridTemplateRows: rows,
    gridTemplateAreas: areas,
  };
};
