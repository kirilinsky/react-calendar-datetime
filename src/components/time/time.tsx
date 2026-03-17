import React, { useMemo } from "react";
import styles from "./time.module.css";
import { useCalendarContext } from "../provider/provider";
import { useThrottle } from "@/hooks/use-throttle";
import { addTime, getDrumValue, padTime } from "@/utils/date-utils";
import { Down, Up } from "@/Icons";

const OFFSETS = [-2, -1, 0, 1, 2];

export const TimeComponent: React.FC = () => {
  const { months, minDate, maxDate, years, onChangeDate, date } =
    useCalendarContext();

  const throttled = useThrottle(onChangeDate, 75);
  const move = (v: number, t: "h" | "m") => throttled(addTime(date, v, t));

  const renderCol = (t: "h" | "m") => {
    const val = t === "h" ? date.getHours() : date.getMinutes();
    const max = t === "h" ? 24 : 60;

    return (
      <div
        className={styles.column}
        tabIndex={0}
        onWheel={(e) => (e.preventDefault(), move(e.deltaY < 0 ? -1 : 1, t))}
        onKeyDown={(e) =>
          e.key.includes("Arrow") &&
          (e.preventDefault(), move(e.key === "ArrowUp" ? -1 : 1, t))
        }
      >
        <div className={styles.cell} onClick={() => move(-1, t)}>
          <Up />
        </div>
        {OFFSETS.map((o) => {
          const isCurr = o === 0;
          return (
            <div
              key={o}
              className={`${styles.cell} ${isCurr ? styles.active : ""}`}
              onClick={isCurr ? undefined : () => move(o, t)}
            >
              {padTime(getDrumValue(val, o, max))}
            </div>
          );
        })}
        <div className={styles.cell} onClick={() => move(1, t)}>
          <Down />
        </div>
      </div>
    );
  };
  return (
    <div className={styles.timeContainer}>
      <div className={styles.timeSelectionIndicator} />
      {renderCol("h")}
      <div className={styles.separator}>:</div>
      {renderCol("m")}
    </div>
  );
};
