import React, { useMemo } from "react";
import styles from "./presets.module.css";
import { useCalendarContext } from "../provider/provider";
import {
  getFilteredPresets,
  getPresetDate,
  getRelativeLabel,
} from "@/utils/date-utils";

export const PresetsComponent: React.FC = () => {
  const { months, minDate, maxDate, years, onChangeDate, locale } =
    useCalendarContext();

  const presets = useMemo(
    () => getFilteredPresets(years, months, minDate, maxDate),
    [years, months, minDate, maxDate],
  );

  return (
    <div className={styles.presetsContainer}>
      {presets.map((preset) => (
        <button
          key={preset.id}
          type="button"
          className={styles.presetItem}
          onClick={() => onChangeDate(getPresetDate(preset))}
        >
          {getRelativeLabel(locale, preset.amount, preset.unit)}{" "}
        </button>
      ))}
    </div>
  );
};
