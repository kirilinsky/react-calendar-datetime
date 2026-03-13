import React from "react";
import { Left, Right } from "../../Icons";
import * as s from "./years.styles";
import { YearsProps } from "@/types/years";
import { addYears } from "@/utils/date-utils";

const Years: React.FC<YearsProps> = ({
  date,
  toggleYearPicker,
  changeAction,
}) => {
  const currentYear = date.getFullYear();

  const handleYearChange = (offset: number) => {
    changeAction(addYears(date, offset));
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
        aria-label="Previous year"
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
        aria-label="Open year selection"
        onKeyDown={(e) => onKey(e, toggleYearPicker)}
      >
        {currentYear}
      </div>

      <div
        onClick={() => handleYearChange(1)}
        role="button"
        tabIndex={0}
        aria-label="Next year"
        className={s.arrow}
        onKeyDown={(e) => onKey(e, () => handleYearChange(1))}
      >
        <Right />
      </div>
    </div>
  );
};

export default Years;
