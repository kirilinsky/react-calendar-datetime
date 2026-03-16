import React, { useMemo } from "react";
import styles from "./header.module.css";
import { Down, Left, Right } from "@/Icons";
import { useCalendarContext } from "../provider/provider";
import { addYears, isYearFixed } from "@/utils/date-utils";

export const HeaderComponent: React.FC = () => {
  const { onChangeDate, compactMonths, minDate, maxDate, years, date, locale } =
    useCalendarContext();
  const cur = date.getFullYear();
  const yearFixed = useMemo(
    () => isYearFixed(cur, minDate, maxDate),
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
          <button className={styles.monthButton}>
            <Down /> {currentMonthName}
          </button>
        </div>
      )}
      {years && (
        <div className={styles.yearsSelector}>
          <div className={styles.arrow} onClick={() => ch(-1)}>
            <Left />
          </div>
          <button
            onClick={yearFixed ? undefined : undefined}
            className={`${styles.currentYear} ${yearFixed ? styles.static : ""}`}
          >
            {cur}
          </button>
          <div className={styles.arrow} onClick={() => ch(1)}>
            <Right />
          </div>
        </div>
      )}
    </div>
  );
};
