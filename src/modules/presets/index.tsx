import dayjs, { Dayjs, ManipulateType } from "dayjs";
import React from "react";
import i18n, { LocaleKey, Translation } from "../../i18n";

interface PresetsProps {
  locale: LocaleKey;
  changeAction: (date: Dayjs) => void;
}

const PRESET_CONFIG: {
  key: keyof Translation;
  amount: number;
  unit: ManipulateType;
}[] = [
  { key: "t", amount: 0, unit: "day" },
  { key: "y", amount: 1, unit: "day" },
  { key: "wa", amount: 1, unit: "week" },
  { key: "ma", amount: 1, unit: "month" },
  { key: "ya", amount: 1, unit: "year" },
];

const Presets: React.FC<PresetsProps> = ({ locale, changeAction }) => {
  const voc = i18n[locale] || i18n["en"];

  const handlePresetClick = (amount: number, unit: ManipulateType) => {
    changeAction(dayjs().subtract(amount, unit).startOf("day"));
  };

  return (
    <div className="calendar-presets">
      {PRESET_CONFIG.map(({ key, amount, unit }) => (
        <div
          key={key}
          onClick={() => handlePresetClick(amount, unit)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ")
              handlePresetClick(amount, unit);
          }}
          tabIndex={0}
          role="button"
          className="calendar-presets-preset"
        >
          {voc[key]}
        </div>
      ))}
    </div>
  );
};

export default Presets;
