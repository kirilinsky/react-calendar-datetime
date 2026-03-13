import clsx from "clsx";
import React, { useEffect, useInsertionEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import localeData from "dayjs/plugin/localeData";
import "dayjs/locale/en";
import "dayjs/locale/es";
import "dayjs/locale/ru";
import "dayjs/locale/de";
import "dayjs/locale/sr";
import "dayjs/locale/fr";

import { Years, YearPicker, Days, Time, Months, Presets } from "../modules";
import { CalendarTheme } from "@/types/themes";
import { LocaleKey } from "@/i18n";
import { calendarStyles } from "@/styles";

dayjs.extend(localeData);

export interface CalendarProps {
  presets?: boolean;
  months?: boolean;
  date?: Date | string | number | Dayjs;
  time?: boolean;
  locale?: LocaleKey;
  onChangeDate?: (date: Date) => void;
  width?: string | number | null;
  height?: string | number | null;
  theme?: CalendarTheme;
}

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

  useInsertionEffect(() => {
    const styleId = "react-calendar-datetime-styles";
    if (typeof document !== "undefined" && !document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = calendarStyles;
      document.head.appendChild(style);
    }
  }, []);

  const handleChange = (newDate: Dayjs) => {
    if (onChangeDate) {
      onChangeDate(newDate.toDate());
    } else {
      console.warn('Must provide an "onChangeDate" function');
    }
  };
  const monthsNames = shouldRender
    ? Array.from({ length: 12 }, (_, i) =>
        dayjs().locale(locale).month(i).format("MMMM"),
      )
    : [];

  useEffect(() => {
    let isMounted = true;

    const loadLocale = async () => {
      try {
        if (locale === "en") {
          dayjs.locale("en");
        } else {
          await import(`dayjs/locale/${locale}.js`);

          if (isMounted) {
            dayjs.locale(locale);
          }
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

  const weekdays = shouldRender
    ? dayjs().locale(locale).localeData().weekdaysMin()
    : [];

  return (
    <div
      style={{ width: width ?? undefined, height: height ?? undefined }}
      className={clsx("calendar", {
        with_time: time,
        with_presets: presets,
        years_picker: showYearPicker,
        no_months: !months,
      })}
      data-theme={theme !== "light" ? theme : undefined}
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
