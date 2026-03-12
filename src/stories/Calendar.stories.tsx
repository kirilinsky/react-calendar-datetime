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
          padding: "20px",
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
      <Calendar date={date} onChangeDate={setDate} time />
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

export const DarkTheme = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [dark, setDark] = useState(true);

  return (
    <div
      className={classNames("wrap", { dark })}
      style={{
        padding: "20px",
        background: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#000",
      }}
    >
      <div className="control">
        <label>
          Dark Mode:
          <input
            type="checkbox"
            checked={dark}
            onChange={(e) => setDark(e.target.checked)}
          />
        </label>
      </div>
      <h2>current time: {dayjs(date).format("DD.MM.YYYY")}</h2>
      <Calendar
        width="70%"
        date={date}
        dark={dark}
        onChangeDate={setDate}
        presets
      />
    </div>
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
