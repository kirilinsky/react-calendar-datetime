import React, { useMemo } from "react";
import { CalendarProps } from "@/types/calendar";
import { CalendarProvider } from "@/components/provider/provider";
import { getGridLayout } from "@/helpers/get-grid-layout";
import { getThemeVariables } from "@/helpers/get-theme";
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
  const resolvedProps = {
    width,
    height,
    theme,
    presets,
    compactMonths,
    compactYears,
    years,
    time,
    hour12,
    monthsGrid,
    timeGrid,
    months,
    locale,
    disableWeekends,
    startOfWeek,
    jellyMode,
    gradient,
    highlightWeekends,
    ...restProps,
  };

  const containerStyle = useMemo(() => {
    const themeVars = getThemeVariables(theme);
    const gridLayout = getGridLayout({
      presets,
      compactMonths,
      compactYears,
      years,
      timeGrid,
      time,
      months,
      monthsGrid,
      jellyMode,
    });

    return {
      width,
      height,
      ...themeVars,
      ...gridLayout,
    } as React.CSSProperties;
  }, [
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
  ]);

  return (
    <CalendarProvider {...resolvedProps}>
      <div style={{ containerType: "inline-size", width, height }}>
        <CalendarLayout
          theme={theme}
          containerStyle={containerStyle}
          brutalism={brutalism}
        />
      </div>
    </CalendarProvider>
  );
};
