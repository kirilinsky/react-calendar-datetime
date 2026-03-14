import React from "react";
import { Down, Up } from "../../Icons";
import * as s from "./time.styles";
import { addTime, padTime, getDrumValue } from "@/utils/date-utils";
import { useThrottle } from "@/hooks/use-throttle";

const OFFSETS = [-2, -1, 0, 1, 2];

const Time: React.FC<{ date: Date; changeAction: (d: Date) => void }> = ({
  date,
  changeAction,
}) => {
  const throttled = useThrottle(changeAction, 75);

  const move = (v: number, t: "h" | "m") => throttled(addTime(date, v, t));

  const renderCol = (t: "h" | "m") => {
    const val = t === "h" ? date.getHours() : date.getMinutes();
    const max = t === "h" ? 24 : 60;

    return (
      <div
        className={s.column}
        tabIndex={0}
        onWheel={(e) => (e.preventDefault(), move(e.deltaY < 0 ? -1 : 1, t))}
        onKeyDown={(e) =>
          e.key.includes("Arrow") &&
          (e.preventDefault(), move(e.key === "ArrowUp" ? -1 : 1, t))
        }
      >
        <div className={s.cell} onClick={() => move(-1, t)}>
          <Up />
        </div>
        {OFFSETS.map((o) => {
          const isCurr = o === 0;
          return (
            <div
              key={o}
              className={`${s.cell} ${isCurr ? s.active : ""}`}
              onClick={isCurr ? undefined : () => move(o, t)}
            >
              {padTime(getDrumValue(val, o, max))}
            </div>
          );
        })}
        <div className={s.cell} onClick={() => move(1, t)}>
          <Down />
        </div>
      </div>
    );
  };

  return (
    <div className={s.container}>
      <div className={s.timeSelectionIndicator} />
      {renderCol("h")}
      <div className={s.separator}>:</div>
      {renderCol("m")}
    </div>
  );
};

export default Time;
