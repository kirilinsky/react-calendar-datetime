import React, { useMemo } from "react";
import { Left, Right } from "../../Icons";
import * as s from "./years.styles";
import { YearsProps } from "@/types/years";
import { addYears, isYearFixed } from "@/utils/date-utils";

const Years: React.FC<YearsProps> = ({
  date,
  toggleYearPicker,
  changeAction,
  minDate,
  maxDate,
}) => {
  const cur = date.getFullYear();

  const yearFixed = useMemo(
    () => isYearFixed(cur, minDate, maxDate),
    [cur, minDate, maxDate],
  );

  const canGoPrev = useMemo(() => {
    if (!minDate) return true;
    return cur > new Date(minDate).getFullYear();
  }, [cur, minDate]);

  const canGoNext = useMemo(() => {
    if (!maxDate) return true;
    return cur < new Date(maxDate).getFullYear();
  }, [cur, maxDate]);

  const ch = (v: number) => changeAction(addYears(date, v));

  return (
    <div className={s.container}>
      {canGoPrev && (
        <button className={s.arrow} onClick={() => ch(-1)}>
          <Left />
        </button>
      )}
      <button
        className={`${s.currentYear} ${yearFixed ? "static" : ""}`}
        onClick={yearFixed ? undefined : toggleYearPicker}
      >
        {cur}
      </button>
      {canGoNext && (
        <button className={s.arrow} onClick={() => ch(1)}>
          <Right />
        </button>
      )}
    </div>
  );
};

export default Years;
