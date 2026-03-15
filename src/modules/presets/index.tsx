import React, { useMemo } from "react";
import * as s from "./presets.styles";
import { PresetItem, PresetsProps } from "@/types/presets";
import {
  getFilteredPresets,
  getPresetDate,
  getRelativeLabel,
} from "@/utils/date-utils";

const Presets: React.FC<PresetsProps> = ({
  locale,
  changeAction,
  years,
  months,
  minDate,
  maxDate,
}) => {
  const presets = useMemo(
    () => getFilteredPresets(years, months, minDate, maxDate),
    [years, months, minDate, maxDate],
  );

  const handlePresetClick = (preset: PresetItem) => {
    changeAction(getPresetDate(preset));
  };

  return (
    <div className={s.container}>
      {presets.map((preset) => (
        <button
          key={preset.id}
          type="button"
          className={s.presetItem}
          onClick={() => handlePresetClick(preset)}
        >
          {getRelativeLabel(locale, preset.amount, preset.unit)}{" "}
        </button>
      ))}
    </div>
  );
};

export default Presets;
