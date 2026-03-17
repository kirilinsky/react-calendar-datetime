import React, { useMemo } from "react";
import styles from "./presets.module.css";
import { useCalendarContext } from "../provider/provider";
import {
  getFilteredPresets,
  getPresetDate,
  getRelativeLabel,
} from "@/utils/date-utils";
import shared from "@/global/global.module.css";

export const PresetsComponent: React.FC = () => {
  const { months, date, minDate, maxDate, years, onChangeDate, locale } =
    useCalendarContext();

  const presets = useMemo(
    () => getFilteredPresets(years, months, minDate, maxDate),
    [years, months, minDate, maxDate],
  );
  {
    console.log(presets, "sdf");
  }

  return (
    <div className={styles.presetsContainer}>
      {presets.map((preset) => {
        const isActive =
          preset.targetDate.toDateString() === date.toDateString();
        return (
          <button
            key={preset.id}
            type="button"
            className={`${styles.presetItem} ${isActive ? shared.activeItem : ""}`}
            onClick={() => onChangeDate(getPresetDate(preset))}
          >
            {getRelativeLabel(locale, preset.amount, preset.unit)}{" "}
          </button>
        );
      })}
    </div>
  );
};
