import React, { useMemo, useState } from "react";
import { Left, Right } from "../../Icons";
import * as s from "./year-picker.styles";
import { setYear, addYears, getYearsRange } from "@/utils/date-utils";
import { activeItem } from "@/styles/shared.styles";
import { YearsProps } from "@/types/years";

const YearPicker: React.FC<YearsProps> = ({
  toggleYearPicker,
  date,
  changeAction,
}) => {
  const [loc, setLoc] = useState(date);
  const cur = loc.getFullYear();
  const years = useMemo(() => getYearsRange(cur, 25), [cur]);

  const nav = (v: number) => setLoc(addYears(loc, v));

  return (
    <div
      className={s.container}
      onContextMenu={(e) => (e.preventDefault(), toggleYearPicker())}
    >
      <button
        disabled={cur < 1925}
        onClick={() => nav(-25)}
        className={s.arrow}
      >
        <Left />
      </button>

      {years.map((y) => (
        <button
          key={y}
          disabled={y > 2050 || y < 1900}
          onClick={() => (changeAction(setYear(loc, y)), toggleYearPicker())}
          className={`${s.yearItem} ${y === date.getFullYear() ? activeItem : ""}`}
        >
          {y}
        </button>
      ))}

      <button disabled={cur > 2050} onClick={() => nav(25)} className={s.arrow}>
        <Right />
      </button>
    </div>
  );
};

export default YearPicker;
