import clsx from "clsx";
import { Dayjs } from "dayjs";
import React from "react";

interface MonthsProps {
  date: Dayjs;
  changeAction: (date: Dayjs) => void;
  monthsNames: string[];
}

const Months: React.FC<MonthsProps> = ({ date, monthsNames, changeAction }) => {
  const currentMonth = date.month();

  return (
    <div className="calendar-months">
      {monthsNames.map((name, i) => (
        <div
          key={i}
          className={clsx("calendar-months-month", {
            calendar_active: i === currentMonth,
          })}
          onClick={() => changeAction(date.month(i))}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default Months;
