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
  time = false,
  months = true,
  monthsGrid = false,
  locale = "en",
  disableWeekends = false,
  startOfWeek = 1,
  jellyMode = false,
  gradient = false,
  brutalism = false, 
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
    monthsGrid,
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
    months,
    time,
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
