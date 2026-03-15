import { CalendarTheme } from "./themes";

export type LocaleKey = "en" | "en-US" | "de" | "zh-CN" | (string & {});

export interface CalendarProps {
  presets?: boolean;
  months?: boolean;
  years?: boolean;
  date?: Date;
  time?: boolean;
  locale?: LocaleKey;
  maxDate?: Date;
  minDate?: Date;
  onChangeDate?: (date: Date) => void;
  width?: string | number | null;
  height?: string | number | null;
  theme?: CalendarTheme;
}
