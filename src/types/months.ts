import { Dayjs } from "dayjs";

export interface MonthsProps {
  date: Dayjs;
  changeAction: (date: Dayjs) => void;
  monthsNames: string[];
}
