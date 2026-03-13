import dayjs, { Dayjs } from "dayjs";

export interface DaysProps {
  date: Dayjs;
  changeAction: (date: Dayjs) => void;
  weekdays: dayjs.WeekdayNames | never[];
}
