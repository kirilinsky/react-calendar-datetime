import moment from "moment";
import React from "react";
import left from "./assets/left-arrow.svg";
import right from "./assets/right-arrow.svg";
const Years = ({ date, changeAction }) => {
  const prevYear = () => {
    changeAction(moment(date).subtract(1, "Y"));
  };

  const nextYear = () => {
    changeAction(moment(date).add(1, "Y"));
  };
  return (
    <div className="calendar-years">
      <div
        tabIndex="0"
        role="button"
        className="calendar-years-arrow"
        onClick={prevYear}
      >
        <img src={left} alt="left arrow" />
      </div>
      <div className="calendar-years-current">
        {moment(date).format("YYYY")}
      </div>
      <div
        onClick={nextYear}
        role="button"
        tabIndex="0"
        className="calendar-years-arrow"
      >
        <img src={right} alt="right arrow" />
      </div>
    </div>
  );
};

export default Years;
