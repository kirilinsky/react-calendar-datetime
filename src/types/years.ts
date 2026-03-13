import { Dayjs } from "dayjs";

export interface YearsProps {
  date: Date | string | number | Dayjs;
  toggleYearPicker: () => void;
  changeAction: (date: Dayjs) => void;
}

export interface YearsPickerProps {
  toggleYearPicker: () => void;
  date: Dayjs;
  changeAction: (date: Dayjs) => void;
}
