import React from "react";
import * as s from "./days.styles";
import { DaysProps } from "@/types/days";
import {
  setDateValue,
  getDaysInMonth,
  getFirstDayOffset,
} from "@/utils/date-utils";

const Days: React.FC<DaysProps> = ({ date, changeAction, weekdays }) => {
  const currentDay = date.getDate();
  const daysInMonth = getDaysInMonth(date);
  const offset = getFirstDayOffset(date);

  const TOTAL_CELLS = 42;
  const monthKey = `${date.getFullYear()}-${date.getMonth()}`;

  const handleSetDay = (day: number) => {
    if (day === currentDay) return;
    changeAction(setDateValue(date, day));
  };

  return (
    <div
      className={`${s.container} animating`}
      role="grid"
      aria-label="Calendar days"
      key={monthKey}
    >
      <div role="row" style={{ display: "contents" }}>
        {weekdays.map((day) => (
          <div key={day} className={s.header} role="columnheader">
            {day}
          </div>
        ))}
      </div>

      <div role="row" style={{ display: "contents" }}>
        {Array.from({ length: TOTAL_CELLS }).map((_, i) => {
          const dayNumber = i - offset + 1;
          const isCurrentMonth = dayNumber > 0 && dayNumber <= daysInMonth;
          const isSelected = isCurrentMonth && dayNumber === currentDay;

          return (
            <div
              key={i}
              onClick={
                isCurrentMonth ? () => handleSetDay(dayNumber) : undefined
              }
              onKeyDown={(e) => {
                if (isCurrentMonth && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  handleSetDay(dayNumber);
                }
              }}
              tabIndex={isCurrentMonth ? 0 : -1}
              role="gridcell"
              aria-selected={isSelected}
              aria-label={isCurrentMonth ? `Day ${dayNumber}` : undefined}
              className={`${s.dayItem} ${isSelected ? s.active : ""}`}
              style={{
                cursor: isCurrentMonth ? "pointer" : "default",
                visibility: isCurrentMonth ? "visible" : "hidden",
              }}
            >
              {isCurrentMonth && <span aria-hidden="true">{dayNumber}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Days;
