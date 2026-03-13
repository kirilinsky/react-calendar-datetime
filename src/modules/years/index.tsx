import React from "react";
import dayjs from "dayjs";
import { Left, Right } from "../../Icons";
import * as s from "./years.styles";
import { YearsProps } from "@/types/years";

const Years: React.FC<YearsProps> = ({
  date,
  toggleYearPicker,
  changeAction,
}) => {
  const d = dayjs(date);

  const handleYearChange = (offset: number) => {
    changeAction(d.add(offset, "year"));
  };

  const onKey = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
  };

  return (
    <div className={s.container}>
      <div
        tabIndex={0}
        role="button"
        className={s.arrow}
        onClick={() => handleYearChange(-1)}
        onKeyDown={(e) => onKey(e, () => handleYearChange(-1))}
      >
        <Left />
      </div>

      <div
        onClick={toggleYearPicker}
        className={s.currentYear}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => onKey(e, toggleYearPicker)}
      >
        {d.format("YYYY")}
      </div>

      <div
        onClick={() => handleYearChange(1)}
        role="button"
        tabIndex={0}
        className={s.arrow}
        onKeyDown={(e) => onKey(e, () => handleYearChange(1))}
      >
        <Right />
      </div>
    </div>
  );
};

export default Years;
