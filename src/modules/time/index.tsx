import React, { useEffect, useState } from "react";
import dayjs, { Dayjs, ManipulateType } from "dayjs";
import clsx from "clsx";
// Путь к стилям
import * as s from "@/styles/styles.css";
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
    <div className={s.time}>
      <div className={s.timeHalf} onWheel={(e) => scrollHandle(e, "h")}>
        <div className={s.timeCell} onClick={() => subtractDiff(1, "h")}>
          <Up />
        </div>
        <div className={s.timeCell} onClick={() => subtractDiff(2, "h")}>
          {dayjs(date).subtract(2, "h").format("HH")}
        </div>
        <div className={s.timeCell} onClick={() => subtractDiff(1, "h")}>
          {dayjs(date).subtract(1, "h").format("HH")}
        </div>
        {/* Центральная ячейка с мигающим двоеточием */}
        <div className={clsx(s.timeCell, s.dividerHour)}>{hour}</div>

        <div className={s.timeCell} onClick={() => addDiff(1, "h")}>
          {dayjs(date).add(1, "h").format("HH")}
        </div>
        <div className={s.timeCell} onClick={() => addDiff(2, "h")}>
          {dayjs(date).add(2, "h").format("HH")}
        </div>
        <div className={s.timeCell} onClick={() => addDiff(1, "h")}>
          <Down />
        </div>
      </div>

      <div className={s.timeHalf} onWheel={(e) => scrollHandle(e, "m")}>
        <div className={s.timeCell} onClick={() => subtractDiff(1, "m")}>
          <Up />
        </div>
        <div className={s.timeCell} onClick={() => subtractDiff(2, "m")}>
          {dayjs(date).subtract(2, "m").format("mm")}
        </div>
        <div className={s.timeCell} onClick={() => subtractDiff(1, "m")}>
          {dayjs(date).subtract(1, "m").format("mm")}
        </div>
        <div className={s.timeCell}>{minute}</div>
        <div className={s.timeCell} onClick={() => addDiff(1, "m")}>
          {dayjs(date).add(1, "m").format("mm")}
        </div>
        <div className={s.timeCell} onClick={() => addDiff(2, "m")}>
          {dayjs(date).add(2, "m").format("mm")}
        </div>
        <div className={s.timeCell} onClick={() => addDiff(1, "m")}>
          <Down />
        </div>
      </div>
    </div>
  );
};

export default Time;
