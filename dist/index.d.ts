import React from 'react';
import { Dayjs } from 'dayjs';

type CalendarTheme = "light" | "dark" | "midnight" | "sandstone" | "mint_blue";

type LocaleKey = "ru" | "en" | "ua" | "de" | "zh-cn" | "fr" | "es" | "sr";

interface CalendarProps {
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
declare const Calendar: React.FC<CalendarProps>;

export { Calendar, type CalendarProps };
