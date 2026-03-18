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
  compactYears = false,
  years = false,
  time = false,
  months = false,
  locale = "en",
  disableWeekends = false,
  startOfWeek = 1,
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
    months,
    locale,
    disableWeekends,
    startOfWeek,
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
    months,
  ]);

  return (
    <CalendarProvider {...resolvedProps}>
      <div style={{ containerType: "inline-size", width, height }}>
        <CalendarLayout theme={theme} containerStyle={containerStyle} />
      </div>
    </CalendarProvider>
  );
};
