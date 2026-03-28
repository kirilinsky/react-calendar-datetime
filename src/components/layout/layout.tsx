import { DaysComponent } from "../days/days";
import { HeaderComponent } from "../header/header";
import { MonthsComponent } from "../months/months";
import { PresetsComponent } from "../presets/presets";
import { useCalendarContext } from "../provider/provider";
import { SelectorComponent } from "../selector/selector";
import { TimeComponent } from "../time/time";
import { TimePopup } from "../time-popup/time-popup";
import styles from "./layout.module.css";
import "../../themes.css";

export const CalendarLayout: React.FC<{
  containerStyle: React.CSSProperties;
  brutalism: boolean;
}> = ({ containerStyle, brutalism }) => {
  const {
    view,
    presets,
    years,
    months,
    compactMonths,
    compactYears,
    monthsGrid,
    timeGrid,
    time,
    jellyMode,
    gradient,
    dark,
    showTimePopup,
    setShowTimePopup,
    date,
    onChangeDate,
    hour12,
  } = useCalendarContext();

  return (
    <div
      className={[
        styles.calendarContainer,
        !jellyMode ? styles.staticMode : "",
        gradient ? styles.gradient : "",
        dark ? styles.dark : "",
        brutalism ? styles.brutalism : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={containerStyle}
    >
      {view !== "calendar" && <SelectorComponent type={view} />}
      {showTimePopup && (
        <TimePopup
          date={date}
          hour12={hour12}
          onConfirm={(newDate) => {
            onChangeDate(newDate);
            setShowTimePopup(false);
          }}
          onClose={() => setShowTimePopup(false)}
        />
      )}
      {presets && <PresetsComponent />}
      {(years || compactMonths || compactYears || time || months) && (
        <HeaderComponent />
      )}
      <DaysComponent />
      {monthsGrid && <MonthsComponent />}
      {timeGrid && <TimeComponent />}
    </div>
  );
};
