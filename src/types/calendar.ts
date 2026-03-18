import { CalendarTheme } from "./themes";

export interface CalendarProps {
  presets?: boolean;
  months?: boolean;
  years?: boolean;
  date?: Date;
  time?: boolean;
  locale?: string;
  maxDate?: Date;
  minDate?: Date;
  disabledDates?: Date | Date[];
  highlightWeekends?: boolean;
  disableWeekends?: boolean;
  gestures?: boolean;
  startOfWeek?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  compactYears?: boolean;
  compactMonths?: boolean;
  onChangeDate?: (date: Date) => void;
  width?: string | number;
  height?: string | number;
  theme?: CalendarTheme;
}

export type CalendarView = "calendar" | "month" | "year";

export interface CalendarContextValue extends Omit<
  CalendarProps,
  "width" | "height" | "theme"
> {
  date: Date;
  locale: string;
  onChangeDate: (date: Date) => void;
  months: boolean;
  presets: boolean;
  compactMonths: boolean;
  years: boolean;
  time: boolean;
  dark: boolean;
  view: CalendarView;
  setView: (view: CalendarView) => void;
}
