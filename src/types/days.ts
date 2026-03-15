export interface DaysProps {
  date: Date;
  changeAction: (date: Date) => void;
  weekdays: string[];
  minDate?: Date;
  maxDate?: Date;
}
