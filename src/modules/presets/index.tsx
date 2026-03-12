import dayjs, { Dayjs } from "dayjs";
import React from "react";
import i18n from "../../i18n";

interface PresetItem {
  id: number;
  title: string;
  func: (cb: (date: Dayjs) => void) => void;
}

const presetsData: PresetItem[] = [
  {
    id: 1,
    title: "t",
    func: (cb) => cb(dayjs()),
  },
  {
    id: 2,
    title: "y",
    func: (cb) => cb(dayjs().subtract(1, "d")),
  },
  {
    id: 3,
    title: "wa",
    func: (cb) => cb(dayjs().subtract(1, "w")),
  },
  {
    id: 4,
    title: "ma",
    func: (cb) => cb(dayjs().subtract(1, "M")),
  },
  {
    id: 0,
    title: "ya",
    func: (cb) => cb(dayjs().subtract(1, "y")),
  },
];
interface PresetsProps {
  locale: string;
  date: Date | string | number | Dayjs;
  changeAction: (date: Dayjs) => void;
}

const Presets: React.FC<PresetsProps> = ({ locale, changeAction }) => {
  const voc = i18n[(locale as keyof typeof i18n) || "en-gb"] || i18n["en-gb"];

  return (
    <div className="calendar-presets">
      {presetsData.map(({ id, title, func }) => (
        <div
          key={id}
          onClick={() => func(changeAction)}
          tabIndex={0}
          role="button"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") func(changeAction);
          }}
          className="calendar-presets-preset"
        >
          {voc ? voc[title as keyof typeof voc] : title}
        </div>
      ))}
    </div>
  );
};

export default Presets;
