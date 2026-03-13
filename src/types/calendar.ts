import { LocaleKey } from "@/i18n";
import { Dayjs } from "dayjs";
import { CalendarTheme } from "./themes";

export interface CalendarProps {
  presets?: boolean;
  months?: boolean;
  date?: Date | string | number | Dayjs;
  time?: boolean;
  locale?: LocaleKey;
  onChangeDate?: (date: Date) => void;
  width?: string | number | null;
  height?: string | number | null;
  theme?: CalendarTheme;
}
