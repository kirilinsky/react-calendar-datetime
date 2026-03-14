import React, { useCallback } from "react";
import * as s from "./days.styles";
import { DaysProps } from "@/types/days";
import {
  setDateValue,
  getDaysInMonth,
  getFirstDayOffset,
} from "@/utils/date-utils";

const CELLS = Array.from({ length: 42 }, (_, i) => i);

const Days: React.FC<DaysProps> = ({ date, changeAction, weekdays }) => {
  const currentDay = date.getDate();
  const daysInMonth = getDaysInMonth(date);
  const offset = getFirstDayOffset(date);

  const handleSetDay = useCallback(
    (day: number) => {
      if (day !== currentDay) changeAction(setDateValue(date, day));
    },
    [currentDay, date, changeAction],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, day: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSetDay(day);
      }
    },
    [handleSetDay],
  );

  return (
    <div
      className={s.container + " animating"}
      role="grid"
      aria-label="Calendar days"
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

          return (
            <div
              key={i}
              onClick={isValid ? () => handleSetDay(day) : undefined}
              onKeyDown={isValid ? (e) => handleKeyDown(e, day) : undefined}
              tabIndex={isValid ? 0 : -1}
              role="gridcell"
              aria-selected={isSelected}
              aria-label={isValid ? "Day " + day : undefined}
              className={isSelected ? s.dayItem + " " + s.active : s.dayItem}
              style={isValid ? undefined : { visibility: "hidden" }}
            >
              {isValid && <span aria-hidden="true">{day}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Days;
