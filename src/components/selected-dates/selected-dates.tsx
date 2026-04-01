import React from "react";
import styles from "./selected-dates.module.css";
import shared from "@/global/global.module.css";
import { useCalendarContext } from "../provider/provider";

export const SelectedDatesComponent: React.FC = () => {
  const { selectedDates, date, navigateTo, locale } = useCalendarContext();

  if (!selectedDates.length) return null;

  const fmt = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
  });

  return (
    <div className={styles.container} style={{ gridArea: "SD" }}>
      {selectedDates.map((d, i) => {
        const isActive =
          d.getFullYear() === date.getFullYear() &&
          d.getMonth() === date.getMonth() &&
          d.getDate() === date.getDate();
        return (
          <button
            key={i}
            type="button"
            onClick={() => navigateTo(d)}
            className={[
              styles.chip,
              shared.interactive,
              shared.hoverable,
              isActive ? shared.activeItem : styles.inactiveChip,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {fmt.format(d)}
          </button>
        );
      })}
    </div>
  );
};
