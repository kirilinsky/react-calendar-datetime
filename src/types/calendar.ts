import { CalendarTheme } from "./themes";

export type StartOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface CalendarProps {
  presets?: boolean;
  monthsGrid?: boolean;
  months?: boolean;
  years?: boolean;
  date?: Date;
  time?: boolean;
  locale?: string;
  maxDate?: Date;
  minDate?: Date;
  jellyMode?: boolean;
  brutalism?: boolean
  highlightWeekends?: boolean;
  disableWeekends?: boolean;
  showWeekNumber?: boolean;
  gradient?: boolean;
  gestures?: boolean;
  startOfWeek?: StartOfWeek;
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
  monthsGrid: boolean;
  presets: boolean;
  compactMonths: boolean;
  years: boolean;
  time: boolean;
  dark: boolean;
  view: CalendarView;
  startOfWeek: StartOfWeek;
  setView: (view: CalendarView) => void;
}
