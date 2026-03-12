import clsx from "clsx";
import React, { useEffect, useState } from "react";
import "./calendar.css";
import dayjs, { Dayjs } from "dayjs";
import { Years, YearPicker, Days, Time, Months, Presets } from "../modules";
import { CalendarTheme } from "@/types/themes";

export interface CalendarProps {
  presets?: boolean;
  date?: Date | string | number | Dayjs;
  time?: boolean;
  locale?: string;
  onChangeDate?: (date: Date) => void;
  width?: string | number | null;
  height?: string | number | null;
  theme?: CalendarTheme;
}

export const Calendar: React.FC<CalendarProps> = ({
  presets = false,
  date = new Date(),
  time = false,
  locale = "en-gb",
  onChangeDate,
  width = null,
  height = null,
  theme = "light",
}) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [showYearPicker, setShowYearPicker] = useState(false);

  const dateObj = dayjs(date);

  const toggleYearPicker = () => {
    setShowYearPicker(!showYearPicker);
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
      className={clsx("calendar", {
        with_time: time,
        with_presets: presets,
        years_picker: showYearPicker,
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
