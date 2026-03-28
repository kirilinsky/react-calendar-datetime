import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./days.module.css";
import { useCalendarContext } from "../provider/provider";
import {
  getFirstDayOffset,
  getNextMonthFromSwipe,
  getCalendarData,
} from "@/utils/date-utils";
import shared from "@/global/global.module.css";
import WeekDays from "../week-days/week-days";

export const DaysComponent: React.FC = () => {
  const {
    minDate,
    maxDate,
    date,
    onChangeDate,
    gestures,
    disableWeekends,
    startOfWeek,
    jellyMode,
    showWeekNumber,
  } = useCalendarContext();

  const [direction, setDirection] = useState<"left" | "right" | "none">("none");
  const [prevDate, setPrevDate] = useState(date);

  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const offset = getFirstDayOffset(date, startOfWeek);
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

  const weeksData = useMemo(() => {
    return getCalendarData(
      currentYear,
      currentMonth,
      offset,
      date,
      minDate,
      maxDate,
      disableWeekends,
    );
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
      if (isDisabled) return;

      const next = new Date(targetDate);
      next.setHours(
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds(),
      );

      if (minDate && next.getTime() < minDate.getTime()) {
        next.setHours(minDate.getHours(), minDate.getMinutes(), 0, 0);
      }

      if (maxDate && next.getTime() > maxDate.getTime()) {
        next.setHours(maxDate.getHours(), maxDate.getMinutes(), 0, 0);
      }

      onChangeDate(next);
    },
    [onChangeDate, date, minDate, maxDate],
  );

  const animationKey = `${currentMonth}-${currentYear}`;

  return (
    <div
      aria-label="days"
      key={animationKey}
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
      className={[
        styles.dayGridContainer,
        direction !== "none" ? styles[direction] : "",
        jellyMode === false ? styles.staticMode : "",
        showWeekNumber ? styles.withWeekNumbers : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <WeekDays />
      <div role="row" style={{ display: "contents", gridArea: "DD" }}>
        {weeksData.map((week, wIndex) => (
          <React.Fragment key={wIndex}>
            {showWeekNumber && (
              <div className={styles.weekNumberItem}>{week.weekNumber}</div>
            )}

            {week.days.map(
              (
                { day, fullDate, isCurrentMonth, isDisabled, isSelected },
                i,
              ) => (
                <button
                  key={i}
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
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
