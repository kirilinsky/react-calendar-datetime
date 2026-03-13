import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import localeData from "dayjs/plugin/localeData";
import { setup } from "goober";
import { Years, YearPicker, Days, Time, Months, Presets } from "../modules";
import * as s from "./calendar.styles";
import { getThemeVars } from "@/themes/themes";
import { CalendarProps } from "@/types/calendar";

setup(React.createElement);
dayjs.extend(localeData);

export const Calendar: React.FC<CalendarProps> = ({
  presets = false,
  months = true,
  date = new Date(),
  time = false,
  locale = "en",
  onChangeDate,
  width = null,
  height = null,
  theme = "light",
}) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [showYearPicker, setShowYearPicker] = useState(false);

  const currentLocale = shouldRender ? locale : "en";
  const dateObj = dayjs(date).locale(currentLocale);

  const toggleYearPicker = () => setShowYearPicker(!showYearPicker);

  const handleChange = (newDate: Dayjs) => {
    onChangeDate?.(newDate.toDate());
  };

  useEffect(() => {
    let isMounted = true;
    const loadLocale = async () => {
      try {
        if (locale !== "en") await import(`dayjs/locale/${locale}.js`);
        if (isMounted) {
          dayjs.locale(locale);
          setShouldRender(true);
        }
      } catch (err) {
        console.warn(`Could not load locale: ${locale}`, err);
        if (isMounted) setShouldRender(true);
      }
    };
    loadLocale();
    return () => {
      isMounted = false;
    };
  }, [locale]);

  const monthsNames = shouldRender
    ? Array.from({ length: 12 }, (_, i) =>
        dayjs().locale(locale).month(i).format("MMMM"),
      )
    : [];
  const weekdays = shouldRender
    ? dayjs().locale(locale).localeData().weekdaysMin()
    : [];

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
          {shouldRender && (
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
