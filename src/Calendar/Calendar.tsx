import classNames from "classnames";
import React, { useEffect, useState } from "react";
import "./calendar.css";
import dayjs, { Dayjs } from "dayjs";
import { Years, YearsPicker, Days, Time, Months, Presets } from "../modules";

export interface CalendarProps {
  presets?: boolean;
  date?: Date | string | number | Dayjs;
  time?: boolean;
  locale?: string;
  onChangeDate?: (date: Date) => void;
  width?: string | number | null;
  height?: string | number | null;
  dark?: boolean;
}

export const Calendar: React.FC<CalendarProps> = ({
  presets = false,
  date = new Date(),
  time = false,
  locale = "en-gb",
  onChangeDate,
  width = null,
  height = null,
  dark: dark_calendar = false,
}) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [showYearsPicker, setShowYearsPicker] = useState(false);

  const dateObj = dayjs(date);

  const toggleYearsPicker = () => {
    setShowYearsPicker(!showYearsPicker);
  };

  const handleChange = (newDate: Dayjs) => {
    if (onChangeDate) {
      onChangeDate(newDate.toDate());
    } else {
      console.warn('Must be a handle function "onChangeDate"');
    }
  };

  useEffect(() => {
    if (locale && typeof locale === "string") {
      import(`../../node_modules/dayjs/locale/${locale}.js`)
        .then(() => {
          dayjs.locale(locale);
          setShouldRender(true);
        })
        .catch((err) => {
          console.warn(`Locale "${locale}" not found, using default:`, err);
          setShouldRender(true);
        });
    } else {
      setShouldRender(true);
    }
  }, [locale]);

  return (
    <div
      style={{ width: width ?? undefined, height: height ?? undefined }}
      className={classNames("calendar", {
        with_time: time,
        with_presets: presets,
        years_picker: showYearsPicker,
        dark_calendar,
      })}
    >
      {showYearsPicker ? (
        <YearsPicker
          date={dateObj}
          changeAction={handleChange}
          toggleYearsPicker={toggleYearsPicker}
        />
      ) : (
        <>
          <Years
            date={dateObj}
            toggleYearsPicker={toggleYearsPicker}
            changeAction={handleChange}
          />
          {shouldRender && (
            <Months date={dateObj} changeAction={handleChange} />
          )}
          <Days date={dateObj} changeAction={handleChange} />
          {time && <Time date={dateObj} changeAction={handleChange} />}
          {presets && (
            <Presets
              locale={locale}
              date={dateObj}
              changeAction={handleChange}
            />
          )}
        </>
      )}
    </div>
  );
};
