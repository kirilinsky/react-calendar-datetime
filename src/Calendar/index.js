import classNames from "classnames";
import React, { useEffect, useState } from "react";
import "./calendar.css";
import { Years, Days, Time, Months, Presets } from "../modules";

const Calendar = ({
  presets = false,
  date = new Date(),
  time = false,
  locale = "en-gb",
  onChangeDate,
  width = null,
  height = null,
}) => {
  const [shouldRender, setShouldRender] = useState(!locale);
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
  }, []);

  return (
    <div
      style={{ width, height }}
      className={classNames("calendar", {
        with_time: time,
        with_presets: presets,
      })}
    >
      <Years date={date} changeAction={handleChange} />
      {shouldRender && <Months date={date} changeAction={handleChange} />}
      <Days date={date} changeAction={handleChange} />
      {time && <Time date={date} changeAction={handleChange} />}
      {presets && (
        <Presets locale={locale} date={date} changeAction={handleChange} />
      )}
    </div>
  );
};

export default Calendar;
