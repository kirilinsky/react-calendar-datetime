import React, { useEffect, useState, useMemo } from "react";
import { Dayjs } from "dayjs";
import { Left, Right } from "../../Icons";
import * as s from "./year-picker.styles";
import { YearsPickerProps } from "@/types/years";

const YearPicker: React.FC<YearsPickerProps> = ({
  toggleYearPicker,
  date,
  changeAction,
}) => {
  const [localDate, setLocalDate] = useState<Dayjs>(date);
  const [isAnimating, setIsAnimating] = useState(true);

  const currentYear = localDate.year();

  const yearsArray = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => currentYear - 12 + i);
  }, [currentYear]);

  const handleSetYear = (year: number) => {
    changeAction(localDate.year(year));
    toggleYearPicker();
  };

  const handleGoBack = (e?: React.MouseEvent) => {
    e?.preventDefault();
    toggleYearPicker();
  };

  useEffect(() => {
    setIsAnimating(false);
    const timer = setTimeout(() => setIsAnimating(true), 10);
    return () => clearTimeout(timer);
  }, [currentYear]);

  return (
    <div className={s.container} onContextMenu={handleGoBack}>
      <button
        disabled={currentYear < 1925}
        onClick={() => setLocalDate(localDate.subtract(25, "y"))}
        className={s.arrow}
      >
        <Left />
      </button>

      {yearsArray.map((year) => {
        const isActive = year === currentYear;
        const delay = `${((Math.abs(currentYear - year) * 0.1) / 2).toFixed(2)}s`;

        return (
          <button
            key={year}
            disabled={year > 2100 || year < 1900}
            onClick={() => handleSetYear(year)}
            className={`${s.yearItem} ${isAnimating ? "animating" : ""} ${isActive ? s.active : ""}`}
            style={{ animationDelay: delay }}
          >
            {year}
          </button>
        );
      })}

      <button
        className={s.arrow}
        disabled={currentYear > 2075}
        onClick={() => setLocalDate(localDate.add(25, "y"))}
      >
        <Right />
      </button>
    </div>
  );
};

export default YearPicker;
