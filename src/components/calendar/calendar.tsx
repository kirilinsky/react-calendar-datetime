import React, { useMemo } from "react";
import { CalendarProps } from "@/types/calendar";
import { CalendarProvider } from "@/components/provider/provider";
import { DaysComponent } from "../days/days";
import styles from "./Calendar.module.css";

const getGridLayout = (p: {
  time?: boolean;
  presets?: boolean;
  months?: boolean;
  years?: boolean;
  compactMonths?: boolean;
  yearsPicker?: boolean;
}) => {
  if (p.yearsPicker) {
    return {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr",
      gridTemplateAreas: '"YY"',
    };
  }

  const colCount = (p.months ? 1 : 0) + 1 + (p.time ? 1 : 0);

  const cols = [p.months && "2fr", "5fr", p.time && "2fr"]
    .filter(Boolean)
    .join(" ");
  const hasTopBar = p.years || p.compactMonths;

  const mainRow = [p.months && "MM", "DD", p.time && "TT"]
    .filter(Boolean)
    .join(" ");

  const fullRow = (key: string) =>
    `"${new Array(colCount).fill(key).join(" ")}"`;

  const areas = [
    hasTopBar && fullRow("SS"),
    `"${mainRow}"`,
    p.presets && fullRow("PP"),
  ]
    .filter(Boolean)
    .join(" ");

  const rows = [hasTopBar && "60px", "auto", p.presets && "50px"]
    .filter(Boolean)
    .join(" ");

  return {
    gridTemplateColumns: cols,
    gridTemplateRows: rows,
    gridTemplateAreas: areas,
  };
};

export const Calendar: React.FC<CalendarProps> = ({
  presets = false,
  months = false,
  years = true,
  date = new Date(),
  time = true,
  locale = "en",
  maxDate,
  minDate,
  disabledDates,
  disableWeekends = false,
  startOfWeek = 1,
  compactMonths = false,
  onChangeDate,
  width,
  height,
  theme = "paper",
}) => {
  const dynamicGridStyles = useMemo(
    () => getGridLayout({ time, presets, months, years, compactMonths }),
    [time, presets, months, years, compactMonths],
  );

  return (
    <CalendarProvider
      date={date}
      maxDate={maxDate}
      minDate={minDate}
      disabledDates={disabledDates}
      disableWeekends={disableWeekends}
      startOfWeek={startOfWeek}
      locale={locale}
      onChangeDate={onChangeDate}
    >
      <div
        className={`${styles.calendarContainer} theme-${theme}`}
        style={{
          width: width ?? "100%",
          height: height ?? "auto",
          ...dynamicGridStyles,
        }}
      >
        {presets && <div style={{ gridArea: "PP" }}>presets</div>}

        {(years || compactMonths) && (
          <div style={{ gridArea: "SS" }}>years header</div>
        )}

        {/*  {yearsPicker && (
          <div style={{ gridArea: "YY" }}>year picker full screen</div>
        )} */}

        <DaysComponent />

        {months && <div style={{ gridArea: "MM" }}>months</div>}

        {time && <div style={{ gridArea: "TT" }}>time</div>}
      </div>
    </CalendarProvider>
  );
};
