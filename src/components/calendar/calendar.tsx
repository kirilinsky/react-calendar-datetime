import React, { useMemo } from "react";
import { CalendarProps } from "@/types/calendar";
import { CalendarProvider } from "@/components/provider/provider";
import { getGridLayout } from "@/helpers/get-grid-layout";
import { CalendarLayout } from "../layout/layout";

export const Calendar: React.FC<CalendarProps> = ({
  width = "100%",
  height = "auto",
  theme = "paper",
  presets = false,
  compactMonths = false,
  compactYears = true,
  years = false,
  time = true,
  timeGrid = false,
  months = true,
  hour12 = false,
  monthsGrid = false,
  locale = "en",
  disableWeekends = false,
  startOfWeek = 1,
  jellyMode = false,
  brutalism = false,
  gradient = false,
  highlightWeekends = true,
  ...restProps
}) => {
  const containerStyle = useMemo(
    () =>
      ({
        width,
        height,
        ...getGridLayout({
          presets,
          compactMonths,
          compactYears,
          years,
          timeGrid,
          time,
          months,
          monthsGrid,
          jellyMode,
        }),
      }) as React.CSSProperties,
    [
      width,
      height,
      theme,
      presets,
      compactYears,
      compactMonths,
      years,
      time,
      timeGrid,
      months,
      monthsGrid,
      jellyMode,
    ],
  );

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
      disableWeekends={disableWeekends}
      startOfWeek={startOfWeek}
      jellyMode={jellyMode}
      brutalism={brutalism}
      gradient={gradient}
      highlightWeekends={highlightWeekends}
      theme={theme}
      width={width}
      height={height}
      {...restProps}
    >
      <div
        data-theme={theme}
        style={{ containerType: "inline-size", width, height }}
      >
        <CalendarLayout containerStyle={containerStyle} brutalism={brutalism} />
      </div>
    </CalendarProvider>
  );
};
