import React from "react";
import { Left, Right } from "../../Icons";
import * as s from "./years.styles";
import { YearsProps } from "@/types/years";
import { addYears } from "@/utils/date-utils";

const Years: React.FC<YearsProps> = ({
  date,
  toggleYearPicker,
  changeAction,
}) => {
  const cur = date.getFullYear();
  const ch = (v: number) => changeAction(addYears(date, v));

  return (
    <div className={s.container}>
      <button className={s.arrow} onClick={() => ch(-1)}>
        <Left />
      </button>
      <button className={s.currentYear} onClick={toggleYearPicker}>
        {cur}
      </button>
      <button className={s.arrow} onClick={() => ch(1)}>
        <Right />
      </button>
    </div>
  );
};

export default Years;
