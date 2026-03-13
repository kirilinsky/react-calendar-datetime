import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import clsx from "clsx"; 
import * as s from "@/styles/styles.css";
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
  const [shouldAnimate, setShouldAnimate] = useState(true);

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
    setShouldAnimate(false);
    const timer = setTimeout(() => setShouldAnimate(true), 50);
    return () => clearTimeout(timer);
  }, [localDate]);

  return (
    <div className={s.yearPicker} onContextMenu={goBack}>
      <button
        disabled={currentYear < 1925}
        onClick={() => setLocalDate(localDate.subtract(25, "y"))}
        className={s.yearPickerArrow}
      >
        <Left />
      </button>

      {yearsArray.map((x) => (
        <button
          key={x}
          disabled={x > 2100 || x < 1900}
          onClick={() => setYear(x)}
          className={clsx(s.yearItem, {
            [s.yearAnim]: shouldAnimate,
            [s.active]: currentYear === x,
          })}
          style={{ animationDelay: getDelay(x), animationIterationCount: 1 }}
        >
          {x}
        </button>
      ))}

      <button
        className={s.yearPickerArrow}
        disabled={currentYear > 2075}
        onClick={() => setLocalDate(localDate.add(25, "y"))}
      >
        <Right />
      </button>
    </div>
  );
};

export default YearPicker;
