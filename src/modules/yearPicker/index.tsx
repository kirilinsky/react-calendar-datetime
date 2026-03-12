import React, { useEffect, useState } from "react";
import clsx from "clsx";
import dayjs, { Dayjs } from "dayjs";
import { Left, Right } from "../../Icons";

interface YearsPickerProps {
  toggleYearPicker: () => void;
  date: Dayjs;
  changeAction: (date: Dayjs) => void;
}

const YearPicker: React.FC<YearsPickerProps> = ({
  toggleYearPicker,
  date,
  changeAction,
}) => {
  const [localDate, setLocalDate] = useState<Dayjs>(dayjs(date));
  const [year_anim, setAnim] = useState(true);

  const currentYear = localDate.year();

  const yearsArray = Array.from({ length: 25 }, (_, i) => currentYear - 12 + i);

  const goBack = (e?: React.MouseEvent) => {
    e?.preventDefault();
    changeAction(dayjs(localDate));
    toggleYearPicker();
  };

  const setYear = (year: number) => {
    changeAction(dayjs(localDate).year(year));
    toggleYearPicker();
  };

  const getDelay = (year: number) => {
    return `${((Math.abs(currentYear - year) * 0.1) / 2).toFixed(2)}s`;
  };

  useEffect(() => {
    setAnim(false);
    const timer = setTimeout(() => setAnim(true), 50);
    return () => clearTimeout(timer);
  }, [localDate]);

  return (
    <div className="calendar-yearPicker" onContextMenu={goBack}>
      <button
        disabled={currentYear < 1925}
        onClick={() => setLocalDate(localDate.subtract(25, "y"))}
        className="calendar-yearPicker-arrow"
      >
        <Left />
      </button>

      {yearsArray.map((x) => (
        <button
          key={x}
          disabled={x > 2100 || x < 1900}
          onClick={() => setYear(x)}
          className={clsx("calendar-yearPicker-year", {
            year_anim,
            calendar_active: currentYear === x,
          })}
          style={{ animationDelay: getDelay(x), animationIterationCount: 1 }}
        >
          {x}
        </button>
      ))}

      <button
        className="calendar-yearPicker-arrow"
        disabled={currentYear > 2075}
        onClick={() => setLocalDate(localDate.add(25, "y"))}
      >
        <Right />
      </button>
    </div>
  );
};

export default YearPicker;
