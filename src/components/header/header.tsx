import React, { useMemo } from "react";
import styles from "./header.module.css";
import { Down } from "@/Icons";
import { useCalendarContext } from "../provider/provider";
import {
  addDate,
  checkYearNavigation,
  getTimeString,
  isYearFixed,
} from "@/utils/date-utils";

export const HeaderComponent: React.FC = () => {
  const {
    navigateTo,
    compactMonths,
    compactYears,
    startDate,
    endDate,
    years,
    months,
    date,
    time,
    locale,
    setView,
    hour12,
    setShowTimePopup,
    shortMonths,
    disabled,
  } = useCalendarContext();

  const cur = date.getFullYear();
  const curTime = getTimeString(date, hour12);

  const yearFixed = useMemo(
    () => isYearFixed(cur, startDate, endDate),
    [cur, startDate, endDate],
  );
  const monthFixed = useMemo(
    () => isYearFixed(cur, startDate, endDate, date.getMonth()),
    [startDate, endDate, date],
  );

  const { canGoPrev, canGoNext, canGoPrevMonth, canGoNextMonth } = useMemo(
    () => checkYearNavigation(cur, startDate, endDate, date, disabled),
    [cur, date, startDate, endDate, disabled],
  );

  const currentMonthName = new Intl.DateTimeFormat(locale, {
    month: shortMonths ? "short" : "long",
  }).format(date);

  const ch = (v: number) =>
    navigateTo(addDate(date, v, "year", startDate, endDate));
  const cm = (v: number) =>
    navigateTo(addDate(date, v, "month", startDate, endDate));
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
              ‹
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
              ›
            </button>
          )}
        </div>
      )}

      {years && (
        <div className={styles.yearsSelector}>
          {canGoPrev && (
            <button className={styles.arrow} onClick={() => ch(-1)}>
              ‹
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
              ›
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
