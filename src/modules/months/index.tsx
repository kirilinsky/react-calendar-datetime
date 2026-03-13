import React from "react";
import * as s from "./months.styles";
import { MonthsProps } from "@/types/months";
import { setMonth } from "@/utils/date-utils";

const Months: React.FC<MonthsProps> = ({ date, monthsNames, changeAction }) => {
  const currentMonth = date.getMonth();

  const handleMonthClick = (index: number) => {
    changeAction(setMonth(date, index));
  };

  return (
    <div className={s.container}>
      {monthsNames.map((name, i) => (
        <div
          key={i}
          className={`${s.item} ${i === currentMonth ? s.active : ""}`}
          onClick={() => handleMonthClick(i)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleMonthClick(i);
            }
          }}
          tabIndex={0}
          role="button"
          aria-pressed={i === currentMonth}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default Months;
