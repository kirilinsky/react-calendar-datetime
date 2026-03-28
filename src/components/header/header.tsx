import React, { useMemo } from "react";
import styles from "./header.module.css";
import { Down, Left, Right } from "@/Icons";
import { useCalendarContext } from "../provider/provider";
import {
  addDate,
  checkYearNavigation,
  getTimeString,
  isYearFixed,
} from "@/utils/date-utils";

export const HeaderComponent: React.FC = () => {
  const {
    onChangeDate,
    compactMonths,
    compactYears,
    minDate,
    maxDate,
    years,
    months,
    date,
    time,
    locale,
    setView,
    hour12,
    disableWeekends,
    setShowTimePopup,
  } = useCalendarContext();

  const cur = date.getFullYear();
  const curTime = getTimeString(date, hour12);

  const yearFixed = useMemo(
    () => isYearFixed(cur, minDate, maxDate),
    [cur, minDate, maxDate],
  );
  const monthFixed = useMemo(
    () => isYearFixed(cur, minDate, maxDate, date.getMonth()),
    [minDate, maxDate, date],
  );

  const { canGoPrev, canGoNext, canGoPrevMonth, canGoNextMonth } = useMemo(
    () => checkYearNavigation(cur, minDate, maxDate, date),
    [cur, date, minDate, maxDate],
  );

  const currentMonthName = new Intl.DateTimeFormat(locale, {
    month: "long",
  }).format(date);

  const ch = (v: number) =>
    onChangeDate(addDate(date, v, "year", disableWeekends, minDate, maxDate));
  const cm = (v: number) =>
    onChangeDate(addDate(date, v, "month", disableWeekends, minDate, maxDate));
  return (
    <div className={styles.headerContainer} style={{ gridArea: "HH" }}>
      {time && (
        <button
          className={styles.timeButton}
          onClick={() => setShowTimePopup(true)}
        >
          {curTime}
        </button>
      )}

      {compactMonths && (
        <button
          disabled={monthFixed}
          className={styles.monthButton}
          onClick={() => setView("month")}
        >
          <Down /> {currentMonthName}
        </button>
      )}

      {months && (
        <div className={styles.yearsSelector}>
          {canGoPrevMonth && (
            <button className={styles.arrow} onClick={() => cm(-1)}>
              <Left />
            </button>
          )}
          <button
            onClick={() => setView(monthFixed ? "calendar" : "month")}
            className={`${styles.currentYear} ${monthFixed ? styles.staticButton : ""}`}
          >
            {currentMonthName}
          </button>
          {canGoNextMonth && (
            <button className={styles.arrow} onClick={() => cm(1)}>
              <Right />
            </button>
          )}
        </div>
      )}

      {years && (
        <div className={styles.yearsSelector}>
          {canGoPrev && (
            <button className={styles.arrow} onClick={() => ch(-1)}>
              <Left />
            </button>
          )}
          <button
            onClick={() => setView(yearFixed ? "calendar" : "year")}
            className={`${styles.currentYear} ${yearFixed ? styles.staticButton : ""}`}
          >
            {cur}
          </button>
          {canGoNext && (
            <button className={styles.arrow} onClick={() => ch(1)}>
              <Right />
            </button>
          )}
        </div>
      )}

      {compactYears && (
        <button className={styles.monthButton} onClick={() => setView("year")}>
          {cur} <Down />
        </button>
      )}
    </div>
  );
};
