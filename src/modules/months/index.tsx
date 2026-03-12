import clsx from "clsx";
import dayjs, { Dayjs } from "dayjs";
import React from "react";

interface MonthsProps {
  date: Date | string | number | Dayjs;
  changeAction: (date: Dayjs) => void;
}

const Months: React.FC<MonthsProps> = ({ date, changeAction }) => {
  const currentDayjs = dayjs(date);
  const currentMonth = currentDayjs.month();

  const setMonth = (num: number) => {
    if (num === currentMonth) {
      return;
    }
    changeAction(currentDayjs.month(num));
  };

  const monthsField = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="calendar-months">
      {monthsField.map((x) => (
        <div
          key={x}
          tabIndex={0}
          role="button"
          className={clsx("calendar-months-month", {
            calendar_active: x === currentMonth,
          })}
          onClick={() => setMonth(x)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setMonth(x);
          }}
        >
          {dayjs().month(x).format("MMMM")}
        </div>
      ))}
    </div>
  );
};

export default Months;
