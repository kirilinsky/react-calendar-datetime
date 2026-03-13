import clsx from "clsx";
import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import localeData from "dayjs/plugin/localeData";
import * as s from "@/styles/styles.css";
import { Years, YearPicker, Days, Time, Months, Presets } from "@/modules";
import { CalendarProps } from "@/types/calendar";

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
    if (onChangeDate) {
      onChangeDate(newDate.toDate());
    } else {
      console.warn('Must provide an "onChangeDate" function');
    }
  };

  useEffect(() => {
    let isMounted = true;
    const loadLocale = async () => {
      try {
        if (locale !== "en") {
          await import(`dayjs/locale/${locale}.js`);
          if (isMounted) dayjs.locale(locale);
        }
      } catch (err) {
        console.warn(`Could not load locale: ${locale}`, err);
      } finally {
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
      style={{ width: width ?? undefined, height: height ?? undefined }}
      className={clsx(s.calendar, s.themes[theme], {
        with_time: time,
        with_presets: presets,
        years_picker: showYearPicker,
        no_months: !months,
      })}
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
