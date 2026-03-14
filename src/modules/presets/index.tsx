import React, { useEffect, useState } from "react";
import i18n from "@/i18n";
import * as s from "./presets.styles";
import {
  PRESET_CONFIG,
  PresetItem,
  PresetsProps,
  PresetUnit,
} from "@/types/presets";
import { getPresetDate } from "@/utils/date-utils";
import { LocaleKey } from "@/i18n/types";

const Presets: React.FC<PresetsProps> = ({
  locale,
  changeAction,
  years,
  months,
}) => {
  const voc = i18n[locale as LocaleKey];
  const [presets, setPresets] = useState<PresetItem[]>([]);

  const handlePresetClick = (amount: number, unit: PresetUnit) => {
    changeAction(getPresetDate(amount, unit));
  };

  useEffect(() => {
    const forbiddenUnits: PresetUnit[] = [];

    if (!months) forbiddenUnits.push("month", "week");
    if (!years) forbiddenUnits.push("year");

    const filtered = PRESET_CONFIG.filter(
      (preset) => !forbiddenUnits.includes(preset.unit),
    );

    setPresets(filtered);
  }, [years, months]);

  return (
    <div className={s.container}>
      {presets.map(({ key, amount, unit }) => (
        <button
          key={key}
          type="button"
          className={s.presetItem}
          onClick={() => handlePresetClick(amount, unit)}
        >
          {voc[key]}
        </button>
      ))}
    </div>
  );
};

export default Presets;
