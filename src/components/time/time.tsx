import React, { useEffect, useRef } from "react";
import styles from "./time.module.css";
import shared from "@/global/global.module.css";
import { useCalendarContext } from "../provider/provider";
import { useThrottle } from "@/hooks/use-throttle";
import { addTime, getDrumValue, padTime } from "@/utils/date-utils";
import { Down, Up } from "@/Icons";

const OFFSETS = [-4,-3, -2, -1, 0, 1, 2, 3,4];

const TimeColumn = ({
  type,
  val,
  max,
  move,
}: {
  type: "h" | "m";
  val: number;
  max: number;
  move: (v: number, t: "h" | "m") => void;
}) => {
  const colRef = useRef<HTMLDivElement>(null);

  const moveRef = useRef(move);
  useEffect(() => {
    moveRef.current = move;
  }, [move]);

  useEffect(() => {
    const el = colRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      moveRef.current(e.deltaY < 0 ? -1 : 1, type);
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => el.removeEventListener("wheel", handleWheel);
  }, [type]);

  return (
    <div
      ref={colRef}
      className={`${styles.column} ${shared.flexCenter}`}
      style={{ gridArea: "TT" }}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key.includes("Arrow")) {
          e.preventDefault();
          move(e.key === "ArrowUp" ? -1 : 1, type);
        }
      }}
    >
      <div
        className={`${styles.cell} ${shared.interactive}`}
        onClick={() => move(-1, type)}
      >
        <Up />
      </div>
      {OFFSETS.map((o) => {
        const isCurr = o === 0;
        return (
          <div
            key={o}
            className={`${styles.cell} ${shared.interactive} ${
              isCurr ? styles.active : ""
            }`}
            onClick={isCurr ? undefined : () => move(o, type)}
          >
            {padTime(getDrumValue(val, o, max))}
          </div>
        );
      })}
      <div
        className={`${styles.cell} ${shared.interactive}`}
        onClick={() => move(1, type)}
      >
        <Down />
      </div>
    </div>
  );
};

export const TimeComponent: React.FC = () => {
  const { onChangeDate, date } = useCalendarContext();

  const throttled = useThrottle(onChangeDate, 75);
  const move = (v: number, t: "h" | "m") => throttled(addTime(date, v, t));

  const hVal = date.getHours();
  const mVal = date.getMinutes();

  return (
    <div className={`${styles.timeContainer} ${shared.flexCenter}`}>
      <div className={styles.timeSelectionIndicator} />
      <TimeColumn type="h" val={hVal} max={24} move={move} />
      <div className={styles.separator}>:</div>
      <TimeColumn type="m" val={mVal} max={60} move={move} />
    </div>
  );
};
