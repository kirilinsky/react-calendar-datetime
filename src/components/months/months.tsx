import React, { useMemo } from "react";
import styles from "./months.module.css";
import { useCalendarContext } from "../provider/provider";
import { getMonthListData, setMonth } from "@/utils/date-utils";
import shared from "@/global/global.module.css";

export const MonthsComponent: React.FC = () => {
  const {
    onChangeDate,
    locale,
    date,
    minDate,
    maxDate,
    disableWeekends,
    jellyMode,
  } = useCalendarContext();

  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  const mNames = useMemo(
    () => getMonthListData(locale, currentYear, minDate, maxDate, true),
    [locale, currentYear, minDate, maxDate],
  );

  const handleClick = (i: number) =>
    onChangeDate(setMonth(date, i, disableWeekends));

  return (
    <div
      className={[
        styles.monthsContainer,
        jellyMode === false ? styles.staticMode : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ gridArea: "MM" }}
    >
      {mNames.map((n, i) => (
        <button
          key={i}
          type="button"
          disabled={n.disabled}
          className={[styles.item, i === currentMonth ? shared.activeItem : ""]
            .filter(Boolean)
            .join(" ")}
          onClick={() => handleClick(i)}
        >
          {n.label}
        </button>
      ))}
    </div>
  );
};
