import { CalendarTheme } from "./themes";

export type LocaleKey = "en" | "en-US" | "de" | "zh-CN" | (string & {});

export interface CalendarProps {
  presets?: boolean;
  months?: boolean;
  years?: boolean;
  date?: Date; //default - today
  time?: boolean;
  locale?: LocaleKey;
  maxDate?: Date;
  minDate?: Date;
  disabledDates?: Date | Date[];
  disableWeekends?: boolean;
  startOfWeek?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  compactMonths?: boolean;
  onChangeDate?: (date: Date) => void;
  width?: string | number | null;
  height?: string | number | null;
  theme?: CalendarTheme;
}

export interface CalendarContextValue extends Omit<
  CalendarProps,
  "presets" | "width" | "height" | "theme" | "date" | "onChangeDate"
> {
  selectedDate: Date | null;
  viewDate: Date;
  setSelectedDate: (date: Date) => void;
  setViewDate: (date: Date) => void;
}
