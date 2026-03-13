import clsx from "clsx";
import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useMemo, useState } from "react";

interface DaysProps {
  date: Dayjs;
  changeAction: (date: Dayjs) => void;
  weekdays: dayjs.WeekdayNames | never[];
}

const Days: React.FC<DaysProps> = ({ date, changeAction, weekdays }) => {
  const currentDay = date.date();

  const daysArray = useMemo(() => {
    const count = date.daysInMonth();
    return Array.from({ length: count }, (_, i) => i + 1);
  }, [date]);

  const setDay = (day: number) => {
    if (day === currentDay) return;
    changeAction(date.date(day));
  };

  return (
    <div className="calendar-days">
      {weekdays.map((day) => (
        <div key={day} className="calendar-days-header">
          {day}
        </div>
      ))}
      {daysArray.map((x) => (
        <div
          key={x}
          onClick={() => setDay(x)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setDay(x);
          }}
          tabIndex={0}
          role="button"
          className={clsx("calendar-days-day", {
            calendar_active: x === currentDay,
          })}
        >
          {x}
        </div>
      ))}
    </div>
  );
};

export default Days;
