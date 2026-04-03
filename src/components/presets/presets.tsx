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
  const {
    monthsGrid,
    date,
    startDate,
    endDate,
    years,
    onChangeDate,
    locale,
    compactMonths,
    compactYears,
    months,
    disabled,
  } = useCalendarContext();

  const presets = useMemo(
    () =>
      getFilteredPresets(
        years || !!compactYears,
        monthsGrid || !!compactMonths || !!months,
        startDate,
        endDate,
        disabled,
      ),
    [
      years,
      months,
      monthsGrid,
      startDate,
      endDate,
      compactYears,
      compactMonths,
      disabled,
    ],
  );

  return (
    <div
      className={styles.presetsContainer}
      style={{ gridArea: "PP" }}
      data-count={presets.length}
    >
      {presets.map((preset) => {
        const isActive =
          preset.targetDate.toDateString() === date.toDateString();
        return (
          <button
            key={preset.id}
            type="button"
            className={[
              styles.presetItem,
              shared.interactive,
              shared.hoverable,
              isActive ? shared.activeItem : styles.inactiveItem,
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => onChangeDate(getPresetDate(preset, date, startDate, endDate))}
          >
            {getRelativeLabel(locale, preset.amount, preset.unit)}{" "}
          </button>
        );
      })}
    </div>
  );
};
