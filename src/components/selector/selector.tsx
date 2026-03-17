import React, { useMemo, useState } from "react";
import styles from "./selector.module.css";
import shared from "@/global/global.module.css";
import { useCalendarContext } from "../provider/provider";
import {
  getMonthListData,
  getYearListData,
  setMonth,
  setYear,
  addYears,
  checkYearNavigation,
} from "@/utils/date-utils";
import { Left, Right } from "../../Icons";

const YEAR_STEP = 12;

export const SelectorComponent: React.FC<{
  type: "month" | "year" | "calendar";
}> = ({ type }) => {
  const { date, onChangeDate, setView, locale, minDate, maxDate } =
    useCalendarContext();

  const [navDate, setNavDate] = useState(date);
  const navYear = navDate.getFullYear();

  const monthsData = useMemo(
    () => getMonthListData(locale, navYear, minDate, maxDate),
    [locale, navYear, minDate, maxDate],
  );

  const yearsData = useMemo(
    () => getYearListData(navYear, minDate, maxDate, YEAR_STEP),
    [navYear, minDate, maxDate],
  );

  const { canGoPrev, canGoNext } = useMemo(
    () => checkYearNavigation(yearsData, minDate, maxDate),
    [yearsData, minDate, maxDate],
  );

  const handleSelect = (newDate: Date) => {
    onChangeDate(newDate);
    setView("calendar");
  };

  return (
    <div className={styles.selectorOverlay}>
      {type === "year" && (
        <div className={styles.navHeader}>
          <>
            <button
              disabled={!canGoPrev}
              onClick={() => setNavDate(addYears(navDate, -12))}
              className={styles.navBtn}
            >
              <Left />
            </button>
            <span className={styles.yearRange}>
              {yearsData[0].value} - {yearsData[yearsData.length - 1].value}
            </span>
            <button
              disabled={!canGoNext}
              onClick={() => setNavDate(addYears(navDate, 12))}
              className={styles.navBtn}
            >
              <Right />
            </button>
          </>
        </div>
      )}

      <div className={styles.grid}>
        {type === "month" &&
          monthsData.map((m, i) => (
            <button
              key={i}
              disabled={m.disabled}
              className={`${styles.item} ${i === date.getMonth() && navYear === date.getFullYear() ? shared.activeItem : ""}`}
              onClick={() => handleSelect(setMonth(date, i))}
            >
              {m.label}
            </button>
          ))}

        {type === "year" &&
          yearsData.map(({ value, disabled }) => (
            <button
              key={value}
              disabled={disabled}
              className={`${styles.item} ${value === date.getFullYear() ? shared.activeItem : ""}`}
              onClick={() => handleSelect(setYear(date, value))}
            >
              {value}
            </button>
          ))}
      </div>
      <div className={styles.footer}>
        <button className={styles.closeBtn} onClick={() => setView("calendar")}>
          Cancel
        </button>
      </div>
    </div>
  );
};
