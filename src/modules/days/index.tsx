import clsx from "clsx";
import dayjs, { Dayjs } from "dayjs";
import localeData from "dayjs/plugin/localeData";
import React, { useEffect, useState } from "react";

interface DaysProps {
  date: Date | string | number | Dayjs;
  changeAction: (date: Dayjs) => void;
}

const Days: React.FC<DaysProps> = ({ date, changeAction }) => {
  const [countDays, setCountDays] = useState<number[]>([]);

  dayjs.extend(localeData);

  const setDay = (day: number) => {
    const currentDayjs = dayjs(date);
    if (day === currentDayjs.date()) {
      return;
    }
    changeAction(currentDayjs.set("date", day));
  };

  useEffect(() => {
    const count = dayjs(date).daysInMonth();
    setCountDays(Array.from({ length: count }, (_, i) => i + 1));
  }, [date]);

  const weekdays = dayjs().localeData().weekdaysMin();
  return (
    <div className="calendar-days">
      {weekdays.map((day) => (
        <div key={day} className="calendar-days-header">
          {day}
        </div>
      ))}
      {countDays.map((x) => (
        <div
          key={x}
          onClick={() => setDay(x)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setDay(x);
          }}
          tabIndex={0}
          role="button"
          className={clsx("calendar-days-day", {
            calendar_active: dayjs(date).date() === x,
          })}
        >
          {x}
        </div>
      ))}
    </div>
  );
};

export default Days;
