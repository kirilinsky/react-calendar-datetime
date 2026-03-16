import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./days.module.css";
import { useCalendarContext } from "../provider/provider";
import {
  checkIsDateDisabled,
  getFirstDayOffset,
  getWeekdaysNames,
} from "@/utils/date-utils";
import shared from "@/global/global.module.css";

const CELLS = Array.from({ length: 42 }, (_, i) => i);

export const DaysComponent: React.FC = () => {
  const { minDate, maxDate, date, onChangeDate, locale } = useCalendarContext();

  const [direction, setDirection] = useState<"left" | "right" | "none">("none");
  const [prevDate, setPrevDate] = useState(date);

  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const offset = getFirstDayOffset(date);

  useEffect(() => {
    if (date.getTime() !== prevDate.getTime()) {
      const isForward = date > prevDate;
      setDirection(isForward ? "right" : "left");
      setPrevDate(date);
    }
  }, [date, prevDate]);

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

  const wDays = useMemo(() => getWeekdaysNames(locale), [locale]);

  const handleSetDay = useCallback(
    (targetDate: Date, isDisabled: boolean) => {
      if (!isDisabled) {
        onChangeDate(targetDate);
      }
    },
    [onChangeDate],
  );

  const animationKey = `${currentMonth}-${currentYear}`;

  return (
    <div
      aria-label="days"
      key={animationKey}
      className={`${styles.dayGridContainer} ${direction !== "none" ? styles[direction] : ""}`}
    >
      <div role="row" style={{ display: "contents" }}>
        {wDays.map((day) => (
          <div key={day} className={styles.header} role="columnheader">
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
                ${styles.dayItem} 
              ${isSelected ? shared.activeItem : ""} 
        ${!isCurrentMonth ? shared.otherItem : ""}
                
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
