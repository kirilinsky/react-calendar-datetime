import dayjs, { ManipulateType } from "dayjs";
import React from "react";
import i18n from "../../i18n";
import * as s from "./presets.styles";
import { PRESET_CONFIG, PresetsProps } from "@/types/presets";

const Presets: React.FC<PresetsProps> = ({ locale, changeAction }) => {
  const voc = i18n[locale] || i18n["en"];
  const handlePresetClick = (amount: number, unit: ManipulateType) => {
    changeAction(dayjs().subtract(amount, unit).startOf("day"));
  };

  return (
    <div className={s.container}>
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
          className={s.presetItem}
        >
          {voc[key]}
        </div>
      ))}
    </div>
  );
};

export default Presets;
