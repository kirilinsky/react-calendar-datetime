import { CalendarTheme } from "./themes";

export type StartOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface CalendarProps {
  date?: Date;
  minDate?: Date;
  maxDate?: Date;
  onChangeDate?: (date: Date) => void;
  locale?: string;
  theme?: CalendarTheme;
  width?: string | number;
  height?: string | number;
  startOfWeek?: StartOfWeek;
  time?: boolean;
  hour12?: boolean;
  timeGrid?: boolean;
  presets?: boolean;
  years?: boolean;
  months?: boolean;
  monthsGrid?: boolean;
  compactYears?: boolean;
  compactMonths?: boolean;
  brutalism?: boolean;
  gestures?: boolean;
  gradient?: boolean;
  highlightWeekends?: boolean;
  disableWeekends?: boolean;
  showWeekNumber?: boolean;
}

export type CalendarView = "calendar" | "month" | "year";

export interface CalendarContextValue extends CalendarProps {
  date: Date;
  locale: string;
  startOfWeek: StartOfWeek;
  time: boolean;
  presets: boolean;
  years: boolean;
  months: boolean;
  monthsGrid: boolean;
  compactMonths: boolean;
  onChangeDate: (date: Date) => void;
  dark: boolean;
  view: CalendarView;
  setView: (view: CalendarView) => void;
  showTimePopup: boolean;
  setShowTimePopup: (v: boolean) => void;
}
