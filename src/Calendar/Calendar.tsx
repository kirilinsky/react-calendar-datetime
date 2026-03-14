import React, { useState, useEffect, useMemo } from "react";
import { setup } from "goober";
import { Years, YearPicker, Days, Time, Months, Presets } from "../modules";
import * as s from "./calendar.styles";
import { getThemeVars } from "@/themes/themes";
import { CalendarProps } from "@/types/calendar";
import { getMonthNames, getWeekdaysNames } from "@/utils/date-utils";

setup(React.createElement);

export const Calendar: React.FC<CalendarProps> = ({
  presets = false,
  months = true,
  years = true,
  date: initialDate = new Date(),
  time = false,
  locale = "en",
  onChangeDate,
  width = null,
  height = null,
  theme = "paper",
}) => {
  const [showYearPicker, setShowYearPicker] = useState(false);

  const dateObj =
    initialDate instanceof Date ? initialDate : new Date(initialDate);

  const toggleYearPicker = () => setShowYearPicker(!showYearPicker);

  const handleChange = (newDate: Date) => {
    onChangeDate?.(newDate);
  };

  const mNames = useMemo(() => getMonthNames(locale), [locale]);
  const wDays = useMemo(() => getWeekdaysNames(locale), [locale]);

  return (
    <div
      className={s.calendarContainer({
        time,
        presets,
        years,
        months,
        yearsPicker: showYearPicker,
      })}
      style={{
        width: width ?? undefined,
        height: height ?? undefined,
        ...getThemeVars(theme),
      }}
    >
      {showYearPicker ? (
        <YearPicker
          date={dateObj}
          changeAction={handleChange}
          toggleYearPicker={toggleYearPicker}
        />
      ) : (
        <>
          {years && (
            <Years
              date={dateObj}
              toggleYearPicker={toggleYearPicker}
              changeAction={handleChange}
            />
          )}
          {months && (
            <Months
              monthsNames={mNames}
              date={dateObj}
              changeAction={handleChange}
            />
          )}
          <Days date={dateObj} changeAction={handleChange} weekdays={wDays} />
          {time && <Time date={dateObj} changeAction={handleChange} />}
          {presets && (
            <Presets
              years={years}
              months={months}
              locale={locale}
              changeAction={handleChange}
            />
          )}
        </>
      )}
    </div>
  );
};
