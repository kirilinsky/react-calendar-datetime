import { DaysComponent } from "../days/days";
import { HeaderComponent } from "../header/header";
import { MonthsComponent } from "../months/months";
import { PresetsComponent } from "../presets/presets";
import { useCalendarContext } from "../provider/provider";
import { SelectorComponent } from "../selector/selector";
import { TimeComponent } from "../time/time";
import styles from "./layout.module.css";

export const CalendarLayout: React.FC<{
  theme: string;
  containerStyle: React.CSSProperties;
  brutalism: boolean;
}> = ({ theme, containerStyle, brutalism }) => {
  const {
    view,
    presets,
    years,
    compactMonths,
    compactYears,
    months,
    time,
    jellyMode,
    gradientBackground,
    dark,
  } = useCalendarContext();

  return (
    <div
      className={[
        styles.calendarContainer,
        `theme-${theme}`,
        !jellyMode ? styles.staticMode : "",
        gradientBackground ? styles.gradient : "",
        dark ? styles.dark : "",
        brutalism ? styles.brutalism : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={containerStyle}
    >
      {view !== "calendar" && <SelectorComponent type={view} />}
      {presets && <PresetsComponent />}
      {(years || compactMonths || compactYears) && <HeaderComponent />}
      <DaysComponent />
      {months && <MonthsComponent />}
      {time && <TimeComponent />}
    </div>
  );
};
