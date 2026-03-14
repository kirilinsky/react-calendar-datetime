import React from "react";
import i18n from "@/i18n";
import * as s from "./presets.styles";
import { PRESET_CONFIG, PresetsProps, PresetUnit } from "@/types/presets";
import { getPresetDate } from "@/utils/date-utils";
import { LocaleKey } from "@/i18n/types";

const Presets: React.FC<PresetsProps> = ({ locale, changeAction }) => {
  const voc = i18n[locale as LocaleKey];

  const handlePresetClick = (amount: number, unit: PresetUnit) => {
    changeAction(getPresetDate(amount, unit));
  };

  return (
    <div className={s.container}>
      {PRESET_CONFIG.map(({ key, amount, unit }) => (
        <div
          key={key}
          onClick={() => handlePresetClick(amount, unit)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handlePresetClick(amount, unit);
            }
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
