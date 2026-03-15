import React, { useMemo, useState } from "react";
import { Left, Right } from "../../Icons";
import * as s from "./year-picker.styles";
import {
  setYear,
  addYears,
  getYearsRange,
  getYearListData,
} from "@/utils/date-utils";
import { activeItem } from "@/styles/shared.styles";
import { YearsProps } from "@/types/years";

const YearPicker: React.FC<YearsProps> = ({
  toggleYearPicker,
  date,
  changeAction,
  minDate,
  maxDate,
}) => {
  const [loc, setLoc] = useState(date);
  const cur = loc.getFullYear();
  const yearsData = useMemo(
    () => getYearListData(cur, minDate, maxDate, 25),
    [cur, minDate, maxDate],
  );
  const canGoPrev =
    !minDate || yearsData[0].value > new Date(minDate).getFullYear();
  const canGoNext =
    !maxDate ||
    yearsData[yearsData.length - 1].value < new Date(maxDate).getFullYear();

  const nav = (v: number) => setLoc(addYears(loc, v));

  return (
    <div
      className={s.container}
      onContextMenu={(e) => (e.preventDefault(), toggleYearPicker())}
    >
      <button
        disabled={cur < 1925 || !canGoPrev}
        onClick={() => nav(-25)}
        className={s.arrow}
      >
        <Left />
      </button>
      {yearsData.map(({ value, disabled }) => (
        <button
          key={value}
          disabled={value > 2050 || value < 1900 || disabled}
          onClick={() => (
            changeAction(setYear(loc, value)),
            toggleYearPicker()
          )}
          className={`${s.yearItem} ${value === date.getFullYear() ? activeItem : ""}`}
        >
          {value}
        </button>
      ))}
      <button
        disabled={cur > 2050 || !canGoNext}
        onClick={() => nav(25)}
        className={s.arrow}
      >
        <Right />
      </button>
    </div>
  );
};

export default YearPicker;
