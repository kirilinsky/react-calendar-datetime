import React, { useState } from "react";
import { Calendar } from "../Calendar/Calendar";
import "./calendar.css";
import dayjs from "dayjs";
import classNames from "classnames";

export default {
  title: "Calendar React",
};

export const Base1 = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <>
      <h2>current time: {dayjs(date).format("DD.MM.YYYY")}</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "22px",
          display: "inline-block",
        }}
      >
        <Calendar date={date} onChangeDate={setDate} />
      </div>
    </>
  );
};

export const WithTimePicker = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <>
      <h2>current time: {dayjs(date).format("DD.MM.YYYY HH:mm")}</h2>
      <Calendar theme={"sandstone"} date={date} onChangeDate={setDate} time />
    </>
  );
};

export const WithPresets = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <>
      <h2>current time: {dayjs(date).format("DD.MM.YYYY")}</h2>
      <Calendar date={date} onChangeDate={setDate} presets />
    </>
  );
};

export const International = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <>
      <h2>current time: {dayjs(date).format("DD.MM.YYYY")}</h2>
      <Calendar date={date} locale="zh-cn" onChangeDate={setDate} presets />
    </>
  );
};
