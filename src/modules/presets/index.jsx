import moment from "moment";
import React from "react";
import i18n from "../../i18n";
const presetsData = [
  {
    id: 1,
    title: "t",
    func: (cb) => {
      cb(moment());
    },
  },
  {
    id: 2,
    title: "y",
    func: (cb) => {
      cb(moment().subtract(1, "d"));
    },
  },
  {
    id: 3,
    title: "wa",
    func: (cb) => {
      cb(moment().subtract(1, "w"));
    },
  },
  {
    id: 4,
    title: "ma",
    func: (cb) => {
      cb(moment().subtract(1, "M"));
    },
  },
  {
    id: 0,
    title: "ya",
    func: (cb) => {
      cb(moment().subtract(1, "y"));
    },
  },
];

const Presets = ({ locale, changeAction }) => {
  let voc = i18n[locale || "en-gb"];
  return (
    <div className="calendar-presets">
      {presetsData.map(({ id, title, func }) => (
        <div
          key={id}
          onClick={() => func(changeAction)}
          className={"calendar-presets-preset"}
        >
          {voc[title]}
        </div>
      ))}
    </div>
  );
};

export default Presets;
