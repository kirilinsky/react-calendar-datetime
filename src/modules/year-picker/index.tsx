import React, { useEffect, useState, useMemo } from "react";
import { Left, Right } from "../../Icons";
import * as s from "./year-picker.styles";
import { YearsPickerProps } from "@/types/years";
import { setYear, addYears, getYearsRange } from "@/utils/date-utils";

const YearPicker: React.FC<YearsPickerProps> = ({
  toggleYearPicker,
  date,
  changeAction,
}) => {
  const [localDate, setLocalDate] = useState<Date>(date);
  const [isAnimating, setIsAnimating] = useState(true);

  const currentYear = date.getFullYear();

  const yearsArray = useMemo(() => {
    return getYearsRange(currentYear, 25);
  }, [currentYear]);

  const handleSetYear = (year: number) => {
    changeAction(setYear(localDate, year));
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
        onClick={() => setLocalDate(addYears(localDate, -25))}
        className={s.arrow}
      >
        <Left />
      </button>

      {yearsArray.map((year) => {
        const isActive = year === date.getFullYear();
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
        disabled={currentYear > 2050}
        onClick={() => setLocalDate(addYears(localDate, 25))}
      >
        <Right />
      </button>
    </div>
  );
};

export default YearPicker;
