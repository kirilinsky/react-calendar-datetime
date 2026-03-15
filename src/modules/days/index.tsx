import React, { useCallback } from "react";
import * as s from "./days.styles";
import { DaysProps } from "@/types/days";
import {
  setDateValue,
  getDaysInMonth,
  getFirstDayOffset,
  checkIsDateDisabled,
} from "@/utils/date-utils";
import { activeItem } from "@/styles/shared.styles";

const CELLS = Array.from({ length: 42 }, (_, i) => i);

const Days: React.FC<DaysProps> = ({
  date,
  changeAction,
  weekdays,
  minDate,
  maxDate,
}) => {
  const currentDay = date.getDate();
  const daysInMonth = getDaysInMonth(date);
  const offset = getFirstDayOffset(date);

  const isDateDisabled = useCallback(
    (day: number) => {
      if (!minDate && !maxDate) return false;
      return checkIsDateDisabled(day, date, minDate, maxDate);
    },
    [date, minDate, maxDate],
  );

  const handleSetDay = useCallback(
    (day: number) => {
      if (day !== currentDay && !isDateDisabled(day))
        changeAction(setDateValue(date, day));
    },
    [currentDay, date, changeAction, isDateDisabled],
  );

  return (
    <div
      className={s.container + " animating"}
      role="grid"
      aria-label="days"
      key={date.getFullYear() + "-" + date.getMonth()}
    >
      <div role="row" style={{ display: "contents" }}>
        {weekdays.map((day) => (
          <div key={day} className={s.header} role="columnheader">
            {day}
          </div>
        ))}
      </div>

      <div role="row" style={{ display: "contents" }}>
        {CELLS.map((i) => {
          const day = i - offset + 1;
          const isValid = day > 0 && day <= daysInMonth;
          const isSelected = isValid && day === currentDay;
          const outOfLimitedRange = isValid && isDateDisabled(day);

          return (
            <button
              key={i}
              type="button"
              disabled={!isValid || outOfLimitedRange}
              onClick={() => handleSetDay(day)}
              aria-selected={isSelected}
              className={`${s.dayItem} ${isSelected ? activeItem : ""}`}
              style={isValid ? undefined : { visibility: "hidden" }}
            >
              {isValid && day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Days;
