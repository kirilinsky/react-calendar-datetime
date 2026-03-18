import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./days.module.css";
import { useCalendarContext } from "../provider/provider";
import {
  checkIsDateDisabled,
  getFirstDayOffset,
  getNextMonthFromSwipe,
} from "@/utils/date-utils";
import shared from "@/global/global.module.css";
import WeekDays from "../week-days/week-days";

const CELLS = Array.from({ length: 42 }, (_, i) => i);

export const DaysComponent: React.FC = () => {
  const { minDate, maxDate, date, onChangeDate, gestures, disableWeekends } =
    useCalendarContext();

  const [direction, setDirection] = useState<"left" | "right" | "none">("none");
  const [prevDate, setPrevDate] = useState(date);

  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const offset = getFirstDayOffset(date);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  useEffect(() => {
    const isSameMonth =
      date.getMonth() === prevDate.getMonth() &&
      date.getFullYear() === prevDate.getFullYear();
    if (!isSameMonth) {
      const isForward = date.getTime() > prevDate.getTime();
      setDirection(isForward ? "right" : "left");
      setPrevDate(date);
    }
  }, [date, prevDate]);

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!gestures || touchStartX === null) return;

    const deltaX = touchStartX - e.changedTouches[0].clientX;
    const nextDate = getNextMonthFromSwipe(deltaX, date, minDate, maxDate);

    if (nextDate) {
      onChangeDate(nextDate);
    }

    setTouchStartX(null);
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!gestures) return;
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const calendarData = useMemo(() => {
    return CELLS.map((i) => {
      const fullDate = new Date(currentYear, currentMonth, i - offset + 1);
      const isCurrentMonth = fullDate.getMonth() === currentMonth;
      const day = fullDate.getDate();

      const isDisabled = checkIsDateDisabled(
        day,
        fullDate,
        minDate,
        maxDate,
        disableWeekends,
      );

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
  }, [
    currentYear,
    currentMonth,
    offset,
    date,
    minDate,
    maxDate,
    disableWeekends,
  ]);

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
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
      className={`${styles.dayGridContainer} ${direction !== "none" ? styles[direction] : ""}`}
    >
      <WeekDays />
      <div role="row" style={{ display: "contents", gridArea: "DD" }}>
        {calendarData.map(
          ({ day, fullDate, isCurrentMonth, isDisabled, isSelected }, i) => (
            <button
              key={i}
              data-action
              type="button"
              disabled={isDisabled}
              onClick={() => handleSetDay(fullDate, isDisabled)}
              aria-selected={isSelected}
              className={[
                styles.dayItem,
                isSelected && shared.activeItem,
                !isCurrentMonth && shared.otherItem,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {day}
            </button>
          ),
        )}
      </div>
    </div>
  );
};
