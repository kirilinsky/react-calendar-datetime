import React, { useMemo } from "react";
import { CalendarProps } from "@/types/calendar";
import { CalendarProvider } from "@/components/provider/provider";
import { getGridLayout } from "@/helpers/get-grid-layout";
import { CalendarLayout } from "../layout/layout";
import { getVarths } from "@/themes/themes";

export const Calendar: React.FC<CalendarProps> = ({
  width = "100%",
  height = "auto",
  theme = "paper",
  presets = false,
  compactMonths = true,
  compactYears = false,
  years = true,
  time = false,
  months = false,
  locale = "en",
  disableWeekends = false,
  startOfWeek = 1,
  jellyMode = false,
  gradientBackground = false,
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
    months,
    locale,
    disableWeekends,
    startOfWeek,
    jellyMode,
    gradientBackground,
    highlightWeekends,
    ...restProps,
  };

  const containerStyle = useMemo(() => {
    const themeVars = getVarths(theme);
    const gridLayout = getGridLayout({
      presets,
      compactMonths,
      compactYears,
      years,
      time,
      months,
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
