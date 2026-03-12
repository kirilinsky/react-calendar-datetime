import React from 'react';
import { Dayjs } from 'dayjs';

interface CalendarProps {
    presets?: boolean;
    date?: Date | string | number | Dayjs;
    time?: boolean;
    locale?: string;
    onChangeDate?: (date: Date) => void;
    width?: string | number | null;
    height?: string | number | null;
    dark?: boolean;
}
declare const Calendar: React.FC<CalendarProps>;

export { Calendar, type CalendarProps };
