import classNames from "classnames";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Left, Right } from "../../Icons";

const YearsPicker = ({ toggleYearsPicker, date, changeAction }) => {
  const [yearsArray, setYearsArray] = useState([]);
  const [localDate, setLocalDate] = useState(0);
  const [year_anim, setAnim] = useState(true);

  const goBack = (e = null) => {
    e && e.preventDefault();

    changeAction(moment(localDate));
    toggleYearsPicker();
  };

  const setYear = (year) => {
    changeAction(moment(localDate).year(year));
    toggleYearsPicker();
  };

  const getDelay = (year) => {
    return `
    ${((Math.abs(+moment(localDate).format("YYYY") - year) * 0.1) / 2).toFixed(
      2
    )}s`;
  };

  useEffect(() => {
    setLocalDate(moment(date));
  }, [date]);

  useEffect(() => {
    setYearsArray(
      new Array(25)
        .fill(+moment(localDate).format("YYYY") - 12)
        .map((x, i) => x + i)
    );
    setAnim(false);
    setTimeout(() => {
      setAnim(true);
    }, 50);
  }, [localDate]);

  return (
    <div className="calendar-yearspicker" onContextMenu={goBack}>
      <button
        disabled={+moment(localDate).format("YYYY") < 1925}
        onClick={() => setLocalDate(moment(localDate).subtract(25, "y"))}
        className="calendar-yearspicker-arrow"
      >
        {Left()}
      </button>
      {yearsArray &&
        yearsArray.map((x) => (
          <button
            key={x}
            disabled={x > 2100 || x < 1900}
            onClick={() => setYear(x)}
            className={classNames("calendar-yearspicker-year", {
              year_anim,
              calendar_active: +moment(localDate).format("YYYY") === x,
            })}
            style={{ animationDelay: getDelay(x), animationIterationCount: 1 }}
          >
            {x}
          </button>
        ))}
      <button
        className="calendar-yearspicker-arrow"
        disabled={+moment(localDate).format("YYYY") > 2075}
        onClick={() => setLocalDate(moment(localDate).add(25, "y"))}
      >
        {Right()}
      </button>
    </div>
  );
};

export default YearsPicker;
