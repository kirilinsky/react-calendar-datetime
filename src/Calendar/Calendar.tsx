import React, { useState, useEffect } from "react";
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
  date: initialDate = new Date(),
  time = false,
  locale = "en",
  onChangeDate,
  width = null,
  height = null,
  theme = "light",
}) => {
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const dateObj =
    initialDate instanceof Date ? initialDate : new Date(initialDate);

  const toggleYearPicker = () => setShowYearPicker(!showYearPicker);

  const handleChange = (newDate: Date) => {
    onChangeDate?.(newDate);
  };

  const monthsNames = isMounted ? getMonthNames(locale) : [];
  const weekdays = isMounted ? getWeekdaysNames(locale) : [];

  return (
    <div
      className={s.calendarContainer({
        time,
        presets,
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
          <Years
            date={dateObj}
            toggleYearPicker={toggleYearPicker}
            changeAction={handleChange}
          />
          {months && (
            <Months
              monthsNames={monthsNames}
              date={dateObj}
              changeAction={handleChange}
            />
          )}
          {isMounted && (
            <Days
              date={dateObj}
              changeAction={handleChange}
              weekdays={weekdays}
            />
          )}
          {time && <Time date={dateObj} changeAction={handleChange} />}
          {presets && <Presets locale={locale} changeAction={handleChange} />}
        </>
      )}
    </div>
  );
};
