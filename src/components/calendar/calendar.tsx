import React, { useEffect, useMemo, useRef, useState } from "react";
import { CalendarProps } from "@/types/calendar";
import { CalendarProvider } from "@/components/provider/provider";
import { getGridLayout, getLayoutMode } from "@/helpers/get-grid-layout";
import { CalendarLayout } from "../layout/layout";

export const Calendar: React.FC<CalendarProps> = ({
  width = "100%",
  theme = "paper",
  presets = true,
  compactMonths = false,
  compactYears = true,
  years = false,
  time = true,
  timeGrid = false,
  months = true,
  hour12 = false,
  monthsGrid = false,
  locale = "en",
  startOfWeek = 1,
  brutalism = false,
  gradient = false,
  highlightWeekends = true,
  ...restProps
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(() => {
    if (typeof width === "number") return width;
    if (typeof width === "string" && width.endsWith("px"))
      return parseFloat(width);
    return 800;
  });

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const containerStyle = useMemo(
    () =>
      ({
        width,

        ...getGridLayout(
          {
            presets,
            compactMonths,
            compactYears,
            years,
            timeGrid,
            time,
            months,
            monthsGrid,
          },
          containerWidth,
        ),
      }) as React.CSSProperties,
    [
      width,
      presets,
      compactYears,
      compactMonths,
      years,
      time,
      timeGrid,
      months,
      monthsGrid,

      containerWidth,
    ],
  );

  const layoutMode = getLayoutMode(containerWidth, { monthsGrid, timeGrid });

  return (
    <CalendarProvider
      locale={locale}
      presets={presets}
      compactMonths={compactMonths}
      compactYears={compactYears}
      years={years}
      time={time}
      hour12={hour12}
      timeGrid={timeGrid}
      months={months}
      monthsGrid={monthsGrid}
      startOfWeek={startOfWeek}
      brutalism={brutalism}
      gradient={gradient}
      highlightWeekends={highlightWeekends}
      theme={theme}
      width={width}
      {...restProps}
    >
      <div
        ref={wrapperRef}
        data-theme={theme}
        data-layout={layoutMode}
        style={{ containerType: "inline-size", width }}
      >
        <CalendarLayout containerStyle={containerStyle} brutalism={brutalism} />
      </div>
    </CalendarProvider>
  );
};
