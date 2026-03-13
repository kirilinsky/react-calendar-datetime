import clsx from "clsx";
import { Dayjs } from "dayjs";
import React from "react";
// Путь по твоему запросу
import * as s from "@/styles/styles.css";

interface MonthsProps {
  date: Dayjs;
  changeAction: (date: Dayjs) => void;
  monthsNames: string[];
}

const Months: React.FC<MonthsProps> = ({ date, monthsNames, changeAction }) => {
  const currentMonth = date.month();

  return (
    <div className={s.months}>
      {monthsNames.map((name, i) => (
        <div
          key={i}
          className={clsx(s.interactive, {
            [s.active]: i === currentMonth,
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
