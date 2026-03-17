import { getWeekdaysNames } from "@/utils/date-utils";
import { useMemo } from "react";
import { useCalendarContext } from "../provider/provider";
import styles from "./weekdays.module.css";

const WeekDays = () => {
  const { locale, highlightWeekends, dark } = useCalendarContext();
  const wDays = useMemo(() => getWeekdaysNames(locale), [locale]);
  console.log(wDays, "wDays");

  return (
    <div role="row" style={{ display: "contents" }}>
      {wDays.map((day, i) => {
        const isWeekend = (i === 6 || i === 5) && highlightWeekends;
        return (
          <div
            key={day}
            className={`${styles.header} ${isWeekend ? (dark ? styles.weekendDark : styles.weekendLight) : ""}`}
            role="columnheader"
          >
            {day}
          </div>
        );
      })}
    </div>
  );
};

export default WeekDays;
