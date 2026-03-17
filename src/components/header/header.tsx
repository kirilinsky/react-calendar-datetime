import React, { useMemo } from "react";
import styles from "./header.module.css";
import { Down, Left, Right } from "@/Icons";
import { useCalendarContext } from "../provider/provider";
import { addYears, checkYearNavigation, isYearFixed } from "@/utils/date-utils";

export const HeaderComponent: React.FC = () => {
  const {
    onChangeDate,
    compactMonths,
    minDate,
    maxDate,
    years,
    date,
    locale,
    setView,
  } = useCalendarContext();
  const cur = date.getFullYear();
  const yearFixed = useMemo(
    () => isYearFixed(cur, minDate, maxDate),
    [cur, minDate, maxDate],
  );

  const { canGoPrev, canGoNext } = useMemo(
    () => checkYearNavigation(cur, minDate, maxDate),
    [cur, minDate, maxDate],
  );

  const currentMonthName = new Intl.DateTimeFormat(locale, {
    month: "long",
  }).format(date);

  const ch = (v: number) => onChangeDate(addYears(date, v));

  return (
    <div className={styles.headerContainer}>
      {compactMonths && (
        <div className={styles.monthsSelector}>
          <button
            className={styles.monthButton}
            onClick={() => setView("month")}
          >
            <Down /> {currentMonthName}
          </button>
        </div>
      )}
      {years && (
        <div className={styles.yearsSelector}>
          {canGoPrev && (
            <div className={styles.arrow} onClick={() => ch(-1)}>
              <Left />
            </div>
          )}
          <button
            onClick={() => setView(yearFixed ? "calendar" : "year")}
            className={`${styles.currentYear} ${yearFixed ? styles.static : ""}`}
          >
            {cur}
          </button>
          {canGoNext && (
            <div className={styles.arrow} onClick={() => ch(1)}>
              <Right />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
