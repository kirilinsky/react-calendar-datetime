import dayjs, { Dayjs } from "dayjs";
import React from "react";
import { Left, Right } from "../../Icons";

interface YearsProps {
  date: Date | string | number | Dayjs;
  toggleYearPicker: () => void;
  changeAction: (date: Dayjs) => void;
}

const Years: React.FC<YearsProps> = ({
  date,
  toggleYearPicker,
  changeAction,
}) => {
  const prevYear = () => {
    changeAction(dayjs(date).subtract(1, "year"));
  };

  const nextYear = () => {
    changeAction(dayjs(date).add(1, "year"));
  };

  return (
    <div className="calendar-years">
      <div
        tabIndex={0}
        role="button"
        className="calendar-years-arrow"
        onClick={prevYear}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") prevYear();
        }}
      >
        <Left />
      </div>
      <div
        onClick={toggleYearPicker}
        className="calendar-years-current"
        role="button"
        tabIndex={0}
      >
        {dayjs(date).format("YYYY")}
      </div>
      <div
        onClick={nextYear}
        role="button"
        tabIndex={0}
        className="calendar-years-arrow"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") nextYear();
        }}
      >
        <Right />
      </div>
    </div>
  );
};

export default Years;
