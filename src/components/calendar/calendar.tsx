import React, { useMemo } from "react";
import { CalendarProps } from "@/types/calendar";
import { CalendarProvider } from "@/components/provider/provider";
import { DaysComponent } from "../days/days";
import styles from "./Calendar.module.css";
import { HeaderComponent } from "../header/header";
import { getGridLayout } from "@/helpers/get-grid-layout";
import { getThemeVariables } from "@/helpers/get-theme";
import { MonthsComponent } from "../months/months";
import { Presets } from "@/modules";
import { PresetsComponent } from "../presets/presets";

export const Calendar: React.FC<CalendarProps> = ({
  width = "100%",
  height = "auto",
  theme = "paper",
  presets = false,
  compactMonths = false,
  years = true,
  time = false,
  months = true,
  locale = "en",
  ...restProps
}) => {
  const resolvedProps = {
    width,
    height,
    theme,
    presets,
    compactMonths,
    years,
    time,
    months,
    locale,
    ...restProps,
  };

  const containerStyle = useMemo(() => {
    const themeVars = getThemeVariables(theme);
    const gridLayout = getGridLayout({
      presets,
      compactMonths,
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
  }, [width, height, theme, presets, compactMonths, years, time, months]);

  return (
    <CalendarProvider {...resolvedProps}>
      <div
        className={`${styles.calendarContainer} theme-${theme}`}
        style={containerStyle}
      >
        {presets && <PresetsComponent />}

        {(years || compactMonths) && <HeaderComponent />}

        <DaysComponent />

        {months && <MonthsComponent />}

        {time && <div style={{ gridArea: "TT" }}>time</div>}
      </div>
    </CalendarProvider>
  );
};
