import classNames from "classnames";
import React, { useEffect, useState } from "react";
import "./calendar.css";
import { Years, YearsPicker, Days, Time, Months, Presets } from "../modules";

export const Calendar = ({
  presets = false,
  date = new Date(),
  time = false,
  locale = "en-gb",
  onChangeDate,
  width = null,
  height = null,
  dark: dark_calendar = false
}) => {
  const [shouldRender, setShouldRender] = useState(!locale);
  const [showYearsPicker, setShowYearsPicker] = useState(false)

  const toggleYearsPicker = () => {
    setShowYearsPicker(!showYearsPicker)
  }

  const handleChange = (date) => {
    if (onChangeDate) {
      onChangeDate(date.toDate());
    } else {
      console.warn('Must be a handle function "onChangeDate"');
    }
  };

  useEffect(() => {
    locale &&
      typeof locale === "string" &&
      import(`moment/locale/${locale}`).then(() => {
        setShouldRender(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{ width, height }}
      className={classNames("calendar", {
        with_time: time,
        with_presets: presets,
        years_picker: showYearsPicker,
        dark_calendar
      })}
    >

      {showYearsPicker ? <YearsPicker date={date} changeAction={handleChange} toggleYearsPicker={toggleYearsPicker} /> : <>
        <Years date={date} toggleYearsPicker={toggleYearsPicker} changeAction={handleChange} />
        {shouldRender && <Months date={date} changeAction={handleChange} />}
        < Days date={date} changeAction={handleChange} />
        {time && <Time date={date} changeAction={handleChange} />}
        {presets && <Presets locale={locale} date={date} changeAction={handleChange} />}
      </>}

    </div>
  );
};
