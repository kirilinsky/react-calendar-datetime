import React from "react";
import * as s from "./months.styles";
import { MonthsProps } from "@/types/months";

const Months: React.FC<MonthsProps> = ({ date, monthsNames, changeAction }) => {
  const currentMonth = date.month();

  return (
    <div className={s.container}>
      {monthsNames.map((name, i) => (
        <div
          key={i}
          className={`${s.item} ${i === currentMonth ? s.active : ""}`}
          onClick={() => changeAction(date.month(i))}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") changeAction(date.month(i));
          }}
          tabIndex={0}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default Months;
