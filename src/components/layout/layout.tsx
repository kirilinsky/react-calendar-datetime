import { DaysComponent } from "../days/days";
import { HeaderComponent } from "../header/header";
import { MonthsComponent } from "../months/months";
import { PresetsComponent } from "../presets/presets";
import { SelectedDatesComponent } from "../selected-dates/selected-dates";
import { useCalendarContext } from "../provider/provider";
import { SelectorComponent } from "../selector/selector";
import { TimeComponent } from "../time/time";
import { TimePopup } from "../time-popup/time-popup";
import { getTwoMonthsNarrowThreshold } from "@/helpers/get-grid-layout";
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
    gradient,
    dark,
    showTimePopup,
    setShowTimePopup,
    date,
    onChangeDate,
    hour12,
    gestures,
    selectedDates,
    showSelectedDates,
    twoMonthsLayout,
    monthsColumn,
    containerWidth,
    locale,
    shortMonths,
  } = useCalendarContext();

  const nextMonthDate = twoMonthsLayout
    ? new Date(date.getFullYear(), date.getMonth() + 1, 1)
    : null;

  const twoMonthsStacked = !!twoMonthsLayout && (!!monthsColumn || (containerWidth > 0 && containerWidth < getTwoMonthsNarrowThreshold({ monthsGrid, timeGrid })));

  const nextMonthLabel = nextMonthDate
    ? new Intl.DateTimeFormat(locale, {
        month: shortMonths ? "short" : "long",
        year: "numeric",
      }).format(nextMonthDate)
    : null;

  const hasSelectedDates = !!showSelectedDates && selectedDates.length > 0;

  return (
    <div
      className={[
        styles.calendarContainer,
        gradient ? styles.gradient : "",
        dark ? styles.dark : "",
        brutalism ? styles.brutalism : "",
        twoMonthsLayout && !twoMonthsStacked ? styles.twoMonthsWide : "",
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
          gestures={gestures}
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
      <DaysComponent hideOtherMonths={!!twoMonthsLayout} />
      {twoMonthsStacked && nextMonthLabel && (
        <div style={{ gridArea: "LB" }} className={styles.secondMonthLabel}>
          {nextMonthLabel}
        </div>
      )}
      {nextMonthDate && <DaysComponent dateOverride={nextMonthDate} gridArea="D2" hideOtherMonths />}
      {monthsGrid && <MonthsComponent />}
      {timeGrid && <TimeComponent />}
      {hasSelectedDates && <SelectedDatesComponent />}
    </div>
  );
};
