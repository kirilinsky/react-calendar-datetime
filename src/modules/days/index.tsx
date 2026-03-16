import React, { useCallback, useMemo } from "react";
import * as s from "./days.styles";
import { DaysProps } from "@/types/days";
import { getFirstDayOffset, checkIsDateDisabled } from "@/utils/date-utils";
import { activeItem, otherItem } from "@/styles/shared.styles";

const CELLS = Array.from({ length: 42 }, (_, i) => i);

const Days: React.FC<DaysProps> = ({
  date,
  changeAction,
  weekdays,
  minDate,
  maxDate,
}) => {
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const offset = getFirstDayOffset(date);

  const calendarData = useMemo(() => {
    return CELLS.map((i) => {
      const fullDate = new Date(currentYear, currentMonth, i - offset + 1);
      const isCurrentMonth = fullDate.getMonth() === currentMonth;
      const day = fullDate.getDate();

      const isDisabled = checkIsDateDisabled(day, fullDate, minDate, maxDate);

      return {
        day,
        fullDate,
        isCurrentMonth,
        isDisabled,
        isSelected:
          isCurrentMonth &&
          day === date.getDate() &&
          fullDate.getFullYear() === currentYear,
      };
    });
  }, [currentYear, currentMonth, offset, date, minDate, maxDate]);

  const handleSetDay = useCallback(
    (targetDate: Date, isDisabled: boolean) => {
      if (!isDisabled) {
        changeAction(targetDate);
      }
    },
    [changeAction],
  );

  return (
    <div
      className={s.container + " animating"}
      role="grid"
      aria-label="days"
      key={`${currentYear}-${currentMonth}`}
    >
      <div role="row" style={{ display: "contents" }}>
        {weekdays.map((day) => (
          <div key={day} className={s.header} role="columnheader">
            {day}
          </div>
        ))}
      </div>

      <div role="row" style={{ display: "contents" }}>
        {calendarData.map(
          ({ day, fullDate, isCurrentMonth, isDisabled, isSelected }, i) => (
            <button
              key={i}
              type="button"
              disabled={isDisabled}
              onClick={() => handleSetDay(fullDate, isDisabled)}
              aria-selected={isSelected}
              className={`
              ${s.dayItem} 
            ${isSelected ? activeItem : ""} 
      ${!isCurrentMonth ? otherItem : ""}
              
            `}
            >
              {day}
            </button>
          ),
        )}
      </div>
    </div>
  );
};

export default Days;
