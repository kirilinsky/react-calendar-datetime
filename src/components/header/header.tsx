import React, { useMemo } from "react";
import styles from "./header.module.css";
import { Down, Left, Right } from "@/Icons";
import { useCalendarContext } from "../provider/provider";
import { addYears, checkYearNavigation, isYearFixed } from "@/utils/date-utils";

export const HeaderComponent: React.FC = () => {
  const {
    onChangeDate,
    compactMonths,
    compactYears,
    minDate,
    maxDate,
    years,
    date,
    locale,
    setView,
    disableWeekends,
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

  const ch = (v: number) => onChangeDate(addYears(date, v, disableWeekends));

  return (
    <div className={styles.headerContainer} style={{ gridArea: "HH" }}>
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
        <div className={styles.monthsSelector}>
          <button
            className={styles.monthButton}
            onClick={() => setView("year")}
          >
            {cur} <Down />
          </button>
        </div>
      )}
    </div>
  );
};
