import React from "react";
import * as s from "./months.styles";
import { MonthsProps } from "@/types/months";
import { setMonth } from "@/utils/date-utils";
import { activeItem } from "@/styles/shared.styles";

const Months: React.FC<MonthsProps> = ({ date, monthsNames, changeAction }) => {
  const cur = date.getMonth();

  return (
    <div className={s.container}>
      {monthsNames.map((n, i) => (
        <button
          key={i}
          type="button"
          className={`${s.item} ${i === cur ? activeItem : ""}`}
          onClick={() => changeAction(setMonth(date, i))}
        >
          {n}
        </button>
      ))}
    </div>
  );
};

export default Months;
