import { getWeekdaysNames } from "@/utils/date-utils";
import { useMemo } from "react";
import { useCalendarContext } from "../provider/provider";
import styles from "./weekdays.module.css";

const WeekDays = () => {
  const { locale, highlightWeekends, dark, startOfWeek } = useCalendarContext();
  const wDays = useMemo(
    () => getWeekdaysNames(locale, startOfWeek),
    [locale, startOfWeek],
  );

  return (
    <div role="row" style={{ display: "contents" }}>
      {wDays.map((day, i) => {
        const actualDay = (startOfWeek + i) % 7;
        const isWeekend =
          (actualDay === 0 || actualDay === 6) && highlightWeekends;
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
