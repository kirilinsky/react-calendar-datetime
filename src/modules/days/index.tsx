import clsx from "clsx";
import dayjs, { Dayjs } from "dayjs";
import React, { useMemo } from "react";
import * as s from "@/styles/styles.css";

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
    <div className={s.days}>
      {weekdays.map((day) => (
        <div key={day} className={s.daysHeader}>
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
          className={clsx(s.interactive, {
            [s.active]: x === currentDay,
          })}
        >
          {x}
        </div>
      ))}
    </div>
  );
};

export default Days;
