import classNames from "classnames";
import moment from "moment";
import React, { useEffect, useState } from "react";
const Days = ({ date, changeAction }) => {
  const [countDays, setCountDays] = useState([]);

  const setDay = (day) => {
    if (day === moment(date).date()) {
      return;
    }
    changeAction(moment(date).set("date", day));
  };

  useEffect(() => {
    let count = moment(date).daysInMonth();
    setCountDays(Array.from({ length: count }, (x, i) => i + 1));
  }, [date]);
  return (
    <div className="calendar-days">
      {countDays.map((x) => (
        <div
          key={x}
          onClick={() => {
            setDay(x);
          }}
          tabIndex="0"
          role="button"
          className={classNames("calendar-days-day", {
            calendar_active: moment(date).date() === x,
          })}
        >
          {x}
        </div>
      ))}
    </div>
  );
};

export default Days;
