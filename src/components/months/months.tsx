import React, { useMemo } from "react";
import styles from "./months.module.css";
import { useCalendarContext } from "../provider/provider";
import { getMonthListData, setMonth } from "@/utils/date-utils";
import shared from "@/global/global.module.css";

export const MonthsComponent: React.FC = () => {
  const { onChangeDate, locale, date, minDate, maxDate } = useCalendarContext();
  const currentMonth = date.getMonth();
  const mNames = useMemo(
    () => getMonthListData(locale, date.getFullYear(), minDate, maxDate),
    [locale, date.getFullYear(), minDate, maxDate],
  );

  return (
    <div className={styles.monthsContainer}>
      {mNames.map((n, i) => (
        <button
          key={i}
          type="button"
          disabled={n.disabled}
          className={`${styles.item} ${i === currentMonth ? shared.activeItem : ""}`}
          onClick={() => onChangeDate(setMonth(date, i))}
        >
          {n.label}
        </button>
      ))}
    </div>
  );
};
