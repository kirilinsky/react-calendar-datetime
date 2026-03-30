import { CalendarTheme } from "./themes";

export type StartOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DisabledRule =
  | boolean
  | Date
  | Date[]
  | { from: Date; to: Date }
  | { dayOfWeek: number[] }
  | { before?: Date; after?: Date };

export interface CalendarProps {
  date?: Date;
  startDate?: Date;
  endDate?: Date;
  startMonth?: Date;
  onChangeDate?: (date: Date | null) => void;
  locale?: string;
  theme?: CalendarTheme;
  width?: string | number;
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
  showWeekNumber?: boolean;
  hideLimited?: boolean;
  hideWeekdays?: boolean;
  shortMonths?: boolean;
  disabled?: DisabledRule;
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
  onChangeDate: (date: Date | null) => void;
  selectedDate: Date | null;
  dark: boolean;
  view: CalendarView;
  setView: (view: CalendarView) => void;
  showTimePopup: boolean;
  setShowTimePopup: (v: boolean) => void;
}
