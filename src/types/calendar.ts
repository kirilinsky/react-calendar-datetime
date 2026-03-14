import { LocaleKey } from "@/i18n/types";
import { CalendarTheme } from "./themes";

export interface CalendarProps {
  presets?: boolean;
  months?: boolean;
  years?: boolean;
  date?: Date | string | number;
  time?: boolean;
  locale?: LocaleKey;
  onChangeDate?: (date: Date) => void;
  width?: string | number | null;
  height?: string | number | null;
  theme?: CalendarTheme;
}
