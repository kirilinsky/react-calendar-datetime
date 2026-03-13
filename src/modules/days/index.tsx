import React from "react";
import * as s from "./days.styles";
import { DaysProps } from "@/types/days";

const Days: React.FC<DaysProps> = ({ date, changeAction, weekdays }) => {
  const currentDay = date.date();

  const setDay = (day: number) => {
    if (day === currentDay) return;
    changeAction(date.date(day));
  };

  return (
    <div className={s.container} role="grid" aria-label="Calendar days">
      <div role="row" style={{ display: "contents" }}>
        {weekdays.map((day) => (
          <div key={day} className={s.header} role="columnheader">
            {day}
          </div>
        ))}
      </div>

      <div role="row" style={{ display: "contents" }}>
        {Array.from({ length: date.daysInMonth() }, (_, i) => i + 1).map(
          (x) => {
            const isSelected = x === currentDay;
            return (
              <div
                key={x}
                onClick={() => setDay(x)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setDay(x);
                  }
                }}
                tabIndex={0}
                role="gridcell"
                aria-selected={isSelected}
                aria-label={`Day ${x}`}
                className={`${s.dayItem} ${isSelected ? s.active : ""}`}
              >
                <span aria-hidden="true">{x}</span>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

export default Days;
