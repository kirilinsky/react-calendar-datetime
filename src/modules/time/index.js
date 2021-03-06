import React, { useEffect, useState } from "react";
import moment from "moment";
import { Down, Up } from "../../Icons";
const Time = ({ date, changeAction }) => {
  const [hour, setHour] = useState(+moment(date).format("HH"));
  const [minute, setMinute] = useState(+moment(date).format("mm"));

  const addDiff = (value, type) => {
    changeAction(moment(date).add(value, type));
  };

  const subtractDiff = (value, type) => {
    changeAction(moment(date).subtract(value, type));
  };

  const scrollHandle = ({ deltaY }, type) => {
    /* up */
    if (deltaY < 0) {
      changeAction(moment(date).subtract(1, type));
    } else {
      changeAction(moment(date).add(1, type));
    }
  };
  useEffect(() => {
    setHour(moment(date).format("HH"));
    setMinute(moment(date).format("mm"));
  }, [date]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandle);

    return () => {
      document.removeEventListener("scroll", scrollHandle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="calendar-time">
      <div
        className="calendar-time-half hours"
        onWheel={(e) => scrollHandle(e, "H")}
      >
        <div
          className="calendar-time-half-cell"
          onClick={() => subtractDiff(1, "H")}
        >
          {Up()}
        </div>
        <div
          onClick={() => subtractDiff(2, "H")}
          className="calendar-time-half-cell"
        >
          {moment(date).subtract(2, "H").format("HH")}
        </div>
        <div
          onClick={() => subtractDiff(1, "H")}
          className="calendar-time-half-cell"
        >
          {moment(date).subtract(1, "H").format("HH")}
        </div>
        <div className="calendar-time-half-cell dividerhour">{hour}</div>
        <div
          onClick={() => addDiff(1, "H")}
          className="calendar-time-half-cell"
        >
          {moment(date).add(1, "H").format("HH")}
        </div>
        <div
          onClick={() => addDiff(2, "H")}
          className="calendar-time-half-cell"
        >
          {moment(date).add(2, "H").format("HH")}
        </div>
        <div
          className="calendar-time-half-cell"
          onClick={() => addDiff(1, "H")}
        >
          {Down()}
        </div>
      </div>
      <div className="calendar-time-half" onWheel={(e) => scrollHandle(e, "m")}>
        <div
          className="calendar-time-half-cell"
          onClick={() => subtractDiff(1, "m")}
        >
          {Up()}
        </div>
        <div
          onClick={() => subtractDiff(2, "m")}
          className="calendar-time-half-cell"
        >
          {moment(date).subtract(2, "m").format("mm")}
        </div>
        <div
          onClick={() => subtractDiff(1, "m")}
          className="calendar-time-half-cell"
        >
          {moment(date).subtract(1, "m").format("mm")}
        </div>
        <div className="calendar-time-half-cell">{minute}</div>
        <div
          onClick={() => addDiff(1, "m")}
          className="calendar-time-half-cell"
        >
          {moment(date).add(1, "m").format("mm")}
        </div>
        <div
          onClick={() => addDiff(2, "m")}
          className="calendar-time-half-cell"
        >
          {moment(date).add(2, "m").format("mm")}
        </div>
        <div
          onClick={() => addDiff(1, "m")}
          className="calendar-time-half-cell"
        >
          {Down()}
        </div>
      </div>
    </div>
  );
};

export default Time;
