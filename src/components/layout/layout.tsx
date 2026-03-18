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
}> = ({ theme, containerStyle }) => {
  const { view, presets, years, compactMonths, compactYears, months, time } =
    useCalendarContext();

  return (
    <div
      className={`${styles.calendarContainer} theme-${theme}`}
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
