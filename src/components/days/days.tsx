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
    startDate,
    endDate,
    date,
    selectedDates,
    onChangeDate,
    gestures,
    disabled,
    hideLimited,
    startOfWeek,
    showWeekNumber,
  } = useCalendarContext();

  const startT = startDate
    ? new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()).getTime()
    : null;
  const endT = endDate
    ? new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), 23, 59, 59, 999).getTime()
    : null;

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
    const nextDate = getNextMonthFromSwipe(deltaX, date, startDate, endDate);

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
      selectedDates,
      startDate,
      endDate,
      disabled,
    );
  }, [
    currentYear,
    currentMonth,
    offset,
    selectedDates,
    startDate,
    endDate,
    disabled,
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

      if (startDate && next.getTime() < startDate.getTime()) {
        next.setHours(startDate.getHours(), startDate.getMinutes(), 0, 0);
      }

      if (endDate && next.getTime() > endDate.getTime()) {
        next.setHours(endDate.getHours(), endDate.getMinutes(), 0, 0);
      }

      onChangeDate(next);
    },
    [onChangeDate, date, startDate, endDate],
  );

  const animationKey = `${currentMonth}-${currentYear}`;

  return (
    <div
      aria-label="days"
      key={animationKey}
      style={{ gridArea: "DD" }}
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
      className={[
        styles.dayGridContainer,
        direction !== "none" ? styles[direction] : "",
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
                { day, fullDate, isCurrentMonth, isDisabled, isSelected, connectLeft, connectRight },
                i,
              ) => {
                const t = fullDate.getTime();
                const isLimited = hideLimited && (
                  (startT !== null && t < startT) ||
                  (endT !== null && t > endT)
                );
                if (isLimited) return <span key={i} className={styles.dayItemEmpty} />;
                return (
                  <button
                    key={i}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => handleSetDay(fullDate, isDisabled)}
                    aria-selected={isSelected}
                    className={[
                      styles.dayItem,
                      isSelected && shared.activeItem,
                      connectLeft && connectRight && styles.rangeMid,
                      connectLeft && !connectRight && styles.rangeEnd,
                      !connectLeft && connectRight && styles.rangeStart,
                      !isCurrentMonth && (isSelected ? shared.selectedOtherItem : shared.otherItem),
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {day}
                  </button>
                );
              },
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
