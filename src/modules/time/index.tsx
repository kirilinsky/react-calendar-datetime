import React, { useEffect, useState } from "react";
import dayjs, { Dayjs, ManipulateType } from "dayjs";
import { Down, Up } from "../../Icons";

interface TimeProps {
  date: Date | string | number | Dayjs;
  changeAction: (date: Dayjs) => void;
}

const Time: React.FC<TimeProps> = ({ date, changeAction }) => {
  const [hour, setHour] = useState<string>(dayjs(date).format("HH"));
  const [minute, setMinute] = useState<string>(dayjs(date).format("mm"));

  const addDiff = (value: number, type: ManipulateType) => {
    changeAction(dayjs(date).add(value, type));
  };

  const subtractDiff = (value: number, type: ManipulateType) => {
    changeAction(dayjs(date).subtract(value, type));
  };

  const scrollHandle = (
    e: React.WheelEvent | WheelEvent,
    type: ManipulateType,
  ) => {
    const delta = "deltaY" in e ? e.deltaY : 0;
    if (delta < 0) {
      changeAction(dayjs(date).subtract(1, type));
    } else if (delta > 0) {
      changeAction(dayjs(date).add(1, type));
    }
  };

  useEffect(() => {
    const d = dayjs(date);
    setHour(d.format("HH"));
    setMinute(d.format("mm"));
  }, [date]);

  return (
    <div className="calendar-time">
      <div
        className="calendar-time-half hours"
        onWheel={(e) => scrollHandle(e, "h")}
      >
        <div
          className="calendar-time-half-cell"
          onClick={() => subtractDiff(1, "h")}
        >
          <Up />
        </div>
        <div
          onClick={() => subtractDiff(2, "h")}
          className="calendar-time-half-cell"
        >
          {dayjs(date).subtract(2, "h").format("HH")}
        </div>
        <div
          onClick={() => subtractDiff(1, "h")}
          className="calendar-time-half-cell"
        >
          {dayjs(date).subtract(1, "h").format("HH")}
        </div>
        <div className="calendar-time-half-cell dividerhour">{hour}</div>
        <div
          onClick={() => addDiff(1, "h")}
          className="calendar-time-half-cell"
        >
          {dayjs(date).add(1, "h").format("HH")}
        </div>
        <div
          onClick={() => addDiff(2, "h")}
          className="calendar-time-half-cell"
        >
          {dayjs(date).add(2, "h").format("HH")}
        </div>
        <div
          className="calendar-time-half-cell"
          onClick={() => addDiff(1, "h")}
        >
          <Down />
        </div>
      </div>

      <div className="calendar-time-half" onWheel={(e) => scrollHandle(e, "m")}>
        <div
          className="calendar-time-half-cell"
          onClick={() => subtractDiff(1, "m")}
        >
          <Up />
        </div>
        <div
          onClick={() => subtractDiff(2, "m")}
          className="calendar-time-half-cell"
        >
          {dayjs(date).subtract(2, "m").format("mm")}
        </div>
        <div
          onClick={() => subtractDiff(1, "m")}
          className="calendar-time-half-cell"
        >
          {dayjs(date).subtract(1, "m").format("mm")}
        </div>
        <div className="calendar-time-half-cell">{minute}</div>
        <div
          onClick={() => addDiff(1, "m")}
          className="calendar-time-half-cell"
        >
          {dayjs(date).add(1, "m").format("mm")}
        </div>
        <div
          onClick={() => addDiff(2, "m")}
          className="calendar-time-half-cell"
        >
          {dayjs(date).add(2, "m").format("mm")}
        </div>
        <div
          onClick={() => addDiff(1, "m")}
          className="calendar-time-half-cell"
        >
          <Down />
        </div>
      </div>
    </div>
  );
};

export default Time;
