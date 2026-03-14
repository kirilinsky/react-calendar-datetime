import React from "react";
import { Down, Up } from "../../Icons";
import * as s from "./time.styles";
import {
  addTime,
  padTime,
  getDrumValue,
  getDrumStyles,
} from "@/utils/date-utils";
import { useThrottle } from "@/hooks/use-throttle";

interface TimeProps {
  date: Date;
  changeAction: (date: Date) => void;
}

const OFFSETS = [-2, -1, 0, 1, 2];

const DRUM_STYLES = OFFSETS.reduce(
  (acc, offset) => {
    acc[offset] = getDrumStyles(offset);
    return acc;
  },
  {} as Record<number, React.CSSProperties>,
);

const Time: React.FC<TimeProps> = ({ date, changeAction }) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const throttledChange = useThrottle(changeAction, 75);

  const handleDiff = (val: number, type: "h" | "m") => {
    const nextDate = addTime(date, val, type);
    throttledChange(nextDate);
  };

  const createWheelHandler = (type: "h" | "m") => (e: React.WheelEvent) => {
    e.preventDefault();
    const direction = e.deltaY < 0 ? -1 : 1;
    handleDiff(direction, type);
  };

  const renderColumn = (type: "h" | "m") => {
    const currentVal = type === "h" ? hours : minutes;
    const max = type === "h" ? 24 : 60;

    const label = type === "h" ? "Select hours" : "Select minutes";

    const onKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        handleDiff(-1, type);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        handleDiff(1, type);
      }
    };

    return (
      <div
        className={s.column}
        tabIndex={0}
        role="spinbutton"
        aria-label={label}
        aria-valuenow={currentVal}
        onWheel={createWheelHandler(type)}
        onKeyDown={onKeyDown}
      >
        <div
          className={s.cell}
          onClick={() => handleDiff(-1, type)}
          role="presentation"
        >
          <Up />
        </div>

        {OFFSETS.map((offset) => {
          const value = getDrumValue(currentVal, offset, max);
          const isCurrent = offset === 0;

          return (
            <div
              key={offset}
              className={`${s.cell} ${isCurrent ? s.activeCell : ""}`}
              style={DRUM_STYLES[offset]}
              onClick={!isCurrent ? () => handleDiff(offset, type) : undefined}
            >
              {padTime(value)}
            </div>
          );
        })}

        <div
          className={s.cell}
          onClick={() => handleDiff(1, type)}
          role="presentation"
        >
          <Down />
        </div>
      </div>
    );
  };
  return (
    <div className={s.container}>
      <div className={s.timeSelectionIndicator} /> {renderColumn("h")}
      <div className={s.separator}>:</div>
      {renderColumn("m")}
    </div>
  );
};

export default Time;
