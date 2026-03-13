import React from "react";
import dayjs, { Dayjs, ManipulateType } from "dayjs";
import { Down, Up } from "../../Icons";
import * as s from "./time.styles";

interface TimeProps {
  date: Date | string | number | Dayjs;
  changeAction: (date: Dayjs) => void;
}

const Time: React.FC<TimeProps> = ({ date, changeAction }) => {
  const d = dayjs(date);

  const handleDiff = (val: number, type: ManipulateType) => {
    changeAction(d.add(val, type));
  };

  const onWheel = (e: React.WheelEvent, type: ManipulateType) => {
    const val = e.deltaY < 0 ? -1 : 1;
    handleDiff(val, type);
  };

  const renderColumn = (type: "h" | "m") => {
    const format = type === "h" ? "HH" : "mm";
    const offsets = [-2, -1, 0, 1, 2];

    return (
      <div className={s.column} onWheel={(e) => onWheel(e, type)}>
        <div className={s.cell} onClick={() => handleDiff(-1, type)}>
          <Up />
        </div>

        {offsets.map((offset) => {
          const isCurrent = offset === 0;
          return (
            <div
              key={offset}
              className={s.cell}
              onClick={!isCurrent ? () => handleDiff(offset, type) : undefined}
            >
              {d.add(offset, type).format(format)}
            </div>
          );
        })}
        <div className={s.cell} onClick={() => handleDiff(1, type)}>
          <Down />
        </div>
      </div>
    );
  };

  return (
    <div className={s.container}>
      {renderColumn("h")}
      {renderColumn("m")}
    </div>
  );
};

export default Time;
